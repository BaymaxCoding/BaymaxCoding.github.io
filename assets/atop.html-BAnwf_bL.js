import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as l,c as i,a,d as t,e as n,b as p}from"./app-D3p8wuGf.js";const r={},c=a("h1",{id:"atop",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#atop"},[a("span",null,"atop")])],-1),d=a("p",null,"监控Linux系统资源与进程的工具",-1),u=a("h2",{id:"补充说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#补充说明"},[a("span",null,"补充说明")])],-1),h={href:"https://github.com/Atoptool/atop",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pkgs.org/download/atop",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>atop<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p><strong>ATOP列</strong>：该列显示了主机名、信息采样日期和时间点</p><p><strong>PRC列</strong>：该列显示进程整体运行情况</p><ul><li>sys、usr字段分别指示进程在内核态和用户态的运行时间</li><li>#proc字段指示进程总数</li><li>#zombie字段指示僵尸进程的数量</li><li>#exit字段指示atop采样周期期间退出的进程数量</li></ul><p><strong>CPU列</strong>：该列显示CPU整体(即多核CPU作为一个整体CPU资源)的使用情况，我们知道CPU可被用于执行进程、处理中断，也可处于空闲状态(空闲状态分两种，一种是活动进程等待磁盘IO导致CPU空闲，另一种是完全空闲)</p><ul><li>sys、usr字段指示CPU被用于处理进程时，进程在内核态、用户态所占CPU的时间比例</li><li>irq字段指示CPU被用于处理中断的时间比例</li><li>idle字段指示CPU处在完全空闲状态的时间比例</li><li>wait字段指示CPU处在“进程等待磁盘IO导致CPU空闲”状态的时间比例</li></ul><p>CPU列各个字段指示值相加结果为N00%，其中N为cpu核数。</p><p>cpu列：该列显示某一核cpu的使用情况，各字段含义可参照CPU列，各字段值相加结果为100%</p><p><strong>CPL列</strong>：该列显示CPU负载情况</p><ul><li>avg1、avg5和avg15字段：过去1分钟、5分钟和15分钟内运行队列中的平均进程数量</li><li>csw字段指示上下文交换次数</li><li>intr字段指示中断发生次数</li></ul><p><strong>MEM列</strong>：该列指示内存的使用情况</p><ul><li>tot字段指示物理内存总量</li><li>free字段指示空闲内存的大小</li><li>cache字段指示用于页缓存的内存大小</li><li>buff字段指示用于文件缓存的内存大小</li><li>slab字段指示系统内核占用的内存大小</li></ul><p><strong>SWP列</strong>：该列指示交换空间的使用情况</p><ul><li>tot字段指示交换区总量</li><li>free字段指示空闲交换空间大小</li></ul><p><strong>PAG列</strong>：该列指示虚拟内存分页情况</p><p>swin、swout字段：换入和换出内存页数</p><p><strong>DSK列</strong>：该列指示磁盘使用情况，每一个磁盘设备对应一列，如果有sdb设备，那么增多一列DSK信息</p><ul><li>sda字段：磁盘设备标识</li><li>busy字段：磁盘忙时比例</li><li>read、write字段：读、写请求数量</li></ul><p><strong>NET列</strong>：多列NET展示了网络状况，包括传输层(TCP和UDP)、IP层以及各活动的网口信息</p><ul><li>XXXi 字段指示各层或活动网口收包数目</li><li>XXXo 字段指示各层或活动网口发包数目</li></ul><h2 id="atop日志" tabindex="-1"><a class="header-anchor" href="#atop日志"><span>atop日志</span></a></h2><p>每个时间点采样页面组合起来就形成了一个atop日志文件，我们可以使用&quot;atop -r XXX&quot;命令对日志文件进行查看。那以什么形式保存atop日志文件呢？</p><p>对于atop日志文件的保存方式，我们可以这样：</p><ul><li>每天保存一个atop日志文件，该日志文件记录当天信息</li><li>日志文件以&quot;atop_YYYYMMDD&quot;的方式命名</li><li>设定日志失效期限，自动删除一段时间前的日志文件</li></ul><p>其实atop开发者已经提供了以上日志保存方式，相应的atop.daily脚本可以在源码目录下找到。在atop.daily脚本中，我们可以通过修改INTERVAL变量改变atop信息采样周期(默认为10分钟)；通过修改以下命令中的数值改变日志保存天数(默认为28天)：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>sleep <span class="token number">3</span><span class="token punctuation">;</span> <span class="token function">find</span> <span class="token variable">$LOGPATH</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;atop_*&#39;</span> <span class="token parameter variable">-mtime</span> +28 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span> <span class="token punctuation">)</span><span class="token operator">&amp;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，我们修改cron文件，每天凌晨执行atop.daily脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">0</span> <span class="token number">0</span> * * * root /etc/cron.daily/atop.daily
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="相关资料" tabindex="-1"><a class="header-anchor" href="#相关资料"><span>相关资料</span></a></h2>`,31),b={href:"http://www.atoptool.nl/download/man_atop-1.pdf",target:"_blank",rel:"noopener noreferrer"};function _(k,v){const e=s("ExternalLinkIcon");return l(),i("div",null,[c,d,u,a("p",null,[t("[非内部程序，需要安装]它以一定的频率记录系统的运行状态，所采集的数据包含系统资源(CPU、内存、磁盘和网络)使用情况和进程运行情况，并能以日志文件的方式保存在磁盘中，服务器出现问题后，我们可获取相应的atop日志文件进行分析。atop是一款开源软件，我们可以从这里获得其"),a("a",h,[t("源码"),n(e)]),t("和"),a("a",m,[t("rpm安装包"),n(e)]),t("。")]),g,a("ul",null,[a("li",null,[a("a",b,[t("官方手册"),n(e)])])])])}const P=o(r,[["render",_],["__file","atop.html.vue"]]),C=JSON.parse('{"path":"/command/linux/atop.html","title":"atop","lang":"zh-CN","frontmatter":{"description":"atop 监控Linux系统资源与进程的工具 补充说明 [非内部程序，需要安装]它以一定的频率记录系统的运行状态，所采集的数据包含系统资源(CPU、内存、磁盘和网络)使用情况和进程运行情况，并能以日志文件的方式保存在磁盘中，服务器出现问题后，我们可获取相应的atop日志文件进行分析。atop是一款开源软件，我们可以从这里获得其源码和rpm安装包。 语法...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/atop.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"atop"}],["meta",{"property":"og:description","content":"atop 监控Linux系统资源与进程的工具 补充说明 [非内部程序，需要安装]它以一定的频率记录系统的运行状态，所采集的数据包含系统资源(CPU、内存、磁盘和网络)使用情况和进程运行情况，并能以日志文件的方式保存在磁盘中，服务器出现问题后，我们可获取相应的atop日志文件进行分析。atop是一款开源软件，我们可以从这里获得其源码和rpm安装包。 语法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"atop\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"atop日志","slug":"atop日志","link":"#atop日志","children":[]},{"level":2,"title":"相关资料","slug":"相关资料","link":"#相关资料","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.67,"words":1101},"filePathRelative":"command/linux/atop.md","localizedDate":"2024年4月12日","autoDesc":true}');export{P as comp,C as data};
