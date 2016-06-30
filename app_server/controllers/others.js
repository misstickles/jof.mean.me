/* GET about page */
module.exports.about = function(req, res) {
	res.render('about', { 
		title: 'About - What it is.  Innit.',
		pageHeader: {
			title: 'About',
			strapline: 'How many beans make 5?'
		},
		stuff: [{
			name: 'rob', age: '50', hobbies: ['guitar', 'sleeping', 'eating']
		}, {
			name: 'jo', age: '28', hobbies: ['coding', 'sleeping', 'ringing', 'trains']
		}, {
			name: 'steve', age: '46', hobbies: ['moaning', 'snogging']
		}]
	});
};