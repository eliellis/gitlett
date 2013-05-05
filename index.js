var run = require('comandante');

function Gitlett(opts){
	if (typeof opts === 'string'){
		this.repo = opts;
		opts = {};
	}
	return this;
}

Gitlett.prototype.createReadStream = function(ref, path, opts){
	opts = (opts) ? opts : {};
	return run('git', ['show', ref + ':' + path], {cwd: opts.cwd || this.repo});
};

Gitlett.prototype.readdir = function(ref, path, opts, cb){
	if (typeof opts === 'function'){
		cb = opts;
		opts = {};
	}

	var files = [];
	var gitProc = run('git', ['show', ref + ':' + path], {cwd: opts.cwd || this.repo});

	gitProc.on('data', function(data){
		var path = data.toString().split(/\n/g).slice(1);
		for (var i = 0; i < path.length; i++) {
			if (path[i].length > 0){
				files.push(path[i]);
			}
		}
	});

	gitProc.on('end', function(data){
		if (data) {
			var path = data.toString().split(/\n/g).slice(1);
			for (var i = 0; i < path.length; i++) {
				if (path[i].length > 0){
					files.push(path[i]);
				}
			}
		}
		cb(null, files);
	});
};

module.exports = function(opts){
	return new Gitlett(opts);
};