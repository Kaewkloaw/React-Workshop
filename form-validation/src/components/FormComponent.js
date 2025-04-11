import './FormComponent.css';
import {useState} from 'react';

const FormComponents = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Initialize error states as empty strings
    const [errorUserName, setErrorUserName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userNameColor, setUserNameColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');
    
    // Add a state to track if form was submitted
    const [isSubmitted, setIsSubmitted] = useState(false);
    // Add a state to track if form is valid
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = (e)=> {
        e.preventDefault()
        // Set isSubmitted to true when form is submitted
        setIsSubmitted(true)
        
        // Track form validity
        let isValid = true;
        
        if(username.length > 5){
            setErrorUserName('')
            setUserNameColor('white')
        }else{
            setErrorUserName('Please enter more than 5 characters')
            setUserNameColor('purple')
            isValid = false
        }
        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('white')
        }else{
            setErrorEmail('Wrong email format')
            setEmailColor('purple')
            isValid = false
        }
        if(password.length > 8){
            setErrorPassword('')
            setPasswordColor('white')
        }else{
            setErrorPassword('Please enter more than 8 characters')
            setPasswordColor('purple')
            isValid = false
        }
        if(confirmPassword !== "" && confirmPassword === password){
            setErrorConfirmPassword('')
            setConfirmPasswordColor('white')
        }else{
            setErrorConfirmPassword('Not matching password')
            setConfirmPasswordColor('purple')
            isValid = false
        }
        
        // Set success state based on form validity
        setIsSuccess(isValid)
    }

    return (
        <div className="form-components">
            <h2>Form Validation</h2>
            <form className = 'form-contrainer' onSubmit = {validateForm}>
                <div className="form-control">
                    <label htmlFor="user">User</label>
                    <input type="text" value={username} onChange= {(e)=>setUsername(e.target.value)} style={{borderColor: isSubmitted ? userNameColor : '', borderWidth: isSubmitted ? '3px' : '1px'}}/>
                    {isSubmitted && <small style={{color:userNameColor}}>{errorUserName}</small>}
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" value = {email} onChange= {(e)=>setEmail(e.target.value)} style={{borderColor: isSubmitted ? emailColor : '', borderWidth: isSubmitted ? '3px' : '1px'}}/>
                    {isSubmitted && <small style={{color:emailColor}}>{errorEmail}</small>}
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange= {(e)=>setPassword(e.target.value)} style={{borderColor: isSubmitted ? passwordColor : '', borderWidth: isSubmitted ? '3px' : '1px'}}/>
                    {isSubmitted && <small style={{color:passwordColor}}>{errorPassword}</small>}
                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" value={confirmPassword} onChange= {(e)=>setConfirmPassword(e.target.value)} style={{borderColor: isSubmitted ? confirmPasswordColor : '', borderWidth: isSubmitted ? '3px' : '1px'}}/>
                    {isSubmitted && <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>}
                </div>
                {isSubmitted && isSuccess && <div style={{color: '#5a1e96', textAlign: 'center', marginBottom: '10px', fontWeight: 'bold'}}>Successfully</div>}
                <button type="submit">Enroll</button>
            </form>
        </div>
    );
}

export default FormComponents;