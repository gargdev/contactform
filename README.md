# React Contact Form

This project is a simple contact form application built with React. Users can fill out the form with their name, email, phone number, and message, and upon submission, the data is sent to a Google Sheets spreadsheet using the NoCodeAPI service.

## Project Setup

To set up this project locally, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/gargdev/contactform.git
   ```

2. Navigate to the project directory:
   ```
   cd contactform
   ```

3. Install dependencies using npm:
   ```
   npm install
   ```

## Running the Project Locally

After setting up the project, you can run it locally using the following command:

```
npm start
```

This will start the development server, and you can view the application by opening [http://localhost:3000](http://localhost:3000) in your web browser.

## Google Sheets Integration

The contact form data is sent to a Google Sheets spreadsheet using the NoCodeAPI service. NoCodeAPI allows you to create APIs without writing any code. In this project, we use the NoCodeAPI endpoint to send form data to a Google Sheets spreadsheet.

## Additional Features and Customizations

- Styled with CSS for a visually appealing user interface.
- Input fields have validation to ensure that required fields are filled out correctly.
- Error messages are displayed if validation fails.
- Upon successful submission, the form clears and a success message is displayed.

## Folder Structure

- `src`: Contains the source code for the project.
  - `components`: Contains React components used in the application.
  - `assets`: Contains images used in the project.
  - `Styles`: Contains CSS files for styling the components.

## Credits

- FontAwesome icons are used for social media links.
- NoCodeAPI is used for integrating Google Sheets.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.