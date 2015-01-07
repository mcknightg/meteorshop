Session.setDefault('category', null);
Router.configure({
    layoutTemplate:'layout',
    yieldTemplates:{
        'products':{to:'products'},
        'cart':{to:'cart'},
        'categories':{to:'categories'}
    }
});
Router.map(function(){
    this.route('/','layout');
    this.route('products', {
        layoutTemplate:'layout',
        path:'/:name',
        data: function() {
            console.log(this.params.name);
            Session.set('category',this.params.name);
        },
        template:'layout'
    });
});
Template.registerHelper('currency', function(num){
  return '$' + Number(num).toFixed(2);
});