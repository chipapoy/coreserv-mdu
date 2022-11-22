import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Pagetop = () => {

    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <>
            <div id="page_top" className="section-body sticky-top">
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="left">
                            <h1 className="page-title">Coreserv MDU Database</h1>
                        </div>
                        <div className="right">
                            <div className=" d-flex">
                                <button type="button" className="btn btn-facebook" onClick={logout}><i className="fa fa-power-off mr-2"></i>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Pagetop