Template.categories.Categories = function(){
    return Categories.find();
};
Template.categories.SubCategories = function(){
    return SubCategories.find({cat:this._id});
};