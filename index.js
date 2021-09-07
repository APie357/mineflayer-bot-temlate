const mineflayer = require('mineflayer')
const pvp = require('mineflayer-pvp').plugin
const { pathfinder, Movements, goals} = require('mineflayer-pathfinder')
const armorManager = require('mineflayer-armor-manager')
const inventoryViewer = require('mineflayer-web-inventory')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
const vec3 = require('vec3')
const GoalFollow = goals.GoalFollow
const GoalBlock = goals.GoalBlock

const bot = mineflayer.createBot({
    host: process.argv[2] || 'localhost',
    port: process.argv[3],
    username: process.argv[4] || 'BOT',
    password: process.argv[5],
    logErrors: false
})

bot.once('spawn', () => {
    console.log('Bot joined!')
    console.log('Bot version: ' + bot.version)
    inventoryViewer(bot)
    mineflayerViewer(bot, { port: 3001, firstPerson: true })
})

bot.on('playerCollect', (collector, itemDrop) => {
    if (collector !== bot.entity) return

    setTimeout(() => {
        const totem = bot.inventory.items().find(item => item.name.includes('totem of undying'))
        if (totem) bot.equip(totem, 'off-hand')
    }, 250)
})

bot.loadPlugin(pvp)
bot.loadPlugin(pathfinder)
bot.loadPlugin(armorManager)
