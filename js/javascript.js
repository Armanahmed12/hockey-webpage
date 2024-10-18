
const ulTagOfNav = document.getElementById('nav-lists-container');
const menuBar = document.getElementById('#menuBarr');

document.getElementById('menuBar').addEventListener('click', ()=>{

     const styles = [...ulTagOfNav.classList];

           styles.forEach(element => {
        //    console.log(element);
            if(element.startsWith('top-')){

                if(element !== 'top-[80px]'){

                    ulTagOfNav.classList.remove('top-[-600px]');
                    ulTagOfNav.classList.add('top-[80px]');
                    
                    
               }
              else{
               
                ulTagOfNav.classList.remove('top-[80px]');
                ulTagOfNav.classList.add('top-[-600px]');
              
    
                    
              }
                 
            }
      });
})

