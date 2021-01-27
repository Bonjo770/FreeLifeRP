module.exports = {
    name: 'team',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('__**FreeLifeRP Team Liste**__')
        .addFields(
            {name: '**Projektleitung:**', value: 'Nandino_2000', inline: true},
            {name: '**Projektleitung:**', value: 'Gamer Physik YT', inline: true},
            {name: '**STV.Projektleitung:**', value: '~~Not STV.PL~~', inline: true},
            {name: '**Managment:**', value: 'ic3fight3r', inline: true},
            {name: '**Admin:**', value: 'Kiritomato', inline: true},
            {name: '**Entwicklung**', value: 'Bonjo', inline: true},
            {name: '**Entwicklung:**', value: 'Danny.', inline: true},
            {name: '**Moderator:**', value: '~~Not Moderator~~', inline: true},
            {name: '**Supporter:**', value: 'laffit', inline: true}
        )
        .setImage('https://cdn.discordapp.com/attachments/794916993542127616/802535595783749642/FLRP.png')
        .setFooter('FreeLifeRP', 'https://cdn.discordapp.com/attachments/794916993542127616/802535595783749642/FLRP.png');

        message.channel.send(newEmbed);
    }
}