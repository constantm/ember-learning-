// #
// #  id                       :integer          not null, primary key
// #  name                     :string
// #  size                     :string
// #  created_at               :datetime
// #  updated_at               :datetime
// #  about                    :text
// #  countries                :integer
// #  hq                       :string
// #  revenue                  :string
// #  workforce                :integer
// #  logo_image_file_name     :string
// #  logo_image_content_type  :string
// #  logo_image_file_size     :string
// #  logo_image_updated_at    :datetime
// #  cover_image_file_name    :string
// #  cover_image_content_type :string
// #  cover_image_file_size    :string
// #  cover_image_updated_at   :datetime
// #  city                     :string
// #  country                  :string
// #  latitude                 :float
// #  longitude                :float
// #  country_code             :string
// #  slug                     :string
// #  failed_attempts          :integer
// #  logo_image_uploaded_by   :integer
// #  company_culture          :text
// #  logo_bg_colour           :string
// #  logo_image_bg            :string
// #  published_at             :datetime
// #  landing_page_logo        :string

const potenial_sizes = ['Large', 'Small'];

import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: (i) => `Company ${i}`,
  size: potenial_sizes.objectAt(Math.floor(Math.random() * potenial_sizes.length)),
  about: faker.lorem.paragraphs(4),
  hq: faker.address.country,
  countries: faker.random.number,
  revenue: faker.random.number,
  logo_image: faker.image.avatar,
	cover_image: '/images/cover.jpg',
	events: []
});