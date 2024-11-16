import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/Contents';
import Footer from './components/footer';







export default function App() {
  return (
    <>
    <Header/>
    <Content color = 'blue' text ='In the journey of my life, I experienced profound moments of growth, and 
      through unwavering faith and the love of those around me, I discovered the light of salvation. 
      Each experience became a stepping stone, guiding me to a deeper understanding of grace and redemption. 
      Today, I stand renewed and grateful for the transformative power of hope and the support
       that has led me to a place of joy and purpose.'
    />
    <Content color = 'green' text = 'You Created us in Your righteousness. And we belong to you in that palce of true holiness'/>
    <Content color = 'Purple'   text = 'Halleluyah!!! TO GLORIOUS CHRIST'/> 

    <Footer/>
    
    </>
  );
}


