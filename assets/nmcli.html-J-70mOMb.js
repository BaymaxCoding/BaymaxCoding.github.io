import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as e}from"./app-D3p8wuGf.js";const t={},i=e(`<h1 id="nmcli" tabindex="-1"><a class="header-anchor" href="#nmcli"><span>nmcli</span></a></h1><p>地址配置工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>nmcli命令</strong> 是 NetworkManager client 网络管理客户端。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nmcli <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> OBJECT <span class="token punctuation">{</span> COMMAND <span class="token operator">|</span> <span class="token builtin class-name">help</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>OPTIONS
  -t<span class="token punctuation">[</span>erse<span class="token punctuation">]</span>                                  <span class="token comment"># terse output 简洁的输出</span>
  -p<span class="token punctuation">[</span>retty<span class="token punctuation">]</span>                                 <span class="token comment"># pretty output 漂亮的输出</span>
  -m<span class="token punctuation">[</span>ode<span class="token punctuation">]</span> tabular<span class="token operator">|</span>multiline                 <span class="token comment"># output mode  输出模式</span>
  -f<span class="token punctuation">[</span>ields<span class="token punctuation">]</span> <span class="token operator">&lt;</span>field1,field2,<span class="token punctuation">..</span>.<span class="token operator">&gt;|</span>all<span class="token operator">|</span>common  <span class="token comment"># specify fields to output 指定要输出的字段</span>
  -e<span class="token punctuation">[</span>scape<span class="token punctuation">]</span> <span class="token function">yes</span><span class="token operator">|</span>no                          <span class="token comment"># escape columns separators in values 在值中转义列分隔符</span>
  -n<span class="token punctuation">[</span>ocheck<span class="token punctuation">]</span>                                <span class="token comment"># 不要检查nmcli和NetworkManager版本</span>
  -a<span class="token punctuation">[</span>sk<span class="token punctuation">]</span>                                    <span class="token comment"># 要求缺少参数</span>
  -w<span class="token punctuation">[</span>ait<span class="token punctuation">]</span> <span class="token operator">&lt;</span>seconds<span class="token operator">&gt;</span>                         <span class="token comment"># 设置超时等待整理操作</span>
  -v<span class="token punctuation">[</span>ersion<span class="token punctuation">]</span>                                <span class="token comment"># 显示程序版本</span>
  -h<span class="token punctuation">[</span>elp<span class="token punctuation">]</span>                                   <span class="token comment"># 打印此帮助</span>

OBJECT
  g<span class="token punctuation">[</span>eneral<span class="token punctuation">]</span>       NetworkManager的一般状态和操作
  n<span class="token punctuation">[</span>etworking<span class="token punctuation">]</span>    整体组网控制
  r<span class="token punctuation">[</span>adio<span class="token punctuation">]</span>         NetworkManager切换开关
  c<span class="token punctuation">[</span>onnection<span class="token punctuation">]</span>    NetworkManager的连接
  d<span class="token punctuation">[</span>evice<span class="token punctuation">]</span>        由NetworkManager管理的设备
  a<span class="token punctuation">[</span>gent<span class="token punctuation">]</span>         NetworkManager秘密代理或polkit代理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nmcli connection show            <span class="token comment"># 查看当前连接状态</span>
nmcli connection reload          <span class="token comment"># 重启服务</span>
nmcli connection show <span class="token parameter variable">-active</span>    <span class="token comment"># 显示活动的连接</span>
nmcli connection show <span class="token string">&quot;lan eth0&quot;</span> <span class="token comment"># 显示指定一个网络连接配置</span>
nmcli device status              <span class="token comment"># 显示设备状态</span>
nmcli device show eno16777736    <span class="token comment"># 显示指定接口属性</span>
nmcli device show                <span class="token comment"># 显示全部接口属性</span>
nmcli con up static              <span class="token comment"># 启用static连接配置</span>
nmcli con up default             <span class="token comment"># 启用default连接配置 </span>
nmcli con <span class="token function">add</span> <span class="token builtin class-name">help</span>               <span class="token comment"># 查看帮助</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建网络会话" tabindex="-1"><a class="header-anchor" href="#创建网络会话"><span>创建网络会话</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nmcli connection <span class="token function">add</span> con-name company ifname ens33 autoconnect no <span class="token builtin class-name">type</span> ethernet ip4 <span class="token number">192.168</span>.1.2/24 gw4 <span class="token number">192.168</span>.1.1
<span class="token comment"># con-name 指定会话名称，</span>
<span class="token comment"># ifname 指定本机网卡</span>
<span class="token comment"># autoconnect no 是否自动连接</span>
<span class="token comment"># ethernet 指定网卡类型</span>
<span class="token comment"># ip4/ip6</span>
<span class="token comment"># gw4/gw5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[i];function l(o,p){return a(),s("div",null,c)}const r=n(t,[["render",l],["__file","nmcli.html.vue"]]),u=JSON.parse('{"path":"/command/linux/nmcli.html","title":"nmcli","lang":"zh-CN","frontmatter":{"description":"nmcli 地址配置工具 补充说明 nmcli命令 是 NetworkManager client 网络管理客户端。 语法 选项 实例 创建网络会话","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/nmcli.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"nmcli"}],["meta",{"property":"og:description","content":"nmcli 地址配置工具 补充说明 nmcli命令 是 NetworkManager client 网络管理客户端。 语法 选项 实例 创建网络会话"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nmcli\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]},{"level":3,"title":"创建网络会话","slug":"创建网络会话","link":"#创建网络会话","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"command/linux/nmcli.md","localizedDate":"2024年4月12日","autoDesc":true}');export{r as comp,u as data};
