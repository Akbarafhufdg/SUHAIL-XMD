const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919027402995";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_34_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMzVWcHp1WXNmbG9TK2hjMm9RMlh2d3dGMFl4cmZnVzZGb0hGTjAwZlBqbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmF6RVE5Mm9TTWlLcE11a1JMNGk0QVwiLFxuICBcInBob25lSWRcIjogXCJiNmM1YWQ1Ny1lOTM3LTQ5M2YtOTdhMi0yZmNiNzE2ZjQ5YTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTMwLFxuICAgICAgMjA3LFxuICAgICAgMTE5LFxuICAgICAgMjA1LFxuICAgICAgMTQzLFxuICAgICAgODIsXG4gICAgICAyMTIsXG4gICAgICAxNjUsXG4gICAgICAxNzQsXG4gICAgICAyNyxcbiAgICAgIDY0LFxuICAgICAgMjIsXG4gICAgICAxODMsXG4gICAgICA2OSxcbiAgICAgIDIwNixcbiAgICAgIDk2LFxuICAgICAgMTE1LFxuICAgICAgMjQ3LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDEwNixcbiAgICAgIDk4LFxuICAgICAgMTcsXG4gICAgICAxNDUsXG4gICAgICAxMTAsXG4gICAgICAyNDAsXG4gICAgICAxNzQsXG4gICAgICAyLFxuICAgICAgMTE4LFxuICAgICAgMTk4LFxuICAgICAgMzIsXG4gICAgICAyNTMsXG4gICAgICAxNDQsXG4gICAgICAxNTUsXG4gICAgICAxMzUsXG4gICAgICAyMDUsXG4gICAgICA1OCxcbiAgICAgIDc4LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc3N0tMU0tSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwMzc0MDI5OTU6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMTI3ODAxMzM1OTE1OjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ011YnRvTUNFSTdLK2JjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid1FBcHVTeGIycGI5cmRvTmtPWXJlM2RhTlQzaXR6TXhaSWdWZUFjZnRrRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1U0FDc3FRdEtGbTlaZUFPNVROU29LZEtMV09aQ3I4UkFGb3k4Z1d1VEhDNWJzbVZXdlJod1phQXg1K016TkhHTlIyM29seWIwbC90Vk5TczQ5RWlBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkVGVEZG56ZUM2TDZtdStwVkdzOWpkOC9VbmxjSHVMTEdpcWt1V0FEZDVYRk5POVVXWFNTKytheVJuRGV0a2NOc3RGZDRjTk9wTWNTVmQ2QTZtNEVEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwMzc0MDI5OTU6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3OTQ4MDUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkNhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQ2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBOUFGQkNkM3lEcEFwYS9OdTlKcjFOUVlyMG45cVYwZExOckxFRStYbFJvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU0NDA1MDYzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzgxMjYwNTk0NVwifSIKfQ=="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
