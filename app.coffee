
# Tile
class Tile
    constructor: ( @x = false, @y = false, @val = false ) ->

# Game Manager
class GameManager
    constructor: ( @grid = false, @gridSize = 3) -> 
        @initGrid()

    # Create grid in the model, generate 2 random tiles and init game view
    initGrid: () ->
        if @grid is false
            # init grid
            @grid = new Array(@gridSize)
            for x in [0...@gridSize] by 1
                @grid[x] = new Array(@gridSize)
                for y in [0...@gridSize] by 1
                    @grid[x][y] = {}
        # generate 2 random tiles
        for i in [0...2] by 1
            @generateTile()
        @initGameView()

    # Init 
    initGameView: () ->
        gridContainer = document.getElementById('gridContainer')
        if gridContainer?
            # Create tileRow
            for row,rowKey in @grid
                htmlRow = document.createElement('div')
                htmlRow.setAttribute('class', 'tileRow')
                htmlRow.setAttribute('data-y', rowKey)
                gridContainer.appendChild(htmlRow)
                # Create each cell in tileRow as a tileContainer
                for cell,cellkey in row
                    htmlCell = document.createElement('div')
                    htmlCell.setAttribute('class', 'tileContainer')
                    htmlCell.setAttribute('data-y', rowKey)
                    htmlCell.setAttribute('data-x', cellkey)
                    # Create a tile with its value if there's any
                    if cell.val?
                        tile = document.createElement('div')
                        tile.setAttribute('class', 'tile')
                        tile.innerHTML = cell.val
                        htmlCell.appendChild(tile)
                    htmlRow.appendChild(htmlCell)

    # Generate tile at a random position
    generateTile: () ->
        xRand   = Math.floor(Math.random() * @gridSize)
        yRand   = Math.floor(Math.random() * @gridSize)
        randVal = if (xRand % 2 is 0) then 2 else 4
        if @grid[xRand][yRand].val?
            @generateTile()
        else
            @grid[xRand][yRand] = new Tile(xRand, yRand, randVal)

# Init game
new GameManager()