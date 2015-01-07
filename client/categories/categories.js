Template.categories.helpers({
	'Categories':function(){
	    return Categories.find();
	
	},
	'SubCategories':function(){
		return SubCategories.find({cat:this._id});
	}
}) 
