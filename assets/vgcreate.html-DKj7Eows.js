import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n}from"./app-D3p8wuGf.js";const s={},i=n(`<h1 id="vgcreate" tabindex="-1"><a class="header-anchor" href="#vgcreate"><span>vgcreate</span></a></h1><p>用于创建LVM卷组</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>vgcreate命令</strong> 用于创建LVM卷组。卷组（Volume Group）将多个物理卷组织成一个整体，屏蔽了底层物理卷细节。在卷组上创建逻辑卷时不用考虑具体的物理卷信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vgcreate<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-l：卷组上允许创建的最大逻辑卷数；
-p：卷组中允许添加的最大物理卷数；
-s：卷组上的物理卷的PE大小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li>卷组名：要创建的卷组名称；</li><li>物理卷列表：要加入到卷组中的物理卷列表。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用vgcreate命令创建卷组 &quot;vg1000&quot;，并且将物理卷<code>/dev/sdb1</code>和<code>/dev/sdb2</code>添加到卷组中。在命令行中输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgcreate vg1000 /dev/sdb1 /dev/sdb2  #创建卷组&quot;vg1000&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Volume group <span class="token string">&quot;vg1000&quot;</span> successfully created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),r=[i];function c(l,o){return a(),t("div",null,r)}const u=e(s,[["render",c],["__file","vgcreate.html.vue"]]),h=JSON.parse('{"path":"/command/linux/vgcreate.html","title":"vgcreate","lang":"zh-CN","frontmatter":{"description":"vgcreate 用于创建LVM卷组 补充说明 vgcreate命令 用于创建LVM卷组。卷组（Volume Group）将多个物理卷组织成一个整体，屏蔽了底层物理卷细节。在卷组上创建逻辑卷时不用考虑具体的物理卷信息。 语法 选项 参数 卷组名：要创建的卷组名称； 物理卷列表：要加入到卷组中的物理卷列表。 实例 使用vgcreate命令创建卷组 \\"vg...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/vgcreate.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"vgcreate"}],["meta",{"property":"og:description","content":"vgcreate 用于创建LVM卷组 补充说明 vgcreate命令 用于创建LVM卷组。卷组（Volume Group）将多个物理卷组织成一个整体，屏蔽了底层物理卷细节。在卷组上创建逻辑卷时不用考虑具体的物理卷信息。 语法 选项 参数 卷组名：要创建的卷组名称； 物理卷列表：要加入到卷组中的物理卷列表。 实例 使用vgcreate命令创建卷组 \\"vg..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vgcreate\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.72,"words":217},"filePathRelative":"command/linux/vgcreate.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,h as data};
