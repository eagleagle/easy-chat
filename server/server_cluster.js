var cluster = require('cluster');

function startWorker() {
    var worker = cluster.fork();
    console.info('CLUSTER: Worker %d started', worker.id);
}

if (cluster.isMaster) {
    require('os').cpus().forEach(function () {
        startWorker();
    });

    cluster.on('disconnect', function (worker) {
        console.info('CLUSTER: Worker %d disconnected from the cluster.', worker.id);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.info('CLUSTER: Worker %d died with exit code %d (%s).', worker.id, code, signal);
        startWorker();
    });
} else {
    require('./server.js')();
}