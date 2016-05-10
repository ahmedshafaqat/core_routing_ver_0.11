function energy_calculation(s, t) {
    
/* f= ma , a = (v^2-u^2)/2.s , 
W = f * s * cos@theda;
 



*/    
    
var e1 = Math.round(((((16.67^2)*13800)/(2*(s)))*(Math.cos(0))*(t/1000))*100)/100;

var Fd1 = bus_drag(0,0,0,0); 

var t1 = t / 1000;

var e2 = Math.round((Fd1 * s * t1)/3600);

var e = Math.round(((e1 + e2)*100)/3600)/100 ;
/*
window.alert(Fd1);
window.alert(e2);
window.alert(s);
window.alert(t1);
*/


return e;
}

function bus_drag(Cd, py, v, A){
//All the test information based on BYD 350 Electric bus
var Cd1 = 0.6;
var py1 = 1.2;
var v1 = 16.67;
var A1 = 8.16;

var Fd = Cd1 * py1 * v1 * A1;   
    return Fd;
    
}