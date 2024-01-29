
import './App.css'
import Description from './components/description'
import Image from './components/image'
import Name from './components/name'
import Price from './components/price'
import Products from './Products/products'

let firstName = ''
 
function App() {
    return (
    <>
    <div className='card'>
        <Products/>
        <Image/>
     <div className='body'>
        <Name/>
        <Description/>
         <Price/>
      </div>
      <div>
        <p className='firstname'>{firstName ? `Hello, ${firstName}!`:`Hello, There!`}</p>
             {/* image will display if there is a firstname */}
         {firstName && <img src="https://via.placeholder.com/150" alt="Your First Name" />}

      </div>
   </div>

    </>
  )
}

export default App
