const worker = new Worker('./worker.js')
worker.postMessage('我是主worker')