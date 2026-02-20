"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Trust bar */}
      <div className="bg-blue-900 text-white text-xs py-1.5 hidden md:block">
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
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-blue-900 font-black text-xl md:text-2xl tracking-tight leading-none">
              Mickey&apos;s
            </span>
            <span className="text-orange-500 font-black text-xl md:text-2xl tracking-tight leading-none">
              Garage Door
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-blue-900 transition-colors py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-lg w-72 py-2 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-blue-900 transition-colors text-sm"
                    >
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.shortTitle}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/locations" className="hover:text-blue-900 transition-colors">
              Locations
            </Link>
            <Link href="/about" className="hover:text-blue-900 transition-colors">
              About
            </Link>
            <Link href="/reviews" className="hover:text-blue-900 transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA group */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${company.phonePlain}`}
              className="flex items-center gap-2 bg-blue-900 text-white font-bold px-3 md:px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors text-sm md:text-base"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
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

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <a
              href={`tel:${company.phonePlain}`}
              className="flex items-center justify-center gap-2 bg-blue-900 text-white font-bold py-3 px-4 rounded-lg mb-3 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {company.phone}
            </a>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1 pt-2 pb-1">
              Services
            </div>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center gap-2 px-1 py-2 text-gray-700 hover:text-blue-900 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <span>{service.icon}</span>
                <span>{service.shortTitle}</span>
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-2 space-y-2">
              {[
                { href: "/locations", label: "Locations" },
                { href: "/about", label: "About" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact / Free Quote" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-1 py-2 text-gray-700 hover:text-blue-900 font-medium text-sm"
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
