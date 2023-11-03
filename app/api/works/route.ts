// import { MarketingEmail, PrismaClient, Prisma } from '@prisma/client';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  return new NextResponse(null, {
    status: 204
  });
}

export const POST = async (request: NextRequest) => {
  // Get JSON payload
  const data = await request.json();

  // Return Response
  return NextResponse.json(
    {
      data,
    },
    {
      status: 200,
    }
  );
};