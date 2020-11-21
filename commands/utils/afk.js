const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name : 'afk',
    aliases : ['away'],
    category: 'utils', 
    description : "This command will set you on afk mode!",
    run : async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
            .setDescription(`<:9358_yes_tick:748426928347938897>  | You have been successfully set to afk mode!\n**Reason :** ${content}`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)    
    }
}
