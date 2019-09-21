var ErrorMessage;
(function (ErrorMessage) {
    function errorMsg(type) {
        switch (type) {
            case '204':
                return '账号不存在';
            case '211':
                return '用户名已注册';
            case '212':
                return '密码错误';
            case '213':
                return '已修改过昵称';
            case '301':
                return '请求参数错误';
            case '302':
                return '已经在游戏中';
            case '303':
                return '不在游戏中';
            case '304':
                return '已超过最大下注金额！';
            case '305':
                return '下注金币为0 出错';
            case '306':
                return '下注编号错误';
            case '307':
                return '庄家不能下注';
            case '308':
                return '已经上庄过了';
            case '309':
                return '并未上庄过';
            case '310':
                return '封盘停止下注';
            case '311':
                return '下局将不是庄';
            case '312':
                return '座位上有人了';
            case '313':
                return '座位未找到';
            case '314':
                return '抱歉，下注后不能发红包';
            case '315':
                return '当前您是庄家不可以发红包';
            case '316':
                return '您的余额不足，请充值后再发红包';
            case '318':
                return '您已经有座位了';
            case '319':
                return 'VIP等级不够';
            case '320':
                return '消息发送频繁';
            case '321':
                return '缺少比武卡,请在商城购买';
            case '322':
                return '游戏密码错误';
            case '323':
                return '已经出拳';
            case '324':
                return '游戏人数不足';
            case '325':
                return '您处于排庄列表，不可坐下';
            case '326':
                return '你下注的金额超过庄家接受的上限';
            case '327':
                return '操作太频繁！';
            case '328':
                return '游戏次数不足！';
            case '401':
                return 'VIP等级不够';
            case '402':
                return '已经发布打赏';
            case '403':
                return '没有摇钱树';
            case '404':
                return '没有足够的金币';
            case '405':
                return '没有足够的点卷';
            case '406':
                return '未找到';
            case '407':
                return '未完成';
            case '408':
                return '已获取';
            case '409':
                return '请求参数错误';
            case '410':
                return '金币不足存入';
            case '411':
                return '银行不足取出';
            case '412':
                return '金币不足';
            case '413':
                return '打赏过期';
            case '414':
                return '游戏中不能存入';
            case '420':
                return '当前不可以领取救济金';
            case '422':
                return '未购买';
            case '423':
                return '已经领取过';
            case '424':
                return '已经过期';
            case '425':
                return '奖品不存在';
            case '426':
                return '不在抽奖时间内';
            case '427':
                return '金币不足';
            case '428':
                return '没有抽奖次数';
            case '429':
                return '当前库存无奖券';
            case '431':
                return '今天提交意见次数已满，感谢您明天再来提交意见！';
            case '433':
                return '充值后便可以参与大转盘抽奖了！';
            case '434':
                return '您的抽奖次数已经用完！';
            case '436':
                return '您已经领取了奖励！';
            case '501':
                return '没有此房间！';
            case '504':
                return '房间人数已满！';
            case '512':
                return '您的金币不能进入当前倍率的房间！';
            case '514':
                return '游戏中不能修改底分！';
            case '436':
                return '您已经领取了奖励！';
            case '601':
                return '竞猜未开始！';
            case '602':
                return '竞猜已结束！';
            case '603':
                return '竞猜已下注！';
            case '604':
                return '金币不足！';
            case '605':
                return '没有这个竞猜！';
            case '701':
                return '游戏已结束！';
            default:
                return '返回提示错误代码：' + type;
        }
    }
    ErrorMessage.errorMsg = errorMsg;
})(ErrorMessage || (ErrorMessage = {}));