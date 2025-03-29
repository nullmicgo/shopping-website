import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fashion Shopping Website",
  description: "A modern fashion e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        {/* Navigation */}
        <nav className="py-6 fixed w-full bg-white/80 backdrop-blur-sm z-50">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.svg"
                  alt="Fashion Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-3xl font-black tracking-wider">FASHION</span>
              </Link>

              <div className="flex items-center gap-16">
                <div className="flex gap-16">
                  <Link href="#" className="text-lg font-medium hover:text-gray-600 tracking-wide">
                    CATALOGUE
                  </Link>
                  <Link href="#" className="text-lg font-medium hover:text-gray-600 tracking-wide">
                    FASHION
                  </Link>
                  <Link href="#" className="text-lg font-medium hover:text-gray-600 tracking-wide">
                    FAVOURITE
                  </Link>
                  <Link href="#" className="text-lg font-medium hover:text-gray-600 tracking-wide">
                    LIFESTYLE
                  </Link>
                </div>
                <button className="bg-black text-white px-12 py-2 rounded-lg text-lg font-medium hover:bg-gray-900 transition-colors">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-12">
              <div>
                <h3 className="text-3xl font-black mb-6 tracking-wider">FASHION</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Complete your style with awesome clothes from us.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="bg-primary p-3 rounded-xl hover:bg-opacity-80 transition-colors">
                    <Image
                      src="/images/facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="#" className="bg-primary p-3 rounded-xl hover:bg-opacity-80 transition-colors">
                    <Image
                      src="/images/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="#" className="bg-primary p-3 rounded-xl hover:bg-opacity-80 transition-colors">
                    <Image
                      src="/images/twitter.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="#" className="bg-primary p-3 rounded-xl hover:bg-opacity-80 transition-colors">
                    <Image
                      src="/images/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-6">Company</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">About</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Contact us</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Support</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Careers</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-6">Quick Link</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Share Location</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Orders Tracking</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Size Guide</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">FAQs</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-6">Legal</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Terms & conditions</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
