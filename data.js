'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'

import banner1 from "./src/assets/images/banner1.png"
import banner2 from "./src/assets/images/banner2.png"
import banner3 from "./src/assets/images/banner3.png"
import banner4 from "./src/assets/images/banner4.png"


export const banners = [
    {
        image: banner4,
        title: "Empower Your Future",
        description: "Invest in Your Education for a Brighter Tomorrow. Acquire New Skills, Unlock New Opportunities, and Achieve Your Professional and Personal Goals. Coursify Is Your Partner in the Journey to a More Empowered and Successful Future.",
        button_url: "/courses",
        button_text: "Learn More"
    },
    {
        image: banner1,
        title: "Learn at Own Pace",
        description: "Embrace a Learning Journey That Adapts to Your Schedule. With Flexible Learning, You Have the Freedom to Explore New Subjects and Acquire Skills at Your Own Pace. No Deadlines, No Pressure, Just Learning on Your Terms",
        button_url: "/courses",
        button_text: "View Courses"
    },
    {
        image: banner3,
        title: "Learn from Experts",
        description: "Immerse Yourself in Learning from Distinguished Instructors Who Are Leading Experts in Their Fields. Dive Deep into Their Knowledge and Insights to Expand Your Skills and Gain Valuable Expertise",
        button_url: "/courses",
        button_text: "Start Learning"
    },
    {
        image: banner2,
        title: "Join our Community",
        description: "Connect with a Vibrant Community of Learners from Around the Globe. Share Your Ideas, Collaborate on Projects, and Grow Together. At Coursify, We Believe That Learning Is a Collective Journey.",
        button_url: "/courses",
        button_text: "Join Now"
    },
]


export const courses = [
    {
        title: "The Ultimate Python Course with AI",
        description: "Learn the fundamentals of Python and get started with ML - for free.",
        image_url: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?size=626&ext=jpg&uid=R78313021&ga=GA1.1.1888620232.1704367913&semt=sph",
        created_by: "Girish Sahu",
        price: 1499,
        id: 1
    },
    {
        title: "Machine Learning: Beginner to Advanced",
        description: "Learn the fundamentals of Python and get started with ML - for free.",
        image_url: "https://img.freepik.com/premium-photo/web-development-coding-programming-site-application-laptop-programming-languages_272306-19.jpg?size=626&ext=jpg&uid=R78313021&ga=GA1.1.1888620232.1704367913&semt=sph",
        created_by: "Radhika Sharma",
        price: 799,
        id: 2
    },
    {
        title: "The Ultimate Web Development Course",
        description: "Learn the fundamentals of Python and get started with ML - for free.",
        image_url: "https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?size=626&ext=jpg&uid=R78313021&ga=GA1.1.1888620232.1704367913&semt=sph",
        created_by: "Faisal Khan",
        price: 989,
        id: 3
    },
    {
        title: "The Ultimate Guide to 3D Hologram",
        description: "Learn the fundamentals of Python and get started with ML - for free.",
        image_url: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901779.jpg?size=626&ext=jpg&uid=R78313021&ga=GA1.1.1888620232.1704367913&semt=sph",
        created_by: "Grishnappa Iyer",
        price: 1199,
        id: 4
    },
    {
        title: "The Ultimate MERN Stack Development Course",
        description: "Learn the fundamentals of Python and get started with ML - for free.",
        image_url: "https://img.freepik.com/free-photo/person-working-html-computer_23-2150040432.jpg?size=626&ext=jpg&uid=R78313021&ga=GA1.1.1888620232.1704367913&semt=sph",
        created_by: "Deependra Parmar",
        price: 9999,
        id: 5
    }
]

export const headerLinks = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Courses",
        route: "/courses",
    },
    {
        name: "Blogs",
        route: "/blogs",
    },
    {
        name: "About",
        route: "/about",
    },
    {
        name: "Contact",
        route: "/contact",
    }
]

export const user = {
    name: "Deependra Parmar",
    email: "deependraparmar1@gmail.com",
    createdAt: String(new Date().toDateString()),
    phoneNumber: "9876543210",
    isVerifiedInstructor: true,
    isVerifiedAdmin: false,
    about: "I am a tech enthusiast and a full stack developer. I have been working in this field for 2 years. I have worked on many projects and have a good knowledge of MERN stack. I am a tech enthusiast and a full stack developer. I have been working in this field for 2 years. I have worked on many projects and have a good knowledge of MERN stack. I am a tech enthusiast and a full stack developer. I have been working in this field for 2 years. I have worked on many projects and have a good knowledge of MERN stack. I am a tech enthusiast and a full stack developer. I have been working in this field for 2 years.",
    social_media_urls: [
        {
            linkedin: "https://www.linkedin.com/in/deependraparmar/",
            github: "https://github.com/DeependraParmar",
            twitter: "https://twitter.com/DeependraParmar",
            facebook: "https://www.facebook.com/deependra.parmar.9",
            website: "https://deependraparmar.vercel.app",
            youtube: "https://learnlogics.page.link/RtQw"
        }
    ],
    playlist: [
        {
            title: "MERN Stack Development",
            courseid: "123456789",
            posterURL: "https://e1.pxfuel.com/desktop-wallpaper/243/6/desktop-wallpaper-mern-stack-bloggerboy-mern-stack-thumbnail.jpg"
        }
    ],
}
