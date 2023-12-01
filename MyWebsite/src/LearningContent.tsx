import React, { useState } from 'react';
import './LearningContent.css';
import { sculptureList } from './learning_lesson_contents/data_lesson_3'; // Import the sculptureList from the separate file

function LearningContent() {
  // Define learning content here
  const learningItems = [
    {
      title: 'Lesson 1',
      description: 'Button with function count and reset',
    },
    { title: 'Lesson 2', description: 'DOM Events in React' },
    { title: 'Lesson 3', description: 'State: a component’s memory in React' },
    { title: 'Lesson 4', description: 'Event Handling' },
    { title: 'Lesson 5', description: 'Routing with React Router' },
    { title: 'Lesson 6', description: 'Styling in React' },
  ];

  // Define state for counting
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to reset count
  const resetCount = () => {
    setCount(0);
  };

  // Define state for input text and button color
  const [inputText, setInputText] = useState('');
  const [textColor, setTextColor] = useState('blue');

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    // Generate a random color (hex format) for the button
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setTextColor(randomColor);
  };

  // Sculpture data related state and functions
  const [currentSculptureIndex, setCurrentSculptureIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(true);

  // Function to handle "Next" button click
  const handleNextClick = () => {
    // Increment the current sculpture index, loop back to the beginning if at the end
    setCurrentSculptureIndex((prevIndex) =>
      prevIndex === sculptureList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle "Hide/Show Description" button click
  const handleToggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };

  // Get the current sculpture data based on the current index
  const sculptureData = sculptureList[currentSculptureIndex];

  return (
    <div className="learning-content">
      {learningItems.map((item, index) => (
        <div key={index} className={`learning-card ${item.title === 'Lesson 1' ? 'lesson-1-card' : ''}`}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.title === 'Lesson 1' && (
            <div>
              <p>Count: {count}</p>
              <button onClick={incrementCount}>Increment</button>
              <button onClick={resetCount}>Reset</button>
            </div>
          )}

          {item.title === 'Lesson 2' && (
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Enter text"
                  value={inputText}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <p style={{ color: textColor }}>{inputText || 'Change Me'}</p>
              </div>
            </div>
          )}

          {item.title === 'Lesson 3' && sculptureData && (
            <div>
              <h3>Sculpture Information</h3>
              <p>Name: {sculptureData.name}</p>
              <p>Artist: {sculptureData.artist}</p>
              {showDescription && <p>Description: {sculptureData.description}</p>}
              <img src={sculptureData.url} alt={sculptureData.alt} />
              <button onClick={handleNextClick}>Next</button>
              <button onClick={handleToggleDescription}>
                {showDescription ? 'Hide Description' : 'Show Description'}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LearningContent;
