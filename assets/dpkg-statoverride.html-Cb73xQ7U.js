import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as s}from"./app-D3p8wuGf.js";const n={},i=s(`<h1 id="dpkg-statoverride" tabindex="-1"><a class="header-anchor" href="#dpkg-statoverride"><span>dpkg-statoverride</span></a></h1><p>Debian Linux中覆盖文件的所有权和模式</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>dpkg-statoverride命令</strong> 用于Debian Linux中覆盖文件的所有权和模式，让dpkg于包安装时使得文件所有权与模式失效。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dpkg-statoverride<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-add：为文件添加一个改写；
--remove：为文件删除一个改写；
--list：显示所有改写列表；
--update：如果文件存在，则立刻执行改写操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>修改文件夹的权限属性：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg-statoverride <span class="token parameter variable">--update</span> <span class="token parameter variable">--add</span> nagios nagios <span class="token number">751</span> /var/lib/nagios3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>强制修改文件夹的权限属性：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg-statoverride <span class="token parameter variable">--force</span> <span class="token parameter variable">--update</span> <span class="token parameter variable">--add</span> root sasl <span class="token number">755</span> /var/spool/postfix/var/run/saslauthd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文件从数据库中删除：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg-statoverride <span class="token parameter variable">--remove</span> /usr/bin/wall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),r=[i];function d(o,l){return a(),t("div",null,r)}const m=e(n,[["render",d],["__file","dpkg-statoverride.html.vue"]]),u=JSON.parse('{"path":"/command/linux/dpkg-statoverride.html","title":"dpkg-statoverride","lang":"zh-CN","frontmatter":{"description":"dpkg-statoverride Debian Linux中覆盖文件的所有权和模式 补充说明 dpkg-statoverride命令 用于Debian Linux中覆盖文件的所有权和模式，让dpkg于包安装时使得文件所有权与模式失效。 语法 选项 实例 修改文件夹的权限属性： 强制修改文件夹的权限属性： 将文件从数据库中删除：","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dpkg-statoverride.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dpkg-statoverride"}],["meta",{"property":"og:description","content":"dpkg-statoverride Debian Linux中覆盖文件的所有权和模式 补充说明 dpkg-statoverride命令 用于Debian Linux中覆盖文件的所有权和模式，让dpkg于包安装时使得文件所有权与模式失效。 语法 选项 实例 修改文件夹的权限属性： 强制修改文件夹的权限属性： 将文件从数据库中删除："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dpkg-statoverride\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.58,"words":175},"filePathRelative":"command/linux/dpkg-statoverride.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
