import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    state = {
        title: '',
        desc: '',
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value} = e.target
        this.setState({[name]: value})
    }

    handelSave = () => {

        if (localStorage.getItem('list-note') !== null) {
            let listNoteArray = JSON.parse(localStorage.getItem('list-note'))
            const id = listNoteArray.length + 1
            let newNote = {id: id, title: this.state.title, desc: this.state.desc}
            listNoteArray.push(newNote)
            localStorage.setItem('list-note', JSON.stringify(listNoteArray))
            this.setState({title: '', desc: ''})
            this.props.updateList(listNoteArray)
        } else {
            let newNote = {id: 1, title: this.state.title, desc: this.state.desc}
            let listNoteArray = []
            listNoteArray.push(newNote)
            localStorage.setItem('list-note', JSON.stringify(listNoteArray))
            this.setState({title: '', desc: ''})
            this.props.updateList(listNoteArray)
        }
    }
    render() {
        return (
            <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <a className="navbar-brand" >
            <span className="fa fa-sticky-note fa-2x text-light" ></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link text-light title" >Take Note <span className="sr-only">(current)</span></a>
                </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button type="button" className="btn btn-outline-light my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">
                Take Note 
                </button>
           
    </form>
  </div>
</nav>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
    <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title"  style={{width: '40%'}} className="form-control"  />
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <textarea value={this.state.desc} name="desc" onChange={this.handleChange} className="form-control" 
                placeholder="enter your note description"></textarea>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {
            (!this.state.title.length || !this.state.desc.length) ?  '' : 
            <button type="button"  data-dismiss="modal" onClick={this.handelSave} className="btn btn-success">Save
           </button>
        }
     
      </div>
    </div>
  </div>
</div>

            </div>

        )
    }
}
export default Header;