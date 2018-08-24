//Set up way points for sub nav sticky
var subNavSticky = new Waypoint({
  element: $('.sticky-element'),
  offset:80,
  handler: function(direction) {
    if(direction == 'down'){
      $('.sticky-element').addClass('stickySubNav');
      $('.single-events #breadcrumbs').addClass('nav-margin');
        console.log('testdown');
    }else if(direction == 'up') {
      $('.sticky-element').removeClass('stickySubNav');
      $('.single-events #breadcrumbs').removeClass('nav-margin');
    }
  }
});
