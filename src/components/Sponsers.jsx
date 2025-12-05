import React from "react";
import Scroll from "./Scroll";

const raw = import.meta.glob("/src/assets/Sponsers/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const s_images = Object.fromEntries(
  Object.entries(raw).map(([path, mod]) => {
    const name = path.split("/").pop().split(".")[0];
    return [name, mod.default];
  })
);

console.log(s_images);

const SponsorCategory = ({ title, sponsors }) => (
  <div className="sponsor-category centered-flex">
    <h3 className="category-title">{title}</h3>
    <div className="sponsor-logos centered-flex">
      {sponsors.map((sponsor, index) => (
        <>
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
        </>
      ))}
    </div>
  </div>
);

const Sponsors = () => {
  const sponsorsData = [
    {
      title: "Title Sponsor",
      sponsors: [
        {
          name: "Deerhold",
          logo: s_images.deerhold_logo,
          link: "https://deerhold.com",
        },
      ],
    },
    {
      title: "Platinum Sponsor",
      sponsors: [
        {
          name: "Edwise Foundation",
          logo: s_images.edwise_logo,
          link: "https://www.edwisefoundation.com",
        },
        {
          name: "NIMB",
          logo: s_images.nimb_logo,
          link: "https://www.edwisefoundation.com",
        },
      ],
    },
    {
      title: "Gold Sponsors",
      sponsors: [
        {
          name: "Tech Gorkha",
          logo: s_images.tech_gurkha_logo,
          link: "https://techgurkha.com.np/",
        },
      ],
    },
    {
      title: "Silver Sponsor",
      sponsors: [
        {
          name: "Deerwalk Training Center",
          logo: s_images.deerwalk_training_center_logo,
          link: "https://deerwalktrainingcenter.com",
        },
        {
          name: "109 Degrees Restraunt",
          logo: s_images.degrees_109_logo,
          link: "https://109degrees.com.np/",
        },
      ],
    },
    {
      title: "Supported By",
      sponsors: [
        {
          name: "Cedar Gate",
          logo: s_images.cedar_gate_logo,
          link: "https://www.cedargate.com/",
        },
        {
          name: "Infinite Solution",
          logo: s_images.infinite_solutions_logo,
          link: "https://www.infinite.com/",
        },
        {
          name: "gen.xyz",
          logo: s_images.gen_xyz_logo,
          link: "https://gen.xyz/",
        },
        {
          name: "Balloon Nepal",
          logo: s_images.balloon_nepal_logo,
          link: "https://balloonnepal.com/",
        },
      ],
    },
    {
      title: "Mobility Partner",
      sponsors: [
        {
          name: "Pathao",
          logo: s_images.pathao_logo,
          link: "https://pathao.com",
        },
      ],
    },
    {
      title: "Learning Platform Partner",
      sponsors: [
        {
          name: "Programiz",
          logo: s_images.programiz_logo,
          link: "https://programiz.com",
        },
      ],
    },

    {
      title: "Media Partner",
      sponsors: [
        {
          name: "Hamro Patro",
          logo: s_images.hamropatro_logo,
          link: "https://hamropatro.com/",
        },
      ],
    },
    {
      title: "Hospitality Partner",
      sponsors: [
        {
          name: "Deerwalk Foods",
          logo: s_images.foods_deerwalk_logo,
          link: "https://deerwalkfoods.com/",
        },
      ],
    },
  ];

  return (
    <Scroll
      id="sponsers"
      className="content-section centered-flex sponsers-section"
    >
      <div className="sponser-header">
        <h1 className="sponser-title">Our Sponsors</h1>
      </div>
      {sponsorsData.map((category, index) => (
        <SponsorCategory
          key={index}
          title={category.title}
          sponsors={category.sponsors}
        />
      ))}
    </Scroll>
  );
};

export default Sponsors;
