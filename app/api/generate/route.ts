import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { botId, botName, nodes } = body;
  // Generate a Next.js API route source code that can be used as a serverless endpoint.
  const code = `import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const payload = await req.json();
  // Minimal runtime interpreter for the bot nodes (sample)
  const userInput = payload.input || '';
  // TODO: replace with proper flow execution
  let reply = '';
  ${nodes.map((n:any, idx:any) => {
    if (n.type === 'text') return `reply += "${n.content.replace(/"/g,'\"')}\n";`;
    if (n.type === 'ai') return `// call OpenAI
reply += await openai.chat.completions.create({ model: 'gpt-4o-mini', messages: [{role:'user', content: \`${n.prompt}\nUser input: ${'${userInput}'}\`}] }).then(r=>r.choices[0].message.content) + '\n';`;
    return '';
  }).join('\n  ')}
  return NextResponse.json({ reply });
}
`;
  return NextResponse.json({ code });
}
