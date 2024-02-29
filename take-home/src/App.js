import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const App = () => {
  const [currentSum, setCurrentSum] = useState(0);

  const getRandomNumber = async () => {
    try {
      const response = await axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=0&max=10');
      
      // Log the response data for debugging
      console.log(response.data);
      
      return response.data[0]; // Assuming the response is an array, return the first element
    } catch (error) {
      console.error('Error fetching random number:', error);
      return NaN;
    }
  };
  

  const handleAddNumber = async () => {
    const randomNum = await getRandomNumber();
    const newSum = currentSum + randomNum;
    setCurrentSum(newSum);

    if (newSum > 100) {
      alert(`Unfortunately you lost: the sum ${newSum} is greater than 100.`);
      setCurrentSum(0);
    }
  };

  const handleStop = () => {
    alert(`Congratulations: your score is ${currentSum}`);
    setCurrentSum(0);
  };

  return (
    <div>
      <h2>Current Sum</h2>
      <p>{currentSum}</p>
      <button onClick={handleAddNumber}>Add another number</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default App;
