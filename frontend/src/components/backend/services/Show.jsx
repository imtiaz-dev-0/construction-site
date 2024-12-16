import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import SideBar from '../../common/SideBar'
import Footer from '../../common/Footer'
import { apiurl , token } from '../../common/http'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from 'react-bootstrap/Spinner';
import { InfinitySpin } from 'react-loader-spinner'

const Show = () => {
  const userToken = token(); 
  const [services , setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () =>{
    setLoading(true);
    const res = await fetch(apiurl+'services' , {
      method: 'GET',
      headers : {
        'content-type' : 'application/json',
        Accept : 'application/json',
        Authorization : `Bearer ${userToken}`
      }
    });

    const result = await res.json();
    setServices(result.data);
    setLoading(false); 
  }
    
  useEffect(()=>{
    fetchServices();
  },[]);

    // delete API hit heere 
    const handleDelete = async (id) =>{
      console.log(id);
      const res = await fetch(`${apiurl}services/${id}`, {
        method: 'DELETE',
        headers : {
          'content-type' : 'application/json',
          Accept : 'application/json',
          Authorization : `Bearer ${userToken}`
        }
      });
      const result = await res.json();
      console.log(result);
      if(result.status == true){
        toast.success(result.message);
        fetchServices();
      }else(
        toast.error(result.errors)
      )
    }


  return (
   <>
    <Header/>
      <main className=''>
       <div className="container my-5">
       <div className='row'>
          <div className='col-md-3'>
          <SideBar/>
          </div>
          <div className='col-md-9 '>
            <div className="card shadow border-0">
              <div className="card-body p-4 ">
                <div className='d-flex justify-content-between'>
                  <h4 className='h5'>Services</h4>
                  <Link to="/admin/services/create" className='btn btn-primary'>Create</Link>
                </div>
                <hr />
                {loading ? (
                <div className='d-flex justify-content-center'>
                   <InfinitySpin
                  visible={true}
                  width="200"
                  color="#4fa94d"
                  ariaLabel="infinity-spin-loading"
                  />
                </div>
                  ) : (
                <table className='table table-striped table-bordered'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      services && services.length > 0 ? (
                        services.map(service => (
                          <tr key={service.id}>
                            <td>{service.id}</td>
                            <td>{service.title}</td>
                            <td>{service.slug}</td>
                            <td>  
                              {
                                service.status === 1 
                                  ? <span className="text-white bg-success" style={{ borderRadius: '5px', padding: '2px 4px' }}>Active</span> 
                                  : <span className="text-white bg-danger" style={{ borderRadius: '5px', padding: '2px 4px' }}>Inactive</span>
                              }
                            </td>
                            <td>
                              <Link to={`/admin/services/edit/${service.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                              <button className='btn btn-secondary btn-sm ms-2' onClick={() => handleDelete(service.id)}>Delete</button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center">Services not found</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
                  )}
              </div>
            </div>
          </div>
        </div>
       </div>
      </main>
    <Footer/>
   </>
  )
}

export default Show
