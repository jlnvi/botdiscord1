const { Client , GatewayIntentBits} = require ("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const token  = "MTIzOTQ5MTczODk2MDM5NjMxOQ.Gr39P_.58dRVfHf7xi02rrisQxyjLqhDsHwGwwH07Tdxw";

const client = new Client({
    intents:[
        //Chaque guild Discord peut être personnalisée avec différents canaux textuels et vocaux, des rôles pour les membres, ...
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ]
  });
    //Utiliser des constantes pour les données importées rend le code plus lisible et compréhensible.
    // donc c'est mieux de creer des commandes 
    const hey = new SlashCommandBuilder()
      .setName("hey")
      .setDescription("renvoi hey")
  
    const whoami = new SlashCommandBuilder()
      .setName("who-am-i")
      .setDescription("give the information of the user")
  
  
  client.on('ready', () =>{
  
    client.guilds.cache.get("1224989267881627668").commands.create(hey);
    client.guilds.cache.get("1224989267881627668").commands.create(whoami);
    //dans ces deux lignes, nous faisons un appel pour que la commandes soit importer , si on les appels pasle bot ne comprendra pas son intéret donc ne repondra pas 
  
    console.log("bot connecté en tant que " + client.user.tag)// ici nous indiquons dans notre terminale que notre bot est bien en ligne.
    client.user.setPresence({
        activities: [{
            name: "Valorant"
        }]
     })
  });
  
  client.on("interactionCreate", interaction=> {
    //ici on fait la reponse de la commande hey 
      if(interaction.commandName === "hey"){
        interaction.reply("hey " + interaction.user.username);
  
      }
      //Ici on fait la reponse poyur la commande who am i 
      if(interaction.commandName === "who-am-i"){
        interaction.reply("you are: " + interaction.user.username + "\nyour id is: " + interaction.user.id + "\nyour avatar is: " + interaction.user.avatar + "\nyour server id is: " + interaction.guild.id)
      }
  
  
  });

//On connecte le bot
client.login(token)