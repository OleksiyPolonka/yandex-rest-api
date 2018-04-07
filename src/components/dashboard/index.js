import React from 'react';
import List from '../list';
import Input from '../input';
import Spinner from '../spinner';

class Dashboard extends React.Component {

  onInputChange = (event) => {
    this.props.inputChange(event.target.value);
  };

  onInputSubmit = (event) => {
    event.preventDefault();
    this.props.inputSubmit();
  };

  onListItemClick = (i) => {
    this.props.listItemClick(i)
  };

  deleteListItem = (i) => {
    this.props.deleteListItem(i)
  };

  render(){
    const {disk, files} = this.props;

    return (
      <div>
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;