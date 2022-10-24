var btn_start, btn_stop, sp, t, ms, s, min, h;

window.onload = function() {
    btn_start = document.getElementById('start')
    sp = document.getElementsByName('span')
    sph = document.getElementById('h')
    spmin = document.getElementById('min')
    sps = document.getElementById('s')
    spms = document.getElementById('ms')
    t;
    ms=0, s=0, min=0, h=0 
}

function play_chrono() {
    ms+=1 
    if(ms==10) {
        ms=1
        s+=1
    }
    if(s==60) {
        s=0
        min+=1
    }
    if(min==60) {
        min=0
        h+=1
    }
    sph.innerHTML = h + "h";
    spmin.innerHTML = min + "min";
    sps.innerHTML = s + "s";
    spms.innerHTML = ms + "ms";
}
function start() {
    t = setInterval(play_chrono,100);
    btn_start.disabled = true
}
function stop() {
    clearInterval(t)
    btn_start.disabled = false
}
function reset() {
    clearInterval(t)
    btn_start.disabled = false
    ms = 0, min = 0, h = 0, s = 0
    sph.innerHTML = h + "h";
    spmin.innerHTML = min + "min";
    sps.innerHTML = s + "s";
    spms.innerHTML = ms + "ms";

}
