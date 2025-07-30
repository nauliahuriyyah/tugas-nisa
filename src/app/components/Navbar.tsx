import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: 20, borderBottom: '1px solid gray' }}>
      <Link href="/" style={{ marginRight: 10 }}>Home</Link>
      <Link href="/about" style={{ marginRight: 10 }}>About</Link>
      <Link href="/contact" style={{ marginRight: 10 }}>Contact</Link>
      <Link href="/products/1">Product 1</Link>
    </nav>
  );
}
