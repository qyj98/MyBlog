// 给banner接口提供模拟的响应数据
// 引入mock
import Mock from "mockjs"

// mock方法，根据请求路径，请求类型，拦截请求 并返回一个模板数据作为响应(模拟服务器返回的数据)
Mock.mock("/api/banner", "get", {
    code: 0, // 错误码
    msg: "请求出错，无数据", // 错误消息
    data: [
        {
            id: "1",
            midImg: "https://img1.baidu.com/it/u=3999233385,2386570574&fm=26&fmt=auto&gp=0.jpg",
            bigImg: "https://img1.baidu.com/it/u=3999233385,2386570574&fm=26&fmt=auto&gp=0.jpg",
            title: "凛冬将至",
            description: "人唯有恐惧的时候方能勇敢",
        },
        {
            id: "2",
            midImg: "https://img1.baidu.com/it/u=2442677159,986387537&fm=26&fmt=auto&gp=0.jpg",
            bigImg: "https://img1.baidu.com/it/u=2442677159,986387537&fm=26&fmt=auto&gp=0.jpg",
            title: "血火同源",
            description: "如果我回头，一切都完了",
        },
        {
            id: "3",
            midImg: "https://img0.baidu.com/it/u=1363702935,1646764566&fm=26&fmt=auto&gp=0.jpg",
            bigImg: "https://img0.baidu.com/it/u=1363702935,1646764566&fm=26&fmt=auto&gp=0.jpg",            
            title: "听我怒吼",
            description: "兰尼斯特有债必偿",
        },
    ] // 具体的消息内容，如果code不为0，则必为null
})