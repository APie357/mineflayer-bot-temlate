const mineflayer = require('mineflayer')
const pvp = require('mineflayer-pvp').plugin
const { pathfinder, Movements, goals} = require('mineflayer-pathfinder')
const armorManager = require('mineflayer-armor-manager')
const GoalFollow = goals.GoalFollow
const GoalBlock = goals.GoalBlock

const bot = mineflayer.createBot({
    host: process.argv[2] || 'localhost',
    port: process.argv[3],
    username: process.argv[4] || 'BOT',
    password: process.argv[5],
    logErrors: false
})

bot.loadPlugin(pvp)
bot.loadPlugin(pathfinder)
bot.loadPlugin(armorManager)
