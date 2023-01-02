import IMAGES from "../../assets/images";

// SEMUA CONTENT DITULIS DISINI

export const Nav = {
  logo: IMAGES.logo,
  // Sementara tidak pakai react-router-dom
  // Karena tipe web nya SINGLE PAGE
  item: [
    { name: "Blogs", href: "/#" },
    { name: "Open Source Project", href: "/#" },
    { name: "Experience", href: "/#" },
  ],
};

export const Sec1 = {
  h2: "Hi and welcome to",
  h1: `Ahmad Amirudin's Site`,
  desc: `Im a Mobile Developer with two year of experience, also a student at Telkom University. My expertise are Mobile Development using Kotlin, Java, and Flutter. Currently Freelancing and learning about Artificial Intelegence.`,
  // Hanya button sebelah kiri saja
  button: { name: "see project", href: "/#" },
  // Button contact me langsung mengarah ke bawah
};

export const Sec2 = {
  h1: "Recent Activities",
  more: { name: "more", href: "/#" },
  // Max 4, Jika lebih tidak akan tampil
  content: [
    {
      image: IMAGES.pytorch,
      name: "LeNet Implementation in Tensorflow",
      desc: "Reproduce LeNet Architecture Using Tensorflow with Mnist Dataset",
      date: "12/21/2022",
    },
    {
      image: IMAGES.jupyter,
      name: "Mouse Tracking Using Mediapipe",
      desc: "Computer Vision Project to track mouse using Hands with mediapipe",
      date: "11/28/2022",
    },
    {
      image: IMAGES.hackerrank,
      name: "Problem Solving Basic Cerificate",
      desc: "Complete Hackerrank problem solving basic certification using python",
      date: "11/28/2022",
    },
    {
      image: IMAGES.android,
      name: "Project Android Pendekar Baraya",
      desc: "Develop Pendekar Baraya android application using kotlin, google maps, and HERE api",
      date: "11/19/2022",
    },
  ],
};

export const Sec3 = {
  h1: "Work Inquiry",
  // Dipisah menjadi 2 line saat tampilan mobile
  desc1: "Let’s work together and i’ll",
  desc2: " help you by all my best",
  button: {
    name: "Get in Touch",
    href: "/#",
  },
  location: "Magetan, Indonesia",
  email: "ahmadamirudin901@gmail.com",
  phone: "(+62) 821 4314 2419",
  whatsapp: "https://whatsapp.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};

export const Footer = {
  text: "Made with Love and Gabut",
};
