"use server"

export async function sendForm({ name, phone, service, device }) {
  const res = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID, text: `
            Новая заявка:
            имя:${name}
            телефон:${phone}
            устройство:${device}
            услуга:${service}`
    })
  })
    .then(res => res.json())
  console.log(res)
};

export async function authentification(login, password) {
  try {
    const response = await fetch("https://api.livesklad.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        login: login,
        password: password
      }),
      //next: { revalidate: 60 * 10 }
    });

    if (response.statusCode === 401) {
      throw new Error(`Авторизация не пройдена status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)

    return data.token;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export async function getOrder(id) {
  const token = await authentification( process.env.API_LOGIN, process.env.API_PASSWORD)
  console.log(id)
  try {
    const response = await fetch(`https://api.livesklad.com/company/orders?number=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
        Authorization: token
      },
    });

    if (response.status === 401) {
      throw new Error(response.statusCode, response.name, response.message);
    }

    let data = await response.json();
    let order = data.data[0]
    if (!order)
      return {}
    const status = STATUSES[order.status.type] 
    return { device: order.device, status: status, deadline: order.deadline, agent: order.counteragent.name, problem: order.problem[0], sn:order.sn, type:order.typeOrder };
    

  } catch (error) {
    console.error(error);
    throw error;
  }
};
const STATUSES = {new:'Новый', inWork:'В работе', wait:'Ожидает', finish:'Закончен', closed:'Закрыт'}





