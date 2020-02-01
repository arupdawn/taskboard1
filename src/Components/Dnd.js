import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from './utils';
//import { initial_data } from './initial_data';

const groupStyle = {
    marginLeft: '50px',
    flex: 1
};

const dragStyle = {
    width: '18rem'
}



class DragClass extends Component {
  constructor() {
    super();
    this.state = {
        text:'',
        todo:[
            {id: 0, content: 'todo First task'},
            {id: 1, content: 'todo second task'},
        ],
        doing:[
            {id: 0, content: 'doing First task'},
            {id: 1, content: 'doing second task'},
        ],
        done:[],
        rejected:[],

        columns:['ToDo','Doing','Done','Rejected'],
    }
  }

  onChange(e){
    this.setState({
        text: e.target.value
    });
  }

  onDeleteAll(e){
      this.setState({
          rejected:[]
      })
      let afterDelState = {...this.state}
      afterDelState.rejected = [];
      console.log(afterDelState);
      localStorage.setItem('taskstate',JSON.stringify(afterDelState));
  }

  componentDidMount(){
    if(!localStorage.getItem('taskstate')){

        localStorage.setItem('taskstate',JSON.stringify(this.state));
        let getarr = JSON.parse(localStorage.getItem('taskstate'));
        console.log(getarr);
    }
    else{
        let getarr = JSON.parse(localStorage.getItem('taskstate'));
        this.setState({
            ...getarr
        })
    }

  }

  

