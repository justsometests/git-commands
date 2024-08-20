export function invertNumber(value: number): number {
  const stack: number[] = [];
  let currentValue = value;

  if (value === 0) {
    return value;
  }

  while (currentValue > 0) {
    stack[stack.length] = currentValue % 10;
    currentValue = Math.floor(currentValue / 10);
  }

  for (let i = stack.length - 1; i >= 0; i -= 1) {
    currentValue += stack[i] * 10 ** (stack.length - 1 - i);
  }

  return currentValue;
}

export function invertString(value: string): string {
  const stack: string[] = [];
  let result = "";

  for (let i = 0; i < value.length; i++) {
    stack.push(value[i]);
  }

  for (let i = 0; i < value.length; i++) {
    result += stack.pop();
  }

  return result;
}
