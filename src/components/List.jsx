import React, {useState} from "react";
import {ListWrapper} from "./style/ListWrapper";
import AddItem from "./AddItem";
import {TodoistDelete, TodoistRead} from "../scripts/todoistCRUD";
import Item from "./Item";


const List = ({items, fetchItems, preloadedItems}) => {
    // const [items, setItems] = useState(preloadedItems);

    // const updateItems = async () => {
    //     setItems(await TodoistRead())
    // }

    // const deleteItems = async (id) => {
    //     await TodoistDelete(id);
    //     setItems(await TodoistRead())
    // }

    // const unMountMe = (id) => {
    //     items.map((item, position) => {
    //         if (item.id === id) {
    //             const n = [...items]
    //             console.log(n)
    //             setItems(n.splice(position, 1) && n);
    //         }
    //     })
    // }

    // return (
    //     <ListWrapper>
    //         <AddItem updateItems={updateItems}/>
    //         {
    //             items.map(item =>
    //                 <Item
    //                     key={Math.random()} content={item.content} id={item.id} deleteItem={deleteItems}
    //                     unMountMe={unMountMe}/>
    //             )
    //         }
    //     </ListWrapper>
    // );

    return (
        <ListWrapper>
            <AddItem fetchItems={fetchItems}/>
            {
                items.map(item =>
                    <Item
                        key={Math.random()} content={item.content} id={item.id}/>
                )
            }
        </ListWrapper>
    );
}

export default List;