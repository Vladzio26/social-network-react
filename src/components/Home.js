import React, {Component} from "react";
import Firebase from "../components/SimpleChat/Firebase";
import s from "./Home.module.css"
class Home extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
        
        this.state = {
            email:'',
            password:'',
            currentUser: '',
            displayName:''
           
            
        }
    }

    logout(){
        Firebase.auth().signOut();
    }
    componentWillMount(){
        
        var user = Firebase.auth().currentUser;

        if (user) {
        // User is signed in.
        var currentUser = Firebase.auth().currentUser;
        console.log(currentUser)
        this.setState({currentUser:user.email})
        this.setState({displayName:user.displayName})
        console.log(user.email)
        console.log(currentUser)
       
    }
      
    }

 


   async updateData(e) {
    e.preventDefault();
    await Firebase.auth().currentUser.updateProfile({
          displayName: this.state.displayName,
          photoURL: "https://ukranews.com/upload/news/2016/12/15/15585261bb87468-58526147a2cd9-risovach.ru_crop_1200.jpg"
        });
    await Firebase.auth().currentUser.reload();
    console.log(Firebase.auth().currentUser.displayName); 
  }


  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
}




    render(){
        
        return(
            <div className={s.home}>
                <img src={this.props.photoURL} />
               Welcome home :<div>{this.props.currentUser}</div>
               <div>{this.props.displayName}</div>
            
            
            <form>
               <div>
                        <span>displayName</span>
                        <input value={this.state.displayName} onChange={this.handleChange} type='text' name='displayName' placeholder='Enter email...'/>
                </div>
                <button type='submit' onClick={this.updateData}>Update</button>
            </form>



               <button onClick={this.logout}>LogOut</button>
               
            </div>
        )
    }
}



export default Home;