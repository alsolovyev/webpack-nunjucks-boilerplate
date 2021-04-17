const path = require('path')
const CWD = process.cwd()


module.exports = {
  /**
   * Whether webpack is in development mode.
   * @const {Boolean}
   */
  IS_DEV_MODE: process.env.NODE_ENV === 'development',

  /**
   * The absolute path to the directory where the
   * production build files will be generated in.
   * @const {String}
   */
  OUTPUT_DIR: path.resolve(CWD, process.env.OUTPUT_DIR || 'dist'),

  /**
   * The base path for assets(javascript, images, fonts, etc).
   * @const {String}
   */
  PUBLIC_PATH: process.env.PUBLIC_PATH || '/',

  /**
   * The absolute path to the source directory.
   * @const {String}
   */
  SOURCE_DIR: path.resolve(CWD, 'src')
}
