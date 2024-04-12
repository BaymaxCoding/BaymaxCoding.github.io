import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n}from"./app-D3p8wuGf.js";const i={},s=n(`<h1 id="apt-key" tabindex="-1"><a class="header-anchor" href="#apt-key"><span>apt-key</span></a></h1><p>管理Debian Linux系统中的软件包密钥</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>apt-key命令</strong> 用于管理Debian Linux系统中的软件包密钥。每个发布的deb包，都是通过密钥认证的，apt-key用来管理密钥。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apt-key<span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>操作指令：APT密钥操作指令。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apt-key list          <span class="token comment"># 列出已保存在系统中key。</span>
apt-key <span class="token function">add</span> keyname   <span class="token comment"># 把下载的key添加到本地trusted数据库中。</span>
apt-key del keyname   <span class="token comment"># 从本地trusted数据库删除key。</span>
apt-key update        <span class="token comment"># 更新本地trusted数据库，删除过期没用的key。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[s];function p(d,l){return a(),t("div",null,o)}const m=e(i,[["render",p],["__file","apt-key.html.vue"]]),h=JSON.parse('{"path":"/command/linux/apt-key.html","title":"apt-key","lang":"zh-CN","frontmatter":{"description":"apt-key 管理Debian Linux系统中的软件包密钥 补充说明 apt-key命令 用于管理Debian Linux系统中的软件包密钥。每个发布的deb包，都是通过密钥认证的，apt-key用来管理密钥。 语法 参数 操作指令：APT密钥操作指令。 实例","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/apt-key.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"apt-key"}],["meta",{"property":"og:description","content":"apt-key 管理Debian Linux系统中的软件包密钥 补充说明 apt-key命令 用于管理Debian Linux系统中的软件包密钥。每个发布的deb包，都是通过密钥认证的，apt-key用来管理密钥。 语法 参数 操作指令：APT密钥操作指令。 实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"apt-key\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"command/linux/apt-key.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,h as data};
