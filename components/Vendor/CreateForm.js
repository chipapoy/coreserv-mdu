import Link from 'next/link'

const CreateForm = (props) => {

    // console.log(props.list[0]);

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                <div className='col-md-10'>
                    <h3 className='card-title'>Create new Vendor</h3>
                </div>
                <div className='col-md-2'>
                    <div className='float-right'>
                    {/* <Link href='/vendors'> 
                        Go back
                    </Link> */}
                    </div>
                </div>
                </div>
                <div className='card-body'>
                <div className='row'>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Vendor Name</label>
                        <input 
                            id='vendor_name'
                            type="text" 
                            className="form-control" 
                            required
                        />
                    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Vendor Code</label>
                        <input 
                            id='vendor_code'
                            type="number" 
                            className="form-control" 
                            required
                        />
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Building Name</label>
                        <input 
                            id='bldg_name'
                            type="text" 
                            className="form-control" 
                            required
                        />
                    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">City</label>
                        <select
                            id='city'
                            className='form-control'
                            required
                        >
                            <option></option>
                            {
                            props.list[0].cityData.map( (data,index) => {
                                return <option key={index}>{data.city}</option>
                            })
                            }
                        </select>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Contact Person</label>
                        <input 
                            id='contact_person'
                            type="text" 
                            className="form-control" 
                        />
                    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Contact #</label>
                        <input 
                            id='contact_num'
                            type="text" 
                            className="form-control" 
                        />
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">KAM</label>
                        <input 
                            id='kam'
                            type="text" 
                            className="form-control" 
                        />
                    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Tier</label>
                        <select
                            id='tier'
                            className='form-control'
                            required
                        >
                            <option></option>
                            {
                            props.list[0].tierArr.map( (tier,index) => {
                                return <option key={index}>{tier}</option>
                            })
                            }
                        </select>
                    </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Account</label>
                        <select
                            id='account'
                            className='form-control'
                            required
                        >
                            <option></option>
                            {
                            props.list[0].accountArr.map( (account,index) => {
                                return <option key={index}>{account}</option>
                            })
                            }
                        </select>
                    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Account Type</label>
                        <select
                            id='account_type'
                            className='form-control'
                            required
                        >
                            <option></option>
                            {
                            props.list[0].accountTypeArr.map( (account_type,index) => {
                                return <option key={index}>{account_type}</option>
                            })
                            }
                        </select>
                    </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">Payment Terms</label>
                        <select
                            id='payment_terms'
                            className='form-control'
                            required
                        >
                            <option></option>
                            {
                            props.list[0].paymentTermsArr.map( (payment_terms,index) => {
                                return <option key={index}>{payment_terms}</option>
                            })
                            }
                        </select>
                    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="form-group">
                        <label className="form-label">SOA Type</label>
                        <select
                            id='soa_type'
                            className='form-control'
                            required
                        >
                            <option></option>
                            {
                            props.list[0].soaTypeArr.map( (soa_type,index) => {
                                return <option key={index}>{soa_type}</option>
                            })
                            }
                        </select>
                    </div>
                    </div>
                </div>
                    

                
                </div>
                <div className="card-footer text-right">
                        <button type="submit" className="btn btn-outline-primary mr-1">Submit</button>
                        <button type="button" className="btn btn-outline-danger">
                            <Link href='/vendors'> 
                                Cancel
                            </Link>
                        </button>
                </div>
            </div>
        </>
    )

}

export default CreateForm