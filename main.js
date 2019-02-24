const Discord = require("discord.js");
const db = require('quick.db');
const bot = new Discord.Client();
//const ascii = require("ascii-art");
const moment = require("moment");
//const randomstring = require("randomstring");
//const fs = require("fs");
//const ms = require("ms");
moment.locale('pl');
bot.on('ready', () => {
   // console.log(`The bot has been turned on! His name is ${bot.user.tag}. Prefix: "cb!". I jest na ${bot.guilds.size} serwerach!`);
    bot.user.setStatus(`dnd`);
    bot.user.setActivity(`Schron`, {type: "WATCHING"});
});
//  bot.on("ready", e => {
//	setInterval (function (){
//	  var statusrand  = Math.floor(Math.random() * 8 + 1);
	//  if (statusrand === 1) {
	//	bot.user.setActivity(`cc!help | Witamy na cookie community!`);   
		//bot.user.setStatus("dnd");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
	//	console.log(statusrand);
	//  }
//	  if (statusrand === 2) {
	//	bot.user.setActivity(`cc!help | Powracamy do starej nazwy!`);
	//	 // bot.user.setStatus("online")
	//	//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
	//	console.log(statusrand);
	//  }
	//  if (statusrand === 3) {
	//	bot.user.setActivity(`cc!help | Niebawem więcej funkcji!`);  
		//bot.user.setActivity(
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
	//	console.log(statusrand);
//	  }
	//  if (statusrand === 4) {
	//	bot.user.setActivity(`cc!help | Cookie Community`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
	//	console.log(statusrand);
	 // }
//	  if (statusrand === 5) {
//		bot.user.setActivity(`cc!help | Regulamin jest nie lamac go kurwa!`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
	//	console.log(statusrand);
//	  }
//	  if (statusrand === 6) {
		//bot.user.setActivity(`cc!help | 0 komend, fajnie cnie`); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		//console.log(statusrand); 
	//  }
	//  if (statusrand === 7) {
	//	bot.user.setActivity(`cc!help | Zostan na dluzej!`);  
	//	//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
	//	console.log(statusrand);
//	  }
//	  if (statusrand === 8) {
//		bot.user.setActivity(`cc!help | Zapraszaj innych!`);  
	//	//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
	//	console.log(statusrand);
//	  }
  
//	}, 10000);
//  });
  
  bot.on("ready", e => {
	setInterval (function (){
//	  bot.channels.get("538658607059959808").edit({ name: `➤ Użytkownicy: ${bot.guilds.get("531073961564438528").memberCount}`});    
	  
//	  bot.channels.get("538658683324858388").edit({ name: `➤ Online: ${bot.guilds.get("531073961564438528").members.filter(m => m.presence.status === 'online').size}`});
		
	//  bot.channels.get("538659344993091584").edit({ name: `➤ Data: ${moment(this.date).format('DD.MM.YYYY')}`});
		
	//  bot.channels.get("530135944242659328").edit({ name: `➤ Administracja: ${bot.guilds.get("454946768723902476").roles.get("515933131807784968").members.size}`}); 
  
	}, 7000);
  });

  bot.on("ready", e => {

	setInterval (function (){
	//	bot.channels.get("538655244347899905").edit({ name: `🔴 Witamy!`});  
		//bot.channels.get("538655244347899905").edit({ name: `🔴 Witamy! Zostań`});  
		//bot.channels.get("538655244347899905").edit({ name: `🔴 Witamy! Zostań na`});  
		//bot.channels.get("538655244347899905").edit({ name: `🔴 Witamy! Zostań na dłużej!`});  
		//bot.channels.get("538655244347899905").edit({ name: `🔴 Oto`});  
		//bot.channels.get("538655244347899905").edit({ name: `🔴 Oto statystyki`});  
		//bot.channels.get("538655244347899905").edit({ name: `🔴 Oto statystyki serwera:`});  
	 // bot.channels.get("538658607059959808").edit({ name: `➤ Użytkownicy: ${bot.guilds.get("531073961564438528").memberCount}`});   
	//  bot.channels.get("538658683324858388").edit({ name: `➤ Online: ${bot.guilds.get("531073961564438528").members.filter(m => m.presence.status === 'online').size}`});
	//  bot.channels.get("538659344993091584").edit({ name: `➤ Data: ${moment(this.date).format('DD.MM.YYYY')}`});
	//  bot.channels.get("530135944242659328").edit({ name: `➤ Administracja: ${bot.guilds.get("454946768723902476").roles.get("515933131807784968").members.size}`});
	}, 7000);

	  
  });

  bot.on("ready", e => {
	setInterval (function (){
		//bot.channels.get("538656255103860748").edit({ name: `>>>   fяιєи∂ℓу нσυѕє   <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   яιєи∂ℓу нσυѕє  f <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   ιєи∂ℓу нσυѕє  fя <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   єи∂ℓу нσυѕє  fяι <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   и∂ℓу нσυѕє  fяιє <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   ∂ℓу нσυѕє  fяιєи <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   ℓу нσυѕє  fяιєи∂ <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   у нσυѕє  fяιєи∂ℓ <<<`});   
	//	bot.channels.get("538656255103860748").edit({ name: `>>>   нσυѕє  fяιєи∂ℓу <<<`});   
	//	bot.channels.get("538656255103860748").edit({ name: `>>>   συѕє  fяιєи∂ℓу н <<<`});   
		//bot.channels.get("538656255103860748").edit({ name: `>>>   υѕє fяιєи∂ℓу нσ  <<<`});   
	//	bot.channels.get("538656255103860748").edit({ name: `>>>   ѕє fяιєи∂ℓу нσυ   <<<`});   
	//	bot.channels.get("538656255103860748").edit({ name: `>>>   є fяιєи∂ℓу нσυѕ   <<<`});   
	//	bot.channels.get("538656255103860748").edit({ name: `>>>   fяιєи∂ℓу нσυѕє   <<<`});   
	//  bot.channels.get("538658607059959808").edit({ name: `➤ Użytkownicy: ${bot.guilds.get("531073961564438528").memberCount}`});    

	//  bot.channels.get("538658683324858388").edit({ name: `➤ Online: ${bot.guilds.get("531073961564438528").members.filter(m => m.presence.status === 'online').size}`});

	 // bot.channels.get("538659344993091584").edit({ name: `➤ Data: ${moment(this.date).format('DD.MM.YYYY')}`});

	//  bot.channels.get("530135944242659328").edit({ name: `➤ Administracja: ${bot.guilds.get("454946768723902476").roles.get("515933131807784968").members.size}`}); 
  
	}, 7000);
  });
  
  bot.on("guildMemberRemove", member => {
	  
  });
  
  bot.on("guildMemberAdd", member => {
	  
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
