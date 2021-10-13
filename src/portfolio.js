const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/jtmcmorran',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'James McMorran',
  role: 'Full Stack Software Developer',
  resume: 'https://docs.google.com/document/d/1s67RzAOLZv5JulSejxB9Rep7qom4cRtESE_Nouo5UhE/edit?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/james-mcmorran',
    github: 'https://github.com/jtmcmorran',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'War!',
    description:
      'the card game war, for one player. an example game made in JavaScript',
    stack: ['HTML','CSS','JavaScript'],
    sourceCode: 'https://github.com/jtmcmorran/seir-p1-war',
    livePreview: 'https://seir-p1-war.herokuapp.com/',
  },
  {
    name: 'Delightful Dice',
    description:
      'An example storefront webapp. a store to buy dice in all forms! Built with full CRUD functionality.',
    stack: ['Mongoose','Express','Node.js','HTML','CSS','Javascript'],
    sourceCode: 'https://github.com/jtmcmorran/seir-p2-store',
    livePreview: 'https://delightful-dice.herokuapp.com/products/',
  },
  {
    name: 'Chess',
    description:
      'Online two player chess app. built with socket.io and node.js to facilitate online play.',
    stack: ['Express','Node.js','Socket.io','HTML','CSS','Javascript'],
    sourceCode: 'https://github.com/jtmcmorran/seir-p3-chess',
    livePreview: 'https://seir-p3-chess.herokuapp.com/',
  },
  {
    name:'Noetic Talk',
    description:
      'A group project. An example of a community website for people in need of support regarding mental health. I was responsible for the creation of global chat functionality.',
    stack:['HTML','CSS','Javascript','Mongoose','Express', 'React', 'Node.js','Socket.io'],
    sourceCode:'https://github.com/braryansantos97/Noetic-Talk-FE',
    livePreview:'https://noetic-talk-full.herokuapp.com/',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Mongoose',
  'Express',
  'React',
  'SASS',
  'Python',
  'Git',
  'SQL',
  'Vue',
  'Node.js',
  'Svelte',
  'Java',
  'C',
  'C#'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jtmcmorran@gmail.com',
}

export { header, about, projects, skills, contact }
