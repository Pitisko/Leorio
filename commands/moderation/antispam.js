const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
    name : 'antispam',
    aliases : ['as', 'antis'],
    category : 'moderation',
    description : 'This command will turn on/off antispam!',
    run : async(client, message, args) => {
        if(args[0] === 'on') {
            await db.set(`antispam-${message.guild.id}`, true)
            const embed = new MessageEmbed()
                .setTitle("<:9358_yes_tick:748426928347938897> | **Anti-Spam turned on!**")
            message.channel.send(embed)
        } else if(args[0] === 'off') {
            await db.delete(`antispam-${message.guild.id}`)
            const embed = new MessageEmbed()
                .setTitle("<:9358_yes_tick:748426928347938897> | **Anti-Spam turned off!**")
            message.channel.send(embed)
        }
    }
}