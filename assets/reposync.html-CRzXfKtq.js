import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as s}from"./app-D3p8wuGf.js";const i={},l=s(`<h1 id="reposync" tabindex="-1"><a class="header-anchor" href="#reposync"><span>reposync</span></a></h1><p>同步yum存储库到本地目录</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>reposync <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><p>reposync用于将远程yum存储库同步到本地目录，使用yum检索包。</p><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-h, <span class="token parameter variable">--help</span>
<span class="token comment"># 显示帮助信息</span>

<span class="token parameter variable">-c</span> CONFIG, <span class="token parameter variable">--config</span><span class="token operator">=</span>CONFIG
<span class="token comment"># 指定配置文件(默认为/etc/yum.conf)</span>

<span class="token parameter variable">-a</span> ARCH, <span class="token parameter variable">--arch</span><span class="token operator">=</span>ARCH
<span class="token comment"># 指定arch</span>

<span class="token parameter variable">--source</span>
<span class="token comment"># 同时下载src和rpm文件.</span>

<span class="token parameter variable">-r</span> REPOID, <span class="token parameter variable">--repoid</span><span class="token operator">=</span>REPOID
<span class="token comment"># 指定要查询的repo id，可以指定多次(默认为全部启用)。</span>

<span class="token parameter variable">-e</span> CACHEDIR, <span class="token parameter variable">--cachedir</span> CACHEDIR
<span class="token comment"># 存储元数据的目录。</span>

-t, <span class="token parameter variable">--tempcache</span>
<span class="token comment"># 使用临时目录存储/访问yum-cache。</span>

-d, <span class="token parameter variable">--delete</span>
<span class="token comment"># 删除存储库中不再存在的本地包。</span>

<span class="token parameter variable">-p</span> DESTDIR, <span class="token parameter variable">--download_path</span><span class="token operator">=</span>DESTDIR
<span class="token comment"># 指定下载路径:默认为当前目录。</span>

<span class="token parameter variable">--norepopath</span>
<span class="token comment"># 不要将重命名添加到下载路径中。只能在同步单个存储库时使用(默认是添加重命名)。</span>

-g, <span class="token parameter variable">--gpgcheck</span>
<span class="token comment"># 下载后删除GPG签名检查失败的包。如果至少有一个包被删除，退出状态为“1”。</span>

-u, <span class="token parameter variable">--urls</span>
<span class="token comment"># 只列出要下载的内容的url，不要下载。</span>

-l, <span class="token parameter variable">--plugins</span>
<span class="token comment"># 启用yum插件支持。</span>

-m, <span class="token parameter variable">--downloadcomps</span>
<span class="token comment"># 同时下载comps.xml。</span>

--download-metadata
<span class="token comment"># 下载所有非默认元数据。</span>

-n, --newest-only
<span class="token comment"># 每个repo只下载最新的包。</span>

-q, <span class="token parameter variable">--quiet</span>
<span class="token comment"># 输出尽可能少的信息。</span>

--allow-path-traversal
<span class="token comment"># 允许同步存储在repo目录之外的包。这些包是在元数据中通过使用绝对路径或上一级“..”系统引用的并且出于安全原因通常会在reposync中跳过。</span>
<span class="token comment"># 注意:使用此选项有潜在的安全隐患，因为通过提供恶意repodata，攻击者可以使reposync写入任意位置运行该文件系统的用户可以访问的文件系统。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将&#39;updates&#39;仓库中的所有包同步到当前目录:</span>
reposync <span class="token parameter variable">--repoid</span><span class="token operator">=</span>updates

<span class="token comment"># 只同步最新的包从&#39;updates&#39;仓库到当前目录:</span>
reposync <span class="token parameter variable">-n</span> <span class="token parameter variable">--repoid</span><span class="token operator">=</span>updates

<span class="token comment"># 将&#39;updates&#39;和&#39;extras&#39;仓库中的包同步到当前目录:</span>
reposync <span class="token parameter variable">--repoid</span><span class="token operator">=</span>updates <span class="token parameter variable">--repoid</span><span class="token operator">=</span>extras

<span class="token comment"># 将&#39;updates&#39;仓库中的所有包同步到repos目录:</span>
reposync <span class="token parameter variable">-p</span> repos <span class="token parameter variable">--repoid</span><span class="token operator">=</span>updates

<span class="token comment"># 将&#39;updates&#39;仓库中的所有包同步到repos目录，排除x86_64架构文件。编辑/etc/yum.conf，添加选项exclude=*.x86_64。再执行:</span>
reposync <span class="token parameter variable">-p</span> repos <span class="token parameter variable">--repoid</span><span class="token operator">=</span>updates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h2><p>reposync使用yum库来检索信息和包。如果没有指定配置文件，将使用默认的yum配置。</p><ul><li>/etc/yum.conf</li><li>/etc/yum/repos.d/</li></ul>`,13),r=[l];function t(p,c){return n(),a("div",null,r)}const m=e(i,[["render",t],["__file","reposync.html.vue"]]),v=JSON.parse('{"path":"/command/linux/reposync.html","title":"reposync","lang":"zh-CN","frontmatter":{"description":"reposync 同步yum存储库到本地目录 概要 主要用途 reposync用于将远程yum存储库同步到本地目录，使用yum检索包。 选项 例子 文件 reposync使用yum库来检索信息和包。如果没有指定配置文件，将使用默认的yum配置。 /etc/yum.conf /etc/yum/repos.d/","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/reposync.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"reposync"}],["meta",{"property":"og:description","content":"reposync 同步yum存储库到本地目录 概要 主要用途 reposync用于将远程yum存储库同步到本地目录，使用yum检索包。 选项 例子 文件 reposync使用yum库来检索信息和包。如果没有指定配置文件，将使用默认的yum配置。 /etc/yum.conf /etc/yum/repos.d/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"reposync\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]},{"level":2,"title":"文件","slug":"文件","link":"#文件","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.95,"words":584},"filePathRelative":"command/linux/reposync.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};
