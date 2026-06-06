import { MenuItem, FundraiserStatus, Testimonial } from './types';

import heroImg from './assets/images/evies_cafe_hero_1780702659354.png';
import runClubImg from './assets/images/evies_run_club_1780702676583.png';
import logoImg from './assets/images/evies_cherub_logo_perfect_1780705187458.png';

export const IMAGES = {
  hero: heroImg,
  runClub: runClubImg,
  logo: '/api/logo',
  logoPlaceholder: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=200&h=200',
};

export const MENU_ITEMS: MenuItem[] = [
  // --- FOOD CATEGORY ---
  {
    id: 'f1',
    name: "The Evie's Reuben",
    price: 19.00,
    description: "House-cured grass-fed beef brisket (completely sulfite-free & nitrate-free), wild ferment lacto-sauerkraut, aged Swiss cheese, and our house-made special sauce, toasted to golden perfection on local artisanal wild sourdough rye. A classic masterpiece rebuilt for premium nutrition.",
    category: 'food',
    subCategory: 'toasties',
    tags: ['Sulfite-Free', 'Additive-Free', 'Organic Meat'],
    isPremium: true
  },
  {
    id: 'f2',
    name: "Truffled Mushroom & Thyme Toastie",
    price: 17.50,
    description: "Medley of seasonal forest mushrooms sautéed in a garlic olive oil infusion, melted creamy provolone, aromatic fresh thyme, and cold-pressed black truffle butter, pressed crisp on toasted local sprouted-grain sourdough.",
    category: 'food',
    subCategory: 'toasties',
    tags: ['Vegetarian', 'Sulfite-Free', 'Additive-Free'],
    isPremium: true
  },
  {
    id: 'f3',
    name: "Free-Range Chicken & Pesto Toastie",
    price: 18.50,
    description: "Slow-poached free-range chicken breast, vibrant fragrant house macadamia & wild herb pesto, organic baby spinach, and sliced heirloom organic vine tomatoes, served on toasted artisanal organic charcoal wheat sourdough.",
    category: 'food',
    subCategory: 'toasties',
    tags: ['Sulfite-Free', 'Additive-Free', 'High Protein'],
    isPremium: false
  },
  {
    id: 'f4',
    name: "Gut-Health Wellness Bowl",
    price: 19.50,
    description: "A prebiotic and probiotic powerhouse of organic wild black rice, house-crafted lacto-fermented ginger cabbage kimchi, ripe avocado, warm ginger-miso massaged kale, roasted honey sweet potato, and a soft pasture-raised egg yolk, dressed in organic ginger tahini cream.",
    category: 'food',
    subCategory: 'bowls',
    tags: ['Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Organic', 'Probiotic'],
    isPremium: true
  },
  {
    id: 'f5',
    name: "Heirloom Avocado on Sourdough",
    price: 18.00,
    description: "Coarse-smashed ripe Hass avocado, whipped premium organic goat fetta, popping native Australian finger lime pearls, toasted house za'atar blend, and fresh organic micro-greens layered on warm grilled wild sourdough.",
    category: 'food',
    subCategory: 'bowls',
    tags: ['Vegetarian', 'Sulfite-Free', 'Native Botanicals'],
    isPremium: false
  },
  {
    id: 'f6',
    name: "Chilli Scrambled Pasture Eggs",
    price: 17.50,
    description: "Silky scrambled organic pasture-raised eggs, house-made natural crispy chilli condiment (no additives), fresh coriander sprigs, and crispy toasted eschalots folded beautifully on grilled sourdough.",
    category: 'food',
    subCategory: 'bowls',
    tags: ['Vegetarian', 'Additive-Free', 'Pasture-Raised'],
    isPremium: false
  },
  {
    id: 'f7',
    name: "Native Berry & Macadamia Granola",
    price: 16.00,
    description: "Toasted gluten-free organic oat granola, roasted native Australian macadamias, hand-foraged Davidson plum and sweet lilly pilly berry compote, finished with a generous dollop of probiotic-rich double-fermented coconut kefir yogurt.",
    category: 'food',
    subCategory: 'sweet',
    tags: ['Gluten-Free', 'Vegan', 'Dairy-Free', 'Antioxidant', 'Probiotic'],
    isPremium: true
  },
  {
    id: 'f8',
    name: "Sourdough Banana Bread",
    price: 9.00,
    description: "Signature moist banana bread made with active organic sourdough starter, toasted on order and schmeared with whipped cold-pressed raw honey-butter and crunchy flaked pink Murray-river salt.",
    category: 'food',
    subCategory: 'sweet',
    tags: ['Vegetarian', 'Lacto-Fermented', 'House-Made'],
    isPremium: false
  },

  // --- DRINK CATEGORY ---
  {
    id: 'd1',
    name: "Specialty Synesso Espresso",
    price: 4.50,
    description: "Single-origin seasonal beans sustainably harvested and custom-roasted right here in Sydney, precisely extracted on our high-performance Synesso MVP. True specialty grade (Flat White, Latte, Cappuccino, Double Espresso).",
    category: 'drink',
    subCategory: 'coffee',
    tags: ['Sulfite-Free', 'Additive-Free', 'Organic Beans'],
    isPremium: false
  },
  {
    id: 'd2',
    name: "Organic Ceremonial Uji Matcha",
    price: 6.50,
    description: "Stone-ground ceremonial Uji matcha whisked traditionally at 80°C to activate L-Theanine. Served over ice or warm, blended with house-made hazelnut milk or rich, creamy organic oat milk.",
    category: 'drink',
    subCategory: 'wellness',
    tags: ['Vegan', 'Gluten-Free', 'Superfood'],
    isPremium: true
  },
  {
    id: 'd3',
    name: "Drip Brew / Cold Brew",
    price: 5.50,
    description: "12-hour slow-dripped single origin filter coffee, showcasing complex tasting profiles of bright citrus, jasmine, or stone fruits. Clean, elegant, and low in acidity.",
    category: 'drink',
    subCategory: 'coffee',
    tags: ['Sulfite-Free', 'Additive-Free', 'Pure Filter'],
    isPremium: false
  },
  {
    id: 'd4',
    name: "Lacto-Fermented House Kombucha",
    price: 7.50,
    description: "Naturally effervescent green tea kombucha brewed on-site in small oak casks. Wild-yeast fermented with organic seasonal local botanicals. Unpasteurized and packed with gut-healthy enzymes.",
    category: 'drink',
    subCategory: 'wellness',
    tags: ['Vegan', 'Gluten-Free', 'Probiotic', 'House-Brewed'],
    isPremium: true
  }
];

