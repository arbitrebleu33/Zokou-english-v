const { zokou } = require('../framework/zokou');

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
