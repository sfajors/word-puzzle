import React from 'react';

const Hint = ({ hint, additionalHint }) => {
  return (
    <div className="hint">
      <h2>Hint:</h2>
      <p>{hint}</p>
      {additionalHint && <p className="additional-hint"><span class="bold">Additional Hint:</span> {additionalHint}</p>}
    </div>
  );
};

export default Hint;
