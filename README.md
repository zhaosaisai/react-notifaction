## react-notification

> A small component for react

The component is used for the notification in the web page, created by react. And there are some `props` 
for the use

### type[:String]

The style of the component, the value is one of the `info`, `danger`, `warnning`

### size[:String]

The size of the component, the value is one of the `normal`, `small`, `large`

### closeable[:Boolean]

The element is closeable or not

### rounded[:Boolean]

The `border-radius` should be used on the componnet or not

### onClose[:Function]

The callback when the element is closed

### classNames

The class name defined by own applied on the element

Therefore, you can use the component as below

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Notification from './notification'

class App extends React.Component{
    render() {
        return (
            <div>
                <Icon type="youzan" />
                <Notification type="info">
                    这是一个标准的通知栏
                </Notification>
                <Notification type="warnning">
                    这是一个标准的通知栏
                </Notification>
                <Notification type="danger">
                    这是一个标准的通知栏
                </Notification>

                <Notification type="danger" size="small">
                    这是一个标准的通知栏
                </Notification>
                <Notification type="danger" size="large" rounded>
                    这是一个标准的通知栏
                </Notification>

                <Notification type="info" closable>
                    这是一个标准的通知栏
                </Notification>
                <Notification type="danger" size="large" rounded closable onClose={() => console.log('closed')}>
                    这是一个标准的通知栏
                </Notification>

                <Notification type="info" size="large" rounded closable onClose={() => console.log('closed')}>
                    这是一个标准的通知栏 <a href="www.baidu.com" target="_blank">hello</a>
                </Notification>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

```