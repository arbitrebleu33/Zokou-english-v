const { zokou } = require('../framework/france');

zokou(
    {
        nomCom: 'Iambusy.stat',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '  https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = ` ╭━━━「 ♻𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫🎮 」❏
┆ ♻♯ROLE PLAYVERSE🎮
╰━━━━━━━━━━━━━❖
❖Pseudo👤:「 I AM BUSY」
❖Type de mage👤:「 MAHOTSUKAI」
❖Race:「 HUMAIN」
❖Rang:「E 」
❖Classe:「 NOVICE 🥉」
     ━━━━━━━━━━━━╮                                                    ┆
❖━━━━━━━━━━━━━╯

LOSE : 00 💢
WIN : 00 💢
LEVEL : START 🌟
Trophee : 00🏆

╭━━━「 ♻𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫🎮」❏
┆ ♻♯TOTAL FIGHT SEASON: 00 🎮⚔🛡
╰━━━━━━━━━━━━━❖
❏ MX : 00 🧭
❏ TOKEN : 00 🧭
❏ EC : 00 ♦
━━━━━━━━━━━━━━━━
*Equipment🎒: 00🥋*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);