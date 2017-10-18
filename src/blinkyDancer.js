// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = makeDancer.prototype.step.call(this);
  this.spacer = 10;
  this.small = false;
  this.size = 10;
  this.$node.on('mouseover', function() {
    if (this.small) {
      this.grow();
      this.small = !this.small;
    } else {
      this.shrink();
      this.small = !this.small;
    }
  }.bind(this));
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {  
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  this.changeColor();
};

makeBlinkyDancer.prototype.lineUp = function(space) { 
  this.$node.css({"right" : "2%", "left" : "98%", "top": space + "px", "position" : "absolute"});
};

makeBlinkyDancer.prototype.changeColor = function() {
  var colors = ['#FF0000', '#3cb371', '#4B0082', '#8B00FF', '#ffffff'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  this.$node.css({"border": this.size + "px solid " + randomColor});
};

makeBlinkyDancer.prototype.grow = function() {
  this.size = 60;
  // console.log('click event');
  this.$node.css({'border': this.size + 'px solid'});
  this.$node.css({'border-radius': this.size + 'px'});
};

makeBlinkyDancer.prototype.shrink = function() {
  this.size = 10;
  this.$node.css({'border': this.size + 'px solid'});
  this.$node.css({'border-radius': this.size + 'px'});
};