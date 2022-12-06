import './App.css';
import Card from './components/Card';
import data from './data.js';


export default function App() {

    const spots = data.map(item => {
        return (
         <Card
            key={item.place}
            item={item} />
        )
    })
return (
<div>
    <div>{spots}</div>
</div>
)
}