import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'; //bindActionCreators is used when you want to pass some action creators down to a component that is not aware of Redux and  you do not want to pass dispatch or the Redux store to it.

class BookList extends Component {
    renderList() {
        return this.props.books.map((book)=>{
            return (
                <li 
                    key={book.title}
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">{book.title}</li>
            )
        })
    }


render() {
    return (
        <ul className="list-group col-sm-4">
        {this.renderList()}
        </ul>
    )
}
}



function mapStateToProps(state) {
     //whatever is returned will show up as props inside of BookList
     return {
         books:state.books
     }
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all of our reducers - bindActionCreators + dispatch: taking all the actions and make sure they get passed on to all the reducers inside app
    return bindActionCreators({selectBook:selectBook}, dispatch)
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it availabe as a prop.

export default connect (mapStateToProps, mapDispatchToProps) (BookList);