import Link from 'next/link'
import Select from 'react-select'
import { useState,useEffect } from 'react';
import axios from '@/lib/axios'

const UpdateForm = (props) => {

    const [initVendor, setVendor] = useState({
      'label': props.initialData[1],
      'value':props.initialData[1]
    });
    const [address, setAddress] = useState(props.initialData[2]);
    const [phoneNum, setPhoneNum] = useState(props.initialData[3]);
    const [tinNum, setTinNum] = useState(props.initialData[4]);
    const [companyCode, setCompanyCode] = useState(props.initialData[5]);
    const [contactNum, setContactNum] = useState(props.initialData[8]);
    const [emailAdd, setEmailAdd] = useState(props.initialData[9]);
    const [intOrder1, setIntOrder1] = useState(props.initialData[10]);
    const [intOrder2, setIntOrder2] = useState(props.initialData[11]);
    const [area, setArea] = useState(props.initialData[12]);
    const [system, setSystem] = useState(props.initialData[13]);

    const [initContact, setInitContact] = useState([]);
    
    

    useEffect( () => {

      axios.get('/api/skyInitContactPerson/' + props.initialData[6])
      .then(result => {
        setInitContact(result.data[0]);
      })
      .catch(error => {
        console.log(error);
      });

    },[]);

    const getDetails = (data) => {

        props.setContact(data.label);
        console.log(data.value)

        axios.get('/api/skyContactDetails/' + data.value)
        .then(result => {
            console.log(result.data[0]);

            setContactNum(result.data[0].contact_number);
            setEmailAdd(result.data[0].email_add);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleAddress = (e) => {
      setAddress(e.target.value);
    }

    const handlePhoneNum = (e) => {
      setPhoneNum(e.target.value);
    }

    const handleTinNum = (e) => {
      setTinNum(e.target.value);
    }

    const handleCompanyCode = (e) => {
      setCompanyCode(e.target.value);
    }

    const handleContactNum = (e) => {
      setContactNum(e.target.value);
    }
    
    const handleEmailAdd = (e) => {
      setEmailAdd(e.target.value);
    }

    const handleIntOrder1 = (e) => {
      setIntOrder1(e.target.value);
    }

    const handleIntOrder2 = (e) => {
      setIntOrder2(e.target.value);
    }

    const handleArea = (e) => {
      setArea(e.target.value);
    }

    const handleSystem = (e) => {
      setSystem(e.target.value);
    }


    return (
        <>
            <div className='card'>
                <div className='card-header'>
                  <div className='col-md-10'>
                      <h3 className='card-title'>Update RFP</h3>
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
                            value={initVendor}
                            options={props.vendorData} 
                            onChange={ (vendor) =>  props.setVendor(vendor)   }
                            isDisabled={true}
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
                              value={address}
                              onChange={handleAddress}
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
                              value={phoneNum}
                              onChange={handlePhoneNum}
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
                              value={tinNum}
                              onChange={handleTinNum}
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
                              value={companyCode}
                              onChange={handleCompanyCode}
                          />
                      </div>
                      </div>
                      <div className='col-md-6'>
                      <div className="form-group">
                          <label className="form-label">Sky Contact Person</label>
                          <Select 
                            value={initContact}
                            options={props.contactData} 
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
                              onChange={handleContactNum}
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
                              onChange={handleEmailAdd}
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
                              value={intOrder1}
                              onChange={handleIntOrder1}
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
                              value={intOrder2}
                              onChange={handleIntOrder2}
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
                              props.areaData.map( (area,index) => {
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
                              props.systemData.map( (system,index) => {
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

export default UpdateForm