const Discord = require("discord.js");
const db = require('quick.db');
const bot = new Discord.Client();
//const ascii = require("ascii-art");
const moment = require("moment");
//const randomstring = require("randomstring");
//const fs = require("fs");
//const ms = require("ms");
moment.locale('pl');

  bot.on("ready", e => {
	setInterval (function (){
	  var statusrand  = Math.floor(Math.random() * 8 + 1);
	  if (statusrand === 1) {
		bot.user.setActivity(`Zobacz: Topic Shop™`);   
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 2) {
		bot.user.setActivity(`Użyj: $help`);
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 3) {
		bot.user.setActivity(`Witaj na: Topic Hub©`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 4) {
		bot.user.setActivity(`Zdobądź: Topic Points™`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 5) {
		bot.user.setActivity(`Otrzymaj: Prezent`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 6) {
		bot.user.setActivity(`Wykorzystuj: Vouchery`); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand); 
	  }
	  if (statusrand === 7) {
		bot.user.setActivity(`Bądź z: Topic Hub©`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 8) {
		bot.user.setActivity(`Zbieraj: Topic Points™`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
  
	}, 10000);
  });
  
  bot.on("ready", e => {
	setInterval (function (){
	  bot.channels.get("530135686330712094").edit({ name: `➤ Użytkownicy: ${bot.guilds.get("454946768723902476").memberCount}`});    
	  
	  bot.channels.get("530135807470731295").edit({ name: `➤ Online: ${bot.guilds.get("454946768723902476").members.filter(m => m.presence.status === 'online').size}`});
		
	  bot.channels.get("530135867579301889").edit({ name: `➤ Dzień: ${moment(this.date).format('DD.MM.YYYY')}`});
		
	  bot.channels.get("530135944242659328").edit({ name: `➤ Administracja: ${bot.guilds.get("454946768723902476").roles.get("515933131807784968").members.size}`}); 
  
	}, 7000);
  });
  
  bot.on("guildMemberRemove", member => {
	  const embed = new Discord.RichEmbed()
          .setColor("#F08080")
          .setDescription(`Żegnaj **${member.user.tag}**. \n \nOjoj. Co spowodowało Twoje odejście?\nCzyżbyś postanowił/a wyjechać na inny kontynent?\n \n**Szerokiej drogi! (Odwiedź nas kiedyś).**`)
          .setFooter("Topic Hub - edycja 2019");
	  bot.channels.get("522007704357699584").send(embed);
  });
  
  bot.on("guildMemberAdd", member => {
	  const embed = new Discord.RichEmbed()
          .setColor("#FF5733")
          .setDescription(`Witaj **${member.user.tag}** na **Topic Hub©**. \n \nCzołem! Witaj na naszym osiedlu. \nPrzeczytaj nasze zasady, aby żadnej nie złamać (#regulamin). \nMożesz Wybrać także kilka ciekawych ról (#zarządzaj-rolami). \n\n **Miłych rozmów i zabawy!**`)
          .setFooter("Topic Hub - edycja 2019") //${bot.guilds.get("454946768723902476").memberCount}**.`)
	  bot.channels.get("522007704357699584").send(embed);
  });

//bot.on('message', async message => {
    //let prefix = "$";
    //let prefix = konfiguracja.prefix;
    //let messageArray = message.content.split(" ");
    //let cmd = messageArray[0];
    //let msg = message.content.startsWith;
    //let args = messageArray.slice(1);
	

//});

bot.login(process.env.TOKEN);
