export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",

    // Common actions
    viewMyWork: "View My Work",
    getInTouch: "Get in Touch",
    sendMessage: "Send Message",

    // Sections
    aboutMe: "About Me",
    mySkills: "My Skills",
    workExperience: "Work Experience",
    myProjects: "My Projects",
    contactMe: "Contact Me",

    // Hero section
    heroName: "Ho Hoang Phuc",
    fullStackDeveloper:
      "Full-Stack Developer crafting beautiful, performant digital experiences",
    heroDescription:
      "Specializing in React, Next.js, Node.js, and modern web technologies. Passionate about building scalable applications and solving complex problems.",

    // Misc
    description: "Building beautiful and functional web experiences",

    // --- ABOUT SECTION ---
    aboutParagraph1:
      "I'm a passionate Full-Stack Developer with a strong foundation in both frontend and backend technologies. My journey in web development has been driven by a desire to create elegant solutions to complex problems.",
    aboutParagraph2:
      "Currently pursuing my degree in Information Technology at Tra Vinh University (2021–2025), I've gained practical experience through internships and freelance projects, working with modern frameworks and best practices.",
    aboutParagraph3:
      "My goal is to become a comprehensive Full-Stack Developer, specializing in React.js, Next.js for frontend and Node.js, Express.js for backend, while continuously learning and adapting to new technologies.",
    educationTitle: "Education",
    educationDegree: "Bachelor of Information Technology",
    educationSchool: "Tra Vinh University • 2021 - 2025",
    quickFacts: "Quick Facts",
    factExperience: "2+ years of development experience",
    factFullstack: "Full-stack web development",
    factEcommerce: "E-commerce platforms",
    factRealtime: "Real-time applications",
  },
  vi: {
    // Navigation
    home: "Trang chủ",
    about: "Về tôi",
    skills: "Kỹ năng",
    experience: "Kinh nghiệm",
    projects: "Dự án",
    contact: "Liên hệ",

    // Common actions
    viewMyWork: "Xem dự án",
    getInTouch: "Liên hệ",
    sendMessage: "Gửi tin nhắn",

    // Sections
    aboutMe: "Về tôi",
    mySkills: "Kỹ năng của tôi",
    workExperience: "Kinh nghiệm làm việc",
    myProjects: "Dự án của tôi",
    contactMe: "Liên hệ với tôi",

    // Hero section
    heroName: "Hồ Hoàng Phúc",
    fullStackDeveloper:
      "Lập trình viên Full-Stack tạo ra những trải nghiệm số đẹp và hiệu năng cao",
    heroDescription:
      "Chuyên về React, Next.js, Node.js và các công nghệ web hiện đại. Đam mê xây dựng ứng dụng mở rộng và giải quyết các bài toán phức tạp.",

    // Misc
    description: "Xây dựng những trải nghiệm web đẹp và chức năng",

    // --- BẢN DỊCH TIẾNG VIỆT ---
    aboutParagraph1:
      "Tôi là một lập trình viên Full-Stack đam mê, có nền tảng vững chắc cả về frontend lẫn backend. Hành trình lập trình web của tôi được thúc đẩy bởi mong muốn tạo ra những giải pháp tinh tế cho các vấn đề phức tạp.",
    aboutParagraph2:
      "Hiện đang theo học ngành Công nghệ Thông tin tại Đại học Trà Vinh (2021–2025), tôi đã tích lũy kinh nghiệm thực tế thông qua các dự án thực tập và freelance, làm việc với những framework hiện đại và quy trình tốt nhất.",
    aboutParagraph3:
      "Mục tiêu của tôi là trở thành một lập trình viên Full-Stack toàn diện, chuyên sâu về React.js, Next.js cho frontend và Node.js, Express.js cho backend, đồng thời không ngừng học hỏi công nghệ mới.",
    educationTitle: "Học vấn",
    educationDegree: "Cử nhân Công nghệ Thông tin",
    educationSchool: "Đại học Trà Vinh • 2021 - 2025",
    quickFacts: "Thông tin nhanh",
    factExperience: "Hơn 2 năm kinh nghiệm lập trình",
    factFullstack: "Phát triển web full-stack",
    factEcommerce: "Nền tảng thương mại điện tử",
    factRealtime: "Ứng dụng thời gian thực",
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
