import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Dashboard.css'
import { toast } from 'react-toastify'
import { PRODUCT_API } from '../src/config/api'

// Returns stock tier and fill % for the holographic bar
function getStockMeta(stock) {
  const s = Number(stock)
  if (s <= 0)  return { tier: 'low',  pct: 2,                   label: 'CRITICAL' }
  if (s <= 5)  return { tier: 'low',  pct: Math.min(s * 6, 30), label: 'LOW' }
  if (s <= 20) return { tier: 'mid',  pct: Math.min(s * 3, 60), label: 'MODERATE' }
  return       { tier: 'high', pct: Math.min(s * 1.5, 100),     label: 'STOCKED' }
}

function Dashboard() {
  let [items, setItems] = useState([])
  let [force, setForce] = useState(0)

  useEffect(() => {
    axios.get(`${PRODUCT_API}/Products`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err))
  }, [force])

  function remove_id(id, name) {
    if (!window.confirm(`Remove "${name}"?`)) return
    axios.delete(`${PRODUCT_API}/Products/${id}`)
      .then(() => {
        toast.success(`"${name}" removed successfully`)
        setForce(f => f + 1)
      })
      .catch(() => toast.error('Failed to remove product'))
  }

  let navigate = useNavigate()
  function edit_item(id) {
    navigate(`/admin-homepage/updateproduct/${id}`)
  }

  return (
    <div className="dashboard">
      {items.map((item) => {
        const { tier, pct, label } = getStockMeta(item.stock)
        return (
          <div className="productCard" key={item.id}>
            <div className="thumbnail">
              <div className="hud-tl" />
              <div className="hud-br" />
              <img src={item.image} alt={item.Prname} />
            </div>

            <div className="desc">
              <Link state={item} to={`/admin-homepage/viewproduct/${item.id}`}>
                <h4>{item.brand}</h4>
                <h4>{item.Prname}</h4>
              </Link>

              {/* Price only — MRP / discount removed */}
              <span>₹{Number(item.price).toLocaleString('en-IN')}</span>

              {/* ── Holographic Inventory Bar ── */}
              <div className="stockBar">
                <div className="stockBar-header">
                  <span className="stockBar-label">Inventory Level</span>
                  <span className={`stockBar-value ${tier}`}>{label} // {item.stock}</span>
                </div>
                <div className="stockBar-track">
                  <div className={`stockBar-fill ${tier}`} style={{ width: `${pct}%` }} />
                </div>
              </div>

              <div className="subDesc">
                <span id="rating">
                  {item.ratings}
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </span>
                <span id="stock">{item.category}</span>
              </div>

              <div className="btn">
                <button onClick={() => edit_item(item.id)} id="edit">
                  Edit
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>
                </button>
                <button onClick={() => remove_id(item.id, item.Prname)} id="remove">
                  Remove
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard