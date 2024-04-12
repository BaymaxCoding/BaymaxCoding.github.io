import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,b as a}from"./app-DOGW-9XX.js";const l={},t=a(`<h1 id="hcitool" tabindex="-1"><a class="header-anchor" href="#hcitool"><span>hcitool</span></a></h1><p>hcitool是一个Linux命令行工具，用于管理和调试蓝牙设备。它可以用于扫描周围的蓝牙设备、连接到蓝牙设备发送命令和数据包等。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>hcitool是一个Linux命令行工具，通常已经预装在大多数Linux行版中。如果您的系统中没有安装hcitool，可以使用以下命令进行安装(debian系列发行示例)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> bluez
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>注意事项：</p><ol><li>使用ble相关命令需要提权如:lescan</li></ol><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><p><code>hcitool [options] &lt;command&gt; [command parameters]</code></p><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    dev  显示本地设备
    inq  查询远程设备
    scan 扫描远程设备
    name 从远程设备获取名称
    info 从远程设备获取信息
    spinq   启动定期查询
    epinq   退出定期查询
    cmd 提交任意HCI命令
    con 显示活动连接
    cc 创建到远程设备的连接
    <span class="token function">dc</span> 断开与远程设备的连接
    sr 交换机中心/外围角色
    cpt 更改连接数据包类型
    rssi 显示连接rssi
    lq 显示链路质量
    tpl 显示发射功率电平
    afh 显示afh通道图
    lp 设置/显示链接策略设置
    lst 设置/显示链接监控超时
    auth 请求身份验证
    enc 设置连接加密
    key 更改连接链接键
    clkoff 读取时钟偏移
    clock 读取本地或远程时钟
    lescan 启动LE扫描
    leinfo 获取LE远程信息
    lealadd 将设备添加到LE接受列表
    lealrm 从LE接受列表中删除设备
    lealsz LE接受列表的读取大小
    lealclr 清除LE接受列表 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用简单示例" tabindex="-1"><a class="header-anchor" href="#常用简单示例"><span>常用简单示例</span></a></h3><p>1.扫描周围的蓝牙设备</p><p><code>hcitool scan</code></p><p>2.通过mac地址连接到蓝牙设备</p><p><code>hcitool cc &lt;MAC地址&gt;</code></p><p>3.显示当前蓝牙适配器信息</p><p><code>hcitool dev</code></p><p>4.通过mac地址找到蓝牙名称</p><p><code>hcitool name &lt;MAC地址&gt;</code></p><p>5.显示当前蓝牙活动连接信息</p><p><code>hcitool con</code></p>`,23),s=[t];function c(o,d){return i(),n("div",null,s)}const p=e(l,[["render",c],["__file","hcitool.html.vue"]]),h=JSON.parse('{"path":"/command/linux/hcitool.html","title":"hcitool","lang":"zh-CN","frontmatter":{"description":"hcitool hcitool是一个Linux命令行工具，用于管理和调试蓝牙设备。它可以用于扫描周围的蓝牙设备、连接到蓝牙设备发送命令和数据包等。 安装 hcitool是一个Linux命令行工具，通常已经预装在大多数Linux行版中。如果您的系统中没有安装hcitool，可以使用以下命令进行安装(debian系列发行示例) 使用 注意事项： 使用ble...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/hcitool.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"hcitool"}],["meta",{"property":"og:description","content":"hcitool hcitool是一个Linux命令行工具，用于管理和调试蓝牙设备。它可以用于扫描周围的蓝牙设备、连接到蓝牙设备发送命令和数据包等。 安装 hcitool是一个Linux命令行工具，通常已经预装在大多数Linux行版中。如果您的系统中没有安装hcitool，可以使用以下命令进行安装(debian系列发行示例) 使用 注意事项： 使用ble..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hcitool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":3,"title":"常用简单示例","slug":"常用简单示例","link":"#常用简单示例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.63,"words":489},"filePathRelative":"command/linux/hcitool.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,h as data};
