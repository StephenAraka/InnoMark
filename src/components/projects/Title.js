import React from 'react';

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-left text-title">
        <h2 className="text-capitalize font-weight-normal border-bottom">
          {name} {title}
        </h2>
      </div>
    </div>
  );
};

export default Title;
