import logo from '@/assets/images/logo.svg';
import ThemeToggle from '@/components/theme/ThemeToggle';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className='w-28 sm:w-40 mr-2'>
        <a href='/'>
          <Image src={logo} alt='Aly Badawy' />
        </a>
      </div>
      <nav className='text-sm sm:text-base flex'>
        <ul className='flex items-center gap-2 sm:gap-4 list-none'>
          <li>
            <Link href='/'>Home </Link>
          </li>
          <li>
            <Link href='/hire'>Hire me!</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
