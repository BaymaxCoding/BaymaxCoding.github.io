import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n}from"./app-D3p8wuGf.js";const i={},s=n(`<h1 id="tempfile" tabindex="-1"><a class="header-anchor" href="#tempfile"><span>tempfile</span></a></h1><p>shell中给临时文件命名</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>有时候在写Shell脚本的时候需要一些临时存储数据的才做，最适合存储临时文件数据的位置就是<code>/tmp</code>，因为该目录中所有的内容在系统重启后就会被清空。下面是两种方法为临时数据生成标准的文件名。</p><h3 id="tempfile命令" tabindex="-1"><a class="header-anchor" href="#tempfile命令"><span>tempfile命令</span></a></h3><p><code>tempfile命令</code>只有在基于Debian的发行版中才默认自带，比如Ubuntu，其他发行版没有这个命令。</p><p>用tempfile命令为一个临时文件命名：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">temp_file_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tempfile<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用一个加带了随机数的文件名作为临时文件命名：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">temp_file_name</span><span class="token operator">=</span><span class="token string">&quot;/tmp/file_<span class="token environment constant">$RANDOM</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>$RANDOM是一个返回随机数的环境变量。</p><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>$$变量</span></a></h3><p>如果没有tempfile命令的Linux发行版，也可以使用自己的临时文件名：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">temp_file_name</span><span class="token operator">=</span><span class="token string">&quot;/tmp/file.$&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>$$</code>是系统预定义变量，显示当前所在进程的进程号，用<code>.$$</code>作为添加的后缀会被扩展成当前运行脚本的进程id。</p>`,15),l=[s];function p(o,r){return a(),t("div",null,l)}const d=e(i,[["render",p],["__file","tempfile.html.vue"]]),h=JSON.parse('{"path":"/command/linux/tempfile.html","title":"tempfile","lang":"zh-CN","frontmatter":{"description":"tempfile shell中给临时文件命名 补充说明 有时候在写Shell脚本的时候需要一些临时存储数据的才做，最适合存储临时文件数据的位置就是/tmp，因为该目录中所有的内容在系统重启后就会被清空。下面是两种方法为临时数据生成标准的文件名。 tempfile命令 tempfile命令只有在基于Debian的发行版中才默认自带，比如Ubuntu，其他...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/tempfile.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"tempfile"}],["meta",{"property":"og:description","content":"tempfile shell中给临时文件命名 补充说明 有时候在写Shell脚本的时候需要一些临时存储数据的才做，最适合存储临时文件数据的位置就是/tmp，因为该目录中所有的内容在系统重启后就会被清空。下面是两种方法为临时数据生成标准的文件名。 tempfile命令 tempfile命令只有在基于Debian的发行版中才默认自带，比如Ubuntu，其他..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tempfile\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"tempfile命令","slug":"tempfile命令","link":"#tempfile命令","children":[]},{"level":3,"title":"$$变量","slug":"变量","link":"#变量","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"command/linux/tempfile.md","localizedDate":"2024年4月12日","autoDesc":true}');export{d as comp,h as data};
