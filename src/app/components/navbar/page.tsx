import Link from 'next/link';
import './style.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">Moiz Ali</Link>
      </div>
      <ul className="navbar-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/components/about">About</Link></li>
        <li><Link href="/components/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
