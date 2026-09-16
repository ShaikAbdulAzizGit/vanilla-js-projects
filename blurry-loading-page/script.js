bg_section=document.querySelector('.bg')
loading_text=document.querySelector('.loading-text')

let load_count=0

const interval_id = setInterval(blurring, 30);
function blurring(){
    load_count+=1
    if(load_count>=100){
        clearInterval(interval_id)
    }
    // console.log(load_count)
    loading_text.textContent=`${load_count}%`
    loading_text.style.opacity=scale(load_count,0,100,1,0)
    bg_section.style.filter=`blur(${scale(load_count,0,100,30,0)}px)`
    
}

const scale=(num,in_min,in_max,out_min,out_max)=>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}