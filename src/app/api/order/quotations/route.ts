import { postQuotations } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const response = await postQuotations(body);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('에러 :', error);
    return NextResponse.json({ error: '견적서 생성 요청 실패' });
  }
}