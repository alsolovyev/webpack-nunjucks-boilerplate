/**
 * Class representing a custom cursor element
 *
 * @version 2.0.0
 * @author janeRivas <solovyev.a@icloud.com>
 * @license MIT
 */
class Cursor {
  /**
   * @param {String} [className='cursor'] - the class name of the cursor element
   * @param {String|Number} [size=10] - the size of the cursor element
   * @param {String} [color='currentColor'] - the background color of the cursor element
   * @param {Number|String} [factor=0.1] - the interpolation value (is clamped to the range [0, 1])
   * @param {String} [audio=''] - the URL of an audio file
   */
  constructor({ className, size, color, factor, audio }) {
    // Prevent Cursor creation on touchscreens
    if (this.isTouchDevice()) return {}

    // Allow only one Cursor instance to be created
    if (Cursor.instance instanceof Cursor) return Cursor.instance
    Cursor.instance = this

    // State
    this._className = className || 'cursor'
    this._state = this._getStates()
    this._element = null
    this._position = {
      current: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      next: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    }
    this._factor = this.clamp(factor || 0.1, 0, 1)
    this._raf = null
    this._audio = this._createAudioEffect(audio || '')

    // Initialization
    this._bind()
    this._create()
    this._setState('HIDDEN')
    this._stylize(size || 10, color || 'currentColor')
    this._insert()
    this._update()
    this._setState('DEFAULT')
    this._addEventListeners()
  }

  /** Creates a cursor element */
  _create() {
    this._element = document.createElement('div')
  }

  /**
   * Adds cursor styles to the page.
   * @param {String|Number} [size=10] - the size of the cursor element
   * @param {String} [color='currentColor'] - the background color of the cursor element
   */
  _stylize(size, color) {
    const styleElement = document.createElement('style')
    document.head.appendChild(styleElement)

    styleElement.sheet.insertRule(`.${this._className} {
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      margin: -${size / 2}px 0 0 -${size / 2}px;
      border-radius: 50%;
      background: ${color};
      pointer-events: none;
      user-select: none;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      transition: opacity 300ms, -webkit-transform 300ms;
      transition: transform 300ms, opacity 300ms;
      transition: transform 300ms, opacity 300ms, -webkit-transform 300ms;
    }`)

    styleElement.sheet.insertRule(`.${this._className}--is-pressed {
      -webkit-transform: scale3d(3, 3, 3);
              transform: scale3d(3, 3, 3);
      opacity: 0.1;
    }`)

    styleElement.sheet.insertRule(`.${this._className}--is-hidden {
      -webkit-transform: scale3d(0, 0, 0);
              transform: scale3d(0, 0, 0);
      opacity: 0;
    }`)
  }

  /**
   * Adds the created cursor element to the page or to the passed container.
   * @param {HTMLElement} [container=document.body] - the cursor container
   */
  _insert(container = document.body) {
    container.insertAdjacentElement('beforeEnd', this._element)
  }

  /**
   * Creates cursor states.
   * @returns {Object} possible cursor states
   */
  _getStates() {
    const states = Object.create(null)

    states['CURRENT'] = ''
    states['DEFAULT'] = this._className
    states['HIDDEN'] = `${this._className} ${this._className}--is-hidden`
    states['PRESSED'] = `${this._className} ${this._className}--is-pressed`

    return states
  }

  /**
   * Sets the state of the cursor.
   * @param {String=} name - the name of the cursor state
   */
  _setState(name) {
    if (name === this._state['CURRENT'] || !this._state[name]) return

    this._element.className = this._state[name]
    this._state['CURRENT'] = name
  }

  /** Calculates the position of the cursor */
  _calculatePosition() {
    this._position.current.x = this.lerp(
      this._position.current.x,
      this._position.next.x,
      this._factor
    )
    this._position.current.y = this.lerp(
      this._position.current.y,
      this._position.next.y,
      this._factor
    )
  }

  /** Updates the cursor position */
  _updatePosition() {
    this._element.style.left = `${this._position.current.x}px`
    this._element.style.top = `${this._position.current.y}px`
  }

  /** RAF */
  _update() {
    this._calculatePosition()
    this._updatePosition()

    this._raf = window.requestAnimationFrame(this._update)
  }

  /**
   * @typedef {Object} Audio
   * @property {Function} setVolume - sets the volume of the audio file
   * @property {Function} play - plays the audio file
   */

  /**
   * Creates an interface for managing an audio file.
   * @param {String} [url] - the URL of an audio file
   * @param {String|Number} [volume=1] - the volume of the audio file
   * @returns {Audio}
   */
  _createAudioEffect(url, volume) {
    const audio = new Audio(url)
    audio.volume = volume || 1

    return {
      setVolume: volume => (audio.volume = volume),
      play: () => audio.play().catch(() => {})
    }
  }

  /**
   * Handles mouse move event.
   * @param {MouseEvent}
   */
  _onMouseMove({ clientX, clientY }) {
    this._position.next.x = clientX
    this._position.next.y = clientY
  }

  /**
   * Handles mouse over event.
   * @param {MouseEvent}
   */
  _onMouseOver({ target }) {
    if (target.tagName !== 'A') return

    this._audio.play()
  }

  /** Adds event listeners */
  _addEventListeners() {
    document.addEventListener('mousemove', this._onMouseMove)
    document.addEventListener('mouseover', this._onMouseOver)
  }

  /** Binds class methods */
  _bind() {
    this._update = this._update.bind(this)
    this._onMouseMove = this._onMouseMove.bind(this)
    this._onMouseOver = this._onMouseOver.bind(this)
  }

  /**
   * Sets the cursor position manually.
   * @param {String|Number} x - the x-coordinate
   * @param {String|Number} y - the y-coordinate
   */
  set position({ x, y }) {
    this._position.next = { x, y }
  }

  /** Stops updating the cursor state */
  pause() {
    window.cancelAnimationFrame(this._raf)
    this._raf = null
  }

  /** Starts updating the cursor state */
  play() {
    this._update()
  }

  /**
   * Returns whether the cursor is being updated.
   * @returns {Boolean} `true` if the cursor is updating; otherwise, `false`
   */
  get status() {
    return !!this._raf
  }

  /**
   * Sets the state of the cursor.
   * @param {String} [name='DEFAULT'] - the name of the cursor state
   */
  set state(name) {
    this._setState(name || 'DEFAULT')
  }

  /** Destroys the cursor */
  destroy() {
    document.removeEventListener('mousemove', this._onMouseMove)
    document.removeEventListener('mouseover', this._onMouseOver)
    window.cancelAnimationFrame(this._raf)
    this._element.remove()
  }

  /**
   * Returns a linear interpolated value between two values.
   * @param {Number} v1 - the start value
   * @param {Number} v2 - the end value
   * @param {Number} t - the interpolation value (is clamped to the range [0, 1])
   * @returns {Number} an interpolated number between two values
   */
  lerp(v1, v2, t) {
    return (1 - t) * v1 + t * v2
  }

  /**
   * Returns a number whose value is limited to the given range.
   * @param {Number} value - the value to restrict inside the range defined by the min and max values
   * @param {Number} min - the lower boundary of the output range
   * @param {Number} max - the upper boundary of the output range
   * @returns {Number} a number in the range [min, max]
   */
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
  }

  /**
   * Returns 'true' if the device being used has a touchscreen; otherwise 'false'.
   * @returns {Boolean}
   */
  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints
  }
}

export default Cursor
