import React from 'react';
import s from './Feeds.module.css';

const Feeds = () =>{

    var ep = 0.001;
    var epso = 0.0001;
    var f1 = (x)=>{
     var f=Math.pow((x-2), 2)-Math.log(x);
        return f;
    }
    var a,b,x1,c;
     //alert('найти корінь рівнння ((x-2)^2) - Math.log(x)');
    //alert('метод дихотомиї');
    a=[0,1,2,4,7,10];
    b=[1,2,4,7,10,14];
    
        while(Math.abs(a[0]-b[0]) >= ep) {
            c=(a[0]+b[0])/2;
            if(f1(a[0])*f1(c) < 0){
                b[0] = c;
            }else{
                a[0] = c;
                x1 = ( a[0]+b[0] )/2;
            }
        
    } 
    
        
    //alert("x=" + x1);
    //alert('f(x)' + f1(x1));
    
    var a,b,x2,c;
    
        while(Math.abs(a[1]-b[1]) >= ep) {
            c=(a[1]+b[1])/2;
            if(f1(a[1])*f1(c) < 0){
                b[1] = c;
            }else{
                a[1] = c;
                x2 = ( a[1]+b[1] )/2;
            }
        
    } 
    
        
   // alert("x=" + x2);
    //alert('f(x)' + f1(x2));


    var a,b,x3,c;
    
    while(Math.abs(a[2]-b[2]) >= ep) {
        c=(a[2]+b[2])/2;
        if(f1(a[2])*f1(c) < 0){
            b[2] = c;
        }else{
            a[2] = c;
            x3 = ( a[2]+b[2] )/2;
        }
    
} 

    
//alert("x=" + x3);
//alert('f(x)' + f1(x3));


var a,b,x4,c;
    
while(Math.abs(a[3]-b[3]) >= ep) {
    c=(a[3]+b[3])/2;
    if(f1(a[3])*f1(c) < 0){
        b[3] = c;
    }else{
        a[3] = c;
        x4 = ( a[3]+b[3] )/2;
    }

} 


//alert("x=" + x4);
//alert('f(x)' + f1(x4));




var a,b,x5,c;
    
while(Math.abs(a[4]-b[4]) >= ep) {
    c=(a[4]+b[4])/2;
    if(f1(a[4])*f1(c) < 0){
        b[4] = c;
    }else{
        a[4] = c;
        x5 = ( a[4]+b[4] )/2;
    }

} 


//alert("x=" + x5);
//alert('f(x)' + f1(x5));



var a,b,x6,c;
    
while(Math.abs(a[5]-b[5]) >= ep) {
    c=(a[5]+b[5])/2;
    if(f1(a[5])*f1(c) < 0){
        b[5] = c;
    }else{
        a[5] = c;
        x6 = ( a[5]+b[5] )/2;
    }

} 


//alert("x=" + x6);
//alert('f(x)' + f1(x6));




    return (
        <div>
    
<table class={s.tg}>
  <tr>
    <th class={s.tglax}>a</th>
    <th class={s.tglax}>b</th>
    <th class={s.tglax}>eps</th>
    <th class={s.tglax}>xn</th>
    <th class={s.tglax}>f(x)</th>
  </tr>
  <tr>
    <td class={s.tglax}>0</td>
    <td class={s.tglax}>1</td>
    <td class={s.tglax}>0.001</td>
    <td class={s.tglax}>{x1}</td>
    <td class={s.tglax}>{f1(x1)}</td>
  </tr>
  <tr>
    <td class={s.tglax}>1</td>
    <td class={s.tglax}>2</td>
    <td class={s.tglax}>0.001</td>
    <td class={s.tglax}>{x2}</td>
    <td class={s.tglax}>{f1(x2)}</td>
  </tr>
  <tr>
    <td class={s.tglax}>2</td>
    <td class={s.tglax}>4</td>
    <td class={s.tglax}>0.001</td>
    <td class={s.tglax}>{x3}</td>
    <td class={s.tglax}>{f1(x3)}</td>
  </tr>
  <tr>
    <td class={s.tglax}>4</td>
    <td class={s.tglax}>7</td>
    <td class={s.tglax}>0.001</td>
    <td class={s.tglax}>{x4}</td>
    <td class={s.tglax}>{f1(x4)}</td>
  </tr>
  <tr>
    <td class={s.tglax}>7</td>
    <td class={s.tglax}>10</td>
    <td class={s.tglax}>0.001</td>
    <td class={s.tglax}>{x5}</td>
    <td class={s.tglax}>{f1(x5)}</td>
  </tr>
  <tr>
    <td class={s.tglax}>10</td>
    <td class={s.tglax}>14</td>
    <td class={s.tglax}>0.001</td>
    <td class={s.tglax}>{x6}</td>
    <td class={s.tglax}>{f1(x6)}</td>
  </tr>
</table>
        </div>

    )
}

export default Feeds;