
let nx; let ny; let tm = 0; let kd = 0; let nw = 23; let nh = 23; let tn = 0;
let st = 0; let abt = 0; let snt = 0; let ant = 0; let gmt = 0; let ayt = 0;

function setup()
{
    if (windowWidth > 600) { createCanvas(windowWidth,windowHeight); }
    else { noCanvas(); } noCursor(); frameRate(60);

    rs  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    rm  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');
    ls  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    lm  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');
    us  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    um  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');
    ds  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    dm  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');
    dls = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    dlm = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');
    drs = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    drm = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');
    uls = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    ulm = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');
    urs = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/sp.gif');
    urm = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/st.gif');

    ex1  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex1.png');
    ex2  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex2.png');
    ex3  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex3.png');
    ex4  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex4.png');
    ex5  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex5.png');
    ex6  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex6.png');
    ex7  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex7.png');
    ex8  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex8.png');
    ex9  = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex9.png');
    ex10 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex10.png');
    ex11 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex11.png');
    ex12 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex12.png');
    ex13 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex13.png');
    ex14 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex14.png');
    ex15 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex15.png');
    ex16 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex16.png');
    ex17 = loadImage('https://raw.githubusercontent.com/jaelee083/sprite/main/ex17.png');
    expl = loadSound('https://raw.githubusercontent.com/jaelee083/sprite/main/expl.ogg');
}

