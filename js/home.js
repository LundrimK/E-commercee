const productContainer=[...document.querySelectorAll('.product-container')];
const nextBtn=[...document.querySelectorAll('.nxt-btn')];
const prevBtn=[...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item,i)=>{
    let containerDimenstions=item.getBoundingClientRect();
    let containerWidth=containerDimenstions.width;
    nextBtn[i].addEventListener("click",()=>{
        scrollAmount=0;
        let slideTimer=setInterval(()=>{
            item.scrollLeft+=100;
            scrollAmount+=50;
            if(scrollAmount>=100){
                window.clearInterval(slideTimer)
            }
        },25);
    });
    prevBtn[i].addEventListener("click",()=>{
        scrollAmount=0;
        let slideTimer=setInterval(()=>{
            item.scrollLeft-=100;
            scrollAmount+=50;
            if(scrollAmount=100){
                window.clearInterval(slideTimer)
            }
        },25);
    });
});
