import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as s}from"./app-CHACLx4z.js";const i={},t=s(`<h1 id="nmap" tabindex="-1"><a class="header-anchor" href="#nmap"><span>nmap</span></a></h1><p>网络探测和安全审核</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>nmap命令</strong> 是一款开放源代码的网络探测和安全审核工具，它的设计目标是快速地扫描大型网络。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nmap<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-O：激活操作探测；
-P0：值进行扫描，不ping主机；
-PT：是同TCP的ping；
-sV：探测服务版本信息；
-sP：ping扫描，仅发现目标主机是否存活；
-ps：发送同步（SYN）报文；
-PU：发送udp ping；
-PE：强制执行直接的ICMPping；
-PB：默认模式，可以使用ICMPping和TCPping；
-6：使用IPv6地址；
-v：得到更多选项信息；
-d：增加调试信息地输出；
-oN：以人们可阅读的格式输出；
-oX：以xml格式向指定文件输出信息；
-oM：以机器可阅读的格式输出；
-A：使用所有高级扫描选项；
--resume：继续上次执行完的扫描；
-P：指定要扫描的端口，可以是一个单独的端口，用逗号隔开多个端口，使用“-”表示端口范围；
-e：在多网络接口Linux系统中，指定扫描使用的网络接口；
-g：将指定的端口作为源端口进行扫描；
--ttl：指定发送的扫描报文的生存期；
--packet-trace：显示扫描过程中收发报文统计；
--scanflags：设置在扫描报文中的TCP标志。
--send-eth/--send-ip 使用原始以太网发送/构造指定IP发送
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>ip地址：指定待扫描报文中的TCP地址。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p><strong>安装nmap</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nmap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>使用nmap扫描www.jsdig.com的开放端口</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nmap www.jsdig.com</span>

Starting Nmap <span class="token number">4.11</span> <span class="token punctuation">(</span> http://www.insecure.org/nmap/ <span class="token punctuation">)</span> at <span class="token number">2013</span>-12-28 00:06 CST
Interesting ports on <span class="token number">100</span>-42-212-8.static.webnx.com <span class="token punctuation">(</span><span class="token number">100.42</span>.212.8<span class="token punctuation">)</span>:
Not shown: <span class="token number">1678</span> filtered ports
PORT   STATE <span class="token function">service</span>
<span class="token number">22</span>/tcp <span class="token function">open</span>  <span class="token function">ssh</span>
<span class="token number">80</span>/tcp <span class="token function">open</span>  http

Nmap finished: <span class="token number">1</span> IP address <span class="token punctuation">(</span><span class="token number">1</span> <span class="token function">host</span> up<span class="token punctuation">)</span> scanned <span class="token keyword">in</span> <span class="token number">45.870</span> seconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[t];function p(d,c){return a(),e("div",null,l)}const m=n(i,[["render",p],["__file","nmap.html.vue"]]),u=JSON.parse('{"path":"/command/linux/nmap.html","title":"nmap","lang":"zh-CN","frontmatter":{"description":"nmap 网络探测和安全审核 补充说明 nmap命令 是一款开放源代码的网络探测和安全审核工具，它的设计目标是快速地扫描大型网络。 语法 选项 参数 ip地址：指定待扫描报文中的TCP地址。 实例 安装nmap 使用nmap扫描www.jsdig.com的开放端口","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/nmap.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"nmap"}],["meta",{"property":"og:description","content":"nmap 网络探测和安全审核 补充说明 nmap命令 是一款开放源代码的网络探测和安全审核工具，它的设计目标是快速地扫描大型网络。 语法 选项 参数 ip地址：指定待扫描报文中的TCP地址。 实例 安装nmap 使用nmap扫描www.jsdig.com的开放端口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nmap\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"command/linux/nmap.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
