# Tablifier

Let's you create tables and convert them into strings.

## Instalation

```bash
npm install tablifier
```

## Usage

You can get a table by using the `Table` class.

```javascript
import { Table } from 'tablifier'

const table = new Table()
table.addRow('This is the key', 'This is the value')

console.log(table.toString())
// output:
// ┌────────────────┬──────────────────┐
// │key             │value             │
// ├────────────────┼──────────────────┤
// │This is the key │This is the value │
// └────────────────┴──────────────────┘
```
