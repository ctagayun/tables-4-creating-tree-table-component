import * as React from 'react';
import './App.css'
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
/*
  Task: We will enable users to have their header sticky to the top
        You can now scroll the rows of the table in a vertical 
        direction while the header remains sticky at the top of the 
        table.

        Install material icons:
          npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
*/


import {
  useTree,
  CellTree,
  TreeExpandClickTypes,
} from '@table-library/react-table-library/tree';

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
const App = () => {
  //list is renamed to "nodes". Nodes is a property of data
  //Nodes are the items in our list. In this example
  //"data" is prop to the Table component.
  const data = { nodes: list }; 

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
  
  function onTreeChange(action, state) {
    console.log(action, state);
  }

  return (
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
