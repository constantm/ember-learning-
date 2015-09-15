import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: (i) => `Opportunity ${i}`,
  about: faker.lorem.sentences(10),
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