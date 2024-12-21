import React, { useEffect, useMemo, useRef, useState } from "react";
import SideBar from "../../common/SideBar";
import Header from "../../common/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import Footer from "../../common/Footer";
import { useForm } from "react-hook-form";
import { apiurl, token } from "../../common/http";
import { toast } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [placeholder] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Content",
    }),
    [placeholder]
  );

  const userToken = token();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiurl}services/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });

      const result = await res.json();

      if (result.status) {
        const serviceData = result.data;
        reset({
          title: serviceData.title || "",
          slug: serviceData.slug || "",
          short_desc: serviceData.short_desc || "",
          status: serviceData.status ? String(serviceData.status) : "1",

        });
        setImage(serviceData.image)
        setContent(result.data.content || "");
      } else {
        toast.error("Failed to fetch service details.");
      }
    } catch (error) {
      toast.error("Error fetching service details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [id]);

  // Handle file upload
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageId(file);
    }
  };

  const onSubmit = async (data) => {
    setIsDisable(true);
    try {
      const payload = {
        ...data,
        content,
        imageId,
      };

      const res = await fetch(`${apiurl}services/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Service updated successfully.");
        navigate("/admin/services");
      } else {
        toast.error(result.message || "Failed to update service.");
      }
    } catch (error) {
      toast.error("Error updating service.");
    } finally {
      setIsDisable(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Services / Edit</h4>
                    <Link to="/admin/services" className="btn btn-primary">
                      Back
                    </Link>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Name
                        </label>
                        <input
                          {...register("title", {
                            required: "The title field is required",
                          })}
                          type="text"
                          placeholder="Title"
                          className={`form-control ${
                            errors.title && "is-invalid"
                          }`}
                        />
                        {errors.title && (
                          <p className="invalid-feedback">
                            {errors.title?.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Slug
                        </label>
                        <input
                          {...register("slug", {
                            required: "The slug field is required",
                          })}
                          type="text"
                          placeholder="Slug"
                          className={`form-control ${
                            errors.slug && "is-invalid"
                          }`}
                        />
                        {errors.slug && (
                          <p className="invalid-feedback">
                            {errors.slug?.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Short Description
                        </label>
                        <textarea
                          {...register("short_desc")}
                          className="form-control"
                          placeholder="Short Description"
                          rows={4}
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Content
                        </label>
                        <JoditEditor
                          ref={editor}
                          value={content}
                          config={config}
                          tabIndex={1}
                          onBlur={(newContent) => setContent(newContent)}
                          onChange={() => {}}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={handleFile}
                        />
                        <img src={"http://localhost:8000/uploads/services/small/"+image} alt={image} />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Status
                        </label>
                        <select
                          className="form-control"
                          {...register("status")}
                        >
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>
                        </select>
                      </div>

                      <button
                        disabled={isDisable}
                        className="btn btn-primary"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Edit;
