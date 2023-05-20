import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.terminal';

function App() {
  useEffect(() => {
    $(function () {
      $('#terminal').terminal(function (command, term) {
        // Handle user commands here
        // You can execute commands and display the output using the term.echo() method
        term.echo('You entered: ' + command);
      }, {
        greetings: 'Welcome to the terminal!',
        name: 'terminal',
        height: 400,
        prompt: '> '
      });
    });
  }, []);

  return (
    <div>
      <div id="terminal"></div>
      {/* Rest of your components */}
    </div>
  );
}

export default App;
