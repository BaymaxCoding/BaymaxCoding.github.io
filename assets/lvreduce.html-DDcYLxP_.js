import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as t}from"./app-D3p8wuGf.js";const s={},l=t(`<h1 id="lvreduce" tabindex="-1"><a class="header-anchor" href="#lvreduce"><span>lvreduce</span></a></h1><p>收缩逻辑卷空间</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>lvreduce命令</strong> 用于减少LVM逻辑卷占用的空间大小。使用lvreduce命令收缩逻辑卷的空间大小有可能会删除逻辑卷上已有的数据，所以在操作前必须进行确认。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lvreduce<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-L：指定逻辑卷的大小，单位为“kKmMgGtT”字节；
-l：指定逻辑卷的大小（LE数）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>逻辑卷：指定要操作的逻辑卷对应的设备文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用lvreduce命令减少指定的逻辑卷的空间大小。在命令行中输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvreduce -L -50M /dev/vg1000/lvol0     #将逻辑卷的空间大小减少50M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>省略部分输出内容<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>  
Do you really want to reduce lvol0? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>: y  <span class="token comment">#确认操作  </span>
  Reducing logical volume lvol0 to <span class="token number">252.00</span> MB  
  Logical volume lvol0 successfully resized
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[l];function c(d,o){return a(),n("div",null,i)}const u=e(s,[["render",c],["__file","lvreduce.html.vue"]]),m=JSON.parse('{"path":"/command/linux/lvreduce.html","title":"lvreduce","lang":"zh-CN","frontmatter":{"description":"lvreduce 收缩逻辑卷空间 补充说明 lvreduce命令 用于减少LVM逻辑卷占用的空间大小。使用lvreduce命令收缩逻辑卷的空间大小有可能会删除逻辑卷上已有的数据，所以在操作前必须进行确认。 语法 选项 参数 逻辑卷：指定要操作的逻辑卷对应的设备文件。 实例 使用lvreduce命令减少指定的逻辑卷的空间大小。在命令行中输入下面的命令： ...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/lvreduce.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"lvreduce"}],["meta",{"property":"og:description","content":"lvreduce 收缩逻辑卷空间 补充说明 lvreduce命令 用于减少LVM逻辑卷占用的空间大小。使用lvreduce命令收缩逻辑卷的空间大小有可能会删除逻辑卷上已有的数据，所以在操作前必须进行确认。 语法 选项 参数 逻辑卷：指定要操作的逻辑卷对应的设备文件。 实例 使用lvreduce命令减少指定的逻辑卷的空间大小。在命令行中输入下面的命令： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lvreduce\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"command/linux/lvreduce.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};
