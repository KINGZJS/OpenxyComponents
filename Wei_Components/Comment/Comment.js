import React, {Component} from  'react'
import ReactDOM from 'react-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Comment extends Component{
    constructor(){
        super();
        this.state ={
            comments:[],//用户评论数据
            user_name:'',//用户名
            comment_content:'',
            pages:[],//存放<li>标签
            page:0,//总页数
            current_page:0//当前页数
        }

    }
    componentDidMount() {
        fetch('http://119.28.24.179:8081/comments?page=0',{
            method:'get'
        })
            .then(response=>{
                response.json().then(result=>{
                    const comments = result.data
                    this.setState({
                        comments
                    })
                })
            })
        fetch('https://bird.ioliu.cn/v1?url=http://119.28.24.179:8081/page',{
            method:'get'
        })
            .then(response=>{
                response.json().then(result=>{
                    const page = result.count
                    this.setState({page})
                })
            })
    }
    handleClick = () =>{
        const user_name= this.refs.user_name.value.trim()
        const comment_content= this.refs.comment_content.value.trim()
        fetch('https://bird.ioliu.cn/v1?url=http://119.28.24.179:8081/comment',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: user_name,
                comment_content: comment_content,
                user_ID:123123
            })
        }).then(response=>{
            response.json().then(result=>{
                if (result.status==true){
                    alert("发表成功！")
                    //如果在最后一页，用户发表评论，则获取最后一页的评论数据，更新显示
                    fetch('http://119.28.24.179:8081/comments?page='+this.state.current_page,{
                        method:'get'
                    }).then(response=>{
                        response.json().then(result=>{
                            const comments = result.data
                            this.setState({comments})
                        })
                    })
                }
                else alert("发表失败！")
            })
        })
    }
    //分页功能
    changePage = (e,index) =>{
        fetch('http://119.28.24.179:8081/comments?page='+index,{
            method:'get'
        }).then(response=>{
            response.json().then(result=>{
                const comments = result.data
                this.setState({
                    comments,
                    current_page:index
                })
            })
        })
    }
    render(){
        const {comments} = this.state
        const lis = page=>{
            let li = [];
            for (let i=0;i<page;i++){
                li.push(
                        <PaginationItem key={i+1} onClick={(e)=>(e.preventDefault(),this.changePage(e,i))}>
                            <PaginationLink href="#">
                                {i+1}
                            </PaginationLink>
                        </PaginationItem>
                )
            }
            return li;
        }
            return(
                <div className="container" style={{width:'500px',position:'relative'} }>
                    <form>
                        <div className="form-group">
                            <label>
                                用户名:
                            </label>
                            <input type="text" name="user_name" className="form-control" placeholder="用户名" ref="user_name"/>
                            <label>评论:</label>
                            <textarea className="form-control" name="comment_content" placeholder="留下点痕迹吧！" rows="5" ref="comment_content"></textarea>
                        </div>
                        <input type="reset" style={{cursor:'pointer'}} onClick={this.handleClick} className="btn btn-primary" value="发表评论"/>
                    </form>
                    <Pagination>
                        {lis(this.state.page)}
                    </Pagination>
                    <div className="list-group ">
                        {
                            comments.length?comments.map((comment,index)=>
                                    (
                                        <div className="list-group-item row" key={index}>
                                            <div>
                                                <p>用户名:{comment.user_name}</p>
                                                <p>{comment.comment_content}</p>
                                                <p>{comment.comment_time}</p>
                                            </div>
                                        </div>
                                    )
                                ):void 0
                        }
                    </div>
                </div>
            )
        }
}

export default Comment


