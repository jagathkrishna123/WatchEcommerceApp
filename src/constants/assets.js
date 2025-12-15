import appstore from "../assets/appstore.svg"
import banner from "../assets/banner.svg"
import bellicon from "../assets/bellicon.svg"
import brand1 from "../assets/brand1.svg"
import brand2 from "../assets/brand2.svg"
import brand3 from "../assets/brand3.svg"
import brand4 from "../assets/brand4.svg"
import brand5 from "../assets/brand5.svg"
import brand6 from "../assets/brand6.svg"
import brand7 from "../assets/brand7.svg"
import brand8 from "../assets/brand8.svg"
import brand9 from "../assets/brand9.svg"
import brand10 from "../assets/brand10.svg"
import brand11 from "../assets/brand11.svg"
import brand12 from "../assets/brand12.svg"
import carticon from "../assets/carticon.svg"
import cashback from "../assets/cashback.svg"
import instalogo from "../assets/instalogo.svg"
import likeicon from "../assets/likeicon.svg"
import likeiconn from "../assets/likeiconn.svg"
import linkedinlogo from "../assets/linkedinlogo.svg"
import logo from "../assets/logo.svg"
import musicicon from "../assets/musicicon.svg"
import payment from "../assets/payment.svg"
import phoneicon from "../assets/phoneicon.svg"
import playstore from "../assets/playstore.svg"
import product1 from "../assets/product1.svg"
import product2 from "../assets/product2.svg"
import product3 from "../assets/product3.svg"
import product4 from "../assets/product4.svg"
import product5 from "../assets/product5.svg"
import product6 from "../assets/product6.svg"
import product7 from "../assets/product7.svg"
import product8 from "../assets/product8.svg"
import product9 from "../assets/product9.svg"
// import product9 from "../assets/product9.svg"
import product10 from "../assets/product10.svg"
import product11 from "../assets/product11.svg"
import product12 from "../assets/product12.svg"
import product13 from "../assets/product13.svg"
import profileicon from "../assets/profileicon.svg"
import searchicon from "../assets/searchicon.svg"
import shippingicon from "../assets/shippingicon.svg"
import shopping from "../assets/shopping.svg"
import storeicon from "../assets/storeicon.svg"
import support from "../assets/support.svg"
import watch1 from "../assets/watch1.svg"
import watch2 from "../assets/watch2.svg"
import watch3 from "../assets/watch3.svg"
import youtube from "../assets/youtube.svg"
import heroimg from "../assets/heroimg.png"
import mainbanner from "../assets/mainbanner.svg"
import blob1 from "../assets/blob1.svg"
import blob2 from "../assets/blob2.svg"
import blob3 from "../assets/blob3.svg"
// import { Smartphone, Activity, BatteryCharging } from "lucide-react";
import simicon from '../assets/simicon.svg'
import waveicon from '../assets/waveicon.svg'
import chargelevel from '../assets/chargelevel.svg'
import Hamburger from '../assets/Hamburger.svg'


export const assets = {
    heroimg,
    mainbanner,
    appstore,
    banner,
    bellicon,
    carticon,
    cashback,
    instalogo,
    likeicon,
    likeiconn,
    linkedinlogo,
    logo,
    musicicon,
    payment,
    phoneicon,
    playstore,
    profileicon,
    searchicon,
    shippingicon,
    shopping,
    storeicon,
    support,
    youtube,
    watch1,
    watch2,
    watch3,
    support,
    blob1,
    blob2,
    blob3,
    waveicon,
    simicon,
    chargelevel,
    Hamburger,
}

