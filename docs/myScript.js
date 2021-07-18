var specialElementHandlers = { 
    '#editor': function (element, renderer) { 
        return true; 
    } 
};
$(document).ready(function(){

    $('#submit').click(function(){
        var pdf = new jsPDF();
        var firstPage;
        var secondPage;
        
        html2canvas($('#content'), {
          onrendered: function(canvas) {
            firstPage = canvas.toDataURL('image/PNG', 1.0);
          }
        });      
        
        setTimeout(function(){
          pdf.addImage(firstPage, 'PNG',2,3,220,0);
          //, 5, 5, 200, 0
          pdf.save("export.pdf");
        }, 2000);
      });




// $('#submit').click(function () { 
//     // doc.fromHTML($('#content').html(), 15, 15, { 
//     //     'width': 190, 
//     //         'elementHandlers': specialElementHandlers 
//     // }); 
//     // doc.save('Satyam Tiwari — Resume.pdf'); 
  
  
//     // domtoimage.toPng(document.body).then(function (blob) {
//     //     var pdf = new jsPDF();

//     //     pdf.addImage(blob, 'PNG', 0, 0);
        
//     //     pdf.save("test.pdf");
//     //     console.log("blob",blob);
//     //     that.options.api.optionsChanged();
//     // });
//     // domtoimage.toPng(document.body)
//     //       .then(function(img) {
//     //         console.log("image data",img);
//     //         document.body.appendChild(img);
//     //       })
//     let doc = new jsPDF('p','pt','a4');

//     doc.addHTML(document.body,function() {
//         doc.save('html.pdf');
//     });


// });
});
