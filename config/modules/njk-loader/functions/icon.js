const { SafeString } = require('nunjucks').runtime

/**
 * Creates an SVG icon element for Nunjucks templates.
 *
 * @param {string} name - The name of the icon.
 * @param {string} [className=''] - Additional class names to be added to the SVG element.
 * @returns {SafeString} A SafeString containing the SVG icon element.
 *
 * @example
 *  1. Import SVG ivon (app.js)
 *    import '@/icons/heart.svg'
 *  2. Use it in nunjucks template (template.njk)
 *    <div>{{ icon('heart') }}</div>
 */
module.exports = (name, className = '') =>
  new SafeString(
    `<svg class='icon icon-${name} ${className}'><use xlink:href="#${name}"></use></svg>`
  )
