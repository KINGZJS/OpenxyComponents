import React, {Component} from  'react'
import { Pagination, PaginationItem, PaginationLink,Button } from 'reactstrap';
import Login from './Login'
class Comment extends Component{
    constructor(){
        super();
        this.state ={
            comments:[],//用户评论数据
            comment_content:'',
            pages:[],//存放<li>标签
            page:0,//总页数
            current_page:0,//当前页数
            status:true,//是否登陆状态
            token:'',
            user_name:'',//用户名
            user_ID:''
        }
    }
    judgeLogin=()=>{
        fetch('https://bird.ioliu.cn/v1?url=http://119.28.24.179:8082/user?token='+localStorage.getItem("token"),{
            method:'get'
        }).then(response=>{
            response.json().then(result=> {
                if (Object.prototype.toString.call(result.status) === '[object Object]') {
                    const status = JSON.parse(result.status.message.response.text).status
                    this.setState({status})
                }
                else this.setState({status:result.status})
            })
        })
    }
    componentWillMount(){
        fetch('https://bird.ioliu.cn/v1?url=http://119.28.24.179:8082/user?token='+localStorage.getItem("token"),{
            method:'get'
        })
            .then(response=>{
                response.json().then(result=>{
                    if (result.message=="refresh token"){
                        localStorage.removeItem("token")
                        localStorage.setItem("token",result.token)
                        this.judgeLogin();
                    }
                    else {
                        if (Object.prototype.toString.call(result.status) === '[object Object]') {
                            const status = JSON.parse(result.status.message.response.text).status
                            this.setState({status})
                            console.log(status)
                        }
                        else this.setState({status:result.status})
                    }
    })})}
    componentDidMount() {
        fetch('https://bird.ioliu.cn/v1?url=http://119.28.24.179:8081/comments?page=0',{
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
        // fetch('https://bird.ioliu.cn/v1?url=http://119.28.24.179:8082/user?token='+this.state.token,{
        //     method:'get'
        // })
        //     .then(response=>{
        //         response.json().then(result=>{
        //             console.log()
        //             if (Object.prototype.toString.call(result.status) === '[object Object]'){
        //                 const status = JSON.parse(result.status.message.response.text).status
        //                 this.setState({status})
        //             }
        //             else this.setState({status:result.status})
        //         })
        //     })
        if(this.state.status){
            const comment_content= this.refs.comment_content.value.trim();
            let formData = new FormData();
            formData.append("comment_content","user_name","user_ID");
            formData.append(comment_content,this.state.user_name,this.state.user_ID);
            fetch('http://119.28.24.179:8081/authUser',{
                method:'POST',
                mode:'CORS',
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem("token"),
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type':'text/plain'
                },
                body: formData
            }).then(response=>{
                console.log(response)
                // response.json().then(result=>{
                //     if (result.status==true){
                //         alert("发表成功！")
                //         //如果在最后一页，用户发表评论，则获取最后一页的评论数据，更新显示
                //         fetch('http://119.28.24.179:8081/comments?page='+this.state.current_page,{
                //             method:'get'
                //         }).then(response=>{
                //             response.json().then(result=>{
                //                 const comments = result.data
                //                 this.setState({comments})
                //             })
                //         })
                //     }
                //
                // })
            }).catch(error=>{
                console.log(error)
            })
        }
        else alert("发表失败！请登陆")
    }
    //分页功能
    changePage = (e,index) =>{
        fetch('https://bird.ioliu.cn/v1?url=http://119.28.24.179:8081/comments?page='+index,{
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
    handleSubmit = e=>{
        e.preventDefault();
    }
    getUsermsg = (token,user_name,user_ID,status)=>{
        this.setState({token,user_name,user_ID,status})
    }
    handleLogout = ()=>{
        if (window.confirm("确定要注销吗？")){
            localStorage.removeItem("token")
            this.judgeLogin()
        }
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
        const login = ()=>{
            if (!this.state.status)
                return <Login size="md" getUsermsg={this.getUsermsg}/>
            else return <Button onClick={this.handleLogout}>注销</Button>
        }
            return(
                <div className="container" style={{width:'500px',position:'relative'} }>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>评论:</label>
                            <textarea className="form-control" name="comment_content" placeholder="留下点痕迹吧！" required rows="5" ref="comment_content"></textarea>
                        </div>
                        <Button type="submit" style={{cursor:'pointer'}} onClick={this.handleClick} className="btn btn-primary">发表评论</Button>
                    </form>
                    {
                        login()
                    }
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


