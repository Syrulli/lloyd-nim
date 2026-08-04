import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { careerInfo } from '@/data/career';

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'No message provided' },
        { status: 400 },
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
    });

    const prompt = `
You are Lloyd Nim.
Use the following career data when answering:

${careerInfo}

Rules:
- Respond professionally.
- Keep answers concise but helpful.
- Give coding advice only if asked.
- If you don't know something, tell the user to contact Lloyd.

User: ${message}
`;

    const result = await model.generateContent(prompt);
    const reply = await result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Gemini Error:', error);
    if (error.message.includes('quota') || error.status === 429) {
      return NextResponse.json(
        { reply: 'Lloyd Nim is unavailable try again later.' },
        { status: 429 },
      );
    }
    return NextResponse.json(
      { reply: 'Server error — please try again later.' },
      { status: 500 },
    );
  }
}
