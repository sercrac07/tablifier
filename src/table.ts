import { Symbols } from './lib/consts'
import { getLargestLength } from './lib/strings'
import { Nullish } from './types'

/** The `Table` class facilitates the creation of customizable tables, offering users the ability to define table headers and add rows dynamically. */
export class Table<T extends string> {
  private keys: T[] = []
  private rows: (undefined | string)[][] = []

  /** Initializes a new table instance with the provided header configuration. */
  constructor(...keys: T[]) {
    const thisKeys = keys.map(val => {
      if (typeof val === 'string') return val
      else if (typeof val === 'number' || typeof val === 'bigint' || typeof val === 'boolean') return String(val)
      else if (typeof val === 'object') return JSON.stringify(val)
      else throw new TypeError('Key must be a string')
    })
    this.keys.push(...(thisKeys as any))
  }

  /** By supplying the `addRow` function with the desired row data, users can effortlessly incorporate new information into their table structure. */
  addRow(...values: Nullish<string>[]): this {
    const thisValues = values.map(val => {
      if (typeof val === 'string') return val
      else if (val === null || val === undefined) return undefined
      else if (typeof val === 'number' || typeof val === 'bigint' || typeof val === 'boolean') return String(val)
      else if (typeof val === 'object') return JSON.stringify(val)
      else throw new TypeError('Value must be a string')
    })

    this.rows.push(thisValues)
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
