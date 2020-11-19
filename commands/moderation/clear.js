const { MessageEmbed } = require('discord.js');

module.exports = {
    name : "clear",
    aliases : ['purge', 'p', 'c'],
    category : 'moderation',
    description : 'This command will delete selected amount of messages!',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return client.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **You don't have enough permissions to execute this commmand!**")
        if(!args[0]) return message.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **Please specify how many messages you want to delete!**")
        if(isNaN(args[0])) return message.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **You can only input numbers!**")
        if(parseInt(args[0] > 99)) return message.channel.send("<:4153_confusedleorio:778746897388142622> | Something is wrong. **The maximum amount of messages you can delete is 99!**")
        
        await message.channel.bulkDelete(parseInt(args[0] + 1))
        const embed = new MessageEmbed()
            .setTitle("<:9358_yes_tick:748426928347938897> | **Successfully deleted messages!**")
            .setDescription(`Deleted ${args[0]} messages`)
            .setFooter(`Deleted by ${message.author.tag}`,message.author.displayAvatarURL({ dynamic: true }))
        await message.channel.send(embed).then(m => m.delete({ timeout : 5000 }))
    }
}