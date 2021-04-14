/**
 * Class representing a webpack plugin for clearing the terminal screen.
 *
 * @requires webpack version >=4
 * @version 1.0.0
 * @author janeRivas <solovyev.a@icloud.com>
 * @license MIT
 */
class TerminalClearPlugin {
  /**
   * @param {Boolean} [saveHistory=true] - indicates whether to keep the terminal history or not
   */
  constructor({ saveHistory = true } = {  }) {
    this.saveHistory = saveHistory
  }

  /**
   * Installs the plugin.
   * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
   */
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync('TerminalClearPlugin', (params, callback) => {
      process.stdout.write(this.saveHistory ? '\x1B[H\x1B[2J' : '\x1B[2J\x1B[3J\x1B[H\x1Bc')
      callback()
    })
  }
}


module.exports = new TerminalClearPlugin()
