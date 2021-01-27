module.exports = {
    name: 'ip',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('__**FreeLifeRP IP/Links**__')
        .addFields(
            {name: '**FiveM:**', value: '88.214.58.122:30724', inline: false},
            {name: '**TS³:**', value: '185.223.28.61:9206', inline: false},
            {name: '**Discord Einladungs Link:**', value: 'https://discord.gg/We55yk93pv', inline: false},
        )
        .setFooter('FreeLifeRP', 'https://cdn.discordapp.com/attachments/794916993542127616/802535595783749642/FLRP.png');

        message.channel.send(newEmbed);
    }
}