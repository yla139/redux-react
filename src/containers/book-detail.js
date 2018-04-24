import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {

        if (!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        console.log("out of if");
        return (
            <div>
                <h3>Details for: </h3>
                <div>Title: { this.props.book.title }</div>
                <div>Pages: { this.props.book.pages }</div>
            </div>
        );
    }
}

// glue between react and redux
function mapStateToProps(state) {
    // whatever is returned from here will show up as props inside of Booklist
    return {
        book: state.activeBook
    };
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps)(BookDetail);