/**
 * Created by jiongzhi on 17-5-9.
 */

import React from 'react';
import { Col, Row, Card } from 'reactstrap';

const ChangedFileBox = props => {

    const { deletedFile, modifiedFile, addedFile, handleClickFile } = props;
    /**
     *
     * deletedFile, modifiedFile, addedFile like:
     *
     *  [
     *    {
     *      file:'src/git/ac.js'
     *      remotePath:'https://www.github.com/jiongzhi/project/src/git/ac.js'
     *      fileType:'js'
     *    },
     *    {
     *      file: ...
     *      remotePath: ...
     *      fileType: ...
     *    },
     *    ....
     *
     *  ]
     *
     *
     * handleClickFile need two args
     * usage:
     *
     * <p onClick={ handleClickFile(file.remotePath, file.fileType) }>
     *   {file.file}
     * </p>
     *
     * */

    const cardStyle = { height:'10em' };
    const deleteStyle = { color: 'red'};
    const modifyStyle = { color: 'blue'};
    const addStyle = { color: 'green'};

    return (<div style={{textAlign:'center', margin:'10px'}}>
      <Row>
        <Col>
          <h1>Deleted File</h1>
          <Card style={cardStyle}>
            {
              deletedFile.map(file =>
                  (<p style={deleteStyle}
                        key={file.file}
                    >{file.file}</p>)
              )
            }
          </Card>
        </Col>

        <Col>
          <h1>Modified File</h1>
          <Card style={cardStyle}>
            {
              modifiedFile.map(file =>
                      (<p style={modifyStyle}
                          key={file.file}
                          onClick={
                            handleClickFile(file.remotePath, file.fileType)
                          }>{file.file}</p>)
              )
            }
          </Card>
        </Col>

        <Col>
          <h1>Added File</h1>
          <Card style={cardStyle}>
            {
              addedFile.map(file =>
                  (<p style={addStyle}
                      key={file.file}
                      onClick={
                        handleClickFile(file.remotePath,file.fileType)
                      }>{file.file}</p>)
              )
            }
         </Card>
      </Col>
      </Row>
    </div>);

}

export default ChangedFileBox;
