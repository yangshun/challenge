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
      $('.competitor1', "#abcd").append('<p> Competitor 1: ' + data1.abcd + '</p>')
      $('.competitor1', "#defg").append('<p> Competitor 1: ' + data1.defg + '</p>')
      $('.competitor1', "#hijk").append('<p> Competitor 1: ' + data1.hijk + '</p>')
      $('.competitor1', "#mnop").append('<p> Competitor 1: ' + data1.mnop + '</p>')
      if (data1.abcd || data1.defg || data1.hijk || data1.mnop === 'undefined') {
        console.log("All Rooms Booked")
      }
    }
  });

  $.ajax({
    type:'GET',
    url:'/api2',
    success: function(data2){
      $('.competitor2', "#abcd").append('<p> Competitor 2: ' + data2.abcd + '</p>')
      $('.competitor2', "#defg").append('<p> Competitor 2: ' + data2.defg + '</p>')
      $('.competitor2', "#hijk").append('<p> Competitor 2: ' + data2.hijk + '</p>')
      $('.competitor2', "#mnop").append('<p> Competitor 2: ' + data2.mnop + '</p>')
    }
  });

  $.ajax({
    type:'GET',
    url:'/api3',
    success: function(data3){
      $('.competitor3', "#abcd").append('<p> Competitor 3: ' + data3.abcd + '</p>')
      $('.competitor3', "#defg").append('<p> Competitor 3: ' + data3.defg + '</p>')
      $('.competitor3', "#hijk").append('<p> Competitor 3: ' + data3.hijk + '</p>')
      $('.competitor3', "#mnop").append('<p> Competitor 3:  ' + data3.mnop + '</p>')
    }
  });

});
