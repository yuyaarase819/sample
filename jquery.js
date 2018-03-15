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
//リセットボタンでアラート
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

/*$(function(){
  $('#fadein').css('opacity','0');
});

$(function(){
  $('#fadein').on('click',function(){
    fadeIn();
  });
});

/*$(function(){
  $('#fadein').fadeIn('slow');
});

$(function() {

  // 一旦hide()で隠してフェードインさせる
  $('#fadein').hide().fadeIn('slow');

});
*/
$(function(){
$(window).on('scroll' , function(){
  if ($("#fadein").is(":hidden")) {
    //見えてなかったら
    $('#fadein').css('color','red')
  } else {
    //見えてたら
    $('#fadein').fadeIn();
  }
});
});
//4番目まで
$(function(){
  var duration = 500;

  $('.button1 button:nth-child(-n+4)')
  .on('mouseover',function(){
    $(this).stop(true).animate({
      backgroundColor:'purple',
      color:'black'
    },
    duration);
  })
    .on('mouseout',function(){
      $(this).stop(true).animate({
        backgroundColor:'blue',
        color:'red'
      },
      duration);
    });
  });

// 5番目から

  $(function(){
    var duration1 = 800;

    $('.button1 button:nth-child(n+5):nth-child(-n+8)')
    .on('mouseover',function(){
      $(this).stop(true).animate({
        borderWidth:'12px',
        color:'yellow'
      },
      duration1),'easeOutSine';
    })
      .on('mouseout',function(){
        $(this).stop(true).animate({
          borderWidth:'0px',
          color:'red'
        },
        duration1),'easeOutSine';
      });
    });
/*
$(function(){

  var duration3 = 500;

  $('.button1 button:nth-child(n+9)')
  .on('mouseenter',function(){
    $(this).find('> span').stop(true).animate({
      width:'100%'
    },duration3,'easeOutQuat');
  })
  .on('mouseleave',function(){
    $(this).find('> span').stop(true).animate({
      width:'0%'
    },duration3,'easeOutQuat');
  });
});
*/

$(function(){
  var duration3 = 500;

  $('.button1 button:nth-child(n+9)')
  .on('mouseenter',function(){
    $(this).find('> span').stop(true).animate({
      width:'100%'
    },
    duration3,'easeOutQuat');
  })
    .on('mouseleave',function(){
      $(this).stop(true).animate({
        width:'0%'
      },
      duration3,'easeOutQuat');
    });
  });
/*
$(function(){
var duration2 = 800;

  $('.button1 button:nth-child(n+5):nth-child(-n+8)')
  .on('ouseover',function(){
    $(this).stop(true).animate({
      backgroundColor:'yellow',
      color:'yellow'
    },
    duration);
  });
});
/*
/*
$(function(){
  $('.button1 button:nth-child(-n+4)').on('mouseover',function(){
    $(this).css({
      color:'purple'
    })
  });
});
*/

$(function(){
  $("#lastBox").val('aaa');
  $('#lastBoxbutton').click(function(event){
    $("#lastBox").val('aaa');
  });
});

$(function(){
  $('#lastBoxbutton').on('click',function(e) {
      return e.preventDefault();
  });
})
