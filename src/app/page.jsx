import HiveLogo from '@/app/ui/hive-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '../app/ui/fonts.js';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:flex-row">
      {/* Left container for Logo and Text */}
      <div className="flex flex-col items-center md:items-start gap-0 md:w-2/5"> {/* Centered logo and text on small screens, aligned left on larger screens */}
        
        {/* Logo Container */}
        <HiveLogo className="w-full m-0 p-0" /> {/* Full width logo with no margin or padding */}
        
        {/* Text container aligned with logo width and more vertical */}
        <div className="flex flex-col justify-center gap-8 rounded-lg bg-transparent-50 px-6 py-10 mt-0 w-full text-balance"> {/* Added utility class for balanced text */}
          <p
            className={`${lusitana.className} antialiased text-xl text-secondary-color md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Hive.</strong> This is the example for the sidebar menu{' '}
            <a href="https://nextjs.org/learn/" className="text-accent-color hover:text-primary-color">
              as a part of the Next.js Learn Course
            </a>
            , brought to you by Alexandra Grier.
          </p>

          {/* Log In Button with Link */}
          <Link
            href="/ui/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-secondary-color px-6 py-3 text-sm font-medium text-font-color transition-colors hover:bg-accent-color md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>

      {/* Right container for Hero Images */}
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero-desktop.png" // Path to your image in the 'public' folder
          width={1000}
          height={760}
          className="hidden md:block" // Hides on mobile, shows on desktop
          alt="Screenshots of the dashboard project showing desktop version"
        />
        {/* Mobile Hero Image */}
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>
    </main>
  );
}
