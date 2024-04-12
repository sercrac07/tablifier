import { getLargestLength } from '&/lib/strings'
import { Row } from '&/types'

/**
 * Create a new table.
 *
 * ```javascript
 * const table = new Table()
 * table.addRow('This is the key', 'This is the value')
 * ```
 */
export class Table {
  key: string = 'key'
  value: string = 'value'
  rows: Row[] = []

  /**
   * Create the table. You can pass the key and value title as parameters.
   *
   * ```
   * const table = new Table('Key title', 'Value title')
   * ```
   */
  constructor(key?: string, value?: string) {
    this.key = key ?? 'key'
    this.value = value ?? 'value'
  }

  /**
   * Adds a row to the table.
   *
   * ```javascript
   * table.addRow('First key', 'First value')
   * table.addRow('Second key', 'Second value')
   * ```
   */
  addRow(key: string, value: string): Table {
    this.rows.push({ key, value })
    return this
  }

  /**
   * Returns the table as a string.
   *
   * ```javascript
   * console.log(table.toString())
   * // output:
   * // ┌───────────┬─────────────┐
   * // │Key title  │Value title  │
   * // ├───────────┼─────────────┤
   * // │First key  │First value  │
   * // ├───────────┼─────────────┤
   * // │Second key │Second value │
   * // └───────────┴─────────────┘
   * ```
   */
  toString(): string {
    let output: string = ''

    const kLength = getLargestLength([...this.rows.map(row => row.key)].concat(this.key)) + 1
    const vLength = getLargestLength([...this.rows.map(row => row.value)].concat(this.value)) + 1

    output += `┌${'─'.repeat(kLength)}┬${'─'.repeat(vLength)}┐\n│${this.key.padEnd(kLength, ' ')}│${this.value.padEnd(vLength, ' ')}│`

    this.rows.forEach(row => (output += `\n├${'─'.repeat(kLength)}┼${'─'.repeat(vLength)}┤\n│${row.key.padEnd(kLength, ' ')}│${row.value.padEnd(vLength, ' ')}│`))

    output += `\n└${'─'.repeat(kLength)}┴${'─'.repeat(vLength)}┘`

    return output
  }
}
