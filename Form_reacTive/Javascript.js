//let element =document.getElementById('root')
//const root = ReactDOM.createRoot(element)
//root.render(<h1>hello,world</h1>)


function Form() {

    const [state, Setstate] = React.useState({
        fname: '',
        lname: '',
        age: "",
        email: ''
    })
    //const [lname, Setlname] = React.useState("")
    // const [age, Setage] = React.useState("")
    //const [mail, Setlmail] = React.useState("")







    const submitButton = (e) => {
        e.preventDefault();
        console.log(state)
        //console.log("Last Name :", lname)
        //console.log("age:", age)
        //console.log("email :", mail)



    }

    const statemanage = (e) => {

        Setstate((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className="forr" onSubmit={submitButton}>
            <div className="colo">
                <div>
                    <span>  <h2>First Name</h2>       <input type="text" name="fname" onChange={statemanage} required /><br />
                    </span>

                </div>
                <div> <span>    <h2>Last Name</h2>        <input type="text" name="lname" onChange={statemanage} required /><br />
                </span></div>
                <div><span>      <h2>Age</h2>     <input type="text" name="age" onChange={statemanage} required /><br />
                </span></div>
                <div> <span>      <h2>Email</h2>     <input type="text" name="email" onChange={statemanage} required /><br />
                </span></div>




                <button className="but"><h3>SUBMIT</h3></button>






            </div>




        </form>

    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Form />)

