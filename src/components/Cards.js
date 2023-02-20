import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocard, addtocardClear, closemodal, datafun, openmodal } from '../Redux/HomeRedux';
import alanBtn from '@alan-ai/alan-sdk-web';

const Cards = () => {
    const { ismodal, data, carddata } = useSelector((state) => state.reduxhome)
    const dispatch = useDispatch()
    console.log(carddata);

    useEffect(() => {
        alanBtn({
            key: 'b0a5df983c6834c41219a2a094bdb4972e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'getMenu') {
                    dispatch(datafun(commandData.data))
                }
                else if (commandData.command === 'openmodal') {
                    dispatch(openmodal(true))
                }
                else if (commandData.command === 'closemodal') {
                    dispatch(closemodal(false))
                }
                else if (commandData.command === 'addtocard') {
                    dispatch(addtocard(commandData.data))
                }
                else if (commandData.command === 'mycardClear') {
                    dispatch(addtocardClear(commandData.data))
                }
            }
        });
    }, [])
    // /////////////////
    // /////////////////
    return (
        <>
            {data.length > 0 ?
                <div className='album py-3 bg-light'>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            {data.map((item) => (
                                <div className="col my-2" key={item.id}>
                                    <div className="card shadow-sm p-3" >
                                        <div className="card-title">
                                            <h4 className="text-muted">Product #{item.id}</h4>
                                        </div>
                                        <img src={item.image} alt="" className="card-image" style={{ height: '250px' }} />
                                        <div className="card-body">
                                            <p className='card-text '>{item.title.slice(0, 20)}</p>
                                            <p className='card-text text-muted'>{item.description.slice(0, 50)}</p>
                                        </div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <span className='text-muted'>{item.category}</span>
                                            <span className='text-muted'>${item.price}</span>
                                        </div>
                                        <p className='text-muted my-3'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                        </svg> add product number (id)</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {ismodal && <div className="modal " style={{ display: 'block', background: 'rgb(0,0,0,.8)' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">My card</h5>
                                    <button type="button" onClick={() => dispatch(closemodal())} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {carddata.map((item) => (
                                        <div className="row my-3" key={item.id}>
                                            <img src={item.image} alt={item.title} className='card-image col-4' style={{ height: '170px' }} />
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <h4 className="text-muted">{item.title}</h4>
                                                    <p className="text-muted">{item.description.slice(0, 40)}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <span className="text-muted">${item.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={() => dispatch(addtocardClear())} className="btn btn-danger">Clear Card</button>
                                    <button type="button" onClick={() => dispatch(closemodal())} className="btn btn-secondary">close</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                : <h1 className='loader'>Mikrafonni bosing va "open my shop" ni chaqiring !</h1>}

        </>

    )
}

export default Cards
