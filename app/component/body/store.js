import {action,observable} from 'mobx'

class Store {

    @observable _tap=''
    @observable _swipe=''
    @observable _panX='0'
    @observable _panY='0'

    @action test_onTap=()=>{
        alert('onTap')
    }
    //loading
    @observable flag=false
    @action timeout=()=>{
        setTimeout(
            this.flag = true
        ,5000)
    }

}
export default new Store()