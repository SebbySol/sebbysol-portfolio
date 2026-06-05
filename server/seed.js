const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

const projects = [
  {
    title: 'Web Portfolio',
    description:
      'A modern, fully responsive portfolio designed to showcase my journey as a web developer. Built with a focus on clean architecture and user experience, this project leverages HTML5 and CSS3 for structure and custom styling, while utilizing Bootstrap to ensure a seamless experience across all device sizes. It serves as a central hub for my latest projects and technical skills.',
    image: './images/project-2.jpg',
    link: 'https://sebbysol-portfolio.vercel.app/',
    order: 1,
  },
  {
    title: 'Simple Quiz App',
    description:
      'A dynamic Simple Quiz App that challenges users with a variety of general knowledge questions. This project highlights the use of JavaScript for question randomization and real-time score tracking, paired with a clean, responsive UI built using HTML and CSS. It focuses on providing a seamless user experience with instant feedback and mobile-first compatibility',
    image: './images/quiz-app.png',
    link: 'https://simplequiz.pages.dev/',
    order: 2,
  },
  {
    title: 'Expense Tracker',
    description:
      'A streamlined personal finance tool that allows users to track their spending and income. Built with HTML, CSS, and JavaScript, it features a dynamic list of transactions and utilizes Local Storage to save data locally on the user\'s device. The UI is designed for simplicity, providing a clear overview of financial health at a glance.',
    image: './images/expense-tracker.png',
    link: 'https://expensetrack.pages.dev/',
    order: 3,
  },
  {
    title: 'SOUL',
    description:
      'Engineered a full-stack e-commerce platform featuring dynamic product catalogs, a real-time shopping cart, and a secure user authentication system with reactive Vue.js components. Designed and integrated scalable MongoDB data models to handle concurrent data streams for product collections, user profiles, and order histories efficiently.',
    image: './images/soul-app.png',
    link: 'https://soul-ecommerce.vercel.app/',
    order: 4,
  },
  {
    title: 'Skyflix',
    description:
      'A dynamic media browsing application inspired by modern streaming platforms. Built with Vue.js component architecture for a modular and scalable frontend, MongoDB for flexible data modeling, and Bootstrap to ensure a fully responsive, mobile-first user experience across all screen sizes.',
    image: './images/skyflix.png',
    link: 'https://skyflix-box.vercel.app/',
    order: 5,
  },
  {
    title: 'Daily Write',
    description:
      'Architected a responsive journaling application with full CRUD capabilities, enabling users to securely create, retrieve, update, and delete rich-text entries. Implemented client-side input validation logic using Vue.js and leveraged MongoDB to design an efficient data schema that indexes and queries user-generated content seamlessly.',
    image: './images/daily-write.png',
    link: 'https://dailywrite-app.vercel.app/',
    order: 6,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Project.deleteMany({});
    console.log('Cleared existing projects');

    const inserted = await Project.insertMany(projects);
    console.log(`Seeded ${inserted.length} projects successfully`);
  } catch (err) {
    console.error('Seed failed:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seed();
