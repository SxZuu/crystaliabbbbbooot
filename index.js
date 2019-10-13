const Discord = require('discord.js');
const client = new Discord.Client();
let xp = require("./xp.json");

const fs = require("fs");




const exampleEmbed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setTitle('Aide')
  .setThumbnail('https://cdn.discordapp.com/attachments/632225139739721729/632225597619306497/sans-titre-1.jpg')
  .addField("_commandes miscelanous_", "++ping - affiche pong.\n")
  .addField("_commandes admin_", "++ kick permet d'expulser le membre mentioné")



client.on('message', msg => {




  client.user.setActivity('++help');

  
  if (msg.content === '++ping') {


    msg.channel.send("```Pong```")
  }
 


  if (msg.content === '++nothing') {


    msg.channel.send("c'est enuyant", {files: ["./images/sans-titre.png"]})
  }


  if (msg.content === '++help') {

  msg.channel.send(exampleEmbed);

  }
  client.on ("guildMemberAdd", member =>{


    var role = member.guild.roles.find ("name", "🔫| Member");
    member.addRole (role);




    

   })

    let xpAdd = Math.floor(Math.random() * 7) +8;
    console.log(xpAdd);
 
    if(!xp[msg.author.id]){
      xp[msg.author.id] = {

        xp: 0,
        level: 1
      };
    }


   
    let curxp = xp[msg.author.id].xp;
    let curlvl = xp[msg.author.id].level;
    let nextlvl = xp[msg.author.id].level * 300;
    xp[msg.author.id].xp = curxp +xpAdd;


    if(nextlvl <= xp[msg.author.id].xp){

      xp[msg.author.id].level = curlvl + 1;
      let lvlup = new Discord.RichEmbed()
      .setTitle("Nouveau niveau :heavy_plus_sign:")
      .addField("Vous etes maintenant niveau : ", curlvl  + 1);


      msg.channel.send(lvlup);





    }


      fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{

        if(err) console.log(err)
      });
      console.log(`le niveau est de ${xp[msg.author.id].level}`);

});



client.login('process.env.TOKEN');