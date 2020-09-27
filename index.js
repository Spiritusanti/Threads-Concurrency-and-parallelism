// Threads, Concurrency, and Parallelism

// when we open a new tab in the web browser it creates a new thread.
// The browser has web workers -- background processes running on different threads.

// what happend in Node?
// Node handles this stuff in the background by creating it's own worker threads.

// Node can utilize multiple cores:

const {spawn} = require('child_process')

spawn('git', ['stuff'])

