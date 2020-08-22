import React from 'react';
import List from "./List";
import {fireBase} from "../scripts/firebase";
import {ReadFromFireStore} from "../scripts/firebaseCRUD";
import {TodoistRead} from "../scripts/todoistCRUD";
import SortingWrappper from "./SortingWrapper";

//todo error message

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            reference_list: [],
            sort_order: [],
            render: <p>loading</p>
        };
    }

    componentDidMount() {
        fireBase.auth().signInWithEmailAndPassword('todo@ist.com', 'todoist')
            .then(success => {
                this.fetchData().then(()=>{
                    this.setState({render: <><List items={this.state.items} fetchItems={this.fetchItems} preloadedItems={this.state.items}/><SortingWrappper referenceList={this.state.reference_list}/></>})
                })
                    .catch((e)=>console.error(e));
            })
            .catch((e) => console.error(e));
    }

    componentDidUpdate = ()=> {
        console.log('componentDidUpdate()')
        console.log(this.state);
    }
    fetchData = async () => {
        await this.fetchItems();
        await this.fetchReferenceList();
        await this.fetchSortOrder();
        // this.setState({items: await TodoistRead()})
        // this.setState({reference_list: await ReadFromFireStore('reference_list2')})
        // this.setState({sort_order: await ReadFromFireStore('sort_order')})
    }

    fetchItems = async (tr) =>{
        console.log('fetching items')
        this.setState({items: await TodoistRead()})
        console.log('fetched items - ' + this.state.items)
    }
    fetchReferenceList = async ()=> {
        this.setState({reference_list: await ReadFromFireStore('reference_list2')})
    }
    fetchSortOrder = async ()=>{
        this.setState({sort_order: await ReadFromFireStore('sort_order')})
    }

    render() {
        return (
            this.state.render
        )
    }

}
//
// const App = () => (
//     <div>
//         <List/>
//     </div>
// );
// export default App;
