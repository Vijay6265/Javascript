// document.getElementById('images2').onclick = function(){
//     alert('Clicked');
// }

// attachEvent()
// JQuery

// document.getElementById('images3').addEventListener('click',function(){
//     alert("Add Clicked");
// })

// document.getElementById('images1').addEventListener('click',function(e){
//     console.log(e);
// })

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget;
// altkey, ctrlkey, shiftkey, keycode
// clientX, clientY, screenX, screenY


// document.getElementById('all_images').addEventListener('click',function(e){
//     console.log("Clicked inside the url")
// },false)

// document.getElementById('images1').addEventListener('click',function(e){
//     console.log("Clicked inside the images 1")
//     e.stopPropagation()
// },false)

// document.getElementById('images3').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("images 3 Clicked")
// })

// document.querySelector('#all_images').addEventListener('click', function(e){
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode
//     removeIt.remove();
// })


document.querySelector('#all_images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
})

 


