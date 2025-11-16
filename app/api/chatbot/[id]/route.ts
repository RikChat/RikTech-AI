import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  return NextResponse.json({ id: params.id, message: "Simulated response", input: body });
}