data = JSON.parse(localStorage.getItem("actual"));

let major=document.getElementById("main");

 //data = localStorage.getItem("cart");
//let data = localStorage.getItem("cart"));
//let data=localStorage.getItem(JSON.parse(cart))
//var data = (localStorage.getItem("cart"));


//var data=localStorage.getItem(JSON.parse(cart))
//var data = localStorage.getItem("cart");
console.log(data);

major.innerHTML = "";

/*for (let i = 1; i < data; i++) {*/


  


  let mydata = data[20];
  if(mydata.length>1)
  {

    for(let i=1;i<mydata.length;i++)
    {
        let mydatamin=mydata[i];
        const btn = document.createElement('button');
        const cr = document.createElement("div");
        btn.innerHTML = "Remove from Cart";
        btn.style.color = "white";
        btn.style.height = "20px";
        btn.style.width = "200px";
        btn.style.backgroundColor = "black";
    
        btn.addEventListener("click", () => {
          //btnarray.push(mydata);
         // actualdata.push(mydata);
          //localStorage.setItem("actual", JSON.stringify(actualdata));
    
          /*cr.innerHTML="";
          cr.style.borderStyle = "solid";
    
        cr.style.borderRadius = "5px";
        cr.style.borderColor = "black"*/
      
    cr.style.display="none";
    //delete mydata[mydatamin];
    
        })
        cr.innerHTML = `
    
    <img src=${mydatamin.image} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" />    
    <br>
    Name: ${mydatamin.title}
    <br>
    
    <br>
    Price  ${mydatamin.price}
    <br>
    
    <br>
    
    
    
    <br>
    
    <br>
    
    
    `
    
        cr.style.height = "370px";
        cr.style.width = "200px";
        cr.style.borderStyle = "solid";
    
        cr.style.borderRadius = "5px";
        cr.style.borderColor = "black"
        cr.style.display = "block";
        cr.style.margin = "20px";
        cr.append(btn);
        // electron.append(cr);
        major.append(cr);
    
    
      }
    
    
    
  











  }
  else{
  //if (mydata.title.toLowerCase().includes(sdata.toLowerCase()) || mydata.category.toLowerCase().includes(sdata.toLowerCase())) {
for(let i=20;i<data.length;i++)
{
    let mydatamin=data[i];
    const btn = document.createElement('button');
    const cr = document.createElement("div");
    btn.innerHTML = "Remove from Cart";
    btn.style.color = "white";
    btn.style.height = "20px";
    btn.style.width = "200px";
    btn.style.backgroundColor = "black";

    btn.addEventListener("click", () => {
      //btnarray.push(mydata);
     // actualdata.push(mydata);
      //localStorage.setItem("actual", JSON.stringify(actualdata));

      /*cr.innerHTML="";
      cr.style.borderStyle = "solid";

    cr.style.borderRadius = "5px";
    cr.style.borderColor = "black"*/
  
cr.style.display="none";
//delete mydata[mydatamin];

    })
    cr.innerHTML = `

<img src=${mydatamin.image} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" />    
<br>
Name: ${mydatamin.title}
<br>

<br>
Price  ${mydatamin.price}
<br>

<br>



<br>

<br>


`

    cr.style.height = "370px";
    cr.style.width = "200px";
    cr.style.borderStyle = "solid";

    cr.style.borderRadius = "5px";
    cr.style.borderColor = "black"
    cr.style.display = "block";
    cr.style.margin = "20px";
    cr.append(btn);
    // electron.append(cr);
    major.append(cr);


  }

  }

















// resolve(btnarray)

// resolve(btnarray)






