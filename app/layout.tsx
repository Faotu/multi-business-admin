import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ProviderModal } from "@/providerComponents/providerModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-business admin",
  description: "Admin control",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ProviderModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
