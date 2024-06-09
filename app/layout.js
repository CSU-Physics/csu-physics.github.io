import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <title>CSU Physics</title>
      </head>
      <body className={inter.className}>
        
        <script type="text/javascript">
          var sc_project=13006815;
          var sc_invisible=1;
          var sc_security="af67b0b2";
        </script>
        <script type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js" async></script>
        <noscript><div class="statcounter"><a title="Web Analytics"
          href="https://statcounter.com/" target="_blank"><img class="statcounter"
            src="https://c.statcounter.com/13006815/0/af67b0b2/1/" alt="Web Analytics"
            referrerPolicy="no-referrer-when-downgrade"/>
        </a></div></noscript>
        {children}
      </body>

    </html>
  );
}
