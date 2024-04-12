import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,e}from"./app-D_HUMAmc.js";const t={},i=e(`<h1 id="nethogs" tabindex="-1"><a class="header-anchor" href="#nethogs"><span>nethogs</span></a></h1><p>终端下的网络流量监控工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>有很多适用于Linux系统的开源网络监视工具。比如说，你可以用命令iftop来检查带宽使用情况。netstat用来查看接口统计报告，还有top监控系统当前运行进程。但是如果你想要找一个能够按进程实时统计网络带宽利用率的工具，那么NetHogs值得一看。</p><p><strong>NetHogs</strong> 是一个开源的命令行工具（类似于Linux的top命令），用来按进程或程序实时统计网络带宽使用率。</p><p>来自NetHogs项目网站:</p><blockquote><p>NetHogs是一个小型的net top工具，不像大多数工具那样拖慢每个协议或者是每个子网的速度而是按照进程进行带宽分组。NetHogs不需要依赖载入某个特殊的内核模块。如果发生了网络阻塞你可以启动NetHogs立即看到哪个PID造成的这种状况。这样就很容易找出哪个程序跑飞了然后突然占用你的带宽。</p></blockquote><p>本文为你介绍如何在Unix/Linux操作系统下如何安装和使用NetHogs按进程监控网络带宽使用率。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nethogs（选项）（参数）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>usage: nethogs <span class="token punctuation">[</span>-V<span class="token punctuation">]</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>-b<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d seconds<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v mode<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c count<span class="token punctuation">]</span> <span class="token punctuation">[</span>-t<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>device <span class="token punctuation">[</span>device <span class="token punctuation">[</span>device <span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  <span class="token parameter variable">-V</span> <span class="token builtin class-name">:</span> 打印版本。
  <span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> 打印此帮助。
  <span class="token parameter variable">-b</span> <span class="token builtin class-name">:</span> bughunt模式 - 暗示tracemode。
  <span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 延迟更新刷新率（以秒为单位）。 默认值为1。
  <span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 视图模式（0 <span class="token operator">=</span> KB / s，1 <span class="token operator">=</span>总KB，2 <span class="token operator">=</span>总B，3 <span class="token operator">=</span>总MB）。 默认值为0。
  <span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 更新次数。 默认为0（无限制）。
  <span class="token parameter variable">-t</span> <span class="token builtin class-name">:</span> tracemode.
  <span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> 煽动混乱模式（不推荐）。
  <span class="token parameter variable">-s</span> <span class="token builtin class-name">:</span> 按发送列排序输出。
  <span class="token parameter variable">-a</span> <span class="token builtin class-name">:</span> 监控所有设备，甚至环回/停止。
  device <span class="token builtin class-name">:</span> 要监控的设备。 默认是所有接口启动和运行，不包括环回

当nethogs运行时，按：
  q：退出
  s：按SENT流量排序
  r：按RECEIVE流量排序
  m：在总（KB，B，MB）和KB / s模式之间切换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他参数和用法</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-d</span> <span class="token builtin class-name">:</span> 刷新间隔
<span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> 帮助
<span class="token parameter variable">-p</span> <span class="token builtin class-name">:</span> promiscuous 模式
<span class="token parameter variable">-t</span> <span class="token builtin class-name">:</span> trace模式 
<span class="token parameter variable">-V</span> <span class="token builtin class-name">:</span> 版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>交互命令</strong></p><p>以下是NetHogs的一些交互命令（键盘快捷键）</p><ul><li>m : 修改单位</li><li>r : 按流量排序</li><li>s : 按发送流量排序</li><li>q : 退出命令提示符</li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p><strong>在RHEL、CentOS和Fedora下安装NetHogs</strong></p><p>要安装NetHogs，你必须要启用你所用Linux下的EPEL源。然后运行下面的yum命令下载安装NetHogs包。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nethogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在Ubuntu、Linux mint和Debian下安装NetHogs</strong></p><p>键入apt-get命令安装NetHogs包：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nethogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nethogs用法" tabindex="-1"><a class="header-anchor" href="#nethogs用法"><span>NetHogs用法</span></a></h3><p>在基于RedHat系统下键入如下命令启动NetHogs工具。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nethogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在Debian/Ubuntu/Linux Mint下要执行NetHogs你必须拥有root权限：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> nethogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>!nethogs</p><p>Ubuntu 12.10 下的NetHogs预览</p><p>正如上图所示，send列和received列显示的是按照每个进程的流量统计。总的收发数据带宽在最下方，而且可以用交互命令控制排序，下面将要讨论这些交互命令。</p><h3 id="nethogs-命令行参数" tabindex="-1"><a class="header-anchor" href="#nethogs-命令行参数"><span>NetHogs 命令行参数</span></a></h3><p>以下就是NetHogs命令行的参数，用-d来添加刷新频率参数，device name 用来检测给定的某个或者某些设备的带宽（默认是eth0）。例如：设置5秒钟的刷新频率，键入如下命令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nethogs <span class="token parameter variable">-d</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> nethogs <span class="token parameter variable">-d</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只用来监视设备（eth0）的网络带宽可以使用如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nethogs eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> nethogs eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要同时监视eth0和eth1接口，使用以下命令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nethogs eth0 eth1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> nethogs eth0 eth1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关于NetHogs命令行工具的完整参数列表，可以参考NetHogs的手册，使用方法是在终端里输入<code>man nethogs</code>或者<code>sudo man nethogs</code>，更多信息请参考NetHogs项目主页。</p>`,43),l=[i];function o(p,c){return s(),n("div",null,l)}const u=a(t,[["render",o],["__file","nethogs.html.vue"]]),h=JSON.parse('{"path":"/command/linux/nethogs.html","title":"nethogs","lang":"zh-CN","frontmatter":{"description":"nethogs 终端下的网络流量监控工具 补充说明 有很多适用于Linux系统的开源网络监视工具。比如说，你可以用命令iftop来检查带宽使用情况。netstat用来查看接口统计报告，还有top监控系统当前运行进程。但是如果你想要找一个能够按进程实时统计网络带宽利用率的工具，那么NetHogs值得一看。 NetHogs 是一个开源的命令行工具（类似于L...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/nethogs.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"nethogs"}],["meta",{"property":"og:description","content":"nethogs 终端下的网络流量监控工具 补充说明 有很多适用于Linux系统的开源网络监视工具。比如说，你可以用命令iftop来检查带宽使用情况。netstat用来查看接口统计报告，还有top监控系统当前运行进程。但是如果你想要找一个能够按进程实时统计网络带宽利用率的工具，那么NetHogs值得一看。 NetHogs 是一个开源的命令行工具（类似于L..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nethogs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"NetHogs用法","slug":"nethogs用法","link":"#nethogs用法","children":[]},{"level":3,"title":"NetHogs 命令行参数","slug":"nethogs-命令行参数","link":"#nethogs-命令行参数","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.22,"words":967},"filePathRelative":"command/linux/nethogs.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,h as data};