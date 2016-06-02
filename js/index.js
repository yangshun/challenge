$(function(){

  // $.ajax({
  //   type:'GET',
  //   url:'/api',
  //   success: function(hotelsg){
  //      console.log(hotelsg)
  //     $.each(hotelsg, function(i, hotel){
  //       $('#Marriott').append(
  //         '<li>Name: '+ hotel[0].name +', Address: '+ hotel[0].address +', ID: '+ hotel[0].id +' </li>',
  //         '<li>Name: '+ hotel[1].name +', Address: '+ hotel[1].address +', ID: '+ hotel[1].id +' </li>',
  //         '<li>Name: '+ hotel[2].name +', Address: '+ hotel[2].address +', ID: '+ hotel[2].id +' </li>',
  //         '<li>Name: '+ hotel[3].name +', Address: '+ hotel[3].address +', ID: '+ hotel[3].id +'  </li>'
  //       );
  //
  //       $('#pic1').load(hotel[0].image)
  //
  //     })
  //   }
  // });

  $.ajax({
    type:'GET',
    url:'/api1',
    success: function(data1){
      console.log (data1);
      
    }
  });
  $.ajax({
    type:'GET',
    url:'/api2',
    success: function(data2){
      console.log (data2);
    }
  });
  $.ajax({
    type:'GET',
    url:'/api3',
    success: function(data3){
      console.log (data3);
    }
  });
});
