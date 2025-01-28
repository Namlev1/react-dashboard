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
      id: 5
    },
    {
      name: 'Intel Core i9-13900K',
      buyer: 'Sarah White',
      date: '2023-05-18',
      price: '589',
      id: 6
    },
    {
      name: 'Apple M2 Max',
      buyer: 'David Black',
      date: '2023-06-25',
      price: '1299',
      id: 7
    },
    {
      name: 'Samsung Galaxy Book3 Ultra',
      buyer: 'Emily Blue',
      date: '2023-07-30',
      price: '2399',
      id: 8
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
  }
}

export default secondState