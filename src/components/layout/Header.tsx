"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import Image from "next/image";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface shadow-md transition-colors duration-300">
      {/* Trust bar — logo gradient */}
      <div className="bg-brand-gradient text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex gap-5">
            <span>✓ Licensed &amp; Insured</span>
            <span>✓ Same-Day Service Available</span>
            <span>✓ 1-Year Warranty on All Work</span>
          </span>
          <span>{company.hoursShort}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 h-10">
            <Image
              src="/icon_fix.png"
              alt="Mickey's Garage Door logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[1.3em] w-auto"
            />

            <span className="logo-word-dark font-black text-xl md:text-2xl tracking-tight leading-none">
              Mickey&apos;s Garage Door
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-brand-dark dark:hover:text-brand-cyan transition-colors py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 bg-surface shadow-xl border border-theme rounded-lg w-72 py-2 z-50 transition-colors duration-300"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-raised hover:text-brand-dark dark:hover:text-brand-cyan transition-colors text-sm"
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.shortTitle}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/locations"
              className="hover:text-brand-dark dark:hover:text-brand-cyan transition-colors"
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="hover:text-brand-dark dark:hover:text-brand-cyan transition-colors"
            >
              About
            </Link>
            <Link
              href="/reviews"
              className="hover:text-brand-dark dark:hover:text-brand-cyan transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="hover:text-brand-dark dark:hover:text-brand-cyan transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA group + Dark mode toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Dark mode toggle — desktop */}
            <div className="hidden md:block">
              <DarkModeToggle />
            </div>

            <a
              href={`tel:${company.phonePlain}`}
              className="flex items-center gap-2 bg-brand-dark text-white font-bold px-3 md:px-5 py-2.5 rounded-lg hover:bg-brand-mid transition-colors text-sm md:text-base"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden sm:inline">{company.phone}</span>
              <span className="sm:hidden">Call Now</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-orange-500 text-white font-bold px-4 py-2.5 rounded-lg hover:bg-orange-600 transition-colors text-sm whitespace-nowrap"
            >
              Free Quote
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-theme bg-surface shadow-lg transition-colors duration-300">
          <div className="px-4 py-3 space-y-1">
            <a
              href={`tel:${company.phonePlain}`}
              className="flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold py-3 px-4 rounded-lg mb-3 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {company.phone}
            </a>

            {/* Dark mode toggle row — mobile */}
            <div className="flex items-center justify-between px-1 py-2 border-b border-theme mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Dark Mode
              </span>
              <DarkModeToggle />
            </div>

            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1 pt-2 pb-1">
              Services
            </div>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center gap-2 px-1 py-2 text-gray-700 dark:text-gray-300 hover:text-brand-dark dark:hover:text-brand-cyan text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <span>{service.icon}</span>
                <span>{service.shortTitle}</span>
              </Link>
            ))}
            <div className="border-t border-theme pt-3 mt-2 space-y-2">
              {[
                { href: "/locations", label: "Locations" },
                { href: "/about", label: "About" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact / Free Quote" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-1 py-2 text-gray-700 dark:text-gray-300 hover:text-brand-dark dark:hover:text-brand-cyan font-medium text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
