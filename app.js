var express = require('express');
var fs = require('fs');
// var path = require('path');
// var bodyParser = require('body-parser');
const mysql = require('mysql');
var connection;
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
const { reject, select } = require('async');
const { render } = require('ejs');
var session=require("express-session");

// for search and checkbox --HC--
var object = [];
var first_to_move = true;
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
           p_content:"새 책입니다. 꼭 사세요.",
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
              p_content:"컴사 책 사고 A++ 받으세요",
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
             p_content:"조금 비싸요",
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
             p_content:"아이폰 11 64기가 꼭 사세요 액정 교체받았습니다.",
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
             p_content:"아메리카노보다 맛있는 카페모카입니다.",
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
            p_content:"디저트 세트에 11500원!!",
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
              p_content:"학교가 도보로 3분 거리이면 꼭 사야 합니다. 가까운게 최고",
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
             p_content:"2번출구는 학교 건너편이지만 횡단보도 한번이면 학교에 금방 도착합니다.",
             category: 5,
             detail_category:16,
             image:"/img/product10.jpg",
             hashtag:"보증금2000지상층풀옵션"
           },
           {
            p_name:"청치마 팔아요",
            p_id: 10,
            p_price: "20000원",
            seller: "동작구직거래왕10",
            seller_score: 3.5,
            p_content:"스파오 제품입니다. 원가 2만원이고 사이즈 s인데 평소에는 m입는 사람도 어느정도 맞아요!",
            category: 1,
            detail_category:2,
            image:"/img/product11.jpg",
            hashtag:"스파오"
          },
          {
            p_name:"남자 블레이저 팔아요~!~!",
            p_id: 11,
            p_price: "50000원",
            seller: "동작구직거래왕11",
            seller_score: 3.7,
            p_content:"남자 블레이저 판매합니다:) 유루이 쇼핑몰에서 구매했고 이 쇼핑몰 자체생산한 블레이저입니다. 컬러는 딥브라운 컬로고 색감이 아주 고급집니다",
            category: 1,
            detail_category:3,
            image:"/img/product12.jpg",
            hashtag:"택배비 무료"
          },
          {
            p_name:"배라 파인트",
            p_id: 12,
            p_price: "7000원",
            seller: "동작구직거래왕12",
            seller_score: 3.0,
            p_content:"7000원에 팔아용",
            category: 4,
            detail_category:13,
            image:"/img/product13.jpg",
            hashtag:"배스킨 라빈스"
          },
          {
            p_name:"핑크 필라테스복",
            p_id: 13,
            p_price: "16000원",
            seller: "동작구직거래왕13",
            seller_score: 4.5,
            p_content:"거의 새거입니다. 필라테스복이 많아서 팔아요 25900->16000원으로 판매하겠습니다.",
            category: 1,
            detail_category:1,
            image:"/img/product14.jpg",
            hashtag:"필라테스복"
          },
          {
            p_name:"다이아몬드레이라 셔츠",
            p_id: 14,
            p_price: "30000원",
            seller: "동작구직거래왕14",
            seller_score: 4.2,
            p_content:"입고 나갔는데 제 누런 얼굴이랑 미스ㅐ치라 판매합니다. 흰 얼굴이 입으면 찰떡임",
            category: 1,
            detail_category:1,
            image:"/img/product15.jpg",
            hashtag:"스트라이프 셔츠"
          },
          {
            p_name:"여자바지 팝니당",
            p_id: 15,
            p_price: "16000원",
            seller: "동작구직거래왕15",
            seller_score: 4.9,
            p_content:"살이 빠져서 허리가 안맞고 취향이 바뀌어서 팝니다. 전부 m사이즈 입니다.",
            category: 1,
            detail_category:2,
            image:"/img/product16.jpg",
            hashtag:"밀리언코르"
          },
          {
            p_name:"더블 1955 버거세트",
            p_id: 16,
            p_price: "6500원",
            seller: "동작구직거래왕16",
            seller_score: 3.2,
            p_content:"8500원짜리 버거세트 기프티콘 6500원에 싸게 드립니다.",
            category: 4,
            detail_category:13,
            image:"/img/product17.jpg",
            hashtag:"맥도날드"
          },
          
          {
            p_name:"2월이나 3월까지 사실분 구합니다.",
            p_id: 17,
            p_price: "450000원",
            seller: "동작구직거래왕17",
            seller_score: 2.5,
            p_content:"5평, 500/45(관리비포함) 숭실대 정문 맞은편 언덕위에 있습니다. 보일러도 잘되고 따뜻해요!",
            category: 5,
            detail_category:16,
            image:"/img/product18.jpg",
            hashtag:"숭실대 원룸"
          },
          {
            p_name:"황금올리브치킨",
            p_id: 18,
            p_price: "17000원",
            seller: "동작구직거래왕18",
            seller_score: 4.9,
            p_content:"팝니다 17000",
            category: 4,
            detail_category:13,
            image:"/img/product19.jpg",
            hashtag:"BBQ"
          },
          {
            p_name:"블랙 구두(240)",
            p_id: 19,
            p_price: "20000원",
            seller: "동작구직거래왕19",
            seller_score: 3.0,
            p_content:"국내제작 구두입니다. 발바닥에 쿠션 다 있고 고급스럽습니다.",
            category: 1,
            detail_category:4,
            image:"/img/product20.jpg",
            hashtag:"새제품"
          },
          {
            p_name:"소라색 구두 사이즈 240",
            p_id: 20,
            p_price: "20000원",
            seller: "동작구직거래왕20",
            seller_score: 3.7,
            p_content:"메이드인 코리아이며 발바닥에 쿠션 다 있고 힐부분이 엄청 고급집니다.",
            category: 1,
            detail_category:4,
            image:"/img/product21.jpg",
            hashtag:"새제품"
          },
          {
            p_name:"콜마우틴 트레킹화 230",
            p_id: 21,
            p_price: "30000원",
            seller: "동작구직거래왕21",
            seller_score: 3.1,
            p_content:"등산하려고 구매했는데 한번도 밖에 신고나간적 없는 새신발이에요.부모님이 신발 주문해주신거 모르고 제가 따로 구매해버려서 반품하기 귀찮아서 팝니다.",
            category: 1,
            detail_category:4,
            image:"/img/product22.jpg",
            hashtag:"등산화"
          },
          {
            p_name:"경제 전공 교재 팝니다.",
            p_id: 22,
            p_price: "12000원",
            seller: "동작구직거래왕22",
            seller_score: 4.2,
            p_content:";경제 경영 수학 길잡이'이고 원하시면 책 상태 찍어서 보내드립니다.",
            category: 2,
            detail_category:6,
            image:"/img/product23.jpg",
            hashtag:"경제학과"
          },
          {
            p_name:"영문과 전공책",
            p_id: 23,
            p_price: "18000원",
            seller: "동작구직거래왕23",
            seller_score: 2.5,
            p_content:"english syntax and argumentation, 샤프로 필기하고 표지는 깔끔합니다.",
            category: 2,
            detail_category:6,
            image:"/img/product24.jpg",
            hashtag:"택배비 3500원"
          },
          {
            p_name:"교양 교재 팝니다.",
            p_id: 24,
            p_price: "10000원",
            seller: "동작구직거래왕24",
            seller_score: 4.5,
            p_content:"자연과학과의 만남 책으로 '과학기술의 철학적 이해2'입니다.",
            category: 2,
            detail_category:6,
            image:"/img/product25.jpg",
            hashtag:"조금 필기"
          },
          {
            p_name:"인간관계 심리학",
            p_id: 25,
            p_price: "8000원",
            seller: "동작구직거래왕25",
            seller_score: 3.6,
            p_content:"핵심교양 인간관계론 교재입니다. 정가 19000원인데 8000원에 팔게요. 필기가 군데군데 되어있지만 상태가 나쁘지 않습니다.",
            category: 2,
            detail_category:7,
            image:"/img/product26.jpg",
            hashtag:"교양교재"
          },
          {
            p_name:"시나공 컴활 1급 필기책",
            p_id: 26,
            p_price: "15000원",
            seller: "동작구직거래왕26",
            seller_score: 2.6,
            p_content:"기출문제집만 풀어놨고 다른 개념책에는 밑줄이나 필기없이 눈으로만 공부했습니다.",
            category: 2,
            detail_category:8,
            image:"/img/product27.jpg",
            hashtag:"컴활 1급"
          },
          {
            p_name:"아이폰6s",
            p_id: 27,
            p_price: "85000원",
            seller: "동작구직거래왕27",
            seller_score: 4.5,
            p_content:"8만 5천원에 팝니다. 쿨거시 8만원에 팔게여",
            category: 3,
            detail_category:10,
            image:"/img/product28.jpg",
            hashtag:"아이폰6s"
          },
          {
            p_name:"아이폰7, 8+ 케이스 팝니다.",
            p_id: 28,
            p_price: "6000원",
            seller: "동작구직거래왕28",
            seller_score: 3.2,
            p_content:"사진에서 블랙그레이 색상입니다. 아직 택배 안뜯은 상태입니다.",
            category: 3,
            detail_category:12,
            image:"/img/product29.jpg",
            hashtag:"택포 90000원"
          },
          {
            p_name:"웰시코기 궁딩이 에어팟 케이스",
            p_id: 29,
            p_price: "5000원",
            seller: "동작구직거래왕29",
            seller_score: 4.7,
            p_content:"프로로 잘못 주문했어요ㅠ 포장 안뜯은 새거에요",
            category: 3,
            detail_category:12,
            image:"/img/product30.jpg",
            hashtag:"에어팟 프로케이스"
          },
          
  ];
  //출처: 에브리타임 장터게시판

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret : 'my key',
    resave : true,
    saveUninitialized : true,
}));

function check_login(id, password){
  var sql = "SELECT * FROM user WHERE id = ?"
  return new Promise((resolve, reject) => {
      connection.query(sql, id, function(err, result){
          try{
              var receive_password = result[0]['password'];
              if(password == receive_password) resolve(1);
              else if(password != receive_password) resolve(0);
              else reject("NO ID!!!");
          } catch (error){
              reject("NO ID!!!!")
          }
      });
  });
}

function connect(){
  connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'my_db'
  });
  connection.connect();
  console.log("database connected!!!!");
}

function create_table(){
  var sql = "CREATE TABLE user(id VARCHAR(20) NOT NULL, password VARCHAR(20) NOT NULL, email VARCHAR(30) NOT NULL, PRIMARY KEY(id))";
  connection.query(sql, function(err, result){
      if(err) throw err;
      console.log("table created");
  })
}

function check_exist_table(){
  return new Promise(resolve => {
      var sql = "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'my_db' AND table_name = 'user'";
      connection.query(sql, function(err, result){
          if(err) throw err;
          resolve(result[0]['COUNT(*)']);
      });
  });
}

function insert_information(id, password, email){
  var sql = "INSERT INTO user set ? " ;
  var parameter = {id : id, password : password, email : email};
  return new Promise((resolve, reject) => {
      connection.query(sql, parameter, function(err, result){
          console.log(err);
          if(err){
              reject("<p> Failed to Sign up. </p>");
              return;
          }
          console.log("insert successed");
          resolve("<p> Sucess Sign up. Congulatulation!. close please~ </p>");
      })
  })
}

