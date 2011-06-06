var mongoose = require('mongoose/');
mongoose.connect ('mongodb://localhost/oakland-pm');

var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  address: String,
  bus: String,
  bart: String,
  loc: { lat:  { type: Number, min: -90,  max: 90  }, 
         long: { type: Number, min: -180, max: 180 } }
});

var ProgramSchema = new Schema({
  name: String,
  agency: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  district: String,
  phone: String,
  fax: String,
  email: String,
  web: String,
  tdd: String,

  address: String,
  bus: String,
  bart: String,
  loc: { lat:  { type: Number, min: -90,  max: 90  }, 
         long: { type: Number, min: -180, max: 180 } },

  duration: String,
  description: String,
  eligibility: String,
  dates: [Date],
  agemin: Number,
  agemax: Number,
  fees: String, 

  tags: [String],
  attending: [String],
});

function starsListToDict(list) {
  // turn csv data from stars to a dictionary
  return {
    ID: list[0],
    program: list[1],
    agency: list[2],
    address: list[3],
    city: list[4],
    state: list[5],
    zip: list[6],
    district: list[7],
    phone: list[8],
    fax: list[9],
    tdd: list[10],
    email: list[11],
    web: list[12],
    duration: list[13],
    description: list[14],
    eligibility: list[15],
    days: list[16],
    hours: list[17],
    ages: list[18],
    fees: list[19],
    access: list[20],
    translation: list[21],
    computer: list[22],
    leadership: list[23],
    leadershipage: list[24],
    appdeadline: list[25],
    requirements: list[26],
    translator: list[27],
    bus: list[28],
    locations: list[29],
    bart: list[30],
    volunteer: list[31],
    logo: list[32],
    minage: list[33],
    contactemail: list[34],
    photo: list[35],
    download: list[36],
    contact: list[37],
    contactphone: list[38],
    password: list[39],
    user: list[40],
    approved: list[41],
    other: list[42],
    notes: list[43],
    provider: list[44],
    mapaddress: list[45],
    services: list[46] }
}

mongoose.model('ProgramModel', ProgramSchema);

var Program = mongoose.model('ProgramModel');

bootstrap = function() {
  var csv = require('csv');
  csv()
    .fromPath(__dirname+'/data/stars-data.csv')
    .transform(function(data){
      return starsListToDict(data);
    })
    .on('data',function(data,index){
      if (data.ages.match(/18/) && data.program && data.address) {
        console.log('#'+index + ': ' + data.program);
        var program = new Program({
          name: data.program,
          agency: data.agency,
          address: data.address,
          city: data.city,
          state: data.state,
          zip: data.zip,
          district: data.district,
          phone: data.phone,
          fax: data.fax,
          tdd: data.tdd,
          email: data.email,
          web: data.web,

          bus: data.bus,
          bart: data.bart,

          fees: data.fees
        });
        program.save();
      }
    });
}




if (typeof exports !== 'undefined') {
  exports.Program = Program;
  exports.starsListToDict = starsListToDict;
  exports.bootstrap = bootstrap;
}

// node samples/sample.js
var csv = require('csv');

