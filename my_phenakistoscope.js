const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("crab" , "png");

}

function setup_layers(pScope){

  new PLayer(null, "#C2B280");  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(crab);
  layer1.mode( SWIRL(3) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(bird);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(water);
  layer3.mode( RING );
  layer3.set_boundary( 200, 1000 );
}

function crab(x, y, animation, pScope){
  
  scale(animation.frame*2); // makes bigger over time

  scale(0.1);
  rotate(-90);

  let crabY = animation.wave(2)*500;
  pScope.draw_image("crab",x,crabY);


}

function bird(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(34,139,34)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)

  rect(-20,-350,70,100,100) // .wave is a cosine wave btw

  rect(-10,-350-animation.wave()*50,50,60,100) // .wave is a cosine wave btw

}

function water(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;


  fill(255)
  rect(-300,-900-animation.wave()*100,800,20) // .wave is a cosine wave btw


  fill(14,135,204)
  rect(-400,-1100-animation.wave()*100,800,200) // .wave is a cosine wave btw

}