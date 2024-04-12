import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as t}from"./app-D3p8wuGf.js";const s={},i=t(`<h1 id="ncftp" tabindex="-1"><a class="header-anchor" href="#ncftp"><span>ncftp</span></a></h1><p>是增强的的FTP工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>ncftp命令</strong> 是增强的的ftp工具，比传统的FTP指令更加强大。FTP让用户得以下载存放于服务器主机的文件，也能将文件上传到远端主机放置。ncftp是文字模式FTP程序的佼佼者，它具备多样特色，包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ncftp<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-u：指定登录FTP服务器时使用的用户名；
-p：指定登录FTP服务器时使用的密码；
-P：如果FTP服务器没有使用默认的TCP协议的21端口，则使用此选项指定FTP服务器的端口号。
-m：在传之前尝试在目录位置创建目录<span class="token punctuation">(</span>用于传目录的情况<span class="token punctuation">)</span>
-R：递规传子目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>FTP服务器：指定远程FTP服务器的ip地址或主机名。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> ftp://ftp.ncftp.com/ncftp/ncftp-3.2.3-src.tar.gz
<span class="token function">tar</span> zxvf ncftp-3.2.3-src.tar.gz
<span class="token builtin class-name">cd</span> ncftp-3.2.3/
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/ncftp
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>将本地/etc/目录内的所有文件和目录，上传到FTP服务器的flv/games/目录内(如果不存在flv/games/目录则自动创建)。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/local/ncftp/bin/ncftpput <span class="token parameter variable">-u</span> koumm <span class="token parameter variable">-p</span> koumm <span class="token parameter variable">-P</span> <span class="token number">21</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-R</span> <span class="token number">192.168</span>.162.137  flv/games/ /etc/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>指令说明</strong></p><p>ncftp的基本命令和普通ftp一样，可以输入help获得命令列表。对于所有的命令，都可以使用help &lt;命令&gt;的格式获得详细帮助。l开头的就是对本地执行的命令，其它的就是对登入的ftp服务目录的操作命令。</p><p>增加的本地文件系统的操作命令：</p><ul><li>lls: 列出本地当前目录文件；</li><li>lmkdir : 本地建立目录；</li><li>lrename: 本地文件改名；</li><li>lpwd: 显示当前本地路 径；</li><li>lchmod: 改变本地文件权限；</li><li>lpage: 显示本地文件内容；</li><li>lrm: 删除本地文件；</li><li>lrmdir: 删除本地目录。</li></ul>`,19),l=[i];function p(c,r){return e(),n("div",null,l)}const m=a(s,[["render",p],["__file","ncftp.html.vue"]]),u=JSON.parse('{"path":"/command/linux/ncftp.html","title":"ncftp","lang":"zh-CN","frontmatter":{"description":"ncftp 是增强的的FTP工具 补充说明 ncftp命令 是增强的的ftp工具，比传统的FTP指令更加强大。FTP让用户得以下载存放于服务器主机的文件，也能将文件上传到远端主机放置。ncftp是文字模式FTP程序的佼佼者，它具备多样特色，包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。 语法 选项 参数 FTP服务器：指定...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/ncftp.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"ncftp"}],["meta",{"property":"og:description","content":"ncftp 是增强的的FTP工具 补充说明 ncftp命令 是增强的的ftp工具，比传统的FTP指令更加强大。FTP让用户得以下载存放于服务器主机的文件，也能将文件上传到远端主机放置。ncftp是文字模式FTP程序的佼佼者，它具备多样特色，包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。 语法 选项 参数 FTP服务器：指定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ncftp\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.65,"words":494},"filePathRelative":"command/linux/ncftp.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
