// app/components/PersonJsonLd.tsx  (or src/components/…)
import React from "react";

export default function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://alybadawy.com/#bio",
    name: "Aly Badawy",
    givenName: "Aly",
    familyName: "Badawy",
    jobTitle: "Senior Software Engineer & Program Technical Lead",
    description:
      "Senior Software Engineer & Program Technical Lead specializing in Ruby on Rails, React, and cloud-native architectures. Leads cross-functional teams to deliver scalable, secure systems with DevSecOps, CI/CD, and clean architecture practices.",
    url: "https://alybadawy.com",
    image:
      "https://alybadawy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faly-badawy-profile.bc53defa.jpg&w=828&q=75",
    sameAs: [
      "https://x.com/alybadawy",
      "https://github.com/alybadawy",
      "https://www.linkedin.com/in/aly-badawy",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wayne",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "Steampunk Inc.",
        startDate: "2022-03",
        description:
          "Senior Software Engineer & Tech Lead building full-stack web apps (Rails + React) for USCIS with accessibility and policy compliance.",
      },
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Phoenix",
        description: "Master of Information Systems",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Sadat Academy for Management Sciences",
        description: "B.S. in Managerial Information Systems",
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Software Engineer & Technical Lead",
      occupationalCategory: "15-1252 Software Developers",
      skills: [
        "Ruby on Rails",
        "ReactJS",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "RESTful APIs",
        "PostgreSQL",
        "MySQL",
        "MS SQL Server",
        "Kafka",
        "Amazon Kinesis",
        "Git",
        "CI/CD (GitHub Actions, Jenkins)",
        "Docker",
        "Kubernetes",
        "AWS",
        "Linux",
        "Windows",
        ".NET (C#, VB.NET)",
        "Java",
        "C/C++",
        "iOS (Swift, SwiftUI)",
        "Accessibility (Section 508)",
        "Clean Architecture",
        "Test-Driven Development (TDD)",
      ],
    },
    knowsAbout: [
      "Full-stack web development",
      "DevSecOps",
      "Cloud infrastructure on AWS",
      "Software architecture",
      "Continuous delivery",
      "Accessibility compliance (Section 508)",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a raw string, not an object
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
