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

    GameManager.prototype.initGameView = function() {
      var cell, cellkey, gridContainer, htmlCell, htmlRow, row, rowKey, tile, _i, _len, _ref, _results;
      gridContainer = document.getElementById('gridContainer');
      if (gridContainer != null) {
        _ref = this.grid;
        _results = [];
        for (rowKey = _i = 0, _len = _ref.length; _i < _len; rowKey = ++_i) {
          row = _ref[rowKey];
          htmlRow = document.createElement('div');
          htmlRow.setAttribute('class', 'tileRow');
          htmlRow.setAttribute('data-y', rowKey);
          gridContainer.appendChild(htmlRow);
          _results.push((function() {
            var _j, _len1, _results1;
            _results1 = [];
            for (cellkey = _j = 0, _len1 = row.length; _j < _len1; cellkey = ++_j) {
              cell = row[cellkey];
              htmlCell = document.createElement('div');
              htmlCell.setAttribute('class', 'tileContainer');
              htmlCell.setAttribute('data-y', rowKey);
              htmlCell.setAttribute('data-x', cellkey);
              if (cell.val != null) {
                tile = document.createElement('div');
                tile.setAttribute('class', 'tile');
                tile.innerHTML = cell.val;
                htmlCell.appendChild(tile);
              }
              _results1.push(htmlRow.appendChild(htmlCell));
            }
            return _results1;
          })());
        }
        return _results;
      }
    };

    GameManager.prototype.generateTile = function() {
      var randVal, xRand, yRand;
      xRand = Math.floor(Math.random() * this.gridSize);
      yRand = Math.floor(Math.random() * this.gridSize);
      randVal = xRand % 2 === 0 ? 2 : 4;
      if (this.grid[xRand][yRand].val != null) {
        return this.generateTile();
      } else {
        return this.grid[xRand][yRand] = new Tile(xRand, yRand, randVal);
      }
    };

    return GameManager;

  })();

  new GameManager();

}).call(this);
