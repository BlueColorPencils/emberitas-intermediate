import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  favoriteColor: attr(),
  setName(newName){
  this.set('model.name', newName);
  this.get('model').save();
  },
  setColor(newColor){
  this.set('model.favoriteColor', newColor);
  this.get('model').save();
  this.alert('The model was saved');
}
});
