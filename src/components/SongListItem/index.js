import {Component} from 'react'

import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

class SongListItem extends Component {
  sendId = () => {
    const {getId, id} = this.props
    getId(id)
  }

  render() {
    const {item} = this.props
    return (
      <li className="songListItem">
        <div className="tumbnail">
          <img className="SongTumbnail" src={item.imageUrl} alt="track" />
          <div className="detailsContainer">
            <p className="nameHead">{item.name}</p>
            <p className="generHead">{item.genre}</p>
          </div>
        </div>
        <div className="deleteContainer">
          <p>{item.duration}</p>
          <button
            data-testid="delete"
            onClick={this.sendId}
            className="button"
            type="button"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </li>
    )
  }
}

export default SongListItem
