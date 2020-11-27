 function CheckOnlyOne(chk){
    var obj = document.getElementsByName("chck");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
        obj[i].checked = false;
         }
     }
  }

 $(document).ready(function () {
      $('.btn').click(function () {
           console.log("aaa");
        //    var new_product = $('#productlist_wrap');
           if($("input:checkbox[value=clothing]").is(":checked") == true){
                alert('의류로 업데이트')
                // update_productlist(1); 
                // location.reload();
                location.href="/prodouctlist/1"                                          
             }
            else if($("input:checkbox[value=book]").is(":checked") == true){
                alert('도서로 업데이트');
                // update_productlist(2);
                location.href="/prodouctlist/2"                                                
             }
             else if($("input:checkbox[value=electronics]").is(":checked") == true){
                alert('전자기기로 업데이트');
                // update_productlist(3);  
                location.href="/prodouctlist/3"                                              
            }
            else if($("input:checkbox[value=coupon]").is(":checked") == true){
                alert('쿠폰/기프티콘으로 업데이트');
                // update_productlist(4);      
                location.href="/prodouctlist/4"                                          
            }
            else if($("input:checkbox[value=oneroom]").is(":checked") == true){
                alert('자취방으로 업데이트');
                // update_productlist(5);  
                location.href="/prodouctlist/5"                                              
            }
            else{
                alert('하나의 항목을 선택해야 합니다.');
            }

    });
});

// function update_productlist(P_category){
//     $('.productlist_wrap').empty();

//     var input = document.getElementById("search_input").value; //검색어 
//     console.log(input);

//     $.getJSON('product.json',function(data){
//       console.log(data);
//       var item_count =Object.keys(data).length;
//       var innerHTML="";
//       for(var i=0; i < item_count; i++){
//         var keyword = data[i].p_name;
//         console.log(keyword);
//         if((data[i].category == P_category) && (keyword.indexOf(input) != -1) ){
//           var image=data[i].image2;
//           var name=data[i].p_name;
//             innerHTML+='<div class="box">';
//             innerHTML+='    <div class="product_image">';
//             innerHTML+='        <img src=';
//             innerHTML+=            data[i].image2;
//             innerHTML+='        >';
//             innerHTML+="    </div>";
//             innerHTML+='    <div class="product_title">'
//             innerHTML+='         <a href="productdetail/<%=productlist[i].p_id%>">';
//             innerHTML+=             '<p><%= productlist[i].p_name%></p>';
//             innerHTML+='        </a>';
//             innerHTML+='    </div>' ;    
//             innerHTML+='    <div class="seller-info">';
//             innerHTML+='        <span class="seller-name">';
//             innerHTML+=             data[i].seller;
//             innerHTML+='        </span>';
//             innerHTML+='        <span class="seller-score">';
//             innerHTML+='           판매자 평점:';
//             innerHTML+=             data[i].seller_score;
//             innerHTML+='        </span>';
//             innerHTML+='    </div>';
//             innerHTML+='    <p class="product_price">';
//             innerHTML+=         data[i].p_price;
//             innerHTML+='    </p>';
//             innerHTML+='    <p class="product_hashtag">';
//             innerHTML+='        #';
//             innerHTML+=            data[i].hashtag;
//             innerHTML+='    </p>';
//             innerHTML+='</div>';
//         }
//       }
//       $('.productlist_wrap').append(innerHTML);
//     });
// }


$(document).ready(function () {
    $('button').hover(function () {
         // $(this) => clik event가 발생한 h1 객체
        $(this).addClass('reverse');
    }, function () {
         $(this).removeClass('reverse');
     });
    });
