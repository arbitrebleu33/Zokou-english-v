const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'zenitsu.stat',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = `╭━━━「 ♻️𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 🎮」❏
┆ *_♻️♯ROLE PLAYVERSE🎮_*
╰━━━━━━━━━━━━━❖
*❖Pseudo*👤:「 ZENITSU」
*❖Type de mage*👤:「 *_MAHOTSUKAI_*」
*❖Race*:「 *_HUMAIN_*」
*❖Rang*:「E 」
*❖Classe*:「 *_NOVICE 🥉_*」
        ━━━━━━━━━━━━╮                                                        ┆
❖━━━━━━━━━━━━━╯

  *LOSE : 00 💢*
  *WIN : 00 💢*
  *LEVEL : START 🌟*
  *_Trophee : 00🏆_*

╭━━━「 ♻️𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 🎮」❏
┆ *_♻️♯TOTAL FIGHT SEASON🎮: 00 ⚔️🛡️_*
╰━━━━━━━━━━━━━❖
*❏ MX : 00 🧭*
*❏ TOKEN : 00 🎟️:*
*❏ EC : 00 ♦️*
━━━━━━━━━━━━━━━
*Equipment🎒: 00🥋*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
const { zokou } = require('../framework/zokou');

zokou (
    {
        nomCom: 'Mei.stat',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '  https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = ` ╭━━━「 ♻𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 🎮」❏
┆ ♻♯ROLE PLAYVERSE🎮
╰━━━━━━━━━━━━━❖
❖Pseudo👤:「 MEI YAO」
❖Type de mage👤:「 MAHOTSUKAI」
❖Race:「 HUMAIN」
❖Rang:「E 」
❖Classe:「 NOVICE 🥉」
        ━━━━━━━━━━━━╮                                                           ┆
❖━━━━━━━━━━━━━╯

  LOSE : 00 💢
  WIN : 00 💢
  LEVEL : START 🌟
  Trophee : 00🏆

╭━━━「 ♻𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 🎮」❏
┆ ♻♯TOTAL FIGHT SEASON🎮: 00 ⚔🛡
╰━━━━━━━━━━━━━❖
❏ MX : 00 🧭
❏ TOKEN : 00 🧭:
❏ EC : 00 ♦
 ━━━━━━━━━━━━━━━
*Equipment🎒: 00🥋*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
const { zokou} = require('../framework/zokou');

zokou(
    {
        nomCom: 'Toyomi.stat',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '  https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = ` ╭━━━「 ♻𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 🎮」❏
┆ ♻♯ROLE PLAYVERSE🎮
╰━━━━━━━━━━━━━❖
❖Pseudo👤:「 TOYOMI ZIOLES」
❖Type de mage👤:「 MAHOTSUKAI」
❖Race:「 HUMAIN」
❖Rang:「E 」
❖Classe:「 NOVICE 🥉」
        ━━━━━━━━━━━━╮                                                       ┆
❖━━━━━━━━━━━━━╯

  LOSE: 00 💢
  WIN : 00 💢
  LEVEL : START 🌟
  Trophee : 00🏆

╭━━━「♻ 𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 🎮」❏
┆ ♻♯TOTAL FIGHT SEASON🎮: 00 ⚔🛡
╰━━━━━━━━━━━━━❖
❏ MX : 00 🧭
❏ TOKEN : 00 🎟:
❏ EC : 00 ♦ ━━━━━━━━━━━━━━━━
*Equipment🎒: 00🥋*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
