'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();
const setting = require("./package.json");
require("dotenv").config();

console.clear();
console.log(`
██████╗ ██╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗                                    
██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗  
██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║  
██║  ██║██║╚════██║██║     ██║   ██║██╔══██╗██║  ██║            Ver.${setting.version}
██████╔╝██║███████║╚██████╗╚██████╔╝██║  ██║██████╔╝   Create by. patrickmonster
╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝                 [neocats_]
                                                                                       
████████╗██╗    ██╗██╗████████╗ ██████╗██╗  ██╗    ███╗   ███╗ ██████╗ ██████╗ ███████╗
╚══██╔══╝██║    ██║██║╚══██╔══╝██╔════╝██║  ██║    ████╗ ████║██╔═══██╗██╔══██╗██╔════╝
   ██║   ██║ █╗ ██║██║   ██║   ██║     ███████║    ██╔████╔██║██║   ██║██║  ██║███████╗
   ██║   ██║███╗██║██║   ██║   ██║     ██╔══██║    ██║╚██╔╝██║██║   ██║██║  ██║╚════██║
   ██║   ╚███╔███╔╝██║   ██║   ╚██████╗██║  ██║    ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████║
   ╚═╝    ╚══╝╚══╝ ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
`)

const twitch_options = {
    connection: {
      reconnect: true,
      secure: true,
    },
    identity :{
        username: process.env.ID,
        password: process.env.PASSWORD,
    },
    channels: [process.env.TARGET],
}

client.on("ready", () => {
    console.log(`starting live service.... ${new Date()}`);
    console.log(`Logged in as ${client.user.tag}!`);
    twitch_options.target_channel = client.channels.cache.get(process.env.DISCORD_CHANNEL);
    if(twitch_options.channels.length == 1)
        client.user.setActivity(`${twitch_options.channels[0].substr(1)}방송을`, { type: 'WATCHING' });
    else client.user.setActivity(`${twitch_options.channels[0].substr(1)} 외${twitch_options.channels.length-1} 방송을`, { type: 'WATCHING' });
});

client.login(process.env.DISCORD_TOKEN);
////////////////////////////////////////트위치
// const tmi = require("tmi.js");
// const twitch = new tmi.Client(twitch_options);
// twitch.on("timeout", (channel, msg, self, time, tags) => {
//     twitch_options.target_channel.send(`타임아웃 [${channel}](${time}): ${msg}`);
// });
// twitch.on("ban", (channel, msg, self, tags) => {
//     twitch_options.target_channel.send(`벤 [${channel}]: ${msg}`);
// });
// twitch.on("join", (channel)=>{
//     console.log(`${channel}방송을 시청중...`);
// });
// twitch.connect().catch(console.error);