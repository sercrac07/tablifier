import { allNumSum } from './lib/array'
import { Symbols } from './lib/consts'
import { getLargestLength } from './lib/strings'

/**
 * Create a new table.
 *
 * ```javascript
 * const table = new Table()
 * table.addRow('This is the key', 'This is the value')
 * ```
 */
export class Table {
  keys: string[] = []
  rows: string[][] = []

  /**
   * Create the table. You can pass the key and value title as parameters.
   *
   * ```
   * const table = new Table('Key title', 'Value title')
   * ```
   */
  constructor(...keys: string[]) {
    this.keys.push(...keys)
  }

  /**
   * Adds a row to the table.
   *
   * ```javascript
   * table.addRow('First key', 'First value')
   * table.addRow('Second key', 'Second value')
   * ```
   */
  addRow(...values: string[]): Table {
    this.rows.push(values)
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

    const lengths: number[] = []

    this.keys.forEach((key, index) => {
      const length = getLargestLength([key, ...this.rows.map(row => row[index])])
      lengths.push(length)
    })

    output += `${Symbols.TopLeft}${this.keys.map((_, index) => `${Symbols.LineHorizontal.repeat(lengths[index])}`).join(Symbols.HorizontalTopBreak)}${Symbols.TopRight}\n`
    output += `${Symbols.LineVertical}${this.keys.map((key, index) => `${key.padEnd(lengths[index], ' ')}`).join(Symbols.LineVertical)}${Symbols.LineVertical}\n`
    output += `${Symbols.VerticalLeftBreak}${this.keys.map((_, index) => `${Symbols.LineHorizontal.repeat(lengths[index])}`).join(Symbols.Middle)}${Symbols.VerticalRightBreak}\n`

    output += `${this.rows
      .map((row, index) => {
        if (this.keys[index] === undefined) return
        else return `${Symbols.LineVertical}${row.map((r, index) => `${r.padEnd(lengths[index], ' ')}`).join(Symbols.LineVertical)}${Symbols.LineVertical}\n`
      })
      .filter(row => row !== undefined)
      .join(`${Symbols.LineVertical}${this.keys.map((_, index) => `${' '.padEnd(lengths[index], ' ')}`).join(Symbols.LineVertical)}${Symbols.LineVertical}\n`)}`

    output += `${Symbols.BottomLeft}${this.keys.map((_, index) => `${Symbols.LineHorizontal.repeat(lengths[index])}`).join(Symbols.HorizontalBottomBreak)}${Symbols.BottomRight}`

    return output
  }
}
