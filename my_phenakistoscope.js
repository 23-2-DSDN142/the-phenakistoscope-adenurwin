const SLICE_COUNT = 14;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){
  new PLayer(null, "#D9BEA1");  //lets us draw the whole circle background, ignoring the boundaries
  var layer1 = new PLayer(crab);
  layer1.mode(SWIRL(2));
  layer1.set_boundary(200,1000);

  var layer2 = new PLayer(bird);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(water);
  layer3.mode( RING );
  layer3.set_boundary( 200, 1000 );
}

function crab(x, y, animation, pScope){
  scale(animation.frame*2); // makes bigger over time
  scale(.1);
  rotate(-90);
  fill("red")
  let crabY = animation.wave(2)*500;
  rect(x,crabY,1000,800,400);
  arc(x+1000,crabY,500,400,10,260);
  arc(x,crabY,500,400,280,170);
  rect(x+300,crabY-200,100,200,400);
  rect(x+600,crabY-200,100,200,400);
}

function bird(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360/SLICE_COUNT)/2;
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  fill("#50C878");
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  fill(255)
  rect(-20,-350,70,100,100);
  rect(-10,-350-animation.wave()*50,50,60,100);
  fill("orange");
  rect(x+5,-360-animation.wave()*50,20,30,100);
}

function water(x, y, animation, pScope){
  noStroke();
  // wave back
  fill("#255E65");
  rect(-400,-1000-animation.wave()*100,800,200,200);
  // wave mid
  fill("#3591A0");
  rect(-300,-850-animation.wave()*150,800,150,200,200,0,0);
  // wave front
  fill(255);
  rect(-300,-700-animation.wave()*150,800,20);
}