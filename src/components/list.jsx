import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class list extends Component {
    render() {
        console.log('from list', this.props.issues);
        
        return (
            <div>
                
                <ol>
                    {this.props.issues.items.map((item, index) =>
                      <li key={index}>
                        <ul style={{listStyleType: 'none'}}>
                            <li><b>название: </b>{item.title}</li>
                            <li><b>номер: </b>{item.number}</li>
                            <li><b>дата создания: </b>{item.created_at}</li>
                        </ul>
                        <hr/>
                      </li>      
                    )}
                </ol>
            </div>
        );
    }
}

list.propTypes = {
    issues: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}
const listContaier = connect(mapStateToProps, null)(list);

export default listContaier;
