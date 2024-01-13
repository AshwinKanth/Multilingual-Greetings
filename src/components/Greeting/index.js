import './index.css'

const Greeting = props => {
  const {greetingDetaila} = props
  const {imageUrl, imageAltText} = greetingDetaila

  return (
    <li className="greetingItem">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}

export default Greeting
