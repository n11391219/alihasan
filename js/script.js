$(document).ready(function() {


    let imgHeadHeight = $('.section2-left img').prop('naturalHeight');
    let imgHeadWidth = $('.section2-left img').prop('naturalWidth');



    if(parseFloat(imgHeadHeight) > parseFloat(imgHeadWidth)){
        $('.section2-left img').css({'object-fit':'contain', 'width':'50%', 'margin':'0 auto'});
    }else{
        $('.section2-left img').css({'object-fit':'cover'});
    }
    if(parseFloat(imgHeadHeight) == parseFloat(imgHeadWidth)){
        $('.section2-left img').css({'object-fit':'contain'});
    }



    function bgColor(){
        let bgColor = $('#section-section1').css('background-color');
        let bgColor_2 = $('#section-section2').css('background-color');
        let bgColor_3 = $('#section-section3').css('background-color');
        let bgColor_4 = $('.content-center__count_client').css('background-color');
        let bgColor_5 = $('.content-right_background').css('background-color');

        if(tinycolor(bgColor).isLight()){
            $('body').css({'color':'#333'});
            $('.nav-item a').css({'color':'#333'});
        }else{
            $('body').css({'color':'#fff'});
            $('.nav-item a').css({'color':'#fff'});

        }
        if(tinycolor(bgColor_2).isLight()){
            $('#section-section2').css({'color':'#333'});
        }else{
            $('#section-section2').css({'color':'#fff'});

        }
        if(tinycolor(bgColor_3).isLight()){
            $('#section-section3').css({'color':'#333'});
        }else{
            $('#section-section3').css({'color':'#fff'});

        }
        if(tinycolor(bgColor_4).isLight()){
            $('.content-center__count_client').css({'color':'#333'});
        }else{
            $('.content-center__count_client').css({'color':'#fff'});

        }
        if(tinycolor(bgColor_5).isLight()){
            $('.content-right_background').css({'color':'#333'});
        }else{
            $('.content-right_background').css({'color':'#fff'});

        }
    }




    if($('.section_1_contant').hasClass('flex-column') || $('.section_1_contant').hasClass('flex-column-reverse')){
        $('.section_1_contant').css({'justify-content':'space-between', 'text-align':'center'});
        $('.section_1_contant > div').addClass('widthClass');
        $('.section1-right img').css({'width':'250px'});
        $('ul.nav').attr('style', 'justify-content:center !important');
        $('.headContent').css({'margin-top':'70px'});
        if($('.section_1_contant').hasClass('flex-column-reverse')){
            $('div.nav').css({'margin-top':'20px'});
        }
    }

    if($('.badge').hasClass('btn-light')){
        $('.badge').css({'color':'#222'});
    }
    if($('.commentsItem__bottom').css('background-color') == 'rgb(255, 255, 255)'){
        $('.commentsItem__bottom').css({'margin-top':'0px'});
        $('.commentsItem__top').addClass('newAfter');
        if($('.alignClass').hasClass('justify-content-start')){
            $('.commentsItem__bottom').addClass('justify-content-start');
        }
        if($('.alignClass').hasClass('justify-content-center')){
            $('.commentsItem__bottom').addClass('justify-content-center');
        }
    }

    if($('.commentsBlock').css('display') == 'block'){
        $('.buyersBlock').css({'display':'none'});
        $('.top_buyers_nav').css({'display':'none'});
    }
    if($('.commentsBlock').css('display') == 'none'){
        $('.comm_title_nav').css({'display':'none'});
    }

    if($('.rightBlock_formBlock').css('display') == 'block'){
        $('.rightBlock_newsletter').css({'display':'none'});
    }
    if($('.rightBlock_formBlock').css('display') == 'none'){
        $('.rightBlock_newsletter').css({'display':'block'});
    }


    let bgColorHead = $('#bgColor').attr('class');


    if($('#section-section1').css('background-color') == 'rgba(0, 0, 0, 0)'){
        $('.bgBlock').css({'background-color':convertHex(bgColorHead,50)});
        $('.section_1_contant').css({'text-shadow':'0px 0px 4px #656565'});
        $('.relatedBlog-content_wrapper-item').css({'background-color':'rgba(255,255,255,0.1)','padding':'15px'});
    }

    $('.fancylink').each(function() {
        $(this).attr('href', $(this).parent().parent().siblings('.relImg').children('img').attr('src'));
    });


    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        r = parseInt(hex.substring(0,2), 16);
        g = parseInt(hex.substring(2,4), 16);
        b = parseInt(hex.substring(4,6), 16);

        result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    }

    bgColor();
});
