
async function start() {
    const { sum } = await import('./sum.js');
    console.log('sum(1, 2) = ', sum(1, 2))
}

start()

