
import './App.css'
import Navbar from'./Component/Navbar'
import Data from './Component/Data'
import Content from './Component/Content'

function App() {
  
  console.log(Data)
  const data = Data.map((item)=>{
    return(
      <Content key={item.id}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      description={item.description}
      startDate={item.startDate}
      endDate={item.endDate}
      imageUrl={item.imageUrl}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='container'>
      {data}
      </div>
      
    </div>
  )
}

export default App
