import React, { useState } from 'react';

const App = () => {

  const [info,setInfo]=useState(0)
  const [upozilaInfo,setupozilaInfo]=useState(0)

  const handleChange=(event)=>{
    setInfo(event.target.value) 
  }  

  const handleUpozila=(event)=>{
    setupozilaInfo(event.target.value)
  }
  

  return (
    <div style={{width:'350px',margin:'100px auto'}}>
    {/* select your district */}
    <select className='form-control' onChange={handleChange} id="dist-list">
      <option value="">জেলা বাছাই করুন</option>
      <option value="1867">চাঁপাইনবাবগঞ্জ জেলা</option>
      <option  value="1990">নোয়াখালী জেলা</option>
    </select>
 
    {/* selected your upozila */}

    {
      info === '1867' &&   
      <select onChange={handleUpozila} className="form-control" id="upz-list">
        <option value="">উপজেলা বাছাই করুন</option>
        <option value="1880">চাঁপাইনবাবগঞ্জ সদর উপজেলা</option>
        <option value="1882">গোমস্তাপুর উপজেলা</option>
        <option value="1883">নাচোল উপজেলা</option><option value="1884">ভোলাহাট উপজেলা</option><option value="1886">শিবগঞ্জ উপজেলা</option></select>
    }

    {
      info === '1990' && <select className="form-control" id="upz-list"><option value="">উপজেলা বাছাই করুন</option><option value="4215">নোয়াখালী সদর</option><option value="4279">কোম্পানীগঞ্জ উপজেলা</option><option value="4281">বেগমগঞ্জ উপজেলা</option><option value="4427">হাতিয়া উপজেলা</option><option value="4428">সুবর্ণচর উপজেলা</option><option value="4553">কবিরহাট উপজেলা</option><option value="4630">সেনবাগ উপজেলা</option><option value="4633">চাটখিল উপজেলা</option><option value="4671">সোনাইমুড়ী উপজেলা</option></select>
    }


    {/*  */}

       {/* {
         
         11 === 11 &&   <select className="form-control"> <option value="">ইউনিয়ন বাছাই করুন</option> <option  name="http://alatuliup.chapainawabganj.gov.bd">আলাতুলী</option>   <option  name="http://baroghoriaup.chapainawabganj.gov.bd">বারঘরিয়া</option>   <option  name="http://moharajpurup.chapainawabganj.gov.bd">মহারাজপুর</option>   <option  name="http://ranihatiup.chapainawabganj.gov.bd">রানীহাটি</option>   <option  name="http://baliadangaup.chapainawabganj.gov.bd">বালিয়াডাঙ্গা</option>   <option  name="http://gobratolaup.chapainawabganj.gov.bd">গোবরাতলা</option>   <option  name="http://jhilimup.chapainawabganj.gov.bd">ঝিলিম</option>   <option  name="http://charaunupnagarup.chapainawabganj.gov.bd">চরঅনুপনগর</option>   <option  name="http://debinagarup.chapainawabganj.gov.bd">দেবীনগর</option>   <option  name="http://shahjahanpurup.chapainawabganj.gov.bd">শাহজাহানপুর</option>   <option  name="http://islampurup.chapainawabganj.gov.bd">ইসলামপুর</option>   <option  name="http://charbagdangaup.chapainawabganj.gov.bd">চরবাগডাঙ্গা</option>   <option  name="http://narayanpurup.chapainawabganj.gov.bd">নারায়নপুর</option>   <option  name="http://sundarpurup.chapainawabganj.gov.bd">সুন্দরপুর</option></select>

       } */}
    </div>
  );
};

export default App;