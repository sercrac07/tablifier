import { getLargestLength } from '&/lib/strings'
import { Row } from './types'

export class Table {
  key: string = 'key'
  value: string = 'value'
  rows: Row[] = []

  constructor(key?: string, value?: string) {
    this.key = key ?? 'key'
    this.value = value ?? 'value'
  }

  addRow(key: string, value: string): Table {
    this.rows.push({ key, value })
    return this
  }

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
