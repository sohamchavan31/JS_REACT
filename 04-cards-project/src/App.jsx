import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  // const arr = [10, 20, 30];

  // const arr = [
  //   {
  //     user: 'Soham',
  //     age:30
  //   },
  //   {
  //     user: 'Harsh',
  //     age:36
  //   },
  //   {
  //     user: 'Aman',
  //     age:20
  //   } 
  // ];

  // {arr.map(function(elem){
  //     console.log(elem);
  // })}

  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$62/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$78/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      companyName: "OpenAI",
      datePosted: "2 days ago",
      post: "AI Applications Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
      companyName: "Uber",
      datePosted: "8 weeks ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    }
  ];

  return (
    <div className='parent' style={{ color: 'white' }} >

      {jobOpenings.map(function (elem) {
        return <Card company={elem.companyName} posted={elem.post}  info1={elem.tag1} info2={elem.tag2} position={elem.post} salary={elem.pay} loc={elem.location} btn2={elem.pay} logo={elem.brandLogo}/>
      })}

      {/* <Card logo='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' posted='5 days ago' btn1='save' company='AMAZON' position='Senior UI/UX Designer' info1='Part Time' info2='Senior level' salary='$120/hr' loc='Mumbai, India' btn2='Apply now' />

      <Card logo='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' posted='5 days ago' btn1='save' company='GOOGLE' position='Senior UI/UX Designer' info1='Part Time' info2='Senior level' salary='$120/hr' loc='Mumbai, India' btn2='Apply now' />

      <Card logo='https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' posted='5 days ago' btn1='save' company='MICROSOFT' position='Senior UI/UX Designer' info1='Part Time' info2='Senior level' salary='$120/hr' loc='Mumbai, India' btn2='Apply now' />

      <Card logo='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' posted='5 days ago' btn1='save' company='APPLE' position='Senior UI/UX Designer' info1='Part Time' info2='Senior level' salary='$120/hr' loc='Mumbai, India' btn2='Apply now' />

      <Card logo='https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' posted='5 days ago' btn1='save' company='META' position='Senior UI/UX Designer' info1='Part Time' info2='Senior level' salary='$120/hr' loc='Mumbai, India' btn2='Apply now' />

      <Card logo='https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg' posted='5 days ago' btn1='save' company='NETFLIX' position='Senior UI/UX Designer' info1='Part Time' info2='Senior level' salary='$120/hr' loc='Mumbai, India' btn2='Apply now' /> */}

    </div>
  )
}

export default App
