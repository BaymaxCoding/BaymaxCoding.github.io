import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as s}from"./app-D3p8wuGf.js";const l={},i=s(`<h1 id="lastlog" tabindex="-1"><a class="header-anchor" href="#lastlog"><span>lastlog</span></a></h1><p>显示系统中所有用户最近一次登录信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>lastlog命令</strong> 用于显示系统中所有用户最近一次登录信息。</p><p>lastlog文件在每次有用户登录时被查询。可以使用lastlog命令检查某特定用户上次登录的时间，并格式化输出上次登录日志<code>/var/log/lastlog</code>的内容。它根据UID排序显示登录名、端口号（tty）和上次登录时间。如果一个用户从未登录过，lastlog显示<code>**Never logged**</code>。注意需要以root身份运行该命令。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lastlog<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-b<span class="token operator">&lt;</span>天数<span class="token operator">&gt;</span>：显示指定天数前的登录信息；
-h：显示召集令的帮助信息；
-t<span class="token operator">&lt;</span>天数<span class="token operator">&gt;</span>：显示指定天数以来的登录信息；
-u<span class="token operator">&lt;</span>用户名<span class="token operator">&gt;</span>：显示指定用户的最近登录信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lastlog
Username         Port     From             Latest
root             pts/0    <span class="token number">221.6</span>.45.34      Tue Dec <span class="token number">17</span> 09:40:48 +0800 <span class="token number">2013</span>
bin                                         **Never logged in** 
daemon                                      **Never logged in** 
adm                                         **Never logged in** 
lp                                          **Never logged in** 
<span class="token function">sync</span>                                        **Never logged in** 
<span class="token function">shutdown</span>                                    **Never logged in** 
<span class="token function">halt</span>                                        **Never logged in** 
mail                                        **Never logged in** 
news                                        **Never logged in** 
uucp                                        **Never logged in** 
operator                                    **Never logged in** 
games                                       **Never logged in** 
gopher                                      **Never logged in** 
<span class="token function">ftp</span>                                         **Never logged in** 
nobody                                      **Never logged in** 
vcsa                                        **Never logged in** 
ntp                                         **Never logged in** 
sshd                                        **Never logged in** 
nscd                                        **Never logged in** 
ldap                                        **Never logged in** 
postfix                                     **Never logged in** 
www                                         **Never logged in** 
mysql                                       **Never logged in** 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[i];function o(d,r){return n(),a("div",null,t)}const p=e(l,[["render",o],["__file","lastlog.html.vue"]]),v=JSON.parse('{"path":"/command/linux/lastlog.html","title":"lastlog","lang":"zh-CN","frontmatter":{"description":"lastlog 显示系统中所有用户最近一次登录信息 补充说明 lastlog命令 用于显示系统中所有用户最近一次登录信息。 lastlog文件在每次有用户登录时被查询。可以使用lastlog命令检查某特定用户上次登录的时间，并格式化输出上次登录日志/var/log/lastlog的内容。它根据UID排序显示登录名、端口号（tty）和上次登录时间。如果一...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/lastlog.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"lastlog"}],["meta",{"property":"og:description","content":"lastlog 显示系统中所有用户最近一次登录信息 补充说明 lastlog命令 用于显示系统中所有用户最近一次登录信息。 lastlog文件在每次有用户登录时被查询。可以使用lastlog命令检查某特定用户上次登录的时间，并格式化输出上次登录日志/var/log/lastlog的内容。它根据UID排序显示登录名、端口号（tty）和上次登录时间。如果一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lastlog\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.09,"words":326},"filePathRelative":"command/linux/lastlog.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,v as data};
