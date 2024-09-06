import Image from 'next/image';

export default function HiveLogo({ className }) {
  return (
    <div className={`w-full max-w-xs mx-auto ${className}`}>
      <Image src="/logo.jpg" alt="Hive Logo" width={300} height={300} layout="responsive" />
    </div>
  );
}
