import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Cristal',
  color: 'green',
  colorStyle: Ember.computed('color', function() {
    var color = CSS.escape(this.get('color'));
    return Ember.String.htmlSafe("color: " + color);
  }),
  actions: {
    updateName(newName){
    this.set('name', newName);
    },
    setColor(newColor){
       this.set('color', newColor);
   }
  },
  someInformation: Ember.computed('name', 'color', function(){
    return 'Your name is ' + this.get('name') + ' and your favorite color is ' + this.get('color');
  })
});
