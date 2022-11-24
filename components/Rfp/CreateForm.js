import Link from 'next/link'
import Select from 'react-select'
import { useState,useEffect } from 'react';
import axios from '@/lib/axios'

const CreateForm = (props) => {

    // const [contactId, setContactId] = useState('');
    const [contactNum, setContactNum] = useState('');
    const [emailAdd, setEmailAdd] = useState('');

    // console.log(props);
    // console.log('check');

    const getDetails = (data) => {

        props.setContact(data);
        // console.log(data.value)

        axios.get('/data/skyContactDetails/' + data.value)
        .then(result => {
            // console.log(result.data[0]);

            setContactNum(result.data[0].contact_number);
            setEmailAdd(result.data[0].email_add);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <>
            <div className='card'>
                <div className='card-header'>
                  <div className='col-md-10'>
                      <h3 className='card-title'>Create new RFP</h3>
                  </div>
                  <div className='col-md-2'>
                      <div className='float-right'>
                      </div>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='row'>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Vendor Name</label>
                          <Select 
                            options={props.list[0].vendorData} 
                            onChange={ (vendor) =>  props.setVendor(vendor)   }
                          />
                      </div>
                      </div>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Address</label>
                          <input 
                              id='address'
                              type="text" 
                              className="form-control" 
                              required
                          />
                      </div>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Phone #</label>
                          <input 
                              id='contact_num'
                              type="text" 
                              className="form-control" 
                              required
                          />
                      </div>
                      </div>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">TIN</label>
                          <input 
                              id='tin_num'
                              type="text" 
                              className="form-control" 
                              required
                          />
                      </div>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Company Code</label>
                          <input 
                              id='company_code'
                              type="text" 
                              className="form-control" 
                          />
                      </div>
                      </div>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Sky Contact Person</label>
                          <Select 
                            options={props.list[0].contactData} 
                            onChange={ (data) => getDetails(data) }
                          />
                      </div>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Sky Phone #</label>
                          <input 
                              id='sky_contact_num'
                              type="text" 
                              className="form-control" 
                              value={contactNum}
                          />
                      </div>
                      </div>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Sky Email Address</label>
                          <input 
                              id='sky_email'
                              type="text" 
                              className="form-control" 
                              value={emailAdd}
                          />
                      </div>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Internal Order 1</label>
                          <input 
                              id='internal_order1'
                              type="text" 
                              className="form-control" 
                          />
                      </div>
                      </div>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Internal Order 2</label>
                          <input 
                              id='internal_order2'
                              type="text" 
                              className="form-control" 
                          />
                      </div>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Area</label>
                          <select
                              id='area'
                              className='form-control'
                              required
                          >
                              <option></option>
                              {
                              props.list[0].areaData.map( (area,index) => {
                                  return <option key={index}>{area.city}</option>
                              })
                              }
                          </select>
                      </div>
                      </div>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">System</label>
                          <select
                              id='system'
                              className='form-control'
                              required
                          >
                              <option></option>
                              {
                              props.list[0].systemArr.map( (system,index) => {
                                  return <option key={index}>{system}</option>
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
                            <Link href='/rfp'> 
                                Cancel
                            </Link>
                        </button>
                </div>
            </div>
        </>
    )

}

export default CreateForm