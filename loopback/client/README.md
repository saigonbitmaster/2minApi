## Client

var LoopBackContext = require('loopback-context');

MyModel.myMethod = function(cb) {
  var ctx = LoopBackContext.getCurrentContext();
  var username = ctx && ctx.get('currentUser');
  console.log(username)
  ctx.set('foo', { bar: 'val' } );
}