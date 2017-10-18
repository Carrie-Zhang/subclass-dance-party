var makeShuffleDancer = function(left, right, timeBetweenSteps) {
  makeDancer.call(this, left, right, timeBetweenSteps);
  this.$node = $('<span class="dancer2" <img src = shuffler2.gif></span>');
  this.left = left;
  this.right = right;
  this.setPosition(this.left, this.right);
  this.slide = false;
};

makeShuffleDancer.prototype = Object.create(makeDancer.prototype);
makeShuffleDancer.prototype.constructor = makeShuffleDancer;

makeShuffleDancer.prototype.step = function() {  
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
  this.move();
};

makeShuffleDancer.prototype.move = function() {
  // console.log(this.slide);
  if (this.slide) {
    this.$node.animate({
      'marginLeft' : '+=50px'
    });
  } else {
    this.$node.animate({
      'marginLeft' : '-=50px'
    });
  } 
  this.slide = !this.slide;
};

makeShuffleDancer.prototype.lineUp = function(space) { 
  this.$node.css({"left" : "5% ", "top": space + "px", "position" : "absolute"});
};