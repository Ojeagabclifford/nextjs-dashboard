import { Inter, Lusitana, Roboto } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ['400', '700'],
  subsets: ['latin'],});
export const roboto = Roboto({
  weight: ['400', '700'], // You must specify weights (e.g., regular and bold)
  subsets: ['latin'],
  display: 'swap',
});
