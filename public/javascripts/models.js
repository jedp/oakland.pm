// for template rendering in the views below
_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

var Event = Backbone.Model.extend({
  defaults: {
              description: "", 
            }
});

var EventView = Backbone.View.extend({
  model: Event,

  tagName: "li",

  className: "event",

  template: _.template( $('#event-template').html() ),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});

var EventCollection = Backbone.Collection.extend({
  model: Event
});

// ----------------------------------------------------------------------
// feed page

var EventsApplication = Backbone.Model.extend({
});

var EventsApplicationView = Backbone.View.extend({
  model: EventsApplication, 

  el: $('#application'),

  initialize: function() {
    _.bindAll(this, 'addOne', 'render');
  },

  addOne: function(event) {
    var view = new EventView({model:event});
    $(this.el).append(view.render().el);
  }
});

