module.exports = {
    name: 'help',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('__**FreeLifeRP Command Liste**__')
        .addFields(
            {name: '**Command 1:**', value: '!Hallo', inline: true},
            {name: '**Command 2:**', value: '!ping <-- Deaktiviert', inline: true},
            {name: '**Command 3:**', value: '!ip', inline: true},
            {name: '**Command 4:**', value: '!Website', inline: true},
            {name: '**Command 5:**', value: '!Prefix', inline: true},
            {name: '**Command 6:**', value: '!demnächst', inline: true},
            {name: '**Command 7:**', value: '!avatar', inline: true},
            {name: '**Command 8:**', value: '_help', inline: true},
            {name: '**Command 9:**', value: '!team', inline: true},
        )
        .setImage('https://cdn.discordapp.com/attachments/794916993542127616/802535595783749642/FLRP.png')
        .setFooter('FreeLifeRP', 'https://cdn.discordapp.com/attachments/794916993542127616/802535595783749642/FLRP.png');

        message.channel.send(newEmbed);
    }
}