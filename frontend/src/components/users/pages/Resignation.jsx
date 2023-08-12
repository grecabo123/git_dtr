import React, { useState } from 'react'
import { Editor } from 'primereact/editor';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



function Resignation() {


    const [msg_data, setmsg] = useState({
        reason: "",
        date_leave: "",
        msg: "",
    });
    const [text, setText] = useState("")
    const handleInput = (e) => {
        setmsg({ ...msg_data, [e.target.name]: e.target.value });
    }



    return (
        <div>
            <Panel header="Resignation Message">
                <div className="container-fluid">
                    <form>
                        <div className="row">
                            <div className="col-lg-6 mb-2">
                                <label htmlFor="" className="form-label">
                                    Reasons
                                </label>
                                <InputText className='w-100' name='reasons' placeholder='' onChange={handleInput} />
                            </div>
                            <div className="col-lg-6 mb-2">
                                <label htmlFor="" className="form-label">
                                    Date of Resign
                                </label>
                                <InputText className='w-100' name='leav' placeholder='' onChange={handleInput} />
                            </div>
                            <div className="col-lg-12 mt-2 mb-3">
                                <Editor
                                    style={{ height: '300px' }}
                                    name='msg_text'
                                    value={text}
                                    onTextChange={(e) => setText(e.htmlValue)}
                                />
                            </div>
                        </div>
                        <div className="col-mt-5">
                            <Button className='p-button-info p-button-sm' label='Send Message' />
                        </div>
                    </form>
                </div>
            </Panel>
        </div>
    )
}

export default Resignation
