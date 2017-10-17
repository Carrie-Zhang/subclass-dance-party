describe('shuffleDancer', function() {

  var shuffleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shuffleDancer = new makeShuffleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shuffleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(shuffleDancer.$node, 'toggle');
    shuffleDancer.step();
    expect(shuffleDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shuffleDancer, 'step');
      expect(shuffleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(shuffleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shuffleDancer.step.callCount).to.be.equal(2);
    });
  });
});