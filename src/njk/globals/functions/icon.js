/**
 * Simplifies work with SVG sprite.
 *
 * @param {string} name - SVG icon name
 * @returns {string}
 *
 * @example
 *  1. Import SVG ivon (app.js)
 *    import '@/icons/heart.svg'
 *  2. Use it in nunjucks template (template.njk)
 *    <div>{{ icon('heart') | safe }}</div>
 */
module.exports = name => `<svg><use xlink:href="#${name}"></use></svg>`
