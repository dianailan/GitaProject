$(".page-container").hover(
    function(){$(this).animate({width: "420px", height:"340px"}, 500);
    $(this).css('color', '#4F4F4F');
},        
    function(){$(this).animate({width: "350px", height:"280px"}, 500);
    $(this).css('color', '#2B2B2B');
}
);