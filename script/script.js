
        let items=document.getElementById("items")
        let all_items=document.getElementById("all_items")
        let ordered=document.getElementById("ordered")
        let dishes=[
            //Idly,Dosai,Pongal,Briyani,Variety rice,Meals,Pani puri,Sundal,Ice cream,Parota,Chapathi,Fish Fry
            {
                id:1,
                name: "Idly",
                amount: 10,
                description: "Your hot and yummy IDLY 😋 waiting now ! order fast",
                images: "./assessts/images/idli.jpg",
                isbreakfast: true
            },
            {
                id:2,
                name: "Dosai",
                amount: 15,
                description: "Hey, why waiting 😍 order your DOSA",
                images: "./assessts/images/dosai.jpg",
                isbreakfast: true
            },
            {
                id:3,
                name: "Pongal",
                amount: 50,
                description: "Start your day with best PONGAL 🥰! order now",
                images: "./assessts/images/pongal.jpg",
                isbreakfast: true
            },
            {
                id:4,
                name: "Briyani",
                amount: 100,
                description: "Why so sad , when your BRIYANI is there 🤩",
                images: "./assessts/images/briyani.jpg",
                islunch: true
            },
            {
                id:5,
                name: "Variety rice",
                amount: 50,
                description: "Enjoy your afternoon with the VARIETY RICE ! 🥰",
                images: "./assessts/images/variety rice.jpg",
                islunch: true
            },
            {
                id:6,
                name: "Meals",
                amount: 150,
                description: "Want a rest, then MEALS is the best !😴",
                images: "./assessts/images/meals.jpg",
                islunch: true
            },
            //snacks
            {
                 id:7,
                name: "Pani puri",
                amount: 20,
                description: "Bored evening always deserved a PANI PURI ! 😊",
                images: "./assessts/images/pani puri.jpg",
                issnacks: true
            },
            {
                 id:8,
                name: "Samosa",
                amount: 35,
                description: "Enjoy the Evening with SAMOSA 🤗",
                images: "./assessts/images/samosa.jpg",
                issnacks: true
            },
            {
                 id:9,
                name: "Ice cream",
                amount: 40,
                description: "Having a bad mood 😬 ! then try ICE CREAM to change it 😁😀",
                images: "./assessts/images/ice cream.jpg",
                issnacks: true
            },
            //dinner
            {
                id:10,
                name: "Parota",
                amount: 18,
                description: "Hey, Trust me your night need me by PAROTA ❤",
                images: "./assessts/images/parota.jpg",
                isdinner: true
            },
            {
                id:11,
                name: "Chapathi",
                amount: 10,
                description: "Try me end your day with me! by CHAPATHI 💝",
                images: "./assessts/images/chapathi.jpg",
                isdinner: true
            },
            {
                id:12,
                name: "Fish Fry",
                amount: 120,
                description: "You need me to feel better! by your FISH FRY 💖",
                images: "./assessts/images/fish fry.jpg",
                isdinner: true
            }
        ]
        //all
        all_items.addEventListener("click",all)
        function all(){
                items.innerHTML=" "
                for(let i=0;i<dishes.length;i++)
                {
                    let img=dishes[i].images
                    let name=dishes[i].name
                    let description=dishes[i].description
                    let amount=dishes[i].amount
                    let div=document.createElement("div")
                    div.innerHTML=`<div class="card mb-3 " style="max-width: 650px;">
                                <div class="row g-0">
                                    <div class="col-lg-5 col-md-12 inner">
                                    <img src="${img}" class="img-fluid rounded-start" style="height:250px;width:100%;" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">${name}</h5>
                                        <p class="card-text">${description}</p>
                                        <input type="number" class="qty border border-info" placeholder="Enter quantity">
                                        <p class="card-text"><small class="text-body-secondary">Amount : ${amount}</small></p>
                                        <button type="button" class="btn btn-info book-btn">Order</button>
                                    </div>
                                    </div>
                                </div>
                                </div>`
                    items.appendChild(div)
                }
        }
        //breakfast
        let breakfast=document.getElementById("breakfast")
        breakfast.addEventListener("click",breaks)
        function breaks()
        {
            items.innerHTML=" "
                for(let i=0;i<dishes.length;i++)
                {
                    let b_true=dishes[i].isbreakfast
                    if(b_true)
                    {
                    let b_id=dishes[i].id
                    let img=dishes[i].images
                    let name=dishes[i].name
                    let description=dishes[i].description
                    let amount=dishes[i].amount
                    let div=document.createElement("div")
                    div.innerHTML=`<div class="card mb-3 " style="max-width: 650px;">
                                <div class="row g-0">
                                    <div class="col-lg-5 col-md-12  inner">
                                    <img src="${img}" class="img-fluid rounded-start des" style="height:250px; width:100%;" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">${name}</h5>
                                        <p class="card-text">${description}</p>
                                        <input type="number" class="qty border border-info" placeholder="Enter quantity">
                                        <p class="card-text"><small class="text-body-secondary">Amount : ${amount}</small></p>
                                        <button type="button" class="btn btn-info book-btn">Order</button>
                                    </div>
                                    </div>
                                </div>
                                </div>`
                    items.appendChild(div)
                    }
                }
        }
        //lunch
        let lunch=document.getElementById("lunch")
        lunch.addEventListener("click",lunchs)
        function lunchs()
        {
            items.innerHTML=" "
                for(let i=0;i<dishes.length;i++)
                {
                    let l_true=dishes[i].islunch
                    if(l_true)
                    {
                    let img=dishes[i].images
                    let name=dishes[i].name
                    let description=dishes[i].description
                    let amount=dishes[i].amount
                    let div=document.createElement("div")
                    div.innerHTML=`<div class="card mb-3 " style="max-width: 650px;">
                                <div class="row g-0">
                                    <div class="col-lg-5 col-md-12  inner">
                                    <img src="${img}" class="img-fluid rounded-start" style="height:250px;width:100%;" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">${name}</h5>
                                        <p class="card-text">${description}</p>
                                        <input type="number" class="qty border border-info" placeholder="Enter quantity">
                                        <p class="card-text"><small class="text-body-secondary">Amount : ${amount}</small></p>
                                        <button type="button" class="btn btn-info book-btn">Order</button>
                                    </div>
                                    </div>
                                </div>
                                </div>`
                    items.appendChild(div)
                    }
                }
        }
        //snacks
        let snacks=document.getElementById("snacks")
        snacks.addEventListener("click",snackss)
        function snackss()
        {
            items.innerHTML=" "
                for(let i=0;i<dishes.length;i++)
                {
                    let s_true=dishes[i].issnacks
                    if(s_true)
                    {
                    let img=dishes[i].images
                    let name=dishes[i].name
                    let description=dishes[i].description
                    let amount=dishes[i].amount
                    let div=document.createElement("div")
                    div.innerHTML=`<div class="card mb-3 " style="max-width: 650px;">
                                <div class="row g-0">
                                    <div class="col-lg-5 col-md-12  inner">
                                    <img src="${img}" class="img-fluid rounded-start" style="height:250px;width:100%;" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">${name}</h5>
                                        <p class="card-text">${description}</p>
                                        <input type="number" class="qty border border-info" placeholder="Enter quantity">
                                        <p class="card-text"><small class="text-body-secondary">Amount : ${amount}</small></p>
                                        <button type="button" class="btn btn-info book-btn">Order</button>
                                    </div>
                                    </div>
                                </div>
                                </div>`
                    items.appendChild(div)
                    }
                }
        }
        //dinner
        let dinner=document.getElementById("dinner")
        dinner.addEventListener("click",dinners)
        function dinners()
        {
            items.innerHTML=" "
                for(let i=0;i<dishes.length;i++)
                {
                    let d_true=dishes[i].isdinner
                    if(d_true)
                    {
                    let img=dishes[i].images
                    let name=dishes[i].name
                    let description=dishes[i].description
                    let amount=dishes[i].amount
                    let div=document.createElement("div")
                    div.innerHTML=`<div class="card mb-3 " style="max-width: 650px;">
                                <div class="row g-0">
                                    <div class="col-lg-5 col-md-12  inner">
                                    <img src="${img}" class="img-fluid rounded-start" style="height:250px; width:100%;" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">${name}</h5>
                                        <p class="card-text">${description}</p>
                                        <input type="number" class="qty border border-info" placeholder="Enter quantity">
                                        <p class="card-text"><small class="text-body-secondary">Amount : ${amount}</small></p>
                                        <button type="button" class="btn btn-info book-btn">Order</button>
                                    </div>
                                    </div>
                                </div>
                                </div>`
                    items.appendChild(div)
                    }
                }
        }
