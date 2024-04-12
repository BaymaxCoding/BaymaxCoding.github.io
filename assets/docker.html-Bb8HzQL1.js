import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-D_HUMAmc.js";const i={},t=a(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h1><p>容器化技术，可以将应用程序及其依赖项打包到一个可移植的容器中，使其可以在不同的环境中运行</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>Docker 容器可以快速部署、可移植、可扩展，并且可以在不同的平台上运行。Docker 可以帮助开发人员和运维人员更轻松地构建、发布和管理应用程序。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>在 Linux 中输入以下命令安装 Docker。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># CentOS    参考：https://blog.csdn.net/zhaoyuanh/article/details/126610347</span>
<span class="token comment">#如果系统里有旧版本docker的话需要先行删除：</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine

<span class="token comment">#设置仓库：</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils

<span class="token comment">#添加Docker仓库：</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

<span class="token comment">#安装Docker引擎(默认最新):</span>
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin

<span class="token comment">#启动docker:</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token punctuation">[</span>options<span class="token punctuation">]</span> IMAGE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="选项参数" tabindex="-1"><a class="header-anchor" href="#选项参数"><span>选项参数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>attach	将本地标准输入、输出和错误流附加到正在运行的容器
build	从 Dockerfile 构建镜像
commit	从容器的更改创建新镜像
<span class="token function">cp</span>	在容器和本地文件系统之间复制文件/文件夹
create	创建一个新容器
<span class="token function">diff</span>	检查容器文件系统上文件或目录的更改
events	从服务器获取实时事件
<span class="token builtin class-name">exec</span>	在正在运行的容器中运行命令
<span class="token builtin class-name">export</span>	将容器的文件系统导出为 <span class="token function">tar</span> 存档
<span class="token function">history</span>	显示镜像的历史
images	列出镜像
<span class="token function">import</span>	从 tarball 导入内容以创建文件系统映像
info	显示系统范围的信息
inspect	返回有关 Docker 对象的低级信息
<span class="token function">kill</span>	杀死一个或多个正在运行的容器
load	从 <span class="token function">tar</span> 存档或 STDIN 加载镜像
login	登录到 Docker 注册表
<span class="token builtin class-name">logout</span>	从 Docker 注册表中注销
logs	获取容器的日志
pause	暂停一个或多个容器内的所有进程
port	列出容器的端口映射或特定映射
<span class="token function">ps</span>	列出容器
pull	从注册表中提取镜像或存储库
push	将镜像或存储库推送到注册表
<span class="token function">rename</span>	重命名容器
restart	重启一个或多个容器
<span class="token function">rm</span>	移除一个或多个容器
rmi	移除一张或多张镜像
run	在新容器中运行命令
save	将一个或多个镜像保存到 <span class="token function">tar</span> 存档（默认流式传输到 STDOUT）
search	在 Docker Hub 中搜索镜像
start	启动一个或多个停止的容器
stats	显示容器资源使用统计的实时流
stop	停止一个或多个正在运行的容器
tag	创建一个引用 SOURCE_IMAGE 的标记 TARGET_IMAGE
<span class="token function">top</span>	显示容器的运行进程
unpause	取消暂停一个或多个容器中的所有进程
update	更新一个或多个容器的配置
version	显示 Docker 版本信息
<span class="token function">wait</span>	阻塞直到一个或多个容器停止，然后打印它们的退出代码

<span class="token operator">&lt;</span>环境参数<span class="token operator">&gt;</span>
    --add-host list            <span class="token comment"># 添加自定义主机到 IP 映射 (host:ip)</span>
