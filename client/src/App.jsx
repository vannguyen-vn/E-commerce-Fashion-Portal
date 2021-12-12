import React from 'react';
import { Button, Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="p-3">
      <Button variant="primary">Button #1</Button>
      <Button variant="primary">Button #2</Button>
    </Container>
  )
}

export default App;