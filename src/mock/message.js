import Mock from "mockjs";
import qs from "querystring";

// 模拟提交留言
Mock.mock("/api/message", "post", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
            "https://img2.baidu.com/it/u=1030772480,2877080985&fm=26&fmt=auto&gp=0.jpg",
            "https://img0.baidu.com/it/u=39622303,219645647&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=58486572,3968838922&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=3088321344,192550310&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=4034143733,2669710374&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=1217624386,3261401801&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=2756709765,394888913&fm=26&fmt=auto&gp=0.jpg",
        ],
    },
});

// 模拟分页获取留言  path： api/comment?page=xxx&limit=xxx
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
    //options：地址栏参数
    // console.log(options);
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: 42,
            // "属性名|生成规则":属性值  @占位符 表示引用Mock.Random
            // 当生成规则是表达式 要用动态属性[]括起来并使用模版字符串
            [`rows|${query.limit || 10}`]: [{
                id: "@guid",
                nickname: "@cname",
                content: "@cparagraph(1, 10)",
                createDate: Date.now(),
                "avatar|1": [
                    "https://img2.baidu.com/it/u=1030772480,2877080985&fm=26&fmt=auto&gp=0.jpg",
                    "https://img0.baidu.com/it/u=39622303,219645647&fm=26&fmt=auto&gp=0.jpg",
                    "https://img1.baidu.com/it/u=58486572,3968838922&fm=26&fmt=auto&gp=0.jpg",
                    "https://img2.baidu.com/it/u=3088321344,192550310&fm=26&fmt=auto&gp=0.jpg",
                    "https://img1.baidu.com/it/u=4034143733,2669710374&fm=26&fmt=auto&gp=0.jpg",
                    "https://img2.baidu.com/it/u=1217624386,3261401801&fm=26&fmt=auto&gp=0.jpg",
                    "https://img2.baidu.com/it/u=2756709765,394888913&fm=26&fmt=auto&gp=0.jpg",
                ],
            }],
        }
    })
})

// import Mock from "mockjs";
// import qs from "querystring";

// Mock.mock("/api/message", "post", {
//   code: 0,
//   msg: "",
//   data: {
//     id: "@guid",
//     nickname: "@cname",
//     content: "@cparagraph(1, 10)",
//     createDate: Date.now(),
//     "avatar|1": [
//       "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
//       "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
//       "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
//       "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
//     ],
//   },
// });

// Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
//   const query = qs.parse(options.url);

//   return Mock.mock({
//     code: 0,
//     msg: "",
//     data: {
//       total: 52,
//       [`rows|${query.limit || 10}`]: [
//         {
//           id: "@guid",
//           nickname: "@cname",
//           content: "@cparagraph(1, 10)",
//           createDate: Date.now(),
//           "avatar|1": [
//             "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
//             "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
//             "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
//             "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
//           ],
//         },
//       ],
//     },
//   });
// });

