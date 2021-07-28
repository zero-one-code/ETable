import { Table } from 'view-design';
import Vue from 'vue';
export default {
    extends: Table,
    mounted() {
        let tdElement = this.$el.getElementsByClassName(this.prefixCls + '-tip')[0].getElementsByTagName('td')[0];
        tdElement.innerHTML = '<div id="extendNoDataDom"></div>';
        let NewCom = Vue.extend({
            render: h => {
                let { data, $slots: { noDataTem } } = this;
                if (!data || data.length === 0) {
                    if (noDataTem) {
                        return h('div', noDataTem)
                    } else {
                        return h('span', {
                            domProps: {
                                innerHTML: this.localeNoDataText
                            }
                        })
                    }
                } else {
                    return h('span', {
                        domProps: {
                            innerHTML: this.localeNoFilteredDataText
                        }
                    })
                }
            }
        })
        new NewCom().$mount('#extendNoDataDom');
    }
}