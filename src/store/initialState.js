const initialState = {
  accountId: 1,
  quality: {
    category: 4,
    score: 76,
    details: [
      {
        name: 'Delivery time',
        score: 14
      },
      {
        name: 'Quality of products',
        score: 5
      },
      {
        name: 'Availability',
        score: 16
      }
    ]
  },
  orders: [
    {
      name: 'NVIDIA GeForce RTX 3080',
      buyer: 'John Doe',
      date: '2023-05-15',
      price: '799',
      id: 1,
      status: 'shipped'
    },
    {
      name: 'AMD Radeon RX 6800 XT',
      buyer: 'Jane Smith',
      date: '2023-06-22',
      price: '649',
      id: 2,
      status: 'shipped'
    },
    {
      name: 'Intel Arc A770',
      buyer: 'Alice Johnson',
      date: '2023-07-10',
      price: '329',
      id: 3,
      status: 'unshipped'
    },
    {
      name: 'NVIDIA GeForce GTX 1660 Super',
      buyer: 'Bob Brown',
      date: '2023-08-05',
      price: '249',
      id: 4,
      status: 'shipped'
    },
    {
      name: 'ASUS ROG Strix RTX 4090',
      buyer: 'Chris Taylor',
      date: '2023-09-12',
      price: '1599',
      id: 5,
      status: 'unpaid'
    },
    {
      name: 'MSI Radeon RX 7900 XT',
      buyer: 'Sophia Martinez',
      date: '2023-10-20',
      price: '899',
      id: 6,
      status: 'unpaid'
    },
    {
      name: 'Intel Core i9-12900K',
      buyer: 'Liam Anderson',
      date: '2023-11-01',
      price: '599',
      id: 7,
      status: 'refund'
    },
    {
      name: 'Corsair Vengeance 32GB RAM',
      buyer: 'Emma Thompson',
      date: '2023-11-15',
      price: '149',
      id: 8,
      status: 'unshipped'
    },
    {
      name: 'Samsung 980 Pro 1TB SSD',
      buyer: 'Oliver Wilson',
      date: '2023-12-05',
      price: '199',
      id: 9,
      status: 'refund'
    },
    {
      name: 'Logitech G430',
      buyer: 'Oliver Wilson',
      date: '2023-12-05',
      price: '199',
      id: 10,
      status: 'shipped'
    }
  ],
  reviews: {
    score: 91,
    positive: 123,
    negative: 12,
    details: [
      {
        id: 1,
        name: 'NVIDIA GeForce RTX 3080',
        buyer: 'John Doe',
        rating: 'positive',
        comment: 'Excellent performance!',

      },
      {
        id: 2,
        name: 'AMD Radeon RX 6800 XT',
        buyer: 'Jane Smith',
        rating: 'positive',
        comment: 'Great value for the price. Highly recommend!',


      },
      {
        id: 3,
        name: 'Intel Arc A770',
        buyer: 'Alice Johnson',
        rating: 'negative',
        comment: 'Driver issues made it unusable for my setup.',

      },
      {
        id: 4,
        name: 'NVIDIA GeForce GTX 1660 Super',
        buyer: 'Bob Brown',
        rating: 'positive',
        comment: 'Perfect for 1080p gaming. Very satisfied.',

      },
      {
        id: 5,
        name: 'AMD Ryzen 9 5950X',
        buyer: 'Michael Green',
        rating: 'negative',
        comment: 'Overheats under heavy load. Disappointed.',

      },
      {
        id: 6,
        name: 'AMD Ryzen 9 5950X',
        buyer: 'Dude Lebowsky',
        rating: 'negative',
        comment: 'Overheats under heavy load. Disappointed.',

      }
    ]
  },
  ranking: [
    {
      id: 1,
      photo: 'https://m.media-amazon.com/images/I/71PCEkj9DYS.jpg',
      name: 'NVIDIA T400',
      amountSold: 8,
      return: 3916.48
    },
    {
      id: 2,
      photo: 'https://proline.pl/pic/gv-r67xtgaming-oc-12gd_0.jpg',
      name: 'AMD Radeon RX 6700 XT',
      amountSold: 92,
      return: 7820.75
    },
    {
      id: 3,
      photo: 'https://m.media-amazon.com/images/I/618n+u4X9iL.jpg',
      name: 'Intel Arc A750',
      amountSold: 65,
      return: 4680.25
    },
    {
      id: 4,
      photo:
        'https://f00.esfr.pl/foto/7/87299108721/208ac4068f56f25329b407339a51fcf/msi-karta-graf-msi-rtx-3060-gam-12g-rev-2-0,87299108721_5.webp',
      name: 'NVIDIA GeForce RTX 3060',
      amountSold: 110,
      return: 13200.5
    },
    {
      id: 5,
      photo:
        'https://www.kakto.pl/img/product_media/70001-71000/Gigabyte-Karta-graficzna-Radeon-RX-6600-EAGLE-8GB-GDDR6-128bit-2DP-2HDMI-405379.jpg',
      name: 'AMD Radeon RX 6600',
      amountSold: 88,
      return: 7920.8
    }
  ],
  chosenOrdersSort: "Shipped orders",
  chosenRankingSort: "Best to worst",
  chosenPeriod: "This week",
  chosenMetric: "Products sold",
  chosenChartType: "Bar plot"
}

export default initialState
