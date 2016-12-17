var loginAndRegister = require('./../doMain/LoginAndRegister');

var enumType = cc.Enum({
    register : 1,
    login : 2,
    toGame : 3,
    choice : 4,
});

cc.Class({
    extends: cc.Component,

    properties: {       
        //账号
        editorLoginUserName:{
            default:null,
            type : cc.EditBox,
        },
        //密码
        editorLoginPassword:{
            default:null,
            type:cc.EditBox,
        },

        //账号
        editorRegisterUserName:{
            default:null,
            type : cc.EditBox,
        },
        //密码
        editorRegisterPassword:{
            default:null,
            type:cc.EditBox,
        },

        //按钮
        btnLogin:{
            default:null,
            type:cc.Button,
        },
        loginAndRegister:{
            default:null,
            type:loginAndRegister,
        }, 

        layoutRegister:{
            default:null,
            type:cc.Layout,
        },

        layoutLogin:{
            default:null,
            type:cc.Layout,
        },

        layoutToGame:{
            default:null,
            type:cc.Layout,
        },

        layoutChoice:{
            default:null,
            type:cc.Layout,
        }
    }, 

    eveBtnLogin:function()
    {
        var self = this;
        self.loginAndRegister.doLogin( self.editorLoginUserName.string , self.editorLoginPassword.string, function( code ){
            if( 200 == code )
            {
                cc.log('登录成功！！！');     
                self.doShowLayout( enumType.toGame); 
            }
        });        
    },

    eveBtnRegister:function()
    {
        var self = this;
        self.loginAndRegister.doRegister( self.editorRegisterUserName.string , self.editorRegisterPassword.string, function( code ){
            if( 200 == code )
            {
                 cc.log('注册成功！！！');    
                 self.editorLoginUserName.string=  self.editorRegisterUserName.string ;
                 self.editorLoginPassword.string= self.editorRegisterPassword.string;
                 self.doShowLayout( enumType.login); 
            }
        });        
    },

    

    eveToGame:function()
    {
        MgScene.Inst().gotoScene( EnumScene.HELLO_WORD ); 
    },

    doShowLayout : function( _enumType )
    {
        cc.log('doShowLayout _enumType = %s',_enumType);
         this.layoutRegister.node.active = false;
         this.layoutToGame.node.active = false;
         this.layoutLogin.node.active = false;
         this.layoutChoice.node.active = false;
                  
         switch(_enumType){
             case enumType.register:
                this.layoutRegister.node.active = true;
                cc.log('register');
                break;
             case enumType.login:
                this.layoutLogin.node.active = true;
                cc.log('login');
                break;
             case enumType.toGame:
                this.layoutToGame.node.active = true;
                cc.log('toGame');
                break;
             case enumType.choice:
                this.layoutChoice.node.active = true;
                cc.log('choice');
                break;
            default:
                cc.log("未找到信息");
                break;
         }
    },
    //选择的类型
    eveChoice:function( _enumType ,data ){       
        cc.log('data = %s',data);
        this.doShowLayout( Number(data) );
    },
    onLoad:function(){
        this.doShowLayout(enumType.choice);
    }
});
