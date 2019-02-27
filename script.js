// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
var mySound = document.getElementById('you-win');


function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
	    el.src="images/lemon_slot.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src="images/orange_slot.PNG";
    } else if (el.src.match("images/orange_slot.PNG")){
		el.src="images/cherry_slot.PNG";
	} else {
	}
}

function middleImage(el){
	if (el.src.match("images/lemon_slot.PNG")){
	    el.src="images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src="images/cherry_slot.PNG";
    } else if (el.src.match("images/cherry_slot.PNG")){
		el.src="images/lemon_slot.PNG";
	} else {
	}
}

function lastImage(el){
	if (el.src.match("images/orange_slot.PNG")){
	    el.src="images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src="images/seven_slot.PNG";
    } else if (el.src.match("images/seven_slot.PNG")){
		el.src="images/watermelon2.PNG";
	} else if (el.src.match("images/watermelon2.PNG")){
		el.src="images/orange_slot.PNG";
	}
}
function playSound(el){
	if (a.src.match("images/cherry_slot") && b.src.match("images/cherry_slot") && c.src.match("images/cherry_slot")){
		mySound.play();
		console.log("Jackpot!");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
    } else {
    }
}