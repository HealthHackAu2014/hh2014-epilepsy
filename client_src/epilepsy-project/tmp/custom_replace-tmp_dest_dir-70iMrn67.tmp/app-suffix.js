/* jshint ignore:start */

define('epilepsy-project/config/environment', ['ember'], function(Ember) {
  var metaName = 'epilepsy-project/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
});

if (runningTests) {
  require('epilepsy-project/tests/test-helper');
} else {
  require('epilepsy-project/app')['default'].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
