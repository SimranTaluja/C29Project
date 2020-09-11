class Stand{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.stand = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World .add(world, this.stand);
    }
    display(){
        fill ("brown");
        var angle = this.stand.angle;
        var pos = this.stand.position;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}