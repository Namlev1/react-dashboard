import { createSlice } from '@reduxjs/toolkit'

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
  ]
}

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
  ]
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    toggle: (state) => {
      console.log(state.accountId)
      return state.accountId === 1 ? secondState : initialState
    }
  }
})

export default accountSlice.reducer
export const { toggle } = accountSlice.actions
