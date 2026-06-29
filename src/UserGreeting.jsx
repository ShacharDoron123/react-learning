
function UserGreeting(props){
    if(props.isLoggedIn){
        return(<h2>wellcome {props.name}</h2>);
    }
    else{
        return(<h2>hi</h2>)
    }

    //return props.isLoggedIn ? <h2>welcome {props.name}</h2> : <h2>hi</h2>;
}

export default UserGreeting