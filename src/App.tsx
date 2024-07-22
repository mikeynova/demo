import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Form } from 'semantic-ui-react';
import { Temporal } from "@js-temporal/polyfill";
import './App.css'

function App() {
  const [date, setDate] = useState<undefined | string>();
  const isoDate = date ? new Date(date).toISOString() : ""
  const displayDate = new Date(isoDate).toDateString();

  const [temporal, setTemporal] = useState<undefined | string>();
  const temporalDate = temporal ? Temporal.PlainDate.from(temporal) : "";
  const temporalDisplayDate = temporalDate.toString();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Form.Group>
        <Form.Input
          type="date"
          label="Start Date"
          placeholder="Start Date"
          value={date}
          onChange={(_, { value }) => setDate(value)}
        />
        <h1>{displayDate}</h1>
        <Form.Input
          type="date"
          label="Start Date"
          placeholder="Start Date"
          value={temporal}
          onChange={(_, { value }) => setTemporal(value)}
        />
        <h1>{temporalDisplayDate}</h1>
      </Form.Group>
    </>
  );
}

export default App
