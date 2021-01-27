module.exports = {
    name: 'demnächst',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('__**FreeLifeRP Comming Soon**__')
        .addFields(
            {name: '**Comming Soon:**', value: 'Change Prefix', inline: false},
            {name: '**Comming Soon:**', value: 'Website', inline: false}
        )
        .setFooter('FreeLifeRP', 'https://cdn.discordapp.com/attachments/794916993542127616/802535595783749642/FLRP.png');

        message.channel.send(newEmbed);
    }
}