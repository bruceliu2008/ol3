goog.provide('ol.Tile');

goog.require('goog.events');
goog.require('ol.Bounds');

/**
 * The Tile class.
 * @constructor
 * @param {string} url
 * @param {ol.Bounds} bounds
 */
ol.Tile = function(url, bounds) {

    /**
     * @private
     * @type {string}
     */
    this.url_ = url;

    /**
     * @private
     * @type {ol.Bounds}
     */
    this.bounds_ = bounds;

    /**
     * @private
     * @type {Element}
     */
    this.img_ = ol.Tile.createImage();
    goog.events.listenOnce(this.img_, goog.events.EventType.LOAD,
                           this.handleImageLoad, false, this);
    goog.events.listenOnce(this.img_, goog.events.EventType.ERROR,
                           this.handleImageError, false, this);
};

/**
 * Load the tile.
 */
ol.Tile.prototype.load = function() {
    this.img_.src = this.url_;
};

/**
 * Get the tile url.
 * @return {string}
 */
ol.Tile.prototype.getUrl = function() {
    return this.url_;
};

/**
 * Get the tile bounds.
 * @return {ol.Bounds}
 */
ol.Tile.prototype.getBounds = function() {
    return this.bounds_;
};

/**
 * Get the tile image.
 * @return {Element}
 */
ol.Tile.prototype.getImg = function() {
    return this.img_;
};

/**
 *
 */
ol.Tile.prototype.handleImageLoad = function() {
};

/**
 *
 */
ol.Tile.prototype.handleImageError = function() {
};

/**
 * Create an image node. This is done by cloning
 * the same image element.
 * @return {Element}
 */
ol.Tile.createImage = (function() {
    var img = document.createElement("img");
    img.className = "olTile";
    return function() {
        return img.cloneNode(false);
    };
})();
