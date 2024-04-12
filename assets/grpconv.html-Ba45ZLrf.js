import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as s}from"./app-D3p8wuGf.js";const t={},o=s(`<h1 id="grpconv" tabindex="-1"><a class="header-anchor" href="#grpconv"><span>grpconv</span></a></h1><p>用来开启群组的投影密码</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>grpconv命令</strong> 用来开启群组的投影密码。Linux系统里的用户和群组密码，分别存放在<code>/etc</code>目录下的passwd和group文件中。因系统运作所需，任何人都得以读取它们，造成安全上的破绽。投影密码将文件内的密码改存在<code>/etc</code>目录下的shadow和gshadow文件内，只允许系统管理者读取，同时把原密码置换为&quot;x&quot;字符。投影密码的功能可随时开启或关闭，您只需执行grpconv指令就能开启群组投影密码。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>grpconv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>设置cdy组密码</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">groupmod</span> <span class="token parameter variable">--password</span> <span class="token number">123456</span> cdy
<span class="token function">cat</span> /etc/group <span class="token operator">|</span> <span class="token function">grep</span> cdy
cdy:123456:1000:     <span class="token comment"># 看出密码是123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动影子系统</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>grpconv
<span class="token function">cat</span> /etc/group <span class="token operator">|</span>  <span class="token function">grep</span> cdy
cdy:x:1000:      <span class="token comment"># 看出密码段已经被x替代</span>

<span class="token function">cat</span> /etc/gshadow <span class="token operator">|</span> <span class="token function">grep</span> cdy
cdy:123456::      <span class="token comment"># 已经移到影子文件了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：gshadow, shadow只有root权限才可以查看。</p>`,12),c=[o];function i(r,d){return a(),n("div",null,c)}const m=e(t,[["render",i],["__file","grpconv.html.vue"]]),g=JSON.parse('{"path":"/command/linux/grpconv.html","title":"grpconv","lang":"zh-CN","frontmatter":{"description":"grpconv 用来开启群组的投影密码 补充说明 grpconv命令 用来开启群组的投影密码。Linux系统里的用户和群组密码，分别存放在/etc目录下的passwd和group文件中。因系统运作所需，任何人都得以读取它们，造成安全上的破绽。投影密码将文件内的密码改存在/etc目录下的shadow和gshadow文件内，只允许系统管理者读取，同时把原密...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/grpconv.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"grpconv"}],["meta",{"property":"og:description","content":"grpconv 用来开启群组的投影密码 补充说明 grpconv命令 用来开启群组的投影密码。Linux系统里的用户和群组密码，分别存放在/etc目录下的passwd和group文件中。因系统运作所需，任何人都得以读取它们，造成安全上的破绽。投影密码将文件内的密码改存在/etc目录下的shadow和gshadow文件内，只允许系统管理者读取，同时把原密..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grpconv\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.82,"words":247},"filePathRelative":"command/linux/grpconv.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,g as data};
