import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/index.js';

import { setupServer } from 'msw/node';
import { rest } from 'msw';
import Products from './index.js';

let server = setupServer(
  rest.get('*/product', (req, res, ctx) => {
    return res(
      ctx.status(200, 'OK'),
      ctx.json([{

        "id": 10000,
        "category": "food",
        "name": "MSW Test",
        "description": "solves hunger",
        "price": 2,
        "inventory": 100,
        "createdAt": "2022-03-03T18:08:20.411Z",
        "updatedAt": "2022-03-03T18:24:51.614Z"

      }])
    )
  })
)

beforeAll(() => {
  server.listen();
})

describe('Test for product list component', () => {

  it('Should display a list of products from our remote API', async () => {
    render(
      <Provider store={store()}>
        <Products />
      </Provider>
    )

    let title = await screen.findByText('MSW Test');
    expect(title).toBeInTheDocument();
  })

})