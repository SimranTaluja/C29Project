class Ground{
    constructor(){
        var options = {
            isStatic:true,
        }
        this.ground = Bodies.rectangle(450,470,900,20,options);
        World .add(world, this.ground);
    }
    display(){
        rectMode(CENTER);
        fill ("white");
        rect(this.ground.position.x, this.ground.position.y, 900, 20);
    }
}