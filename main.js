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
		bot.user.setActivity(`Friendly House`);   
		bot.user.setStatus("dnd");
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 2) {
		bot.user.setActivity(`Toxic House`);
		 // bot.user.setStatus("online")
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 3) {
		bot.user.setActivity(`Family Friendly`);  
		//bot.user.setActivity(
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 4) {
		bot.user.setActivity(`Friendly House`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 5) {
		bot.user.setActivity(`Family Friendly Content`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 6) {
		bot.user.setActivity(`Toxic House`); 
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand); 
	  }
	  if (statusrand === 7) {
		bot.user.setActivity(`Friendly Hause`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
	  if (statusrand === 8) {
		bot.user.setActivity(`Friendly House`);  
		//bot.channels.get("490431842424717322").setName(moment.utc(message.createdAt).format('HH:mm:ss'));
		console.log(statusrand);
	  }
  
	}, 10000);
  });
  
  bot.on("ready", e => {
	setInterval (function (){
	  bot.channels.get("538658607059959808").edit({ name: `➤ Użytkownicy: ${bot.guilds.get("536920630105341952").memberCount}`});    
	  
	  bot.channels.get("538658683324858388").edit({ name: `➤ Online: ${bot.guilds.get("454946768723902476").members.filter(m => m.presence.status === 'online').size}`});
		
	  bot.channels.get("538659344993091584").edit({ name: `➤ Data: ${moment(this.date).format('DD.MM.YYYY')}`});
		
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
