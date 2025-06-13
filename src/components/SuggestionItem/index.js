// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails} = props
  const {id, suggestion} = suggestionDetails

  return (
    <li>
      <p> {suggestion} </p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
