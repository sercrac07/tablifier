import { allNumSum } from './lib/array'
import { Symbols } from './lib/consts'
import { getLargestLength } from './lib/strings'

/** The `Table` class facilitates the creation of customizable tables, offering users the ability to define table headers and add rows dynamically. */
export class Table<T extends string> {
  private keys: T[] = []
  private rows: (string | undefined)[][] = []

  /** Initializes a new table instance with the provided header configuration. */
  constructor(...keys: T[]) {
    this.keys.push(...keys)
  }

  /** By supplying the `addRow` function with the desired row data, users can effortlessly incorporate new information into their table structure. */
  addRow(...values: (string | undefined)[]): this {
    this.rows.push(values)
    return this
  }

  /** Returns a string representation of the table. */
  toString(): string {
    let output: string = ''

    const lengths: number[] = []

    this.keys.forEach((key, index) => {
      const length = getLargestLength([key, ...this.rows.map(row => row[index] ?? '')])
      lengths.push(length)
    })

    output += `${Symbols.TopLeft}${this.keys.map((_, index) => `${Symbols.LineHorizontal.repeat(lengths[index])}`).join(Symbols.HorizontalTopBreak)}${Symbols.TopRight}\n`
    output += `${Symbols.LineVertical}${this.keys.map((key, index) => `${key.padEnd(lengths[index], ' ')}`).join(Symbols.LineVertical)}${Symbols.LineVertical}\n`
    output += `${Symbols.VerticalLeftBreak}${this.keys.map((_, index) => `${Symbols.LineHorizontal.repeat(lengths[index])}`).join(Symbols.Middle)}${Symbols.VerticalRightBreak}\n`

    output += `${this.rows
      .map(row => {
        const show: string[] = []

        this.keys.forEach((_, index) => {
          show.push(row[index] ?? '')
        })

        return `${Symbols.LineVertical}${show.map((r, index) => `${r.padEnd(lengths[index], ' ')}`).join(Symbols.LineVertical)}${Symbols.LineVertical}`
      })
      .filter(row => row !== undefined)
      .join('\n')}\n`

    output += `${Symbols.BottomLeft}${this.keys.map((_, index) => `${Symbols.LineHorizontal.repeat(lengths[index])}`).join(Symbols.HorizontalBottomBreak)}${Symbols.BottomRight}`

    return output
  }

  /** Returns a JSON representation of the table. */
  toJSON(): Record<T, string | undefined>[] {
    const res: Record<T, string>[] = []

    this.rows.forEach((row, index) => {
      const r: any = {}
      this.keys.forEach((key, i) => {
        r[key] = row[i]
      })
      res.push(r)
    })

    return res
  }
}
