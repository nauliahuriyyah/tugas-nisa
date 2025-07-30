'use client';

import { useEffect, useState } from 'react';

export default function KelasPage() {
  const [kelas, setKelas] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', year: '' });

  async function fetchKelas() {
    const res = await fetch('/api/kelas');
    const data = await res.json();
    setKelas(data);
  }

  async function handleAdd() {
    await fetch('/api/kelas', {
      method: 'POST',
      body: JSON.stringify(form)
    });
    setForm({ name: '', description: '', year: '' });
    fetchKelas();
  }

  async function handleDelete(id: string) {
    await fetch('/api/kelas', {
      method: 'DELETE',
      body: JSON.stringify({ id })
    });
    fetchKelas();
  }

  useEffect(() => {
    fetchKelas();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Kelas</h1>

      <div className="mb-4">
        <input
          placeholder="Nama Kelas"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Deskripsi"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <input
          placeholder="Tahun Ajaran"
          value={form.year}
          onChange={e => setForm({ ...form, year: e.target.value })}
        />
        <button onClick={handleAdd}>Tambah</button>
      </div>

      <ul>
        {kelas.map((k: any) => (
          <li key={k.id}>
            {k.name} - {k.year}
            <button onClick={() => handleDelete(k.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
