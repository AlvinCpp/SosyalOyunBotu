const { Client } = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Client();

const prefix = "." 
const token = "TOKEN"
client.on('ready', async () => {
 client.user.setActivity(`${prefix}help ${prefix}invite`, { type:'PLAYING' })
});


client.on("message", async message => {
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd ==="youtube") {
    const channel = message.guild.channels.cache.get(args[0]);
     if (!channel || channel.type !== "voice") return message.channel.send(new Discord.MessageEmbed().setFooter("Alvin").setAuthor(message.author.tag, message.author.avatarURL({dynamic: true, size: 1024})).setDescription(`Bir kanal id girmelisin. Örnek kullanım: \`${prefix}youtube <kanalid>\``).setColor("RANDOM"));

if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("davet oluştuma iznine ihtiyacım var");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })

                

            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`**Youtube Together** Başlatılamadı!`);
                message.channel.send(`
**<a:true:833601768482013234> Parti Oluşturuldu!** 
<a:duyuru:825669596673474572> Partiye katılmak ve arkadaşlarınızı davet etmek için referans bağlantısını kullanın.

<a:hastag:833602922227040296> Referans Linki : https://discord.gg/${invite.code}`);
            })
            .catch(e => {
                message.channel.send(`**YouTube Together** Başlatılamadı!`);
            })
      
    }
      if (cmd ==="poker") {
    const channel = message.guild.channels.cache.get(args[0]);
     if (!channel || channel.type !== "voice") return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true, size: 1024})).setDescription(`Bir kanal id girmelisin. Örnek kullanım: \`${prefix}poker <kanalid>\``).setColor("RANDOM"));

if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("davet oluştuma iznine ihtiyacım var");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })

                

            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`**Poker Night** Başlatılamadı!`);
message.channel.send(`
**<a:true:833601768482013234> Parti Oluşturuldu!** 
<a:duyuru:825669596673474572> Partiye katılmak ve arkadaşlarınızı davet etmek için referans bağlantısını kullanın.

<a:hastag:833602922227040296> Referans Linki : https://discord.gg/${invite.code}`);
            })
            .catch(e => {
                message.channel.send(`**Poker Night** Başlatılamadı!`);
            })
      
    }
        if (cmd ==="betrayal") {
    const channel = message.guild.channels.cache.get(args[0]);
     if (!channel || channel.type !== "voice") return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true, size: 1024})).setDescription(`Bir kanal id girmelisin. Örnek kullanım: \`${prefix}betreyal <kanalid>\``).setColor("RANDOM"));

if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("davet oluştuma iznine ihtiyacım var");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })

                

            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`**Betrayal.io** Başlatılamadı!`);
message.channel.send(`
**<a:true:833601768482013234> Parti Oluşturuldu!** 
<a:duyuru:825669596673474572> Partiye katılmak ve arkadaşlarınızı davet etmek için referans bağlantısını kullanın.

<a:hastag:833602922227040296> Referans Linki : https://discord.gg/${invite.code}`);
        })
            .catch(e => {
                message.channel.send(`**Betrayal.io** Başlatılamadı!`);
            })
      
    }
          if (cmd ==="fishing") {
    const channel = message.guild.channels.cache.get(args[0]);
     if (!channel || channel.type !== "voice") return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true, size: 1024})).setDescription(`Bir kanal id girmelisin. Örnek kullanım: \`${prefix}fishing <kanalid>\``).setColor("RANDOM"));

if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.reply("davet oluştuma iznine ihtiyacım var");

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })

                

            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(`**Fishington.io** Başlatılamadı!`);
message.channel.send(`
**<a:true:833601768482013234> Parti Oluşturuldu!** 
<a:duyuru:825669596673474572> Partiye katılmak ve arkadaşlarınızı davet etmek için referans bağlantısını kullanın.

<a:hastag:833602922227040296> Referans Linki : https://discord.gg/${invite.code}`);
        })
            .catch(e => {
                message.channel.send(`**Fishington.io** Başlatılamadı!`);
            })
      
    }
   if (cmd ==="help") {
message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setImage("https://images-ext-2.discordapp.net/external/6Q0Zzu3AritElvnzGTBFUstq7TSAQchgCRb5GNlZuRU/%3Fwidth%3D1157%26format%3Dpng%26auto%3Dwebp%26s%3Da42cfd0cef61492baf009be3f46ab0dd853d5f28/https/preview.redd.it/6mtxho8gksn61.png").setDescription(`
**Arkadaşlarınızla birlikte balık tutabilir,müzik dinleyebilir,poker oynayabilirsiniz!**


**__Kullanılabilir Komut Listesi__**

・ .poker kanalID \`(Arkadaşlarınızla poker oynamak istermisiniz?)\`

・ .betrayal kanalID \`(Betrayal.io mu mm en sevdiğim)\`

・ .fishing kanalID \`(Bakalım en büyük balığı kim tutucak 😁)\`

・ .youtube kanalID \`(Birlikte müzik dinlemeye ne dersin?)\`

・ .invite [Beni sunucuna eklemek istermisin?](https://discord.com/oauth2/authorize?client_id=833315459834707990&scope=bot&permissions=314369)

`))
    }
if (cmd ==="invite") {
message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`
[Beni sunucuna eklemek istermisin?](https://discord.com/oauth2/authorize?client_id=833315459834707990&scope=bot&permissions=314369)
`))
    }
});

client.login(client.token).then(c => console.log(`${client.user.tag} olarak giriş yapıldı!`)).catch(err => console.error("Bota giriş yapılırken başarısız olundu!"));
