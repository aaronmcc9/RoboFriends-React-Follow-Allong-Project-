import react from 'react';
import { Robot } from '../containers/App';

interface CardProps{
    robot: Robot
}

const Card = ({robot}: CardProps) => {
    return (
        <div className='bg-light-green dib br3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${robot.id}?size=200x200`}/>
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    );
}

export default Card;