-a, <span class="token parameter variable">--attach</span> list              <span class="token comment"># 连接到 STDIN、STDOUT 或 STDERR</span>
    --blkio-weight uint16      <span class="token comment"># 块 IO（相对权重），介于 10 和 1000 之间，或 0 禁用（默认 0）</span>
    --blkio-weight-device list <span class="token comment"># 块 IO 权重（相对设备权重）（默认 []）</span>
    --cap-add list             <span class="token comment"># 添加 Linux 功能</span>
    --cap-drop list            <span class="token comment"># 放弃 Linux 功能</span>
    --cgroup-parent string     <span class="token comment"># 容器的可选父 cgroup</span>
    <span class="token parameter variable">--cgroupns</span> string   <span class="token comment"># 要使用的 Cgroup 命名空间（主机|私有）</span>
                        <span class="token comment">#  &#39;host&#39;:    在 Docker 主机的 cgroup 命名空间中运行容器</span>
                        <span class="token comment">#  &#39;private&#39;: 在自己的私有 cgroup 命名空间中运行容器</span>
                        <span class="token comment">#  &#39;&#39;:        使用由守护进程上的 </span>
                        <span class="token comment">#        default-cgroupns-mode 选项配置的 cgroup 命名空间（默认）</span>
    <span class="token parameter variable">--cidfile</span> string           <span class="token comment"># 将容器 ID 写入文件</span>
    --cpu-period int           <span class="token comment"># 限制 CPU CFS（完全公平调度器）周期</span>
    --cpu-quota int            <span class="token comment"># 限制 CPU CFS（完全公平调度器）配额</span>
    --cpu-rt-period int        <span class="token comment"># 以微秒为单位限制 CPU 实时周期</span>
    --cpu-rt-runtime int       <span class="token comment"># 以微秒为单位限制 CPU 实时运行时间</span>
-c, --cpu-shares int           <span class="token comment"># CPU 份额（相对权重）</span>
    <span class="token parameter variable">--cpus</span> decimal             <span class="token comment"># CPU 数量</span>
    --cpuset-cpus string       <span class="token comment"># 允许执行的 CPU (0-3, 0,1)</span>
    --cpuset-mems string       <span class="token comment"># 允许执行的 MEM (0-3, 0,1)</span>
    <span class="token parameter variable">--device</span> list              <span class="token comment"># 将主机设备添加到容器</span>
    --device-cgroup-rule list  <span class="token comment"># 将规则添加到 cgroup 允许的设备列表</span>
    --device-read-bps list     <span class="token comment"># 限制设备的读取速率（每秒字节数）（默认 []）</span>
    --device-read-iops list    <span class="token comment"># 限制设备的读取速率（每秒 IO）（默认 []）</span>
    --device-write-bps list    <span class="token comment"># 限制设备的写入速率（每秒字节数）（默认 []）</span>
    --device-write-iops list   <span class="token comment"># 限制设备的写入速率（每秒 IO）（默认 []）</span>
    --disable-content-trust    <span class="token comment"># 跳过镜像验证（默认为 true）</span>
    <span class="token parameter variable">--dns</span> list                 <span class="token comment"># 设置自定义 DNS 服务器</span>
    --dns-option list          <span class="token comment"># 设置 DNS 选项</span>
    --dns-search list          <span class="token comment"># 设置自定义 DNS 搜索域</span>
    <span class="token parameter variable">--domainname</span> string        <span class="token comment"># 容器 NIS 域名</span>
    <span class="token parameter variable">--entrypoint</span> string        <span class="token comment"># 覆盖镜像的默认入口点</span>
-e, <span class="token parameter variable">--env</span> list                 <span class="token comment"># 设置环境变量</span>
    --env-file list            <span class="token comment"># 读入环境变量文件</span>
    <span class="token parameter variable">--expose</span> list              <span class="token comment"># 公开一个端口或一系列端口</span>
    <span class="token parameter variable">--gpus</span> gpu-request         <span class="token comment"># 要添加到容器中的 GPU 设备（“全部”以传递所有 GPU）</span>
    --group-add list           <span class="token comment"># 添加其他组以加入</span>
    --health-cmd string        <span class="token comment"># 运行以检查运行状况的命令</span>
    --health-interval duration <span class="token comment"># 运行检查之间的时间 (ms|s|m|h) (默认 0s)</span>
    --health-retries int           <span class="token comment"># 需要报告不健康的连续失败</span>
    --health-start-period duration <span class="token comment"># 开始健康重试倒计时之前容器初始化的开始时间（ms|s|m|h）（默认 0s）</span>
    --health-timeout duration      <span class="token comment"># 允许运行一项检查的最长时间 (ms|s|m|h) (默认 0s)</span>
    <span class="token parameter variable">--help</span>                     <span class="token comment"># 打印使用</span>
-h, <span class="token parameter variable">--hostname</span> string          <span class="token comment"># 容器主机名</span>
    <span class="token parameter variable">--init</span>                     <span class="token comment"># 在容器内运行一个 init 来转发信号并收获进程</span>
