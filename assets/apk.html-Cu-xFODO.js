import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as e}from"./app-D3p8wuGf.js";const i={},l=e(`<h1 id="apk" tabindex="-1"><a class="header-anchor" href="#apk"><span>apk</span></a></h1><p>Alpine Linux 下的包管理工具</p><h2 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例"><span>使用实例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apk <span class="token function">install</span> xxx
apk search xxx <span class="token comment"># 支持正则</span>
apk info xxx <span class="token comment"># 查看包的详细信息</span>
apk show <span class="token comment"># list local package</span>
<span class="token comment"># 卸载并删除 包</span>
apk del openssh openntp <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="升级" tabindex="-1"><a class="header-anchor" href="#升级"><span>升级</span></a></h3><p>upgrade命令升级系统已安装的所以软件包（一般包括内核），当然也可指定仅升级部分软件包（通过-u或–upgrade选择指定）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apk update <span class="token comment"># 更新最新本地镜像源</span>
apk upgrade <span class="token comment"># 升级软件</span>
apk <span class="token function">add</span> <span class="token parameter variable">--upgrade</span> busybox <span class="token comment"># 指定升级部分软件包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索"><span>搜索</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apk search <span class="token comment"># 查找所以可用软件包</span>
apk search <span class="token parameter variable">-v</span> <span class="token comment"># 查找所以可用软件包及其描述内容</span>
apk search <span class="token parameter variable">-v</span> <span class="token string">&#39;acf*&#39;</span> <span class="token comment"># 通过软件包名称查找软件包</span>
apk search <span class="token parameter variable">-v</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;docker&#39;</span> <span class="token comment"># 通过描述文件查找特定的软件包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看包信息" tabindex="-1"><a class="header-anchor" href="#查看包信息"><span>查看包信息</span></a></h3><p>info命令用于显示软件包的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apk info <span class="token comment"># 列出所有已安装的软件包</span>
apk info <span class="token parameter variable">-a</span> zlib <span class="token comment"># 显示完整的软件包信息</span>
apk info --who-owns /sbin/lbu <span class="token comment"># 显示指定文件属于的包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记"><span>笔记</span></a></h2><p>还是蛮喜欢 alpine 的，简单纯粹</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>apk <span class="token function">add</span> iproute2 <span class="token comment"># ss vs netstat</span>
ss <span class="token parameter variable">-ptl</span>
apk <span class="token function">add</span> drill <span class="token comment"># drill vs nslookup&amp;dig</span>

crond <span class="token comment"># 开启 cron 服务</span>
<span class="token function">crontab</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-e</span>

apk <span class="token function">add</span> xxx
apk search <span class="token parameter variable">-v</span> xxx
apk info <span class="token parameter variable">-a</span> xxx
apk info
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;http://mirrors.aliyun.com/alpine/v3.6/main<span class="token entity" title="\\n">\\n</span>http://mirrors.aliyun.com/alpine/v3.6/community&quot;</span> <span class="token operator">&gt;</span> /etc/apk/repositories
apk update

<span class="token comment"># storage</span>
ibu <span class="token comment"># alpine local backup</span>

<span class="token comment"># network</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;shortname&quot;</span> <span class="token operator">&gt;</span> /etc/hostname
<span class="token function">hostname</span> <span class="token parameter variable">-F</span> /etc/hostname
/etc/hosts
/etc/resolv.conf <span class="token comment"># conig DNS</span>
modprobe ipv6 <span class="token comment"># enable ipv6</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ipv6&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/modules
iface <span class="token comment"># config interface</span>
apk <span class="token function">add</span> iptables ip6tables iptables-doc
/etc/init.d/networking restart <span class="token comment"># activate change</span>
apke <span class="token function">add</span> iputils <span class="token comment"># IPv6 traceroute</span>
traceroute6 ipv6.google.com
awall <span class="token comment"># alpine wall</span>
<span class="token comment"># setup a openvpn server</span>

<span class="token comment"># post-install</span>
/etc/apk/repositories
apk <span class="token function">add</span> cherokee --update-cache <span class="token parameter variable">--repository</span> http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted
apk search <span class="token parameter variable">-v</span> <span class="token parameter variable">--description</span> <span class="token string">&#39;NTP&#39;</span> <span class="token comment"># show description and search from description</span>
apk info <span class="token parameter variable">-a</span> zlib
apk info -vv<span class="token operator">|</span><span class="token function">sort</span>
apk info <span class="token parameter variable">-r</span> <span class="token parameter variable">-R</span> <span class="token comment"># require / depency</span>
apk version <span class="token parameter variable">-v</span> <span class="token parameter variable">-l</span> <span class="token string">&#39;&lt;&#39;</span> <span class="token comment"># show available updates</span>
apk upgrade <span class="token parameter variable">-U</span> <span class="token parameter variable">-a</span>
apk <span class="token function">add</span> <span class="token parameter variable">-u</span> xxx <span class="token comment"># update xxx</span>

/etc/runlevels <span class="token comment"># runlevel</span>
apk <span class="token function">add</span> openrc <span class="token comment"># use openrc for init system</span>
rc-update <span class="token function">add</span> xxx <span class="token comment"># set to start on</span>
rc-service xxx start <span class="token comment"># equal -&gt; /etc/init.d/xxx start</span>
rc-status

adduser xxx
<span class="token function">passwd</span> xxx

apk <span class="token function">add</span> ansible <span class="token comment"># server</span>
ssh-keygen
/etc/ansible/hosts
apk <span class="token function">add</span> python <span class="token comment"># node</span>
ssh-copy-id

apk <span class="token function">add</span> <span class="token function">man</span> man-pages mdocml-apropos <span class="token function">less</span> less-doc
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PAGER</span><span class="token operator">=</span>less
/etc/rc.conf <span class="token comment"># /etc/rc.conf -&gt; funny character</span>
apk <span class="token function">add</span> <span class="token function">bash</span> bash-doc bash-completion <span class="token comment"># bash</span>
apk <span class="token function">add</span> util-linux pciutils usbutils coreutils binutils findutils <span class="token function">grep</span> <span class="token comment"># grep / awk</span>
apk <span class="token function">add</span> build-base gcc abuild binutils binutils-doc gcc-doc <span class="token comment"># compile</span>
apk <span class="token function">add</span> cmake cmake-doc extra-cmake-modules extra-cmake-modules-doc
apk <span class="token function">add</span> ccache ccache-doc

apk <span class="token function">add</span> <span class="token function">docker</span> <span class="token comment"># docker</span>
rc-update <span class="token function">add</span> <span class="token function">docker</span> boot
rc-service <span class="token function">docker</span> start
apk <span class="token function">add</span> py-pip
pip <span class="token function">install</span> <span class="token function">docker-compose</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/bin/docker-compose /usr/bin/doc

<span class="token comment"># application</span>
apk <span class="token function">add</span> openssh <span class="token comment"># ssh</span>
rc-update <span class="token function">add</span> sshd
/etc/init.d/sshd start
/etc/sshd_config
apk <span class="token function">add</span> dropbear <span class="token comment"># another openssh implementation</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[l];function c(p,o){return a(),s("div",null,t)}const m=n(i,[["render",c],["__file","apk.html.vue"]]),v=JSON.parse('{"path":"/command/linux/apk.html","title":"apk","lang":"zh-CN","frontmatter":{"description":"apk Alpine Linux 下的包管理工具 使用实例 升级 upgrade命令升级系统已安装的所以软件包（一般包括内核），当然也可指定仅升级部分软件包（通过-u或–upgrade选择指定）。 搜索 查看包信息 info命令用于显示软件包的信息。 笔记 还是蛮喜欢 alpine 的，简单纯粹","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/apk.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"apk"}],["meta",{"property":"og:description","content":"apk Alpine Linux 下的包管理工具 使用实例 升级 upgrade命令升级系统已安装的所以软件包（一般包括内核），当然也可指定仅升级部分软件包（通过-u或–upgrade选择指定）。 搜索 查看包信息 info命令用于显示软件包的信息。 笔记 还是蛮喜欢 alpine 的，简单纯粹"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"apk\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"使用实例","slug":"使用实例","link":"#使用实例","children":[{"level":3,"title":"升级","slug":"升级","link":"#升级","children":[]},{"level":3,"title":"搜索","slug":"搜索","link":"#搜索","children":[]},{"level":3,"title":"查看包信息","slug":"查看包信息","link":"#查看包信息","children":[]}]},{"level":2,"title":"笔记","slug":"笔记","link":"#笔记","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.94,"words":581},"filePathRelative":"command/linux/apk.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};
