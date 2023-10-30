function lerp(start, end, t){
    return start * ( 1 - t ) + end * t;
}

export {
    lerp
}