import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { careerInfo } from '@/data/career';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'No message provided' },
        { status: 400 },
      );
    }

    const prompt = `
You are Lloyd Sydlik Languido.

Use the following career data when answering:

${careerInfo}

Rules:
- Respond professionally.
- Keep answers concise but helpful.
- Give coding advice only if asked.
- If you don't know something, tell the user to contact Lloyd.

User: ${message}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: prompt,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error('Gemini Error:', error);

    return NextResponse.json(
      {
        reply: 'Server error — please try again later.',
      },
      {
        status: error?.status || 500,
      },
    );
  }
}
