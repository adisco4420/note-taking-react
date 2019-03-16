import React , { Component } from 'react';
import Header from './../haeder/Header';

class ListNotes extends Component {


    editNote = (note) => {
        const id = note.id;
        let listNote = this.state.listAllNote;

    }
    deleteNote = (note) => {
        let listNote = this.state.listAllNote
        const id = note.id;
        const updateNote = listNote.filter(note => note.id !== id)
        localStorage.setItem('list-note', JSON.stringify(updateNote))
        this.setState({listAllNote: updateNote})
    }
    updateList = (item) => {
        this.setState({listAllNote: item})
    }

    constructor(props) {
        super(props)

        this.state = {
            listAllNote : this.props.alLNoteProps
        }
        console.log(this.props.ListValue)
    }
    render() {
        return (
           <div>
            <Header updateList={this.updateList} /> 
            <div className="container"> 
               <div className="row">
             
                { this.state.listAllNote === null || !this.state.listAllNote.length ? 
               <div className="" style={{marginLeft: '40%'}}>
                   <i className="text-center fa fa-sticky-note-o fa-5x"></i>
                    <h5 className="text-center ">No Note Available</h5>
               </div> :
                    this.state.listAllNote.map((item, index) => {
                        return <div key={index} className="col-3 mb-3">
                        <div className="card">
                        <div className="card-body bg-success">
                            <span className=" fa fa-sticky-note fa-5x text-light mt-2"></span>
                        </div>
                        <div className="card-footer">
                        <h5 className="card-title">{item.title}</h5> 
                        <p>{item.desc}</p>     
                        <i onClick={() => this.editNote(item)} className="fa fa-edit mr-3 text-info"></i>
                        <i onClick={() => this.deleteNote(item)} className="fa fa-trash  text-danger" ></i>
                        </div>
                    </div>
                    </div>
                    })
    
                }          

               </div>
       
            </div>
           </div>
        )
    }

}
export default ListNotes;