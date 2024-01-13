import './index.css'

const TabItem = props => {
  const {tabItemDetails, onClickTab, isActiveTab} = props
  const {buttonText, id} = tabItemDetails

  const onclickTabButton = () => {
    onClickTab(id)
  }

  const activeTab = isActiveTab ? 'active' : ''

  return (
    <li className="tabItem">
      <button
        className={`button ${activeTab}`}
        type="button"
        onClick={onclickTabButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
