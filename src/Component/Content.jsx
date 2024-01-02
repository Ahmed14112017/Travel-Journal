import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
function Content(props){
    return(
        <div className="content-header">
            <div className="content-img">
            <div>
                <img src={props.imageUrl} />
            </div>
            </div> 
            <div className="content-item">
            <FontAwesomeIcon icon={faLocationDot} className='icon' />
            <span className='location'>{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
            <h1>{props.title}</h1>
            <span className='date'>{props.startDate}-</span>
            <span className='date'>{props.endDate}</span>
            <p>{props.description}</p>
            </div>
            
            
        </div>
    )
}
export default Content