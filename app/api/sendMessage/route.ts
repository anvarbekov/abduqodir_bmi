import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, surname, phone, message } = await request.json();

  const BOT_TOKEN = "7072319554:AAHGEWfGH3w_Qjpr0Nn1WxN3r28AlxFlTUA";
  // const CHAT_ID = "1067413897"; // botga xabar yuboriladi
  const CHAT_ID = "-1002002130753"; // guruhga yuborish
  const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const text = `Ism: ${name}\nFamiliya: ${surname}\nTelefon raqam: ${phone}\nXabar: ${message}`;

  const response = await fetch(TELEGRAM_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    }),
  });

  if (response.ok) {
    return NextResponse.json({ message: 'Xabar yuborildi' });
  } else {
    return NextResponse.json({ message: 'Xatolik yuz berdi' }, { status: 500 });
  }
}
