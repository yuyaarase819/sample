//赤いボックスクリックでアラーと
$(function(){
  $('#btn').on('click',function(){
    alert('hoverで赤く');
  });
});
//赤いBox
$(function(){
  $('#btn').on('mouseover',function(){
    $(this).css({
      'background': 'red'
    });
  })
  .on('mouseout',function(){
  $(this).css({
    'background': ''
    })
  });
});
//黒いボックスにアニメーションで色変換
$(function(){
  $('#btn1').on('mouseover',function(){
    $('#btn1').stop(true).animate({
      backgroundColor:'purple'
    },
    1500,
  );
})
.on('mouseout',function(){
  $('#btn1').stop(true).animate({
    backgroundColor:'black'
  },
  500,
);
});
});

$(function(){
  $('#btn1').on('click',function(){
    alert('黒いボックスがゆっくり紫に');
  });
});

//リセットボタンでのリロードを阻止
$(function(){
  $('#button').on('click',function(e) {
      return e.preventDefault();
  });
})

//リセットボタンクリックで内容を初期値に
$(function(){
  $('#button').on('click',function(){
    $('form')[0].reset();
  });
});
//リセットボタンでアラートs
$(function(){
  $('#button').on('click',function(){
    alert('フォームをリセットします。');
  });
});

$(function(){
  $('#anime').on('click',function(){
    $('#anime').animate({
      opacity:0,
      fontSize:'0px'
    },
    1500
    );
  });
});

$(function(){
  $('#anime1').on('click',function(){
    $('#anime1').animate({
      color:'blue'
    },
    1500
    );
  });
});

$(function(){
  $('#position')
  .css('top','100px')
  .on('click',function(){
    $('#position').animate({
      top:'-50'
    },
    1500,
    function(){
      $('#position').animate({top:''},300);
    }
    );
  });
});
