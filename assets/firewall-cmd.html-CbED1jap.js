import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as e}from"./app-CHACLx4z.js";const t={},p=e(`<h1 id="firewall-cmd" tabindex="-1"><a class="header-anchor" href="#firewall-cmd"><span>firewall-cmd</span></a></h1><p>Linux上新用的防火墙软件，跟iptables差不多的工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>firewall-cmd 是 firewalld的字符界面管理工具，firewalld是centos7的一大特性，最大的好处有两个：支持动态更新，不用重启服务；第二个就是加入了防火墙的“zone”概念。</p><p>firewalld跟iptables比起来至少有两大好处：</p><ol><li>firewalld可以动态修改单条规则，而不需要像iptables那样，在修改了规则后必须得全部刷新才可以生效。</li><li>firewalld在使用上要比iptables人性化很多，即使不明白“五张表五条链”而且对TCP/IP协议也不理解也可以实现大部分功能。</li></ol><p>firewalld自身并不具备防火墙的功能，而是和iptables一样需要通过内核的netfilter来实现，也就是说firewalld和 iptables一样，他们的作用都是用于维护规则，而真正使用规则干活的是内核的netfilter，只不过firewalld和iptables的结 构以及使用方法不一样罢了。</p><p><strong>命令格式</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token punctuation">[</span>选项 <span class="token punctuation">..</span>. <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><p>通用选项</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-h, <span class="token parameter variable">--help</span>    <span class="token comment"># 显示帮助信息；</span>
-V, <span class="token parameter variable">--version</span> <span class="token comment"># 显示版本信息. （这个选项不能与其他选项组合）；</span>
-q, <span class="token parameter variable">--quiet</span>   <span class="token comment"># 不打印状态消息；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>状态选项</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">--state</span>                <span class="token comment"># 显示firewalld的状态；</span>
<span class="token parameter variable">--reload</span>               <span class="token comment"># 不中断服务的重新加载；</span>
--complete-reload      <span class="token comment"># 中断所有连接的重新加载；</span>
--runtime-to-permanent <span class="token comment"># 将当前防火墙的规则永久保存；</span>
--check-config         <span class="token comment"># 检查配置正确性；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日志选项</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>--get-log-denied         <span class="token comment"># 获取记录被拒绝的日志；</span>
--set-log-denied<span class="token operator">=</span><span class="token operator">&lt;</span>value<span class="token operator">&gt;</span> <span class="token comment"># 设置记录被拒绝的日志，只能为 &#39;all&#39;,&#39;unicast&#39;,&#39;broadcast&#39;,&#39;multicast&#39;,&#39;off&#39; 其中的一个；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装firewalld</span>
yum <span class="token function">install</span> firewalld firewall-config

systemctl start  firewalld <span class="token comment"># 启动</span>
systemctl stop firewalld  <span class="token comment"># 停止</span>
systemctl <span class="token builtin class-name">enable</span> firewalld <span class="token comment"># 启用自动启动</span>
systemctl disable firewalld <span class="token comment"># 禁用自动启动</span>
systemctl status firewalld <span class="token comment"># 或者 firewall-cmd --state 查看状态</span>

<span class="token comment"># 关闭服务的方法</span>
<span class="token comment"># 你也可以关闭目前还不熟悉的FirewallD防火墙，而使用iptables，命令如下：</span>

systemctl stop firewalld
systemctl disable firewalld
yum <span class="token function">install</span> iptables-services
systemctl start iptables
systemctl <span class="token builtin class-name">enable</span> iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置firewalld</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--version</span>  <span class="token comment"># 查看版本</span>
firewall-cmd <span class="token parameter variable">--help</span>     <span class="token comment"># 查看帮助</span>

<span class="token comment"># 查看设置：</span>
firewall-cmd <span class="token parameter variable">--state</span>  <span class="token comment"># 显示状态</span>
firewall-cmd --get-active-zones  <span class="token comment"># 查看区域信息</span>
firewall-cmd --get-zone-of-interface<span class="token operator">=</span>eth0  <span class="token comment"># 查看指定接口所属区域</span>
firewall-cmd --panic-on  <span class="token comment"># 拒绝所有包</span>
firewall-cmd --panic-off  <span class="token comment"># 取消拒绝状态</span>
firewall-cmd --query-panic  <span class="token comment"># 查看是否拒绝</span>

firewall-cmd <span class="token parameter variable">--reload</span> <span class="token comment"># 更新防火墙规则</span>
firewall-cmd --complete-reload
<span class="token comment"># 两者的区别就是第一个无需断开连接，就是firewalld特性之一动态添加规则，第二个需要断开连接，类似重启服务</span>


<span class="token comment"># 将接口添加到区域，默认接口都在public</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-interface<span class="token operator">=</span>eth0
<span class="token comment"># 永久生效再加上 --permanent 然后reload防火墙</span>
 
<span class="token comment"># 设置默认接口区域，立即生效无需重启</span>
firewall-cmd --set-default-zone<span class="token operator">=</span>public

<span class="token comment"># 查看所有打开的端口：</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>dmz --list-ports

<span class="token comment"># 加入一个端口到区域：</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>dmz --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
<span class="token comment"># 若要永久生效方法同上</span>
 
<span class="token comment"># 打开一个服务，类似于将端口可视化，服务需要在配置文件中添加，/etc/firewalld 目录下有services文件夹，这个不详细说了，详情参考文档</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>work --add-service<span class="token operator">=</span>smtp
 
<span class="token comment"># 移除服务</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>work --remove-service<span class="token operator">=</span>smtp

<span class="token comment"># 显示支持的区域列表</span>
firewall-cmd --get-zones

<span class="token comment"># 设置为家庭区域</span>
firewall-cmd --set-default-zone<span class="token operator">=</span>home

<span class="token comment"># 查看当前区域</span>
firewall-cmd --get-active-zones

<span class="token comment"># 设置当前区域的接口</span>
firewall-cmd --get-zone-of-interface<span class="token operator">=</span>enp03s

<span class="token comment"># 显示所有公共区域（public）</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-all

<span class="token comment"># 临时修改网络接口（enp0s3）为内部区域（internal）</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>internal --change-interface<span class="token operator">=</span>enp03s

<span class="token comment"># 永久修改网络接口enp03s为内部区域（internal）</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>internal --change-interface<span class="token operator">=</span>enp03s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务管理</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 显示服务列表  </span>
Amanda, FTP, Samba和TFTP等最重要的服务已经被FirewallD提供相应的服务，可以使用如下命令查看：

firewall-cmd --get-services

<span class="token comment"># 允许SSH服务通过</span>
firewall-cmd --new-service<span class="token operator">=</span>ssh

<span class="token comment"># 禁止SSH服务通过</span>
firewall-cmd --delete-service<span class="token operator">=</span>ssh

<span class="token comment"># 打开TCP的8080端口</span>
firewall-cmd <span class="token parameter variable">--enable</span> <span class="token assign-left variable">ports</span><span class="token operator">=</span><span class="token number">8080</span>/tcp

<span class="token comment"># 临时允许Samba服务通过600秒</span>
firewall-cmd <span class="token parameter variable">--enable</span> <span class="token assign-left variable">service</span><span class="token operator">=</span>samba <span class="token parameter variable">--timeout</span><span class="token operator">=</span><span class="token number">600</span>

<span class="token comment"># 显示当前服务</span>
firewall-cmd --list-services

<span class="token comment"># 添加HTTP服务到内部区域（internal）</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>internal --add-service<span class="token operator">=</span>http
firewall-cmd <span class="token parameter variable">--reload</span>     <span class="token comment"># 在不改变状态的条件下重新加载防火墙</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>端口管理</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 打开443/TCP端口</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">443</span>/tcp

<span class="token comment"># 永久打开3690/TCP端口</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">3690</span>/tcp

<span class="token comment"># 永久打开端口好像需要reload一下，临时打开好像不用，如果用了reload临时打开的端口就失效了</span>
<span class="token comment"># 其它服务也可能是这样的，这个没有测试</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 查看防火墙，添加的端口也可以看到</span>
firewall-cmd --list-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接模式</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># FirewallD包括一种直接模式，使用它可以完成一些工作，例如打开TCP协议的9999端口</span>

firewall-cmd <span class="token parameter variable">--direct</span> -add-rule ipv4 filter INPUT <span class="token number">0</span> <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">9000</span> <span class="token parameter variable">-j</span> ACCEPT
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自定义服务管理</strong></p><p>选项</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>（末尾带有 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span> 的话表示该选项除了与（--permanent）之外，不能与其他选项一同使用！）
--new-service<span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> 新建一个自定义服务 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
--new-service-from-file<span class="token operator">=</span><span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--name<span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                      从文件中读取配置用以新建一个自定义服务 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
--delete-service<span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
                      删除一个已存在的服务 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
--load-service-defaults<span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
                      Load icmptype default settings <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
--info-service<span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
                      显示该服务的相关信息
--path-service<span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
                      显示该服务的文件的相关路径 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --set-description<span class="token operator">=</span><span class="token operator">&lt;</span>描述<span class="token operator">&gt;</span>
                      给该服务设置描述信息 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --get-description
                      显示该服务的描述信息 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --set-short<span class="token operator">=</span><span class="token operator">&lt;</span>描述<span class="token operator">&gt;</span>
                      给该服务设置一个简短的描述 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --get-short
                      显示该服务的简短描述 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --add-port<span class="token operator">=</span><span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">[</span>-<span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">]</span>/<span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      给该服务添加一个新的端口<span class="token punctuation">(</span>端口段<span class="token punctuation">)</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --remove-port<span class="token operator">=</span><span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">[</span>-<span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">]</span>/<span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      从该服务上移除一个端口<span class="token punctuation">(</span>端口段<span class="token punctuation">)</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --query-port<span class="token operator">=</span><span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">[</span>-<span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">]</span>/<span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      查询该服务是否添加了某个端口<span class="token punctuation">(</span>端口段<span class="token punctuation">)</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --get-ports
                      显示该服务添加的所有端口 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --add-protocol<span class="token operator">=</span><span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      为该服务添加一个协议 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --remove-protocol<span class="token operator">=</span><span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      从该服务上移除一个协议 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --query-protocol<span class="token operator">=</span><span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      查询该服务是否添加了某个协议 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --get-protocols
                      显示该服务添加的所有协议 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --add-source-port<span class="token operator">=</span><span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">[</span>-<span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">]</span>/<span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      添加新的源端口<span class="token punctuation">(</span>端口段<span class="token punctuation">)</span>到该服务 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --remove-source-port<span class="token operator">=</span><span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">[</span>-<span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">]</span>/<span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      从该服务中删除源端口<span class="token punctuation">(</span>端口段<span class="token punctuation">)</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --query-source-port<span class="token operator">=</span><span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">[</span>-<span class="token operator">&lt;</span>端口号<span class="token operator">&gt;</span><span class="token punctuation">]</span>/<span class="token operator">&lt;</span>protocol<span class="token operator">&gt;</span>
                      查询该服务是否添加了某个源端口<span class="token punctuation">(</span>端口段<span class="token punctuation">)</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --get-source-ports
                      显示该服务所有源端口 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
                      
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --add-module<span class="token operator">=</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
                      为该服务添加一个模块 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --remove-module<span class="token operator">=</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
                      为该服务移除一个模块 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --query-module<span class="token operator">=</span><span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
                      查询该服务是否添加了某个模块 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --get-modules
                      显示该服务添加的所有模块 <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --set-destination<span class="token operator">=</span><span class="token operator">&lt;</span>ipv<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>address<span class="token operator">&gt;</span><span class="token punctuation">[</span>/<span class="token operator">&lt;</span>mask<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                      Set destination <span class="token keyword">for</span> ipv to address <span class="token keyword">in</span> <span class="token function">service</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --remove-destination<span class="token operator">=</span><span class="token operator">&lt;</span>ipv<span class="token operator">&gt;</span>
                      Disable destination <span class="token keyword">for</span> ipv i <span class="token function">service</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --query-destination<span class="token operator">=</span><span class="token operator">&lt;</span>ipv<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>address<span class="token operator">&gt;</span><span class="token punctuation">[</span>/<span class="token operator">&lt;</span>mask<span class="token operator">&gt;</span><span class="token punctuation">]</span>
                      Return whether destination ipv is <span class="token builtin class-name">set</span> <span class="token keyword">for</span> <span class="token function">service</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
<span class="token parameter variable">--service</span><span class="token operator">=</span><span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span> --get-destinations
                      List destinations <span class="token keyword">in</span> <span class="token function">service</span> <span class="token punctuation">[</span>P only<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>控制端口 / 服务</strong></p><p>可以通过两种方式控制端口的开放，一种是指定端口号另一种是指定服务名。虽然开放 http 服务就是开放了 80 端口，但是还是不能通过端口号来关闭，也就是说通过指定服务名开放的就要通过指定服务名关闭；通过指定端口号开放的就要通过指定端口号关闭。还有一个要注意的就是指定端口的时候一定要指定是什么协议，tcp 还是 udp。知道这个之后以后就不用每次先关防火墙了，可以让防火墙真正的生效。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --add-service<span class="token operator">=</span>mysql        <span class="token comment"># 开放mysql端口</span>
firewall-cmd --remove-service<span class="token operator">=</span>http      <span class="token comment"># 阻止http端口</span>
firewall-cmd --list-services            <span class="token comment"># 查看开放的服务</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp        <span class="token comment"># 开放通过tcp访问3306</span>
firewall-cmd --remove-port<span class="token operator">=</span>80tcp        <span class="token comment"># 阻止通过tcp访问3306</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">233</span>/udp         <span class="token comment"># 开放通过udp访问233</span>
firewall-cmd --list-ports               <span class="token comment"># 查看开放的端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>伪装 IP</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --query-masquerade <span class="token comment"># 检查是否允许伪装IP</span>
firewall-cmd --add-masquerade   <span class="token comment"># 允许防火墙伪装IP</span>
firewall-cmd --remove-masquerade<span class="token comment"># 禁止防火墙伪装IP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>端口转发</strong></p><p>端口转发可以将指定地址访问指定的端口时，将流量转发至指定地址的指定端口。转发的目的如果不指定 ip 的话就默认为本机，如果指定了 ip 却没指定端口，则默认使用来源端口。 如果配置好端口转发之后不能用，可以检查下面两个问题：</p><ol><li>比如我将 80 端口转发至 8080 端口，首先检查本地的 80 端口和目标的 8080 端口是否开放监听了</li><li>其次检查是否允许伪装 IP，没允许的话要开启伪装 IP</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd --add-forward-port<span class="token operator">=</span>port<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toport<span class="token operator">=</span><span class="token number">8080</span>   <span class="token comment"># 将80端口的流量转发至8080</span>
firewall-cmd --add-forward-port<span class="token operator">=</span>port<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toaddr<span class="token operator">=</span><span class="token number">192.168</span>.0.1 <span class="token comment"># 将80端口的流量转发至192.168.0.1</span>
firewall-cmd --add-forward-port<span class="token operator">=</span>port<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toaddr<span class="token operator">=</span><span class="token number">192.168</span>.0.1:toport<span class="token operator">=</span><span class="token number">8080</span> <span class="token comment"># 将80端口的流量转发至192.168.0.1的8080端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>当我们想把某个端口隐藏起来的时候，就可以在防火墙上阻止那个端口访问，然后再开一个不规则的端口，之后配置防火墙的端口转发，将流量转发过去。</li><li>端口转发还可以做流量分发，一个防火墙拖着好多台运行着不同服务的机器，然后用防火墙将不同端口的流量转发至不同机器。</li></ol>`,39),l=[p];function o(r,i){return a(),n("div",null,l)}const m=s(t,[["render",o],["__file","firewall-cmd.html.vue"]]),v=JSON.parse('{"path":"/command/linux/firewall-cmd.html","title":"firewall-cmd","lang":"zh-CN","frontmatter":{"description":"firewall-cmd Linux上新用的防火墙软件，跟iptables差不多的工具 补充说明 firewall-cmd 是 firewalld的字符界面管理工具，firewalld是centos7的一大特性，最大的好处有两个：支持动态更新，不用重启服务；第二个就是加入了防火墙的“zone”概念。 firewalld跟iptables比起来至少有两大...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/firewall-cmd.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"firewall-cmd"}],["meta",{"property":"og:description","content":"firewall-cmd Linux上新用的防火墙软件，跟iptables差不多的工具 补充说明 firewall-cmd 是 firewalld的字符界面管理工具，firewalld是centos7的一大特性，最大的好处有两个：支持动态更新，不用重启服务；第二个就是加入了防火墙的“zone”概念。 firewalld跟iptables比起来至少有两大..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"firewall-cmd\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":8.66,"words":2599},"filePathRelative":"command/linux/firewall-cmd.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};
