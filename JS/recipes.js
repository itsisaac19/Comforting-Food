for(i = 0; i < document.getElementsByClassName('type').length; i++) {
    document.getElementsByClassName('type')[i].addEventListener('click', load_recipes)
  }

var globaldata;
var globalfuse;

function load_recipes(type, data) {
  var wrapper = document.getElementsByClassName('outercontent')[0]

  if(data) { // If data is availible 
    globaldata = data // Make it accessible
    console.log(data)
    wrapper.innerHTML = ''; // Make sure the html is empty

    for (i = 1; i < data.all.length; i++) { // For every recipe
      if(data.all[i] != undefined) { // If the requested recipe is availible

        var tempdiv = document.createElement('div'); tempdiv.classList.add('square') // Create an element
        for(classes = 0; classes < data.all[i].css.length; classes++) { // Add classess needed
          tempdiv.classList.add(data.all[i].css[classes])
        }

        var detailsdiv = document.createElement('div'); detailsdiv.classList.add('details') // Details wrapper

        var titletempdiv = document.createElement('div'); titletempdiv.innerHTML = data.all[i].title; // Title
        var infotempdiv = document.createElement('div'); infotempdiv.innerHTML = data.all[i].info; // Info

        titletempdiv.classList.add('squaretitle'); infotempdiv.classList.add('squareinfo')

        detailsdiv.appendChild(titletempdiv) // Add the html to the element
        detailsdiv.appendChild(infotempdiv) // Add the html to the element

        tempdiv.appendChild(detailsdiv) // Add the details to the wrapper


        wrapper.appendChild(tempdiv) // Add the div to the wrapper





        var list = [];

        for(recipes = 0; recipes < document.getElementsByClassName('square').length; recipes++) {
          var squares = document.getElementsByClassName('square');
          var squaretitle = squares[recipes].children[0].children[0].innerHTML.trim()

          list.push(squaretitle)
        }

        const options = {
          includeScore: true,
          shouldSort: true,
          threshold: 0.01,
          keys: ['title']
        }
         globalfuse = new Fuse(list, options)

      }
    }
  }

  if(type || this.innerHTML) { // If type is availible 
    if (type != 'All') {
      type = this.innerHTML;

      var computedStyle = window.getComputedStyle(this).getPropertyValue('background-color')
      if (computedStyle == 'rgb(252, 248, 233)') {
        for(i = 0; i < document.getElementsByClassName('type').length; i++) {
          document.getElementsByClassName('type')[i].style.backgroundColor = null
          document.getElementsByClassName('type')[i].style.boxShadow = null
          document.getElementsByClassName('type')[i].style.color = null
        }
        this.style.backgroundColor = '#708D81'
        this.style.boxShadow = '0px 0px 25px #708D8193'
        this.style.color = 'white'

        setTimeout(function() {
          var squares = document.getElementsByClassName('square').length;
          //document.getElementsByClassName('outercontent')[0].style.height = (squares * 205) + 'px'
        })

      } else {
        type = 'All'
        this.style.backgroundColor = null
        this.style.boxShadow = null
        this.style.color = null

        setTimeout(function() {
          var squares = document.getElementsByClassName('square').length;
          //document.getElementsByClassName('outercontent')[0].style.height =  '1000px'
        })
      }
    }


    wrapper.innerHTML = ''; // Make sure the html is empty
    var typedata;

    if (type == 'All') {
     typedata = globaldata.all
    }
    if (type == 'Meat') {
     typedata = globaldata.types.meat
    }
    if (type == 'Soup') {
    //UNSUPPORTED
     typedata = globaldata.types.soup
    }
    if (type == 'Dessert') {
      //UNSUPPORTED
     typedata = globaldata.types.dessert
    }
    if (type == 'Noodles') {
    //UNSUPPORTED
     typedata = globaldata.types.noodles
    }

    console.log(typedata)

    
    for (i = 1; i < typedata.length; i++) { // For every recipe
      if(typedata[i] != undefined) { // If the requested recipe is availible

        var tempdiv = document.createElement('div'); tempdiv.classList.add('square') // Create an element
        for(classes = 0; classes < typedata[i].css.length; classes++) { // Add classess needed
          tempdiv.classList.add(typedata[i].css[classes])
        }

        var detailsdiv = document.createElement('div'); detailsdiv.classList.add('details') // Details wrapper

        var titletempdiv = document.createElement('div'); titletempdiv.innerHTML = typedata[i].title; // Title
        var infotempdiv = document.createElement('div'); infotempdiv.innerHTML = typedata[i].info; // Info

        titletempdiv.classList.add('squaretitle'); infotempdiv.classList.add('squareinfo')

        detailsdiv.appendChild(titletempdiv) // Add the html to the element
        detailsdiv.appendChild(infotempdiv) // Add the html to the element

        tempdiv.appendChild(detailsdiv) // Add the details to the wrapper


        wrapper.appendChild(tempdiv) // Add the div to the wrapper





        var list = [];

        for(recipes = 0; recipes < document.getElementsByClassName('square').length; recipes++) {
          var squares = document.getElementsByClassName('square');
          var squaretitle = squares[recipes].children[0].children[0].innerHTML.trim()

          list.push(squaretitle)
        }

        const options = {
          includeScore: true,
          shouldSort: true,
          keys: ['title']
        }
         globalfuse = new Fuse(list, options)

      }
    }
    
  }

  for (i = 0; i < document.getElementsByClassName('square').length; i++) {
    document.getElementsByClassName('square')[i].addEventListener('click', function() {
      var urltitle = this.children[0].children[0].innerHTML.toLowerCase()
      var url = urltitle.replace(/\s/g, "-") + '.html';
      window.location.href = '/Articles/' + url
    })
  }
}


