import React, {Component} from "react";
import { Form , Input , Checkbox , Button} from 'antd';


const Signup = () =>{
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    };

    // Coustom Hook 이전
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeName = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    }

    return (
        <>
            <Head>
                <title>Daily Note</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js"></script>
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit} style={{padding:10}}>
                    <div>
                        <label htmlFor="user-id">아이디</label><br/>
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-name">이름</label><br/>
                        <Input name="user-name" value={nick} required onChange={onChangeName} />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label><br/>
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호체크</label><br/>
                        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                        {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div style={{marginTop:10}}>
                        <Button type="primary" htmlType="submit" >가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;