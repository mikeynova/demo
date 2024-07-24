import { useState } from "react";
import { Form, Table } from "semantic-ui-react";
import { Temporal } from "@js-temporal/polyfill";
import "./App.css";

const formatDateObj = (date: string | undefined) => {
  if (date) {
    // date = date.replace(/-/g, "/");
    const originalDate = new Date(date);
    return (
      <h1>
        {`${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`}
      </h1>
    );
  }
};

const formatTemporal = (date: string | undefined) => {
  if (date) {
    const originalDate = Temporal.PlainDate.from(date);
    return <h1>{originalDate.toLocaleString()}</h1>;
  }
}

function App() {
  const [date, setDate] = useState<string | undefined>("");
  const [temporal, setTemporal] = useState<string | undefined>("");
  return (
    <>
      <Table celled padded definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell/>
            <Table.HeaderCell>Date Obj</Table.HeaderCell>
            <Table.HeaderCell>Temporal</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              Enter a date
            </Table.Cell>
            <Table.Cell>
              <Form>
                <Form.Input
                  type="date"
                  label="Date Object"
                  value={date}
                  onChange={(_, { value }) => {
                    setDate(value);
                  }}
                />
              </Form>
            </Table.Cell>
            <Table.Cell>
              <Form>
                <Form.Input
                  type="date"
                  label="Temporal Date"
                  value={temporal}
                  onChange={(_, { value }) => {
                    setTemporal(value);
                  }}
                />
              </Form>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Formatted Date</Table.Cell>
            <Table.Cell>{formatDateObj(date)}</Table.Cell>
            <Table.Cell>{formatTemporal(temporal)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default App;
