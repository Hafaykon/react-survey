import { useState } from "react";
import "../App.css";
import "./RadioButtons";
import RadioButtons from "./RadioButtons";
import CheckBox from "./Checkbox";


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [dataBase, setDatabase] = useState([
    {
      id: 1,
      username: "Nigel",
      email: "nigel@gmail.com",
      spendTime: ["Bathing", "Chatting"],
      review: "This duck is actually quite nice...",
      colourRating: "1"
    }
  ])

  const [surveyData, setSurveyData] = useState([
    {
      username: "",
      email: "",
      spendTime: [],
      review: "",
      colourRating: ""
    }
  ]);

    
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setSurveyData({ ...surveyData, [event.target.name]: event.target.checked });
    } else {
      setSurveyData({ ...surveyData, [event.target.name]: event.target.value });
    }
    console.log({...surveyData})
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setDatabase([
      ...dataBase,
      {
        id: Math.max(...dataBase.map((dataBase) => dataBase.id)) + 1,
        username: surveyData.username,
        email: surveyData.email,

        review: surveyData.review,
        colourRating: surveyData.colourRating,
      },
    ]);

    setSurveyData({
      username: "",
      email: "",
      spendTime: [],
      review: "",
      colourRating: ""
    });
    console.log({...dataBase})
  };

//<CheckBox handleChange={handleChange} surveyData={surveyData}/> 
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <div className="answer">
            {dataBase.map((dbEntry) => (
                      <ul key={dbEntry.id}>
                        <h3>Some dude said</h3>
                        <p>Username</p>
                        <li>&emsp;{dbEntry.username}</li>
                        <p>E-mail</p>
                        <li>&emsp;{dbEntry.email}</li>
                        <p>Anything else you'd like to say about your duck?</p>
                        <li>&emsp;{dbEntry.review}</li>
                        <p>How do you rate the colur of your duck?</p>
                        <li>&emsp;{dbEntry.colourRating}</li>
                      </ul>
                    ))}
        </div>
      </section>
      <section className="survey__form"> 
          <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              <RadioButtons name="colourRating" handleChange={handleChange} surveyData={surveyData}/>
            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
                   
            </div>
            <label
              >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                onChange={handleChange}
                value={surveyData.review}
                required
              ></textarea></label
            ><label
              >Put your name here (if you feel like it):<input
                type="text"
                name="username"
                onChange={handleChange}
                value={surveyData.username}/></label
            ><label
              >Leave us your email pretty please??<input
                type="email"
                name="email"
                onChange={handleChange}
                value={surveyData.email} /></label
            ><input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  )
}

export default Survey;
