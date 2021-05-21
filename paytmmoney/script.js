// const pay = document.querySelector('#tm');

// console.log(pay.getTotalLength());

const tm = gsap.timeline({defaults:{duration:1}});
tm
.from("#triangles", {scale:0, opacity:0})
.to("#triangles", {scale:1, opacity:1})
.to("#triangle1", {rotation:360})


