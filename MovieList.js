import React, {Component} from 'react';

const MyList = (props) => (
    <div>
        <h3>Mylist : </h3>
        <ul className='Movie-row'>
            {props.mylist.map((item, index) =>
                <li key={index} className='Show-btn'> 
                    <h4>{item.title}</h4>
                    <img src={item.img} alt={item.title} /><br/>
                    <button onClick={() => props.deleteItem(index)}>Remove</button>
                </li>
            )}
        </ul>
    </div>
);

const RecommendationList = (props) => (
    <div>
        <h4>RecommendationList : </h4>
        <ul className='Movie-row'>
            {props.recommendations.map((item, index) =>
                <li key={index} className='Show-btn'> 
                    <h4>{item.title}</h4>
                    <img src={item.img} alt={item.title} /><br/>
                    <button onClick={() => props.addItem(index)}>Add</button>
                </li>
            )}
        </ul>
    </div> 
);

class MovieList extends Component {
    deleteItem = (i) => {
        console.log(i);
        let arr1 = this.props.movies.mylist;
        arr1.splice(i, 1);
        this.setState({
            mylist: arr1
        });
    }
    addItem = (i) => {
        let arr2 = this.props.movies.recommendations;
        let removeItem = arr2.splice(i, 1);
        this.setState ({
            recommendations: arr2
        });
        console.log(removeItem);
        let x = this.props.movies.mylist.push(removeItem[0]);
    }
    render() {
        return (
            <div>
                <MyList 
                    mylist={this.props.movies.mylist}
                    deleteItem={this.deleteItem} 
                />
                <RecommendationList 
                    recommendations={this.props.movies.recommendations}
                    addItem={this.addItem} 
                />
            </div>
        );
    }
}

export default MovieList