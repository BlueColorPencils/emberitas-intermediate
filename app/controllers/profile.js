import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Cristal',
  color: Ember.computed.readOnly('model.favoriteColor'),
  colorStyle: Ember.computed('model.favoriteColor', function() {
    var color = CSS.escape(this.get('model.favoriteColor'));
    return Ember.String.htmlSafe("color: " + color);
  }),
  actions: {
    setName(newName){
      this.set('model.name', newName);
    },
    setColor(newColor){
      this.set('model.favoriteColor', newColor);
      this.get('model').save().then(
        // fulfilled
        function() {
          alert('Promise Fulfilled - The model was saved.');
        },
        // rejected
        function() {
          alert('Promise Rejected - The model was not saved.');
        }
      )
    }
  },
  someInformation: Ember.computed('model.{name,favoriteColor}', function(){
    return 'Your name is ' + this.get('model.name') + ' and your favorite color is ' + this.get('model.favoriteColor');
  })
});
