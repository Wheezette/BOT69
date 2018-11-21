const Discord = require("discord.js");
const db = require('quick.db');
const bot = new Discord.Client();
const ascii = require("ascii-art");
const moment = require("moment");
//const fs = require("fs");
const ms = require("ms");
moment.locale('pl');

bot.on("ready", e => {
	setInterval (function (){
	  var statusrand  = Math.floor(Math.random() * 8 + 1);
	  if (statusrand === 1) {
		bot.user.setActivity(`#wkrotce`);   
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 2) {
		bot.user.setActivity(`Niebawem serwer VPS!`);
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 3) {
		bot.user.setActivity(`V edycja serwera wystartowała!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 4) {
		bot.user.setActivity(`Przetestuj sklep! cc!sklep`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 5) {
		bot.user.setActivity(`Dziękujemy za korzystanie z bota!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 6) {
		bot.user.setActivity(`Dziękujemy, że jesteście z nami!`); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand); 
	  }
	  if (statusrand === 7) {
		bot.user.setActivity(`Nowe, lepsze funkcje już są!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 8) {
		bot.user.setActivity(`Bot zrobiony!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
  
	}, 10000);
  });
  
  bot.on("ready", e => {
	setInterval (function (){
	  bot.channels.get("505809906033754150").edit({ name: '🌕 H'});   
	  
	  bot.channels.get("505809906033754150").edit({ name: '🔴 He'});
  
	  bot.channels.get("505809906033754150").edit({ name: '🔵 Hej'}); 
  
	  bot.channels.get("505809906033754150").edit({ name: '🌕 Hejk'});
  
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Hejka'});  
  
	  bot.channels.get("505809906033754150").edit({ name: '🔵 Hejka,'});
  
	  bot.channels.get("505809906033754150").edit({ name: '🌕 Hejka, B'});  
  
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Hejka, Ba'}); 
		
	  bot.channels.get("505809906033754150").edit({ name: '🔵 Hejka, Baw'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🌕 Hejka, Baw s'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Hejka, Baw si'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔵 Hejka, Baw się'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🌕 Hejka, Baw się d'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Hejka, Baw się do'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔵 Hejka, Baw się dob'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🌕 Hejka, Baw się dobr'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Hejka, Baw się dobrz'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔵 Hejka, Baw się dobrze'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🌕 Hejka, Baw się dobrze!'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Zostań'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔵 na'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🌕 dłużej'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Zostań na dłużej!'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔵 Zostań'});
	
	  bot.channels.get("505809906033754150").edit({ name: '🌕 Zostań na'});
		
	  bot.channels.get("505809906033754150").edit({ name: '🔴 Zostań na dłużej!'});
		
	  //bot.channels.get("505809906033754150").edit({ name: 'To już V edycja!'});
  
	}, 7000);
  });
  
  bot.on("ready", e => {
	setInterval (function (){
	  bot.channels.get("505824891384365056").setName(`${bot.guilds.get("454946768723902476").memberCount}os / 1000os`);    
	  
	  bot.channels.get("505827628603801611").setName(`${bot.guilds.get("454946768723902476").roles.get("457106935720706048").members.size} partnerów`);
  
	  bot.channels.get("505829821482532871").setName(`${bot.guilds.get("454946768723902476").roles.get("457821597227679745").members.size} adminów`); 
  
	  bot.channels.get("505831581571612693").setName(`${moment(this.date).format('DD.MM.YYYY')}`);
  
	  bot.channels.get("505824891384365056").setName(`${bot.guilds.get("454946768723902476").memberCount}os / 1000os`);  
  
	  bot.channels.get("505824891384365056").setName(`${bot.guilds.get("454946768723902476").memberCount}os / 1000os`);
  
	}, 7000);
  });
  
  bot.on("ready", e => {
	setInterval (function (){
	  bot.channels.get("505824891384365056").setName(`${bot.guilds.get("454946768723902476").memberCount}os / 1000os`);    
	  
	  bot.channels.get("505827628603801611").setName(`${bot.guilds.get("454946768723902476").roles.get("457106935720706048").members.size} partnerów`);
  
	  bot.channels.get("505829821482532871").setName(`${bot.guilds.get("454946768723902476").roles.get("457821597227679745").members.size} adminów`); 
  
	  bot.channels.get("505831581571612693").setName(`${moment(this.date).format('DD.MM.YYYY')}`);
  
	  bot.channels.get("505824891384365056").setName(`${bot.guilds.get("454946768723902476").memberCount}os / 1000os`);  
  
	  bot.channels.get("505824891384365056").setName(`${bot.guilds.get("454946768723902476").memberCount}os / 1000os`);
  
	}, 7000);
  });
  
  bot.on("ready", e => {
	setInterval (function (){
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie');   
	  
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie Community');
  
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie'); 
  
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie Community');
  
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie');  
  
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie Community');
		
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie');
		
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie Community');
		
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie');
		
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie Community');
		
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie');
		
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie Community');
		
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie');
          
	  bot.guilds.get("454946768723902476").member("456018252158730250").setNickname('Cookie Community');
  
	}, 7000);
  });  
  bot.on("ready", e => {
	setInterval (function (){
	  bot.channels.get("505866770880397352").edit({ name: '🔐 St'});    
	  
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Stre'});
  
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa'});
  
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa Ad'});
  
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa Admi'});  
  
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa Admina'});
		
	  bot.channels.get("505866770880397352").edit({ name: '🔐 St'});
		
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Stre'});
		
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa'});
		
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa Ad'});
		
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa Admi'});
		
	  bot.channels.get("505866770880397352").edit({ name: '🔐 Strefa Admina'});
  
	}, 10000);
  });
  
  bot.on("guildMemberRemove", member => {
	  const embed = new Discord.RichEmbed()
          .setColor("#F08080")
          .setDescription(`Żegnaj **${member.user.username}**. \n \nPrzykro nam, że już odchodzisz, \nzawsze możesz tu wrócić, \nale... Dlaczego odchodzisz?`)
          .setFooter("©2018 Cookie Community");
	  bot.channels.get("505834357198684180").send(embed);
  });
  
  bot.on("guildMemberAdd", member => {
	  const embed = new Discord.RichEmbed()
          .setColor("#FF5733")
          .setDescription(`Witaj **${member.user.username}** na **Cookie Community**. \n \nNa początek przeczytaj #regulamin,\nnastępnie zweryfikuj się na #weryfikacja,\npotem przystosuj serwer do swoich potrzeb (#ustawienia),\nno i zacznij korzystać z naszych kanałów.`)
          .setFooter("©2018 Cookie Community") //${bot.guilds.get("454946768723902476").memberCount}**.`)
	  bot.channels.get("505834357198684180").send(embed);
  });

bot.on('message', async message => {
    let prefix = "cc!";
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
	if (message.channel.id === "511242701413416982") { 
		let embed = new Discord.RichEmbed()
		.setAuthor("Nowa prosba o weryfikacje!")
		.setDescription(`Użytkownik **${message.author.tag}** (id: **${message.author.id}**) prosi o weryfikację na serwerze **${message.guild.name}**.\n \nPoniżej masz krok po kroku jak przystąpić do weryfikacji.`)
		.addField("KROK #1", "Udaj się na kanał #wer-admin-access i prześwietl użytkownika poprzez komendę `" + `cc!profile <@${message.author.id}>` + "`. Skopiuj komendę.") 	
		.addField("KROK #2", "Jeśli nie masz zastrzeżeń, zweryfikuj użytkownika poprzez `" + `cc!wuser <@${message.author.id}>` + "`. Skopiuj komendę.")
		.addField("Masz zastrzeżenia?", "Jesli uzytkownik wydal Ci sie podejrzany i nie chcesz narazac serwera na zle rzeczy, skontaktuj się z `" + `${bot.users.get("396284197389729793").tag}` + "` (jest aktualnie `" + `${bot.users.get("396284197389729793").presence.status}` + "`).") 
		.setFooter("Popełniaj zgodnie z podaną instrukcją.");
		if(db.fetch(message.author.id + ".weryfikacja") === "on"){
			return;
		}
		
		db.set(message.author.id + ".weryfikacja", "on")
		bot.users.get("396284197389729793").send(embed);
		bot.users.get("372026600989917195").send(embed);
		bot.users.get("439129108392181773").send(embed);
		bot.users.get("327516769004814349").send(embed);
		bot.users.get("312831944679227402").send(embed);
		bot.users.get("494017032283619329").send(embed);
		bot.users.get("389835722082877440").send(embed);
		bot.users.get("303868105279537152").send(embed);
		bot.users.get("397067268070047746").send(embed);
		bot.users.get("266603823244640256").send(embed);
	}
	
	if(cmd === `${prefix}wuser`){
		if (!message.member.roles.find(r => r.id === "511250044981215252")) return message.channel.send("**EJ TY!** Nie posiadasz wymaganych uprawnien do uzyia tej komendy!");
		let wUser = message.guild.member(message.mentions.users.first()) ||  message.guild.members.get(args[0]);
		if(db.fetch(wUser.id + ".werstatus", "tak")){
			message.channel.send("**Administratorze!** Ten uzytkownik jest juz zweryfikowany!");
		}
		//const guildMember = wUser.member;
		wUser.addRole('456849366515187742');
		db.set(wUser.id + ".werstatus", "tak");
		message.channel.send(`**Administratorze!** Uzytkownik ${wUser} zostal poprawnie zweryfikowany!`);
		wUser.send("**Witamy!** Zostałeś(aś) zweryfikowany(a) przez **admina** na naszym serwerze, a mianowicie **Cookie Community**! Baw się dobrze. \n~~Pozdrawiamy, CC TEAM :).");
	}
	//db.add(message.author.id  + '.money', 1);
	if(cmd === `${prefix}rep`) {
		const embed = new Discord.RichEmbed()
		.setColor("RED")
		.setDescription("Bot jest w trybie PRAC TECHNICZNYCH i nie można z niego korzystać.\nPowód: Błędy...")
		if(message.author.id !== "396284197389729793") return message.channel.send(embed);
		let userR = message.mentions.users.first();
		if(args[0] == `<@${message.author.id}>`) return message.channel.send("**Obywatelu!** Nie możesz samemu sobie nadać reputacji!");
		if(args[0] == `@${message.author.tag}`) return message.channel.send("**Obywatelu!** Nie możesz samemu sobie nadać reputacji!");
		//db.add(userR.id + ".reputacja", 1);
		if(Date.now() < db.fetch(message.author.id + ".repstatus")) {
			return message.channel.send("**Obywatelu!** Reputację możesz przydzielać co 24h. Odczekaj ten czas.");
		}
		db.add(userR.id + ".reputacja", 1);
		db.set(message.author.id + ".repstatus", Date.now() + 86400000);
		message.channel.send(`**HEJ HO!** Nadałeś(aś) punkt reputacji dla ${userR}!`);
	}
	if(cmd === `${prefix}money`){
		//if(message.author.id !== "396284197389729793") return message.channel.send("**TA FUNKCJA JEST TESTOWANA** \nOznacza to, że może działać niepoprawnie... Dlatego nie możesz jej użyć.");
		if(!args[0]) {
			const stan = db.fetch(message.author.id + '.money') || "0";
			let embed = new Discord.RichEmbed()
			.setDescription("Twój stan konta wynosi: " + stan + " zł.");
			message.channel.send(embed);
			//message.channel.send("Twój stan konta wynosi: " + stan + " zł.");
		}
		if(args[0] == "add") {
			if (!message.member.roles.find(r => r.id === "511250016120209418")) return message.channel.send("**Obywatelu!** Nie masz wystarczającch uprawnień, aby użyć tej komendy.");
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
			if (!message.member.roles.find(r => r.id === "511250016120209418")) return message.channel.send("**Obywatelu!** Nie masz wystarczającch uprawnień, aby użyć tej komendy.");
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
	
	if(cmd === `${prefix}praca`){
		if(args[0] === "info"){
			if(args[1] === "informatyk"){
				let embed = new Discord.RichEmbed()
				.setAuthor("Informacja o pracy")
				.setDescription("Praca jako informatyk gwarantuje dobre zarobki oraz życie na dobrym poziomie")
				.addField("Nazwa pracy:", "Informatyk")
				.addField("Firma zapewniająca prace:", "**CC-SYSTEMS S.A**")
				.addField("Zarobki (za 2 dni):", "`2500 PLN`")
				.addField("Zarobki (za 30 dni):", "`37500 PLN`")
				.setFooter("Zainteresowany(a)? Pracuj! cc!praca zatrudnij informatyk...")
				message.channel.send(embed);
			}
		}
		if(args[0] === "zatrudnij"){
			if(!args[1]) {
				message.channel.send("**ZATRUDNIJ SIĘ W PRACY**\nChcesz pracować? Godnie zarabiać pieniądze? A może... Nie być bezrobotnym? Praca to idealne rozwiązanie!! \n \nMając pracę otrzymujesz:\n`Dzienne wynagrodzenie od ręki (PLN w CC-BOT)`\n`Nie będziesz bezrobotny(a)`\n`Szybciej zarabiasz pieniądze na zakupy w sklepie`... \n \n**Dostępne prace:** \n`Informatyk` - więcej info pod `praca info informatyk`...");
			}
			if(args[1] === "informatyk"){
				if(db.fetch(message.author.id + ".pracuje") === "tak") {
					message.channel.send("**Obywatelu!** Masz już pracę. Jeśli chcesz ją zmienić napisz prośbę do właściciela.");
				}
				db.set(message.author.id + ".pracuje", "tak");
				db.set(message.author.id + ".praca", "informatyk");
				db.set(message.author.id + ".wyplataczas", Date.now() + 259200000);
				message.channel.send("**Obywatelu!** Od teraz oficjalnie jesteś pracownikiem firmy informatycznej!");
			}
		}
		if(args[0] === "wyplata"){
			if (Date.now() < db.fetch(message.author.id + ".wyplataczas")) {    
            			message.author.send("**Użytkowniku.** Odebrałeś(aś) już swoją wypłatę. Możesz ją odebrać tylko raz w ciągu 72h (3 dni).")  
        		}
			db.add(message.author.id + ".money", 2500);
		}
	}
	
	if(cmd === `${prefix}sklep`){
		//if(message.author.id !== "396284197389729793") return message.channel.send("**TA FUNKCJA JEST TESTOWANA** \nOznacza to, że może działać niepoprawnie... Dlatego nie możesz jej użyć.");
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
			if(args[1] == "CC-SERVER") {
				if(db.fetch(message.author.id + ".vouchercc") === "wykorzystany") {
					//if(db.fetch(message.author.id + ".plec") === "Dziewczyna") return message.channel.send("**Obywatelko!** Już wykorzystałaś ten voucher... Był jednorazowy.");
					//if(db.fetch(message.author.id + ".plec") === "Chlopak") return message.channel.send("**Obywatelu!** Już wykorzystałeś ten voucher... Był jednorazowy.");
					return message.channel.send("**Obywatelu!** Ten voucher został już przez Ciebie wykorzystany...")
				}
				db.add(message.author.id + '.money', 2500);
				db.set(message.author.id + '.vouchercc', "wykorzystany");
				message.channel.send("**VOUCHER WYKORZYSTANY POMYŚLNIE**\nTwój voucher został pomyślnie wykorzystany... Dodał on Ci kwotę `2500 PLN`.");
			}
		}
		if(args[0] == "kup") {
			if(args[1] == "legenda") {
				if(db.fetch(message.author.id + ".zp") === "zakupione") {
					return message.channel.send("**Obywatelu!** Ta rola już została przez Ciebie zakupiona!")
				}

				if(db.fetch(message.author.id + ".zpg") === "zakupione") {
					return message.channel.send("**Obywatelu!** Posiadasz już rangę `Gigant`... Oznacza to, że tej nie możesz kupić. Natomiast możesz ją ulepszyć do rangi `Legenda` poprzez komendę `vip ulepsz`.")
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

				if(db.fetch(message.author.id + ".zp") === "zakupione") {
					return message.channel.send("**Obywatelu!** Posiadasz już rangę `Legenda`... Oznacza to, że tej nie możesz kupić.")
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
				.setDescription("**Panel VIP:** TAK\n**Strefa VIP:** TAK\n**Daily:** x4\n**Zmiana koloru nicku:** TAK\n**Zmiana Pseudonimu:** TAK\n**Dodawanie Reakcji:** TAK\n**Własny tytuł userinfo:** Darmowy\n**Role VIP:** TAK")
				.setFooter("Aby ją kupić, użyj cc!sklep kup legenda.");
				message.channel.send(embed);
			}
			if(args[1] == "gigant") {
				let embed = new Discord.RichEmbed()
				.setAuthor("Funkcje rangi: LEGENDA")
				.setDescription("**Panel VIP:** TAK\n**Strefa VIP:** TAK\n**Daily:** x2\n**Zmiana koloru nicku:** NIE\n**Zmiana Pseudonimu:** TAK\n**Dodawanie Reakcji:** NIE\n**Własny tytuł userinfo:** -50%\n**Role VIP:** NIE")
				.setFooter("Aby ją kupić, użyj cc!sklep kup gigant.");
				message.channel.send(embed);
			}
		}
	}
	
	if(cmd === `${prefix}vip`) {
		const embed = new Discord.RichEmbed()
			.setColor("RED")
			.setDescription("Ta funkcja zostanie udostępniona do użytku wkrótce!")
		if(!args[0]) {
			message.channel.send(embed);
		}
		if(args[0] == "panel") {
			message.channel.send(embed);
		}
		if(args[0] == "ulepsz") {
			if(db.fetch(message.author.id + ".money") < 50000) {
					return message.channel.send("**Obywatelu!** Posiadasz za mało pieniędzy, aby ulepszyć swoją rangę vip.")
			}
			db.subtract(message.author.id + '.money', 50000);
			message.channel.send(embed);
		}
	}
	
	if(cmd === `${prefix}daily`){
		//if(message.author.id !== "396284197389729793") return message.channel.send("**TA FUNKCJA JEST TESTOWANA** \nOznacza to, że może działać niepoprawnie... Dlatego nie możesz jej użyć");
		if(Date.now() < db.fetch(message.author.id + ".daily")) {
        		return message.channel.send("**Obywatelu**! Ty już odebrałeś(aś) swoje dzienne kredyty! Odczekaj 24h, zanim weźmiesz kolejne.")
           
		}
		//db.add(message.author.id  + '.money', 200);

		//message.channel.send("Twoje dzienne kredyty w wysokości **200 zł** zostały przez Ciebie odebrane.")

		if (message.member.roles.find(r => r.id === "456849366515187742")) {
			db.add(message.author.id  + '.money', 200);
			db.set(message.author.id  + ".daily",  Date.now() + 86400000)
			message.channel.send("Twoje dzienne kredyty w wysokości **200 zł** zostały przez Ciebie odebrane.")
		}

		if (message.member.roles.find(r => r.id === "457049143492476939")) {
			db.add(message.author.id  + '.money', 400);
			db.set(message.author.id  + ".daily",  Date.now() + 86400000)
			message.channel.send("Twoje dzienne kredyty w wysokości **400 zł** zostały przez Ciebie odebrane. (**Daily x2** - Gigant)")
		}

		if (message.member.roles.find(r => r.id === "457049316385882113")) {
			db.add(message.author.id  + '.money', 800);
			db.set(message.author.id  + ".daily",  Date.now() + 86400000)
			message.channel.send("Twoje dzienne kredyty w wysokości **800 zł** zostały przez Ciebie odebrane. (**Daily x4** - Legenda)")
		}
	} //
	
	if(cmd === `${prefix}kick`){
		if(!message.member.roles.find(r => r.id === "511250044981215252")) return message.channel.send("**Obywatelu!** Nie masz wystarczającch uprawnień, aby użyć tej komendy.");
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
        if(!message.member.roles.find(r => r.id === "511249815527751702")) return message.channel.send("**Obywatelu!** Nie masz wystarczającch uprawnień, aby użyć tej komendy.");
        //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${bot.emojis.find(`name`, 'lock')}` + " Nie posiadasz wymaganych uprawnień, musisz mieć rangę `JRMODERATOR`.");
        if (args[0].includes('@everyone')) return message.channel.send(`${bot.emojis.find(`name`, 'alert')} Przepraszam bardzo, w tym celu bota nie użyjesz!`);
        if (args[0].includes('@here')) return message.channel.send(`${bot.emojis.find(`name`, 'alert')} Przepraszam bardzo, w tym celu bota nie użyjesz!`);
        let sayMessage = args.join(" ");
        message.delete();
        message.channel.send(sayMessage);
    }
	
	if(cmd === `${prefix}votekick`){
        if(!message.member.roles.find(r => r.id === "511250044981215252")) return message.channel.send("**Obywatelu!** Nie masz wystarczającch uprawnień, aby użyć tej komendy.");
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
        let aUser = message.guild.member(message.mentions.users.first() || message.author) ||  message.guild.members.get(args[0]);
        const userinfo = new Discord.RichEmbed()
        .setColor("FFA07A")
        .setAuthor(`Profil ${aUser.username}`, `https://cdn.discordapp.com/emojis/472480341299298304.png?v=1`)
        .setThumbnail(aUser.displayAvatarURL)
        .addField("ID:", `${aUser.id}`)
        .addField("Pseudonim:", `${aUser.nickname ? aUser.nickname : "Brak"}`)
        .addField("Konto utworzone:", `${moment(aUser.createdAt).format('dddd, DD.MM.YYYY HH:mm:ss')}`)
        .addField("Dołączył(a) do serwera:", `${moment(aUser.joinedAt).format('dddd, DD.MM.YYYY HH:mm:ss')}`)
	.addField("Ilość złoty (PLN):", "Użytkownik posiada " + "`" + `${db.fetch(aUser.id + '.money') || "0"}` + " PLN`.") 
        .addField("Reputacja:", `${db.fetch(aUser.id + ".reputacja") || "0"} punktów reputacji.`)
        .addField("Status:", `${aUser.presence.status.replace("dnd", "Niedostępny")}`)
        .addField("Aktualna gra:", `${aUser.presence.game ? aUser.presence.game.name : 'Brak'}`)
        .setFooter(`${moment(message.createdAt).format('HH:mm:ss')} | Użyto przez ${message.author.tag}.`)
        message.channel.send(userinfo);
	}
	
	if(cmd === `${prefix}upr` || cmd === `${prefix}uprawnienia`){
        if (message.member.roles.find(r => r.id === "455426439433551883")) return message.channel.send(`${bot.emojis.find(`name`, 'pass')}` + " Twój poziom uprawnień: `Właściciel`.");
        if (message.member.roles.find(r => r.id === "455430899861815296")) return message.channel.send(`${bot.emojis.find(`name`, 'pass')}` + " Twój poziom uprawnień: `Starszy Administrator`.");
        if (message.member.roles.find(r => r.id === "456851721570746370")) return message.channel.send(`${bot.emojis.find(`name`, 'pass')}` + " Twój poziom uprawnień: `Administrator`.");
        if (message.member.roles.find(r => r.id === "456851799861624835")) return message.channel.send(`${bot.emojis.find(`name`, 'pass')}` + " Twój poziom uprawnień: `Młodszy Admin`.");
        if (message.member.roles.find(r => r.id === "456851627740102657")) return message.channel.send(`${bot.emojis.find(`name`, 'pass')}` + " Twój poziom uprawnień: `Moderator`.");
        if (message.member.roles.find(r => r.id === "457105125886918667")) return message.channel.send(`${bot.emojis.find(`name`, 'pass')}` + " Twój poziom uprawnień: `Młodszy Moderator`.");
        
        if (message.member.roles.find(r => r.id === "456849366515187742")) return message.channel.send(`${bot.emojis.find(`name`, 'pass')}` + " Twój poziom uprawnień: `Społeczność`.");
        if (message.member.roles.find(r => r.id === "454946768723902476")) return message.channel.send(`${bot.emojis.find(`name`, 'alert')} Wygląda na to, że nie posiadasz żadnej roli. Zgłoś się jak najszybciej do administratora.`)
	}
	
	if(cmd === `${prefix}server` || cmd === `${prefix}serverinfo`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setColor("FFA07A")
        .setAuthor(`${message.guild.name}`, `https://cdn.discordapp.com/emojis/473897310414176266.png?v=1`)
        .setThumbnail(sicon)
        //.addField("Name:", message.guild.name)
        .addField("Serwer utworzony:", `${moment(message.guild.createdAt).format('DD.MM.YYYY HH:mm:ss')}`)
        .addField("Dołączyłeś(aś):",`${moment(message.author.createdAt).format('DD.MM.YYYY HH:mm:ss')}`)
        .addField("Liczba użytkoników:", message.guild.memberCount)
        .addField("Region:", `${message.guild.region.replace("eu-central", ":flag_eu: EU Central")}`)
        .addField("Kanały tekstowe:", message.guild.channels.findAll("type", "text").length)
        .addField("Kanały głosowe:", message.guild.channels.findAll("type", "voice").length)
        .addField("Liczba ról:", `${message.guild.roles.size}`)
        .addField("Emotki:", message.guild.emojis.size)
        .addField("Właściciel Techniczny:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
        .setFooter(`${moment(message.createdAt).format('HH:mm:ss')} | Użyto przez ${message.author.tag}.`);
    
        message.channel.send(serverembed);
	}
	
	if(cmd === `${prefix}channel`){
	if(!message.member.roles.find(r => r.id === "511249815527751702")) return message.channel.send("**Obywatelu!** Nie masz wystarczającch uprawnień, aby użyć tej komendy.");
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        //if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**Obywatelu!** Nie masz wystarczających uprawnień, wymaganych do użycia tej komendy.");
        let channelname = args.slice(1).join(" ");
        let everyone = message.guild.roles.find(`name`, "@everyone");
        if(args[0] == 'lock') return message.channel.overwritePermissions(everyone, { SEND_MESSAGES: false, ADD_REACTIONS: false }), message.channel.send(`${bot.emojis.find(`name`, 'success')} Wedle twojego życzenia zablokowałem kanał. Inni już nie mogą tu pisać.`);
        if(args[0] == 'unlock') return message.channel.overwritePermissions(everyone, { SEND_MESSAGES: true, ADD_REACTIONS: true }), message.channel.send(`${bot.emojis.find(`name`, 'success')} Wedle twojego życzenia odblokowałem kanał. Inni znów mogą tu pisać.`);
        if(args[0] == 'setname') return message.channel.edit({ name: `${channelname}` }), message.channel.send(`${bot.emojis.find(`name`, 'success')} Nazwa kanału została zmieniona na: ${channelname}`);
        if(!args[0]) return message.channel.send(`**Administratorze!** Zastosuj się do poprawnego korzystania z tej komendy: ` + "`cc!channel <lock/unlock/setname>`.")
        //if(args[0] == 'setname') return message.channel.setName(channelname), message.channel.send(`${bot.emojis.find(`name`, 'success')} Mmm... You asked for a channel name change. It has been done! The new name of this channel is: **${channelname}**.`);
        //let cmdlogs = message.guild.channels.find(`id`, "471972734851612672");
        //cmdlogs.send(`${bot.emojis.find(`name`, 'alert')} The **${message.author.tag}**(**${message.author.id}**) user has used the **channel** command on the **${message.guild.name}**(**${message.guild.id}**) server.`);
	}
	
	if(cmd === `${prefix}eval`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        if(message.author.id !== '396284197389729793') return message.channel.send(`${bot.emojis.find(`name`, 'lock')}` + " Nie masz uprawnień do tej komendy, wymagana ranga: `Założyciel(ka)`.")
        if(!args[0]) return message.channel.send(`${bot.emojis.find(`name`, 'error')}` + " Proszę, abyś podał(a) kod, który chcesz evalować. Bez niego nie da rady ;(.")
        let result = eval(args.join(" ")).toString()
          let embed = new Discord.RichEmbed()
          //.setTitle("Eval")
          .addField(`${bot.emojis.find(`name`, 'jsonfile')} WEJŚCIE`, "```"+args.join(" ")+"```")
          .addField(`${bot.emojis.find(`name`, 'txt')} WYJŚCIE`, "```"+result+"```")
          .setColor("RANDOM")
          .setFooter(`Kod evalował(a) ${message.author.tag}`, `https://cdn.discordapp.com/emojis/472480341299298304.png?v=1`)
          message.channel.send(embed);
	}
	
	if(cmd === `${prefix}help` | cmd === `${prefix}hilfe`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        const helpmsg = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Moje komendy')
        .setDescription("Zobacz moje komendy poniżej, są naprawde fajne!")
        .addField('Podstawowe (5):', '`help` - wyświetla wszystkie komendy bota,\n`uprawnienia` - wyświetla twój poziom uprawnień na serwerze.')
        .addField('Zabawa (6):', '`ascii` - wyświetla tekst w ascii,\n`reverse` - odwraca podany tekst,\n`choose` - wybiera jedną z podanych wcześniej opcji,\n`avatar` - avatar podanego użytkownika,\n`hug` - przytulasz podanego użytkownika,\n`8ball` - pytanie do bota.. On odpowie.')
        .addField('**NOWE!** Support Team ( ):', '`Użyj cc!shelp, aby zobaczyć komendy administracyjne!`')
        .addField('Zdjęcia (1):', '`cat` - randomowe zdjęcie kota.')
        .addField('**NOWE!** | Informacje (3):', '`serverinfo` - informacje o serwerze,\n`userinfo` - informacje o danym użytkowniku\n**WKRÓTCE!** `botinfo` - informacje o oznaczonym bocie znajdującym się na serwerze.')
        .addField('**NOWE!** | Inne (2):', '`rep` - przydziela użytkownikowi punkt reputacji\n`propozycja` - wysyła propozycję dot. serwera\n`rekutacja <open/close>` - otwiera rekrutację na serwerze')
	.addField('**NOWE!** | Sklep (3):', '`sklep voucher <kod>` - wpisuje voucher na jakąś rangę/item\n`sklep <kup> <legenda/gigant>` - kupuje wybraną rangę vip\n`sklep lista` - lista itemów w sklepie\n`sklep funkcje <gigant/legenda>` - wyświetla funkcje podanej roli ze sklepu')
	.addField('**NOWE!** Ekonomia (3):', "`daily` - odbiera dzienne kredyty\n`money` - wyświetla stan konta\n**WKRÓTCE!** `przelej @member <kwota>` - przelewa daną kwotę dla użytkownika.")
        .setFooter(`${moment(message.createdAt).format('HH:mm:ss')} | Użyto przez ${message.author.tag}.`)
        message.channel.send(helpmsg);
	}
	
	if(cmd === `${prefix}shelp`){
		if (!message.member.roles.find(r => r.id === "457821597227679745")) return message.channel.send("**Obywatelu!** Musisz być osobą z Support Teamu Cookie Community, aby móc użyć tej komendy.");
		let shelp = new Discord.RichEmbed()
		.setAuthor("Komendy Supportu")
		.setDescription("Poniżej znajdują się komendy administracyjne wraz z opisem...")
		.addField("**NOWE!** Support Team (3):", "`ban @member <powód>` - banuje podanego użytkownika z podanym powodem... Później też wysyła wiadomość z banem na kanał #modlogi (wymagany poziom uprawnien `Moderator`)\n`kick @member powód` - wyrzuca użytkownika z serwera za podany powód... Wysyła wiadomość z tym na #modlogi (wymagany poziom uprawnien `JrModerator`)\n**WKRÓTCE!** `warn @member <powód>` - ostrzega użytkownika... 15 warnów = ban. (wymagany poziom uprawnien `Helper`)")
		message.channel.send(shelp);
	}

	if(cmd === `${prefix}ban`){
        if(!message.member.roles.find(r => r.id === "511249815527751702")) return message.channel.send("**Obywatelu!** Nie masz wystarczającch uprawnień, aby użyć tej komendy.");
        if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send(":x: Musisz oznaczyć poprawnego uzytkownika!");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`${bot.emojis.find(`name`, 'lock')}` + " Nie posiadasz wymaganych uprawnień, musisz mieć rangę `MODERATOR`.");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":lock: Ten użytkownik nie może zostać zbanowany!");
        if(!args[0]) return message.channel.send(`Nie podałeś powodu bana? Lub użytkownika? Więc bana nie ma :grinning:.`);
    
        const banEmbed = new Discord.RichEmbed()
        //.setDescription("WARN")
        //.setAuthor(`[BAN] ${bUser.tag}`, bUser.displayAvatarURL)
        .setColor("#9b0090")
        //.addField("Warned user:", `${wUser}`)
        .addField("Zbanowany(a):", bUser)
        .addField("Kanał:", message.channel)
        //.addField("O godzinie", moment(message.createdAt).format("YYYY.MM.DD, HH:mm:ss"))
        .addField("Moderator:", message.author.tag)
        .addField("Powód:", bReason)
        .setFooter(`$${moment(message.createdAt).format('HH:mm:ss')} | Zbanowany(a) na ${message.guild.name}.`)
    
        let banChannel = message.guild.channels.find(`name`, "modlogi");
        if(!banChannel) return message.channel.send("**Administratorze!** Kanał `modlogi` nie istnieje. Zgłoś to do jednego z dostępnych właścicieli, aby stworzył kanał.");

        message.channel.send(`**SUKCES!** Użytkownik **${bUser}** został zbanowany za **${bReason}**.`)
        message.guild.member(bUser).ban(bReason);
        banChannel.send(banEmbed);
    
        //let logiKomend = bot.channels.get("458569305341296641");
        //logiKomend.send(`Użytkownik: **${message.author.tag}** (**${message.author.id}**) \nUżył komendy **ban** na serwerze **${message.guild.name}**, zbanował **${bUser}** za **${bReason}**.`);
        return;
	}
	
	if(cmd === `${prefix}removerole`){
        if (!message.member.roles.find(r => r.id === "511249815527751702")) return message.channel.send(`${bot.emojis.find(`name`, 'error')} Dostęp zablokowany! Nie posiadasz wymaganych uprawnień, tylko członek administracji o stanowisku ` + "`🔏Administrator` (lub wyższa) może użyć tej komendy.");
        if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        //if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`${bot.emojis.find(`name`, 'lock')}` + " You do not have sufficient permissions. You must have `MANAGE_MEMBERS` permissions.");
        let rMember = message.guild.member(message.mentions.users.first()) ||  message.guild.members.get(args[0]);
        if(!rMember) return message.channel.send(`**Administratorze!** Proszę o podanie poprawnego użytkownika.`);
        let role = args.join(" ").slice(22);
        if(!role) return message.channel.send(`**Administratorze!** Musisz podać pełną nazwę roli!`);
        let gRole = message.guild.roles.find(`name`, role);
        if(!gRole) return message.channel.send(`**Administratorze!** Podana przez Ciebie rola nie istnieje. Sprawdź pisownię, być może jest tam błąd.`);

	if(args[0] === "[WŻ] Właściciel") return message.channel.send("**EJ TY!** Nie możesz odebrać tej roli, jest to zablokowane!");
	if(args[0] === "[WŻ] Opiekun Globalny") return message.channel.send("**EJ TY!** Nie możesz odebrać tej roli, jest to zablokowane!");
	if(args[0] === "[SPT] Wsparcie Serwera") return message.channel.send("**EJ TY!** Nie możesz odebrać tej roli, jest to zablokowane!");
	if(args[0] === "Administrator") return message.channel.send("**EJ TY!** Nie możesz odebrać tej roli, jest to zablokowane!");
	if(args[0] === "Moderator") return message.channel.send("**EJ TY!** Nie możesz odebrać tej roli, jest to zablokowane!");
	if(args[0] === "JrModerator") return message.channel.send("**EJ TY!** Nie możesz odebrać tej roli, jest to zablokowane!");
	if(args[0] === "Helper") return message.channel.send("**EJ TY!** Nie możesz odebrać tej roli, jest to zablokowane!");
		
        if(!rMember.roles.has(gRole.id)) return message.reply('On nie ma tej roli.');
        await(rMember.removeRole(gRole.id));

        try{
            await rMember.send(`**Obywatelu!** Straciłeś(aś) rolę **${gRole.name}** na serwerze **${message.guild.name}**!`)
            await message.channel.send(`**SUKCES!** Rola **${gRole.name}** została usunięta dla **<@${rMember.id}>**!`);
        }catch(error){
            console.log(error);
        }
	}
	
	if(cmd === `${prefix}addrole`){
        if (!message.member.roles.find(r => r.id === "511250016120209418")) return message.channel.send("**Obywatelu!** Posiadasz zbyt niskie uprawnienia, aby użyć tej komendy.");
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        //if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`${bot.emojis.find(`name`, 'lock')}` + " You do not have sufficient permissions. You must have `MANAGE_MEMBERS` permissions.");
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!rMember) return message.channel.send(`**Administratorze!** Proszę o podanie poprawnej nazwy użytkownika -> oznacz go.`);
        let role = args.join(" ").slice(22);
        //if(!args[1]) return message.channel.send(`${bot.emojis.find(`name`, 'error')} You must provide a role (give its name, it can not be a mention)`);
        let gRole = message.guild.roles.find(`name`, role);
        if(!gRole) return message.channel.send(`**Administratorze!** Podana przez Ciebie rola nie istnieje. Sprawdź pisownie, być może jest błąd.`);

	if(args[0] === "[WŻ] Właściciel") return message.channel.send("**EJ TY!** Nie możesz nadać tej roli, jest to zablokowane!");
	if(args[0] === "[WŻ] Opiekun Globalny") return message.channel.send("**EJ TY!** Nie możesz nadać tej roli, jest to zablokowane!");
	if(args[0] === "[SPT] Wsparcie Serwera") return message.channel.send("**EJ TY!** Nie możesz nadać tej roli, jest to zablokowane!");
	if(args[0] === "Administrator") return message.channel.send("**EJ TY!** Nie możesz nadać tej roli, jest to zablokowane!");
	if(args[0] === "Moderator") return message.channel.send("**EJ TY!** Nie możesz nadać tej roli, jest to zablokowane!");
	if(args[0] === "JrModerator") return message.channel.send("**EJ TY!** Nie możesz nadać tej roli, jest to zablokowane!");
	if(args[0] === "Helper") return message.channel.send("**EJ TY!** Nie możesz nadać tej roli, jest to zablokowane!");
        if(rMember.roles.has(gRole.id)) return;
        await(rMember.addRole(gRole.id));

        try{
            rMember.send(`**HEJ HO!** Otrzymałeś(aś) rolę **${gRole.name}** na serwerze **${message.guild.name}**!`)
            message.channel.send(`**SUKCES!** Rola o nazwie **${gRole.name}** została nadana dla użytkownika **<@${rMember.id}>**!`)
        }catch(error){
            console.log(error);
        }
	}
	
	if(cmd === `${prefix}avatar`){
        if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        let aUser = message.mentions.users.first() || message.author || message.user.id;
        let avEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        //.setDescription(`Avatar ${aUser.username}:`)
        //.setThumbnail(aUser.displayAvatarURL)
        .setDescription(`${bot.emojis.find(`name`, 'user')} Avatar ${aUser.username}:`)
        .setImage(aUser.displayAvatarURL)
        .setFooter(`Komenda wywołana przez ${message.author.tag}.`);
        message.channel.send(avEmbed);
        return;
	}
	
	if(cmd === `${prefix}hug`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        let aUser = message.mentions.users.first() || message.author || message.user.id;
        let huglinks = ["https://media.giphy.com/media/l0HlOvJ7yaacpuSas/giphy.gif", "https://media.giphy.com/media/xT39CXg70nNS0MFNLy/giphy.gif", "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif", "https://media.giphy.com/media/BVRoqYseaRdn2/giphy.gif", "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif"];
        let math = Math.floor((Math.random() * huglinks.length));
        let hugEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Użytkownik ${message.author.tag} przytulił(a) ${aUser.tag}.`, "https://cdn.discordapp.com/emojis/472468044871106591.png?v=1")
        .setImage(huglinks[math])

        if(!args[0]) return message.channel.send(`**HEJ HO!** Oznacz osobę, którą chcesz przytulić.`);
        message.channel.send(hugEmbed);
	}
	
	if(cmd === `${prefix}kiss`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        let aUser = message.mentions.users.first() || message.author || message.user.id;
        let kisslinks = ["https://media.giphy.com/media/4dCj46k0Qtyxy/giphy.gif", "https://media.giphy.com/media/bCY7hoYdXmD4c/giphy.gif", "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif", "https://media.giphy.com/media/5GdhgaBpA3oCA/giphy.gif", "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif", "https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif", "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif"];
        let math = Math.floor((Math.random() * kisslinks.length));
        let kissEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Użytkownik ${message.author.tag} pocałował(a) ${aUser.tag}.`, "https://cdn.discordapp.com/emojis/472468044871106591.png?v=1")
        .setImage(kisslinks[math])

        if(!args[0]) return message.channel.send(`**HEJ HO!** Oznacz osobę, którą chcesz pocałować.`);
        if(args[0] == `<@${message.author.id}>`) return message.channel.send('Sam(a) siebie chcesz pocałować? :)')
        message.channel.send(kissEmbed);
    }

    if(cmd === `${prefix}pat`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        let aUser = message.mentions.users.first() || message.author || message.user.id;
        let patlinks = ["https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif", "https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif", "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif", "https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif", "https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif", "https://media.giphy.com/media/SvQ7tWn8zeY2k/giphy.gif"];
        let math = Math.floor((Math.random() * patlinks.length));
        let patEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Użytkownik ${message.author.tag} pogłaskał(a) ${aUser.tag}.`, "https://cdn.discordapp.com/emojis/472468044871106591.png?v=1")
        .setImage(patlinks[math])
        
        let patEmbedd = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`${bot.emojis.find(`name`, 'like1')} Użytkownik ${message.author.tag} pogłaskał(a) samego siebie!`)
        .setImage(patlinks[math])

        if(!args[0]) return message.channel.send(`**HEJ HO!** Oznacz osobę, którą chcesz pogłaskać.`);
        if(args[0] == `<@${message.author.id}>`) return message.channel.send(patEmbedd)
        message.channel.send(patEmbed);
	}
	
	if(cmd === `${prefix}ankieta` || cmd === `${prefix}vote`){
        if (!message.member.roles.find(r => r.id === "456851799861624835")) return message.channel.send("**Obywatelu!** Nie masz wystarczających uprawnień do użycia tego!");
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        //if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":lock: You do not have sufficient permissions to create a survey.");
        const ankietaMessage = args.join(" ");
        //let ankieta = await message.channel.send(ankietaEmbed);
        let ankietaEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`NOWA ANKIETA`, `https://cdn.discordapp.com/emojis/472694503229358080.png?v=1`)
        .setDescription(ankietaMessage)
        .setFooter(`Ankieta stworzona przez ${message.author.tag}`);
    
        let ankieta = await message.channel.send(ankietaEmbed);
        ankieta.react(bot.emojis.find(`name`, 'success'));
        ankieta.react(bot.emojis.find(`name`, 'error'));
        message.delete();
        return;
    }

    if(cmd === `${prefix}reverse`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        if(!args[0]) return message.channel.send(`**HEJ HO!** Podaj jakikolwiek tekst, który chcesz odwrócić!`);
        if (args[0].includes('enoyreve@')) return message.channel.send(`**UWAGA!** Nie możesz tego zrobić.`);
        if (args[0].includes('ereh@')) return message.channel.send(`**UWAGA!** Nie możesz tego zrobić!`);
    
        function reverseString(str) {
            return str.split("").reverse().join("");
        }
        let sreverse = reverseString(args.join(' '))
        //if(sreverse === '@here' || sreverse === '@everyone' || sreverse === `https://discord.gg/${invite.code}`) return message.channel.send("Nie możesz tego odwrócić!")
        if(args[0] === sreverse) {
        sreverse = `${args.join(' ')} [wyszło na to samo ;(]`
		}
		let rember = new Discord.RichEmbed()
		.addField("Odwrócony tekst:", "`" + `${sreverse}` + "`")
		message.channel.send(rember);
        //message.channel.send(`${bot.emojis.find(`name`, 'repeat')} Odwrócony tekst: **${sreverse}**`);
    }

    if(cmd === `${prefix}cat`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        let catlinks = ["https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", "https://media.giphy.com/media/l1J3pT7PfLgSRMnFC/giphy.gif", "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif", "https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif", "https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif", "https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif", "https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif", "https://media.giphy.com/media/Q56ZI04r6CakM/giphy.gif"];
        let math = Math.floor((Math.random() * catlinks.length));
        let catEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`:cat: Randomowy kot`, `Tutaj jest jeden z moich kotów:`)
        .setImage(catlinks[math])
        .setFooter(`${message.createdAt.getHours()}:${message.createdAt.getMinutes()} | ${message.author.tag}`);
    
        message.channel.send(catEmbed);
    }

    if(cmd === `${prefix}8ball`){
        if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        //if(!args[2]) return message.channel.send(`${bot.emojis.find(`name`, 'error')} Please, give me the full question!`);
        if(!args[0]) return message.channel.send(`${bot.emojis.find(`name`, 'error')} Ahh... You did not give a question, can I know why?`);
        let replies = ["Tak, oczywiście", "Przepraszam, nie", "Skąd mam to wiedzieć?", "Możesz zapytać później?", "Hmm... Nie."];
    
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");
    
        let ballembed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
        .setColor("RANDOM")
        .setDescription(question)
        //.addField("Pytanie", question)
        .addField("Odpowiedź:", replies[result])
        .setFooter(`${message.createdAt.getHours()}:${message.createdAt.getMinutes()} | ${message.author.tag}`);
    
        message.channel.send(ballembed);
        return;
    }

    if(cmd === `${prefix}choose`){
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        var odp = Math.floor(Math.random() *2) + 1
        var a = args.join(" ").split(";")[0]
        var b = args.join(" ").split(";")[1]
        var odp2
        switch(odp) {
          case 1:
          odp2 = a;
          break;
      
          case 2:
          odp2 = b;
        }
		let messagechoose = await message.channel.send(`**CK** | Hmmmmmmmmm.....`)
		let cembed = new Discord.RichEmbed()
		.setDescription("**SUKCES!** Wybieram: `" + `${odp2}` + "`.")
		messagechoose.edit(cembed);
		//messagechoose.edit(`**SUKCES!** Wybieram: ` + "`" + `${odp2}` + "`.")
    }

    if(cmd === `${prefix}clear`){
        if (!message.member.roles.find(r => r.id === "456851627740102657")) return message.channel.send("**Obywatelu!** Nie masz wystarczających uprawnień do użycia tej komendy.");
        //if(konfiguracja.commands === "disabled") return message.channel.send(`${bot.emojis.find(`name`, 'error')} All commands in the bot have been disabled!`);
        //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${bot.emojis.find(`name`, 'lock')}` + " You do not have sufficient permissions. You must have `MANAGE_MESSAGES` permissions, check them using `cb!permissions`.");
    
        let messagecount = parseInt(args.join(' '));
        message.channel.fetchMessages({
          limit: messagecount
        }).then(messages => message.channel.bulkDelete(messages));
        let purgeSuccessMessage = await message.channel.send(`**SUKCES!** Zostało wyczyszczone **${messagecount}** wiadomości na tym kanale!`);
        purgeSuccessMessage.delete(10000);
    }

    if(cmd === `${prefix}ping`){
        const m = await message.channel.send("Ping :ping_pong: ");
        m.edit(`:ping_pong: Pong! ${m.createdTimestamp - message.createdTimestamp}ms. API is ${Math.round(bot.ping)}ms`);
    }
	
});

bot.login(process.env.TOKEN);
