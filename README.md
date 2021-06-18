<img src="./.readme/images/noroff-light.png" width="160" align="right">

# Module Assignment 1

## Brief

Use only plain JavaScript for this MA.

Use modules (imports and exports) and reusable functions where appropriate.

This is the API endpoint you will use: https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products

### Level 1

Connect to the API and display the name and price property of each result.

Display some kind of loading indicator while the API call is in progress.

Add an input that filters the results by maximum price. This can be on the keyup event on the input, or the click event of a button.

For example, if a user enters 50, only results with a price of 50 or less should be displayed.

Display a message if the filter returns no results.

### Level 2

Add a button or icon to each result.

Clicking on the button should add or remove the result from a wishlist array stored in localStorage.

Display the contents of the array on a page called wishlist.html.

Display a message if there are no items in the wishlist.

## Submission

Push changes back into GitHub and submit a link in Moodle.