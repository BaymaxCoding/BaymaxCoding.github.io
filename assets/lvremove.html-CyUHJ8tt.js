import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as t}from"./app-D3p8wuGf.js";const s={},o=t(`<h1 id="lvremove" tabindex="-1"><a class="header-anchor" href="#lvremove"><span>lvremove</span></a></h1><p>删除指定LVM逻辑卷</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>lvremove命令</strong> 用于删除指定LVM逻辑卷。如果逻辑卷已经使用mount命令加载，则不能使用lvremove命令删除。必须使用umount命令卸载后，逻辑卷方可被删除。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lvremove<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-f：强制删除。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>逻辑卷：指定要删除的逻辑卷。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用lvremove命令删除指定的逻辑卷。在命令行中输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvremove /dev/vg1000/lvol0    #删除逻辑卷&quot;lvol0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Do you really want to remove active logical 
volume <span class="token string">&quot;lvol0&quot;</span>? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>: y    <span class="token comment">#确认删除</span>
  Logical volume <span class="token string">&quot;lvol0&quot;</span> successfully removed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[o];function i(r,c){return a(),n("div",null,l)}const p=e(s,[["render",i],["__file","lvremove.html.vue"]]),v=JSON.parse('{"path":"/command/linux/lvremove.html","title":"lvremove","lang":"zh-CN","frontmatter":{"description":"lvremove 删除指定LVM逻辑卷 补充说明 lvremove命令 用于删除指定LVM逻辑卷。如果逻辑卷已经使用mount命令加载，则不能使用lvremove命令删除。必须使用umount命令卸载后，逻辑卷方可被删除。 语法 选项 参数 逻辑卷：指定要删除的逻辑卷。 实例 使用lvremove命令删除指定的逻辑卷。在命令行中输入下面的命令： 输出信...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/lvremove.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"lvremove"}],["meta",{"property":"og:description","content":"lvremove 删除指定LVM逻辑卷 补充说明 lvremove命令 用于删除指定LVM逻辑卷。如果逻辑卷已经使用mount命令加载，则不能使用lvremove命令删除。必须使用umount命令卸载后，逻辑卷方可被删除。 语法 选项 参数 逻辑卷：指定要删除的逻辑卷。 实例 使用lvremove命令删除指定的逻辑卷。在命令行中输入下面的命令： 输出信..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lvremove\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.54,"words":163},"filePathRelative":"command/linux/lvremove.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,v as data};
