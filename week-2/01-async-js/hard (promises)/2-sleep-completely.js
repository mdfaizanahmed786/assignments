/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function(resolve){
        let a=0;
        for(let i=0; i<10000000; i++) {
                a=a+i;
        }
        setTimeout(()=>{
          resolve();
        }, milliseconds)
    })
}

module.exports = sleep;
