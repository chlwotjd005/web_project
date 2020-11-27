// $.getJSON('/product.json',function(data){
// console.log(data);

// var strDOM="";
//   strDOM+="<img src=" + data[0].image + ">";
//   $('.image').append(strDOM);
//   $('.product_name').text(data[0].p_name);
//   $('.price').text(data[0].p_price);
//   $('.sellername').text(data[0].seller); 
//   $('.sellerscore').text(data[0].seller_score);
//   $('.content').text(data[0].p_content);
// });
              
              // $.getJSON('/product.json',function(data){
              //   console.log(data);
              //   var innerHTML="";
              //   for(var i=0; i < 3; i++){
              //     if(data[0].p_id!=i&&data[0].category==data[i].category){
    
              //       innerHTML+='<div class="box">';
              //       innerHTML+='    <div class="product_image">';
              //       innerHTML+='        <img src=';
              //       innerHTML+=             data[i].image;
              //       innerHTML+='        >';
              //       innerHTML+="    </div>";
              //       innerHTML+='    <div class="product_info">';
              //       innerHTML+='        <a href=';
              //       innerHTML+=             data[i].product_page;
              //       innerHTML+='        >';
              //       innerHTML+='          <span class="product_title">';
              //       innerHTML+=               data[i].p_name;
              //       innerHTML+='          </span>';
              //       innerHTML+='        </a>';
              //       innerHTML+="    </div>"   ;    
              //       innerHTML+='    <div class="seller-info">';
              //       innerHTML+='        <span class="seller-name">';
              //       innerHTML+=             data[i].seller;
              //       innerHTML+='        </span>';
              //       innerHTML+='        <span class="seller-score">';
              //       innerHTML+='           판매자 평점:';
              //       innerHTML+=             data[i].seller_score;
              //       innerHTML+='        </span>';
              //       innerHTML+='    </div>';
              //       innerHTML+='    <p class="product_price">';
              //       innerHTML+=         data[i].p_price;
              //       innerHTML+='    </p>';
              //       innerHTML+='    <p class="product_hashtag">';
              //       innerHTML+='        #';
              //       innerHTML+=            data[i].hashtag;
              //       innerHTML+='    </p>';
              //       innerHTML+='</div>';
              //   }
              // }
              // $('.productlist_wrap').append(innerHTML);
              // });



// Accordion 
function Catefunc1() {
  var x = document.getElementById("InnerCate1");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}

function Catefunc2() {
  var x = document.getElementById("InnerCate2");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
function Catefunc3() {
  var x = document.getElementById("InnerCate3");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
function Catefunc4() {
  var x = document.getElementById("InnerCate4");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
function Catefunc5() {
  var x = document.getElementById("InnerCate5");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("Cate1").click();


// Open and close sidebar
function j_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function j_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