var firebaseConfig = {
  apiKey: "AIzaSyD96HiZeE8Nkg0R8AVC37D61i_uQWYxzcw",
  authDomain: "comforting-food.firebaseapp.com",
  databaseURL: "https://comforting-food-default-rtdb.firebaseio.com",
  projectId: "comforting-food",
  storageBucket: "comforting-food.appspot.com",
  messagingSenderId: "856470462238",
  appId: "1:856470462238:web:5f208b02a57cde54e5330f",
  measurementId: "G-538VZSMENY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var meatrecipes = database.ref('0/recipes');
meatrecipes.on('value', (snapshot) => {
  const data = snapshot.val();
  load_recipes('All', data)
});




/*
database.ref('0').set({

// PASTE THE JSON HERE AND RUN TO UPDATE 

})*/




// DOM THINGS THAT GO AFTER DATA HAS LOADED







  function search (elem) {
    var searchtext = elem.value
    var result = globalfuse.search(searchtext)
    console.log(result)

    var squares = document.getElementsByClassName('square')
    var squareswrapper  = document.getElementsByClassName('outercontent')[0]
    if(result.length == 0) {
      for (x = 0; x < squares.length; x++) {
        squares[x].style.opacity = '1'
      }
    }


      if (result[0]) {
        for (x = 0; x < squares.length; x++) {

          for(i = 0; i < 1; i++) {
            if(result[i]) {
              var squaretitle = squares[x].children[0].children[0].innerHTML.trim()
              var searchtitle = result[i]['item'].trim()
              var match;

              //console.log(squaretitle)

              if (searchtitle.includes(squaretitle) == true || searchtitle == squaretitle) {
                match = true
              } else {
                match = false
              }

    
              if (match == true) {
                //console.log(searchtitle + ' includes ' + squaretitle + ' at ' + i)
                var squarebeingmoved = squares[x]
                squareswrapper.removeChild(squares[x])
                squareswrapper.insertBefore(squarebeingmoved, squareswrapper.children[i]) 
              }
            } else {
              //console.log(searchtitle + " not " + squaretitle + ' at ' + i)
              if (match == false) {
                squares[i].style.opacity = '0.5'
              }

            }
          }
        }
      }

  }


  document.getElementById('searchrecipes').onkeydown= function(e){
    search(this)
  }



  // DROPDOWN MENU FOR FILTER OF DIFFICULTY OF COOKING

  var droppeddown = false
  var cookinglevel =     document.getElementsByClassName('cookinglevel')[0]
  cookinglevel.addEventListener('click', openLevelDrop)


  function closeLevelDrop () {

    for(i = 0; i < document.getElementsByClassName('levels').length; i++) {
      document.getElementsByClassName('levels')[i].removeEventListener('click', closeLevelDrop)
      document.getElementsByClassName('levels')[i].style.display = 'none'
    }

    var param = this.innerHTML; 
    if (param == 'Hard' || param == 'Medium' || param == 'Easy' || param == 'All' ) {
      document.getElementById('displaylevel').innerHTML = param
    }

    cookinglevel.style.height = null
    cookinglevel.style.opacity = null
    cookinglevel.style.gridTemplateRows = null

    document.getElementById('filterlevel').style.opacity = null
    droppeddown = false

    setTimeout(function() {
      document.getElementsByClassName('cookinglevel')[0].addEventListener('click', openLevelDrop)
    })
  }

  function openLevelDrop () {
    cookinglevel.removeEventListener('click', openLevelDrop)

    var param = this.innerHTML;
    if (param != 'Hard' && droppeddown == true) { 
      closeLevelDrop()
      return;
    }

    for(i = 0; i < document.getElementsByClassName('levels').length; i++) {
      document.getElementsByClassName('levels')[i].addEventListener('click', closeLevelDrop)
      document.getElementsByClassName('levels')[i].style.display = 'grid'
    }

    setTimeout(function() {
      for(i = 0; i < document.getElementsByClassName('levels').length; i++) {
        document.getElementsByClassName('levels')[i].style.opacity = '1'
      }
      cookinglevel.style.height = '220px'
      cookinglevel.style.opacity = null
      cookinglevel.style.gridTemplateRows = '2fr repeat(4, 1fr)'
  
      document.getElementById('filterlevel').style.opacity = '0'
      droppeddown = true
    })
  }