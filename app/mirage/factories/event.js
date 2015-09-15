import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: (i) => `Event ${i}`,
  from_date: faker.date.future,                              // numbers
  to_date: faker.date.future,                           // booleans
  location: faker.address.city,
  latitude: faker.address.latitude,
  longitude: faker.address.longitude,
  company: null
  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // }
});

// #  name       :string
// #  from_date  :datetime
// #  to_date    :datetime
// #  location   :string
// #  company_id :integer
// #  latitude   :float
// #  longitude  :float
// #  created_at :datetime
// #  updated_at :datetime