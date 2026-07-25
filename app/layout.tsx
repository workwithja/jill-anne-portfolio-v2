import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jillanne-portfolio.vercel.app"),
verification: {
    google: "--DSaw5uTl1aN1QEVHIhQZ5rVKIKQxf1P3INcfozdxw",
  },
  title: {
    default: "Jill Anne Basit | Social Media Manager",
    template: "%s | Jill Anne Basit",
  },

  description:
    "Helping businesses grow through strategic social media management, content creation, graphic design, and short-form video editing. Explore my portfolio, case studies, and creative work.",

  applicationName: "Jill Anne Basit Portfolio",

  keywords: [
    "Jill Anne Basit",
    "Social Media Manager",
    "Content Creator",
    "Graphic Designer",
    "Social Media Marketing",
    "Content Strategy",
    "Facebook Marketing",
    "Instagram Marketing",
    "TikTok Marketing",
    "Video Editor",
    "Freelancer",
    "Portfolio",
    "Freelance Social Media Manager",
    "Social Media Manager Philippines",
    "Social Media Graphic Designer",
    "Content Strategist",
    "Social Media Content Creator",
    "Social Media Marketing Portfolio",
    "Graphic Design Portfolio",
    "Freelance Graphic Designer Philippines",
    "Social Media Branding",
    "Content Marketing",
    "Instagram Content Design",
    "Facebook Content Design",
    "LinkedIn Content Design",
    "Canva Designer",
    "Adobe Photoshop Designer",
    "Visual Branding",
    "Content Calendar",
    "Digital Marketing",
    "Medical Social Media Design",
    "Healthcare Marketing",
    "Medical Branding",
    "Clinic Social Media",
    "Educational Content Design",
    "School Social Media",
    "Education Marketing",
    "Student Engagement",
    "Sports Graphic Design",
    "Basketball Social Media",
    "Sports Marketing",
    "Sports Content Creation",
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Meta Business Suite",
    "CapCut",
    "ChatGPT",
    "Notion"
  ],

  authors: [
    {
      name: "Jill Anne Basit",
      url: "https://yourdomain.com",
    },
  ],

  creator: "Jill Anne Basit",
  publisher: "Jill Anne Basit",

  alternates: {
    canonical: "https://yourdomain.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Jill Anne Basit Portfolio",

    title: "Jill Anne Basit | Social Media Manager",

    description:
      "Helping businesses grow through strategic social media management, content creation, and graphic design.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jill Anne Basit Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Jill Anne Basit | Social Media Manager",

    description:
      "Helping businesses grow through strategic social media management, content creation, and graphic design.",

    creator: "@yourusername",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${manrope.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}