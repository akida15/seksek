const { sck1 } = require('../../lib/core')
const { tlang } = require('../../lib/scraper')

module.exports = {
   name: 'unban',
   category: 'owner',
   desc: 'Unbans banned user (from using bot).',
   async exec(citel, Void,args,mentionByTag) {
    if (!isCreator) return citel.reply("This command is onlt for my Owner")
    try {
                         let mention = mentionByTag
   let users = await (mention[0]) || citel.msg.contextInfo.participant
 if (!users) return citel.reply("Please mention any user.❌")
let pushnamer = Void.getName(users);
sck1.findOne({ id : users }).then(async(usr) => {
      if (!usr) {
    console.log(usr.ban)
return citel.reply(`${pushnamer} is unbanned.`)
  } else {
    console.log(usr.ban)
  if(usr.ban !== "true") return citel.reply(`${pushnamer} is already unbanned.`)
               await sck1.updateOne({ id: users }, {ban: "false"})
         console.log("user banned")
           return citel.reply(`${pushnamer} is free as a bird now`)
         }
     })
          } catch {
return citel.reply("Please mention any user.❌")
  }


   }
}
