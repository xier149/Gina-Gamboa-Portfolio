
import { ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Google IT Automation with Python",
      issuer: "Coursera",
      date: "2025",
      image: "/certificates/cer01.png",
      link: "https://drive.google.com/file/d/1G8bfkjHHQubEYhhWCGiuZZME8m3gt7Ye/view?usp=sharing",
    },
    {
      title: "Google IT Support",
      issuer: "Coursera",
      date: "2025",
      image: "/certificates/cer02.png",
      link: "https://drive.google.com/file/d/1PIu1TikHdI-lNbeGLS4DPIWiuVH5qpz9/view?usp=sharing",
    },
    {
      title: "Google UX Design",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer03.png",
      link: "https://drive.google.com/file/d/1bzQ8VL1ivPZAC8lUXk33e5_DQqE2Rk9-/view?usp=sharing",
    },
    {
      title: "Troubleshooting and Debugging Techniques",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer04.png",
      link: "https://drive.google.com/file/d/1zaoog0YV9mQTA4mdPTjAZiI98xO-gAWY/view?usp=sharing",
    },
    {
      title: "Foundation of Project Management",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer05.png",
      link: "https://drive.google.com/file/d/1hHDp7ZgOcKyL22RSP0aOqRRyU0oEUDZu/view?usp=sharing",
    },
    {
      title: "Project Planning",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer06.png",
      link: "https://drive.google.com/file/d/1AgMTsEdxZ4tHLcIzus8OmWVKyt12kv6-/view?usp=sharing",
    },
    {
      title: "Design User Experience",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer07.png",
      link: "https://drive.google.com/file/d/1iW2trQt_WpvDVBTVjru51ivq_sAwDlnT/view?usp=sharing",
    },
    {
      title: "Build Wireframes and Prototypes",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer08.png",
      link: "https://drive.google.com/file/d/17CSKwYf8W0kfrnIL29FAgrQt0rTYmya3/view?usp=sharing",
    },
    {
      title: "Conduct UX Research",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer09.png",
      link: "https://drive.google.com/file/d/19qTOOuMyhR7vOBY1CIg13en5CCLnjmyb/view?usp=sharing",
    },
    {
      title: "Automating Real-World Tasks with Python",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer10.png",
      link: "https://drive.google.com/file/d/1kJVoM3gY-NQmrlQKQ2NHBJ49i551sYC9/view?usp=sharing",
    },
    {
      title: "Create High-Fidelity Designs and Prototypes in Figma",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer11.png",
      link: "https://drive.google.com/file/d/1nS1P4o2BFLJAXHVErGiKZf7wicSOPB2R/view?usp=sharing",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer12.png",
      link: "https://drive.google.com/file/d/11DrPklPMbO0LDXb47RLBg-aWIudTq3y_/view?usp=sharing",
    },
    {
      title: "Project Initiation: Starting a Successful Project",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer13.png",
      link: "https://drive.google.com/file/d/1XY0CXXrZBJLPrUvnHL68-5CbSXTv82WU/view?usp=sharing",
    },
    {
      title: "IT Security: Defense against the digital dark arts",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer14.png",
      link: "https://drive.google.com/file/d/1uWzE5vG7W2ywVSorRfv8xABnwanY3OJu/view?usp=sharing",
    },
    {
      title: "Operating Systems and You: Becoming a Power User",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer15.png",
      link: "https://drive.google.com/file/d/1l7rfo_inOtDDG9j6UKo-6FUG56v3Gi0C/view?usp=sharing",
    },
    {
      title: "System Administration and IT Infrastructure Services",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer16.png",
      link: "https://drive.google.com/file/d/1xtqCJEvRQKtf4v-d_6DyM71rfNu2MSmC/view?usp=sharing",
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer17.png",
      link: "https://drive.google.com/file/d/1HnPu65esO2yGbSpGdHiYSQbJeu3oOwQ4/view?usp=sharing",
    },
    {
      title: "Using Python to Interact with the Operating System",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer18.png",
      link: "https://drive.google.com/file/d/1_N1l3v-T7NX8KjMi-wRxO9t9qKGGVoLq/view?usp=sharing",
    },
    {
      title: "Configuration Management and the Cloud",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer19.png",
      link: "https://drive.google.com/file/d/1AbcV4VYHkOW-AWiZYNfJ0Q6f5EIGxL76/view?usp=sharing",
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer20.png",
      link: "https://drive.google.com/file/d/19YPB80G4s21OBduts7iGpRlmef8Jy41R/view?usp=sharing",
    },
    {
      title: "Crash Course on Python",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer21.png",
      link: "https://drive.google.com/file/d/1J8St2aGPXFNwfdr7fnIpVkJaE7R07Q6J/view?usp=sharing",
    },
    {
      title: "Accelerate Your Job Search with AI",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer22.png",
      link: "https://drive.google.com/file/d/1V7Ldqn_zVb1EkhervsPArUWspQQ8Lxlm/view?usp=sharing",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer23.png",
      link: "https://drive.google.com/file/d/14HdytAjdKQKzqlavjzAStK8FkNeYXO9m/view?usp=sharing",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer24.png",
      link: "https://drive.google.com/file/d/15uWFAZDGiiOsTP7cx4k5Z43BYHHzxNcB/view?usp=sharing",
    },
    {
      title: "Technical Support Fundamentals",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer25.png",
      link: "https://drive.google.com/file/d/1ZPXtVMaeWdTUd19w3wmTXNfy-STDO-7d/view?usp=sharing",
    },
    {
      title: "Build Dynamic User Interfaces (UI) for Websites",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer26.png",
      link: "https://drive.google.com/file/d/1SFGaf7Iao7eJdZB8U2nfaSMa5kvNxSlj/view?usp=sharing",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Coursera",
      date: "2026",
      image: "/certificates/cer27.png",
      link: "https://drive.google.com/file/d/1xcMTf74bhJiUakLkVxuECKDICRElIqWm/view?usp=sharing",
    },
    {
      title: "Oustanding Performance - Alliance RAD Training",
      issuer: "Coursera",
      date: "2025",
      image: "/certificates/cer28.png",
      link: "https://drive.google.com/file/d/175rhuHz-9mCBiJeD8NLL_FeidyzhiqiM/view?usp=sharing",
    },
     {
      title: "Completion - Alliance RAD Training",
      issuer: "Coursera",
      date: "2025",
      image: "/certificates/cer29.png",
      link: "https://drive.google.com/file/d/1eLJiOfwVSt-6rAGZqoe8gXTgFNihXDFD/view?usp=sharing",
    },

  ];

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Courses and certifications that support my journey in software development.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-primary/20"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>

                <p className="text-sm text-primary mt-2">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

