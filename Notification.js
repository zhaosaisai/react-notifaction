import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// 引入样式
import './assets/notification.css'

// the options for display
const displayStyle = {
    'info': 'v-notification-info',
    'warnning': 'v-notification-warnning',
    'danger': 'v-notification-danger'
}

// the options for size
const sizeStyle = {
    'normal': 'v-notification-normal',
    'small': 'v-notification-small',
    'large': 'v-notification-large'
}

const noop = function() {

}

export default class Notification extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['info', 'warnning', 'danger']).isRequired,
        size: PropTypes.oneOf(['normal', 'small', 'large']),
        closable: PropTypes.bool,
        rounded: PropTypes.bool,
        onClose: PropTypes.func,
        classNames: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]),
        children: PropTypes.node
    }

    static defaultProps = {
        size: 'normal',
        closable: false,
        rounded: false,
        onClose: noop,
        classNames: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            closed: false
        }
    }

    handleClose() {
        const { onClose } = this.props
        this.setState({
            closed: true
        },() => {
            (onClose !== noop) && onClose()
        })
    }

    render() {
        // get the props from parent component
        const {type, size, closable, rounded, onClose ,classNames, children, ...otherProps} = this.props
        const cls = cx(
            'v-notification',
            `${displayStyle[type]}`,
            `${sizeStyle[size]}`,
            {
                'v-notification-rounded': rounded,
                classNames,
                closable
            }
        )

        return (
            (!this.state.closed) && 
            <div className={cls} {...otherProps}>
                {
                    closable 
                        &&
                    <div className="v-notification-close-wrapper">
                        <i 
                            className="v-notification-close-btn"
                            onClick={() => this.handleClose()}
                        >
                            x
                        </i>
                    </div> 
                }
                <div className="v-notification-wrapper">
                    <div className="v-notification-content">
                        {children}
                    </div> 
                </div>
            </div>
        )
    }
}