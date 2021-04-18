const path = require('path')
const CWD = process.cwd()


module.exports = {
  /**
   * Indicates whether to run the webpack in development mode or not.
   * @const {Boolean}
   */
  IS_DEV_MODE: process.env.NODE_ENV === 'development',

  /**
   * Indicates whether to enable TypeScript support or not.
   * @const {Boolean}
   */
  IS_TS_SUPPORTED: process.env.TS_SUPPORT === 'true',

  /**
   * The absolute path to the directory where the
   * production build files will be generated in.
   * @const {String}
   */
  OUTPUT_DIR: path.resolve(CWD, process.env.OUTPUT_DIR || 'dist'),

  /**
   * The base path for assets (javascript, images, fonts, etc).
   * @const {String}
   */
  PUBLIC_PATH: process.env.PUBLIC_PATH || '/',

  /**
   * The absolute path to the directory where the source files are located.
   * @const {String}
   */
  SOURCE_DIR: path.resolve(CWD, process.env.SOURCE_DIR || 'src')
}
