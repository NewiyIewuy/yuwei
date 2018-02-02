window.onload = function(){
    
    var clickitem = document.getElementsByClassName('play');
    clickitem[0].addEventListener("click",function(){
        window.open("game2048/index.html")
    });
    clickitem[1].addEventListener("click",function(){
        window.open("puzzle-easy.html")
    });
    clickitem[2].addEventListener("click",function(){
        window.open("puzzle-hard.html")
    })
    clickitem[3].addEventListener("click",function(){
        window.open("snack.html")
    })









    function show(a,b){
        document.getElementsByClassName(a)[0].style.display = b;
    }
    document.getElementById("javascript").addEventListener("click", function(){
    	show("games-wrapper1","inline-block");
    	show("games-wrapper2","none");
    	show("games-wrapper3","none")
    });
    document.getElementById("css3").addEventListener("click", function(){
    	show("games-wrapper1","none");
    	show("games-wrapper2","inline-block");
    	show("games-wrapper3","none")
    });
    document.getElementById("html5").addEventListener("click", function(){
    	show("games-wrapper1","none");
    	show("games-wrapper2","none");
    	show("games-wrapper3","inline-block");
    });
    document.getElementById("all").addEventListener("click", function(){
    	show("games-wrapper1","inline-block");
    	show("games-wrapper2","inline-block");
    	show("games-wrapper3","inline-block")
    });

}


