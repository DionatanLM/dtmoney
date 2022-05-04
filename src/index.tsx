import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
      transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Design',
          amount: 3000,
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createAt: new Date('2021-02-14 11:00:00')
        },
        {
          id: 3,
          title: 'Luz e Água',
          type: 'withdraw',
          category: 'Casa',
          amount: 900,
          createAt: new Date('2021-02-20 11:00:00')
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', (schema) => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container) ;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
