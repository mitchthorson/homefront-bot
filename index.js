var page = require('webpage').create();

var url = 'http://www.usatoday.com';
var outputDIR = 'output/';

var time = new Date();
var timestamp = time.getTime();

var viewportSize = {
    width: 1440,
    height: 900
};

page.open(url, function() {
    page.viewportSize = viewportSize;
    page.render(outputDIR + timestamp + '_usat_homefront.png');
    phantom.exit();
});
