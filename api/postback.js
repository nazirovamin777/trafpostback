export default async function handler(req, res) {
    const { subid, status } = req.query;
  
    const token = '7562356925:AAEMVKokznf4jNdb3GAcTeSFgSWeafPghUo';
    const chatId = '6543733005';
    const message = `🔥 Новый лид\n🔗 ClickID: ${subid}\n📊 Статус: ${status}`;
  
    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  
    await fetch(tgUrl);
    res.status(200).send('OK');
  }
  