//----------------------------
       //booking functions 
    //    let final=document.getElementById("final")
        
        //booking functions 
//booking functions 
        amt = 0;
        
        items.addEventListener("click", function(paste) {
            if (paste.target.classList.contains("book-btn")) {
                
                let cardBody = paste.target.closest(".card-body");
            let name = cardBody.querySelector(".card-title").innerText;
                let quantity = Number(cardBody.querySelector(".qty").value);
                
        let amountText = cardBody.querySelector(".text-body-secondary").innerText;
     let amount = Number(amountText.replace("Amount : ", ""));
                
                if (quantity > 0) {
                    let total = amount * quantity;

                    let existingItems = ordered.getElementsByClassName("booked-item");
                    let found = false;

                      for (let i = 0; i < existingItems.length; i++) {

                        let item = existingItems[i];

                        if (item.getAttribute("data-name") === name) {

                            let oldQty = Number(item.getAttribute("data-qty"));
                            let newQty = oldQty + quantity;
                            let newTotal = newQty * amount;

                            item.setAttribute("data-qty", newQty);

                            item.innerHTML = `<span>${name} - Qty: ${newQty}, Price: ${amount}, <b>Total: ${newTotal}</b></span>
                            <button class="btn btn-sm remove-btn" onclick="removeItem(this, ${newTotal})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5"/></svg></button>`;

                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        let result = document.createElement("div");
                        result.className = "booked-item d-flex justify-content-between align-items-center mb-2";
                        result.setAttribute("data-name", name);
                          result.setAttribute("data-qty", quantity);
                        result.innerHTML = `<span>${name} - Qty: ${quantity}, Price: ${amount}, <b>Total: ${total}</b></span> 
                                          <button class="btn btn-sm remove-btn" onclick="removeItem(this, ${total})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button>`;
                        ordered.appendChild(result);
                    }

                    amt += total;
                    updatetotaldisplay();
                    cardBody.querySelector(".qty").value = ""; 

                } else {
                    alert("Please enter a valid quantity");
                }
            }
        });

        function removeItem(btn, itemTotal) {
            btn.parentElement.remove();
            amt -= itemTotal;
            updatetotaldisplay();
        }

    
        function updatetotaldisplay() {
            let oldtotaldisplay = document.getElementById("grand-total");
            if (oldtotaldisplay) {
                oldtotaldisplay.remove();
            }
            

            if (amt >= 0) {
                let p = document.createElement("h4");
                p.id = "grand-total";
                p.style.marginTop = "10px";
                p.innerText = "TOTAL: " + amt;
                ordered.appendChild(p);
            }
        }

        function conform(){
            if(amt > 0) {
                ordered.innerHTML = "";
                amt = 0;
                alert("Order Placed!");
            } else {
                alert("Please Book anything");
            }
        }
        all()
       