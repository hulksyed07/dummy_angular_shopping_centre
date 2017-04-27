angular.module('Angello.Admin').controller('TypeController', function(TypeModel){
	var typeCtrl = this;

	typeCtrl.types = {};
	typeCtrl.currentType = null;
	typeCtrl.editedType = {};

	typeCtrl.getAllTypes = function(){
		TypeModel.getTypes()
			.then(function(result){
				console.log('inside type ctrl');
				console.log(result);
				typeCtrl.types = result; 
			});
	};

	typeCtrl.getAllTypes();

	typeCtrl.setCurrentType = function(type) {
		typeCtrl.currentType = type;
		console.log('currentType: '+type);
		typeCtrl.editedType = angular.copy(typeCtrl.currentType);

	}

	typeCtrl.createType = function() {
		TypeModel.createType(typeCtrl.editedType)
		.then(function(result){
			typeCtrl.types = result;
		});
		typeCtrl.resetForm();
	}

	typeCtrl.updateType = function() {
		TypeModel.updateType(typeCtrl.editedType)
		.then(function(result){
			typeCtrl.types = result;
		});
		typeCtrl.resetForm();
	}

	typeCtrl.deleteType = function() {
		TypeModel.deleteType(typeCtrl.editedType._id)
		.then(function(result){
			typeCtrl.types = result;
		});
		typeCtrl.resetForm();
	}

	typeCtrl.updateCancel = function() {
		typeCtrl.resetForm();
	}

	typeCtrl.resetForm = function() {
		typeCtrl.currentType = null;
		typeCtrl.editedType = {};
	}

	

});