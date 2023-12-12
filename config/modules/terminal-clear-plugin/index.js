/**
 * Represents a webpack plugin for clearing the terminal before each build or watch run.
 *
 * @requires webpack version >=4
 * @version 2.0.0
 * @author janeRivas <solovyev.a@icloud.com>
 * @license MIT
 */
class TerminalClearPlugin {
  /**
   * Creates an instance of TerminalClearPlugin.
   * @constructor
   * @param {Object} options - Plugin options.
   */
  constructor(options = {}) {
    this._options = options

    this._bind()
  }

  /**
   * Applies the plugin to the webpack compiler.
   * Registers the _clear method to be executed before each run in both 'beforeRun' and 'watchRun' hooks.
   *
   * @param {Object} compiler - The webpack compiler instance.
   */
  apply(compiler) {
    compiler.hooks.beforeRun.tap('TerminalClearPlugin', this._clear)
    compiler.hooks.watchRun.tap('TerminalClearPlugin', this._clear)
  }

  /**
   * Binds the _clear method to the current instance.
   *
   * @private
   */
  _bind() {
    this._clear = this._clear.bind(this)
  }

  /**
   * Clears the terminal.
   *
   * @private
   */
  _clear() {
    process.stdout.write('\x1Bc')
  }
}

module.exports = TerminalClearPlugin
