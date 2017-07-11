# hatch-admin

> hatch admin


# 前言
1. 本项目是一整套解决方案， 因此看这个项目的方式应该是带着问题看的
2. 比如写后台代码时遇到数据、组件、方法逻辑在不同地方需要引用时应该怎么处理？(store)
3. 比如如何代码写完了如何测试？如何发布？
4. 比如但服务器负载不够了？

# 通用-必须要了解的知识
1. 简单的JS语法
2. 完成[Vuejs官网](https://vuejs.org/v2/examples/)简单的Demo
3. Nginx


# 通用-选择性了解的知识
1. Vuex 管理不同component之间共享的内容 需要共享的才放到 store 里
2. store.state.xxx => store/modules 每个state的一个初始key, 需要对应好每个module
3. store 有比较多的获取方法， 需要都记录起来
4. 配置一个 store 的module 需要3个地方, (store/modules/xxx, store/getters.js, store/index.js)

# 框架-必须要了解的
1. 如何添加一个新的 route (菜单)
2.


# 知识点
    新增一个 route
    1. layout 和 views 的区别
    layout是在App.vue里，既root component加载的

    配置webpack的 import 路径
    可以在build的配置文件里自定义 import 的第一级的名称, 如何vuex-store



# 缺陷
    1. 因为代码块的高度抽象，代码配置分布到不同的区域，分辨不出哪些配置与代码逻辑的对应关系



# 附1
    @author Abos Freeman (abos5)
    @date(Jul 1, 2017) 9:54 PM
    hatchjs系列是本人做为 PHP/Lua 后端业务程序员工作四年(20170701)来的回顾、总结。
    将一直以来工作中觉得好用的工作流(管理后台)实现出来，做一个通用的版本，方便创业公司直接套用。
    同时也是本人对未来的工作规划、筹备。
    本套系统基本只采用 javascript 进行开发，而非工作以来一直使用的 PHP,Lua 等语言。
    由于 javascript 的天然优势，大公司里一定会有人才编写 javascript 代码, 但 PHP/Lua 却不一定。
    因此有更多的优秀案例可以参考，高质量社区数量更多，生机活跃。

# 附2
    工作流
    后台模板
    统一后台入口
    统一配置后台
    自定义配置系统
    用户系统
    服务器分布式解决方案


