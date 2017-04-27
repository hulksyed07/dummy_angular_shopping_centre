var Type = require('../models/TypeModel.js');

module.exports = function(app){
	app.get('/api/types', function(req, res){
		Type.find(function(err, types){
			if (err)
				res.send(err);

			res.json(types);
		});
	});

	app.post('/api/types', function(req, res){
		Type.create(req.body, function(err, type){
			if (err)
				res.send(err);

			Type.find(function(err, types){
				if (err)
					res.send(err);

				res.json(types);
			})
		});
	});

	app.put('/api/types/:type_id', function(req, res){
		Type.update({ _id: req.params.type_id}, req.body, function(err, type){
			if (err)
				res.send(err);

			Type.find(function(err, types){
				if (err)
					res.send(err);

				res.json(types);
			})
		});
	});

	app.delete('/api/types/:type_id', function(req, res){
		Type.remove({ _id: req.params.type_id}, function(err, type){
			if (err)
				res.send(err);

			Type.find(function(err, types){
				if (err)
					res.send(err);

				res.json(types);
			})
		});
	});
}