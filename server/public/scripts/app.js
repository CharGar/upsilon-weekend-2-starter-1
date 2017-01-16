var i =0;
var next = i+1;
var prev = i-1;
jQuery(document).bind('keydown', 'right', function(e) {
  // right arrow key pressed
});
jQuery(document).bind('keydown', 'left', function(e) {
  // left arrow key pressed
});
jQuery(document).bind('keydown', 'up', function(e) {
  // up arrow key pressed
});
jQuery(document).bind('keydown', 'down', function(e) {
  // down arrow key pressed
});
jQuery(document).bind('keydown', 'ctrl+up', function() {
  // ctrl + up arrow key pressed
});
$(document).ready(function(){

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(response){
        var person = response.people[i];
        $('#name').text(person.name);
        $('#githubUserName').text(person.githubUserName);
        $('#shoutout').text(person.shoutout);
        $('#'+i).addClass('highlighted')


        $('#next').on('click', function(){

          if(i <16 ){
            $('.highlighted').removeClass('highlighted');
            i = next;
            var person = response.people[i];
            $('#name').text(person.name);
            $('#githubUserName').text(person.githubUserName);
            $('#shoutout').text(person.shoutout);
            console.log(i);
            next = i+1;
            prev = i-1;
            $(this).closest('body').find('#'+i).addClass('highlighted');
         }
       });

        $('#prev').on('click', function(){
          if(i > 0){
            $('.highlighted').removeClass('highlighted');
            i = prev;
            var person = response.people[i];
            $('#name').text(person.name);
            $('#githubUserName').text(person.githubUserName);
            $('#shoutout').text(person.shoutout);
            console.log(i);
           next = i+1;
           prev = i-1;
           $(this).closest('body').find('#'+i).addClass('highlighted');
         }
       });
       $('.carousel').on('click', function(){
         $('.highlighted').removeClass('highlighted');
         i = Number($(this).attr('id'));
         next = i+1;
         prev = i-1;
         var person = response.people[i];
         $('#name').text(person.name);
         $('#githubUserName').text(person.githubUserName);
         $('#shoutout').text(person.shoutout);
         $(this).addClass('highlighted');

       });
    }
  });
});
