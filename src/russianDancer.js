var makeRussianDancer = function(top, bottom, timeBetweenSteps) {
  makeDancer.call(this, top, bottom, timeBetweenSteps);
  this.top = top;
  this.bottom = bottom;
  this.$node = $('<span class="dancer1"></span>');
  this.setPosition(this.top, this.bottom);
  this.bouncer = false;
  this.small = true;
  this.$node.on('click', function() {
    if (this.small) {
      this.grow();
      this.small = !this.small;
    } else {
      this.shrink();
      this.small = !this.small;
    }
  }.bind(this));
};

makeRussianDancer.prototype = Object.create(makeDancer.prototype);
makeRussianDancer.prototype.constructor = makeRussianDancer;

makeRussianDancer.prototype.step = function() {  
  makeDancer.prototype.step.call(this);
  this.move();
};

makeRussianDancer.prototype.move = function() {
  if (this.bouncer) {
    this.$node.animate({
      'marginTop': '+=30px'
    });
  } else {
    this.$node.animate({
      'marginTop': '-=30px'
    });
  }
  this.bouncer = !this.bouncer;
};

makeRussianDancer.prototype.lineUp = function(space) { 
  console.log(space);
  this.$node.css({'bottom': '10%', 'top': '92%', 'left': space + 'px', 'position': 'absolute'});
};

makeRussianDancer.prototype.grow = function() {
  this.$node.css({'border': '60px solid blue'});
  this.$node.css({'border-radius': '60px'});
};
makeRussianDancer.prototype.shrink = function() {
  this.$node.css({'border': '10px solid blue'});
  this.$node.css({'border-radius': '10px'});
};
