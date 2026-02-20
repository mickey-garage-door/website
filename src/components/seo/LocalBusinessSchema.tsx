import { company } from "@/data/company";
import { locations } from "@/data/locations";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://mickeysgaragedoor.com/#business",
    name: company.name,
    legalName: company.legalName,
    description: company.description,
    url: "https://mickeysgaragedoor.com",
    telephone: `+1${company.phonePlain}`,
    email: company.email,
    priceRange: "$$",
    image: "https://mickeysgaragedoor.com/images/og-image.jpg",
    logo: "https://mickeysgaragedoor.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    areaServed: locations.map((loc) => ({
      "@type": "City",
      name: loc.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "San Diego County",
      },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.ratingValue,
      reviewCount: company.reviewCount.replace("+", ""),
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [company.googleMapsUrl, company.yelpUrl, company.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
