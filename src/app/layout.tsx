import React from 'react';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700']
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['600']
});

export const metadata: Metadata = {
    title: 'Consulta fácil',
    description: 'Created by GL systems.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${poppins.className}`}>{children}</body>
        </html>
    );
}
