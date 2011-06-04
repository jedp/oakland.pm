//var mongoose = require('mongoose/');
//mongoose.connect ('mongodb://localhost/' + settings.dbname);

exports.events = [
  { id: 123,
    who: "Northumbrian Quilting Consortium",
    about: "Here at Urban Strategies Council we’re lucky to work with a wide range of partner organizations throughout the city and county in government agencies, community based organizations, resident groups, organizing groups and faith based communities. ",
    where: "300 Lakeside Drive, Oakland",
    title: "Quilting Club",
    date: 'in 6 hours',
    tags: ['Crafts'],
    distance: '1.6mi',
    attending: [
      "Loretta",
      "Erasmus",
      "Pinto",
      "Juanita",
      "Herve",
      "Pertelote" ],
    seats: 14  } ,

  { id: 456,
    title: "Cello Piñata Society",
    who: "Young Men's Cellists Association",
    about: "We’ve been asking folks for ideas and issues that are important to them that may be overcome, aided or improved through the use of great technology-based tools, especially mobile apps for use by those without fancy (and expensive) smartphones. The following ideas for apps or tools came from a variety of people working to improve our city for the residents of our city, take a minute to read over these to see if they are of interest to you as a developer seeking great ideas or to see if someone else is possibly thinking about the same issues you are.",
    where: "300 Lakeside Drive, Oakland",
    date: 'in 2 days',
    tags: ['Crafts', 'Music'],
    distance: '1.8mi',
    attending: [
      ],
    seats: 6 }
];

exports.user = {
  'username': "sonja",
  'interests': ['Crafts']
};
