function myF(item) {
  

    if(item.value === ""){
        item.nextElementSibling.classList.add("up")
    }


    item.addEventListener('focusout', (event) => {

        if(item.value == ""){
            item.nextElementSibling.classList.remove("up")
        }
      
       
      });

  }



      