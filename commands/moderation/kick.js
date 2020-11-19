const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'kick',
    category : 'moderation',
    description : 'This command will kick mentioned person!',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS')) return client.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **You don't have enough permissions to execute this commmand!**")
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return client.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **I don't have enough permissions to execute this command!**")
        const Member = message.mentions.members.first()
        var reason = args.slice(1).join(" ")
        if(!args[1]) reason = "No reason specified!"
        if(!Member) return message.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **You didn't specify a member to kick!**")
        await Member.kick({ reason : args.slice(1).join(" ")})

        const embed = new MessageEmbed()
            .setTitle("<:9358_yes_tick:748426928347938897> | **Member has been kicked!**")
            .setDescription(`**Name**\n${Member.user.tag}\n**Reason**\n${reason}`)
            .setFooter(`Kicked by ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        await message.channel.send(embed);
    }

}