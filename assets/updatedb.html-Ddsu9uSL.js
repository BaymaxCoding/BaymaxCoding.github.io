import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n}from"./app-D3p8wuGf.js";const s={},d=n(`<h1 id="updatedb" tabindex="-1"><a class="header-anchor" href="#updatedb"><span>updatedb</span></a></h1><p>创建或更新slocate命令所必需的数据库文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>updatedb命令</strong> 用来创建或更新slocate命令所必需的数据库文件。updatedb命令的执行过程较长，因为在执行时它会遍历整个系统的目录树，并将所有的文件信息写入slocate数据库文件中。</p><p>补充说明：slocate本身具有一个数据库，里面存放了系统中文件与目录的相关信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>updatedb<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-o<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：忽略默认的数据库文件，使用指定的slocate数据库文件；
-U<span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>：更新指定目录的slocate数据库；
-v：显示执行的详细过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>实用updatedb命令的<code>-U</code>选项可以指定要更新slocate数据库的目录。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>updatedb <span class="token parameter variable">-U</span> /usr/local/  更新指定命令的slocate数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),o=[d];function i(l,c){return a(),t("div",null,o)}const u=e(s,[["render",i],["__file","updatedb.html.vue"]]),h=JSON.parse('{"path":"/command/linux/updatedb.html","title":"updatedb","lang":"zh-CN","frontmatter":{"description":"updatedb 创建或更新slocate命令所必需的数据库文件 补充说明 updatedb命令 用来创建或更新slocate命令所必需的数据库文件。updatedb命令的执行过程较长，因为在执行时它会遍历整个系统的目录树，并将所有的文件信息写入slocate数据库文件中。 补充说明：slocate本身具有一个数据库，里面存放了系统中文件与目录的相关信...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/updatedb.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"updatedb"}],["meta",{"property":"og:description","content":"updatedb 创建或更新slocate命令所必需的数据库文件 补充说明 updatedb命令 用来创建或更新slocate命令所必需的数据库文件。updatedb命令的执行过程较长，因为在执行时它会遍历整个系统的目录树，并将所有的文件信息写入slocate数据库文件中。 补充说明：slocate本身具有一个数据库，里面存放了系统中文件与目录的相关信..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"updatedb\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.73,"words":219},"filePathRelative":"command/linux/updatedb.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,h as data};
