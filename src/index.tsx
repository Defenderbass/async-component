import * as React from 'react';
import {Component} from "react";

export type ReactComponent = new() => Component<any, any>;

export interface IFetchComponents {
    (): Promise<ReactComponent>;
}

const asyncComponent = (fetchComponent: IFetchComponents, Loader?: ReactComponent) =>
    class AsyncComponent extends Component<any, { Element: ReactComponent }> {
        static Component: ReactComponent;
        _isMounted: boolean;

        state = {
            Element: AsyncComponent.Component
        };

        componentDidMount() {
            this._isMounted = true;
            if (!AsyncComponent.Component) {
                fetchComponent().then(Element => {
                    AsyncComponent.Component = Element;
                    if (this._isMounted) {
                        this.setState({Element})
                    }
                });
            }
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            const {Element} = this.state;

            if (!Element) return Loader ? <Loader/> : null;

            return <Element {...this.props}/>;
        }
    };

export default asyncComponent;