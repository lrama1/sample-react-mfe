# React Microfrontend

This project is a simple example of a React microfrontend.

## Project Structure

The project contains a single file `index.js` which exports a React component named `Microfrontend`.

## Code Overview

The `index.js` file contains a React functional component `Microfrontend` that returns a simple `h1` HTML element with the text "Hello from a React Microfrontend!".

The `ReactDOM.render` function is used to render the `Microfrontend` component into a DOM element with the id "root".

The `mount` function is exported from this file and logs "Microfrontend mounted" to the console when called. This can be used to confirm that the microfrontend has been correctly loaded.

## Usage

To use this microfrontend, import it into your project and render it in your application. You can also call the `mount` function to confirm it has been loaded.

```javascript
import Microfrontend, { mount } from "./index.js";

// Call the mount function
mount();

// Render the Microfrontend
ReactDOM.render(<Microfrontend />, document.getElementById("your-element-id"));
```
