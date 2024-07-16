import React from 'react'

interface SpacerProps {
  height: string;
}

const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return (
    <div className={`h-${height} w-full`}>&nbsp;</div>
  )
}

export default Spacer