const { sck } = require('../../lib/core')
const { prefix } = require('../../config') 

module.exports = {
    name: 'deact',
    category: 'group',
    desc: 'Switches for varios works.',
    async exec(citel, Void,args) {
        if (!args.join(" ")) return citel.reply(`❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw`)
			if (!citel.isGroup) return citel.reply("This feature in only for Group.")
			
			if (!isAdmins || !isCreator) return citel.reply("❌ This Command is only for Admin")
			if (args[0] == "antilink") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("Antilink disabled")
						}
						else {
							if (usr.antilink !== "true") return citel.reply(" Antlinki was already disabled")
							await sck.updateOne({ id: citel.chat }, { antilink: "false" })
							return citel.reply("Disabled antilink Successfully.");
						}
					})
			}
			else if (args[0] == "events") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("Events were already disabled")
						}
						else {
							if (usr.events !== "true") return citel.reply("Events was already disabled")
							await sck.updateOne({ id: citel.chat }, { events: "false" })
							return citel.reply("Successfully Disabled *Events*");
						}
					})
			}
			else if (args[0] == "cardgame") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("Card game was already disabled")
						}
						else {
							if (usr.cardgame !== "active") return citel.reply("Card game was already disabled")
							await sck.updateOne({ id: citel.chat }, { cardgame: "false" })
							return citel.reply("Successfully Disabled *Card Game*");
						}
					})
			}
			else if (args[0] == "bot") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("*Bot* is already disabled")
						}
						else {
							if (usr.botenable !== "true") return citel.reply("*Bot* was already disabled")
							await sck.updateOne({ id: citel.chat }, { botenable: "false" })
							return citel.reply("🧩 Successfully Disabled *Bot*");
						}
					})
			}
			else if (args[0] == "nsfw") {
				sck.findOne({ id: citel.chat })
					.then(async (usr) => {
						if (!usr) {
							return citel.reply("*NSFW* is already disabled")
						}
						else {
							if (usr.nsfw !== "true") return citel.reply("*NSFW* is already disabled")
							await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
							return citel.reply("Successfully Disabled *NSFW*");
						}
					})
			}
			else {
				citel.reply("Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n-cardgame\nbot")
			}
 
    }
 }