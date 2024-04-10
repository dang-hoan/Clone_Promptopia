"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
    session,
}: Readonly<{
    children: React.ReactNode;
    session: any;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/images/logo.svg" />
            </head>
            <body className={inter.className}>
                <Provider session={session}>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
}
