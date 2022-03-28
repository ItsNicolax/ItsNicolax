const Discord = require('discord.js')

module.exports = {
    name: "nome del comando",
    execure(message) {
        const embed = Discord.MessageEmbed()
            .setTitle("Titolo embed")
            .description("Descrizione embed")
        message.channel.send({embeds: [embed]})
    }
}