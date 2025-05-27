export interface ProfileData {
  personal: {
    fullName: string;
    firstName: string;
    title: string;
    tagline: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
  };
  education: {
    degree: string;
    institution: string;
    fullEducation: string;
  };
  organization: {
    company: string;
    scale: string;
  };
}

const profileData: ProfileData = {
  personal: {
    fullName: "Gerardo Guerrero",
    firstName: "Gerardo",
    title: "Data Applications Manager",
    tagline: "Transforming Education Through Technology"
  },
  contact: {
    email: "jerry.guerrero95@gmail.com",
    phone: "(956) 240-5995",
    linkedin: "https://www.linkedin.com/in/gerardo-guerrero2/",
    github: "https://github.com/Durzo95",
    resumeUrl: "https://drive.google.com/file/d/1pfefcG84JXR-fXKcaQ8kk_1JZq6u_hGK/view?usp=sharing"
  },
  education: {
    degree: "Computer Science",
    institution: "UTRGV",
    fullEducation: "Computer Science, UTRGV"
  },
  organization: {
    company: "IDEA Public Schools",
    scale: "89,000+ Users Supported"
  }
};

export default profileData; 