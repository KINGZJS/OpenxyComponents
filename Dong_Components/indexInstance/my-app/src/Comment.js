import React, {Component} from  'react'
import { Pagination, PaginationItem, PaginationLink,Button } from 'reactstrap';
import Login from './Login'
import styled from 'styled-components'

const Label = styled.div`
    // float:left;
    font-family:'仿宋';
    font-size:1rem;
    color:#004d40;
    font-weight:800;
`;

const CommentDiv = styled.div`
    width:100%;
    background-color:white;
    margin-top:1.5rem;
    margin-bottom:1.5rem;
    border:1px solid white;
    border-radius:0.1rem;
    padding:0.5rem 1rem 0.5rem 1rem;
`;

const CommentButton = styled(Button)`
    width:4rem;
    font-size:0.6rem;
    // float:left;
    margin-top:0.8rem;
    margin-right:0.5rem;
    display:inline-block;
`;

const Hr = styled.hr`
    margin-top:0.3rem;
    margin-bottom:0.3rem;
`;

const UserComment = styled.div`
    padding:0.5rem 1rem 0.5rem 1rem;
`;

const UserName = styled.p`
    font-size:0.8rem;
    font-family:'仿宋';
    font-weight:600;
    color:#004d40;
    margin:0;
`;

const CommentTime = UserName.extend`
    float:right;
    font-size:0.6rem;
`;

const CommentContent = styled.p`
    font-size:0.7rem;
    text-align:left;
`;

const Page = styled.div`
    float:right;
    margin-top:0.5rem;
    
    .page-link{
        line-height:0.5;
        font-size:0.6rem;
    }
`;

const CommentForm = styled.form`
    margin:1rem 3rem 1rem 3rem;
`;


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

            //problem: https://stackoverflow.com/questions/35841786/response-for-preflight-is-invalid-redirect-error

          fetch('http://119.28.24.179:8081/authUser',{
                method:'POST',
                mode:'CORS',
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem("token"),
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
                <CommentDiv>
                    <Label>评论:</Label>
                    <UserComment className="list-group ">
                        {
                            comments.length?comments.map((comment,index)=>
                                    (
                                        <div className="list-group-item row" key={index}>
                                            <div>
                                                <UserName>用户名:{comment.user_name}</UserName>
                                                <Hr/>
                                                <CommentContent>{comment.comment_content}</CommentContent>
                                                <CommentTime>{comment.comment_time}</CommentTime>
                                            </div>
                                        </div>
                                    )
                                ):void 0
                        }
                    </UserComment>

                    <Page>
                        <Pagination>
                            {lis(this.state.page)}
                        </Pagination>
                    </Page>

                    <CommentForm onSubmit={this.handleSubmit}>
                        <textarea className="form-control" name="comment_content" placeholder="Say something！" required rows="5" ref="comment_content"></textarea>
                        <CommentButton type="submit" style={{cursor:'pointer'}} onClick={this.handleClick} outline color="success">发表评论</CommentButton>
                    </CommentForm>
                    {
                        login()
                    }

                </CommentDiv>
            )
        }
}

export default Comment


