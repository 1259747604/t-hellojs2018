import styles from './goods.css';
import { connect } from 'dva';
import React, { Component } from 'react';

@connect(
  state => ({
    goodlist: state.goods,
    loading: state.loading
  }),
  {
    getList: () => ({
      type: 'goods/getList'
    })
  }
)
export default class extends Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    if (this.props.loading.models.goods) {
      return <div>loading...</div>;
    }
    return (
      <div className={styles.normal}>
        <h1>Page goods</h1>
        <div>
          {this.props.goodlist.map(item => {
            return <div key={item.title}>{item.title}</div>;
          })}
        </div>
      </div>
    );
  }
}
