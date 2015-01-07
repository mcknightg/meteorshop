Template.products.helpers({
    'productlist':function(){
    return Products.find({catName:Session.get('category')});
    },
    'catnotselected':function(){
        return Session.equals('category',null);
    },
    'category':function(){
        return Session.get('category');
    }
}) 

Template.product.events({
    'click .addcart':function(evt,tmpl){
        var qty = tmpl.find('.prodqty').value;
        var product = this._id;
        var sessid = Meteor.default_connection._lastSessionId;
        Meteor.call('addToCart',qty,product,sessid);
    }
});
