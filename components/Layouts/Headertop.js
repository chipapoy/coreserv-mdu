import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const Headertop = ({ user }) => {

    const router = useRouter()

    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <>
            <div id="header_top" className="header_top dark">
                <div className="container">
                    <div className="hleft">
                        <div className="dropdown">
                            <a href="#" className="nav-link user_btn"><img className="avatar" src={`/default.png`} alt=""/></a>
                            {/* <a href="#" className="nav-link icon"><i className="fa fa-search"></i></a> */}
                            {/* <a href="#"  className="nav-link icon app_inbox"><i className="fa fa-envelope"></i></a> */}
                            {/* <a href="/dashboard" title="Dashboard" className="nav-link icon"><i className="fa fa-gauge"></i></a>
                            <a href="/rfp" title="RFP"  className="nav-link icon xs-hide"><i className="fa-solid fa-city"></i></a> */}
                            {/* <a href="#"  className="nav-link icon app_file xs-hide"><i className="fa fa-folder"></i></a> */}
                            <Link href='/dashboard'><a title="Dashboard" className="nav-link icon"><i className="fa fa-gauge"></i></a></Link>
                            <Link href='/rfp'><a title="RFP" className="nav-link icon"><i className="fa fa-file-invoice"></i></a></Link>
                            <Link href='/vendors'><a title="Vendor" className="nav-link icon"><i className="fa fa-building"></i></a></Link>
                        </div>
                    </div>
                    {/* <div className="hright">
                        <div className="dropdown">
                            <a href="#" className="nav-link icon settingbar"><i className="fa fa-bell"></i></a>
                            <a href="#" className="nav-link icon menu_toggle"><i className="fa fa-navicon"></i></a>
                        </div>            
                    </div> */}
                </div>
            </div>
        </>
    )

}

export default Headertop