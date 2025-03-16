import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import NavBarSignedOut from "@/components/NavBarSignedOut";
import React from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent a Car - Book Your Ride",
  description: "Your one-stop platform for renting cars, easy and reliable bookings.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <SignedIn>
            <NavBar/>
            {children}
          </SignedIn>
          <SignedOut>
            <NavBarSignedOut/>
            {children}
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}


