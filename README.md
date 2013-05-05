# gitlett
A nodejs module that wraps the git cli, and makes it easy to interact with your git repositories by using a familiar API

## Usage
```javascript
var repo = require('gitlett')('repo/.git'); // use the actual location of the repository, gitlett makes no inferences about the location of the repo

repo.readdir('HEAD', '', function(err, files){
	for (var i = 0; i < files.length; i++){
		console.log(files[i]);
	}
});

repo.createReadStream('HEAD', 'godzilla.txt').pipe(process.stdout);
```
<hr>

## Methods

###### #readdir(rev<sup>†</sup>, path, [opts, callback])
###### Given a revision and a path in the git repository, calls a callback with the signature of (err, files), where files is an array of contents of the given path

###### #createReadStream(rev<sup>†</sup>, path, [opts])
###### Given a revision and a path in the git repository, returns a stream of the gotten contents of the path

###### <sup>†</sup><sub>More information <a href="https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html">here</a> for usage of this argument</sub>
## Installation
`npm install gitlett`