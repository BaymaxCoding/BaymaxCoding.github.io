import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as e}from"./app-D3p8wuGf.js";const t={},i=e(`<h1 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h1><p>显示和设置系统的主机名</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>hostname命令</strong> 用于显示和设置系统的主机名称。</p><ul><li>环境变量 <code>HOSTNAME</code> 也保存了当前的主机名。</li><li>在使用 <code>hostname</code> 命令设置主机名后，系统并不会永久保存新的主机名，重启之后还是原来的主机名。如果需要永久修改主机名，需要修改 <code>/etc/hosts</code> 和 <code>/etc/sysconfig/network</code> 的相关内容并进行重启；也可以使用 <code>hostnamectl</code> 命令进行永久修改。</li></ul><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">hostname</span> <span class="token punctuation">[</span>-b<span class="token punctuation">]</span> <span class="token punctuation">{</span>hostname<span class="token operator">|</span>-F file<span class="token punctuation">}</span>           设置主机名称（或从文件获取）
<span class="token function">hostname</span> <span class="token punctuation">[</span>-a<span class="token operator">|</span>-A<span class="token operator">|</span>-d<span class="token operator">|</span>-f<span class="token operator">|</span>-i<span class="token operator">|</span>-I<span class="token operator">|</span>-s<span class="token operator">|</span>-y<span class="token punctuation">]</span>         显示格式化的名称
<span class="token function">hostname</span>                                   显示主机名称

<span class="token punctuation">{</span>yp,nis,<span class="token punctuation">}</span>domainname <span class="token punctuation">{</span>nisdomain<span class="token operator">|</span>-F file<span class="token punctuation">}</span>    设置 NIS 主机名称（或从文件获取）
<span class="token punctuation">{</span>yp,nis,<span class="token punctuation">}</span>domainname                        显示 NIS 主机名称

dnsdomainname                              显示 DNS 主机名称

<span class="token function">hostname</span> -V<span class="token operator">|</span>--version<span class="token operator">|</span>-h<span class="token operator">|</span>--help            打印信息并退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a, <span class="token parameter variable">--alias</span>               显示主机别名
-A, --all-fqdns           显示所有FQDN名称
-b, <span class="token parameter variable">--boot</span>                如果没有可用的主机名，则设置默认主机名
-d, <span class="token parameter variable">--domain</span>              显示DNS域名
-f, --fqdn, <span class="token parameter variable">--long</span>        显示FQDN名称
-F, <span class="token parameter variable">--file</span>                从给定文件中读取主机名或NIS域名
-i, --ip-address          显示主机的ip地址
-I, --all-ip-addresses    显示主机所有的ip地址
-s, <span class="token parameter variable">--short</span>               显示短主机名称，在第一个点处截断
-y, --yp, <span class="token parameter variable">--nis</span>           显示NIS域名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>显示主机名</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@AY1307311912260196fcZ ~<span class="token punctuation">]</span><span class="token comment"># hostname</span>
AY1307311912260196fcZ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>临时改变主机名</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@AY1307311912260196fcZ ~<span class="token punctuation">]</span><span class="token comment"># hostname newname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示主机的所有IP地址</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@AY1307311912260196fcZ ~<span class="token punctuation">]</span><span class="token comment"># hostname -I</span>
<span class="token number">10.17</span>.0.1 <span class="token number">10.18</span>.0.10 <span class="token number">172.17</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[i];function l(c,p){return n(),s("div",null,o)}const m=a(t,[["render",l],["__file","hostname.html.vue"]]),u=JSON.parse('{"path":"/command/linux/hostname.html","title":"hostname","lang":"zh-CN","frontmatter":{"description":"hostname 显示和设置系统的主机名 补充说明 hostname命令 用于显示和设置系统的主机名称。 环境变量 HOSTNAME 也保存了当前的主机名。 在使用 hostname 命令设置主机名后，系统并不会永久保存新的主机名，重启之后还是原来的主机名。如果需要永久修改主机名，需要修改 /etc/hosts 和 /etc/sysconfig/net...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/hostname.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"hostname"}],["meta",{"property":"og:description","content":"hostname 显示和设置系统的主机名 补充说明 hostname命令 用于显示和设置系统的主机名称。 环境变量 HOSTNAME 也保存了当前的主机名。 在使用 hostname 命令设置主机名后，系统并不会永久保存新的主机名，重启之后还是原来的主机名。如果需要永久修改主机名，需要修改 /etc/hosts 和 /etc/sysconfig/net..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hostname\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"command/linux/hostname.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
