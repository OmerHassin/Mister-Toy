import { useDispatch, useSelector } from 'react-redux'

import { UserMsg } from './user-msg.jsx'
import { ShoppingCart } from './shopping-cart.jsx'
import { SET_CART_IS_SHOWN } from '../store/toy.reducer.js'

export default function AppFooter() {
  const dispatch = useDispatch()

  const count = useSelector((storeState) => storeState.userModule.count)
  const toysCount = useSelector((storeState) => storeState.toyModule.toys.length)
  const cart = useSelector((storeState) => storeState.toyModule.shoppingCart)
  const isCartShown = useSelector((storeState) => storeState.toyModule.isCartShown)

  function onCloseCart() {
    dispatch({ type: SET_CART_IS_SHOWN, isCartShown: false })
  }

  return (
    <footer>
      <h5>Currently {toysCount} toys in the shop</h5>
      <p>Coffeerights to all - Count: {count}</p>
      {
        <h5>
          <span>{cart.length}</span> Products in your cart
          {/* eslint-disable-next-line */}
          <a href="#" onClick={(ev) => {
              ev.preventDefault()
              dispatch({ type: SET_CART_IS_SHOWN, isCartShown: !isCartShown })
            }}>({isCartShown ? 'hide' : 'show'})
          </a>
        </h5>
      }
      <ShoppingCart isCartShown={isCartShown} onCloseCart={onCloseCart} />
      <UserMsg />
    </footer>
  )
}