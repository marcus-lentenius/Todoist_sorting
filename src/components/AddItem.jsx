import React, {useState} from "react";
import {AddItemTextField} from "./style/AddItemTextField";
import {AddButton} from "./style/AddItemButton";
import {TodoistCreate} from "../scripts/todoistCRUD";

const AddItem = ({fetchItems}) => (
        <div>
            <form onSubmit={async (e) => {
                e.preventDefault()
                e.persist();

                TodoistCreate(e.target.addItem.value);
                fetchItems();

                e.target.addItem.value = '';
                e.target.addItem.focus()
            }}>
                <AddItemTextField id="addItem"/>
                <AddButton>Add</AddButton>
            </form>
        </div>
    )

export default AddItem;