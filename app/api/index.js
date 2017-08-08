export default {
    communityCity: ()=>{//获取城市列表
        try {
            return fetch('api',{
                method:'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'aplication/json'
                },
                credentials:'include'
            })
        }catch(err){
            console.log(err)
        }
    },
    getExample: (e)=>{//获取案例信息
        try {
            return fetch('api'+e,{
                method:'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'aplication/json'
                },
                credentials:'include'
            })
        }catch(err){
            console.log(err)
        }
    },
    addTheme: params=>{//新增精编话题
        try {
            return fetch('api',{
                method:'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body:JSON.stringify(params)

            })
        }catch(err){
            console.log(err)
        }
    }

}
