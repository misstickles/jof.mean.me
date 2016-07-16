

Create API from GPX file
	for each suitable file, loop
	return {lat, long, alt}


## TODO
Write up blog on async maps

sort out menu / css

add new sidebar navigation directive

implement mongoDB
	host it somewhere!

fix the map API!

start / finish markers

mile markers

add weather

add dove

setup gulp
	merge and minify js
	minify css (already built from less)
	js load order
	gulp-concat
	gzipping

fix ie

setup node debugging

filter on the tags

about page

consider:
	autoprefixer https://www.npmjs.com/package/gulp-autoprefixer for css prefixes

	https://www.browsersync.io/

	eslint (jshint, jscs)
		and in gulp



## done
internal # links

scroll

Create details for each map (json on API layer, as one day to be in db)

add map altitude charts




git status

git add .

git commit -m "checkin comment"

git push origin master


update to Azure...
	(move maps to bin\data\maps)
	use ../public/data/maps directory in app_api\controllers\maps.js
		restart and ctrl+f5




jquery.easing does not work from npm.  Add file from github, https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.min.js, to app_client\lib

angular-route is not available via npm.  Add file to app_client\lib