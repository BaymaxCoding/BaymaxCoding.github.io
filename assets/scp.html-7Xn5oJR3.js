import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as a}from"./app-D3p8wuGf.js";const t={},i=a(`<h1 id="scp" tabindex="-1"><a class="header-anchor" href="#scp"><span>scp</span></a></h1><p>加密的方式在本地主机和远程主机之间复制文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>scp命令</strong> 用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，不过cp只是在本机进行拷贝不能跨服务器，而且scp传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读read only system时，用scp可以帮你把文件移出来。另外，scp还非常不占资源，不会提高多少系统负荷，在这一点上，rsync就远远不及它了。虽然 rsync比scp会快一点，但当小文件众多的情况下，rsync会导致硬盘I/O非常高，而scp基本不影响系统正常使用。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>scp<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-1：使用ssh协议版本1；
-2：使用ssh协议版本2；
-4：使用ipv4；
-6：使用ipv6；
-B：以批处理模式运行；
-C：使用压缩；
-F：指定ssh配置文件；
-i：identity_file 从指定文件中读取传输时使用的密钥文件（例如亚马逊云pem），此参数直接传递给ssh；
-l：指定宽带限制；
-o：指定使用的ssh选项；
-P：指定远程主机的端口号；
-p：保留文件的最后修改时间，最后访问时间和权限模式；
-q：不显示复制进度；
-r：以递归方式复制。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li>源文件：指定要复制的源文件。</li><li>目标文件：目标文件。格式为<code>user@host：filename</code>（文件名为目标文件的名称）。</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>从远程复制到本地的scp命令与上面的命令雷同，只要将从本地复制到远程的命令后面2个参数互换顺序就行了。</p><p><strong>从远程机器复制文件到本地目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> root@10.10.10.10:/opt/soft/nginx-0.5.38.tar.gz /opt/soft/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从10.10.10.10机器上的<code>/opt/soft/</code>的目录中下载nginx-0.5.38.tar.gz 文件到本地<code>/opt/soft/</code>目录中。</p><p><strong>从亚马逊云复制OpenVPN到本地目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> <span class="token parameter variable">-i</span> amazon.pem ubuntu@10.10.10.10:/usr/local/openvpn_as/etc/exe/openvpn-connect-2.1.3.110.dmg openvpn-connect-2.1.3.110.dmg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从10.10.10.10机器上下载openvpn安装文件到本地当前目录来。</p><p><strong>从远程机器复制到本地</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> <span class="token parameter variable">-r</span> root@10.10.10.10:/opt/soft/mongodb /opt/soft/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从10.10.10.10机器上的<code>/opt/soft/</code>中下载mongodb目录到本地的<code>/opt/soft/</code>目录来。</p><p><strong>上传本地文件到远程机器指定目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest
<span class="token comment"># 指定端口 2222</span>
<span class="token function">scp</span> <span class="token parameter variable">-rp</span> <span class="token parameter variable">-P</span> <span class="token number">2222</span> /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制本地<code>/opt/soft/</code>目录下的文件nginx-0.5.38.tar.gz到远程机器10.10.10.10的<code>opt/soft/scptest</code>目录。</p><p><strong>上传本地目录到远程机器指定目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">scp</span> <span class="token parameter variable">-r</span> /opt/soft/mongodb root@10.10.10.10:/opt/soft/scptest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上传本地目录<code>/opt/soft/mongodb</code>到远程机器10.10.10.10上<code>/opt/soft/scptest</code>的目录中去。</p>`,27),o=[i];function c(p,d){return s(),n("div",null,o)}const m=e(t,[["render",c],["__file","scp.html.vue"]]),u=JSON.parse('{"path":"/command/linux/scp.html","title":"scp","lang":"zh-CN","frontmatter":{"description":"scp 加密的方式在本地主机和远程主机之间复制文件 补充说明 scp命令 用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，不过cp只是在本机进行拷贝不能跨服务器，而且scp传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读read only system时，用scp可以帮你把文件移出来。另外，scp还非常不占资源，不会提高多少...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/scp.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"scp"}],["meta",{"property":"og:description","content":"scp 加密的方式在本地主机和远程主机之间复制文件 补充说明 scp命令 用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，不过cp只是在本机进行拷贝不能跨服务器，而且scp传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读read only system时，用scp可以帮你把文件移出来。另外，scp还非常不占资源，不会提高多少..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"scp\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.22,"words":666},"filePathRelative":"command/linux/scp.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
