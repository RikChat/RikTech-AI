import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const input = body.input || '';
  // Example simple behavior: echo input then call OpenAI for 'ai' nodes
  const resp = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: `User asked: ${input}` }]
  });
  const message = resp.choices?.[0]?.message?.content || 'No reply';
  return NextResponse.json({ id: params.id, message });
}
