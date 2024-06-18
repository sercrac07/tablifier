# Tablifier

[![npm version](https://badge.fury.io/js/tablifier.svg)](https://badge.fury.io/js/tablifier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

With Tablifier, you can effortlessly create tables from arrays of data, customize column headers, align content, and apply formatting options to suit your needs. Whether you're working on data visualization, reporting, or any other application requiring tabular representation, Tablifier offers a convenient solution to streamline your workflow. Say goodbye to tedious table formatting and let Tablifier handle the heavy lifting for you.

## Instalation

You can install the package via npm:

```bash
npm install tablifier
```

## Usage

```javascript
import { Table } from 'tablifier'

const table = new Table('key', 'value')
table.addRow('This is the key', 'This is the value')

console.log(table.toString())
// output:
// ┌───────────────┬─────────────────┐
// │key            │value            │
// ├───────────────┼─────────────────┤
// │This is the key│This is the value│
// └───────────────┴─────────────────┘

console.log(table.toJSON())
// output:
// [{ key: 'This is the key', value: 'This is the value' }]
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request. Here are some ways you can contribute:

- **Bug Reports:** If you find any bugs or unexpected behavior, please open an issue describing the problem.
- **Feature Requests:** If you have ideas for new features or improvements, feel free to suggest them by opening an issue.
- **Code Contributions:** Contributions to the codebase via pull requests are highly appreciated. Before submitting a pull request, please make sure to follow the contribution guidelines below.

### Contribution Guidelines

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature/fix: `git checkout -b feature-name`.
3. Make changes and test them thoroughly.
4. Ensure that your code follows the existing code style and conventions.
5. Update the README and documentation if necessary.
6. Commit your changes with descriptive commit messages.
7. Push your branch to your fork: `git push origin feature-name`.
8. Open a pull request to the `main` branch of the original repository.

Thank you for contributing to **Tablifier**!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
