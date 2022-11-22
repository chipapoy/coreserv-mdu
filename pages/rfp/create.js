import axios from '@/lib/axios'
import Head from 'next/head';
import Headertop from '../../components/Layouts/Headertop';
import Pagetop from '../../components/Layouts/Pagetop';
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';
import Form from '../../components/Rfp/CreateForm';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Createrfp = () => {

    const { user,newVendor } = useAuth({ middleware: 'auth' });

    const router = useRouter();
    
    const [areaData, setArea] = useState([]);
    const [vendorData, setVendor] = useState([]);
    const [vendorName, setVendorName] = useState('');
    const [contactData, setContactData] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [contactId, setContactId] = useState('');
    
    const systemArr = [
      'DESTINY',
      'GOV AGENCIES',
      'SKY CABLE',
      'SUNVISION',
      'TRI.PH'
    ];

    
    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const handleVendorName = (vendor) => {
      setVendorName(vendor);
    }

    const handleContactDetails = (contact) => {
      setContactDetails(contact.label);
      setContactId(contact.value);
    }

    useEffect(() => {
      // getCity();
      axios.get('/api/cityList')
      .then(result => {
        setArea(result.data);
      })
      .catch(error => {
        console.log(error);
      });

      axios.get('/api/vendorNameList')
      .then(result => {
        setVendor(result.data);
      })
      .catch(error => {
        console.log(error);
      });

      axios.get('/api/skyContact')
      .then(result => {
        setContactData(result.data);
      })
      .catch(error => {
        console.log(error);
      });
      
    }, []);


    const dataArrays = [{
      areaData: areaData,
      systemArr: systemArr,
      vendorData: vendorData,
      contactData: contactData
    }];

    

    const submitData = async (event) => {

      event.preventDefault();

      // console.log(vendorName.value);
      console.log(contactDetails);
      // console.log(event.target);

      await csrf();
  
      // Get data from the form.
      const data = {
        vendor_name: vendorName.value,
        address: event.target.address.value,
        contact_num: event.target.contact_num.value,
        tin_num: event.target.tin_num.value,
        company_code: event.target.company_code.value,
        sky_contact_id: contactId,
        sky_contact_person: contactDetails,
        sky_contact_num: event.target.sky_contact_num.value,
        sky_email: event.target.sky_email.value,
        internal_order1: event.target.internal_order1.value,
        internal_order2: event.target.internal_order2.value,
        area: event.target.area.value,
        system: event.target.system.value
      }

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const url = '/api/newRfp'

      axios.post(url, data)
      .then( res => {

        console.log(res);

        if(res.data === 1){
          NotificationManager.success('New RFP has been Added', 'Success');

          router.push("/rfp");
        }

      })
      .catch(err => console.log(err))
    }

    return (
        <>
            <Head><title>Coreserv MDU</title></Head>

            <div id='main_content'>
                <NotificationContainer/>
                <Headertop></Headertop>
                <div className='page'>
                    <Pagetop/>
                    <div className='row clearfix'>
                      <div className='col-md-12'>
                        <form onSubmit={submitData}>
                          <Form 
                            list={dataArrays} 
                            setVendor={handleVendorName} 
                            setContact={handleContactDetails} 
                          />
                        </form>
                      </div>                
                    </div>
                </div>
            </div>
        </>
    )

}

export default Createrfp