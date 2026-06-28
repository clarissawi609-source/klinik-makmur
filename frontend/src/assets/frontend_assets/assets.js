import p_img1 from './p_img1.png'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
  {
    _id: "aaaaa",
    name: "Paracetamol 500mg",
    description:
      "Provides effective relief from fever, headache, toothache, and mild to moderate pain.",
    price: 15000,
    image: [p_img1],
    category: "Over-the-Counter",
    subCategory: "Tablet",
    sizes: ["10 Tablets"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "Ibuprofen 200mg",
    description:
      "Anti-inflammatory medicine used to relieve pain, swelling, and fever.",
    price: 22000,
    image: [p_img2],
    category: "Over-the-Counter",
    subCategory: "Tablet",
    sizes: ["10 Tablets"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "Amoxicillin 500mg",
    description:
      "Prescription antibiotic used for treating bacterial infections.",
    price: 48000,
    image: [p_img3],
    category: "Prescription Medicines",
    subCategory: "Capsule",
    sizes: ["10 Capsules"],
    date: 1716234545448,
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "Vitamin C 1000mg",
    description:
      "Daily vitamin supplement to help support the immune system.",
    price: 35000,
    image: [p_img4],
    category: "Vitamins & Supplements",
    subCategory: "Tablet",
    sizes: ["30 Tablets"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "Blackmores Fish Oil",
    description:
      "Omega-3 supplement that supports heart, brain, and joint health.",
    price: 125000,
    image: [p_img5],
    category: "Vitamins & Supplements",
    subCategory: "Capsule",
    sizes: ["60 Capsules"],
    date: 1716622345448,
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "OBH Combi Cough Syrup",
    description:
      "Relieves cough symptoms and soothes throat irritation.",
    price: 28000,
    image: [p_img6],
    category: "Over-the-Counter",
    subCategory: "Syrup",
    sizes: ["100 mL"],
    date: 1716623423448,
    bestseller: true,
  },
  {
    _id: "aaaag",
    name: "Betadine Antiseptic Solution",
    description:
      "Antiseptic solution for cleaning wounds and preventing infection.",
    price: 32000,
    image: [p_img7],
    category: "Medical Devices",
    subCategory: "First Aid",
    sizes: ["60 mL"],
    date: 1716621542448,
    bestseller: false,
  },
  {
    _id: "aaaah",
    name: "Hansaplast Bandages",
    description:
      "Sterile adhesive bandages for covering and protecting small cuts.",
    price: 18000,
    image: [p_img8],
    category: "Medical Devices",
    subCategory: "First Aid",
    sizes: ["20 pcs"],
    date: 1716622345448,
    bestseller: false,
  },
]