'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Updated links array with correct paths
const links = [
  { name: 'Home', href: '/ui/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/ui/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/ui/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon; // Dynamically get icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] w-full items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition-colors duration-300 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-3 md:px-3', // Make all buttons the same size
              {
                'bg-sky-100 text-blue-600': pathname === link.href, // Highlight active link
                'focus:outline-none': true, // Remove default outline
              }
            )}
            style={{
              backgroundColor: pathname === link.href ? 'var(--secondary-color)' : 'var(--background-color)',
              color: pathname === link.href ? 'var(--primary-color)' : 'var(--text-color)',
            }} // Apply color styling dynamically
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
