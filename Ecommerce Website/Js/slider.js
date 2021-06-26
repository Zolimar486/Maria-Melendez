const slider1 = document.getElementById("glide1");



if(slider1)
new Glide(slider1,{
    type:"carousel",
    startAt:0,
    autoPlay:3000,
    hoverpause:true,
    perview:1,
    animationDuration:800,
    animationTimingFunc:"linear",
}).mount()


