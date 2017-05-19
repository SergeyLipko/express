const express = require('express');

const findModel = (model, findMethod) => req => {
	return model.findMethod(req, (err, item) => {

	})
}

function notesRouter(model) {
	const router = express.Router();

	router.route('/')
		.get((req, res, next) => {
		    model.find((err, notes) => {
      			res.json(notes);
    		});		
		})

		.post((req, res, next) => {
	    	new model(req.body).save(() => {
				res.json({ message: 'Note created!'});
      		});
		})

		.delete((req, res, next) => {
			model.remove({}, () => {
				res.json('All notes have been removed');
			})
		});

	router.route('/:id')
		.get((req, res, next) => {
			model.findById(req.params.id, (err, note) => {
				res.json(note)
			})
		})

		.delete((req, res, next) => {
			model.findByIdAndRemove(req.params.id, (err, note) => {
				if (note) {
					res.json(`Note with name --${note.name}-- have been removed`)
				}

				if (!note) {
					res.json('Record does not exist');
				}
			})
		})

	// find note by User ID 
	router.route('/:user_id')
		.get((req, res, next) => {
			model.find({ userId: req.params.user_id }, (err, note) => {
				res.json(note)
			})
		})

	
	router.route('/name/:name')
		.get((req, res, next) => {
			model.findOne({ name: req.params.name }, (err, note) => {
				res.json(note)
			})
		})


	return router;
}



module.exports = notesRouter;





// const notes = [
// 	{ name: 'Mars', text: 'Mars note' }, 
// 	{ name: 'Earth', text: 'Earth note' }, 
// 	{ name: 'Jupiter', text: 'Jupiter note' }
// ];

// const setId = collection => {
// 	return collection.map(i => Object.assign(i, { id: v4() }));
// }

// const updateCollection = collection => data => {
// 	if (Array.isArray(collection)) {
// 		return collection = [ ...collection, data ];
// 	}
// } 

// const updateNotes = updateCollection(notes);

// router.route('/')
// 	.get((req, res, next) => {
// 		res.send(notes);		
// 	})

// 	.post((req, res, next) => {
// 		res.send(setId(updateNotes(req.body)));	
// 	})

