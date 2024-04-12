import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as s}from"./app-D3p8wuGf.js";const t={},l=s(`<h1 id="lvdisplay" tabindex="-1"><a class="header-anchor" href="#lvdisplay"><span>lvdisplay</span></a></h1><p>显示逻辑卷属性</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>lvdisplay命令</strong> 用于显示LVM逻辑卷空间大小、读写状态和快照信息等属性。如果省略&quot;逻辑卷&quot;参数，则lvdisplay命令显示所有的逻辑卷属性。否则，仅显示指定的逻辑卷属性。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lvdisplay<span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>逻辑卷：指定要显示属性的逻辑卷对应的设备文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用lvdisplay命令显示指定逻辑卷的属性。在命令行中输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvdisplay /dev/vg1000/lvol0     #显示逻辑卷属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  --- Logical volume ---  
  LV Name                /dev/vg1000/lvol0  
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>省略部分输出内容<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>  
  Block device           <span class="token number">253</span>:0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[l];function d(o,p){return e(),n("div",null,i)}const m=a(t,[["render",d],["__file","lvdisplay.html.vue"]]),u=JSON.parse('{"path":"/command/linux/lvdisplay.html","title":"lvdisplay","lang":"zh-CN","frontmatter":{"description":"lvdisplay 显示逻辑卷属性 补充说明 lvdisplay命令 用于显示LVM逻辑卷空间大小、读写状态和快照信息等属性。如果省略\\"逻辑卷\\"参数，则lvdisplay命令显示所有的逻辑卷属性。否则，仅显示指定的逻辑卷属性。 语法 参数 逻辑卷：指定要显示属性的逻辑卷对应的设备文件。 实例 使用lvdisplay命令显示指定逻辑卷的属性。在命令行中输...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/lvdisplay.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"lvdisplay"}],["meta",{"property":"og:description","content":"lvdisplay 显示逻辑卷属性 补充说明 lvdisplay命令 用于显示LVM逻辑卷空间大小、读写状态和快照信息等属性。如果省略\\"逻辑卷\\"参数，则lvdisplay命令显示所有的逻辑卷属性。否则，仅显示指定的逻辑卷属性。 语法 参数 逻辑卷：指定要显示属性的逻辑卷对应的设备文件。 实例 使用lvdisplay命令显示指定逻辑卷的属性。在命令行中输..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lvdisplay\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.57,"words":170},"filePathRelative":"command/linux/lvdisplay.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
