var gitlett = require('../index.js')('gitrepo/.git');

describe('gitlett', function(){

	describe('#readdir()', function(){
		it('should read through the given path and return an array of its contents', function(done){
			gitlett.readdir('HEAD', '', function(err, files){
				if (err) return done(err);
				if (Object.prototype.toString.call(files) === '[object Array]'){
					done();
				}
				else{
					done(new Error('Returned value was not an array ' + Object.prototype.toString.call(files)));
				}
			});
		});
	});

	describe('#createReadStream()', function(){
		it('should create a readable stream from an object:path', function(done){
			var stream = gitlett.createReadStream('HEAD', 'test.txt');
			if (stream.readable){
				done();
			}
			else{
				done(new Error('Did not generate stream'));
			}
		});
	});

});