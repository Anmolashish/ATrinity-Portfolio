"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Shared Social Icon Component with hover animations
const SocialIcon = ({ platform }) => {
  const icons = {
    twitter: (
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
    ),
    linkedin: (
      <path
        fillRule="evenodd"
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        clipRule="evenodd"
      ></path>
    ),
    github: (
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        clipRule="evenodd"
      ></path>
    ),
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-1"
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {icons[platform]}
      </svg>
    </motion.div>
  );
};

const TeamMember = ({ member, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
      aria-labelledby={`${member.name.replace(/\s+/g, "-").toLowerCase()}-name`}
    >
      <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-blue-100">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      <h3
        id={`${member.name.replace(/\s+/g, "-").toLowerCase()}-name`}
        className="text-xl font-bold text-gray-800 mb-1"
      >
        {member.name}
      </h3>
      <p className="text-blue-600 mb-4 font-medium">{member.role}</p>
      <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>

      {member.skills?.length > 0 && (
        <div className="mb-4 max-md:hidden">
          <h4 className="text-xs font-semibold text-gray-500 mb-2 tracking-wider">
            EXPERTISE
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-gray-100 pt-4">
        {member.funFact && (
          <div className="mb-3 max-md:hidden bg-blue-50 rounded-lg p-3">
            <p className="text-xs text-blue-700">
              <span className="font-bold">Fun fact:</span> {member.funFact}
            </p>
          </div>
        )}

        <div className="flex justify-center space-x-1">
          {Object.entries(member.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
              aria-label={`${member.name}'s ${platform} profile`}
            >
              <SocialIcon platform={platform} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "Aniket Sharma",
      role: "Frontend Developer",
      skills: ["React", "Next.js", "Javascript", "UI/UX"],
      bio: "Specializes in creating beautiful, responsive interfaces.",
      funFact: "Create Anime Sketch",
      image: "/aniket.webp",
      social: {
        twitter: "https://x.com/AniketS39306951",
        linkedin: "https://in.linkedin.com/in/aniket-sharma-558038252",
        github: "https://github.com/aniketsharma953",
      },
    },
    {
      name: "Anmol Ashish",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "My SQL"],
      bio: "Builds robust server-side logic and scalable databases.",
      funFact: "Gym rat",
      image: "/anmol.webp",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Jagjeet Singh",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "User Research"],
      bio: "Designs user-friendly experiences with precision.",
      funFact: "Avid photographer",
      image: "/jagjeet.webp",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Arshdeep Kumar",
      role: "SEO Specialist",
      skills: ["Keyword Research", "Analytics", "Content Strategy"],
      bio: "Helps websites rank and convert through SEO strategies.",
      funFact: "Travel enthusiast",
      image: "/arsh.webp",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
  ];

  return (
    <section
      id="team"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50"
      aria-label="Our team"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet <span className="text-blue-600">The Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
          >
            We're a group of college friends turning code into solutions.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* College Days Section */}
        <div className="bg-white rounded-2xl p-6 md:p-10 text-center shadow-xl border border-gray-100 overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Our <span className="text-blue-600">College Days</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                Late night debugging, group projects, and infinite chai. That's
                how this all began.
              </p>
            </motion.div>

            <div className="relative group">
              <div className="overflow-hidden rounded-xl shadow-2xl max-w-4xl mx-auto aspect-[16/9] relative">
                <Image
                  src="/images/teams/team-group.webp"
                  alt="Team photo during college days"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1024px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-left text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-xl font-bold mb-1">
                      Memories from 2025
                    </h4>
                    <p className="text-sm opacity-90">
                      Our first hackathon together at the Skillwarz Hackathon
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo grid overlay */}
              <div className="hidden md:grid grid-cols-4 gap-4 mt-6">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg overflow-hidden shadow-md relative"
                  >
                    <Image
                      src={`/images/teams/team${item}.jpg`} // You would need additional group photos
                      alt={`Team memory ${item}`}
                      fill
                      className="object-cover transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Milestones timeline */}
            <div className="mt-12 hidden md:block">
              <h4 className="text-lg font-semibold text-gray-800 mb-6">
                Our Journey Timeline
              </h4>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>

                {/* Timeline items */}
                <div className="space-y-8">
                  {[
                    {
                      year: "2021",
                      title: "First Met in College",
                      description: "Started our engineering journey together",
                    },
                    {
                      year: "2022",
                      title: "First Project Collaboration",
                      description:
                        "Built a Restaurant and Travel based website",
                    },
                    {
                      year: "2023",
                      title: "AI Collaboration",
                      description: "Worked on the Law based AI chatbot",
                    },
                    {
                      year: "2024",
                      title: "First Client Project",
                      description: "Delivered our first professional work",
                    },
                    {
                      year: "2025",
                      title: "Formed Team ",
                      description: "Officially started working together",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.year}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`w-5/12 p-4 rounded-lg shadow-md ${
                          index % 2 === 0
                            ? "bg-blue-50 text-right mr-6"
                            : "bg-white text-left ml-6"
                        }`}
                      >
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                        <h5 className="font-bold text-blue-800">{item.year}</h5>
                        <h6 className="font-semibold text-gray-800">
                          {item.title}
                        </h6>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
