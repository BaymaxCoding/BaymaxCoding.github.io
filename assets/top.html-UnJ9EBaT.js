import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as a}from"./app-D3p8wuGf.js";const i={},l=a(`<h1 id="top" tabindex="-1"><a class="header-anchor" href="#top"><span>top</span></a></h1><p>显示或管理执行中的程序</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>top命令</strong> 可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。通过top命令所提供的互动式界面，用热键可以管理。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>top<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-b：以批处理模式操作；
-c：显示完整的治命令；
-d：屏幕刷新间隔时间；
-I：忽略失效过程；
-s：保密模式；
-S：累积模式；
-i<span class="token operator">&lt;</span>时间<span class="token operator">&gt;</span>：设置间隔时间；
-u<span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span>：指定用户名；
-p<span class="token operator">&lt;</span>进程号<span class="token operator">&gt;</span>：指定进程；
-n<span class="token operator">&lt;</span>次数<span class="token operator">&gt;</span>：循环显示的次数；
-H：所有线程占用资源情况。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="top交互命令" tabindex="-1"><a class="header-anchor" href="#top交互命令"><span>top交互命令</span></a></h3><p>在top命令执行过程中可以使用的一些交互命令。这些命令都是单字母的，如果在命令行中使用了-s选项， 其中一些命令可能会被屏蔽。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>h：显示帮助画面，给出一些简短的命令总结说明；
k：终止一个进程；
i：忽略闲置和僵死进程，这是一个开关式命令；
q：退出程序；
r：重新安排一个进程的优先级别；
S：切换到累计模式；
s：改变两次刷新之间的延迟时间（单位为s），如果有小数，就换算成ms。输入0值则系统将不断刷新，默认值是5s；
f或者F：从当前显示中添加或者删除项目；
o或者O：改变显示项目的顺序；
l：切换显示平均负载和启动时间信息；
m：切换显示内存信息；
t：切换显示进程和CPU状态信息；
c：切换显示命令名称和完整命令行；
M：根据驻留内存大小进行排序；
P：根据CPU使用百分比大小进行排序；
T：根据时间/累计时间进行排序；
w：将当前设置写入~/.toprc文件中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">top</span> - 09:44:56 up <span class="token number">16</span> days, <span class="token number">21</span>:23,  <span class="token number">1</span> user,  load average: <span class="token number">9.59</span>, <span class="token number">4.75</span>, <span class="token number">1.92</span>
Tasks: <span class="token number">145</span> total,   <span class="token number">2</span> running, <span class="token number">143</span> sleeping,   <span class="token number">0</span> stopped,   <span class="token number">0</span> zombie
Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">99.8</span>%us,  <span class="token number">0.1</span>%sy,  <span class="token number">0.0</span>%ni,  <span class="token number">0.2</span>%id,  <span class="token number">0.0</span>%wa,  <span class="token number">0.0</span>%hi,  <span class="token number">0.0</span>%si,  <span class="token number">0.0</span>%st
Mem:   4147888k total,  2493092k used,  1654796k free,   158188k buffers
Swap:  5144568k total,       56k used,  5144512k free,  2013180k cached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><ul><li>top - 09:44:56[当前系统时间],</li><li>16 days[系统已经运行了16天],</li><li>1 user[个用户当前登录],</li><li>load average: 9.59, 4.75, 1.92[系统负载，即任务队列的平均长度]</li><li>Tasks: 145 total[总进程数],</li><li>2 running[正在运行的进程数],</li><li>143 sleeping[睡眠的进程数],</li><li>0 stopped[停止的进程数],</li><li>0 zombie[冻结进程数],</li><li>Cpu(s): 99.8%us[用户空间占用CPU百分比],</li><li>0.1%sy[内核空间占用CPU百分比],</li><li>0.0%ni[用户进程空间内改变过优先级的进程占用CPU百分比],</li><li>0.2%id[空闲CPU百分比], 0.0%wa[等待输入输出的CPU时间百分比],</li><li>0.0%hi[],</li><li>0.0%st[],</li><li>Mem: 4147888k total[物理内存总量],</li><li>2493092k used[使用的物理内存总量],</li><li>1654796k free[空闲内存总量],</li><li>158188k buffers[用作内核缓存的内存量]</li><li>Swap:  5144568k total[交换区总量],</li><li>56k used[使用的交换区总量],</li><li>5144512k free[空闲交换区总量],</li><li>2013180k cached[缓冲的交换区总量],</li></ul>`,15),t=[l];function o(p,r){return e(),s("div",null,t)}const u=n(i,[["render",o],["__file","top.html.vue"]]),m=JSON.parse('{"path":"/command/linux/top.html","title":"top","lang":"zh-CN","frontmatter":{"description":"top 显示或管理执行中的程序 补充说明 top命令 可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。通过top命令所提供的互动式界面，用热键可以管理。 语法 选项 top交互命令 在top命令执行过程中可以使用的一些交互命令。这些命令都是单字母的，如果在命令行中使用了-s选项， 其中一些命令可能会被屏蔽。 ...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/top.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"top"}],["meta",{"property":"og:description","content":"top 显示或管理执行中的程序 补充说明 top命令 可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。通过top命令所提供的互动式界面，用热键可以管理。 语法 选项 top交互命令 在top命令执行过程中可以使用的一些交互命令。这些命令都是单字母的，如果在命令行中使用了-s选项， 其中一些命令可能会被屏蔽。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"top\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"top交互命令","slug":"top交互命令","link":"#top交互命令","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.71,"words":812},"filePathRelative":"command/linux/top.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
