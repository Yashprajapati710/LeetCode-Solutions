/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

for(let asteroid of asteroids){

    let alive = true;

    while(alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0 ){
        let top = stack[stack.length - 1];

        if(top < Math.abs(asteroid)){
            stack.pop();
        }
        else if(top === Math.abs(asteroid)){
            stack.pop();
            alive = false;
        }
        else{
            alive = false;
        }
    }

    if(alive){
        stack.push(asteroid);
    }
}
return stack;

    
};