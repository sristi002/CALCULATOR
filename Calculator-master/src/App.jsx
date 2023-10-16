import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => setResult(result.concat(e.target.id));
  const clear = () => setResult('');
  const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='bg-blue-600 p-8 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-4 rounded-md shadow-md w-[90vw] max-w-[400px] mx-auto'>
        <div className='text-xl text-center font-bold text-blue-500'>Calculator</div>
        <input type="text" value={result} disabled className='w-full p-2 mb-4' />

        <div className='grid grid-cols-4 gap-4'>
          <button className='bg-red-500 text-white p-2 rounded-md' onClick={clear}>
            AC
          </button>
          <button className='bg-red-500 text-white p-2 rounded-md' onClick={deleteEl}>
            DEL
          </button>
          <button id='.' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            .
          </button>
          <button id='/' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            /
          </button>
          <button id='7' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            7
          </button>
          <button id='8' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            8
          </button>
          <button id='9' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            9
          </button>
          <button id='*' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            *
          </button>
          <button id='4' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            4
          </button>
          <button id='5' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            5
          </button>
          <button id='6' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            6
          </button>
          <button id='-' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            -
          </button>
          <button id='1' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            1
          </button>
          <button id='2' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            2
          </button>
          <button id='3' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            3
          </button>
          <button id='+' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            +
          </button>
          <button id='00' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            00
          </button>
          <button id='0' className='bg-blue-500 text-white p-2 rounded-md' onClick={handleClick}>
            0
          </button>
          <button id='=' className='bg-green-500 text-white p-2 rounded-md col-span-2' onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
