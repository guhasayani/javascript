async function fetchdata() {
    const res = await fetch("https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json");
    const response = await res.json();
    return response;
}
function appendData(data, element, lookup){
    for(i=0;i<data.length;i++){
        var opt = document.createElement("option");
        // var txt = document.createTextNode(data[i].state);
        var txt;
        if (lookup !== ""){
            txt = document.createTextNode(data[i][lookup]);
        }else{
            txt = document.createTextNode(data[i]);
        }
        opt.appendChild(txt);
        opt.setAttribute("value",i);
        element.appendChild(opt);
    }
}

//main function
(async () => {
    var select = document.getElementById("ddl");
    var select1 = document.getElementById("ddl2");
    a = await fetchdata();
    console.log(a);

    appendData(a.states, select, "state");

    select.addEventListener('change' ,e=>{
        var  n = select.value;
        console.log(n);
        var districts = a.states[n].districts;
        console.log(districts);
      
        while(select1.hasChildNodes()){
            select1.removeChild(select1.firstChild);
        }
        appendData(districts, select1, "")  
    });
})()

var pb = document.getElementById("btn");
pb.addEventListener("click", function (event){
    alert("Your data is submitted");
})