import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as a}from"./app-DOGW-9XX.js";const i={},l=a(`<h1 id="yum" tabindex="-1"><a class="header-anchor" href="#yum"><span>yum</span></a></h1><p>基于RPM的软件包管理器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>yum命令</strong> 是在Fedora和RedHat以及SUSE中基于rpm的软件包管理器，它可以使系统管理人员交互和自动化地更新与管理RPM软件包，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。</p><p>yum提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-h：显示帮助信息；
-y：对所有的提问都回答“yes”；
-c：指定配置文件；
-q：安静模式；
-v：详细模式；
-d：设置调试等级（0-10）；
-e：设置错误等级（0-10）；
-R：设置yum处理一个命令的最大等待时间；
-C：完全从缓存中运行，而不去下载或者更新任何头文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>install：安装rpm软件包；
update：更新rpm软件包；
check-update：检查是否有可用的更新rpm软件包；
remove：删除指定的rpm软件包；
list：显示软件包的信息；
search：检查软件包的信息；
info：显示指定的rpm软件包的描述信息和概要信息；
clean：清理yum过期的缓存；
shell：进入yum的shell提示符；
resolvedep：显示rpm软件包的依赖关系；
localinstall：安装本地的rpm软件包；
localupdate：显示本地rpm软件包进行更新；
deplist：显示rpm软件包的所有依赖关系；
provides：查询某个程序所在安装包。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>部分常用的命令包括：</p><ul><li>自动搜索最快镜像插件：<code>yum install yum-fastestmirror</code></li><li>安装yum图形窗口插件：<code>yum install yumex</code></li><li>查看可能批量安装的列表：<code>yum grouplist</code></li></ul><p><strong>安装</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span>              <span class="token comment">#全部安装</span>
yum <span class="token function">install</span> package1     <span class="token comment">#安装指定的安装包package1</span>
yum groupinsall group1   <span class="token comment">#安装程序组group1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更新和升级</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum update               <span class="token comment">#全部更新</span>
yum update package1      <span class="token comment">#更新指定程序包package1</span>
yum check-update         <span class="token comment">#检查可更新的程序</span>
yum upgrade package1     <span class="token comment">#升级指定程序包package1</span>
yum groupupdate group1   <span class="token comment">#升级程序组group1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查找和显示</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 检查 MySQL 是否已安装</span>
yum list installed <span class="token operator">|</span> <span class="token function">grep</span> mysql
yum list installed mysql*

yum info package1      <span class="token comment">#显示安装包信息package1</span>
yum list               <span class="token comment">#显示所有已经安装和可以安装的程序包</span>
yum list package1      <span class="token comment">#显示指定程序包安装情况package1</span>
yum groupinfo group1   <span class="token comment">#显示程序组group1信息yum search string 根据关键字string查找安装包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除程序</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum remove <span class="token operator">&amp;</span><span class="token comment">#124; erase package1   #删除程序包package1</span>
yum groupremove group1             <span class="token comment">#删除程序组group1</span>
yum deplist package1               <span class="token comment">#查看程序package1依赖情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>清除缓存</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum clean packages       <span class="token comment"># 清除缓存目录下的软件包</span>
yum clean headers        <span class="token comment"># 清除缓存目录下的 headers</span>
yum clean oldheaders     <span class="token comment"># 清除缓存目录下旧的 headers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更多实例</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># yum</span>
/etc/yum.repos.d/       <span class="token comment"># yum 源配置文件</span>
<span class="token function">vi</span> /etc/yum.repos.d/nginx.repo <span class="token comment"># 举个栗子: nginx yum源</span>
<span class="token punctuation">[</span>nginx<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>nginx repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://nginx.org/packages/centos/6/<span class="token variable">$basearch</span>/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># yum mirror</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
<span class="token function">wget</span> https://mirror.tuna.tsinghua.edu.cn/help/centos/
yum makecache

<span class="token comment"># 添加中文语言支持</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>C <span class="token comment"># 原始语言</span>
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.utf8 <span class="token comment"># 切换到中文</span>
yum groupinstall <span class="token string">&quot;Chinese Support&quot;</span> <span class="token comment"># 添加中文语言支持</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),t=[l];function d(c,r){return e(),s("div",null,t)}const m=n(i,[["render",d],["__file","yum.html.vue"]]),u=JSON.parse('{"path":"/command/linux/yum.html","title":"yum","lang":"zh-CN","frontmatter":{"description":"yum 基于RPM的软件包管理器 补充说明 yum命令 是在Fedora和RedHat以及SUSE中基于rpm的软件包管理器，它可以使系统管理人员交互和自动化地更新与管理RPM软件包，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。 yum提供了查找、安装、删除某一个、一组甚...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/yum.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"yum"}],["meta",{"property":"og:description","content":"yum 基于RPM的软件包管理器 补充说明 yum命令 是在Fedora和RedHat以及SUSE中基于rpm的软件包管理器，它可以使系统管理人员交互和自动化地更新与管理RPM软件包，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。 yum提供了查找、安装、删除某一个、一组甚..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"yum\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"command/linux/yum.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};
