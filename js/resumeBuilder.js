var bio = {
  "name" : "Costas Zeimpekis",
  "role" : "Web Developer",
  "contacts" : {
      "mobile" : "6908626343",
      "email" : "bkkostas@gmail.com",
      "location" : "Panorama"
    },
    "welcomeMessage": "Fuck You",
    "skills" : ["deathader, programming, ultra-focus"],
    "biopic" : "images/fly.jpg"
}

var education = {
  "schools" : [
    {
      "name" : "kalamaria",
      "city" : "Thessaloniki",
      "degree" : "Masters",
      "majors" : ["GS"],
      "dates" : 2017
      "url" : "http://fuckyou.com"
    },
    {
      "name" : "BKH",
      "city" : "Athens",
      "degree" : "Masters",
      "majors" : ["FU"],
      "dates" : 2017
      "url" : "http://Hell.com"

    }
  ],
  "onlineShcools" : [
    {
    "titles" : "Javascript course",
    "school" : "Udacity",
    "url" : "http://www.udacity.com"
  }
]
}

var work = {
  "jobs" :
    [ {"employer" : "Semitron",
      "title" : "Sales Director",
      "dates" : "01-12-10",
      "description" : "Make it happen"
    },
    {"employer" : "Impedimed",
      "title" : "Project Manager",
      "dates" : "01-12-15",
      "description" : "Save your self"
    }
  ]
}


var projects = {
  "projects" : [
    {
      "title" : "Sample Projects 1",
      "dates" : "2014",
      "description" : "Na pana na gamitheis poustiudes",
      "images": [
        "images/fly.jpg",
        "images/fly.jpg"
      ]
    }
  ]
}

if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}
