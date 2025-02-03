const secondState = {
  accountId: 2,
  quality: {
    category: 3,
    score: 82,
    details: [
      {
        name: 'Delivery time',
        score: 18
      },
      {
        name: 'Quality of products',
        score: 7
      },
      {
        name: 'Availability',
        score: 20
      }
    ]
  },
  orders: [
    {
      name: 'AMD Ryzen 9 5950X',
      buyer: 'Michael Green',
      date: '2023-04-12',
      price: '699',
      id: 11,
      status: 'shipped'
    },
    {
      name: 'Intel Core i9-13900K',
      buyer: 'Sarah White',
      date: '2023-05-18',
      price: '589',
      id: 12,
      status: 'shipped'
    },
    {
      name: 'Apple M2 Max',
      buyer: 'David Black',
      date: '2023-06-25',
      price: '1299',
      id: 13,
      status: 'shipped'
    },
    {
      name: 'Samsung Galaxy Book3 Ultra',
      buyer: 'Emily Blue',
      date: '2023-07-30',
      price: '2399',
      id: 14,
      status: 'shipped'
    },
    {
      name: 'ASUS ROG Strix RTX 4090',
      buyer: 'Chris Taylor',
      date: '2023-09-12',
      price: '1599',
      id: 15,
      status: 'unpaid'
    },
    {
      name: 'MSI Radeon RX 7900 XT',
      buyer: 'Sophia Martinez',
      date: '2023-10-20',
      price: '899',
      id: 16,
      status: 'unpaid'
    },
    {
      name: 'Intel Core i9-12900K',
      buyer: 'Liam Anderson',
      date: '2023-11-01',
      price: '599',
      id: 17,
      status: 'refund'
    },
    {
      name: 'Corsair Vengeance 32GB RAM',
      buyer: 'Emma Thompson',
      date: '2023-11-15',
      price: '149',
      id: 18,
      status: 'unshipped'
    },
    {
      name: 'Samsung 980 Pro 1TB SSD',
      buyer: 'Oliver Wilson',
      date: '2023-12-05',
      price: '199',
      id: 19,
      status: 'refund'
    },
    {
      name: 'Logitech G430',
      buyer: 'Oliver Wilson',
      date: '2023-12-05',
      price: '199',
      id: 20,
      status: 'shipped'
    }
  ],
  reviews: {
    score: 88,
    positive: 95,
    negative: 8,
    details: [
      {
        id: 1,
        name: 'AMD Ryzen 9 5950X',
        buyer: 'Michael Green',
        rating: 'negative',
        comment: 'Overheats under heavy load. Disappointed.'
      },
      {
        id: 2,
        name: 'Intel Core i9-13900K',
        buyer: 'Sarah White',
        rating: 'positive',
        comment: 'Incredible performance for gaming.'
      },
      {
        id: 3,
        name: 'Apple M2 Max',
        buyer: 'David Black',
        rating: 'positive',
        comment: 'Best laptop I’ve ever owned.'
      },
      {
        id: 4,
        name: 'Samsung Galaxy Book3 Ultra',
        buyer: 'Emily Blue',
        rating: 'positive',
        comment: 'Amazing display and build quality.'
      },
      {
        id: 5,
        name: 'AMD Ryzen 9 5950X',
        buyer: 'John Doe',
        rating: 'positive',
        comment: 'Great CPU for multitasking and gaming.'
      }
    ]
  },
  ranking: [
    {
      id: 6,
      photo:
        'https://www.sony.com.sg/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
      name: 'Wireless Noise-Cancelling Headphones',
      amountSold: 150,
      return: 22500.75
    },
    {
      id: 7,
      photo:
        'https://vitay.pl/media/catalog/product/cache/bbfac1810693451b126ff3dc27d62bf8/3/5/352753_kamera-do-monitoringu-xiaomi-mjsxj10cm-360-1080p_1.jpg',
      name: 'Smart Home Security Camera',
      amountSold: 200,
      return: 30000.5
    },
    {
      id: 8,
      photo:
        'https://jannowak.com/media/catalog/product/cache/851c4263d7b678201e37d54a3c5ddf1d/p/a/pac-rob-biurko-czarne-karbon-010d24.jpg',
      name: 'Electric Standing Desk',
      amountSold: 80,
      return: 24000.25
    },
    {
      id: 9,
      photo:
        'https://vitay.pl/media/catalog/product/cache/bbfac1810693451b126ff3dc27d62bf8/m/i/mi-robot-vacuum-mop-2-3_1.jpg',
      name: 'Robot Vacuum Cleaner',
      amountSold: 300,
      return: 45000.9
    },
    {
      id: 10,
      photo:
        'https://www.bigw.com.au/medias/sys_master/images/images/hde/h4d/63469718274078.jpg',
      name: 'Portable Air Conditioner',
      amountSold: 120,
      return: 18000.6
    },
    {
      id: 11,
      photo:
        'https://i5.walmartimages.com/asr/1cba82fc-0e92-4d71-9b8a-38b182274c72_1.52bd96b1839a4c777e202ad19fe2492e.jpeg',
      name: 'Smart LED Light Bulbs (Pack of 4)',
      amountSold: 500,
      return: 7500.0
    }
  ],
  chosenOrdersSort: "Shipped orders",
  chosenRankingSort: "Best to worst",
  chosenPeriod: "This week",
  chosenMetric: "Products sold",
  chosenChartType: "Bar plot"
}

export default secondState