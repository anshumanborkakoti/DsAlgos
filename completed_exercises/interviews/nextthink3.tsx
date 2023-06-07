import "./styles.css";
import { useState } from "react";

/**
 * Create a file tree explore similar to the one on the left hand side.
 *
 * * Please define types for the data structures.
 * * Clicking on a directory should expand / collapse files or directories under it.
 * * Directory name should have + or - sign in front of it indicating if it is expanded or collapsed.
 * * Direcories and files should be indented based on their depth in a tree.
 *
 * Example
 *
 * ├── node_modules
 * │   ├── react
 * │      ├── node_modules
 * │      ├── **
 * ├── src
 * │   ├── App.tsx
 * │   ├── **
 * ├── package.json
 */

type FileNode = {
    type: 'file' | 'directory';
    name: string;
    children: FileNode[];
}

const data: FileNode = {
    type: 'directory',
    name: 'root',
    children: [{
        type: 'directory',
        name: 'child1',
        children: [{
            type: 'file',
            name: 'file1'
        }]
    }, {
        type: 'directory',
        name: 'child2'
    }]
}


function FileRow(props) {
    const fileOb = props.file as FileNode;
    return (
        <>
            {fileOb && fileOb.children && fileOb.children.map(file => <Explorer key={file.name} data={file} />)}
        </>
    );
}

function Explorer({ data }) {
    const [collapsed, setCollapsed] = useState(true);
    const clickhandler = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div>
            {collapsed && <div onClick={clickhandler} > +</div>}
            {
                !collapsed && <div onClick={clickhandler}> -</div>}
            {data.name}
            {!collapsed && <FileRow key={data.name} file={data} />}
        </div>
    );
}



export default function App() {
    return (
        <div className="App" >
            <h1>Explorer < /h1>
                < Explorer data={data} />
        </div>
    );
}