-i, <span class="token parameter variable">--interactive</span>              <span class="token comment"># 即使没有连接，也保持 STDIN 打开</span>
    <span class="token parameter variable">--ip</span> string                <span class="token comment"># IPv4 地址（例如 172.30.100.104）</span>
    <span class="token parameter variable">--ip6</span> string               <span class="token comment"># IPv6 地址（例如，2001:db8::33）</span>
    <span class="token parameter variable">--ipc</span> string               <span class="token comment"># 要使用的 IPC 模式</span>
    <span class="token parameter variable">--isolation</span> string         <span class="token comment"># 容器隔离技术</span>
    --kernel-memory bytes      <span class="token comment"># 内核内存限制</span>
-l, <span class="token parameter variable">--label</span> list               <span class="token comment"># 在容器上设置元数据</span>
    --label-file list          <span class="token comment"># 读入以行分隔的标签文件</span>
    <span class="token parameter variable">--link</span> list                <span class="token comment"># 添加到另一个容器的链接</span>
    --link-local-ip list       <span class="token comment"># 容器 IPv4/IPv6 链路本地地址</span>
    --log-driver string        <span class="token comment"># 容器的日志记录驱动程序</span>
    --log-opt list             <span class="token comment"># 日志驱动程序选项</span>
    --mac-address string       <span class="token comment"># 容器 MAC 地址（例如 92:d0:c6:0a:29:33）</span>
-m, <span class="token parameter variable">--memory</span> bytes             <span class="token comment"># 内存限制</span>
    --memory-reservation bytes <span class="token comment"># 内存软限制</span>
    --memory-swap bytes        <span class="token comment"># 交换限制等于内存加上交换：&#39;-1&#39; 启用无限交换</span>
    --memory-swappiness int    <span class="token comment"># 调整容器内存交换（0 到 100）（默认 -1）</span>
    <span class="token parameter variable">--mount</span> <span class="token function">mount</span>              <span class="token comment"># 将文件系统挂载附加到容器</span>
    <span class="token parameter variable">--name</span> string              <span class="token comment"># 为容器分配名称</span>
    <span class="token parameter variable">--network</span> network          <span class="token comment"># 将容器连接到网络</span>
    --network-alias list       <span class="token comment"># 为容器添加网络范围的别名</span>
    --no-healthcheck           <span class="token comment"># 禁用任何容器指定的 HEALTHCHECK</span>
    --oom-kill-disable         <span class="token comment"># 禁用 OOM 杀手</span>
    --oom-score-adj int        <span class="token comment"># 调整主机的 OOM 首选项（-1000 到 1000）</span>
    <span class="token parameter variable">--pid</span> string               <span class="token comment"># 要使用的 PID 命名空间</span>
    --pids-limit int           <span class="token comment"># 调整容器 pids 限制（设置 -1 表示无限制）</span>
    <span class="token parameter variable">--platform</span> string          <span class="token comment"># 如果服务器支持多平台，则设置平台</span>
    <span class="token parameter variable">--privileged</span>               <span class="token comment"># 授予此容器扩展权限</span>
-p, <span class="token parameter variable">--publish</span> list             <span class="token comment"># 将容器的端口发布到主机</span>
-P, --publish-all              <span class="token comment"># 将所有暴露的端口发布到随机端口</span>
    <span class="token parameter variable">--pull</span> string              <span class="token comment"># 创建前拉取镜像(&quot;always&quot;|&quot;missing&quot;|&quot;never&quot;)(默认&quot;missing&quot;)</span>
    --read-only                <span class="token comment"># 将容器的根文件系统挂载为只读</span>
    <span class="token parameter variable">--restart</span> string           <span class="token comment"># 容器退出时应用的重启策略（默认“否”）</span>
    <span class="token parameter variable">--rm</span>                       <span class="token comment"># 容器退出时自动移除</span>
    <span class="token parameter variable">--runtime</span> string           <span class="token comment"># 用于此容器的运行时</span>
    --security-opt list        <span class="token comment"># 安全选项</span>
    --shm-size bytes           <span class="token comment"># /dev/shm 的大小</span>
    --stop-signal string       <span class="token comment"># 停止容器的信号（默认“SIGTERM”）</span>
    --stop-timeout int         <span class="token comment"># 停止容器的超时（以秒为单位）</span>
    --storage-opt list         <span class="token comment"># 容器的存储驱动程序选项</span>
    <span class="token parameter variable">--sysctl</span> map               <span class="token comment"># Sysctl 选项（默认 map[]）</span>
    <span class="token parameter variable">--tmpfs</span> list               <span class="token comment"># 挂载 tmpfs 目录</span>
-t, <span class="token parameter variable">--tty</span>                      <span class="token comment"># 分配一个伪 TTY</span>
    <span class="token parameter variable">--ulimit</span> <span class="token builtin class-name">ulimit</span>            <span class="token comment"># ulimit 选项（默认 []）</span>
