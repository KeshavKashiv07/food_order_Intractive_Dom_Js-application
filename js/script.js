// Write solution code here to dynamically add the form fields 
let count =0;

function createOrders(event){
    console.log("inside this")
    event.preventDefault();
    let containerDiv = document.getElementById('order-container');
    let orderForm = document.createElement('form'); 
   
    let categoryInput = document.createElement("input");
    categoryInput.id=`categoryName${count}`
    categoryInput.type="text";
    categoryInput.placeholder="CategoryName";
    categoryInput.style.margin="5px";
    categoryInput.classList.add("col-lg-2")
    categoryInput.required


    let itemName = document.createElement("input");
    itemName.id=`itemName${count}`
    itemName.type="text";
    itemName.placeholder="itemName";
    itemName.style.margin="5px";
    itemName.classList.add("col-lg-2")

    let price = document.createElement("input");
    price.id=`price${count}`
    price.type="number";
    price.placeholder="price";
    price.style.margin="5px";
    itemName.classList.add("col-lg-2")

    let quantity = document.createElement("input");
    quantity.id=`quantity${count}`
    quantity.type="number";
    quantity.placeholder="quantity";
    quantity.style.margin="5px";
    price.classList.add("col-lg-2")

    let amount = document.createElement("input");
    amount.id=`amount${count}`
    amount.type="text";
    amount.placeholder="amount";
    amount.style.margin="5px";
    amount.classList.add("col-lg-2")

    let AddButton = document.createElement("button");
    AddButton.id=`add${count}`
    AddButton.textContent="add";
   // AddButton.type="submit";
    AddButton.style.borderRadius="30px";


    orderForm.appendChild(categoryInput);
    orderForm.appendChild(itemName);
    orderForm.appendChild(price);
    orderForm.appendChild(quantity);
    orderForm.appendChild(amount);
    orderForm.appendChild(AddButton);

    containerDiv.appendChild(orderForm);

    calAmount(`price${count}` , `quantity${count}` , `amount${count}` );
    saveProduct(`categoryName${count}`,`itemName${count}`,`price${count}` , `quantity${count}` , `amount${count}`,event)
    count++;

}
let AmountArray =[];
function calAmount(price , quantity , amount){
    let Price = document.getElementById(price);
    let Quantity = document.getElementById(quantity);
    let Amount = document.getElementById(amount);

    Quantity.addEventListener("input" ,()=>{
        Amount.value= Price.value * Quantity.value;
        AmountArray.push(parseInt(Amount.value))
    })
    

}

function finalBill(){
    let total =0;
    let totalAmount = document.getElementById("totalAmount");
    for (let i=0; i<AmountArray.length; i++){
        total  += AmountArray[i];
      }
        totalAmount.value = total;
         //alert(`Total Order Amount : ${totalAmount.value}`)


    //     let get = document.getElementById(`add${count}`);
    // let totalAmount = document.getElementById('totalAmount');
    // get.addEventListener("click" , ()=>{
    // for (let i=0; i<AmountArray.length; i++){
    //   total  += AmountArray[i];
    //   console.log(total)
    // }
    //   totalAmount.value = total;
    //   alert(`Total Bill Amount ${totalAmount.value}`)
    // })      
}


let OrderList = [];
function saveProduct(categoryName ,itemName , price , quantity , amount,event) {
    event.preventDefault()
    console.log("adding");
    Quantity=document.getElementById(quantity);
    Quantity.addEventListener('input',()=>{
        let order = {
            "categoryName": document.getElementById(categoryName).value,
            "itemName": document.getElementById(itemName).value,
            "price": document.getElementById(price).value,
            "quantity": document.getElementById(quantity).value,
            "amount": document.getElementById(amount).value
        }
        OrderList.push(order);
    console.log(OrderList);
    finalBill();  
    }); 
}

// define funtion submitOrder() to save the order details on clicking the submit button
function submitOrder(){
    alert(`Order Successfully`);
}
document.getElementById("orderNow").addEventListener("click" , submitOrder)

//do not delete the code given below, it is written to export the functions to be tested
module.exports = submitOrder;
