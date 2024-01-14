import portfolioold from './images/portfolioold.png';
import ecommerceImage from './images/e-commerce.png';
import moleImage from './images/mole-cover.png';
import calculatorIOS from './images/calculator.png';
import AIChatAPP from './images/ai-chat-app.jpg';
import pm from './images/project-management-app.png';

const projects = [
  {
    name: 'Project Management App',
    imageUrl: pm,
    technologies: ['React', 'HTML', 'TailWind'],
    githubUrl: 'https://github.com/ayhanmetin/project-management-app',
    liveDemoUrl: 'https://project-management-one-amber.vercel.app/',
  },
  {
    name: 'Feed-A-Star Mole',
    imageUrl: moleImage,
    technologies: ['JS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ayhanmetin/feed-a-mole',
    liveDemoUrl: 'https://feed-a-mole-red.vercel.app/',
  },
  {
    name: 'E-Commerce Page',
    imageUrl: ecommerceImage,
    technologies: ['React', 'Bootstrap', 'JS'],
    githubUrl: 'https://github.com/ayhanmetin/ayhando-ecommerce',
    liveDemoUrl: 'https://ayhando-ecommerce.vercel.app/',
  },
  {
    name: 'Portfolio Page',
    imageUrl: portfolioold,
    technologies: ['JS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ayhanmetin/portfolioJSpage',
    liveDemoUrl: 'https://portfoliopage-rho.vercel.app/',
  },
  {
    name: 'Calculator',
    imageUrl: calculatorIOS,
    technologies: ['JS', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/ayhanmetin/calculator',
    liveDemoUrl: 'https://calculator-mu-smoky-14.vercel.app/',
  },
  {
    name: 'AI Chat App',
    imageUrl: AIChatAPP,
    technologies: ['JS', 'Node.js', 'OpenAI'],
    githubUrl: 'https://github.com/ayhanmetin/ai-chat-app',
    liveDemoUrl: 'https://github.com/ayhanmetin/ai-chat-app',
  },
];

export default projects;