export const NAV_ACTIONS = [
  {
    id: 1,
    image: bellicon,
    alt: "Notifications",
    wrapperClass: "hidden lg:block",
  },
  {
    id: 2,
    image: profileicon,
    alt: "Profile",
    wrapperClass: "hidden lg:block",
  },
  {
    id: 3,
    image: likeicon,
    alt: "Wishlist",
    wrapperClass: "hidden sm:block",
  },
  {
    id: 4,
    image: carticon,
    alt: "Cart",
    wrapperClass: "",
    relative: true,
  },
  {
    id: 5,
    image: storeicon,
    alt: "Our Stores",
    wrapperClass: "hidden lg:flex items-center gap-2",
    label: "Our Stores",
  },
];

export const SIDEBARLINKS = [
  { label: "Home", path: "/" },
  { label: "Watches", path: "/watches" },
  { label: "Collections", path: "/collections" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];


export const CUSTOMERSUPPORTDATA = [
    {image:shippingicon, title: "Free shiping", subtitle: "On order over ₹2000"},
    {image:cashback, title:"Moneyback", subtitle:"Moneyback guarantee"},
    {image:support, title:"24/7 Support", subtitle:"Online consultations"},
    {image:payment, title:"Secure payment", subtitle:"Safe Shopping Guarantee"}
]

export const TRENDING_PRODUCTS = [
  {
    id: 1,
    title: "HUAWEI Watch 3 Pro",
    image: watch1,
    features: [
      "eSIM Cellular Calling",
      "All-day Health Management",
      "5-Day Battery Life"
    ],
    bgShape: blob1,
  },

  {
    id: 2,
    title: "HUAWEI Watch 3 Pro",
    image: watch2,
    bgShape: blob2,
  },

  {
    id: 3,
    title: "HUAWEI Watch 3 Pro",
    image: watch3,
    icons: [
      { icon: phoneicon, label: "Challenges" },
      { icon: musicicon, label: "Music" },
      { icon: shopping, label: "Applications" },
    ],
    bgShape: blob3,
  }
];

export const BRANDDATA = [
  {image: brand1},
  {image: brand2},
  {image: brand3},
  {image: brand4},
  {image: brand5},
  {image: brand6},
  {image: brand7},
  {image: brand8},
  {image: brand9},
  {image: brand10},
  {image: brand11},
  {image: brand12},
  {image: brand9},
  {image: brand5},
  {image: brand8},
  {image: brand3},
  {image: brand11},
  {image: brand4},
]

export const DEMANDEDITEMS = [
  {
    image: product1,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
  {
    image: product2,
    productName:"IWA Sport watch ",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
  {
    image: product3,
    productName:"Silver bracelet",
    brand:"SKU: 18039",
    price:"AED 27000"
  },
  {
    image: product4,
    productName:"Emerald earrings",
    brand:"SKU: 18040",
    price:"AED 27000"
  },
  {
    image: product5,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
  {
    image: product6,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
  {
    image: product7,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
  {
    image: product8,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
]


export const watchFeatures = [
  {
    id: 1,
    icon: simicon,  
    title: "eSIM Cellular Calling",
  },
  {
    id: 2,
    icon: waveicon,
    title: "All-day Health Management",
  },
  {
    id: 3,
    icon: chargelevel,
    title: "5-Day Battery Life",
  },
];

// export const WATCHFEATURES2 = [
//   {
//     image:phoneicon,
//     title: "Challenges"
//   },
//   {
//     image:musicicon,
//     title: "Music"
//   },
//   {
//     image:shopping,
//     title: "Applications"
//   },

// ]

export const WATCHFEATURES2 = [
  {
    image: phoneicon,
    title: "Challenges",
    width: "w-[140px]"
  },
  {
    image: musicicon,
    title: "Music",
    width: "w-[90px]"
  },
  {
    image: shopping,
    title: "Applications",
    width: "w-[160px]"
  }
]

export const RECENTSEARCHS = [
 {
    image: product10,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
 {
    image: product11,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
 {
    image: product12,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
 {
    image: product13,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
  {
    image: product4,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
  {
    image: product5,
    productName:"IWA Sport watch",
    brand:"Brand : Titan",
    price:"AED 27000"
  },
]