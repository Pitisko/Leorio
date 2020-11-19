const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'ban',
    category : 'moderation',
    description : 'This command will ban mentioned person!',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('BAN_MEMBERS')) return client.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **You don't have enough permissions to execute this commmand!**")
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return client.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **I don't have enough permissions to execute this command!**")
        const Member = message.mentions.members.first()
        var reason = args.slice(1).join(" ")
        if(!args[1]) reason = "No reason specified!"
        if(!Member) return message.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **You didn't specify a member to kick!**")
        await Member.ban({ reason : args.slice(1).join(" ")})

        const embed = new MessageEmbed()
            .setTitle("<:9358_yes_tick:748426928347938897> | **Member has been banned!**")
            .setDescription(`**Name**\n${Member.user.tag}\n**Reason**\n${reason}`)
            .setFooter(`Banned by ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        await message.channel.send(embed);
    }
}