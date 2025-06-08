import { add } from '@monorepo/utils'

function main() {
  return `sum: ${add(1, 2)}`
}

export function test(x: number, y: number) {
  return [x, y]
}

main()
