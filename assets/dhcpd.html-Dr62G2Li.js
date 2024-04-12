import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as s}from"./app-D3p8wuGf.js";const t={},i=s(`<h1 id="dhcpd" tabindex="-1"><a class="header-anchor" href="#dhcpd"><span>dhcpd</span></a></h1><p>运行DHCP服务器</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dhcpd <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>网络接口<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>端口<span class="token operator">&gt;</span> 指定dhcpd监听的端口
<span class="token parameter variable">-f</span> 作为前台进程运行dhcpd
<span class="token parameter variable">-d</span> 启用调试模式
<span class="token parameter variable">-q</span> 在启动时不显示版权信息
<span class="token parameter variable">-t</span> 简单地测试配置文件的语法是否正确的，但不会尝试执行任何网络操作
<span class="token parameter variable">-T</span> 可以用来测试租约数据库文件
<span class="token parameter variable">-4</span> 运行DHCP服务器
<span class="token parameter variable">-6</span> 运行DHCPv6服务器
<span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>服务器<span class="token operator">&gt;</span> 指定发送回复的服务器
<span class="token parameter variable">-cf</span> <span class="token operator">&lt;</span>配置文件<span class="token operator">&gt;</span> 指定配置文件
<span class="token parameter variable">-lf</span> <span class="token operator">&lt;</span>租约文件<span class="token operator">&gt;</span> 指定租约文件
<span class="token parameter variable">-pf</span> <span class="token operator">&lt;</span>PID文件<span class="token operator">&gt;</span> 指定PID文件
<span class="token parameter variable">-tf</span> <span class="token operator">&lt;</span>跟踪输出文件<span class="token operator">&gt;</span> 指定文件记录DHCP服务器的整个启动状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3><p>对DHCP服务器进行排错。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dhcpd</span>
InternetSystems Consortium DHCP Server <span class="token number">4.1</span>.1-P1
Copyright2004-2010 Internet Systems Consortium.
All rightsreserved.
For info,please visit https://www.isc.org/software/dhcp/
Not searchingLDAP since ldap-server, ldap-port and ldap-base-dn were not specified <span class="token keyword">in</span> theconfig <span class="token function">file</span>
Wrote 0deleted <span class="token function">host</span> decls to leases file.
Wrote <span class="token number">0</span> newdynamic <span class="token function">host</span> decls to leases file.
Wrote 1leases to leases file.
Listening onLPF/eth0/00:0c:29:fc:2f:e5/192.168.0.0/24
Sendingon  LPF/eth0/00:0c:29:fc:2f:e5/192.168.0.0/24
Sendingon   Socket/fallback/fallback-net
<span class="token punctuation">[</span>root@rhel~<span class="token punctuation">]</span><span class="token comment"># There&#39;s already a DHCP server running.</span>
 
This versionof ISC DHCP is based on the release available
onftp.isc.org.  Features have been addedand other changes
have beenmade to the base software release <span class="token keyword">in</span> order to <span class="token function">make</span>
it workbetter with this distribution.
 
exiting.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[i];function r(o,d){return a(),n("div",null,l)}const m=e(t,[["render",r],["__file","dhcpd.html.vue"]]),v=JSON.parse('{"path":"/command/linux/dhcpd.html","title":"dhcpd","lang":"zh-CN","frontmatter":{"description":"dhcpd 运行DHCP服务器 语法 选项 例子 对DHCP服务器进行排错。","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dhcpd.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dhcpd"}],["meta",{"property":"og:description","content":"dhcpd 运行DHCP服务器 语法 选项 例子 对DHCP服务器进行排错。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dhcpd\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"command/linux/dhcpd.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};
