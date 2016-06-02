$(function(){

  $.ajax({
    type:'GET'
    url:'api.myjson.com/bins/1c80k'
    success: function(data){
      console.log ('success', data);
    }
  });
});
