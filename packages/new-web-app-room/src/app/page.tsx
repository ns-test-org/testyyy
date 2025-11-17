'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* True Infinite Animated Orange Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 overflow-hidden">
        {/* Layer 1: Fast moving fine grid */}
        <div className="infinite-grid-1" />
        
        {/* Layer 2: Medium speed grid */}
        <div className="infinite-grid-2" />
        
        {/* Layer 3: Slow moving large grid */}
        <div className="infinite-grid-3" />
        
        {/* Layer 4: Diagonal crosshatch pattern */}
        <div className="infinite-grid-4" />
      </div>
      <div className="relative z-10 bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 rounded-2xl shadow-2xl p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Calculator</h1>
        
        {/* Display */}
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <div className="text-right text-white text-3xl font-mono overflow-hidden">
            {display}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button
            onClick={clearAll}
            className="col-span-2 bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            Clear
          </button>
          <button
            onClick={clearEntry}
            className="bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            CE
          </button>
          <button
            onClick={() => inputOperation('÷')}
            className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            ÷
          </button>

          {/* Row 2 */}
          <button
            onClick={() => inputNumber('7')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            7
          </button>
          <button
            onClick={() => inputNumber('8')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            8
          </button>
          <button
            onClick={() => inputNumber('9')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            9
          </button>
          <button
            onClick={() => inputOperation('×')}
            className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            ×
          </button>

          {/* Row 3 */}
          <button
            onClick={() => inputNumber('4')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            4
          </button>
          <button
            onClick={() => inputNumber('5')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            5
          </button>
          <button
            onClick={() => inputNumber('6')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            6
          </button>
          <button
            onClick={() => inputOperation('-')}
            className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            -
          </button>

          {/* Row 4 */}
          <button
            onClick={() => inputNumber('1')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            1
          </button>
          <button
            onClick={() => inputNumber('2')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            2
          </button>
          <button
            onClick={() => inputNumber('3')}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            3
          </button>
          <button
            onClick={() => inputOperation('+')}
            className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            +
          </button>

          {/* Row 5 */}
          <button
            onClick={() => inputNumber('0')}
            className="col-span-2 bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 text-purple-800 font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            .
          </button>
          <button
            onClick={performCalculation}
            className="bg-gradient-to-br from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-semibold py-4 rounded-lg transition-all shadow-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}













