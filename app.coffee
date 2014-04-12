
# Tile
class Tile
    x:    false
    y:    false
    val : false
    constructor: (x, y, val) ->
        @x = x
        @y = y

# Game Manager
class GameManager
    grid:     false
    gridSize: 3
    constructor: -> 
        @initGrid()
    initGrid: ->
        if @grid is false
            # init grid
            @grid = new Array(@gridSize)
            for x in [0...@gridSize] by 1
                @grid[x] = new Array(@gridSize)
                for y in [0...@gridSize] by 1
                    @grid[x][y] = {}
        # generate 2 random tiles
        for i in [0...2] by 1
            xRand = Math.floor(Math.random() * @gridSize)
            yRand = Math.floor(Math.random() * @gridSize)
            randVal = if (xRand % 2 is 0) then 2 else 4
            @grid[xRand][yRand] = new Tile(xRand, yRand, randVal)
    generateTile: ->

# Init game
new GameManager()