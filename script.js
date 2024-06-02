var title = document.getElementById('title')
var price = document.getElementById('price')
var Taxes = document.getElementById('Taxes')
var ads = document.getElementById('ads')
var discount = document.getElementById('discount')
var total = document.getElementById('total')
var Count = document.getElementById('Count')
var category = document.getElementById('category')
var submit = document.getElementById('submit')



//  git total
function gitTotal(){
    if(price.value !='' ){
       var result = (+price.value + +Taxes.value + +ads.value) - +discount.value
       total.innerHTML = result;
       total.style.background = '#040';
    }else{
        title.innerHTML = '';
        total.style.background ='red';
}
}
 
// creat product
var dataproduct;
if(localStorage.product !=null){
    dataproduct = JSON.parse(localStorage.product)
}else{
    dataproduct =[];
}


submit.onclick = function(){
    var newPro = {
        title : title.value,
        price : price.value,
        Taxes : Taxes.value,
        ads : ads.value,
        discount : discount.value,
        total: total.innerHTML,
        Count : Count.value,
        category : category.value,
    }
    if(newPro.Count > 1){
        for (var i = 0; i< newPro.Count; i++){
            dataproduct.push(newPro)

        }
    }else{
        dataproduct.push(newPro)
    }


    
    
    
    // save localStorage
    localStorage.setItem('product', JSON.stringify(dataproduct))
     clearData()
     showData()
}

// clear inputs
function clearData(){
    title.value = '';
    price.value = '';
    Taxes.value = '';
    ads.value = '';
    discount.value ='';
    total.innerHTML = '';
    category.value ='';
    Count.value ='';


}

// read 
function showData(){

var table ='';
for(var i = 0 ; i < dataproduct.length; i++ ){
table +=`
<tr>
<td>${i}</td>
<td>${dataproduct[i].title}</td>
<td>${dataproduct[i].price}</td>
<td>${dataproduct[i].Taxes}</td>
<td>${dataproduct[i].ads}</td>
<td>${dataproduct[i].discount}</td>
<td>${dataproduct[i].total}</td>
<td>${dataproduct[i].category}</td>
<td><button onclick="updatData(${i})" id="update">update</button></td>
<td><button onclick="deleteData(  ${i} )" id="delete">delete</button></td>
</tr>
`

}


document.getElementById('tbody').innerHTML = table;

}
showData()

// delete

function deleteData(i){
dataproduct.splice(i,1);
localStorage.product = JSON.stringify(dataproduct);
showData()
}


// update
function updatData(i){
    title.value = dataproduct[i].title;
    price.value = dataproduct[i].price;
    Taxes.value = dataproduct[i].Taxes;
    ads.value = dataproduct[i].ads;
    discount.value = dataproduct[i].discount;

    gitTotal()
    Count.style.display = "none";
    submit.innerHTML = "Update";
    mod ='update';

    category.value = dataproduct[i].category;
}

// search 
// clean data 
