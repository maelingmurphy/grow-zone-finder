import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Results from './components/Results'
import Footer from './components/Footer'

const App = () => {
  
  // set state variable, zipCode, that is linked to input value
  const [zipCode, setzipCode] = useState('');

  // set state variable for zone so it can be displayed in Results component 
  const [zone, setZone] = useState('');

  // set state variable that holds the value for if a zip code format is correct (true or false)
  const [isCorrectFormat, setisCorrectFormat] = useState(false);
  
  
  // function for updating zipCode state as input changes
  const onChange = (e) => {
    setzipCode(e.target.value);
    // every time a change is made in the input, check if it is correct format
    setisCorrectFormat(isCorrectZipCodeFormat(e.target.value));
    // reset zone state variable
    setZone('');
  } 
  
  // function for checking zip code format
  const isCorrectZipCodeFormat = (zipcode) => {
    const regexpFiveDigit = /^[0-9]{5}$/;
    return regexpFiveDigit.test(zipcode) ;
  }

  // function for getting zone data
  const getZoneData = async (zipcode) => {
    try {
        // make 'GET' request to API phzmapi.org
        const response = await fetch(`https://phzmapi.org/${zipcode}.json`);
        
        // check if response is successful (ok)
        if (!response.ok) {
            // throw error if response not ok
            throw new Error(response.status);
        }
        // convert Response object to JSON 
        const zoneData = await response.json();
        console.log('zone data: ', zoneData.zone)
        // set zone value
        setZone(zoneData.zone);
        return zoneData.zone;

    } catch (error) {
        console.log(error)
        alert(`${error} : No data found for this zip code entry (${zipCode})`);
    }
  }

  // function for retrieving & displaying zone data via button click 
  const displayData = (event) => {
    event.preventDefault(); // prevents submission to a page
    console.log(`Clicked`, zipCode);
    console.log('result', isCorrectZipCodeFormat(zipCode));
    // validate zip code format
    if (!(isCorrectZipCodeFormat(zipCode))) {
        alert('Please enter a 5 digit zip code');
        return;
    }
    
    // get zoneData
    getZoneData(zipCode);
  }

  return (
    <div className="App">
      <div class="container">
        <Header />
        <Form displayData={displayData} zipCode={zipCode} onChange={onChange}/>
        <Results zone={zone} isCorrectFormat={isCorrectFormat} />     
      </div>  
      <Footer />
    </div>
  );
}
  
export default App;
  