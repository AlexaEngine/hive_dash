import Link from 'next/link';
import NavLinks from './nav-links';
import HiveLogo from '../hive-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-0 md:px-2">
      {/* Wrap Logo and Navigation Links in a single container */}
      <div className="flex flex-col items-start justify-start gap-4">
        <Link href="/" className="flex items-center">
          <HiveLogo className="mb-0" />
        </Link>

        {/* Navigation Links */}
        <NavLinks />
      </div>

      {/* Sign Out Button */}
      <form className="mt-auto">
        <Link
          href="/"
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium bg-[var(--background-color)] text-[var(--text-color)] hover:bg-[var(--hover-primary)] hover:text-[var(--secondary-color)] md:flex-none md:justify-start md:p-3 md:px-3"
        >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </Link>
      </form>
    </div>
  );
}
