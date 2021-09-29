import {List} from 'antd';
import {Link} from "react-router-dom";

const data = [
    {id: 1, title: 'Racing car sprays burning fuel into crowd.'},
    {id: 2, title: 'Japanese princess to wed commoner.'},
    {id: 3, title: 'Australian walks 100km after outback crash.'},
    {id: 4, title: 'Man charged over missing wedding girl.'},
    {id: 5, title: 'Los Angeles battles huge wildfires.'},
];

function ContentList() {
    return (
        <List
            style={{background: '#fff'}}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>
                <Link to={`/detail/${item.id}`}>
                    {item.title}
                </Link>
            </List.Item>}
        />
    );
}

export default ContentList;