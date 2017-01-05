exports.registerRoute = function (hook_name, args, cb) {
  args.app.get('/today', function(req, res) {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var padName = today.getFullYear()+'-'+(month < 10 ? '0' : '')+month+'-'+(day < 10 ? '0' : '')+day;

    // redirect to today pad
    res.writeHead(302, {
          'Location': '/p/'+padName
    });
    res.end();
  });
};

