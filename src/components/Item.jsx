import React from "react";
import {CheckBox} from "./style/CheckBox";
import {ListItem} from "./style/ListItem";
import {ListRow} from "./style/ListRow";

const Item = ({content, id, deleteItem}) => {
    return (
        <ListRow>
            <CheckBox onClick={() => {
                deleteItem(id);
            }}/>
            <ListItem>{content}</ListItem>
        </ListRow>
    )
}

export default Item;