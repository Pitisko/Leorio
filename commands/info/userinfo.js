const { MessageEmbed } = require('discord.js');
const moment = require('moment');


module.exports = {
    name : 'userinfo',
    aliases : ['profile', 'uinfo'],
    category : 'info',
    description : 'This command shows info about selected user!',
    run : async(client, message, args) => {
        let user = message.mentions.members.first() || message.author;
    
        if (user.presence.status === "dnd") user.presence.status = "Do Not Disturb";
        if (user.presence.status === "idle") user.presence.status = "Idle";
        if (user.presence.status === "offline") user.presence.status = "Offline";
        if (user.presence.status === "online") user.presence.status = "Online";
    
        function game() {
            let game;
            if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
            else if (user.presence.activities.length < 1) game = "None"; 
            return game; 
          }

        let x = Date.now() - user.createdAt; 
        let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; 
        let created = Math.floor(x / 86400000); 
        let joined = Math.floor(y / 86400000);
    
        const member = message.guild.member(user);
        let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "Default name";
        let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); 
        let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); 
        let status = user.presence.status;
        let avatar = user.avatarURL({size: 2048});
        
        const roleColor = 
            message.guild.me.displayHexColor === "#000000"
                ? "#ffffff"
                : message.guild.me.displayHexColor;
        
        const embed = new MessageEmbed()
            .setAuthor(`Information about ${user.tag}`, avatar)
            .setThumbnail(avatar)
            .setTimestamp()
            .setColor(roleColor)
            .addField("`ID`", `||${user.id}||`, false)
            .addField("`Nickname`", nickname, false)
            .addField("`Created Account Date`", `${createdate} \n${created} day(s) ago`, false)
            .addField("`Joined Guild Date`", `${joindate} \n${joined} day(s) ago`, false)
            .addField("`Status`", status, false)
            .addField("`Game`", game(), true)
    
        message.channel.send(embed); 
  }
}