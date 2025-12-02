import React from "react";

const SponsorCategory = ({ title, sponsors }) => (
  <div className="sponsor-category">
    <div className="category-title">{title}</div>
    <div className="sponsor-logos">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-item">
          <a target="_blank" href={sponsor.link} rel="noopener noreferrer">
            <img
              alt={sponsor.name}
              loading="lazy"
              width="100"
              height="100"
              className="sponsor-logo"
              src={sponsor.logo}
            />
          </a>
        </div>
      ))}
    </div>
  </div>
);

const Sponsors = () => {
  const sponsorsData = [
    {
      title: "Platinum Sponsor",
      sponsors: [
        {
          name: "Nimb",
          logo: "/_next/static/media/NimbLogo.1b3334fd.svg",
          link: "https://www.nimb.com.np/en/personal-banking",
        },
      ],
    },
    {
      title: "Gold Sponsors",
      sponsors: [
        {
          name: "Annapurna Post",
          logo: "/_next/static/media/Annapurna_Logo.68d43356.png",
          link: "https://www.annapurnapost.com",
        },
        {
          name: "HamroCSIT",
          logo: "/_next/static/media/hamro_csit_logo_black.b6cc30cd.png",
          link: "https://hamrocsit.com",
        },
        {
          name: "Mero Style",
          logo: "/_next/static/media/MeroStyle.4a1c7eda.svg",
          link: "https://merostyle.com/",
        },
        {
          name: "Devfolio",
          logo: "/_next/static/media/Devfolio_Logo-White.6a4ba553.svg",
          link: "https://devfolio.co",
        },
        {
          name: "YOLO",
          logo: "/_next/static/media/yolo.b79c0a8d.png",
          link: "https://www.instagram.com/yolobrand_/?hl=en",
        },
      ],
    },
  ];

  return (
    <div className="sponsors-container">
      <div className="sponser-header">
        <div className="sponser-title">Our Sponsors</div>
      </div>
      {sponsorsData.map((category, index) => (
        <SponsorCategory
          key={index}
          title={category.title}
          sponsors={category.sponsors}
        />
      ))}
    </div>
  );
};

export default Sponsors;
