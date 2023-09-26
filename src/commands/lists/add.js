const listRepository = require('./repositories/listRepository')

const add = {
  signature: '!list-item',
  helpMessage: 'Usage: !list-item <list-name> <safe space separated item-description>',
  active: true,
  async handle (message, listId, ...description) {
    await listRepository.addItem(message.from, listId, description.join(' '))
    await message.reply('Item added successfuly.')
  }
}

module.exports = add