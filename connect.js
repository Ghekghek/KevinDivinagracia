
      
function myF(item) {
  

    if(item.value === ""){
        item.nextElementSibling.classList.add("up")
        item.classList.add("inputAct")
    }


    item.addEventListener('focusout', (event) => {

        if(item.value == ""){
            item.nextElementSibling.classList.remove("up")
            item.classList.remove("inputAct")
        }
      
       
      });





  }





window.addEventListener("load", (event) => {
    const input = document.querySelectorAll(".textBox")

    input.forEach(tbox => tbox.value = '')
 
  
  });