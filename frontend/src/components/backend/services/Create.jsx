import React, { useState, useRef, useMemo } from 'react';
import Header from '../../common/Header'
import SideBar from '../../common/SideBar'
import Footer from '../../common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { apiurl, token } from '../../common/http'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react';

const Create = ({placeholder}) => {
  const editor = useRef(null);
	const [content, setContent] = useState('');
	const [isDisable, setIsDisable] = useState(false);
	const [imageId, setImageId] = useState(null);

  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Content'
  }),
  [placeholder]
);

const userToken = token(); 
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: 'onChange',
    });

   const navigate = useNavigate();

    const onSubmit = async (data) => {
      const newData = {...data , "content" : content , "imageId" : imageId}
      const res = await fetch(apiurl+'services' , {
            method: 'POST',
            headers : {
              'content-type' : 'application/json',
              Accept : 'application/json',
              Authorization : `Bearer ${userToken}`
            },
            body : JSON.stringify(newData)
          });
      
          const result = await res.json();
          if(result.status == true){
            navigate('/admin/services')
            toast.success(result.message);
          }else{
            toast.error(result.message);
          }
    }

    const handleFile = async (e)=>{

      const formData = new FormData();
      const file = e.target.files[0];
      if (!file) {
        toast.error("No file selected!");
        return;
      }    
      formData.append('image' , file);
      console.log(formData);
      const res = await fetch(apiurl+'temp-images' , {
        method: 'POST',
        headers : {
          Accept : 'application/json',
          Authorization : `Bearer ${userToken}`
        },
        body : formData
      })
      
      .then(response => response.json())
      .then(result =>{
        if(result.status ==  false){
          toast.error(result.errors.image[0]); 
        }else{
          setImageId(result.data.id);
        }
      })
      
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
                  <h4 className='h5'>Services / Create</h4>
                  <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                </div>
                <hr />

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-label'>Name</label>
                    <input 
                    {
                      ...register('title' , {
                        required : "The title field is required"
                      })
                    }
                     type="text" placeholder='Title' className={`form-control ${errors.title && 'is-invalid'}`} />
                     {errors.title && (
                      <p className="invalid-feedback">{errors.title?.message}</p>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-label'>Slug</label>
                    <input
                     {
                      ...register('slug' , {
                        required : "The slug field is required"
                      })
                    }
                     type="text" placeholder='Slug' className={`form-control ${errors.slug && 'is-invalid'}`} />
                     {errors.slug && (
                      <p className="invalid-feedback">{errors.slug?.message}</p>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-label'>Short Description</label>
                    <textarea 
                    {
                      ...register('short_desc')
                    }
                    className='form-control' placeholder='Short Description' rows={4} ></textarea>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="" className='form-label'>Content</label>
                    <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} 
                    onBlur={newContent => setContent(newContent)} 
                    onChange={newContent => {}}
                  />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="" className='form-label'>Image</label>
                    <input type="file" placeholder='Slug' className={`form-control `} onChange={handleFile} />
                     
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="" className='form-label'>Status</label>
                    <select className='form-control'
                    {
                      ...register('status')
                    }
                    > 
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>

                  <button disabled={isDisable} className='btn btn-primary' type="submit">Submit</button>
                </form>

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

export default Create
