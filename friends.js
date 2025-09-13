    let catnow = window.document.querySelector('#cat-now');
    let cats = new Array();
    let maxCat=10;
    let EndCat=0;
    let totalCats=0;
    class Cat{
        constructor(x0,y0,sp,rr,sz){
        this.sx = x0;
        this.sy = y0;
        this.size = sz;
        this.rar = rr;
        this.spd = sp;
        this.gx=Math.random()*(field-this.size)+this.size/2;
        this.gy=Math.random()*(field-this.size)+this.size/2;
        this.img=document.createElement('img');

        if(this.rar===1)this.img.src="cat_go.gif";
        else this.img.src="cat_gif_2.gif";
        
        this.img.style.userSelect="none";
        this.img.draggable=false;
        if(this.sx<this.gx)this.img.style.transform=`scale(${this.size/1024},${this.size/1024})`;
        else this.img.style.transform=`scale(${-this.size/1024},${this.size/1024})`;
        this.img.style.position = "absolute";
        this.img.style.zIndex="1";
        this.Move(this.sx,this.sy);
        canvas.appendChild(this.img);
        this.img.onclick = this.ClickCat.bind(this);
        }
        

        Go(){
        if(Math.pow(Math.abs(this.sx-this.gx),2)+Math.pow(Math.abs(this.sy-this.gy),2)<=Math.pow(this.spd,2))
        {
            this.sx=this.gx;
            this.sy=this.gy;
        }
        else{
            let dx = this.gx - this.sx;
            let dy = this.gy - this.sy;
            let angle = Math.atan2(dy, dx);
            this.sx += this.spd * Math.cos(angle);
            this.sy += this.spd * Math.sin(angle);
        }
        
        this.Move(this.sx,this.sy);
        if((this.sx===this.gx) && (this.sy===this.gy)){
            this.spd=0;
            this.img.src="dance.gif";
        }
        }
        
        //512 = gif size/2
        Move(x,y) {
            this.img.style.left=x-512;
            this.img.style.top =y-512;
        }

        ClickCat(){
            score+=4*this.rar*Math.floor(this.spd+1)/this.size;
            canvas.removeChild(this.img);
            cats = cats.filter(cat => cat!== this);
            totalCats--;

        }

    }

    //spawn new cat
    setInterval(
    ()=>{
        if(totalCats<maxCat){
        let x = 0;
        let y = 0;
        let a = Math.random();
        if(a>0 && a<=0.25){
            x=-300;
            y=Math.random()*field;
        }
        else if(a>0.25 && a<=0.5){
            x=Math.random()*field;
            y=-300;
        }
        else if(a>0.5 && a<=0.75){
            x=Math.random()*field;
            y=field+300;
        }
        else{
            x=field+300;
            y=Math.random()*field;
        }

        let cat = new Cat(x,y,1+Math.random()*5,1+Math.floor(Math.random()*1.5),32+Math.floor(Math.random()*96));
        cats.push(cat);
        totalCats++;
        }
    },
    1000
    )

    //move cats time
    setInterval(
    ()=>{
        for(i=0;i<cats.length;i++){
            if(cats[i].spd>0){
            cats[i].Go();
            }
        }
        if(totalCats===maxCat)catnow.textContent=totalCats+"(максимум) друзей на экране";
        else catnow.textContent=totalCats+" друзей на экране";
    },
    20
    ); 