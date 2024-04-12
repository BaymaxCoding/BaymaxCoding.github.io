import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as s}from"./app-D_HUMAmc.js";const t={},i=s(`<h1 id="hostnamectl" tabindex="-1"><a class="header-anchor" href="#hostnamectl"><span>hostnamectl</span></a></h1><p>查询或更改系统主机名</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>hostnamectl可用于查询和更改系统主机名和相关设置。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hostnamectl <span class="token punctuation">[</span>选项<span class="token punctuation">..</span>.<span class="token punctuation">]</span> 指令 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>status                 显示当前主机名设置
set-hostname NAME      设置系统主机名
set-icon-name NAME     设置主机的图标名称
set-chassis NAME       设置主机的机箱类型 
set-deployment NAME    设置主机的部署环境 
set-location NAME      设置主机位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-h</span> <span class="token parameter variable">--help</span>               显示此帮助
    <span class="token parameter variable">--version</span>           显示包的版本
    --no-ask-password   不提示输入密码
<span class="token parameter variable">-H</span> <span class="token parameter variable">--host</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST   在远程主机上操作
<span class="token parameter variable">-M</span> <span class="token parameter variable">--machine</span><span class="token operator">=</span>CONTAINER  在本地容器上执行操作。指定要连接到的容器名称。
--transient, --static, <span class="token parameter variable">--pretty</span>  
                        如果调用了status（或者没有给出显式命令）并且指定了其中一个开关，hostnamectl将只打印出这个选定的主机名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>显示主机名设置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ hostnamectl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改变主机名(永久修改,不用重启哦~)</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> hostnamectl set-hostname newname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),l=[i];function c(o,r){return e(),n("div",null,l)}const m=a(t,[["render",c],["__file","hostnamectl.html.vue"]]),h=JSON.parse('{"path":"/command/linux/hostnamectl.html","title":"hostnamectl","lang":"zh-CN","frontmatter":{"description":"hostnamectl 查询或更改系统主机名 补充说明 hostnamectl可用于查询和更改系统主机名和相关设置。 语法 指令 选项 实例 显示主机名设置 改变主机名(永久修改,不用重启哦~)","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/hostnamectl.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"hostnamectl"}],["meta",{"property":"og:description","content":"hostnamectl 查询或更改系统主机名 补充说明 hostnamectl可用于查询和更改系统主机名和相关设置。 语法 指令 选项 实例 显示主机名设置 改变主机名(永久修改,不用重启哦~)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hostnamectl\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"指令","slug":"指令","link":"#指令","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.84,"words":252},"filePathRelative":"command/linux/hostnamectl.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,h as data};