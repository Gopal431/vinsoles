import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinsolex Energy Private Limited | Renewable Energy EPC Solutions",
  description:
    "Leading EPC partner in India's green energy transition. Specializing in solar energy solutions, EV charging infrastructure, and comprehensive O&M services.",
  keywords: "solar energy, EPC, renewable energy, EV charging, solar installation, operations maintenance",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/vinsolex-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/vinsolex-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#366B7D",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
