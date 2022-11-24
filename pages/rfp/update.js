import axios from '@/lib/axios'
import Head from 'next/head';
import Headertop from '../../components/Layouts/Headertop';
import Pagetop from '../../components/Layouts/Pagetop';
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react';
import Form from '../../components/Rfp/UpdateForm';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Updaterfp = (props) => {

    const { user,newVendor } = useAuth({ middleware: 'auth' });

    const router = useRouter();

    // const data = router.query;

    const [areaData, setAreaData] = useState([]);
    const [vendorData, setVendor] = useState([]);
    const [contactData, setContactData] = useState([]);
    
    const [vendorName, setVendorName] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [initialData, setInitialData] = useState(router.query);
    
    const systemData = [
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
      setContactDetails(contact);
    }

    useEffect(() => {
      // getCity();
      axios.get('/data/cityList')
      .then(result => {
        setAreaData(result.data);
      })
      .catch(error => {
        console.log(error);
      });

      axios.get('/data/vendorNameList')
      .then(result => {
        setVendor(result.data);
      })
      .catch(error => {
        console.log(error);
      });

      axios.get('/data/skyContact')
      .then(result => {
        setContactData(result.data);
      })
      .catch(error => {
        console.log(error);
      });
      
    }, []);


    // const dataArrays = [{
    //   initialData: initialData,
    //   areaData: areaData,
    //   vendorData: vendorData,
    //   contactData: contactData
    // }];

    // console.log(dataArrays);
    

    const submitData = async (event) => {

      event.preventDefault();
      console.log(contactDetails);
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
                            initialData={initialData} 
                            areaData={areaData} 
                            systemData={systemData}
                            vendorData={vendorData} 
                            contactData={contactData} 
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

export default Updaterfp