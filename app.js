(function() {
  var GameManager, Tile;

  Tile = (function() {
    function Tile(x, y, val) {
      this.x = x != null ? x : false;
      this.y = y != null ? y : false;
      this.val = val != null ? val : false;
    }

    return Tile;

  })();

  GameManager = (function() {
    function GameManager(grid, gridSize) {
      this.grid = grid != null ? grid : false;
      this.gridSize = gridSize != null ? gridSize : 3;
      this.initGrid();
    }

    GameManager.prototype.initGrid = function() {
      var i, x, y, _i, _j, _k, _ref, _ref1;
      if (this.grid === false) {
        this.grid = new Array(this.gridSize);
        for (x = _i = 0, _ref = this.gridSize; _i < _ref; x = _i += 1) {
          this.grid[x] = new Array(this.gridSize);
          for (y = _j = 0, _ref1 = this.gridSize; _j < _ref1; y = _j += 1) {
            this.grid[x][y] = {};
          }
        }
      }
      for (i = _k = 0; _k < 2; i = _k += 1) {
        this.generateTile();
      }
      return this.initGameView();
    };

    GameManager.prototype.initGameView = function() {};

    GameManager.prototype.generateTile = function() {
      var randVal, xRand, yRand;
      xRand = Math.floor(Math.random() * this.gridSize);
      yRand = Math.floor(Math.random() * this.gridSize);
      randVal = xRand % 2 === 0 ? 2 : 4;
      if ((this.grid[xRand][yRand].val != null)) {
        return this.generateTile();
      } else {
        return this.grid[xRand][yRand] = new Tile(xRand, yRand, randVal);
      }
    };

    return GameManager;

  })();

  new GameManager();

}).call(this);
