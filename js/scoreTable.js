$(document).ready(function() {
  $('#slider').scrollingCarousel( {
    scrollerAlignment : 'horizontal',
    autoScroll: true,
    autoScrollSpeed: 20000
  });

  $('.matches').each(function() {
    $(this).sliderkit({
        auto:true,
        autospeed: 4500,
        circular:true,
        shownavitems:1,
        panelfx:"sliding",
        panelfxspeed:400,
        panelfxeasing:"easeOutCirc",
        mousewheel:false,
        verticalnav:true,
        verticalslide:true
    });
  });

  $('.results').each(function(){
    $(this).css('max-height', $(window).height() - 180);
  });

  tables = new Array();
  $('.table').each(function(){
    tables.push($(this));
  });

  if (tables.length <= 2) {
    return;
  }

  for (var i = 2; i < tables.length; i++) {
    tables[i].hide();
  };

  setInterval(function(){
    table = tables.shift();
    table.fadeOut('slow');
    tables[tables.length-1].fadeIn('slow');
    //console.log(tables[tables.length-1].find('.group_name').text());
    tables.push(table);

  }, 15000);

});
