const Discord = require("discord.js"); //Ich definiere hier eine variable die den namen "Discord" hat. Diese variable hat funktionen von dem packet "discord.js". Mehr infos bei dem ready event.

const client = new Discord.Client({ // In dieser zeile defieniere ich die client. Das wort client kann man durch alles ersetzen was man möchte aber man muss es sich halt merken oder immer wieder nachgucken.(Das gleiche gilt für jede definition.)
    intents: [//Hier kommen die intents(rechte die der bot auf discord hat) in einer aufzählung.
        Discord.GatewayIntentBits.Guilds//die intents damit der bot auf die server auf denen er ist zugreifen kann
    ]
});//dieses ";" ist dafür da um eine zeile zu beenden ist aber nicht dringend notwendig also optional.

client.on/*Ich rufe ein client event auf*/("ready"/*Ich definiere welches event der bot ausführen soll*/, (client)/*ich sage das ich die client in dem event brauche*/ =>/*das ist ein error event(keine ahung warum das so heißt aber es hat nichts mit einem error zu tun)*/ {
    console.log("Der bot ist nun bereit.")//Ich lasse in die konsole schreiben das der bot jetzt bereit ist.
})

client.login("Dein_Token")//Die client loggt sich in den discord account vom discord bot ein.