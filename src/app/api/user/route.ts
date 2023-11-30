import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    {
      username: 'AAA',
      first_name: 'aaa',
      last_name: 'aaa',
    },
    {
      username: 'BBB',
      first_name: 'bbb',
      last_name: 'bbb',
    },
    {
      username: 'CCC',
      first_name: 'ccc',
      last_name: 'ccc',
    },
  ])
}
