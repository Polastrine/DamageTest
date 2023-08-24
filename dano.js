//orc variables
var nameO;
var healthO;
var defenseO;
var shield;

//guardian variables
var nameG;
var powerG;




//guardian submit button / variable's receipt
document.getElementById("sendG").addEventListener('click',function(){
     nameG = document.getElementById("nameG").value;
    console.log(nameG);
     powerG = document.getElementById("powerG").value;
    console.log(powerG);

    if (nameG.trim() === "" || powerG.trim() === "" ) {
        alert("Please, fill in all the Guardian's attributes");
        return;
    }
    
})




//orc submit button / variable's receipt
document.getElementById("sendO").addEventListener('click',function(){
     nameO = document.getElementById("nameO").value;
    console.log(nameO);
     healthO = document.getElementById("healthO").value;
    console.log(healthO);
     defenseO = document.getElementById("defenseO").value;
    console.log(defenseO);
     shield = document.getElementById("shield").value;
    console.log(shield)

    if (nameO.trim() === "" || healthO.trim() === "" || defenseO.trim() === "" || shield.trim() === "") {
        alert("Please, fill in all the Orc's attributes");
        return;
    }
})




// attack button
document.getElementById("textButton").addEventListener('click', function(){
    document.getElementById("textButton").innerHTML = "";
    Status();
})




// attack logic
function Status(){
 if(powerG !== undefined && defenseO !== undefined && healthO !== undefined && nameG !== undefined && nameO !== undefined) { 
    document.getElementById("names").innerHTML = `${nameG} VS ${nameO}`
    if (powerG > defenseO) {
        if (shield == "yes") {
          document.getElementById("hit").innerHTML ="Damage: "+(powerG - defenseO)/2
          document.getElementById("totalHealth").innerHTML = "Orc's Health: "+(healthO - (powerG - defenseO)/2)
          //Damage caused with shield
          Continue();
          
          if (0 >= (healthO - (powerG - defenseO)/2)) {
            alert("You defeat " + nameO + "!")
            Continue();
        }
           
        } else if (shield == "no") {
            document.getElementById("hit").innerHTML = "Damage: "+(powerG - defenseO)
            document.getElementById("totalHealth").innerHTML = "Orc's Health: "+(healthO - (powerG - defenseO))
            //Damage caused without shield
            Continue();
            
            if (0 >= (healthO - (powerG - defenseO))) {
                alert("You defeat " + nameO + "!")
                Continue();
                
            }
                
        }
      
    } else {

        document.getElementById("hit").innerHTML = "You couldn't hurt him"
        document.getElementById("totalHealth").innerHTML = "Orc's Health: Full"
        //No hit
        Continue();
        
    }
 } else {
    alert("Fill in all the fields before pressing the ATTACK button")
        document.getElementById("textButton").innerHTML = "ATTACK"
        
    }

}



function Continue(){
        setTimeout(function(){
            var answer = confirm("Do you want to try again?")
        if (answer == true) {
            window.location.reload()
        } else {

            var node = document.getElementById("body")
            if (node.parentNode) {
                node.parentNode.removeChild(node)
            }
            
        }
        },6000)
    }
    


       





