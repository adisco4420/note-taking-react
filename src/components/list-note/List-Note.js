import React , { Component } from 'react';
import Header from './../haeder/Header';

class ListNotes extends Component {


    editNote = (note, index) => {
        this.setState({editTitle: note.title, editDesc: note.desc, editId: index})
    }
    deleteNote = (note, index) => {
        let listNote = this.state.listAllNote
        const id = note.id;
        listNote.splice(index, 1)
        // console.log(listNote)

        // const updateNote = listNote.splice(index, 1)
        // const updateNote = listNote.filter(note => note.id !== id)
        localStorage.setItem('list-note', JSON.stringify(listNote))
        this.setState({listAllNote: listNote})
    }
    updateList = (item) => {
        this.setState({listAllNote: item})
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value} = e.target
        this.setState({[name]: value})
    }
    handleSave = () => {
        let title = this.state.editTitle;
        let desc = this.state.editDesc;
        let id = this.state.editId
        let listNote = this.state.listAllNote;
        listNote[id] = {id: id, title: title, desc: desc};
        this.setState({listAllNote: listNote})
        localStorage.setItem('list-note', JSON.stringify(listNote))
    }

    constructor(props) {
        super(props)

        this.state = {
            listAllNote : this.props.alLNoteProps,
            editTitle: '',
            editDesc: '',
            editId: 0
        }
        // console.log(this.props.ListValue)
    }
    render() {
        return (
           <div>
            <Header updateList={this.updateList} /> 
            <div className="container"> 
               <div className="row">
             
                { this.state.listAllNote === null || !this.state.listAllNote.length ? 
               <div className="" style={{marginLeft: '35%'}}>
                   <i className="text-center fa fa-sticky-note-o fa-5x"></i>
                    <h5 className="text-center ">No Note Available</h5>
               </div> :
                    this.state.listAllNote.map((item, index) => {
                        return <div key={index} className="col-md-3 mb-3">
                        <div className="card">
                        <div className="card-body bg-success">
                            <span className=" fa fa-sticky-note fa-5x text-light mt-2"></span>
                        </div>
                        <div className="card-footer">
                        <h5 className="card-title">{item.title}</h5> 
                        <p>{item.desc}</p>     
                        <i  data-toggle="modal" onClick={() => {this.editNote(item,index)}} data-target="#editModal"className="fa fa-edit mr-3 text-info"></i>
                        <i onClick={() => this.deleteNote(item, index)} className="fa fa-trash  text-danger" ></i>
                        </div>
                    </div>
                    </div>
                    })
    
                }          

               </div>





<div className="modal fade" id="editModal" tabIndex="-1" role="dialog"  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
    <input name="editTitle" defaultValue={this.state.editTitle} onChange={this.handleChange} 
      style={{width: '40%'}} className="form-control"  />
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input className="form-control" style={{height: '60px' }} defaultValue={this.state.editDesc} 
      name="editDesc" onChange={this.handleChange} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        {
            (!this.state.editTitle.length || !this.state.editDesc.length) ?  '' : 
            <button type="button"  data-dismiss="modal" onClick={this.handleSave}  className="btn btn-success">Save
           </button>
        }
      </div>
    </div>
  </div>
</div>
       
            </div>
           </div>
        )
    }

}
export default ListNotes;