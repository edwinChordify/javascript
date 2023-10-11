//let element =document.getElementById('root')
//const root = ReactDOM.createRoot(element)
//root.render(<h1>hello,world</h1>)


function Form() {

    const [fname, Setfname] = React.useState("")


    const [lname, Setlname] = React.useState("")
    const [age, Setage] = React.useState("")
    const [mail, Setlmail] = React.useState("")




    const submitButton = (e) => {
        e.preventDefault();
        console.log("First name :", fname)
        console.log("Last Name :", lname)
        console.log("age:", age)
        console.log("email :", mail)
    


        

        if (fname == '') {
            alert("please enter your name")
        } else if (lname == '') {
            alert("please enter your last name")

        } else if (isNaN(age)) {
            alert("enter age in numeric value only")
        }
        else if (mail == '') {
            alert("please enter your E-mail")
        }
    }










    return (
        <form className="forr" onSubmit={submitButton} >
            <div className="colo">
                <div>
                    <span>  <h2>First Name</h2>       <input type="text" name="fname" onChange={(e) => Setfname(e.target.value)} /> <br />
                    </span>

                </div>
                <div> <span>    <h2>Last Name</h2>        <input type="text" name="lname" onChange={(e) => Setlname(e.target.value)} /><br />
                </span></div>
                <div><span>      <h2>Age</h2>     <input type="text" name="age" onChange={(e) => Setage(e.target.value)} /><br />
                </span></div>
                <div> <span>      <h2>Email</h2>     <input type="text" name="email" onChange={(e) => Setlmail(e.target.value)} /><br />
                </span></div>




                <button className="but"><h3>SUBMIT</h3></button>






            </div>




        </form >

    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Form />)

