# ExRest

ExRest is a lightweight JavaScript package that simplifies the process of generating RESTful APIs using Express. With ExRest, you can quickly create API endpoints and their corresponding controllers based on a simple configuration or schema, reducing boilerplate code and speeding up API development.

## Features

- **Simple Configuration**: Define your API endpoints and their handlers using a straightforward schema format.
- **Automatic Route Generation**: ExRest dynamically generates Express routes based on your configuration, eliminating the need for manual route setup.
- **Efficient Controller Handling**: Easily create controller functions to handle incoming requests for each endpoint, keeping your code organized and maintainable.
- **Customizable**: ExRest provides flexibility for customizing route behaviors, input validation, error handling, and more.
- **Framework Agnostic**: While designed to work seamlessly with Express, ExRest can potentially be adapted for use with other Node.js web frameworks.

## Installation

To install ExRest, simply run:

```bash
npm install exrest
```



## Usage

Here's a basic example of how to use ExRest to create a simple API:

javascriptCopy code

```js
const express = require('express');
const generateAPI = require('exrest');

// Define your API schema
const schema = {
    endpoints: [
        {
            method: 'GET',
            path: '/api/users',
            controller: (req, res) => {
                // Controller logic to handle GET /api/users
                res.json({ message: 'Get all users' });
            }
        },
        // Add more endpoints here
    ]
};

// Generate Express app with API routes
const app = generateAPI(schema);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```

## Documentation

For comprehensive documentation, including detailed usage instructions, API reference, and examples, please visit the [ExRest Documentation](https://github.com/your-username/exresthttps://github.com/your-username/exrest).

## Contributing

Contributions are welcome! If you encounter any bugs, have feature requests, or want to contribute code improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/dada44a/ExRest)).

## License

ExRest is licensed under the MIT License.

---

Feel free to customize this README template further to suit your specific project needs and preferences.


