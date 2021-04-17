/**
 * Creates a thread-loader config object.
 * https://github.com/webpack-contrib/thread-loader#examples
 *
 * @param {String} name - the name of the worker pool
 * @param {Number} [workerParallelJobs=20] - the number of jobs a worker processes in parallel
 * @param {Number} [poolParallelJobs=200] - the number of jobs the poll distributes to the workers
 * @returns {Object}
 */
 module.exports = ({ name, workerParallelJobs = 20, poolParallelJobs = 200 }) => ({
  loader: 'thread-loader',
  options: {
    name,
    workerParallelJobs,
    poolParallelJobs
  }
})
