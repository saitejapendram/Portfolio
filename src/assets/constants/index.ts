import socialmedia1 from "../projects/socialmedia1.png";
import paytm1 from "../projects/paytm1.png";
import blog1 from "../projects/blog1.png";
import portfolio1 from "../projects/portfolio1.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Social-Media Web Application",
    image: socialmedia1,
    description:
      "I developed a social media web application with robust user interaction and secure access controls. It uses JSON Web Tokens (JWT) for authentication and authorization, ensuring secure logins and data protection. Users can post content, like posts, and add comments, enhancing engagement. I implemented input validation to maintain data security and accuracy and created middleware to protect routes and user data.",
    technologies: ["JavScript", "React", "Express", "Node.js", "MongoDB", "TailwindCSS"],
    github:"https://github.com/saitejapendram/SocialMedia-Clone"
  },
  {
    title: "PayTm Clone",
    image: paytm1,
    description:
      "I developed a Paytm clone featuring secure authentication and authorization, enabling safe user access and transactions. The application includes a robust money transfer system, designed to ensure reliable and secure transactions. It also provides functionalities for displaying the user's balance, searching for other users to send money, and viewing transaction history, enhancing user experience and convenience.",
    technologies: ["TypeScript", "React", "Node", "Express", "MongoDB", "Tailwind CSS"],
    github:"https://github.com/saitejapendram/PayTm-clone"
  },
  {
    title: "Blogging Platform",
    image: blog1,
    description:
      "I built a Medium clone web application where users can post and update blogs securely. It features JSON Web Tokens for authentication and authorization, middleware for route protection, and options to create, update, and retrieve specific posts. A dashboard organizes all posts and user-specific blogs.",
    technologies: ["TypeScript", "React", "Node", "Hono", "PostgeSQL", "Prisma", "Tailwind CSS"],
    github:"https://github.com/saitejapendram/Medium-Clone"
  },
  {
    title: "Portfolio Web Application",
    image: portfolio1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["TypeScript", "React"],
    github:"https://github.com/saitejapendram/Portfolio"
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana, India",
  phoneNo: "+91 6303129286",
  email: "saitejadeveloper108@gmail.com",
};
