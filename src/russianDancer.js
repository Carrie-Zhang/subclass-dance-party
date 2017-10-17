var makeRussianDancer = function(top, bottom, timeBetweenSteps) {
  makeDancer.call(this, top, bottom, timeBetweenSteps);
  this.top = top;
  this.bottom = bottom;
  this.$node = $('<span class="dancer1"></span>');
  this.setPosition(this.top, this.bottom);
  this.bouncer = false;
};

makeRussianDancer.prototype = Object.create(makeDancer.prototype);
makeRussianDancer.prototype.constructor = makeRussianDancer;

makeRussianDancer.prototype.step = function() {  
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
  this.move();
};

makeRussianDancer.prototype.move = function(top, bottom) {
  //var border = {border: 10px solid green}
  // var size = this.bottom;
  // this.bottom = this.bottom + 100
  // //this.$node.css({"border" : size +"px solid green" });
  // this.$node.css({"bottom" : size });
  console.log(this.bouncer);
  if(this.bouncer) {
    this.$node.animate({
      'marginTop' : '+=30px'
    });
  } else {
    this.$node.animate({
      'marginTop' : '-=30px'
    });
  }
  this.bouncer = !this.bouncer;
};