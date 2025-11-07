import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TawkScript from './components/TawkScript'; // Adjust the path based on your file structure

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Base Ecosystem Support - Secure Crypto Wallet Assistance',
  description: 'Get professional support for all your Base Ecosystem needs. Fast, secure, and reliable help for cryptocurrency wallet issues.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <TawkScript />
      </body>
    </html>
  );
}