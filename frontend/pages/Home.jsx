import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src="/paintball1.png" alt="" className='mt-3 ' style={{ width: '100%' , height:"500px"}}/>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-2 text-center mt-5">
            <button>Reservar Ahora</button>
          </div>
          <div className="col-3 gap-4">
            <img src="/paintball2.png" alt="" className='' style={{ width: '310px' , height:"343px"}}/>
          </div>
          <div className="col-3">
            <img src="/paintball3.png" alt="" className='' style={{ width: '310px' , height:"343px"}}/>
          </div>
          <div className="col-3">
            <img src="/paintball4.png" alt="" className='' style={{ width: '310px' , height:"343px"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
