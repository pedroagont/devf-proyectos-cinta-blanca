'use strict';

(function() {

  var cards =  [
          {"name":"Clone de Google","description":"Realizamos un clone de Google para entender cómo funcionan las etiquetas en HTML y su relación con el CSS.","foto":"https://i.imgur.com/B7OZOsJ.png","see_more":"https://pgonzalezmx.github.io/git-clone-google/","repo":"https://github.com/pgonzalezmx/git-clone-google"},
          {"name":"Clone de Hacker News","description":"Avanzamos un poco más con el entendimiento de HTML y CSS involucrando uso de barras de navegación, listas y tabuladores","foto":"https://i.imgur.com/Jah0Gj0.png","see_more":"https://pgonzalezmx.github.io/git-clone-hackernews/","repo":"https://github.com/pgonzalezmx/git-clone-hackernews"},
          {"name":"Calculadora","description":"Entrando al mundo de Javascript aplicando funciones de una calculadora básica","foto":"https://i.imgur.com/Ci6NqLM.png","see_more":"https://pgonzalezmx.github.io/git-calculadora/","repo":"https://github.com/pgonzalezmx/git-calculadora"},
          {"name":"Carta Para Mamá","description":"Proyecto realizado para el hackathoncito del día de las madres que tuvimos en la segunda semana durante el curso. Envía una carta a tu mamá por whatsapp.","foto":"https://i.imgur.com/5S8ILkM.jpg","see_more":"https://pgonzalezmx.github.io/carta-para-mama/","repo":"https://github.com/pgonzalezmx/carta-para-mama"},
          {"name":"GoodReads","description":"Clon de la página de inicio de GoodReads usando elementos de Bootstrap y CSS","foto":"https://i.imgur.com/Hm6od8W.jpg","see_more":"https://pgonzalezmx.github.io/git-clone-goodreads/","repo":"https://github.com/pgonzalezmx/git-clone-goodreads"},
          {"name":"Proyecto Final","description":"Recopilación de todos los proyectos desarrollados durante el curso de Cinta Blanca Cancún","foto":"https://i.ebayimg.com/images/g/KY4AAOSwXhZZ3~7k/s-l300.jpg","see_more":"https://pgonzalezmx.github.io/git-devf-cinta-blanca-final/","repo":"https://github.com/pgonzalezmx/git-devf-cinta-blanca-final"},
      ]

      function getFlags(proyecto) {

        var html =   '<div class="col-md-4">'+
                          '<div class="card">'+
                              '<img src="'+proyecto.foto+'" class="card-img-top" alt="">'+
                              '<div class="card-body">'+
                                  '<h5 class="card-title">'+proyecto.name+'</h5>'+
                                  '<p class="card-text">'+proyecto.description+'</p>'+
                                  '<a href="'+proyecto.see_more+'" class="btn btn-danger">Ver más</a>'+
                                  '<a href="'+proyecto.repo+'" class="btn btn-danger">Ver código</a>'+
                              '</div>'+
                          '</div>'+
                      '</div>';

        return html;
      }


      for (var i=0; i<=cards.length; i++) {
        document.getElementById("cards").innerHTML = document.getElementById("cards").innerHTML + getFlags(cards[i]);
      }


})();
