import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as n}from"./app-D3p8wuGf.js";const t={},i=n(`<h1 id="users" tabindex="-1"><a class="header-anchor" href="#users"><span>users</span></a></h1><p>打印当前主机所有登陆用户的名称。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">users</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>每个显示的用户名对应一个登录会话；如果一个用户有不止一个登录会话，那他的用户名将显示相同的次数。</li></ul><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">--help</span>       显示帮助信息并退出。
<span class="token parameter variable">--version</span>    显示版本信息并退出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>FILE（可选）：记录用户当前登录情况的文件；默认使用 <code>/var/run/utmp</code> 、<code>/var/log/wtmp</code>。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回0表示成功，返回非0值表示失败。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># users</span>
root root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li>该命令是<code>GNU coreutils</code>包中的命令，相关的帮助信息请查看<code>man -s 1 users</code>，<code>info coreutils &#39;users invocation&#39;</code>。</li></ol>`,16),r=[i];function l(o,c){return a(),s("div",null,r)}const u=e(t,[["render",l],["__file","users.html.vue"]]),h=JSON.parse('{"path":"/command/linux/users.html","title":"users","lang":"zh-CN","frontmatter":{"description":"users 打印当前主机所有登陆用户的名称。 概要 主要用途 每个显示的用户名对应一个登录会话；如果一个用户有不止一个登录会话，那他的用户名将显示相同的次数。 选项 参数 FILE（可选）：记录用户当前登录情况的文件；默认使用 /var/run/utmp 、/var/log/wtmp。 返回值 返回0表示成功，返回非0值表示失败。 例子 注意 该命令是...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/users.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"users"}],["meta",{"property":"og:description","content":"users 打印当前主机所有登陆用户的名称。 概要 主要用途 每个显示的用户名对应一个登录会话；如果一个用户有不止一个登录会话，那他的用户名将显示相同的次数。 选项 参数 FILE（可选）：记录用户当前登录情况的文件；默认使用 /var/run/utmp 、/var/log/wtmp。 返回值 返回0表示成功，返回非0值表示失败。 例子 注意 该命令是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"users\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.59,"words":177},"filePathRelative":"command/linux/users.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,h as data};
