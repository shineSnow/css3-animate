import Main from 'CMP/main';
import Body from 'CMP/body';
module.exports = [
    {
        path:'/',
        indexRoute:{
            onEnter(next, replace){
                replace('/main')
            }
        },
        childRoutes:[
            {
                path:'main',
                component:Main
            },
            {
                path:'body',
                component:Body
            }

        ]
    }
]