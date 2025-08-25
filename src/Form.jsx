import './assets/component/Form.css';

function Form(){

    const handleSignUp = () => {
    alert("Sign Up submitted!");
    window.location.href = "/home";
  };

    return(
        <>
    <div className="containerForm2">
    <div className="form-box2">
          <div className="header2">
        <h1>Interests In Books</h1>

          </div>



        <div className="column-container">
            <div className="column2">
    
    <h2 className="h2">What's your last book that you have read?</h2>
        <input className='input-form' type="text" placeholder="Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow 3rd Edition,etc." /> 

    <h2 className="h2">What's your favorite topic?</h2>
        <input className='input-form' type="text" placeholder="topic" />
        
        </div>
        <div className="column2">
            <h2 className="h2">What's your preferred genres?</h2>
        <input className='input-form' type="text" placeholder="Science,Arts,History,etc." />

    <h2 className="h2">What's your preferred Authors?</h2>
        <input className='input-form' type="text" placeholder="Aurélien Géron,etc" />
        

        </div>
        </div>
        <button className="submit2" onClick={handleSignUp}>Continue</button>
    </div>
  </div>
  </>
    )
}

export default Form;