import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Events Explorer",
  description: "Discover amazing events in your area",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script id="remove-v0-branding" strategy="afterInteractive">
          {`
          // Remove v0 branding on page load
          function removeV0Branding() {
            // Target common v0 branding selectors
            const selectors = [
              '[data-v0-t]',
              'button[aria-label*="v0"]',
              'button[aria-label*="Built with"]',
              'a[href*="v0.dev"]',
              '[class*="v0-branding"]',
              '[class*="v0-watermark"]',
              '[data-testid*="v0"]',
              '[data-testid*="branding"]'
            ];
            
            selectors.forEach(selector => {
              const elements = document.querySelectorAll(selector);
              elements.forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                el.style.opacity = '0';
                el.remove();
              });
            });
            
            // Also check for floating buttons in bottom-right
            const floatingElements = document.querySelectorAll('div[style*="position: fixed"][style*="bottom"][style*="right"]');
            floatingElements.forEach(el => {
              if (el.textContent && (el.textContent.includes('v0') || el.textContent.includes('Built with'))) {
                el.remove();
              }
            });
          }
          
          // Run immediately
          removeV0Branding();
          
          // Run after DOM changes
          const observer = new MutationObserver(removeV0Branding);
          observer.observe(document.body, { childList: true, subtree: true });
          
          // Run on page load
          window.addEventListener('load', removeV0Branding);
        `}
        </Script>
      </body>
    </html>
  )
}
