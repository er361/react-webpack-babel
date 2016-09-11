import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class list extends Component {
    showLoadingStatus(){
        if(this.props.issues.isLoading)
            return <h5>Loading...</h5>
        else
            return null;
    }

    render() {
        return (
            <div>
                {this.showLoadingStatus()}
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
