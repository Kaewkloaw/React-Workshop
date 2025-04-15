import React from 'react';
import './App.css';
import SingleContent from './components/SingleContent';
const data = [
  {
    title: 'What is React?',
    description: 'React is a JavaScript library for building user interfaces.',
  },
  {
    title: 'Why use React?',
    description: 'React is a favorite among engineers because it makes building UIs more manageable and reusable.',
  },
  {
    title: 'How do you use React?',
    description: 'You use React by creating components.',
  },
];

const App = () => {
  return (
    <main>
      <section className="container">
        <h3>FAQs</h3>
        <div>
          {data.map((item, index) => (
            <SingleContent key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;