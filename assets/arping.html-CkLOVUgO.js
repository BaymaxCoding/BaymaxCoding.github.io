import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as e}from"./app-D3p8wuGf.js";const t={},i=e(`<h1 id="arping" tabindex="-1"><a class="header-anchor" href="#arping"><span>arping</span></a></h1><p>通过发送ARP协议报文测试网络</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>arping命令</strong> 是用于发送arp请求到一个相邻主机的工具，arping使用arp数据包，通过ping命令检查设备上的硬件地址。能够测试一个ip地址是否是在网络上已经被使用，并能够获取更多设备信息。功能类似于ping。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>arping<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-b：用于发送以太网广播帧（FFFFFFFFFFFF）。arping一开始使用广播地址，在收到响应后就使用unicast地址。
-q：quiet output不显示任何信息；
-f：表示在收到第一个响应报文后就退出；
<span class="token parameter variable">-w</span> timeout：设定一个超时时间，单位是秒。如果到了指定时间，arping还没到完全收到响应则退出；
<span class="token parameter variable">-c</span> count：表示发送指定数量的ARP请求数据包后就停止。如果指定了deadline选项，则arping会等待相同数量的arp响应包，直到超时为止；
<span class="token parameter variable">-s</span> source：设定arping发送的arp数据包中的SPA字段的值。如果为空，则按下面处理，如果是DAD模式（冲突地址探测），则设置为0.0.0.0，如果是Unsolicited ARP模式（Gratuitous ARP）则设置为目标地址，否则从路由表得出；
<span class="token parameter variable">-I</span> interface：设置ping使用的网络接口。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>目的主机：指定发送ARP报文的目的主机。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># arping www.baidu.com </span>
ARPING <span class="token number">220.181</span>.111.147 from <span class="token number">173.231</span>.43.132 eth0
Unicast reply from <span class="token number">220.181</span>.111.147 00:D0:03:<span class="token punctuation">[</span>bc:48:00<span class="token punctuation">]</span>  <span class="token number">1</span>.666ms
Unicast reply from <span class="token number">220.181</span>.111.147 <span class="token punctuation">[</span>00:D0:03:BC:48:00<span class="token punctuation">]</span>  <span class="token number">1</span>.677ms
Unicast reply from <span class="token number">220.181</span>.111.147 <span class="token punctuation">[</span>00:D0:03:BC:48:00<span class="token punctuation">]</span>  <span class="token number">1</span>.691ms
Unicast reply from <span class="token number">220.181</span>.111.147 <span class="token punctuation">[</span>00:D0:03:BC:48:00<span class="token punctuation">]</span>  <span class="token number">1</span>.728ms
Unicast reply from <span class="token number">220.181</span>.111.147 <span class="token punctuation">[</span>00:D0:03:BC:48:00<span class="token punctuation">]</span>  <span class="token number">1</span>.626ms
Unicast reply from <span class="token number">220.181</span>.111.147 <span class="token punctuation">[</span>00:D0:03:BC:48:00<span class="token punctuation">]</span>  <span class="token number">1</span>.292ms
Unicast reply from <span class="token number">220.181</span>.111.147 <span class="token punctuation">[</span>00:D0:03:BC:48:00<span class="token punctuation">]</span>  <span class="token number">1</span>.429ms
Unicast reply from <span class="token number">220.181</span>.111.147 <span class="token punctuation">[</span>00:D0:03:BC:48:00<span class="token punctuation">]</span>  <span class="token number">2</span>.042ms
Sent <span class="token number">8</span> probes <span class="token punctuation">(</span><span class="token number">1</span> broadcast<span class="token punctuation">(</span>s<span class="token punctuation">))</span>
Received <span class="token number">8</span> response<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[i];function r(c,l){return a(),s("div",null,p)}const d=n(t,[["render",r],["__file","arping.html.vue"]]),m=JSON.parse('{"path":"/command/linux/arping.html","title":"arping","lang":"zh-CN","frontmatter":{"description":"arping 通过发送ARP协议报文测试网络 补充说明 arping命令 是用于发送arp请求到一个相邻主机的工具，arping使用arp数据包，通过ping命令检查设备上的硬件地址。能够测试一个ip地址是否是在网络上已经被使用，并能够获取更多设备信息。功能类似于ping。 语法 选项 参数 目的主机：指定发送ARP报文的目的主机。 实例","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/arping.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"arping"}],["meta",{"property":"og:description","content":"arping 通过发送ARP协议报文测试网络 补充说明 arping命令 是用于发送arp请求到一个相邻主机的工具，arping使用arp数据包，通过ping命令检查设备上的硬件地址。能够测试一个ip地址是否是在网络上已经被使用，并能够获取更多设备信息。功能类似于ping。 语法 选项 参数 目的主机：指定发送ARP报文的目的主机。 实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"arping\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.55,"words":465},"filePathRelative":"command/linux/arping.md","localizedDate":"2024年4月12日","autoDesc":true}');export{d as comp,m as data};
