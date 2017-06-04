



var pointsArray = document.getElementsByClassName('point');

var animatePoints= function(points){

             var revealpoint = function(index){

                 points[index].style.opacity = 1;
                 points[index].style.transform = "scaleX(1) translateY(0)";
                 points[index].style.msTransform = "scaleX(1) translateY(0)";
                 points[index].style.webkit="scaleX(1) translateY(0)"
                 WebkitTransform = "scaleX(1) translateY(0)";
             }


             pointsArray.forEach(revealpoint)
                cosole.log(revealpoint(i));


          
             });
           }
