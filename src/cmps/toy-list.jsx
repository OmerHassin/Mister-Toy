import { ToyPreview } from './toy-preview.jsx';

export function ToyList({ toys, onRemoveToy, onEditToy, addToCart, txt = 'Mashu' }) {
  return (
    <ul className="toy-list">
      {toys.map((toy) => (
        <li className="toy-preview" key={toy._id}>
          <ToyPreview toy={toy} />

          <div className='list-btns'>
            <button onClick={() => {onRemoveToy(toy._id)}}>x</button>
            <button onClick={() => {onEditToy(toy)}}>Edit</button>
          </div>

          <button className="buy" onClick={() => {addToCart(toy)}}>Add to Cart</button>
        </li>
      ))}
    </ul>
  )
}
