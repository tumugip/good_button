//画像を配列に格納する
var img_good = new Array();
img_good[0] = new Image();
img_good[0].src = "/img/good1.png";
img_good[1] = new Image();
img_good[1].src = "/img/good2.png";

var img_bad = new Array();
img_bad[0] = new Image();
img_bad[0].src = "/img/bad1.png";
img_bad[1] = new Image();
img_bad[1].src = "/img/bad2.png";

//画像番号用のグローバル変数
var cnt_good=0;
var cnt_bad=0;

//ボタンを押された回数のカウント
var count_good = 0;
var count_bad = 0;

//画像切り替え関数
function changeIMG_good(){
  //画像番号を進める
  if (cnt_bad ==0){
    if (cnt_good == 1){ 
        cnt_good=1; 
    }
    else{ 
      cnt_good++;
      count_good++;
      good_times.innerHTML = count_good;
    }
  }
  
  //画像を切り替える
  document.getElementById("goodimg").src=img_good[cnt_good].src;
}

//画像切り替え関数
function changeIMG_bad(){
  //画像番号を進める
  if (cnt_good == 0){
    if (cnt_bad == 1)
    { cnt_bad=1; }
    else
    { cnt_bad++; 
      count_bad++;
      bad_times.innerHTML = count_bad;
    }
  }
  //画像を切り替える
  document.getElementById("badimg").src=img_bad[cnt_bad].src;
}

