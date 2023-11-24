import React, { useEffect, useState } from 'react'
import "./index.sass"
import "./index.css"

function Project() {

  const [theme, setTheme] = useState(localStorage.getItem("Theme") ? JSON.parse(localStorage.getItem("Theme")) : false)

  useEffect(() => {
    localStorage.setItem('Theme', JSON.stringify(theme))
    document.body.classList.toggle("dark")
  }, [theme])

  return (
    <>
      <section>
        <button onClick={()=>setTheme()}>change Theme</button>
        <h1>welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora velit non perspiciatis distinctio a aspernatur aut? Distinctio enim optio itaque commodi. Corrupti officia, consectetur nobis ratione optio vero facere sint ducimus distinctio cum modi dicta saepe adipisci sapiente repudiandae praesentium sunt ab? Sapiente eos tenetur, obcaecati facilis, placeat magnam sit quae nemo quaerat quas doloremque! Quos dolores aliquid optio, quidem odio id similique in, maiores obcaecati omnis amet a. Expedita rem consequuntur soluta repellat fuga, fugiat recusandae corrupti, similique officiis temporibus odit sunt ex tempore perferendis quo voluptate atque quae illo, eligendi assumenda. Itaque illo ullam dignissimos at velit.</p>
      </section>
    </>
  )
}

export default Project