// Define the TypeScript type for a single menu item
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Appetizers' | 'Main Courses' | 'Desserts' | 'Beverages';
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: 'Bruschetta al Pomodoro',
    description:
      'Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.',
    price: 9.5,
    image: 'placeholder-bruschetta',
    category: 'Appetizers',
  },
  {
    id: 2,
    name: 'Calamari Fritti',
    description:
      'Lightly battered and fried calamari served with a spicy marinara sauce.',
    price: 12.0,
    image: 'placeholder-calamari',
    category: 'Appetizers',
  },
  {
    id: 3,
    name: 'Spaghetti Carbonara',
    description:
      'Classic pasta with pancetta, egg yolk, pecorino cheese, and black pepper.',
    price: 18.0,
    image: 'placeholder-carbonara',
    category: 'Main Courses',
  },
  {
    id: 4,
    name: 'Margherita Pizza',
    description:
      'San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil.',
    price: 16.5,
    image: 'placeholder-pizza',
    category: 'Main Courses',
  },
  {
    id: 5,
    name: 'Bistecca alla Fiorentina',
    description:
      'Grilled Porterhouse steak, seasoned with rosemary and sea salt.',
    price: 35.0,
    image: 'placeholder-steak',
    category: 'Main Courses',
  },
  {
    id: 6,
    name: 'Tiramisu',
    description: 'Layers of coffee-soaked ladyfingers and creamy mascarpone.',
    price: 8.5,
    image: 'placeholder-tiramisu',
    category: 'Desserts',
  },
  {
    id: 7,
    name: 'Panna Cotta',
    description:
      'Silky smooth cooked cream dessert served with a berry coulis.',
    price: 8.0,
    image: 'placeholder-panna-cotta',
    category: 'Desserts',
  },
  {
    id: 8,
    name: 'San Pellegrino',
    description: 'Sparkling natural mineral water.',
    price: 4.0,
    image: 'placeholder-water',
    category: 'Beverages',
  },
  {
    id: 9,
    name: 'Espresso',
    description: 'A rich and aromatic shot of Italian coffee.',
    price: 3.5,
    image: 'placeholder-espresso',
    category: 'Beverages',
  },
];
