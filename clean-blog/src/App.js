import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import data from './data';

export default function App() {
  const world = data.map(item => {
//   return (
//     <Card
//         item={item}
//     />
// )
// }) 
return <Card 
          title={item.title} 
          subTitle={item.subTitle} 
          author={item.author} 
          date={item.date}/>})
return (
  <div>
    <Navbar />
      <div>{world}</div>
    <Card />
  </div>
)
}