import { ThemeProvider } from "next-themes";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  console.log(locale);

  return (
    <html lang={locale}>
      <body className="bg-white dark:bg-gray-900">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem
          >
            <>{children}</>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
