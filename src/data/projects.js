import portfolioold from '../images/portfolioold.png';
import de from '../images/de.png';
import ecommerceImage from '../images/e-commerce.png';
import moleImage from '../images/mole-cover.png';
import calculatorIOS from '../images/calculator.png';
import AIChatAPP from '../images/ai-chat-app.jpg';
import pm from '../images/project-management-app.png';

const projects = [
  {
    name: 'E-Commerce Website',
    imageUrl: ecommerceImage,
    technologies: ['React', 'Bootstrap', 'JS'],
    githubUrl: 'https://github.com/ayhanmetin/ayhando.v2',
    liveDemoUrl: 'https://ayhando.vercel.app/',
    description:
      'The E-commerce website is design to demonstrate the integration of React.js with an E-commerce API, highlighting its RESTful architecture. It offers login, cart management, and product browsing by category with flexible password access.',
    id: 3,
  },
  {
    name: 'To-Do List',
    imageUrl: pm,
    technologies: ['React', 'HTML', 'Tailwind'],
    githubUrl: 'https://github.com/ayhanmetin/project-management-app',
    liveDemoUrl: 'https://project-management-one-amber.vercel.app/',
    description:
      'This is a simple project management app built using React and styled with TailWind CSS. It allows you to add, delete, and select projects and tasks.',
    id: 1,
  },
  {
    name: 'Calculator',
    imageUrl: calculatorIOS,
    technologies: ['JS', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/ayhanmetin/calculator',
    liveDemoUrl: 'https://calculator-mu-smoky-14.vercel.app/',
    description:
      'I developed an iOS-style web calculator with essential arithmetic operations, integer input handling, a clear function for resets, and a backspace for corrections, providing an intuitive and seamless calculation experience.',
    id: 5,
  },
  {
    name: 'Deutschlernen',
    imageUrl: de,
    technologies: ['React', 'Bootstrap'],
    githubUrl: 'https://github.com/ayhanmetin/Learn-German',
    liveDemoUrl: 'https://almancakelime.com/quiz',
    description:
      'Deutschlernen App is a German language learning platform that boosts language skills up to B1 and C1 levels with daily word activities, sentence examples, and a quiz app that uses the Fisher-Yates shuffle for dynamic, engaging sessions.',
    id: 7,
  },
  {
    name: 'AI Chat App',
    imageUrl: AIChatAPP,
    technologies: ['JS', 'Node.js', 'OpenAI'],
    githubUrl: 'https://github.com/ayhanmetin/ai-chat-app',
    description:
      'The AI Chat App, built with Node.js, leverages OpenAIss GPT-3.5 Turbo for chat, search, and Q&A functionalities, showcasing the integration of AI tools in one project.',
    id: 6,
  },
  {
    name: 'Feed-A-Star Mole',
    imageUrl: moleImage,
    technologies: ['JS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ayhanmetin/feed-a-mole',
    liveDemoUrl: 'https://feed-a-mole-red.vercel.app/',
    description:
      'Feed-A-Star-Mole is a desktop-only web game where players score by clicking on moles, featuring both regular and rare varieties, with the king mole worth double points.',
    id: 2,
  },
];

export default projects;
