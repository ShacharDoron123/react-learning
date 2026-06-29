import PropTypes from 'prop-types';

function Student(props){
    return(
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? "yes": "no"}</p>
        </div>
    );
}
Student.defaultProps = {
    name: "geust",
    age: 0,
    isStudent: false,
}
Student.propTypes = {
    name: PropTypes.string,    
    age: PropTypes.number,     
    isStudent: PropTypes.bool   
};
export default Student