export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jillanne-portfolio.vercel.app/#person",
        name: "Jill Anne Basit",
        url: "https://jillanne-portfolio.vercel.app",
        image: "https://jillanne-portfolio.vercel.app/og-image.png",
        jobTitle:
          "Freelance Social Media Manager, Graphic Designer, and Content Strategist",
        description:
          "Portfolio of Jill Anne Basit, a Freelance Social Media Manager, Graphic Designer, and Content Strategist helping brands grow through strategic content, branding, and social media marketing.",
        knowsAbout: [
          "Social Media Management",
          "Graphic Design",
          "Content Strategy",
          "Content Marketing",
          "Brand Identity",
          "Social Media Marketing",
          "Facebook Marketing",
          "Instagram Marketing",
          "LinkedIn Marketing",
          "Content Creation",
          "Canva",
          "Adobe Photoshop",
          "Figma",
        ],
        sameAs: [
          "https://www.linkedin.com/in/jillannebasit/",
          "https://github.com/workwithja",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://jillanne-portfolio.vercel.app/#website",
        url: "https://jillanne-portfolio.vercel.app",
        name: "Jill Anne Basit Portfolio",
        description:
          "Portfolio of Jill Anne Basit showcasing social media management, graphic design, branding, and content strategy projects.",
        publisher: {
          "@id": "https://jillanne-portfolio.vercel.app/#person",
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}