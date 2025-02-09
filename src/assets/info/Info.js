import self from '../img/self.png';
import { colors } from '../colors/mainGradient';
import pay from '../img/pay.png';
import invenrty from '../img/invenrty.png'
import Sale from '../img/sale.png';
import Warehouse from '../img/warehouse.png';
import Website from '../img/website.png';
export const info = {
  firstName: 'Abdul',
  lastName: 'Rahman',
  initials: 'AR', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Front-End Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '📍',
      text: 'based in Tamil Nadu, India Lives in Dubai',
    },
    {
      emoji: '💻',
      text: 'Front-End Developer',
    },
    {
      emoji: '📧',
      text: 'abdulrahman3863@gmail.com',
    },
  ],
  socials: [
    {
      link: 'resume.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://www.instagram.com/lonely_boy_1803_/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/abduljahir',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/abdul-rahman-1ba7b6282/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://www.facebook.com/profile.php?id=100027165907884',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
  ],
  bio: "Hello! I'm Abdul Rahman. I'm a Front-End Developer. I studied BE(CSE) at Anna University, I enjoy building web applications, mobile applications and learning new technologies. I'm currently looking for a work opportunities. I'm also a freelance a customized website or mobile applications. I love to travel and explore new places. I'm currently based in dubai.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS'],
    frameworks: [
      'React',
      'Redux',
      'Material UI',
      'Vue',
      'Express',
      'NextJS',
      'Spring Boot',
      'Bootstrap/jQuery',
      'Zend',
      'Django',
    ],
    databases: ['MySQl', 'MongoDB', 'PostgreSQL'],
    cloudServices: [ 'Google Analytics', 'Heroku', 'Netlify'],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'Swagger',
      'Elasticsearch',
      'npm',
      'yarn',
      'Maven',
      'Jenkins',
      'Jira',
      'Confluence',
      'Bitbucket',
      'moEngage',
    ],
  },
  hobbies: [
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'foot ball',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    {
      label: 'Fishing',
      emoji: '🎣',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title:'krutak Research Website',
      live: 'https://krutakresearchanalytics.com/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: null, // this should be a link to the **repository** of the project, where the code is hosted.
      image: pay,
    },
    {
      title:'ReScale Lab website',
      live: 'https://www.rescalelab.com/',
      source: null,
      image: Website,
    },
    {
      title: 'Social Eagle Website',
      live: 'https://socialeagle.in/',
      source: null,
      image: Sale,
    },
    {
      title: 'Store Management',
      live: 'https://www.macberries.com/store_management.php',
      source: null,
      image: Warehouse,
    },
    {
      title: 'Logistic Management',
      live: 'https://www.macberries.com/logistic_management.php',
      source: null,
      image: invenrty,
    },
  ],
};
