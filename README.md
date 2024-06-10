# Tablifier

With Tablifier, you can effortlessly create tables from arrays of data, customize column headers, align content, and apply formatting options to suit your needs. Whether you're working on data visualization, reporting, or any other application requiring tabular representation, Tablifier offers a convenient solution to streamline your workflow. Say goodbye to tedious table formatting and let Tablifier handle the heavy lifting for you.

## Instalation

```bash
npm install tablifier
```

## Usage

With `Table`, users can define their table headers, and dynamically add rows as needed to populate their data. This intuitive interface simplifies the process of table creation, providing flexibility and control over the table structure and content.

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
