

/* Hamburger javascript */
let hamburger=()=>{
    let crossburger = document.querySelector(".hamburger")
    let header = document.querySelector(".header")
    let navlinks = document.querySelector(".navlinks")
    let navlinks2 = document.querySelector(".navlinks2")
    let nav_anchor = navlinks.querySelectorAll('a') 

    

    
    if(crossburger.classList.contains('crossburger')){
        crossburger.classList.remove('crossburger')
        header.classList.remove('headeractive')
        navlinks.classList.remove('activelinks')
        navlinks2.classList.remove('activelinks2')

        

        
    }
    else{
        crossburger.classList.add('crossburger')
        header.classList.add('headeractive')
        navlinks.classList.add('activelinks')
        navlinks2.classList.add('activelinks2')

        

    }
    // Not working 
   /* nav_anchor.forEach((e)=>{
        if(nav_anchor.classList.contains('a_visible')){

            nav_anchor.classList.remove('a_visible');
         }
         else{
            nav_anchor.classList.add('a_visible')
         }
    })
         */
    
   
}


/* Focus this */

