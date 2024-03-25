import "./globals.css";
import localfont from "next/font/local";
import { Golos_Text } from "next/font/google";
import { Unbounded } from "next/font/google";
import { Oswald } from "next/font/google";

const druk = localfont({
  src: [
    {
      path: '../../public/fonts/DrukCyr-Medium.otf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/fonts/DrukCyr-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../../public/fonts/DrukCyr-Heavy.ttf',
      weight: '800',
      style: 'extrabold'
    }
  ],
  variable: '--font-druk'
});
const sf = localfont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Light.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Ultralight.otf',
      weight: '200',
      style: 'extralight'
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'semibold'
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-sf'
});
const sf_text = localfont({
  src: [
    {
      path: '../../public/fonts/SFProText-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../../public/fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/SFProText-Medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/fonts/SFProText-Semibold.ttf',
      weight: '600',
      style: 'semibold'
    },
    {
      path: '../../public/fonts/SFProText-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../../public/fonts/SFProText-Heavy.ttf',
      weight: '800',
      style: 'extrabold'
    }
  ],
  variable: '--font-sf_text'
})

const golos = Golos_Text ({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-golos'
});

const unbounded = Unbounded({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600','700'],
  variable: '--font-unbounded'
});

const oswald = Oswald({
  subsets:['cyrillic'],
  display: 'swap',
  weight: ['300','400', '500', '600','700'],
  variable: '--font-oswald'
})

export const metadata = {
  title: "PiterGSM",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${druk.variable} ${golos.variable} ${unbounded.variable} ${oswald.variable} ${sf.variable} ${sf_text.variable}`}>{children}</body>
    </html>
  );
}
