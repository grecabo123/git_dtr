import React from 'react'

function Footer() {
    return (
        <footer className='mt-auto bg-footer p-3'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mt-5">
                            <p className="text-light text-center text-md-left">Copyright © 2023 <span href="" className='text-light' target="_blank">iTech-RAR Solutions,
                                Inc. | GakkouSoft </span>. <br /> All rights reserved</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="mt-5">
                            <p className="text-light text-center text-md-left">Powered by: KumoSoft </p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-light">
                        <li>
                            <a target="_blank" className='text-light' href="https://icons8.com">Icon by</a>
                        </li>
                        <li>
                            <a target="_blank" className='text-light' href="https://icons8.com">Icons8</a>
                        </li>
                        <li>
                            <a className='text-light' href="https://www.flaticon.com/free-icons/pay" title="pay icons">Freepik - Flaticon</a>
                        </li>
                        <li>
                            <a className='text-light' href="https://www.freepik.com/free-vector/business-avatars-set_4377997.htm#query=profile%20logo&position=40&from_view=search&track=sph">Image by macrovector_official</a> on Freepik
                        </li>
                        {/* <p className="text-light text-center text-md-left mb-0 d-none d-md-block">Powered by: KumoSoft </p> */}
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="text-muted text-center text-md-left">Copyright © 2023 <a href="" target="_blank">iTech-RAR Solutions,
                            Inc. | GakkouSoft </a>. All rights reserved</p>
                    </div>
                    <div className="col-lg-4">
                        <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">Powered by: KumoSoft </p>
                    </div>
                    <div className="col-lg-4">
                        <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">
                            <a target="_blank" href="https://icons8.com"></a>Icon by
                            <a target="_blank" href="https://icons8.com">Icons8</a>,&nbsp;
                            <a href="https://www.flaticon.com/free-icons/pay" title="pay icons">Freepik - Flaticon</a>
                            <a href="https://www.freepik.com/free-vector/business-avatars-set_4377997.htm#query=profile%20logo&position=40&from_view=search&track=sph">Image by macrovector_official</a> on Freepik
                        </p>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer
