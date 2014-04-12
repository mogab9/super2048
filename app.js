(function() {
  var GameManager, Tile;

  Tile = (function() {
    Tile.prototype.x = false;

    Tile.prototype.y = false;

    Tile.prototype.val = false;

    function Tile(x, y, val) {
      this.x = x;
      this.y = y;
      this.val = val;
    }

    return Tile;

  })();

  GameManager = (function() {
    GameManager.prototype.grid = false;

    GameManager.prototype.gridSize = 3;

    function GameManager() {
      this.initGrid();
    }

    GameManager.prototype.initGrid = function() {
      var i, x, y, _i, _j, _k, _ref, _ref1, _results;
      if (this.grid === false) {
        this.grid = new Array(this.gridSize);
        for (x = _i = 0, _ref = this.gridSize; _i < _ref; x = _i += 1) {
          this.grid[x] = new Array(this.gridSize);
          for (y = _j = 0, _ref1 = this.gridSize; _j < _ref1; y = _j += 1) {
            this.grid[x][y] = {};
          }
        }
      }
      _results = [];
      for (i = _k = 0; _k < 2; i = _k += 1) {
        _results.push(this.generateTile());
      }
      return _results;
    };

    GameManager.prototype.generateTile = function() {
      var randVal, xRand, yRand;
      xRand = Math.floor(Math.random() * this.gridSize);
      yRand = Math.floor(Math.random() * this.gridSize);
      randVal = xRand % 2 === 0 ? 2 : 4;
      return this.grid[xRand][yRand] = new Tile(xRand, yRand, randVal);
    };

    return GameManager;

  })();

  new GameManager();

}).call(this);
