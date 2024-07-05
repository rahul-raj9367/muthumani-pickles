import React, { useEffect } from 'react'

export default function Gallery() {
  useEffect(() => {
    document.title = 'Gallery - MuthuMani Home Made Pickles and Turmeric Powder';
  }, []);
  return (
    <div>
      Gallery
    </div>
  )
}
