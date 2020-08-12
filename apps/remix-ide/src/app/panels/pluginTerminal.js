const { EventEmitter } = require('events')

class PluginTerminal {
  constructor () {
    this.terminal = null
    this.events = new EventEmitter()
    this.setupEvents()
  }

  setupEvents () {

  }

  logTx (tx) {
    this.terminal.commands['knownTransaction'](typeof tx === 'string' ? JSON.parse(tx) : tx)
  }

  logHtml (html) {
    return this.terminal.logHtml(html)
  }
}

module.exports = PluginTerminal
