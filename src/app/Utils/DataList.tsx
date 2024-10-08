import { PiBell } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
export const cardData = [
  {
    heading: "Serengeti Safari",
    description: "5-day luxury safari experience",
    amount: "$1,799",
    discount: "40% OFF",
  },
  {
    heading: "Zanzibar Beach Retreat",
    description: "7 nights in a beachfront resort",
    amount: "$899",
    discount: "35% OFF",
  },
  {
    heading: "Cape Town Adventure",
    description: "6-day city and wildlife tour",
    amount: "$1,299",
    discount: "30% OFF",
  },
];
export const cardData1 = [
  {
    heading: "Instant African Deals",
    description:
      "Get real-time alerts for the best African travel deals, tailored to your preferences.",
    icon: <PiBell size={40} style={{ color: "#FF5D00" }} />,
  },
  {
    heading: "Unbeatable Savings",
    description:
      "Our users save an average of 40% on African safaris, tours, and accommodations.",
    icon: <FiDollarSign size={40} style={{ color: "#FF5D00" }} />,
  },
  {
    heading: "Curated Experiences",
    description:
      "Discover hand-picked, authentic African experiences you won't find anywhere else.",
    icon: <FaRegStar size={40} style={{ color: "#FF5D00" }} />,
  },
];
export const cardData2 = [
  {
    name: "Sarah T.",
    email: "@saraht_traveler",
    description:
      "AfricanEscapes revolutionized my travel planning! I saved over $1,000 on my dream safari. It's a game-changer for adventure seekers.",
  },
  {
    name: "Mike R.",
    email: "@mikeroams",
    description:
      "This is the best thing since sliced bread for African travel. I can't believe I didn't discover it sooner!",
  },
  {
    name: "Emily L.",
    email: "@em_adventures",
    description:
      "AfricanEscapes made my bucket-list trip to Victoria Falls a reality. Their deals are unbeatable!",
  },
  {
    name: "Alex K.",
    email: "@alexkwanderer",
    description:
      "I've explored hidden gems in Morocco I never knew existed. AfricanEscapes opened up a whole new world of travel for me.",
  },
  {
    name: "Joshua M.",
    email: "@joshuaexplores",
    description:
      "Perfect for budget travelers who don't want to compromise on experiences. I'm hooked!",
  },
  {
    name: "Samantha P.",
    email: "@sam_globetrotter",
    description:
      "The personalized alerts are spot-on. I've never traveled so much for so little. Absolutely recommend!",
  },
];
export const data = [
  {
    heading: "How do I get started with AfricanEscapes?",
    detail:
      "Simply sign up for our free Explorer Plan by entering your email address. You'll start receiving weekly deal alerts tailored to your preferences for African travel experiences.",
  },
  {
    heading: "Are the deals exclusive to AfricanEscapes?",
    detail:
      "Many of our deals are exclusive to AfricanEscapes members. We negotiate directly with travel providers to secure the best possible prices for our community.",
  },
  {
    heading: "How much can I expect to save on African travel?",
    detail:
      "Our users typically save between 20-50% on their African travel experiences. Some deals offer even higher discounts for last-minute bookings or off-season travel.",
  },
  {
    heading: "Can I customize the types of deals I receive?",
    detail:
      "Yes! After signing up, you can set your preferences for destinations, types of experiences (e.g., safaris, beach holidays, cultural tours), and budget range. We'll tailor our alerts to match your interests.",
  },
  {
    heading: "Is my personal information safe with AfricanEscapes?",
    detail:
      "Absolutely. We take data privacy seriously and adhere to strict security protocols. Your personal information is never shared or sold to third parties. You can review our privacy policy for more details.",
  },
];

export const cityList = [
  "Cairo",
  "Lagos",
  "Dar es Salaam",
  "Luanda",
  "Kano",
  "Kigali",
  "Nairobi",
  "Alexandria",
  "Mogadishu",
  "Dakar",
];
interface Country {
  [countryName: string]: {
    cities: string[];
  };
}
export const country:Country[] = [
  { Egypt: {cities:["Cairo", "Alexandria"]}},
  { Nigeria: {cities:["Lagos", "Kano"]} },
  { Tanzania: {cities:["Dar es Salaam"]} },
  { Angola: {cities:["Luanda"]} },
  { Rwanda: {cities:["Kigali"]} },
  { Kenya: {cities:["Nairobi"]} },
  { Somalia: {cities:["Mogadishu"]} },
  { Senegal: {cities:["Dakar"]} }
];
