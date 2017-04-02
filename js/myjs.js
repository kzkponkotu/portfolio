      var layzr = new Layzr();
      var smafo = false;
      $(document).foundation();
        var slide_intro_text = [];
        var slide_title_text = [];      
        var slide_info_text = [];
        for(var i=0; i<document.getElementsByClassName("slide_intro").length; i++){
        slide_intro_text[i] = document.getElementsByClassName("slide_intro")[i].innerHTML;
        }
        for(var i=0; i<document.getElementsByClassName("slide_title").length; i++){
        slide_title_text[i] = document.getElementsByClassName("slide_title")[i].children[0].innerHTML;
        }
        for(var i=0; i<document.getElementsByClassName("slide_info").length; i++){
          slide_info_text[i] = document.getElementsByClassName("slide_info")[i].innerHTML;
        }
        $(document).on("click",".button-group", function () {
          if(document.getElementById("matomeru").style.display != 'none'){
            document.getElementById("responsive-menu").style.display = 'none';
          }
        });
        $(window).scroll(function () {
          if(document.getElementById("matomeru").style.display != 'none'){          
            document.getElementById("responsive-menu").style.display = 'none';
          }
        });
        $(document).on("click",".menu-icon", function () {
          smafo = true;
        });
        $(window).on('load',function(){
          document.getElementsByClassName("stacked-for-small")[0].children[0].style.backgroundColor = '#DB8700';
        });
        $(window).on('load resize', function(){
          document.getElementById("top_title").style.top = (window.innerHeight - document.getElementById("top_title").clientHeight)/2 + "px";          
          document.getElementById("top_slide").style.top = document.getElementsByClassName("top-bar")[0].clientHeight + "px";
          document.getElementById("top_slide").style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].clientHeight) + "px";
          document.getElementById("top_slide_blend").style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].clientHeight) + "px";        
          for(var i=0; i<document.getElementsByClassName("slide").length; i++){
            document.getElementsByClassName("slide")[i].style.top = document.getElementsByClassName("top-bar")[0].clientHeight + "px";
            document.getElementsByClassName("slide")[i].style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].clientHeight) + "px";
          }                  
          $('.slide_intro').each(function(i, element) {
              document.getElementsByClassName("slide_intro")[i].innerHTML = slide_intro_text[i];
              $clamp(element, { clamp: 1});
          });

          for(var i=0; i<document.getElementsByClassName("slide_intro").length; i++){
              document.getElementsByClassName("slide_intro")[i].innerHTML = slide_intro_text[i];
              $clamp(document.getElementsByClassName("slide_intro")[i], { clamp: 2});
          }

          for(var i=0; i<document.getElementsByClassName("slide_title").length; i++){
              document.getElementsByClassName("slide_title")[i].children[0].innerHTML = slide_title_text[i];
              $clamp(document.getElementsByClassName("slide_title")[i].children[0], { clamp: 1});
          }

          for(var i=0; i<document.getElementsByClassName("slide_info").length; i++){
              document.getElementsByClassName("slide_info")[i].innerHTML = slide_info_text[i];
              $clamp(document.getElementsByClassName("slide_info")[i], { clamp: 1});
          }
          for(var i=0; i<document.getElementsByClassName("halfslide").length; i++){
            document.getElementsByClassName("halfslide")[i].style.top = document.getElementsByClassName("top-bar")[0].offsetHeight + "px";
            document.getElementsByClassName("halfslide")[i].style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].offsetHeight)/2 + "px";
          }
        });
        var category_name = ['fablication','modeling','remake','game','photo','hobby'];

        function category_filter(num){          
          for(var i=0; i<document.getElementsByClassName("stacked-for-small")[0].children.length; i++){
            document.getElementsByClassName("stacked-for-small")[0].children[i].style.backgroundColor = 'rgba(0,0,0,0)';
          }
          document.getElementsByClassName("stacked-for-small")[0].children[num+1].style.backgroundColor = '#DB8700';
          for(var i=0; i<category_name.length; i++){
            for(var j=0; j<document.getElementsByClassName(category_name[i]).length; j++){
              document.getElementsByClassName(category_name[i])[j].style.display = "inline-block";
            }
          }
          for(var i=0; i<category_name.length; i++){
            if(i!=num && num!=-1){
              for(var j=0; j<document.getElementsByClassName(category_name[i]).length; j++){
                document.getElementsByClassName(category_name[i])[j].style.display = "none";
              }
            }
          }
        }