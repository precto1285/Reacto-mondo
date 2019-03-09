import React, { useState } from 'react';

const OneComp = props => {

  const [showComp, setComp] = useState({
    showData: false
  })

  const onClickHandler = () => {
    const show = showComp.showData;
    setComp({
      showData: !show
    })
  }
  return (
    <div>
      {
        showComp.showData ?
          <div>
            <h1>One Comp</h1>
            <h2>{props.name}</h2>
          </div>
          : null
      }
      <button onClick={onClickHandler}>Show</button>
    </div>
  )
}

export default OneComp;