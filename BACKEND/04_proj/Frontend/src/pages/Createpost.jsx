import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Createpost = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
        .then((res)=>{
            alert("Post created successfully")
            navigate("/feed")
            e.target.reset()
        })
        .catch((err)=>{
            alert("Error creating post")
        })
    }

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-slate-800">Create Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="block w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 file:mr-3 file:rounded-full file:border-0 file:bg-slate-800 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Caption</label>
            <input
              type="text"
              name="caption"
              required
              placeholder="Write a caption..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none ring-0 focus:border-slate-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Createpost;