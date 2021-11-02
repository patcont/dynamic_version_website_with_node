const element1= document.getElementById('caja-1');
const element2= document.getElementById('caja-2');
const element3= document.getElementById('caja-3');
const modal_container= document.getElementById('modal-conteiner');
const modal_container2= document.getElementById("modal-conteiner2");
const modal_container3= document.getElementById("modal-conteiner3");
const element_close= document.getElementById('close');
const element_close2= document.getElementById('close2');
const element_close3= document.getElementById('close3');
const background= document.getElementById('background');

[element1,element2,element3 ].forEach((element)=>{
element.addEventListener('click',()=>{
    if (element==element1){
    modal_container.classList.add('show');
    background.classList.add('blur');}

    if (element==element2){
        modal_container2.classList.add('show');
        background.classList.add('blur');}

        if (element==element3){
            modal_container3.classList.add('show');
            background.classList.add('blur');}
        
    
    

});
[element_close,element_close2,element_close3 ].forEach((elements)=>{
elements.addEventListener('click',()=>{
    if (elements==element_close){
        modal_container.classList.remove('show');
        background.classList.remove('blur');}
    

        if (elements==element_close2){
            modal_container2.classList.remove('show');
            background.classList.remove('blur');}
            if (elements==element_close3){
                modal_container3.classList.remove('show');
                background.classList.remove('blur');}

});

})
})