
const Discord = require("discord.js");
const Client = new Discord.Client;
const config = require("./config.json")

Client.on('ready', async () => {

    console.log('Le bot est en marche');
    Client.user.setStatus('dnd');
    setTimeout(() => {
        Client.user.setActivity('Viole tout les gang de redside');
    }, 100)
    

});
Client.on("guildMemberAdd", async member => {
    member.send("Bienvenue sur le discord spanish lords, si tu souhaite etre recruter je te laisse dm un des deux jefe ! ")
    member.roles.add('830468109742899261');

})




Client.on('message', message => {
    if(message.content.startsWith('!clear')){
    message.delete();
        if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);
            if(args[1]){
                if(!isNaN(args[1]) && args[1]> 0 && args[1]<= 99){
                    
                    message.channel.bulkDelete(args[1])
                   
                }
            }  
        }
    }
        
})

Client.login(config.token)