router.post('/cookie', function(req, res){
  if(req.body.username == "" || req.body.password == "" || req.body.email == ""){
      res.write("<p> YOU SHOULD INPUT ID OR PASSWORD OR EMAIL");
      res.end();
  }
  else{
      (async() => {
          console.log(req.body.username, req.body.password, req.body.email);
          insert_information(req.body.username, req.body.password, req.body.email)
          .then(function(result){
              console.log(result);
              console.log("sign up success");
              res.send("1");
          })
          .catch(function(err){
              console.log(err);
              console.log("sign up failed");
              res.send("0");
          })
      })();
  }
})

router.post('/cookie1', function(req, res){
  if(req.body.id == "" || req.body.password == ""){
      res.write("<p>PLEASE Input ID or PASSWORD BLANK");
      res.end();
  }
  else{
      (async() => {
          check_login(req.body.id, req.body.password)
          .then(function(result){
              if(result){
                  req.session.user = {
                      id : req.body.id,
                      password : req.body.password,
                  }
                  console.log("Login Success!!!!");
                  res.send("1");
              }
              else{
                  res.send("0");
              }
          })
          .catch(function(err){
              res.send("-1");
          })
      })();
  }
})

router.get("/logout", function(req, res){
  console.log("logout success");
  req.session.destroy(() => {
      res.redirect("/");
  })
})

app.set("views",path.join(__dirname,"view"));
app.set("view engine","ejs");

//app.use(express.static('view'));
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
  secret:"0000",
  resave:false
})
);

app.get('/', function(req, res){
  if(!req.session.user){
      fs.readFile('./view/index.ejs', function(err, data){
          if(err) console.log(err);
          res.writeHead(200, {'Contesnt-type': 'text/ejs' });
          res.end(data);
      })
  }
  else{
      fs.readFile('./view/index1.ejs', function(err, data){
          if(err) console.log(err);
          res.writeHead(200, {'Contesnt-type': 'text/ejs' });
          res.end(data);
      })
  }
});


app.get("/index",function(req, res, next){
    res.render("index",{productlist:productlist});
});

app.get("/index/clothes", function(req, res, next){
  req.session.current_url="/productlist/clothes";
  var select_res = [];

  for(var j = 0; j<productlist.length; j++){
    if(productlist[j].category == 1){
      select_res.push(productlist[j]);
    }
  }
  return res.render("productlist.ejs",{productlist:select_res});
});

app.get('/view/login/login.ejs', function(req, res){
    fs.readFile('./view/login/login.ejs', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/ejs' });
        res.end(data);
    });
});

app.get('/view/login/signup.ejs', function(req, res){
    fs.readFile('./view/login/signup.ejs', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/ejs' });
        res.end(data);
    });
});

// app.get("/productdetail/:p_id",function(req, res, next){
//   for(var i=0; i<productlist.length; i++){
//     if(productlist[i].p_id==req.params.p_id){
//       req.session.current_url="/productdetail/"+ req.params.p_id;
//       return res.render("productdetail.ejs",{productlist:productlist[i],product:productlist});
//     }   
//   }
//     res.redirect("/");
// });

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
  object = productlist;
  res.render("productlist.ejs",{productlist:productlist});
});

app.get("/prodouctlist/:p_category",function(req, res, next){
  req.session.current_url="/productlist/" + req.params.p_category;
  // const object = [];
  // const temp = [];
  var search_res = [];
  var select_res = [];
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

app.use('/', router);

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
    connect();
    (async() => {
        var result = await check_exist_table();
        if(!result) create_table();
    })();
});

