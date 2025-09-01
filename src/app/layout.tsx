import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";

const robo = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "Blissboard",
  description: "Blissboard is a platform for creating beautiful digital event invitations using customizable templates. Users can sign up, purchase templates, provide event details, and receive a hosted live invitation link. Admins manage orders, template customization, and delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={robo.className}
      >
        {children}
      </body>
    </html>
  );
}
