import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Advocate Thaniga K - Professional Legal Services",
  description = "Expert legal representation in Criminal Law, Civil Litigation, and Family Law. Committed to Justice and Client Success. Contact for consultation.",
  keywords = "advocate, lawyer, legal services, criminal law, civil litigation, family law, Thaniga K, legal consultation, court representation, legal advice",
  image = "/images/THANIGAphoto.jpeg",
  url = window.location.href,
  type = "website",
  author = "Advocate Thaniga K",
  location = "Chengalpattu, Tamil Nadu, India"
}) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || window.location.origin;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonicalUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advocate Thaniga K",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/images/advocatelogo.jpg`,
    "image": fullImageUrl,
    "telephone": "+91-XXXXXXXXXX", // Replace with actual phone
    "email": "thaniga@example.com", // Replace with actual email
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chengalpattu",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Tamil Nadu, India"
    },
    "serviceType": [
      "Criminal Law",
      "Civil Litigation", 
      "Family Law",
      "Legal Consultation",
      "Court Representation"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      // Add social media profiles here
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content={location} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Advocate Thaniga K" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@advocatethaniga" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-TileColor" content="#D4AF37" />
      <meta name="application-name" content="Advocate Thaniga K" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;