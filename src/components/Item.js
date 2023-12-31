import React, { useEffect } from 'react'
import Items from '../api/itemsAPI';
import { useLocation } from 'react-router-dom';

const Item = (props) => {
  const { image, description, price, category, setOrders, orders, id, btn, deleteOrder } = props;


  const location = useLocation();
  useEffect(() => {

  }, [location])

  const placeOrder = () => {
    setOrders([...new Set(orders.concat(Items.filter((elem) => { return elem.id === id })))]);
  }

  return (
    <>
      <div className="card mx-2 my-2">
        <img src={image} className="card-img-top w-50 h-50 m-auto" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{category}</h3>
          <p className="card-text" style={{ fontSize: '12px' }}>{description}</p>
          <h5 className="card-title">price : {price}/-</h5>
          <button className="btn btn-primary my-2 w-100" style={{ display: `${location.pathname !== '/orders' ? 'block' : 'none'}` }} onClick={placeOrder}>{btn}</button>
          <button className="btn btn-danger" style={{ display: `${location.pathname === '/orders' ? 'block' : 'none'}`, width: "100%" }} onClick={() => { deleteOrder(id) }}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Item;