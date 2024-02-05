import portfolioold from '../images/portfolioold.png';
import ecommerceImage from '../images/e-commerce.png';
import moleImage from '../images/mole-cover.png';
import calculatorIOS from '../images/calculator.png';
import AIChatAPP from '../images/ai-chat-app.jpg';
import pm from '../images/project-management-app.png';

const projects = [
  {
    name: 'To-Do List',
    imageUrl: pm,
    technologies: ['React', 'HTML', 'Tailwind'],
    githubUrl: 'https://github.com/ayhanmetin/project-management-app',
    liveDemoUrl: 'https://project-management-one-amber.vercel.app/',
    description: '',
    id: 1,
  },
  {
    name: 'Feed-A-Star Mole',
    imageUrl: moleImage,
    technologies: ['JS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ayhanmetin/feed-a-mole',
    liveDemoUrl: 'https://feed-a-mole-red.vercel.app/',
    description: '',
    id: 2,
  },
  {
    name: 'E-Commerce Website',
    imageUrl: ecommerceImage,
    technologies: ['React', 'Bootstrap', 'JS'],
    githubUrl: 'https://github.com/ayhanmetin/ayhando-ecommerce',
    liveDemoUrl: 'https://ayhando-ecommerce.vercel.app/',
    description: '',
    id: 3,
  },
  {
    name: 'Portfolio Page',
    imageUrl: portfolioold,
    technologies: ['JS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ayhanmetin/portfolioJSpage',
    liveDemoUrl: 'https://portfoliopage-rho.vercel.app/',
    description: '',
    id: 4,
  },
  {
    name: 'Calculator',
    imageUrl: calculatorIOS,
    technologies: ['JS', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/ayhanmetin/calculator',
    liveDemoUrl: 'https://calculator-mu-smoky-14.vercel.app/',
    description: '',
    id: 5,
  },
  {
    name: 'AI Chat App',
    imageUrl: AIChatAPP,
    technologies: ['JS', 'Node.js', 'OpenAI'],
    githubUrl: 'https://github.com/ayhanmetin/ai-chat-app',
    liveDemoUrl: 'https://github.com/ayhanmetin/ai-chat-app',
    description: '',
    id: 6,
  },
];

export default projects;
