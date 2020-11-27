var express = require('express');
var fs = require('fs');
// var path = require('path');
// var bodyParser = require('body-parser');

var app = express();
var path = require('path');
var session=require("express-session");

// for search and checkbox --HC--
var object = [];

const productlist=[
  //상의:1, 하의:2, 아우터:3, 신발:4, 기타:5, 전공:6, 소설:7, 자기개발:8, 기타:9, 휴대폰:10
  //가전기기:11, 기타:12, 음식:13, 음료: 14, 문화상품권: 15, 원룸: 16, 투룸: 17, 하숙: 18, 기타:19
              {
              p_name: "다온아토 독일군 스니커즈 265",
              p_id:0,
              p_price:"28000원",
              seller:"동작구직거래왕0",
              seller_score:4.5,
              p_content:"한번도 안신은 새 신발",
              category:1,
              detail_category:4,
              image:"/img/product1.jpg",
              hashtag:"새상품"
              },
              {
              p_name:"탑10 롱패딩 사이즈 90",
              p_id:1, 
              p_price:"20000원", 
              seller:"동작구직거래왕1",
              seller_score:3.5, 
              p_content:"따뜻합니다",
              category:1,
              detail_category:3,
              image:"/img/product2.jpg",
              hashtag:"택배비 별도"
              },
          {
           p_name:"GSAT 책 팝니다",
           p_id: 2,
           p_price: "21000원",
           seller: "동작구직거래왕2",
           seller_score: 4.0,
           category: 2,
           detail_category:8,
           image:"/img/product3.jpg",
           hashtag:"숭실대입구 직거래"
           },
  
           
           {
             p_name:"컴사 책 팝니다(로봇그림)",
             p_id: 3,
             p_price: "9000원",
             seller: "동작구직거래왕3",
             seller_score: 3.5,
             category: 2,
             detail_category:6,
             image:"/img/product4.jpg",
             hashtag:"택배거래X"
           },
           {
             p_name:"애플팬슬 1세대 + 정품가죽케이스",
             p_id: 4,
             p_price: "70000원",
             seller: "동작구직거래왕4",
             seller_score: 5.0,
             category: 3,
             detail_category:11,
             image:"/img/product5.jpg",
             hashtag:"택배비미포함"
           },
           {
             p_name:"아이폰 11 64기가 화이트 액정 교체받은 외관 s급 기기",
             p_id: 5,
             p_price: "600000원",
             seller: "동작구직거래왕5",
             seller_score: 4.5,
             category: 3,
             detail_category:10,
             image:"/img/product6.jpg",
             hashtag:"학교근처 직거래"
           },
           {
             p_name:"스벅 카페모카 기프티콘 팔아요",
             p_id: 6,
             p_price: "4000원",
             seller: "동작구직거래왕6",
             seller_score: 4.5,
             category: 4,
             detail_category:14,
             image:"/img/product7.jpg",
             hashtag:"아메리카노"
           },
           {
             p_name:"스벅 디저트 세트 기프티콘 팔아요",
             p_id: 7,
             p_price: "11500원",
             seller: "동작구직거래왕7",
             seller_score: 4.5,
             category: 4,
             detail_category:14,
             image:"/img/product8.jpg",
             hashtag:"맛있음 보장"
           },
           {
             p_name:"숭실대 도보 3분 원룸 사실분",
             p_id: 8,
             p_price: "420000원",
             seller: "동작구직거래왕8",
             seller_score: 4.5,
             category: 5,
             detail_category:16,
             image:"/img/product9.jpg",
             hashtag:"반지하풀오셥관리비별도"
           },
           {
             p_name:"숭대 2번 출구 1분거리 원룸 양도합니다",
             p_id: 9,
             p_price: "420000원",
             seller: "동작구직거래왕9",
             seller_score: 4.7,
             category: 5,
             detail_category:16,
             image:"/img/product10.jpg",
             hashtag:"보증금2000지상층풀옵션"
           }
    
  ];
  
app.set("views",path.join(__dirname,"view"));
app.set("view engine","ejs");

app.use(express.static('view'));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
  secret:"0000",
  resave:false
})
);
app.get("/",function(req, res, next){
    res.render("index",{productlist:productlist});
  });

  app.get("/index",function(req, res, next){
    res.render("index",{productlist:productlist});
  });

app.get("/productdetail/:p_id",function(req, res, next){
  for(var i=0; i<productlist.length; i++){
    if(productlist[i].p_id==req.params.p_id){
      req.session.current_url="/productdetail/"+ req.params.p_id;
      return res.render("productdetail.ejs",{productlist:productlist[i],product:productlist});
    }   
  }
    res.redirect("/");
});

app.get("/productdetail/:p_id",function(req, res, next){
  for(var i=0; i<productlist.length; i++){
    if(productlist[i].p_id==req.params.p_id){
      req.session.current_url="/productdetail/"+ req.params.p_id;
      return res.render("productdetail.ejs",{productlist:productlist[i],product:productlist});
    }   
  }
    res.redirect("/");
});

app.get("/productdetail/:p_id/:p_id",function(req, res, next){
  for(var i=0; i<productlist.length; i++){
    if(productlist[i].p_id==req.params.p_id){
      req.session.current_url="/productdetail/"+ req.params.p_id + req.params.p_id;
      return res.render("productdetail.ejs",{productlist:productlist[i],product:productlist});
    }   
  }
    res.redirect("/");
 });


app.get("/productlist",function(req, res, next){
  res.render("productlist.ejs",{productlist:productlist});
});

app.get("/prodouctlist/:p_category",function(req, res, next){
  req.session.current_url="/productlist/" + req.params.p_category;
  // const object = [];
  // const temp = [];
  var search_res = [];
  var select_res = []
  search_res = object;
  
  // console.log(search_res);
  const input_category = req.params.p_category;
  for(var i=0; i<search_res.length; i++){
    if(search_res[i].category==req.params.p_category){
      select_res.push(search_res[i]);  
    }   
  }
  
  // console.log(select_res);
  
  return res.render("productlist_after_check.ejs",{product: select_res ,input_category: input_category});
});

app.get("/productlist/search",function(req, res, next){
  // console.log('??');
  object = productlist;
  res.render("productlist.ejs",{productlist:productlist});
});

app.get("/productlist/search/:search_value",function(req, res, next){
  // console.log('??');
  req.session.current_url="/productlist/search/" + req.params.search_value;
  const input = req.params.search_value;
  object = []; 
  for(var i=0; i<productlist.length; i++){
    var keyword = productlist[i].p_name;
    if(keyword.indexOf(input) != -1){
      object.push(productlist[i]);  
    }   
  }
  
  // console.log(object);
  // console.log(input);
  return res.render("productlist_after_search.ejs",{product: object, input: input});
});

app.get("/productlist_cg/:detail_cate",function(req, res, next){
  // console.log("here");
  req.session.current_url="/productlist_cg/"+ req.params.detail_cate;
  var detail_cate = req.params.detail_cate; 
  // console.log(detail_cate);   
  return res.render("productlist_cg.ejs",{productlist: productlist, detail_c: detail_cate});
});

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

