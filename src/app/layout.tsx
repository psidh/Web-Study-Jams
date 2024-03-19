import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Web Study Jams',
  description: 'Generated by create next app',
  authors: [
    { url: 'Sidharth', name: 'https://psidh.vercel.app/' },
    { name: 'Shobhit Nagpal', url: 'https://shobhitnagpal.com/' },
  ],

  keywords: [
    'Web Development',
    'Full Stack Development',
    'Frontend',
    'Backend',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
  ],
  category: '6 weeks',

  // Add more metadata here if needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
