import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.firstName();
  },
  favoriteColor(i) {
    return faker.list.random('red', 'yellow', 'blue', 'green', 'purple', 'pink')(i);
  }
});
