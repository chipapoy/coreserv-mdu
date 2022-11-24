import axios from '@/lib/axios'
import Head from 'next/head';
import Headertop from '../../components/Layouts/Headertop';
import Pagetop from '../../components/Layouts/Pagetop';
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';
import Form from '../../components/Vendor/CreateForm';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Createvendor = () => {

    const { user,newVendor } = useAuth({ middleware: 'auth' });

    const router = useRouter();
    
    const [cityData, setCity] = useState([]);
    const [vendor_name, setVendorName] = useState('');
    const [errors, setErrors] = useState([]);
    
    const tierArr = [
      'Deactivated',
      'Hub',
      'None',
      'Not in List',
      'Tier 1',
      'Tier 2',
      'Tier 3'
    ];

    const accountArr = [
      'DESTINY',
      'GOV AGENCIES',
      'INTER ISLAND INFO SYS INC.',
      'SKY CABLE',
      'SUNVISION',
      'TRI.PH'
    ];

    const accountTypeArr = [
      'CORPO',
      'GOV AGENCIES',
      'MDU',
      'TRI PH'
    ];

    const paymentTermsArr = [
      'Annual',
      'Monthly',
      'Semi-Annual',
      'TERMINATED'
    ];

    const soaTypeArr = [
      'Soft Copy',
      'Hard Copy'
    ];

    
    const csrf = () => axios.get('/sanctum/csrf-cookie');

    useEffect(() => {
      // getCity();
      axios.get('/data/cityList')
      .then(result => {
        setCity(result.data);
      })
      .catch(error => {
        console.log(error);
      });
      
    }, []);

    const dataArrays = [{
      cityData: cityData,
      tierArr: tierArr,
      accountArr: accountArr,
      accountTypeArr: accountTypeArr,
      paymentTermsArr: paymentTermsArr,
      soaTypeArr: soaTypeArr
    }];

    const submitData = async (event) => {

      event.preventDefault();

      await csrf();
  
      // Get data from the form.
      const data = {
        vendor_name: event.target.vendor_name.value,
        vendor_code: event.target.vendor_code.value,
        bldg_name: event.target.bldg_name.value,
        city: event.target.city.value,
        contact_person: event.target.contact_person.value,
        contact_num: event.target.contact_num.value,
        kam: event.target.kam.value,
        tier: event.target.tier.value,
        account: event.target.account.value,
        account_type: event.target.account_type.value,
        payment_terms: event.target.payment_terms.value,
        soa_type: event.target.soa_type.value
      }

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const url = '/data/insertData'

      axios.post(url, data)
      .then( res => {

        console.log(res);

        if(res.data === 1){
          NotificationManager.success('New Vendor Added', 'Success');

          router.push("/vendors");
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
                          <Form list={dataArrays}/>
                        </form>
                      </div>                
                    </div>
                </div>
            </div>
        </>
    )

}

export default Createvendor