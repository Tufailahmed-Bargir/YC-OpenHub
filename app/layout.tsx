import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import { Providers } from "@/app/components/provider"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Open Source YC Showcase",
  description: "Discover innovative open-source projects from Y Combinator companies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
           
          <Header />

        {children}

        </Providers>
        </body>
    </html>
  )
}

