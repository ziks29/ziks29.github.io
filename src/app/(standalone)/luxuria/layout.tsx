import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Luxuria Hotel - Experience Luxury Redefined",
  description:
    "Where exceptional service meets unparalleled comfort in the heart of paradise. Premium rooms, world-class spa, gourmet dining, and exclusive amenities await.",
  keywords:
    "luxury hotel, premium accommodation, spa resort, gourmet dining, ocean view, five star hotel, paradise resort",
  authors: [{ name: "Luxuria Hotel" }],
  openGraph: {
    title: "Luxuria Hotel - Experience Luxury Redefined",
    description:
      "Where exceptional service meets unparalleled comfort in the heart of paradise.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        width: 2070,
        height: 1380,
        alt: "Luxuria Hotel - Luxury Resort Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxuria Hotel - Experience Luxury Redefined",
    description:
      "Where exceptional service meets unparalleled comfort in the heart of paradise.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function LuxuriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
