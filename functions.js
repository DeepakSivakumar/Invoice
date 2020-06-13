var num1 = 2;
var num2 = 2;
var num3 = 0;
var num4 = 2;
var num5 = 2;

function adding_row(){
    num3=num3+1;
    var table = document.getElementById("new");
    var row = table.insertRow(num1);
    num1=num1+1;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = "<input type='number' id = 'sn" + num2 + "' value=''  style='width:100%' >";
    cell2.innerHTML = "<input type='text' id = 'product" + num2 + "'  value='' style='width:100%'>";
    cell3.innerHTML = "<input type='number' id = 'price" + num2 + "' value='' style='width:100%' >";
    cell4.innerHTML = "<input type='number' id = 'quantity" + num2 + "' value='' style='width:100%' >";
    cell5.innerHTML = "<input type='text' id = 'amount" + num2 + "'  value='' style='width:100%'>";
    num2=num2+1;
    sessionStorage.setItem("num",num3);
}

function deleting_row() {
    num3=num3-1;
    num2=num2-1;
    num1=num1-1;
   
    var table = document.getElementById("new");
    var rowCount = table.rows.length;
    if(rowCount>=5) {
    document.getElementById("new").deleteRow(rowCount-3);
    } else{
        alert('Row cannot be delete!!!');
    }
    sessionStorage.setItem("num",num3);
  }

 


  function calculating_data() {
    var t = document.getElementById("price1").value;
    var t1 = document.getElementById("quantity1").value;
    var t2=t*t1;
    document.getElementById("amount1").value=t2;
    var total=0;
    for(i=2;i<num2;i++){
    var p = document.getElementById("price"+i).value;
    var q = document.getElementById("quantity"+i).value;
    var mul = p*q;
    document.getElementById("amount"+i).value=mul;
    var total=total+mul;
      }
    var total1=total+t2;
    var fin=total1%10;
    var final=total1-fin;
    document.getElementById("total_amount1").value=total1;
    document.getElementById("final_amount1").value=final;
} 

function download_pdf(){
  document.getElementById("download").style.visibility = "hidden";
kendo.drawing
.drawDOM("#generate_pdf", 
{ 
  forcePageBreak: ".pdf-export-page-break",
  portrait: true,
  paperSize: "A4",
  margin: { top: "0.6cm", bottom: "0.6cm" },
  scale: 0.47,
  height: 200
})

.then(function(group){
  kendo.drawing.pdf.saveAs(group, "Invoice.pdf");
  });
  
}

function viewing_data(){
  var date=document.getElementById("date").value;
  sessionStorage.setItem("date1",date);
  var invoice=document.getElementById("invoice").value;
  sessionStorage.setItem("invoice1",invoice);

  var name=document.getElementById("name").value;
  sessionStorage.setItem("name1",name);
  var address=document.getElementById("address").value;
  sessionStorage.setItem("address1",address);
  var phone=document.getElementById("phone").value;
  sessionStorage.setItem("phone1",phone);

  var sno1=document.getElementById("sn1").value;
  sessionStorage.setItem("sno_1",sno1);
  var product1=document.getElementById("product1").value;
  sessionStorage.setItem("product_1",product1);
  var price1=document.getElementById("price1").value;
  sessionStorage.setItem("price_1",price1);
  var quantity1=document.getElementById("quantity1").value;
  sessionStorage.setItem("quantity_1",quantity1);
  var amount1=document.getElementById("amount1").value;
  sessionStorage.setItem("amount_1",amount1);

  var total_amount1=document.getElementById("total_amount1").value;
  sessionStorage.setItem("total_amount_1",total_amount1);
  var final_amount1=document.getElementById("final_amount1").value;
  sessionStorage.setItem("final_amount_1",final_amount1);


  var k =sessionStorage.getItem("num");

  
  for(var i=2;i<eval(k)+2;i++){
  var d="sn"+i;
  window['sno'+i] = document.getElementById(d).value;
  var k1=eval("sno"+i);
  sessionStorage.setItem("sno_"+i,k1);
  window['product'+i]=document.getElementById("product"+i).value;
  var k2=eval('product'+i);
  sessionStorage.setItem("product_"+i,k2);
  window['price'+i]=document.getElementById("price"+i).value;
  var k3=eval('price'+i);
  sessionStorage.setItem("price_"+i,k3);
  window['quantity'+i]=document.getElementById("quantity"+i).value;
  var k4=eval('quantity'+i);
  sessionStorage.setItem("quantity_"+i,k4);
  window['amount'+i]=document.getElementById("amount"+i).value;
  var k5=eval('amount'+i);
  sessionStorage.setItem("amount_"+i,k5);
  }

  location.replace("view.html")

}


function display_data(){
 


  var new_date =sessionStorage.getItem("date1");
  var new_invoice =sessionStorage.getItem("invoice1");
  var new_name =sessionStorage.getItem("name1");
  var new_address =sessionStorage.getItem("address1");
  var new_phone =sessionStorage.getItem("phone1");
  
  var new_sno1 =sessionStorage.getItem("sno_1");
  var new_product1 =sessionStorage.getItem("product_1");
  var new_price1 =sessionStorage.getItem("price_1");
  var new_quantity1 =sessionStorage.getItem("quantity_1");
  var new_amount1 =sessionStorage.getItem("amount_1");


  var new_total_amount =sessionStorage.getItem("total_amount_1");
  var new_final_amount =sessionStorage.getItem("final_amount_1");


  document.getElementById("data_1").innerHTML = new_date;
  document.getElementById("data_2").innerHTML = new_invoice;
  document.getElementById("name").innerHTML = new_name;
  document.getElementById("address").innerHTML = new_address;
  document.getElementById("phone").innerHTML = new_phone;

  document.getElementById("sn1").innerHTML = new_sno1;
  document.getElementById("product1").innerHTML = new_product1;
  document.getElementById("price1").innerHTML = new_price1;
  document.getElementById("quantity1").innerHTML = new_quantity1;
  document.getElementById("amount1").innerHTML = new_amount1;

  document.getElementById("total_amount1").innerHTML = new_total_amount;
  document.getElementById("final_amount1").innerHTML = new_final_amount;


  var k =sessionStorage.getItem("num");
  for(var i=eval(k)+1;i>=2;i--){
    window['new_sno'+i] =sessionStorage.getItem("sno_"+i);
    var g2=eval('new_sno'+i);
    window['new_product'+i] =sessionStorage.getItem("product_"+i);
    var g3=eval('new_product'+i);
    window['new_price'+i] =sessionStorage.getItem("price_"+i);
    var g4=eval('new_price'+i);
    window['new_quantity'+i] =sessionStorage.getItem("quantity_"+i);
    var g5=eval('new_quantity'+i);
    window['new_amount'+i] =sessionStorage.getItem("amount_"+i);
    var g6=eval('new_amount'+i);
  var table = document.getElementById("new");
  var row = table.insertRow(num1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "" + g2 + "";
  cell2.innerHTML = "" + g3 + "";
  cell3.innerHTML = "" + g4 + "";
  cell4.innerHTML = "" + g5 + "";
  cell5.innerHTML = "" + g6 + "";

  }  
}