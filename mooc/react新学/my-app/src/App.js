import {Layout} from 'antd';
import AppHeader from "./components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ContentList from './containers/List';
import Detail from './containers/Detail';


const {Header, Footer, Content} = Layout;

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header className="header">
                    <AppHeader/>
                </Header>
                <Content className="content">
                    {/*原本BrowserRouter放在这里，但是当需要路由跳转的时候，appheader需要在BrowserRouter包裹里面，所以移动到最外面去了*/}
                    <Switch>
                        {/*优先匹配满足条件的第一项*/}
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/:id?' component={ContentList}/>
                    </Switch>

                </Content>
                <Footer className="footer">@copyright mhr 2021/09/24</Footer>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