  render() {
    let getarr = JSON.parse(localStorage.getItem('taskstate'));

    return (
      <div>
        <div className="simple-page">

        <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px' }}>
          
          <div style={groupStyle}>
          <div className="ContainerT">
          <h5 className="TitleC">{this.state.columns[0]}</h5>

          <Container groupName="1" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" getChildPayload={i => this.state.todo[i]}
            onDrop={e => {
                this.setState({ todo: applyDrag(this.state.todo, e) })
                
                localStorage.setItem('taskstate',JSON.stringify(this.state));
                console.log(this.state);
                }}>
            

            {this.state.todo.map(p => {
              return (
                <Draggable key={p.id}>
                  <div className="draggable-item">
                    {p.content}
                  </div>
                </Draggable>
              );
            })}

            
            <div id={this.state.columns[0]} className="collapse Txtarea">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Enter new task" value={this.state.text} 
                         onChange={this.onChange.bind(this)}></textarea>
                    </div>
                   <button type="button" className="btn btn-success BtnSubmit" 
                     onClick={e => {
                        let len = this.state.todo.length;let newtask = {id: len,content: this.state.text}
                        this.state.todo.unshift(newtask);
                        this.setState({text: ''});
                        console.log(this.state);
                        localStorage.setItem('taskstate',JSON.stringify(this.state));
                     }}
                   >
                                Add
                    </button>
                    <button className="btn btn-light Btnclose" data-toggle="collapse" data-target={'#'+this.state.columns[0]}>
                        X
                    </button>
            </div>

            <button className="btn btn-light Addtask" data-toggle="collapse" data-target={'#'+this.state.columns[0]}>
                    Add new task +
            </button>

          </Container>
          </div>
          </div>

          <div style={groupStyle}>
          <div className="ContainerT">
          <h5 className="TitleC">{this.state.columns[1]}</h5>
          <Container groupName="1" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" getChildPayload={i => this.state.doing[i]}
            onDrop={e => {
                this.setState({ doing: applyDrag(this.state.doing, e) })
                console.log(this.state);
                localStorage.setItem('taskstate',JSON.stringify(this.state));
                }}>
            
            {this.state.doing.map(p => {
              return (
                <Draggable key={p.id}>
                  <div className="draggable-item">
                    {p.content}
                  </div>
                </Draggable>
              );
            })}


            <div id={this.state.columns[1]} className="collapse Txtarea">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Enter new task" value={this.state.text} 
                         onChange={this.onChange.bind(this)}></textarea>
                    </div>
                   <button type="button" className="btn btn-success BtnSubmit" 
                     onClick={e => {
                        let len = this.state.doing.length;let newtask = {id: len,content: this.state.text}
                        this.state.doing.unshift(newtask);
                        this.setState({text: ''});
                        console.log(this.state);
                        localStorage.setItem('taskstate',JSON.stringify(this.state));
                     }}
                   >
                                Add
                    </button>
                    <button className="btn btn-light Btnclose" data-toggle="collapse" data-target={'#'+this.state.columns[1]}>
                        X
                    </button>
            </div>

            <button className="btn btn-light Addtask" data-toggle="collapse" data-target={'#'+this.state.columns[1]}>
                    Add new task +
            </button>
            
          </Container>
          
          
          </div>
          </div>

          <div style={groupStyle}>
          <div className="ContainerT">
          <h5 className="TitleC">{this.state.columns[2]}</h5>
          <Container groupName="1" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" getChildPayload={i => this.state.done[i]}
            onDrop={e => {
                this.setState({ done: applyDrag(this.state.done, e) })
                console.log(this.state);
                localStorage.setItem('taskstate',JSON.stringify(this.state));
                }}>
            
            {this.state.done.map(p => {
              return (
                <Draggable key={p.id}>
                  <div className="draggable-item">
                    {p.content}
                  </div>
                </Draggable>
              );
            })}

            <div id={this.state.columns[2]} className="collapse Txtarea">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Enter new task" value={this.state.text} 
                         onChange={this.onChange.bind(this)}></textarea>
                    </div>
                   <button type="button" className="btn btn-success BtnSubmit" 
                     onClick={e => {
                        let len = this.state.done.length;let newtask = {id: len,content: this.state.text}
                        this.state.done.unshift(newtask);
                        this.setState({text: ''});
                        console.log(this.state);
                        localStorage.setItem('taskstate',JSON.stringify(this.state));
                     }}
                   >
                                Add
                    </button>
                    <button className="btn btn-light Btnclose" data-toggle="collapse" data-target={'#'+this.state.columns[2]}>
                        X
                    </button>
            </div>

            <button className="btn btn-light Addtask" data-toggle="collapse" data-target={'#'+this.state.columns[2]}>
                    Add new task +
            </button>
            
          </Container>
          
          
          </div>
          </div>

          <div style={groupStyle}>
          <div className="ContainerT">
          <div className="TitleC">
                {this.state.columns[3]}
                <button className="btn btn-light BtnDeleteAll" onClick={this.onDeleteAll.bind(this)}>
                        X
                </button>
          </div>
          <Container groupName="1" dragClass="opacity-ghost" dropClass="opacity-ghost-drop" getChildPayload={i => this.state.rejected[i]}
            onDrop={e => {
                this.setState({ rejected: applyDrag(this.state.rejected, e) })
                console.log(this.state);
                localStorage.setItem('taskstate',JSON.stringify(this.state));
                }}>
            
            {this.state.rejected.map(p => {
              return (
                <Draggable key={p.id}>
                  <div className="draggable-item">
                    {p.content}
                  </div>
                </Draggable>
              );
            })}

           <div id={this.state.columns[3]} className="collapse Txtarea">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Enter new task" value={this.state.text} 
                         onChange={this.onChange.bind(this)}></textarea>
                    </div>
                   <button type="button" className="btn btn-success BtnSubmit" 
                     onClick={e => {
                        let len = this.state.rejected.length;let newtask = {id: len,content: this.state.text}
                        this.state.rejected.unshift(newtask);
                        this.setState({text: ''});
                        console.log(this.state);
                        localStorage.setItem('taskstate',JSON.stringify(this.state));
                     }}
                   >
                                Add
                    </button>
                    <button className="btn btn-light Btnclose" data-toggle="collapse" data-target={'#'+this.state.columns[3]}>
                        X
                    </button>
            </div>

            <button className="btn btn-light Addtask" data-toggle="collapse" data-target={'#'+this.state.columns[3]}>
                    Add new task +
            </button>
            
          </Container>
          
          
          </div>
          </div>


        </div>
             
        </div>
      </div>
    );
    
  }
}

export default DragClass;