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
      id: 1
    },
    {
      name: 'AMD Radeon RX 6800 XT',
      buyer: 'Jane Smith',
      date: '2023-06-22',
      price: '649',
      id: 2
    },
    {
      name: 'Intel Arc A770',
      buyer: 'Alice Johnson',
      date: '2023-07-10',
      price: '329',
      id: 3
    },
    {
      name: 'NVIDIA GeForce GTX 1660 Super',
      buyer: 'Bob Brown',
      date: '2023-08-05',
      price: '249',
      id: 4
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
        comment: 'Excellent performance!'
      },
      {
        id: 2,
        name: 'AMD Radeon RX 6800 XT',
        buyer: 'Jane Smith',
        rating: 'positive',
        comment: 'Great value for the price. Highly recommend!'
      },
      {
        id: 3,
        name: 'Intel Arc A770',
        buyer: 'Alice Johnson',
        rating: 'negative',
        comment: 'Driver issues made it unusable for my setup.'
      },
      {
        id: 4,
        name: 'NVIDIA GeForce GTX 1660 Super',
        buyer: 'Bob Brown',
        rating: 'positive',
        comment: 'Perfect for 1080p gaming. Very satisfied.'
      },
      {
        id: 5,
        name: 'AMD Ryzen 9 5950X',
        buyer: 'Michael Green',
        rating: 'negative',
        comment: 'Overheats under heavy load. Disappointed.'
      }
    ]
  }
}

export default initialState