export const FUNDRAISER_DATA: FundraiserStatus = {
  target: 750,
  raised: 640.98,
  donorsCount: 7,
  daysLeft: 2 // Assuming completion on Sun 7 June 2026, relative to current simulation date. Matches current local simulation time of June 5, 2026!
};

export const FUNDRAISER_DONATIONS = [
  {
    id: 'd1',
    donor: 'Andrew',
    amount: 53.85,
    message: 'Go smash it Luke!',
    time: '5 days ago',
    response: 'Thanks for the donation and the KMs in the lead up!'
  },
  {
    id: 'd2',
    donor: 'Adam',
    amount: 32.20,
    message: '',
    time: '23 days ago',
    response: 'Thanks for the donation! Very much appreciated'
  },
  {
    id: 'd3',
    donor: "Evie’s Bday Fundraiser",
    amount: 354.48,
    message: 'A great way to spend a birthday raising for a good cause.',
    time: '2 months ago',
    response: ''
  },
  {
    id: 'd4',
    donor: 'Becca',
    amount: 42.75,
    message: 'Go smash it 💪🏼 Thanks for everything at EVIES 🫶🏼',
    time: '2 months ago',
    response: 'Thank you so much Becca!'
  },
  {
    id: 'd5',
    donor: 'JPT',
    amount: 53.85,
    message: 'Good Luck Guys 🎉',
    time: '2 months ago',
    response: "Thank you for the donation, it's really appreciated!"
  }
];

export const FUNDRAISER_ACHIEVEMENTS = [
  { id: 'a1', label: 'Received a donation', unlocked: true, color: 'bg-emerald-500' },
  { id: 'a2', label: 'Donated to myself', unlocked: true, color: 'bg-purple-500' },
  { id: 'a3', label: 'Added profile pic', unlocked: true, color: 'bg-blue-500' },
  { id: 'a4', label: 'Posted an update', unlocked: true, color: 'bg-indigo-500' },
  { id: 'a5', label: 'Fundraised $100', unlocked: true, color: 'bg-pink-500' },
  { id: 'a6', label: 'Updated my story', unlocked: true, color: 'bg-rose-500' },
  { id: 'a7', label: 'Shared my page', unlocked: true, color: 'bg-amber-500' },
  { id: 'a8', label: 'Reached my target', unlocked: false, color: 'bg-gray-400' }
];

export const FUNDRAISER_UPDATES = [
  {
    id: 'u1',
    title: 'Final ERC before Brissy mara',
    description: 'May 2026 OH edition. Last big group run before heading up northbound!',
    time: '2 days ago',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'u2',
    title: 'ERC: Centennial Park 7KM',
    description: 'Beautiful crisp autumn morning keeping the legs moving at Centennial Park.',
    time: '2 months ago',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 'u3',
    title: 'Evie’s Run Club End of March 📈',
    description: 'March stats are in! Total KMs tracked are rising week-on-week.',
    time: '2 months ago',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: 't1',
    author: "Eloise Roberts",
    role: "Redfern Resident & Nutritionist",
    text: "As someone who is highly sensitive to food preservatives, Evie's is an absolute sanctuary. Knowing that their reuben and pastries are entirely sulfite-free makes dining out a joy again! The sourdough is sensational.",
    rating: 5
  },
  {
    id: 't2',
    author: "Marcus Vance",
    role: "Evie's Run Club Captain",
    text: "There is nothing better than crossing the finish line on our Sunday morning runs and stepping straight into Evie's for a gut-health bowl and cold brew. The charity support for The Kids' Cancer Project is incredibly inspiring.",
    rating: 5
  },
  {
    id: 't3',
    author: "Sarah Jenkins",
    role: "Specialty Coffee Enthusiast",
    text: "Easily some of the best espresso shots in Sydney. Sourced sustainably, expertly extracted, and served by a team that genuinely cares about hospitality. A beautiful interior, too!",
    rating: 5
  }
];

export const CONTACT_INFO = {
  address: "688 Bourke Street, Redfern NSW 2016, Sydney, Australia",
  coordinates: { lat: -33.892701, lng: 151.2144219 },
  phone: "(+61) 431 560 108",
  email: "Hello@eviesredfern.au",
  mapsLink: "https://www.google.com/maps/place/Evie's+Redfern/@-33.892701,151.2144219,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12b1e1248516b3:0xbc528c71c5cd3a81!8m2!3d-33.892701!4d151.2144219!16s%2Fg%2F11crwgmk9c!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D",
  fundraiserLink: "https://bmf26.grassrootz.com/the-kids-cancer-project/evie-s-redfern-fundraiser?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnHSGcwtbMe4pfBytMN-Lky3Vy4u2CQvdUNbxQvTNQErgmlJM0tPDMZlKzs6w_aem_qlcDOgnoBBCtzTrwAnWvww&utm_id=97760_v0_s00_e0_tv3",
  instagramLink: "https://instagram.com/eviesredfern"
};
