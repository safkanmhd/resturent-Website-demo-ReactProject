import images from './images';

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "1500LKR",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "2200LKR",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "2000LKR",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "1200LKR",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "500LKR",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '400LKR',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '250LKR',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '150LKR',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '900LKR',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '1100LKR',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
