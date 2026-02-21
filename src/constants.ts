import { 
  Sprout, 
  Leaf, 
  Droplets, 
  Settings, 
  MapPin, 
  Clock, 
  Maximize,
  Instagram,
  Linkedin,
  Facebook,
  Twitter
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Pages', href: '#', hasDropdown: true },
  { name: 'Blogs', href: '#blog' },
];

export const ALL_PROJECTS = [
  {
    id: '01',
    title: 'Turning a Yard into a Thriving Vegetable Garden.',
    description: 'This project was a comprehensive transformation of an outdoor space into a serene and functional garden.',
    image: 'https://picsum.photos/seed/yard1/600/400',
    location: 'Chicago, IL',
    duration: '8 Months',
    size: '120,00m²'
  },
  {
    id: '02',
    title: 'Lush Layers: A Multi-Level Landscape Design',
    description: 'Gardening is a journey of discovery, growth, and connection, and we\'re here to walk alongside you every step of the way.',
    image: 'https://picsum.photos/seed/yard2/600/400',
    location: 'Malibu Beach, CA',
    duration: '7 Months',
    size: '110,00m²'
  },
  {
    id: '03',
    title: 'Garden Retreat: A Space for coolness and Peace',
    description: 'From eco-friendly practices to innovative gardening solutions, everything we do is rooted in our love for the earth.',
    image: 'https://picsum.photos/seed/yard3/600/400',
    location: 'Los Angeles, CA',
    duration: '5 Months',
    size: '45,00m²'
  },
  {
    id: '04',
    title: 'Bloom Haven: A Backyard Retreat in Full Color.',
    description: 'This project was a comprehensive transformation of an outdoor space into a serene and functional garden.',
    image: 'https://picsum.photos/seed/yard4/600/400',
    location: 'Miami, FL',
    duration: '6 Months',
    size: '85,00m²'
  },
  {
    id: '05',
    title: 'The Secret Garden: Crafting a Serene Hideaway.',
    description: 'Pollinators like bees, butterflies, and birds play a crucial role in keeping gardens thriving. To create a pollinator haven.',
    image: 'https://picsum.photos/seed/yard5/600/400',
    location: 'Austin, TX',
    duration: '4 Months',
    size: '60,00m²'
  },
  {
    id: '06',
    title: 'Terrace Transform: Vertical Gardening at Its Best',
    description: 'Starting a garden can feel overwhelming, but with the right approach, anyone can grow a lush, thriving space.',
    image: 'https://picsum.photos/seed/yard6/600/400',
    location: 'Seattle, WA',
    duration: '9 Months',
    size: '150,00m²'
  }
];

export const FEATURES = [
  {
    icon: Sprout,
    title: 'Discovery & Consultation',
  },
  {
    icon: Leaf,
    title: 'Native Plant Integration',
  },
  {
    icon: Droplets,
    title: 'Water-Efficient Irrigation',
  },
  {
    icon: Settings,
    title: 'Ongoing Maintenance',
  },
];

export const SERVICES = [
  {
    title: 'Landscape Design',
    description: 'Starting a garden can feel overwhelming, but with the right approach, anyone can grow.',
    image: 'https://picsum.photos/seed/garden1/800/800',
    highlighted: false
  },
  {
    title: 'Garden Maintenance',
    description: "We believe that gardening is more than just planting seeds, it's about nurturing.",
    image: 'https://picsum.photos/seed/garden2/800/800',
    highlighted: true
  },
  {
    title: 'Seasonal Services',
    description: 'Incorporate mix of flowers that bloom at different times to ensure food availability year-round.',
    image: 'https://picsum.photos/seed/garden3/800/800',
    highlighted: false
  },
  {
    title: 'Hardscape Design',
    description: 'Bed gardening offers numerous advantages, from improved soil drainage to easier weed control.',
    image: 'https://picsum.photos/seed/garden4/800/800',
    highlighted: false
  }
];

export const PROJECTS = [
  {
    id: '01',
    title: 'Terrace Transform: Vertical Gardening at Its Best',
    description: 'Starting a garden can feel overwhelming, but with the right approach, anyone can grow a lush, thriving space.',
    image: 'https://picsum.photos/seed/proj1/600/400',
    location: 'Chicago, IL',
    duration: '8 Months',
    size: '120,00m²'
  },
  {
    id: '02',
    title: 'The Secret Garden: Crafting a Serene Hideaway.',
    description: 'Pollinators like bees, butterflies, and birds play a crucial role in keeping gardens thriving. to create a pollinator haven.',
    image: 'https://picsum.photos/seed/proj2/600/400',
    location: 'Malibu Beach, CA',
    duration: '7 Months',
    size: '110,00m²'
  },
  {
    id: '03',
    title: 'Blooming Balcony: Urban Oasis in Full Bloom.',
    description: 'This project focused on maximizing small spaces with vibrant flora and efficient watering systems.',
    image: 'https://picsum.photos/seed/proj3/600/400',
    location: 'Los Angeles, CA',
    duration: '5 Months',
    size: '45,00m²'
  }
];

export const TEAM = [
  { name: 'Leslie Alexander', role: 'Plant Specialist', image: 'https://picsum.photos/seed/team1/400/400' },
  { name: 'Michael Foster', role: 'Landscape Designer', image: 'https://picsum.photos/seed/team2/400/400' },
  { name: 'Dries Vincent', role: 'Irrigation Expert', image: 'https://picsum.photos/seed/team3/400/400' },
  { name: 'Lindsay Walton', role: 'Garden Curator', image: 'https://picsum.photos/seed/team4/400/400' },
  { name: 'Courtney Henry', role: 'Soil Scientist', image: 'https://picsum.photos/seed/team5/400/400' },
  { name: 'Tom Cook', role: 'Maintenance Lead', image: 'https://picsum.photos/seed/team6/400/400' },
  { name: 'Whitney Francis', role: 'Floral Designer', image: 'https://picsum.photos/seed/team7/400/400' },
  { name: 'Leonard Krasner', role: 'Hardscape Specialist', image: 'https://picsum.photos/seed/team8/400/400' },
];

export const TESTIMONIALS = [
  {
    name: 'Esther Howard',
    handle: '@esther',
    text: '“The team transformed my backyard into a vibrant garden oasis. I couldn’t be happier with the results! The attention to detail and care they put into every plant is remarkable.”',
    image: 'https://picsum.photos/seed/user1/200/200'
  },
  {
    name: 'Cameron Williamson',
    handle: '@cameron',
    text: '“Professional, creative, and efficient. They took my vague ideas and turned them into a masterpiece. My garden is now my favorite place to be.”',
    image: 'https://picsum.photos/seed/user2/200/200'
  }
];

export const BLOGS = [
  {
    category: 'Plant Care',
    date: 'Sep 05, 2024',
    title: 'From Seed to Bloom: Mastering the Art of Flower Gardening',
    image: 'https://picsum.photos/seed/blog1/800/500'
  }
];
