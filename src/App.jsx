import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [subject, setSubject] = useState();
  const [sgpa, setSGPA] = useState(7.808);
  const [ArrOfSubject, setArrOfSubject] = useState([]);
  const [PreviousCGPA,setPreviousCGPA]=useState();
  const [noOfSemester,setNoOfSemester]=useState(1);

  var totalCredit = 0,
    Total = 0;

  function Enter() {
    for (var i = 1; i <= subject; i++) {
      let subCredit = parseInt(prompt(`Credit of SUBJECT ${i}`));
      let subGrade = parseInt(prompt(`Grade of SUBJECT ${i}`));
      totalCredit = totalCredit + subCredit;
      Total += subGrade * subCredit;
    }
    setSGPA((Total / totalCredit).toFixed(3));
    console.log(Total);
    console.log(totalCredit);
    
  }
function CalculateCGPA (){
 let val1=(PreviousCGPA * noOfSemester) + sgpa;
 let dvalues=noOfSemester+1;
  console.log( dvalues)

}

  // useEffect (
  //   ()=>{
  //    const tempArray=Array(subject).fill({}).map((subject) => {
  //     subject.Credit=0;
  //     subject.Grade=0;
  //     return subject;

  //    });
  // setArrOfSubject(tempArray);
  //   },[subject]
  // )

  return (
    <>
      <div className=" bg-[#cc38c2] p-3 font-extrabold text-white flex justify-center align-middle items-center text-[18px]">
        <h1>SGPA CAlCULATOR</h1>
      </div>
      <div className="bg-[#6b686b] mt-4  font-bold text-white flex  flex-col gap-4 px-[16px] text-[18px]">
        <div className="text-[32px] flex after:">
          HI Guys <h2 className="text-[32px] animate-bounce">👋</h2>
        </div>
        <h1>NOTE </h1>
        <h1> Grade points based on as follows </h1>
        <h1> O - 10 | A+ - 9 | A - 8 | B+ - 7 | B - 6 | C - 5 | U- RA / 0 </h1>
      </div>
      <div className="bg-[#6b686b] mt-4  text-white flex flex-col gap-9 justify-center align-middle items-center  p-5  ">
        <h1>Enter the no of Subject </h1>

        <input
          className="text-black"
          type="number "
          placeholder="Number of subject "
          onChange={(e) => setSubject(e.target.value)}
        />
        <button
          onClick={Enter}
          className="px-3 py-2 bg-[#cc38c2] hover:bg-[#6b686b] border-[2px] border-[#cc38c2] rounded-lg"
        >
          Enter
        </button>
      </div>

      <div className=""></div>
      <div className="p-3  bg-[#cc38c2]  " id="MainContent">
        <div className=" flex font-extrabold text-white gap-2 justify-center align-middle items-center">
          <h1>Your Current Semester SGPA </h1>
          <div className="bg-[#6b686b] p-2  border-[2px] border-[#f7f7f7]">
            {sgpa ? <h1>: {sgpa}</h1> : <h1>{sgpa}</h1>}
          </div>
        </div>
        <div className="bg-[#6b686b] mt-4  text-white flex flex-col gap-4 justify-center align-middle items-center  p-5  ">
          <h1> TO Calculate overall CGPA </h1>
          <input
            type="number"
            className="text-black"
            placeholder=" Previous CGPA"
            onChange={(e) => setPreviousCGPA(e.target.value)}
          />
          <h1>upto which semester eg: 4</h1>
          <input
            type="number"
            className="text-black"
            placeholder=" eg: 4"
            onChange={(e) => setNoOfSemester(e.target.value)}
          />
          <button onClick={CalculateCGPA}>CalculateCGPA</button>
        </div>
      </div>
      <div className="">
        <div className=""></div>
        <div className=" bg-[#cc38c2] text-white font-bold  flex flex-col justify-center align-middle  items-center p-4 ">
          <h1> © Application Developed By</h1>
          <h2>| js ~ FirstBenchers |</h2>
          <h3>
            Share to your Friends and help to Calculate the CGPA / SGPA of
            current semester
          </h3>
          <h3> Thankyou Guys keep in Supporting</h3>
        </div>
      </div>
    </>
  );
}

export default App
