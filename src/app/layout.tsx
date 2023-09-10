import GoogleAnalytics from '@/components/GoogleAnalytics';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aly Badawy • Software Engineer',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className=''>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <div className='mx-auto container'>
            <main>
              <Header />
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
