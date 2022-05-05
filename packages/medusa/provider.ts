import { CHECKOUT_ID_COOKIE } from './const'
import { handler as useCart } from './hooks/use-cart'
import { handler as useAddItem } from './hooks/use-add-item'
import { handler as useUpdateItem } from './hooks/use-update-item'
import { handler as useRemoveItem } from './hooks/use-remove-item'

import { handler as useCustomer } from './hooks/use-customer'
import { handler as useSearch } from './product/use-search'

import { handler as useLogin } from './hooks/use-login'
import { handler as useLogout } from './hooks/use-logout'
import { handler as useSignup } from './hooks/use-signup'

import fetcher from './fetcher'

export const medusaProvider = {
  locale: 'en-us',
  cartCookie: CHECKOUT_ID_COOKIE,
  fetcher,
  cart: { useCart, useAddItem, useUpdateItem, useRemoveItem },
  customer: { useCustomer },
  products: { useSearch },
  auth: { useLogin, useLogout, useSignup },
}

export type MedusaProvider = typeof medusaProvider
