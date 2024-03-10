import * as React from 'react';
import './App.css'
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
/*
  Task: Now, we will enable users to expand and collapse rows in 
       a React Tree View.

  ===============================================================
  Previous Task: We will enable users to have their header sticky to the top
        You can now scroll the rows of the table in a vertical 
        direction while the header remains sticky at the top of the 
        table.

        Install material icons:
          npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
*/

import {
    Table, Header, Body, Row 
  } from '@table-library/react-table-library/table';

import {
  useTree,
  CellTree, //Will enable expanding/collapsing a tree by clicking a button
} from '@table-library/react-table-library/tree';

//To demo a tree view we need a data with nested nodes.
//The data object below has nested nodes and the tree 
//plugin for the table simply picks these up as child rows
const list = [
  {
    id: "1",
    name: "VSCode",
    deadline: new Date(2020, 1, 17),
    type: "SETUP",
    isComplete: true,
  },
  {
    id: "2",
    name: "JavaScript",
    deadline: new Date(2020, 2, 28),
    type: "LEARN",
    isComplete: true,
    nodes: [
      {
        id: "2.1",
        name: "Data Types",
        deadline: new Date(2020, 2, 28),
        type: "LEARN",
        isComplete: true,
      },
      {
        id: "2.2",
        name: "Objects",
        deadline: new Date(2020, 2, 28),
        type: "LEARN",
        isComplete: true,
      },
      {
        id: "2.3",
        name: "Code Style",
        deadline: new Date(2020, 2, 28),
        type: "LEARN",
        isComplete: true,
      },
    ],
  },
  {
    id: "3",
    name: "React",
    deadline: new Date(2020, 3, 8),
    type: "LEARN",
    isComplete: false,
    nodes: [
      {
        id: "3.1",
        name: "Components",
        deadline: new Date(2020, 3, 8),
        type: "LEARN",
        isComplete: true,
      },
      {
        id: "3.2",
        name: "JSX",
        deadline: new Date(2020, 3, 8),
        type: "LEARN",
        isComplete: true,
      },
    ],
  },

];

/*==========================
   App Section
===========================*/
const App = () => {
  //list is renamed to "nodes". Nodes is a property of data
  //Nodes are the items in our list. In this example
  //"data" is prop to the Table component.
  const data = { nodes: list }; 

   
  //Let's create a notifier to expand and collapse rows
  //of table using useTree() hook.

  //Sometimes a user wants to have an initial tree state. 
  //This can be achieved with the useTree hook too, by passing 
  //in a default tree state:
  const tree = useTree(
    data,
    {
      onChange: onTreeChange,
    },
    {
      treeIcon: {
        margin: '4px',
        iconDefault: (
          <InsertDriveFileOutlinedIcon />
        ),
        iconRight: <FolderIcon />,
        iconDown: <FolderOpenIcon />,
      },
    }
  );

 /* 
  The onChange callback function gives you access to 
  the action which triggered the tree change and to the 
  current tree state of your table.
 */
 function onTreeChange(action, state) {
   console.log(action, state);
 }

  return (
    //Pass "tree" as plugin "prop" to Table component
    //It is worth noting that the tree object that you passed 
    //to the table is packed with the tree state -- which gives 
    //you the ability to access it any time -- and all the 
    //functions to expand and collapse rows programmatically.
    <Table data={data} tree={tree}>
      {(tableList) => (
        <>
          <Header>
            ...
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <CellTree item={item}> 
                  {item.name}
                </CellTree>
                ...
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};
 
export default App
