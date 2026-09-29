import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/routing";
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <main className="min-h-screen bg-ink py-8 sm:py-14 px-4">
          <div className="mx-auto max-w-5xl flex flex-col gap-4">
            <NextIntlClientProvider locale={locale} messages={messages}>
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