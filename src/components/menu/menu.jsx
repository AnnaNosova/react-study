import { CounterContainer } from '../counter/container';

export const Menu = ({ menu }) => {
    return (
        <div>
            <h4>Menu</h4>
            <ul style={{listStyleType: "none"}}>
                {menu.map(({id, name, price}) => (
                    <li key={id}>
                        <div>{name} - {price} USD</div>
                        <CounterContainer min={0} max={5} step={1}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};