import React, { useState } from 'react';

const PokeInput: React.FC = () => {
   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
   };

   return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </>
   );
};

export default PokeInput;