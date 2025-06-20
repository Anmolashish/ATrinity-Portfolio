import Image from "next/image";

// Shared Social Icon Component
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
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icons[platform]}
    </svg>
  );
};

const TeamMember = ({ member }) => {
  return (
    <article
      className="bg-gray-50 rounded-xl overflow-hidden text-center p-5 hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
      aria-labelledby={`${member.name.replace(/\s+/g, "-").toLowerCase()}-name`}
    >
      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      <h3
        id={`${member.name.replace(/\s+/g, "-").toLowerCase()}-name`}
        className="text-xl font-bold text-gray-800 mb-1"
      >
        {member.name}
      </h3>
      <p className="text-blue-600 mb-4">{member.role}</p>
      <p className="text-gray-600 mb-4">{member.bio}</p>

      {member.skills?.length > 0 && (
        <div className="mb-4 max-md:hidden">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-gray-200 pt-4">
        {member.funFact && (
          <p className="text-sm text-gray-600 mb-3 max-md:hidden">
            <span className="font-medium">Fun fact:</span> {member.funFact}
          </p>
        )}

        <div className="flex justify-center space-x-3">
          {Object.entries(member.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
              aria-label={`${member.name}'s ${platform} profile`}
            >
              <SocialIcon platform={platform} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      skills: ["React", "Next.js", "TypeScript", "UI/UX"],
      bio: "Specializes in creating beautiful, responsive interfaces.",
      funFact: "Competitive chess player",
      image: "/images/team/alex.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Sam Wilson",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "API Design"],
      bio: "Builds robust server-side logic and scalable databases.",
      funFact: "Plays in a local band",
      image: "/images/team/sam.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Jordan Lee",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "User Research"],
      bio: "Designs user-friendly experiences with precision.",
      funFact: "Avid photographer",
      image: "/images/team/jordan.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Taylor Smith",
      role: "SEO Specialist",
      skills: ["Keyword Research", "Analytics", "Content Strategy"],
      bio: "Helps websites rank and convert through SEO strategies.",
      funFact: "Travel enthusiast",
      image: "/images/team/taylor.jpg",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
  ];

  return (
    <section
      id="team"
      className="py-16 md:py-20 bg-white"
      aria-label="Our team"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
            Meet The Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We're a group of college friends turning code into solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>

        {/* College Days Section */}
        <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">
            Our College Days
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Late night debugging, group projects, and infinite chai. That's how
            this all began.
          </p>
          <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl mx-auto aspect-[16/9] relative">
            <Image
              src="/images/team/group-photo.jpg"
              alt="Team photo during college days"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1024px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
