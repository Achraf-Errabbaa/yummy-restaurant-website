import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from "../constant/images";

const menuCategories = [
  { id: 1, name: 'Appetizers', key: 'appetizers' },
  { id: 2, name: 'Main Dishes', key: 'mainDishes' },
  { id: 3, name: 'Desserts', key: 'desserts' },
  { id: 4, name: 'Drinks', key: 'drinks' },
];

const menuItems = {
  appetizers: [
    { id: 1, name: 'Bruschetta', price: 8.99, description: 'Toasted bread with tomatoes and herbs', image: images.bruschetta },
    { id: 2, name: 'Caprese Salad', price: 9.99, description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze', image: images.capreseSalad },
    { id: 3, name: 'Arancini', price: 7.99, description: 'Crispy risotto balls filled with mozzarella and peas', image: images.arancini },
    { id: 4, name: 'Antipasto Platter', price: 12.99, description: 'Assortment of cured meats, cheeses, and marinated vegetables', image: images.antipastoPlatter },
  ],
  mainDishes: [
    { id: 5, name: 'Lasagna Bolognese', price: 14.99, description: 'Layered pasta with rich meat sauce and béchamel', image: images.lasagnabolognese },
    { id: 6, name: 'Osso Buco', price: 22.99, description: 'Braised veal shank with gremolata', image: images.ossoBuco },
    { id: 7, name: 'Risotto alla Milanese', price: 18.99, description: 'Creamy saffron-infused risotto', image: images.risotto },
    { id: 8, name: 'Eggplant Parmesan', price: 16.99, description: 'Breaded eggplant baked with marinara and mozzarella', image: images.eggplantParmesan },
  ],
  desserts: [
    { id: 9, name: 'Panna Cotta', price: 6.99, description: 'Silky vanilla custard with berry compote', image: images.pannaCotta },
    { id: 10, name: 'Cannoli', price: 5.99, description: 'Crisp pastry shells filled with sweet ricotta cream', image: images.cannoli },
    { id: 11, name: 'Gelato Trio', price: 7.99, description: 'Selection of three seasonal gelato flavors', image: images.gelatoTrio },
    { id: 12, name: 'Affogato', price: 6.49, description: 'Vanilla gelato "drowned" in espresso', image: images.affogato },
  ],
  drinks: [
    { id: 13, name: 'Espresso', price: 2.99, description: 'Rich and bold Italian coffee', image: images.espresso },
    { id: 14, name: 'Negroni', price: 9.99, description: 'Classic cocktail with gin, Campari, and vermouth', image: images.negroni },
    { id: 15, name: 'Limoncello', price: 5.99, description: 'Sweet and tangy lemon liqueur', image: images.limoncello },
    { id: 16, name: 'San Pellegrino', price: 3.49, description: 'Sparkling mineral water', image: images.pellegrino  },
  ],
};


export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  return (
    <div id='menu' className="flex flex-col items-center justify-center pt-10 bg-white">
      <div className="text-center mb-8">
        <h4 className="text-lg text-yellow-600 uppercase font-semibold mb-2">OUR MENU</h4>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Check Our Yummy Menu</h1>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.key 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {menuItems[activeCategory].map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="flex bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-1/3 h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-red-600">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}