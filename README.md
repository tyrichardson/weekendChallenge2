# weekendChallenge2
Create a calculator for data entered on the client page, sent to the server for calculations, returned and displayed on the DOM.

Welcome to your second weekend challenge! We are going to be building a calculator application using jQuery, Node, and Express! The logic for the calculator needs to be implemented on the server.

The client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM).

- [x] Two HTML input (number) fields
- [x] Four buttons: Add, Subtract, Multiply, and Divide

Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this:

{
   x: 3,
   y: 4,
   type: "Add"
}

- [x] Create listeners for each of the four buttons
- [x] Create an object with the two user input values and the operator of the button clicked
- [x] Create a GET for the answer data from the server (.done, etc...)
- [x] POST the object to the server
- [x] Verify the response is received from the server
- [x] Test appending user input to DOM

Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division.

- [ ] Create a switch or if_else loop on the server to push the calculated answer to the array (adding a property to the object) and return the array to the client

    - [x] Get addition to work as first thing

Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

- [x] Append data to the DOM

NOTE: You can send an object back as a response to a POST request or follow up the POST with a GET request to retrieve the data. Using a GET request to follow up is more common at Prime and will put you in a better position working on the History feature below.

Finally, build a 'clear' button that resets the whole experience.

- [ ] Create a button that resets the DOM to the default/initial state (but keeps history in tact for the History display)

History:
Keep a historical record of all math operations on the server. Display a list of all previous calculations on the page when it loads. Update the list when a new calculation is made.

History:
3 * 5 = 15
4 - 2 = 2
4 * 3 = 12
3 + 6 = 9

- [ ] Append array to DOM as full history of user input, calculation output


HARD MODE:
Convert the input fields for the two values to Buttons. So the experience would allow the user to click on a numerical button, then a mathematical operation, then a numerical button again. Then have an equal button that sends all of the information to the server.

Stretch Goals:
Allow a user to clear the history by clicking on a button. Technically this shouldn't be a GET or a POST. Look into making a DELETE request!
Allow a user to click on an entry in the History list to re-run that calculation. This should display the answer on the calculator interface like a normal calculation.
Deploy to Heroku!
Anything else you can think of!
