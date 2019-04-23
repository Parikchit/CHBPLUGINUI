import React, { Component } from 'react';
import './App.css';
import Header3 from './Header3';
import ReactTable from "react-table";
import 'react-table/react-table.css';


import 'react-datepicker/dist/react-datepicker.css';




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }


    componentDidMount() {
        let that = this;

            fetch('https://www.reddit.com/r/reactjs.json' ).then(function (response) {
                return response.json();
            }).then(function (result) {

                //console.log(result.data.children);

                that.setState({ posts: result.data.children, lastPostName: result.data.children[result.data.children.length - 1].data.name });

                console.log(that.state.posts);
            });

    }




  render(){
      const data = [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
              name: 'Jason Maurer',
              age: 23,
          }
      },{
          name: ' Linsley',
          age: 26,
          friend: {
              name: ' Maurer',
              age: 23
      } }];

      const columns = [{
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
      }, {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name // Custom value accessors!
      }, {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age'
      }]



        return(
       <div>
       <Header3/>
           <div className="form-group App-body"> <label>Name</label> <input className="form-control" type="text" name="Shipper" placeholder=""/></div>);
          <div className="form-group App-body"> <label>Friend Name</label><select className="form-control"><option></option></select></div>);
           <div className="form-group App-body"> <label>Date</label> <input className="form-control calendar-input hasDatepicker" type="text" name="Shipper" placeholder=""/><button type="button" className="ui-datepicker-trigger ui-button ui-corner-all ui-widget ui-button-icon-only" title="..."><span className="ui-button-icon ui-icon fa fa-folder-open"/><span className="ui-button-icon-space"> </span>...</button> </div>);


           <ul>
               {this.state.posts.map((post,i) =>
                   <li key={i}>{post.data.author}</li>
               )};
           </ul>
           <ReactTable  page={0} pageSize={5}
                       data={data}
               columns={columns} defaultPageSize={4} className="-striped -highlight"


           />


       </div>
  );
  }
}

export default App;
