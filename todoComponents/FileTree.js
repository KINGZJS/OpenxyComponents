import React from 'react'
import Tree from 'rc-tree';  //需要安装这个包 npm install rc-tree --save
import styled,{keyframes} from 'styled-components';

import 'rc-tree/assets/index.css'; //这里多引入一条基本样式,防止bug
import './fileTree.css';
/**
* API文档:  https://github.com/fis-components/rc-tree
 *
 * 如何使用这个FileTree
 *
 * 在你要使用这个组件的js文件
 *
 * 加上一条
 * import FileTree from '这个文件的位置';
 *
 *
 * 写上<FileTree/>即可
* */

const TreeNode = Tree.TreeNode;

/*--------------styled-components-------------------------*/
/**
 *
 * https://www.styled-components.com/docs
 *
 *这里只写了普通的给它增加样式
 *
 * styled-components还能支持
 *
 * 1.使下面的blue变成一个参数(让css取决于我提供给你们的属性)
 *
 * 2.基于第一点1,就能定制主题了
 *
 * 3.让样式可以主动继承
 *
 * 4.让样式变成一个组件见Rotate
 *
* */
const StyledTree = styled(Tree)`
	background-olor: blue;
`;
/* 让样式变成一个组件 */
const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
const Rotate = styled.div`
	display: inline-block;
	animation: ${ rotate360 } 2s linear infinite;
`;
/*---------------------------------------*/
const FileTree = props => {
  //这个props就是我会传递过来的数据,目前给数据太麻烦,先不管
  //
  //以下就是当前项目的文件树,注意下嵌套关系
  //
  //由于这个树我会动态生成,深度优先遍历一个json:
  /*
  * {
  *   name: 'OpenxyComponents',
  *   children:[                        // 带有children表示是文件夹
  *     {
  *       name: 'doc',
  *       children:[]
  *     },
  *     {
  *       name: 'todoComponents',
  *       children:[{
  *          name: 'FileTree.js',
  *          filePath: '/OpenxyComponents/todoComponents/FileTree.js'
  *       }]
  *     },
  *     {
  *       name: 'README.md',
  *       filePath: '/OpenxyComponents/README.md'
  *     }
  *   ]
  * }
  *
  * 如何加样式?
  * 1.使用css,已经帮你们引入进来
  *
  * 2.使用styled-component,最终目标,未来一定是这种办法
  *
  *
  * */
  const DIVFILETREE = styled.div`
  li{
  }
  ul{
  
  }
  `;
  const style={ color:'red'}
  return (<div>
    {/*Tree的基本用法*/}

    <Tree showLine>
      <TreeNode title="OpenxyComponents" className="myTree" >
        <TreeNode title="doc"/>
        <TreeNode title="todoComponents">
          <TreeNode title="FileTree.js"/>
        </TreeNode>
        <TreeNode title="README.md"/>
      </TreeNode>
    </Tree>



    {/*styled-components用法*/}
    <Rotate>
      <StyledTree>
        <TreeNode title="OpenxyComponents">
          <TreeNode title="doc"/>
          <TreeNode title="todoComponents">
            <TreeNode title="FileTree.js"/>
          </TreeNode>
          <TreeNode title="README.md"/>
        </TreeNode>
      </StyledTree>
    </Rotate>




    {/*CSS用法*/}
    <div>
      <Tree showLine className="myTree">
        <TreeNode title="OpenxyComponents">
          <TreeNode title="doc"/>
          <TreeNode title="todoComponents">
            <TreeNode title="FileTree.js"/>
          </TreeNode>
          <TreeNode title="README.md"/>
        </TreeNode>
      </Tree>
    </div>
  </div>)
};


export default FileTree
