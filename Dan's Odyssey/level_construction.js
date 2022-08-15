///level_construction\\\

//part of rendering levels and huds
//obs.: greatest part of the levels extend the "LvlSet" class

class Home_PlayerRoom extends LvlSet
{
    constructor({size, position, velocity, src, srcsize}) {
        super({
            size: size,
            position: position,
            velocity: velocity,
            src: src,
            srcsize: srcsize
        })

        this.bg = new Image()
        this.bg.src = 'sprites/levels/home_player_room.png'

        this.entities = {
            door_to_corridor: new gameObject({
                size: {x: 104*m, y: 181*m},
                position: {x: 250*m, y: 23*m},
                velocity: {x: 0, y: 0},
                src: 'sprites/misc/door',
                srcsize: {x: 128, y: 220}
            })
        }
    }
    update() {
        ctx.drawImage(this.bg, 0, 0, 800, 600, 0, 0, canvas.width, canvas.height)
        //ctx.fillStyle = 'red'
        //ctx.fillRect(196*m, 252*m, 408*m, 340*m)
        this.entities.door_to_corridor.update()
        this.player.update()

        //if(this.player.position.x + this.player.size.x + this.player.velocity.x > 592*m
            //| this.player.position.x + this.player.velocity.x < 0)
        //{
            //this.player.velocity.x = 0
        //}
        

        //if(this.player.position.y + this.player.size.y + this.player.velocity.y > canvas.height
            //| this.player.position.y + this.player.size.y + this.player.velocity.y < 0)
        //{
            //this.player.velocity.y = 0
        //}

        if(userInput.e) {
            userInput.e = false
            lvlLoad = new Home_Corridor({
                size: { x: 128*m, y: 160*m },
                position: { x: 250*m, y: 150*m },
                velocity: { x: 0, y: 0 },
                src: 'sprites/dan/dan',
                srcsize: { x: 128*m, y: 160*m}
            })
        }
    }
}
class Home_Corridor extends LvlSet
{
    constructor({size, position, velocity, src, srcsize}) {
        super({
            size: size,
            position: position,
            velocity: velocity,
            src: src,
            srcsize: srcsize
        })

        this.bg = new Image()
        this.bg.src = 'sprites/levels/home_corridor.png'

        this.entities = {
            door_to_player_room: new gameObject({
                size: {x: 104*m, y: 181*m},
                position: {x: 250*m, y: 30*m},
                velocity: {x: 0, y: 0},
                src: 'sprites/misc/door',
                srcsize: {x: 128, y: 220}
            })
        }
    }
    update()
    {
        ctx.drawImage(this.bg, 0, 0, 800, 600, 0, 0, canvas.width, canvas.height)

        this.entities.door_to_player_room.update()
        this.player.update()

        if(userInput.e)
        {
            userInput.e = false
            lvlLoad = new Home_PlayerRoom({
                size: { x: 128*m, y: 160*m },
                position: { x: 320, y: 150 },
                velocity: { x: 0, y: 0 },
                src: 'sprites/dan/dan',
                srcsize: { x: 128*m, y: 160*m}
            })
        }
    }
}
class Home_LivingRoom extends LvlSet
{
    constructor() {
        super({
            size: { x: 128*m, y: 192*m },
            position: { x: 8, y: 8 },
            velocity: { x: 0, y: 0 },
            src: 'sprites/dan/dan',
            srcsize: { x: 64*m, y: 96*m}
        })
    }
    update() {

    }
}
class Home_Kitchen extends LvlSet
{
    constructor() {
        super({
            size: { x: 128*m, y: 192*m },
            position: { x: 8, y: 8 },
            velocity: { x: 0, y: 0 },
            src: 'sprites/dan/dan',
            srcsize: { x: 64*m, y: 96*m}
        })
    }
    update() {

    }
}
class Home_ParentsRoom extends LvlSet
{
    constructor() {
        super({
            size: { x: 128*m, y: 192*m },
            position: { x: 8, y: 8 },
            velocity: { x: 0, y: 0 },
            src: 'sprites/dan/dan',
            srcsize: { x: 64*m, y: 96*m}
        })
    }
    update() {

    }
}