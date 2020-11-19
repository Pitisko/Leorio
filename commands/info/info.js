const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'info',
    aliases : ['i'],
    category : 'info',
    description : 'This command shows info about <@757232393319874621>',

    run : async(message, client) => {
        var guilds = client.guilds.size
        const embed = new MessageEmbed()
            .setTitle("<:9497_leoriosmile:778749488231350292> **| Information about bot**")
            .setDescription(`**API**\nDiscord.js v12\n**Bot version**\n0.1\n**Commands**\n6\n**Guilds**\n${guilds}\n**Developer**\n<@243804677735579648>`)
            .setColor("0x8373fd")
            .setFooter(`${client.author.tag}`,client.author.displayAvatarURL({ dynamic: true }))
        await client.channel.send(embed);
    } 
}