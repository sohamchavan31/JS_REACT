import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {
    const [post, setPost] = useState([
        {
            _id: '1',
            image: '',
            caption: 'Beautiful scenery'
        }
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            console.log(res.data);
            setPost(res.data.posts)
        })
    },[])
    return (
        <section className="min-h-screen bg-slate-100 px-4 py-8">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-lg shadow-slate-200">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-slate-900">Feed</h1>
                    <p className="text-sm text-slate-500">{post.length} post{post.length === 1 ? '' : 's'}</p>
                </div>

                {post.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2">
                        {post.map((item) => (
                            <article key={item._id} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                                <div className="mb-4 h-48 overflow-hidden rounded-2xl bg-slate-200">
                                    <img
                                        src={item.image || 'https://via.placeholder.com/400x300?text=No+image'}
                                        alt={item.caption}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <p className="text-base text-slate-700">{item.caption}</p>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                        <h1 className="text-xl font-medium">No posts available</h1>
                        <p className="mt-2 text-sm">Create a new post to appear in the feed.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Feed