var RecentCounter = function() {
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {

    // New request add karo
    this.queue.push(t);

    // 3000ms se purane requests remove karo
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    // Last 3000ms ke requests
    return this.queue.length;
};