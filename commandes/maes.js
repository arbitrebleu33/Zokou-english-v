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
zokou(
    {
        nomCom: 'banque',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '  https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = `  🧭𝐂𝐎𝐌𝐏𝐓𝐄 𝐁𝐀𝐍𝐂𝐀𝐈𝐑𝐄🧭
▬▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭

ROLISTE 👤:

ACHAT :

💰 SOLDES :💰

NEW SOLDE :00

DATE DE TRANSACTION📆:
░░░░░░░░░░░░░░░░░░░
  🌐MAESTRIA RP VERSE🌐
░░░░░░░░░░░░░░░░░░░ `;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
zokou(
    {
        nomCom: 'regle',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '  https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = `  joueur1👤🏵 :
══════════════════
stamina 🫀: 100🫀
PV❤ : 1000❤
ZENEN🌀 : 3000🌀
░░░░░░░░░░░░░░░░░░
joueur 2👤🏵 :
══════════════════
stamina 🫀: 100🫀
PV❤ : 1000❤
ZENEN🌀 : 3000🌀
░░░░░░░░░░░░░░░░░░░
Distance 10m🔵
Portee 7m🔮🧿
nombre de tour : 8TRS🪬
Latence 7min + 1⚠

RV: uniquement en cas d'assurance absolue sinon risque de pénalité ☯
══════════════════
Respect mutuelle de l'arbitre (modérateur) et de son adversaire🛑
interdit de discuter unitilement dans les arènes lors d'un combat sinon pénalités
░░░░░░░░░░░░░░░  `;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
