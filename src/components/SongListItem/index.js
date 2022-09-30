import {Component} from 'react'

import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

class SongListItem extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="songListItem">
        <div className="tumbnail">
          <img className="SongTumbnail" src={item.imageUrl} alt={item.name} />
          <div className="detailsContainer">
            <h3 className="nameHead">{item.name}</h3>
            <h3 className="generHead">{item.genre}</h3>
          </div>
        </div>
        <div className="deleteContainer">
          <h1>{item.duration}</h1>
          <button className="button" type="button">
            <AiOutlineDelete />
          </button>
        </div>
      </li>
    )
  }
}

export default SongListItem
