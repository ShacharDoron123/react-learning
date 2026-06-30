
function List(){
    const fruits = [{id: 1, name: "apple", cal:95},
                    {id: 2, name: "orange", cal:45}, 
                    {id: 3, name: "banana", cal:105}];
    const listIteme = fruits.map(fruit => <li key={fruit.id}>
                                           {fruit.name}: &nbsp;
                                           {fruit.cal} </li>);
    
    //fruits.sort((a,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => a.cal - b.cal)

    return(<ol>{listIteme}</ol>);
}

export default List

