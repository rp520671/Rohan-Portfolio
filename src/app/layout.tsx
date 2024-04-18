// Importing required components and modules
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/src/app/theme-provider';

// Defining Space Grotesk font and description
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });


// Creating metadata object
export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/rp520671'),

  title: 'Rohan Portfolio',
  authors: {
    name: 'Rohan Patil',
  },

  description: "I'm a software developer passionate about building a modern web application that users love 🏗",
  openGraph: {
    title: 'Rohan Patil',
    description: "I'm a software developer passionate about building a modern web application that users love 🏗",
    url: 'https://github.com/rp520671',
    siteName: 'Rohan Patil',
    type: 'website',
  },
  keywords: ['web coding', 'react', 'developer', 'ts', 'nextjs', 'tailwind'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
