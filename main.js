const Discord = require("discord.js");
const db = require('quick.db');
const bot = new Discord.Client();
const ascii = require("ascii-art");
const moment = require("moment");
//const fs = require("fs");
const ms = require("ms");

bot.on('message', async message => {
    let prefix = "c!";
    //let prefix = konfiguracja.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let msg = message.content.startsWith;
    let args = messageArray.slice(1);
	
	if (message.channel.id === "505836751928164352") { 
        if (Date.now() < db.fetch(message.author.id + ".reklama")) {    
            message.delete();
            return message.author.send("**Wysłałeś(aś) już jedną reklamę.** \nOznacza to, że kolejną możesz wysłać, gdy minie 24h. ```~~Cookie Community```")  
        }

        db.set(message.author.id + ".reklama", Date.now() + 86400000)
        //message.author.send("**Twoja reklama została wysłana!**")
        //const embed = new Discord.RichEmbed()
        //.setDescription(`Użytkownik ${message.author} (${message.author.id}) próbował(a) się zareklamować, ale nie minęło 24h.`)
        //client.channels.get("460676417064140801").send(embed);
    }
	db.add(message.author.id  + '.money', 1);
	
	if(cmd === `${prefix}money`){
		if(message.author.id !== "396284197389729793") return message.channel.send("**TA FUNKCJA JEST TESTOWANA** \nOznacza to, że może działać niepoprawnie... Dlatego nie możesz jej użyć.");
		if(!args[0]) {
			const stan = db.fetch(message.author.id + '.money') || "0";
			let embed = new Discord.RichEmbed()
			.setDescription("Twój stan konta wynosi: " + stan + " zł.");
			message.channel.send(embed);
			//message.channel.send("Twój stan konta wynosi: " + stan + " zł.");
		}
		if(args[0] == "add") {
			const userxd = message.mentions.users.first() || args[1];
			if (!userxd) {
				return message.channel.send("**Administratorze!** Musisz oznaczyć użytkownika, lub podać jego ID!")
			}
			if (!args[2]) {
				return message.channel.send("**Administratorze!** Musisz podać ilość pieniędzy, jaką chcesz dodać użytkownikowi!")
			}
			const user = message.mentions.users.first().id || args[1];
			db.add(user  + '.money', args[2]);
			let embed = new Discord.RichEmbed()
		.setDescription("Dodałeś(aś) pieniądze dla użytkownika " + userxd.tag + ". Jego nowy stan konta to: " + `${db.fetch(userxd.id + ".money")}` + ".")
			message.channel.send(embed);
			//message.channel.send("Pieniądze dla użytkownika "  + userxd + " zostały dodane!");
		}
		if(args[0] == "remove") {
			const userxd = message.mentions.users.first() || args[1];
			if (!userxd) {
				return message.channel.send("**Administratorze!** Musisz oznaczyć użytkownika, lub podać jego ID!")
			}
			if (!args[2]) {
				return message.channel.send("**Administratorze!** Musisz podać ilość pieniędzy, jaką chcesz odebrać użytkownikowi!")
			}
			const user = message.mentions.users.first().id || args[1];
			db.subtract(user + '.money', args[2]);
			message.channel.send("Pieniądze dla użytkownika "  + userxd + " zostały odebrane!");
		}


	}
	
	if(cmd === `${prefix}sklep`){
		if(message.author.id !== "396284197389729793") return message.channel.send("**TA FUNKCJA JEST TESTOWANA** \nOznacza to, że może działać niepoprawnie... Dlatego nie możesz jej użyć.");
		if(!args[0]) return message.channel.send("**Hej Ho!** Co chcesz zrobić? Oto akcje, które możesz wykonać: \n`sklep lista` - lista produktów w sklepie, \n`sklep kup <produkt>` - kupuje wybrany produkt \n`sklep voucher <kod>` - wykorzystaj voucher na produkt ze sklepu.");
		let legenda = "457049316385882113";
		let rMember = message.author;
		if(args[0] == "lista") {
			const embed = new Discord.RichEmbed()
			.setAuthor("Sklep (1/1)")
			.setDescription("Zainteresowany(a)? Możesz zakupić wybrany produkt poprzez komendę `sklep kup <nazwa>` np. `sklep kup legenda` - nazwę wpisujemy bez przedrostków typu [VIP] i wpisujemy z małej litery.")
			.addField("[VIP] LEGENDA", "**Możliwości**: \nUżyj `sklep funkcje legenda`, aby zobaczyć możliwości tej rangi. \n \n**Koszt:** \n100.000zł \n \n**Opis:** \nLegenda - Jest to jedna z ról vip, ma z nich najwyższe funkcje/możliwości. Mając ją jesteś bardzo prestiżowym człowiekiem.")
			.addField("[VIP] GIGANT", "**Możliwości**: \nUżyj `sklep funkcje gigant`, aby zobaczyć możliwości tej rangi. \n \n**Koszt:** \n50.000zł \n**Opis:** \nGigant - Jest to druga z ról vip, jest trochę mniejsza od powyższej roli - posiada mniejsze uprawnienia, ale to nie ma znaczenia bo i tak są super. Nie masz za wiele pieniędzy? Wybierz tą rangę!")
			.setFooter("Aby sprawdzić swój stan konta, użyj cc!money");
			message.channel.send(embed);
		}
		if(args[0] == "voucher") {
			if(args[1] == "OTWARCIE") {
				if(db.fetch(message.author.id + ".voucherjeden") === "wykorzystany") {
					//if(db.fetch(message.author.id + ".plec") === "Dziewczyna") return message.channel.send("**Obywatelko!** Już wykorzystałaś ten voucher... Był jednorazowy.");
					//if(db.fetch(message.author.id + ".plec") === "Chlopak") return message.channel.send("**Obywatelu!** Już wykorzystałeś ten voucher... Był jednorazowy.");
					return message.channel.send("**Obywatelu!** Już wykorzystałeś(aś) ten voucher...")
				}
				db.add(message.author.id + '.money', 1000);
				db.set(message.author.id + '.voucherjeden', "wykorzystany");
				message.channel.send("**VOUCHER WYKORZYSTANY POMYŚLNIE**\nTwój voucher został pomyślnie wykorzystany... Dodał on Ci kwotę `1000 zł`.");
			}
		}
		if(args[0] == "kup") {
			if(args[1] == "legenda") {
				if(db.fetch(message.author.id + ".zp") === "zakupione") {
					return message.channel.send("**Obywatelu!** Ta rola już została przez Ciebie zakupiona!")
				}
				if(db.fetch(message.author.id + ".money") < 100000) {
					return message.channel.send("**Obywatelu!** Posiadasz za mało pieniędzy, aby to zakupic.")
				}

				db.subtract(message.author.id + '.money', 100000);
				db.set(message.author.id + '.zp', "zakupione");
				const guildMember = message.member;
				guildMember.addRole('457049316385882113');
				message.channel.send("**RANGA ZOSTAŁA ZAKUPIONA**\nOto rachunek transakcji:\n \n**CC-SHOP**\nSprzedawca: *Cookie Community* \n**1x Ranga Legenda**: `100.000zł` \n**Suma PLN:** `100.000zł`.");
			}
			if(args[1] == "gigant") {
				if(db.fetch(message.author.id + ".zpg") === "zakupione") {
					return message.channel.send("**Obywatelu!** Ta rola już została przez Ciebie zakupiona!")
				}
				if(db.fetch(message.author.id + ".money") < 50000) {
					return message.channel.send("**Obywatelu!** Posiadasz za mało pieniędzy, aby to zakupic.")
				}

				db.subtract(message.author.id + '.money', 50000);
				db.set(message.author.id + '.zpg', "zakupione");
				const guildMember = message.member;
				guildMember.addRole('457049316385882113');
				message.channel.send("**RANGA ZOSTAŁA ZAKUPIONA**\nOto rachunek transakcji:\n \n**CC-SHOP**\nSprzedawca: *Cookie Community* \n**1x Ranga Gigant**: `50.000zł` \n**Suma PLN:** `50.000zł`. \n \nZapraszamy na zakupy częściej!");
			}
		}
		if(args[0] == "funkcje") {
			if(args[1] == "legenda") {
				let embed = new Discord.RichEmbed()
				.setAuthor("Funkcje rangi: LEGENDA")
				.setDescription("**Panel VIP:** TAK\n**Strefa VIP:** TAK\n**Daily:** x4\n**Zmiana koloru nicku:** TAK\n**Zmiana Pseudonimu:** TAK\n**Dodawanie Reakcji:** TAK\n**Własny tytuł userinfo:** Darmowy")
				.setFooter("Aby ją kupić, użyj cc!sklep kup legenda.");
				message.channel.send(embed);
			}
		}
	}
	if(cmd === `${prefix}ustaw`){
		if(args[0] == "plec") {
			if(args[1] == "dziewczyna") {
				db.set(message.author.id + ".plec", "Dziewczyna");
				let embed = new Discord.RichEmbed()
				.setAuthor("Ustawienie zapisane...")
				.setDescription("Twoja plec zostala ustawiona na `Dziewczyna`.")
				message.channel.send(embed);
			}
			if(args[1] == "chlopak") {
				db.set(message.author.id + ".plec", "Chlopak");
				let embed = new Discord.RichEmbed()
				.setAuthor("Ustawienie zapisane...")
				.setDescription("Twoja plec zostala ustawiona na `Chlopak`.")
				message.channel.send(embed);
			}
		}
	}
	
	if(cmd === `${prefix}vip`) {
		if(args[0] === "setnickcolor") {
			let role = await message.guild.create.role("test");
			role.setPosition(11);
		}
	}
	
	if(cmd === `${prefix}daily`){
		if(message.author.id !== "396284197389729793") return message.channel.send("**TA FUNKCJA JEST TESTOWANA** \nOznacza to, że może działać niepoprawnie... Dlatego nie możesz jej użyć");
		if(Date.now() < db.fetch(message.author.id + ".daily")) {
        return message.channel.send("**Obywatelu**! Ty już odebrałeś(aś) swoje dzienne kredyty! Odczekaj 24h, zanim weźmiesz kolejne.")
           
		}
		db.add(message.author.id  + '.money', 200);

		message.channel.send("Twoje dzienne kredyty w wysokości **200 zł** zostały przez Ciebie odebrane.")

		db.set(message.author.id  + ".daily",  Date.now() + 86400000)
	} //
	
	if(cmd === `${prefix}kick`){
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("**Administratorze!** Proszę, abyś oznaczył(a) poprawnego użytkownika!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Hej Ho!** Nie masz uprawnień do użycia tej komendy!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Administratorze!** Ten użytkownik ma za wysokie uprawnienia i nie może zostać wyrzucony!");

        let kickEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("Przez:", `<@${message.author.id}>, id ${message.author.id}`)
        .addField("Kanał:", message.channel)
        .addField("Powód:", kReason)
        .setFooter("Użytkownik został wyrzucony!")
        .setAuthor(`${kUser.user.tag}, ${kUser.id}`, `${kUser.user.displayAvatarURL}`);

        let kickChannel = message.guild.channels.find(`name`, "modlogs");
        if(!kickChannel) return message.channel.send("**Administratorze!** Kanał `kary-nadawane` nie istnieje. Zgłoś to do jednego z właścicieli, aby go stworzył.");

        message.channel.send(`**O tak!** Użytkownik **${kUser}** został wyrzucony z serwera za **${kReason}**!`);
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);

        return;
  }
  
  if(cmd === `${prefix}bingo`){
        let y = Math.floor(Math.random() * (Math.floor(75) - Math.ceil(1) + 1)) + Math.ceil(1);
        let x = null;

        if (y < 15) { x = "B"; } 
        else if (y < 30){ x = "I"; } 
        else if (y < 45){ x = "N"; } 
        else if (y < 60){ x = "G"; } 
        else { x = "O"; }

        message.channel.send(`Wylosowane zostało **${x}${y}**!`);
    }
	
	if(cmd === `${prefix}zabij`){
        let aUser = message.mentions.users.first() || message.author || message.user.id;
        message.channel.send(`**OHO!** Użytkownik **${aUser.tag}** został(a) zabity(a) przez **${message.author.tag}**!`).then(Message => {
            setTimeout(() => { Message.edit(`**YA!** Trwa odradzanie...`); }, 1000);
            setTimeout(() => { Message.edit(`**YE!** Użytkownik narodził się na nowo. Witamy ponownie, ${aUser.tag}.`); }, 1000);
        });
    }
	
	if(cmd === `${prefix}say`){
        //message.delete();
        if (!message.member.roles.find(r => r.id === "457105125886918667")) return message.channel.send("**Użytkowniku!** Nie posiadasz wymaganych uprawnień do użycia tej komendy!");
        //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${bot.emojis.find(`name`, 'lock')}` + " Nie posiadasz wymaganych uprawnień, musisz mieć rangę `JRMODERATOR`.");
        if (args[0].includes('@everyone')) return message.channel.send(`${bot.emojis.find(`name`, 'alert')} Przepraszam bardzo, w tym celu bota nie użyjesz!`);
        if (args[0].includes('@here')) return message.channel.send(`${bot.emojis.find(`name`, 'alert')} Przepraszam bardzo, w tym celu bota nie użyjesz!`);
        let sayMessage = args.join(" ");
        message.delete();
        message.channel.send(sayMessage);
    }
	
	if(cmd === `${prefix}votekick`){
        if (!message.member.roles.find(r => r.id === "456851627740102657")) return message.channel.send(`${bot.emojis.find(`name`, 'error')} Dostęp zablokowany! Nie posiadasz wymaganych uprawnień, tylko członek administracji o stanowisku ` + "`🔓Moderator` (lub wyższa) może użyć tej komendy.");
        const agree    = "✅";
        const disagree = "❎";

        if (message.mentions.users.size === 0){
            return message.channel.send("**Administratorze!** Musisz oznaczyć użytkownika, który istnieje.");
        }
        
        let kickmember = message.guild.member(message.mentions.users.first());

        if(!kickmember){
            message.channel.send("**Administratorze!** Oznaczony użytkownik nie istnieje.");
        }
        
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
            return message.reply("**Hej Ho!** Nie mam uprawnień do wyrzucania użytkowników... Proszę, nadaj mi je.").catch(console.error);
        }
        
        let msg = await message.channel.send(`**Obywatele!** Trwa głosowanie o wyrzucenie użytkownika **${kickmember}** z serwera, aby zagłosować kliknij w odpowiednią reakcję. (10 sek.)`);
        
        await msg.react(agree);
        await msg.react(disagree);
        
        const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
        
        msg.delete();
        
        var NO_Count = reactions.get(disagree).count;
        var YES_Count = reactions.get(agree);

        if(YES_Count == undefined){
            var YES_Count = 1;
        }else{
            var YES_Count = reactions.get(agree).count;
        }
        
        var sumsum = new Discord.RichEmbed()
		.setAuthor("Głosowanie Zakończono")
		.setDescription(`**Ilość głosów na __NIE__**: ${NO_Count-1}. \n \n**Ilość głosów na __TAK__**: ${YES_Count-1}.`)
		.setFooter("Aby wyrzucić użytkownika wymagane jest 3+ głosów na TAK.")
        //.addField("Głosowanie ukończone, oto wyniki:", `~~----------------------------------------~~\n${bot.emojis.find(`name`, 'error')} Głosy na NIE: ${NO_Count-1}\n${bot.emojis.find(`name`, 'success')} Głosy na TAK: ${YES_Count-1}\nUWAGA! Aby wyrzucić go(ją) potrzeba 3+ głosów\n~~----------------------------------------~~`)
        
		//.setColor("RANDOM")
        
        await message.channel.send(sumsum);
        
        if(YES_Count >= 4 && YES_Count > NO_Count){
        
            kickmember.kick().then(member => {
                message.reply(`**Uwaga Uwaga!** Użytkownik ${member.user.username} został wyrzucony, iż głosów na tak było 3/lub więcej.`)
        })
        
        }else{
        
        message.channel.send("\n" + `**Uwaga Uwaga!** Użytkownik nie został wyrzucony... Zabrakło głosów...`);
        
        }
    }
	
	if(cmd === `${prefix}ascii`){
        ascii.font(args.join(' '), 'Doom', function(rendered) {
          rendered = rendered.trimRight();
    
          if(rendered.length > 2000) return message.channel.send("**Obywatelu!** Wybrana przez Ciebie wiadomość jest za długa. Maksymalna ilość znaków to `2000`!");
          message.channel.send(rendered, {
            code: 'md'
          });
        })
        //let cmdlogs = message.guild.channels.find(`id`, "471972734851612672");
        //cmdlogs.send(`${bot.emojis.find(`name`, 'alert')} The **${message.author.tag}**(**${message.author.id}**) user has used the **ascii** command on the **${message.guild.name}**(**${message.guild.id}**) server.`);
    }
	
	if(cmd === `${prefix}profile` || cmd === `${prefix}userinfo`){
        let aUser = message.mentions.users.first() || message.author;
        const userinfo = new Discord.RichEmbed()
        .setColor("FFA07A")
        .setAuthor(`Profil ${aUser.username}`, `https://cdn.discordapp.com/emojis/472480341299298304.png?v=1`)
        .setThumbnail(aUser.displayAvatarURL)
        .addField("ID:", `${aUser.id}`)
        .addField("Pseudonim:", `${aUser.nickname ? aUser.nickname : "None"}`)
        .addField("Konto utworzone:", `${moment(aUser.createdAt).format('DD.MM.YYYY HH:mm:ss')}`)
        .addField("Dołączył(a) do serwera:", `${moment(aUser.joinedAt).format('DD.MM.YYYY HH:mm:ss')}`)
		.addField("Ilość złoty (PLN):", "Użytkownik posiada " + "`" + `${db.fetch(aUser.id + '.money') || "0"}` + " PLN`.") 
        .addField("Odznaczenia:", "`ta funkcja już wkrótce`")
        .addField("Status:", `${aUser.presence.status.replace("dnd", "Niedostępny")}`)
        .addField("Aktualna gra:", `${aUser.presence.game ? aUser.presence.game.name : 'Brak'}`)
        .setFooter(`${moment(message.createdAt).format('HH:mm:ss')} | Użyto przez ${message.author.tag}.`)
        message.channel.send(userinfo);
    }
	
});

bot.login(process.env.TOKEN);