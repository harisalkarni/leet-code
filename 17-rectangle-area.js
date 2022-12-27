/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */

//simple mathematic method

var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    const awidth = ax2 - ax1;  // define width dari area A
    const aheight = ay2 - ay1; // define height dari area A

    const bwidth = bx2 - bx1;  // define width dari area B
    const bheight = by2 - by1;  // define height dari area B

    //find the intersect area for C
    const cx1 = Math.max(ax1, bx1); 
    const cy1 = Math.max(ay1, by1);

    const cx2 = Math.min(ax2, bx2); 
    const cy2 = Math.min(ay2, by2);

    const cwidth = cx2- cx1;  // define width dari area C
    const cheight = cy2- cy1; // define height dari area C

    const area = (width, height) => {  // simple findArea function 
        if(width <= 0) return 0;
        if(height <= 0) return 0;

        return width * height;
    } 

    const result = area(awidth, aheight) + area(bwidth, bheight) - area(cwidth, cheight)

    return result
    
};