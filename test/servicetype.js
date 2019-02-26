
describe('IntelliscanAdmin', function () {

  before(function (browser, done) {
    // runs before all tests in this block
    done();
  });

  beforeEach(function (browser, done) {
    // runs before each test in this block
    done();
  });

  it('Services', function (browser, done) {
    browser.pause(1000);
    browser.init();
    browser.expect.element('.nav-link').to.be.visible;
    browser.click('.nav-link');
    browser.pause(1000);
    
  });

  it('home page', function (browser) {
    browser.init();
    browser.expect.element('.header-left-section').to.be.visible;
    browser.click('.header-left-section');
    browser.pause(1000)
    browser.expect.element('.video-paly-icon').to.be.visible;
    browser.click('.video-paly-icon');
    browser.expect.element('.video-controls').to.be.visible;
    browser.click('.video-controls');
    browser.pause(10000)
    browser.expect.element('.close-icon').to.be.visible;
    browser.click('.close-icon');
    browser.pause(100);
  });

it('start quiz',function(browser,done){
  browser.init();
    browser.expect.element('.header-left-section').to.be.visible;
    browser.click('.header-left-section');
  browser.expect.element('.join-button').to.be.visible;
  browser.click('.join-button');
  browser.pause(1000);
  browser.expect.element('.form-group').to.be.visible;
  browser.setValue('.form-group','srikanth');
  browser.expect.element('.fill').to.be.visible;
  browser.setValue('input[name=email]','srikanth@divami.com');
  browser.pause(1000);
  browser.expect.element('.submit-button').to.be.visible;
  browser.click('.submit-button');
  browser.pause(1000);
  browser.end();
  // browser.expect.element('.radio-sections').to.be.visible;
  // browser.click('input[type=radio]');
  // browser.pause(1000);
  // browser.expect.element('.close-button-block tab-2').to.be.visible;
  // browser.click('.close-button-block tab-2');
  // browser.pause(1000);

})
  it('Areas of expertise', function (browser) {
    browser.init();
    browser.expect.element('.header-left-section').to.be.visible;
    browser.click('.header-left-section');
    browser.expect.element('.neurofeedback-is-it-for-logo').to.be.visible;
    browser.click('.neurofeedback-is-it-for-logo');
    browser.expect.element('.read-more-block').to.be.visible;
    browser.click('.read-more-block');
    browser.pause(100);
   
   
    
  });

  it('testimonials',function(browser,done){
    browser.init();
    browser.expect.element('.testimonials-section').to.be.visible;
    browser.click('.testimonials-section');
    browser.pause(1000);
    browser.expect.element('#slick-slide-control32').to.be.visible;
    browser.click('#slick-slide-control32');
    browser.pause(100);
  })


  it('Peak performance', function (browser) {
    browser.init();
    browser.expect.element('.header-left-section').to.be.visible;
    browser.click('.header-left-section');
    browser.expect.element('.learnmore-neurofeedback-section').to.be.visible;
    browser.click('.learnmore-neurofeedback-section');
    browser.pause(100);    
    browser.expect.element('a[href="https://doi.org/10.1038/nrn.2016.164"]').to.be.visible;
    browser.click('a[href="https://doi.org/10.1038/nrn.2016.164"]');
    browser.pause(1000);
    browser.end();
    
  });



    it('Testimonials',function(browser,done){
      browser.init();
      browser.expect.element('.header-left-section').to.be.visible;
    browser.click('.header-left-section');
    browser.expect.element('.technology_used_by-section').to.be.visible;
    browser.click('.technology_used_by-section');
    browser.pause(1000);
    browser.expect.element('#slick-slide-control12').to.be.visible;
    browser.click('#slick-slide-control12');
    browser.pause(100);
    browser.expect.element('.address-block').to.be.visible;
    browser.click('.address-block');
    browser.pause(1000);
    browser.expect.element('a[href*="http://demo.divami.com/evolve/faqs"]').to.be.visible;
    browser.click('a[href*="http://demo.divami.com/evolve/faqs"]');
    browser.pause(1000);
    browser.expect.element('.add').to.be.visible;
    browser.click('.add');
    browser.pause(1000);
    browser.expect.element('.minus').to.be.visible;
    browser.click('.minus');
    browser.pause(1000);
    browser.expect.element('.divami-logo').to.be.visible;
    browser.click('.divami-logo');
    browser.pause(10000);
    

    });

  
   
});
