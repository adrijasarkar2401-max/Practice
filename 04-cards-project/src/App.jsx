import React from 'react'
import Card from './components/Card'
// import User from './components/User'
const App = () => {
  //  const arr=['Adrija','Andolan','Aloran'];
  // const arr=[10,20,30,40];
  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBcXDcHJufPoxy4aeQimTBMxQKwNlZZBUF-1CvK8Zhw&s=10",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbHZNqXWdAF2WDbzda_Bxqnb1SuxzUT8Dq_RCCSIZuA&s=10",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Data Scientist",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Product Manager",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$42/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJbQhtsiAhVSpeCFfS3Mpplxn8RDphAvmdDTyHX9Ytw&s=10",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$60/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$52/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://image.similarpng.com/file/similarpng/very-thumbnail/2021/01/Netflix-logo-on-transparent-background-PNG.png",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$65/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsmKC2PF5TbR6g-Et3wkiVPxfIH5x0VX_tbsA9sXZCA&s=10",
    companyName: "NVIDIA",
    datePosted: "1 month ago",
    post: "AI Research Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$58/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4D6BNlzGJs1dP5ZZx3hwOnVUEmxlw8Pd0OIeDw1Jmtg&s=10",
    companyName: "Adobe",
    datePosted: "6 weeks ago",
    post: "Frontend Developer",
    tag1: "Part time",
    tag2: "Junior level",
    pay: "$35/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmV-iwpi0A8-L3oeHGvp753u6b4WhX33LstO1ICbfnw&s=10",
    companyName: "Oracle",
    datePosted: "8 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full time",
    tag2: "Mid level",
    pay: "$44/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwEMCtw0kmlFm8vMpPWdlln3LXKZzYtIg5IwpCiIcqw&s=10",
    companyName: "IBM",
    datePosted: "10 weeks ago",
    post: "AI Engineer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$32/hr",
    location: "Mumbai, India"
  }
];

return(
  <div className = 'parent' >
        {
          jobs.map(function (val) {
            return <Card company={val.companyName} logo={val.brandLogo} date={val.datePosted} post={val.post} tag1={val.tag1} tag2={val.tag2} pay={val.pay} location={val.location} />
          })
        }
  </div >
)
}

export default App

/*const App = () => {
  const arr=['Adrija','Andolan','Aloran'];
  // const arr=[10,20,30,40];
  return (
    <div className='parent'>
      {/* <Card />       /}
      {arr.map(function(val){
        // return val
        return <h1>{val}</h1>
      })}
    </div>
  )
}*/

/*const arr=[
  {
    user:'Adrija',
    age:21
  },
  {
    user:'Andolan',
    age:26
  },
  {
    user:'Aloran',
    age:18
  }
]
arr.map(function(val){
  console.log(val.user,val.age)
})*/


/*const App = () => {
   const arr=['Adrija','Andolan','Aloran'];
  // const arr=[10,20,30,40];
  return (
    <div className='parent'>
     {arr.map(function(val){
      // return <h1>Hello</h1>
      // return <Card />
      return <User name={val} />
     })}
    </div>
  )
} */