const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'This command returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('**✅ | Finished pinging**')
            .setDescription(`WebSocket ping is **${client.ws.ping}ms**\nMessage edit ping is **${Math.floor(msg.createdAt - message.createdAt)}ms**`)
            await message.channel.send(embed)
            msg.delete()

    }
}
