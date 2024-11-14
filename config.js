const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/MANNO-GDS/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM";
global.website=process.env.GURL || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7NJbnB3/lo75s-RTo4294.jpg" || "https://i.ibb.co/BBp7HJC/ao4hf-B6-L3405.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© MANNO-GDS-INFO" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/7NJbnB3/lo75s-RTo4294.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_06_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDk0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2eS9jUEpReXhaZmZjK2dsclhMaGhndldxSkVTRlRJZEZJamhiN1M0NXl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTRzVKYmY3ZVFWSzlRdVhlbmJGWW5RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0NjdjMzRmLTcwYjYtNGZiZi1hMzZkLTI0YzMwMTEzNDM1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAzLFxuICAgICAgODQsXG4gICAgICA4OSxcbiAgICAgIDQyLFxuICAgICAgMTI0LFxuICAgICAgNDMsXG4gICAgICAxMjgsXG4gICAgICAyNCxcbiAgICAgIDI0MCxcbiAgICAgIDE2MCxcbiAgICAgIDQ2LFxuICAgICAgMTIsXG4gICAgICAxNTYsXG4gICAgICAxNjMsXG4gICAgICAyLFxuICAgICAgMTU2LFxuICAgICAgNzYsXG4gICAgICA3OCxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjEyLFxuICAgICAgMTI2LFxuICAgICAgMjU1LFxuICAgICAgMTQzLFxuICAgICAgMTMsXG4gICAgICAxNzcsXG4gICAgICAxNzIsXG4gICAgICA4NixcbiAgICAgIDE4MSxcbiAgICAgIDE2MixcbiAgICAgIDQwLFxuICAgICAgMTc5LFxuICAgICAgMTM2LFxuICAgICAgOTUsXG4gICAgICA5NixcbiAgICAgIDEwOCxcbiAgICAgIDIzNixcbiAgICAgIDQ3LFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMktYMkdaTVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5NDAyOTgzNTo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKIo+KIo+KAovCdkJLhtIDNpcmq4bSNIPCdkIDKn8mqIPCdkIrKnOG3p+G0gM2rybTigKLiiKPiiKNcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7iiKPiiKPigKJBbGhhbWR1bGlsbGFo4oCi4oij4oijXCIsXG4gICAgXCJsaWRcIjogXCIyNTA3MzIwODc0MDY3NDI6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzd2MGI0Q0VQZWoyTGtHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUUFhBVXdLZ0NvYVpoNWhWL3J5d2pCc0IzdUs3VStMWWh4d2UrM0hMR2tBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZnWlZzT0ltdHdNTUVsK096dnN5SGlVRDJwSnFOZVhSdUFuWjlES1RKN3E4ZmdHbGhuSi85d3Z1aEhYOU9OUy9WLzVPVEFuajhjZGxZYTRrZWlhTUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjE3MzRhQ2hKSDRUTGhvUWpFVWQ1RHhpOWtHVUFmbnV4Z21NNTlOY2lEc2tkS0RHZ2cwZHdwZWRHNnFCVXlmeTI0TjJPa2tSY2x4SnQ2L3dsMjg1SkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5NDAyOTgzNTo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE1OTY3OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQaVFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBpUS5qc29uIjogIntcImtleURhdGFcIjpcInNTQlZMREdJZlpsRUlGbDExWEU5OFpZc08rejlkQnFsR2tmMkVCMlBYcUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY4MjM1Njk0LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw2LDcsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀɴɴᴏ-ᴍᴅ ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • ᴍᴀɴɴᴏ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTech"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "『💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 💌』",
  ownername:process.env.OWNER_NAME|| "SAMMI-TECH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "MANNO"  ).toUpperCase(),



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
