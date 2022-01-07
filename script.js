function homeScroll(){
    window.scrollTo(0,0)
}

function sobreScroll(){
    
    if (window.innerWidth < 414){window.scrollTo(0 , 113)} 
    else if(window.innerWidth > 414 < 700){window.scrollTo(0 , 120)} 
    else if( window.innerWidth < 414 < 700) {window.scrollTo(0,250)}

};

function contatoScroll(){
    window.scrollTo(0,1000)
}