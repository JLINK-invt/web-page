import { PT_Sans, JetBrains_Mono } from 'next/font/google';

export const frutiger = PT_Sans({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const spaceGrotesk = PT_Sans({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '700'],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
