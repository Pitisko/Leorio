const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
  aliases: ["u"],
  description: "This command checks the uptime of the bot",
  run: async(client, message) => {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;


    const embed = new MessageEmbed()
        .setTitle("<:9497_leoriosmile:778749488231350292> | **Uptime**")
        .setDescription(`**Uptime:**\n\`${days} day(s) ${hours} hours ${minutes} minutes ${seconds} seconds\``)
    message.channel.send(embed)
    }
}

// .reply(`Uptime: \`${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds\``)