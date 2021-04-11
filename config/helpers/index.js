const path = require('path')


module.exports = {
  /**
   * Is 'true' if webpack is running in development mode, 'false' otherwise.
   * @type {boolean}
   */
  IS_DEV_MODE: process.env.NODE_ENV === 'development',

  /**
   * The url to the output directory resolved relative to the HTML page.
   * @type {string}
   */
  PUBLIC_PATH: process.env.PUBLIC_PATH || '/',

  /**
   * The target directory for all output files.
   * @type {string}
   */
   OUTPUT_DIR: path.resolve(process.cwd(), process.env.OUTPUT_DIR || 'dist'),

  /**
   * The absolute path to the src directory.
   * @type {string}
   */
   SOURCE_DIR: path.resolve(process.cwd(), 'src')
}
