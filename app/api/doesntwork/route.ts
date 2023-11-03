import { NextResponse, type NextRequest } from 'next/server';

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