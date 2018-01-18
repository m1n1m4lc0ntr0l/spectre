
/*
* worker.js - Spectre Check
*
* Copyright 2018 Tencent Xuanwu Lab <xlab@tencent.com>
* Copyright 2018 Tencent, Inc. and/or its affiliates. All rights reserved.
*
* This code is the copyright of all authors, please reference reservation reproduced.
*/


function worker_function() {
    self.addEventListener('message', function (event)
{
    const sharedBuffer = event.data;
    const sharedArray = new Uint32Array(sharedBuffer);
    postMessage('start');
    while(true)
        Atomics.add(sharedArray,0,1);
});
}
// This is in case of normal worker start
// "window" is not defined in web worker
// so if you load this file directly using `new Worker`
// the worker code will still execute properly
if(window!=self)
  worker_function();