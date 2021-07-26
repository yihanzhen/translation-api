const translator = require('@gcp-integ-nodejs/translation-app');

function translate(req, res){
	let srcLang = req.query.src || 'en-us';
	let tarLang = req.query.tar || 'es-us';
	let text = req.body.text || "no text is given!";

	translator.translateText(srcLang, tarLang, text).then(
		(result) => {
			res.status(200).send(result);
		}, 
		(error) => {
			res.status(404).send(error);
		});	
}

exports.translate = translate;

// translator.translateText('en-us', 'es-us', "good").then(
// 	(result) => {
// 		console.log(result);
// 	}, 
// 	(error) => {
// 		console.log(error);
// 	});