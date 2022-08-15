///global_classes\\\

class Player
{
    constructor({size, position, velocity, src, srcsize})
    {
        this.size = size
        this.position = position
        this.velocity = velocity
        
        this.img = new Image()
        this.frame = 1
        this.spritestate = 'down'
        this.frameSpan = 10
        this.frameSpanLimit = 10
        this.frameCountIsProgressive = true

        this.interaction;
        this.imgBaseSrc = src
        this.srcsize = srcsize
        this.img.src = this.imgBaseSrc+'_'+this.spritestate+'_'+this.frame+'.png'
    }
    render()
    {
        ctx.drawImage(this.img, 0, 0, this.srcsize.x, this.srcsize.y, this.position.x, this.position.y, this.size.x*m, this.size.y*m)
    }
    update()
    {
        this.render()

        //física\\
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        //física\\

        //controles\\
        if(!userInput.up && !userInput.down)
        {
            this.velocity.y = 0;
        }
        else
        {
            if(userInput.up)
            {
                this.velocity.y = -8*m
            }
            if(userInput.down)
            {
                this.velocity.y = 8*m
            }
        }

        if(!userInput.left && !userInput.right)
        {
            this.velocity.x = 0;
        }
        else
        {
            if(userInput.left)
            {
                this.velocity.x = -8*m
            }
            if(userInput.right)
            {
                this.velocity.x = 8*m
            }
        }
        //controles\\

        //animação\\
            //fonte da sprite
        this.img.src = './sprites/dan/dan_'+this.spritestate+'_'+this.frame+'.png'

            //especificando direção
        if(this.velocity.y < 0)
        {
            this.spritestate = 'up'
        }
        else if(this.velocity.y > 0)
        {
            this.spritestate = 'down'
        }
        if(this.velocity.x < 0)
        {
            this.spritestate = 'left'
        }
        else if(this.velocity.x > 0)
        {
            this.spritestate = 'right'
        }

            //controle de mudança de frames
        if(this.frame >= 2)
        {
            this.frameCountIsProgressive = false
        }
        else if(this.frame == 0)
        {
            this.frameCountIsProgressive = true
        }

        if(this.velocity.x != 0 | this.velocity.y != 0)
        {
            if (this.frameCountIsProgressive && this.frameSpan % this.frameSpanLimit == 0) {
                this.frame++
            }
            else if (this.frameSpan % this.frameSpanLimit == 0) {
                this.frame--
            }
            this.frameSpan++
            if(this.frameSpan > 100)
            this.frameSpan = 0
        }
        else
        {
            this.frameSpan = 10
            this.frame = 1
        }

        //animação\\
    }
}

class TitleScreen
{
    constructor()
    {
        this.selection = 0

        this.playButton = new Image()
        this.playButton.src = 'sprites/misc/play_button.png'
        this.playButtonSpritestate = 'selec'
    }
    render()
    {
        ctx.drawImage(this.playButton, 0, 0, 128, 64, canvas.width/4, canvas.height/4, canvas.width/2, 16*canvas.width/2/32)
    }
    update()
    {
        this.render()
        this.playButton.src = 'sprites/misc/play_button_'+this.playButtonSpritestate+'.png'
        
        if(userInput.up) {
            userInput.up = false
            this.selection--
        }
        else if(userInput.down) {
            userInput.down = false
            this.selection++
        }

        if(this.selection > 1) {
            this.selection = 0
        }
        if(this.selection < 0) {
            this.selection = 1
        }

        switch(this.selection)
        {
            case 0:
                this.playButtonSpritestate = 'selec'
                break;
            case 1:
                this.playButtonSpritestate = 'unselec'
                break;
        }
    }
}

class LvlSet
{
    constructor({size, position, velocity, src, srcsize}) {
        this.player = new Player({
            size: size,
            position: position,
            velocity: velocity,
            src: src,
            srcsize: srcsize
        })
    }
}

class gameObject
{
    constructor({size, position, velocity, src, srcsize})
    {
        this.size = size
        this.position = position
        this.velocity = velocity
        
        this.img = new Image()
        this.frame = ''
        this.spritestate = ''
        this.frameSpan = 10
        this.frameSpanLimit = 10
        this.frameCountIsProgressive = true

        this.imgBaseSrc = src
        this.srcsize = srcsize
        this.img.src = this.imgBaseSrc+this.spritestate+this.frame+'.png'
    }
    render()
    {
        ctx.drawImage(this.img, 0, 0, this.srcsize.x, this.srcsize.y, this.position.x, this.position.y, this.size.x*m, this.size.y*m)
    }
    update()
    {
        this.render()
        this.img.src = this.imgBaseSrc+this.spritestate+this.frame+'.png'
    }
    setSpritestate(state)
    {
        this.spritestate = state
    }
    delSpritestate()
    {
        this.spritestate = ''
    }
    setFrame(num)
    {
        this.frame = num
    }
    delFrame()
    {
        this.frame = ''
    }
}