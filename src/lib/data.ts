const data = {
     headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels:[
    {
      title:"Most Popular Shoes For Sale",
      buttonCaption:"Shop Now",
      image:"/images/banner_1.png",
      url:"search?category=shoes-popular",
      ispublished:true,
    },
    {
      title:"Most Demanded Shoes For Sale",
      buttonCaption:"Shop Now",
      image:"/images/banner_2.png",
      url:"search?category=shoes-demanded",
      ispublished:true,
    },
    {
      title:"Most Hyped Shoes For Sale",
      buttonCaption:"Shop Now",
      image:"/images/banner_3.png",
      url:"search?category=shoes-hyped",
      ispublished:true,
    },
  ]
}
export default data;