const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255686561714";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255686561714,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "=SUHAIL_19_13_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVoeUZIN2s1cTV5cndUWEZESktZempUcUpuUFlTQmN4NEdjaVhYZTN2OVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Njg2NTYxNzE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MDQ4RjY5RTQ5QTIyRDIwRjNGM0ZCMDNDOTM4QTdDM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2MjU5ODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWDM1LWxfa0lSWGF1LXo5QWZfM0ZkQVwiLFxuICBcInBob25lSWRcIjogXCI1YzdmMTE1MC1iNWJlLTRjOGItYWNiNy0zYmFkZWRjZmNmNThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgNzIsXG4gICAgICAxMTgsXG4gICAgICAzLFxuICAgICAgMTg5LFxuICAgICAgNTQsXG4gICAgICA2NyxcbiAgICAgIDQ5LFxuICAgICAgMjcsXG4gICAgICAxMTQsXG4gICAgICAxNzgsXG4gICAgICA2OSxcbiAgICAgIDE1MCxcbiAgICAgIDkzLFxuICAgICAgODksXG4gICAgICAxMTksXG4gICAgICAyMjcsXG4gICAgICA0NyxcbiAgICAgIDE5MCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAxNTksXG4gICAgICAyMjksXG4gICAgICAzMyxcbiAgICAgIDg2LFxuICAgICAgMTg3LFxuICAgICAgMTAyLFxuICAgICAgNjksXG4gICAgICA3OCxcbiAgICAgIDEyLFxuICAgICAgMTM3LFxuICAgICAgMjEzLFxuICAgICAgMTc1LFxuICAgICAgODIsXG4gICAgICAxNixcbiAgICAgIDgwLFxuICAgICAgNDEsXG4gICAgICAyMDgsXG4gICAgICAzOCxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkYxNzlSRVYxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2ODY1NjE3MTQ6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXJ3YV9ZXCIsXG4gICAgXCJsaWRcIjogXCIyMjM0Mjg5NDY3MjcxNjY6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3VwNWdzUXN0KzB0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRdnpycEVzRkE5K1hzc3ZQUERsUG5tdDFjRjBnK05kMXdJaTk4ckRsalNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJjK3ZmM1drMVV2d3YwNktjajVxQlpvRExvdTlUdjNlSUlUcC9KSmNmNnBIK1V4NnVuMWo3dEdtWWwvYzFVTVdXNFVQVXgwVU9Pa2NDa1pMekpHUkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRTalIzV1lDcXdmbHBKZGlJSUkxWk12SnFqRE41dmNyRUNVclF5RGlpa2lxYUFqYjJqMkdBenRBcnk3dnNSWTFlelpBcUd3MmM4eHZhOVhLRU80QmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY4NjU2MTcxNDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYyNTk3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURDNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREM0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibFZqL0JaS3ROSnNqVWxVR1N5OUxTdi8rKzBJS3Evbkhwb1pScDZRVTdCOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDc0NTEzMCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU3MDUwMzAwOFwifSIKfQ="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
