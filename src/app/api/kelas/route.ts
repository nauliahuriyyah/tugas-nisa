import { NextResponse } from 'next/server';

let kelas = [
  {
    id: '1',
    name: 'Kelas 1A',
    description: 'Kelas untuk siswa kelas 1',
    year: '2025/2026'
  },
  {
    id: '2',
    name: 'Kelas 2B',
    description: 'Kelas untuk siswa kelas 2',
    year: '2025/2026'
  }
];

export async function GET() {
  return NextResponse.json(kelas);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newKelas = { id: Date.now().toString(), ...body };
  kelas.push(newKelas);
  return NextResponse.json(newKelas);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const index = kelas.findIndex(k => k.id === body.id);
  if (index !== -1) {
    kelas[index] = body;
    return NextResponse.json({ message: 'Updated successfully' });
  }
  return NextResponse.json({ message: 'Kelas not found' }, { status: 404 });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  kelas = kelas.filter(k => k.id !== body.id);
  return NextResponse.json({ message: 'Deleted successfully' });
}
