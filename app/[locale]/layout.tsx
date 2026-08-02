import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import ChatBot from "@/components/chatbot/Chatbot";
import Footer from "@/components/grids/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lloyd Nim — Full Stack Developer",
  description: "Portfolio of Lloyd Nim, full stack developer.",
};

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <main className="min-h-screen bg-ink py-8 sm:py-14 px-4">
          <div className="mx-auto max-w-5xl flex flex-col gap-4">
            <NextIntlClientProvider messages={messages}>
              {children}
              <ChatBot />
              <Footer />
            </NextIntlClientProvider>
          </div>
        </main>
      </body>
    </html>
  );
}