function draw()
{
    let ww = windowWidth; let wh = windowHeight; tm += 1; clear();

    let about   = select('.about');   let snowcat    = select('.snowcat');
    let loops   = select('.loops');   let games      = select('.games');
    let mystery = select('.mystery'); let letterboxd = select('.letterboxd');
    let cow     = select('.cow');     let tree       = select('.tree');
    let tree2   = select('.tree2');   let n          = select('.n');
    let tree3   = select('.tree3');   let tree4      = select('.tree4');
    let tree5   = select('.tree5');   let right      = select('.right');
    let left    = select('.left');    let board      = select('.board');

    background(0,0,0,0); scale(3); noStroke(); imageMode(CENTER);

    // player spawn

    if (tm < 2) { nx = -20; ny = 162; }

    // player controls

    if (st <= 0)
    {
        if (keyIsDown(UP_ARROW))    { ny -= 1; }
        if (keyIsDown(DOWN_ARROW))  { ny += 1; }
        if (keyIsDown(LEFT_ARROW))  { nx += 1; }
        if (keyIsDown(RIGHT_ARROW)) { nx -= 1; }
    }

    // window boundaries

    if (nx > 161) { nx -= 1; } if (nx < -150) { nx += 1; }
    if (ny < 127) { ny += 1; } if (ny >  216) { ny -= 1; }

    if (nx < -22 && nx > -25 && ny < 135) { nx += 1; }
    if (nx > -55 && nx < -52 && ny < 135) { nx -= 1; }
    if (ny < 136 && ny > 133 && nx < -23 && nx > -54) { ny += 1; }

    if (ny < 203 && ny > 200 && nx < -23) { ny += 1; }
    if (ny > 188 && ny < 191 && nx < -23) { ny -= 1; }
    if (nx < -22 && nx > -25 && ny < 202 && ny > 189) { nx += 1; }

    if (ny < 202 && ny > 199 && nx > -7) { ny += 1; }
    if (ny > 183 && ny < 186 && nx > -7) { ny -= 1; }
    if (nx > -8 && nx < -5 && ny < 201 && ny > 184) { nx -= 1; }

    if (ny < 207 && ny > 204 && nx <  86 && nx >  38) { ny += 1; }
    if (nx >  37 && nx <  40 && ny < 206 && ny > 200) { nx -= 1; }
    if (nx <  87 && nx >  84 && ny < 206 && ny > 200) { nx += 1; }

    if (nx < -112 && ny < 195) { nx += 1; }
    if (nx >  116 && ny < 195) { nx -= 1; }

    // doors

    if (ny <= 127 && nx <=  93 && nx >=  77) { st = 1; abt += 1; tn += 1; }
    if (ny <= 127 && nx <=   8 && nx >=  -8) { st = 1; snt += 1; tn += 1; }
    if (ny <= 127 && nx <= -75 && nx >= -87) { st = 1; ant += 1; tn += 1; }

    if (ny <= 202 && ny >= 200 && nx <=  37 && nx >=  26) { st = 1; ayt += 1; tn += 1; }
    if (ny <= 202 && ny >= 200 && nx <= 119 && nx >= 104) { st = 1; gmt += 1; tn += 1; }

    // player image

    if (st <= 0) {
    switch (kd)
    {
      case 0:
    
        if (keyIsDown(UP_ARROW))
        { 
          if (keyIsDown(RIGHT_ARROW))
          { 
            imageMode(CENTER); 
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4; 
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          { 
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1; 
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          { 
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 6; 
          }

          else if (keyIsDown(LEFT_ARROW))
          { 
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          { 
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0; 
          }
        } 

        else if (keyIsDown(RIGHT_ARROW))
        { 
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2; 
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(dm,round(ww/6) - nx,ny,nw,nh);
        }
        
      break; case 1:
    
        if (keyIsDown(UP_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          {
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1;
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(drs,round(ww/6) - nx,ny,nw,nh);
            kd = 6;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }
        }

        else if (keyIsDown(RIGHT_ARROW))
        {
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2;
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(um,round(ww/6) - nx,ny,nw,nh);
        }
        
      break; case 2:
        
        if (keyIsDown(UP_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          {
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1;
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(drs,round(ww/6) - nx,ny,nw,nh);
            kd = 6;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }
        }

        else if (keyIsDown(RIGHT_ARROW))
        {
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2;
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(rm,round(ww/6) - nx,ny,nw,nh);
        }
        
      break; case 3:
        
        if (keyIsDown(UP_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          {
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1;
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(drs,round(ww/6) - nx,ny,nw,nh);
            kd = 6;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }
        }

        else if (keyIsDown(RIGHT_ARROW))
        {
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2;
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(lm,round(ww/6) - nx,ny,nw,nh);
        }
        
      break; case 4:
        
        if (keyIsDown(UP_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          {
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1;
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(drs,round(ww/6) - nx,ny,nw,nh);
            kd = 6;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }
        }

        else if (keyIsDown(RIGHT_ARROW))
        {
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2;
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(urm,round(ww/6) - nx,ny,nw,nh);
        }
        
      break; case 5:
        
        if (keyIsDown(UP_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          {
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1;
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(drs,round(ww/6) - nx,ny,nw,nh);
            kd = 6;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }
        }

        else if (keyIsDown(RIGHT_ARROW))
        {
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2;
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(ulm,round(ww/6) - nx,ny,nw,nh);
        }
        
      break; case 6:
        
        if (keyIsDown(UP_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          {
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1;
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(drs,round(ww/6) - nx,ny,nw,nh);
            kd = 6;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }
        }

        else if (keyIsDown(RIGHT_ARROW))
        {
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2;
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(drm,round(ww/6) - nx,ny,nw,nh);
        }
        
      break; case 7:
        
        if (keyIsDown(UP_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(urs,round(ww/6) - nx,ny,nw,nh);
            kd = 4;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(uls,round(ww/6) - nx,ny,nw,nh);
            kd = 5;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }

          else if (keyIsDown(UP_ARROW))
          {
            imageMode(CENTER);
            image(us,round(ww/6) - nx,ny,nw,nh);
            kd = 1;
          }
        }

        else if (keyIsDown(DOWN_ARROW))
        {
          if (keyIsDown(RIGHT_ARROW))
          {
            imageMode(CENTER);
            image(drs,round(ww/6) - nx,ny,nw,nh);
            kd = 6;
          }

          else if (keyIsDown(LEFT_ARROW))
          {
            imageMode(CENTER);
            image(dls,round(ww/6) - nx,ny,nw,nh);
            kd = 7;
          }

          else if (keyIsDown(DOWN_ARROW))
          {
            imageMode(CENTER);
            image(ds,round(ww/6) - nx,ny,nw,nh);
            kd = 0;
          }
        }

        else if (keyIsDown(RIGHT_ARROW))
        {
          imageMode(CENTER);
          image(rs,round(ww/6) - nx,ny,nw,nh);
          kd = 2;
        }

        else if (keyIsDown(LEFT_ARROW))
        {
          imageMode(CENTER);
          image(ls,round(ww/6) - nx,ny,nw,nh);
          kd = 3;
        }

        else
        {
          imageMode(CENTER);
          image(dlm,round(ww/6) - nx,ny,nw,nh);
        }
      
      break;
    }}

    // explosion

    push(); noSmooth();

    if (tn >= 1 && tn < 2)  { expl.play(); }

    if (tn >  0 && tn <=  5) { image(ex2, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn >  5 && tn <= 10) { image(ex3, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 10 && tn <= 15) { image(ex4, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 15 && tn <= 20) { image(ex5, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 20 && tn <= 25) { image(ex6, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 25 && tn <= 30) { image(ex7, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 30 && tn <= 35) { image(ex8, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 35 && tn <= 40) { image(ex9, round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 40 && tn <= 45) { image(ex10,round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 45 && tn <= 50) { image(ex11,round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 50 && tn <= 55) { image(ex12,round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 55 && tn <= 60) { image(ex13,round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 60 && tn <= 65) { image(ex14,round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 65 && tn <= 70) { image(ex15,round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 70 && tn <= 75) { image(ex16,round(ww/6) - nx + 1,ny - 7,53,75); }
    if (tn > 75 && tn <= 80) { image(ex17,round(ww/6) - nx + 1,ny - 7,53,75); }

    if (abt > 120 && abt <= 121) { window.location.href = 'about.html'; }
    if (snt > 120 && snt <= 121) { window.location.href = 'film.html'; }
    if (ant > 120 && ant <= 121) { window.location.href = 'animation.html'; }
    if (ayt >  80 && ayt <=  81) { window.open('https://youtu.be/qKjB1oUGqSI', '_blank'); }
    if (gmt >  80 && gmt <=  81) { window.open('https://smoltanuki.itch.io/', '_blank'); }

    pop();

    // map layers

    if (ny <= 153)
    {
        if (ny > 119) { about.style('z-index', '1'); }   if (ny <= 119) { about.style('z-index', '2'); }
        if (ny > 119) { snowcat.style('z-index', '1'); } if (ny <= 119) { snowcat.style('z-index', '2'); }
        if (ny > 122) { loops.style('z-index', '1'); }   if (ny <= 122) { loops.style('z-index', '2'); }
        if (ny > 128) { tree2.style('z-index', '1'); }   if (ny <= 128) { tree2.style('z-index', '2'); }
    }

    if (ny > 153)
    {
        if (ny > 196) { about.style('z-index', '1'); }   if (ny <= 196) { about.style('z-index', '2'); }
        if (ny > 196) { snowcat.style('z-index', '1'); } if (ny <= 196) { snowcat.style('z-index', '2'); }
        if (ny > 196) { loops.style('z-index', '1'); }   if (ny <= 196) { loops.style('z-index', '2'); }
        if (ny > 128) { tree2.style('z-index', '2'); }   if (ny <= 128) { tree2.style('z-index', '2'); }
    }

    if (ny > 195) { games.style('z-index', '1'); }      if (ny <= 195) { games.style('z-index', '2'); }
    if (ny > 194) { mystery.style('z-index', '1'); }    if (ny <= 194) { mystery.style('z-index', '2'); }
    if (ny > 197) { letterboxd.style('z-index', '1'); } if (ny <= 197) { letterboxd.style('z-index', '2'); }
    if (ny > 200) { cow.style('z-index', '1'); }        if (ny <= 200) { cow.style('z-index', '2'); }
    if (ny > 118) { tree.style('z-index', '1'); }       if (ny <= 118) { tree.style('z-index', '2'); }
    if (ny >  37) { n.style('z-index', '1'); }          if (ny <=  37) { n.style('z-index', '2'); }

    if (ny > 196) { tree3.style('z-index', '1'); } if (ny <= 196) { tree3.style('z-index', '2'); }
    if (ny > 196) { tree4.style('z-index', '1'); } if (ny <= 196) { tree4.style('z-index', '2'); }
    if (ny > 194) { tree5.style('z-index', '1'); } if (ny <= 194) { tree5.style('z-index', '2'); }
    if (ny > 196) { right.style('z-index', '1'); } if (ny <= 196) { right.style('z-index', '2'); }
    if (ny > 196) { left.style('z-index', '1'); }  if (ny <= 196) { left.style('z-index', '2'); }
    if (ny > 196) { board.style('z-index', '1'); } if (ny <= 196) { board.style('z-index', '2'); }

    // debug

    // fill(255); textSize(8); fill(50);
    // text(snt,5,12); text(tn,5,22);
}

function windowResized()
{
    resizeCanvas(windowWidth,windowHeight);
}

function hover()
{
    let board = select('.board');
    board.addClass('hidden');
}

function nohover()
{
    let board = select('.board');
    board.removeClass('hidden');
}

document.querySelector('.about').addEventListener('mouseover', hover);
document.querySelector('.about').addEventListener('mouseout', nohover);

document.querySelector('.snowcat').addEventListener('mouseover', hover);
document.querySelector('.snowcat').addEventListener('mouseout', nohover);

document.querySelector('.loops').addEventListener('mouseover', hover);
document.querySelector('.loops').addEventListener('mouseout', nohover);

document.querySelector('.mystery').addEventListener('mouseover', hover);
document.querySelector('.mystery').addEventListener('mouseout', nohover);

document.querySelector('.games').addEventListener('mouseover', hover);
document.querySelector('.games').addEventListener('mouseout', nohover);