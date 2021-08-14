// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }

// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);


// window.addEventListener("keydown", function(e) {
//     const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     if (!audioEl) return; //Stop the function from turning all together
//     audioEl.currentTime = 0;
//     audioEl.play()
//     console.log(audioEl);
// })

// var arr = [1, 2, 3, 4, 5];
// var weight = 9;

// function findSum(a, b) {
//     console.log(a.length);
//     for (var i = 0; i <= a.length; i++) {
//         for (var j = 0; j <= a.length; j++) {
//             console.log(i, j);
//             if ((a[i] + a[j]) == weight) {
//                 return [i, j]
//             }
//         }
//     }
//     return -1;
// }

// console.log(findSum(arr, weight));


// function findSumBetter(arr, weight) {
//     // var weight = 9;
//     var hashtable = {};

//     for (var i = 0; i < arr.length; i++) {
//         var currentElement = arr[i];
//         var difference = weight - currentElement;

//         //Check the right one already exixts
//         if (hashtable[currentElement] != undefined) {
//             return [i, hashtable[weight = currentElement]];
//         } else {
//             //store index
//             hashtable[difference] = i;
//         }
//     }

//     return -1;
// }

var arr = [1, 2, 3, 4, 5];
var weight = 11;


function jideFindSum(arrayValues, weightValue) {
    for (var i = 0; i < arrayValues.length; i++) {
        var remainder = weightValue - arrayValues[i];

        if (arrayValues.indexOf(remainder) >= 0) {
            return `[${remainder} ${arrayValues[i]}]`
        }
    }
    return `Two combination of Number ${weightValue} not find in area.`;
}
console.log(jideFindSum(arr, weight));