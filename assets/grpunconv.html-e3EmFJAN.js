import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e as t}from"./app-D_HUMAmc.js";const s={},o=t(`<h1 id="grpunconv" tabindex="-1"><a class="header-anchor" href="#grpunconv"><span>grpunconv</span></a></h1><p>用来关闭群组的投影密码</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>grpunconv命令</strong> 用来关闭群组的投影密码。它会把密码从gshadow文件内，回存到group文件里。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>grpunconv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>未关闭的情况</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/gshadow <span class="token operator">|</span> <span class="token function">grep</span> cdy
cdy:123456::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭影子密码</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/gshadow
cat: /etc/gshadow: 没有那个文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看密码已经复制到<code>/etc/group</code>中了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/group <span class="token operator">|</span> <span class="token function">grep</span> cdy
cdy:123456:1000:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[o];function c(r,d){return a(),n("div",null,i)}const u=e(s,[["render",c],["__file","grpunconv.html.vue"]]),g=JSON.parse('{"path":"/command/linux/grpunconv.html","title":"grpunconv","lang":"zh-CN","frontmatter":{"description":"grpunconv 用来关闭群组的投影密码 补充说明 grpunconv命令 用来关闭群组的投影密码。它会把密码从gshadow文件内，回存到group文件里。 语法 实例 未关闭的情况 关闭影子密码 查看密码已经复制到/etc/group中了。","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/grpunconv.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"grpunconv"}],["meta",{"property":"og:description","content":"grpunconv 用来关闭群组的投影密码 补充说明 grpunconv命令 用来关闭群组的投影密码。它会把密码从gshadow文件内，回存到group文件里。 语法 实例 未关闭的情况 关闭影子密码 查看密码已经复制到/etc/group中了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grpunconv\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"command/linux/grpunconv.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,g as data};