import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyRequest() {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        const userId = localStorage.getItem("id");
        fetch(`http://localhost:8000/api/request/get`)
            .then((response) => response.json())
            .then((data) => setRequests(data.filter(request => request.user === userId)))
        console.log(requests)
    },[]
)
  return (
    <div>
        <Navbar />
        <div class="mx-32 my-24">
            <h1 class="text-4xl font-bold">My Request</h1>
            <div class="my-10 py-10 px-5 bg-white/30 rounded-xl">
                {
                    requests.map((request, index) => (
                        <>
                        <h2 class="text-2xl font-bold">Request {index+1}</h2>
                        <div class="text-lg">{request.conversation.map((message, index) => (
                            <p key={index%2? "Bot": "You"}>{message}</p>
                        ))}</div>

                        </>
                    ))
                }
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default MyRequest