-u, <span class="token parameter variable">--user</span> string              <span class="token comment"># 用户名或 UID（格式：&lt;name|uid&gt;[:&lt;group|gid&gt;]）</span>
    <span class="token parameter variable">--userns</span> string            <span class="token comment"># 要使用的用户命名空间</span>
    <span class="token parameter variable">--uts</span> string               <span class="token comment"># 要使用的 UTS 命名空间</span>
-v, <span class="token parameter variable">--volume</span> list              <span class="token comment"># 绑定挂载卷</span>
    --volume-driver string     <span class="token comment"># 容器的可选卷驱动程序</span>
    --volumes-from list        <span class="token comment"># 从指定容器挂载卷</span>
-w, <span class="token parameter variable">--workdir</span> string           <span class="token comment"># 容器内的工作目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h2><p>介绍几个常用场景：Docker Hub镜像市场相关，镜像仓库命令。</p><p>1、下载docker hub镜像市场中的镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull user/image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在 docker hub 中搜索镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 注意需要下载镜像才能使用</span>
<span class="token function">docker</span> search search_word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、向 docker hub 进行身份验证。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、将镜像上传到 docker hub。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> push user/image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-network" tabindex="-1"><a class="header-anchor" href="#docker-network"><span>docker network</span></a></h2><h2 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker network [COMMAND]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="command" tabindex="-1"><a class="header-anchor" href="#command"><span>COMMAND</span></a></h2><h3 id="docker-network-connect" tabindex="-1"><a class="header-anchor" href="#docker-network-connect"><span>docker network connect</span></a></h3><p>将容器连接到网络。您可以按名称或ID连接容器。连接后，容器可以与同一网络中的其他容器通信。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network connect <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NETWORK CONTAINER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选项参数-1" tabindex="-1"><a class="header-anchor" href="#选项参数-1"><span>选项参数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">--alias</span>	为容器添加网络范围的别名
--driver-opt	网络的驱动程序选项
<span class="token parameter variable">--ip</span>	IPv4地址（例如172.30.100.104）
<span class="token parameter variable">--ip6</span>	IPv6地址（例如2001：db8 :: <span class="token number">33</span>）
<span class="token parameter variable">--link</span>	将链接添加到另一个容器<span class="token punctuation">(</span>建议不用,后期应该会删除的<span class="token punctuation">)</span>
--link-local-ip	为容器添加本地链接地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-network-disconnect" tabindex="-1"><a class="header-anchor" href="#docker-network-disconnect"><span>docker network disconnect</span></a></h3><p>断开容器与网络的连接</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network disconnect <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NETWORK CONTAINER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选项参数-2" tabindex="-1"><a class="header-anchor" href="#选项参数-2"><span>选项参数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-f,--force	强制容器断开网络连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-network-create" tabindex="-1"><a class="header-anchor" href="#docker-network-create"><span>docker network create</span></a></h3><p>创建一个新的网络</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NETWORK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选项参数-3" tabindex="-1"><a class="header-anchor" href="#选项参数-3"><span>选项参数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">--attachable</span>		API <span class="token number">1.25</span>+启用手动容器附件
--aux-address		网络驱动程序使用的辅助IPv4或IPv6地址
--config-from		API <span class="token number">1.30</span>+从中复制配置的网络
--config-only		API <span class="token number">1.30</span>+创建仅配置网络
-d,--driver	bridge	驱动程序来管理网络
<span class="token parameter variable">--gateway</span>		主子网的IPv4或IPv6网关
<span class="token parameter variable">--ingress</span>		API <span class="token number">1.29</span>+创建群集路由网状网络
<span class="token parameter variable">--internal</span>		限制外部访问网络
--ip-range		从子范围分配容器ip
--ipam-driver		IP地址管理驱动程序
--ipam-opt		设置IPAM驱动程序特定选项
<span class="token parameter variable">--ipv6</span>		启用IPv6网络
<span class="token parameter variable">--label</span>		在网络上设置元数据
-o,--opt		设置驱动程序特定选项
<span class="token parameter variable">--scope</span>		API <span class="token number">1.30</span>+控制网络范围
<span class="token parameter variable">--subnet</span>		代表网段的CIDR格式的子网
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-network-inspect" tabindex="-1"><a class="header-anchor" href="#docker-network-inspect"><span>docker network inspect</span></a></h3><p>返回有关一个或多个网络的信息。默认情况下，此命令将所有结果呈现在JSON对象中。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network inspect <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> NETWORK <span class="token punctuation">[</span>NETWORK<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选项参数-4" tabindex="-1"><a class="header-anchor" href="#选项参数-4"><span>选项参数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-f,--format	使用给定的Go模板格式化输出
-v,--verbose	详细输出以进行诊断
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-network-ls" tabindex="-1"><a class="header-anchor" href="#docker-network-ls"><span>docker network ls</span></a></h3><p>列出引擎daemon知道的所有网络。这包括跨群集中多个主机的网络</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选项参数-5" tabindex="-1"><a class="header-anchor" href="#选项参数-5"><span>选项参数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-f,--filter	提供过滤器值（例如<span class="token string">&quot;driver = bridge&quot;</span>）
<span class="token parameter variable">--format</span>	使用Go模板的精美印刷网络
--no-trunc	不要截断输出
-q,--quiet	仅显示网络ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-network-prune" tabindex="-1"><a class="header-anchor" href="#docker-network-prune"><span>docker network prune</span></a></h3><p>删除所有未使用的网络。未使用的网络是未被任何正在使用的容器引用的网络()。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="选项参数-6" tabindex="-1"><a class="header-anchor" href="#选项参数-6"><span>选项参数</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">--filter</span>	提供过滤器值（例如<span class="token string">&#39;until =&#39;</span>）
-f,--force	不提示确认
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-network-rm" tabindex="-1"><a class="header-anchor" href="#docker-network-rm"><span>docker network rm</span></a></h3><p>按名称或标识符删除一个或多个网络。要删除网络，必须首先断开连接到它的所有容器。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">rm</span> NETWORKID <span class="token punctuation">[</span>NETWORKID<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="官网" tabindex="-1"><a class="header-anchor" href="#官网"><span>官网</span></a></h2><p>更多安装使用方法可以访问学习：https://wangchujiang.com/reference/docs/docker.html 由上海 屠天煜编写</p>`,60),l=[t];function c(r,d){return s(),e("div",null,l)}const m=n(i,[["render",c],["__file","docker.html.vue"]]),v=JSON.parse('{"path":"/command/linux/docker.html","title":"docker","lang":"zh-CN","frontmatter":{"description":"docker 容器化技术，可以将应用程序及其依赖项打包到一个可移植的容器中，使其可以在不同的环境中运行 补充说明 Docker 容器可以快速部署、可移植、可扩展，并且可以在不同的平台上运行。Docker 可以帮助开发人员和运维人员更轻松地构建、发布和管理应用程序。 安装 在 Linux 中输入以下命令安装 Docker。 语法 选项参数 实例 介绍几个...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/docker.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"docker"}],["meta",{"property":"og:description","content":"docker 容器化技术，可以将应用程序及其依赖项打包到一个可移植的容器中，使其可以在不同的环境中运行 补充说明 Docker 容器可以快速部署、可移植、可扩展，并且可以在不同的平台上运行。Docker 可以帮助开发人员和运维人员更轻松地构建、发布和管理应用程序。 安装 在 Linux 中输入以下命令安装 Docker。 语法 选项参数 实例 介绍几个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"选项参数","slug":"选项参数","link":"#选项参数","children":[]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[]},{"level":2,"title":"docker network","slug":"docker-network","link":"#docker-network","children":[]},{"level":2,"title":"语法","slug":"语法-1","link":"#语法-1","children":[]},{"level":2,"title":"COMMAND","slug":"command","link":"#command","children":[{"level":3,"title":"docker network connect","slug":"docker-network-connect","link":"#docker-network-connect","children":[]},{"level":3,"title":"docker network disconnect","slug":"docker-network-disconnect","link":"#docker-network-disconnect","children":[]},{"level":3,"title":"docker network create","slug":"docker-network-create","link":"#docker-network-create","children":[]},{"level":3,"title":"docker network inspect","slug":"docker-network-inspect","link":"#docker-network-inspect","children":[]},{"level":3,"title":"docker network ls","slug":"docker-network-ls","link":"#docker-network-ls","children":[]},{"level":3,"title":"docker network prune","slug":"docker-network-prune","link":"#docker-network-prune","children":[]},{"level":3,"title":"docker network rm","slug":"docker-network-rm","link":"#docker-network-rm","children":[]}]},{"level":2,"title":"官网","slug":"官网","link":"#官网","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":9.2,"words":2761},"filePathRelative":"command/linux/docker.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};
