import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as e}from"./app-CHACLx4z.js";const i={},l=e(`<h1 id="emacs" tabindex="-1"><a class="header-anchor" href="#emacs"><span>emacs</span></a></h1><p>功能强大的全屏文本编辑器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>emacs命令</strong> 是由GNU组织的创始人Richard Stallman开发的一个功能强大的全屏文本编辑器，它支持多种编程语言，具有很多优良的特性。有众多的系统管理员和软件开发者使用emacs。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>emacs<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+<span class="token operator">&lt;</span>行号<span class="token operator">&gt;</span>：启动emacs编辑器，并将光标移动到制定行号的行；
-q：启动emacs编辑器，而不加载初始化文件；
-u<span class="token operator">&lt;</span>用户<span class="token operator">&gt;</span>：启动emacs编辑器时，加载指定用户的初始化文件；
-t<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：启动emacs编辑器时，把指定的文件作为中端，不适用标准输入（stdin）与标准输出（stdout）；
-f<span class="token operator">&lt;</span>函数<span class="token operator">&gt;</span>：执行指定lisp（广泛应用于人工智能领域的编程语言）函数；
-l<span class="token operator">&lt;</span>lisp代码文件<span class="token operator">&gt;</span>：加载指定的lisp代码文件；
-batch：以批处理模式运行emacs编辑器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件：指定要编辑的文本文件。</p><h2 id="emacs命令操作大全" tabindex="-1"><a class="header-anchor" href="#emacs命令操作大全"><span>emacs命令操作大全</span></a></h2><p>基本命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-x C-c <span class="token builtin class-name">:</span> 退出Emacs
C-x C-f <span class="token builtin class-name">:</span> 打开一个文件，如果文件不存在，则创建一个文件
C-g <span class="token builtin class-name">:</span> 取消未完成的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-z <span class="token punctuation">(</span>redefined<span class="token punctuation">)</span>: Undo；原来C-z是挂起Emacs（然后用fg命令调出）；C-x u 是默认的命令； 移动一下光标，再C-z就可以redo
M-d <span class="token builtin class-name">:</span> 删除光标后的词语
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>移动光标</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-v <span class="token builtin class-name">:</span> 向前翻页
M-v <span class="token builtin class-name">:</span> 向后翻页
M-r <span class="token builtin class-name">:</span> 将光标移动到屏幕中间那行
C-a <span class="token builtin class-name">:</span> 移到行首
M-a <span class="token builtin class-name">:</span> 移到句首，从行首到句首之间可能有空格
C-e <span class="token builtin class-name">:</span> 移到行尾
M-e <span class="token builtin class-name">:</span> 移到句尾
M-<span class="token punctuation">{</span> <span class="token builtin class-name">:</span> 向上移动一段
M-<span class="token punctuation">}</span> <span class="token builtin class-name">:</span> 向下移动一段
C-right <span class="token builtin class-name">:</span> 向前移动一个单词
C-left <span class="token builtin class-name">:</span> 向后移动一个单词
C-up <span class="token builtin class-name">:</span> 向前移动一段
C-down <span class="token builtin class-name">:</span> 向后移动一段
M-<span class="token operator">&lt;</span> <span class="token builtin class-name">:</span> 移到整个文本开头
M-<span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 移到整个文本末尾
C-u 数字 命令 <span class="token builtin class-name">:</span> 执行多次<span class="token punctuation">(</span>数字表示次数<span class="token punctuation">)</span>该命令；<span class="token string">&quot;M-数字 命令&quot;</span> 也可以
M-x goto-line <span class="token builtin class-name">:</span> 移动到某一行
C-l <span class="token builtin class-name">:</span> 重绘屏幕，效果就是当前编辑行移动窗口中央
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Buffer 相关</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-x k <span class="token builtin class-name">:</span> 关闭当前buffer
C-x b <span class="token builtin class-name">:</span> 切换到前一个编辑的buffer
C-x C-b <span class="token builtin class-name">:</span> 列出当前所有buffer
C-x C-s <span class="token builtin class-name">:</span> 保存当前buffer
C-x s <span class="token builtin class-name">:</span> 保存所有未保存的buffer，会提示你是否需要保存
C-x C-w <span class="token builtin class-name">:</span> 文件另存为
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拷贝与粘贴</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>M-space <span class="token punctuation">(</span>redefined<span class="token punctuation">)</span>: 设置mark<span class="token punctuation">;</span> C-@ 是默认命令
C-w <span class="token punctuation">(</span>redefined<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> 剪切一块区域；如果没有设置mark，则是剪切一行
M-w <span class="token punctuation">(</span>redefined<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> 拷贝一块区域；如果没有设置mark, 则是拷贝一行
C-k <span class="token builtin class-name">:</span> 从当前位置剪切到行尾
C-y <span class="token builtin class-name">:</span> 粘贴
M-y <span class="token builtin class-name">:</span> 用C-y拉回最近被除去的文本后，换成 M-y可以拉回以前被除去的文本。键入多次的M-y可以拉回更早以前被除去的文本。
C-x r k <span class="token builtin class-name">:</span> 执行矩形区域的剪切
C-x r y <span class="token builtin class-name">:</span> 执行矩形区域的粘贴
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>窗口操作
C-x <span class="token number">0</span> <span class="token builtin class-name">:</span> 关闭当前窗口
C-x <span class="token number">1</span> <span class="token builtin class-name">:</span> 将当前窗口最大化
C-x <span class="token number">2</span> <span class="token builtin class-name">:</span> 垂直分割窗口
C-x <span class="token number">3</span> <span class="token builtin class-name">:</span> 水平分割窗口
M-o <span class="token punctuation">(</span>redefined<span class="token punctuation">)</span> <span class="token builtin class-name">:</span> 在窗口之间切换<span class="token punctuation">;</span> C-x o 是默认命令
C-x <span class="token number">5</span> <span class="token number">1</span>/2/3/0 <span class="token builtin class-name">:</span> 对frame类似的操作
C-x <span class="token operator">&lt;</span> <span class="token builtin class-name">:</span> 窗口内容右卷
C-x <span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 窗口内容左卷（这两个命令在垂直分割窗口后比较有用）
<span class="token punctuation">(</span>C-u<span class="token punctuation">)</span> C-x ^ <span class="token builtin class-name">:</span> 加高当前窗口，如果有C-u，则每次加高4行
<span class="token punctuation">(</span>C-u<span class="token punctuation">)</span> C-x <span class="token punctuation">}</span> <span class="token builtin class-name">:</span> 加宽当前窗口
<span class="token punctuation">(</span>C-u<span class="token punctuation">)</span> C-x <span class="token punctuation">{</span> <span class="token builtin class-name">:</span> 压窄当前窗口
ESC C-v <span class="token builtin class-name">:</span> 在其它窗口进行卷屏操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索和替换</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-s <span class="token builtin class-name">:</span> 向前搜索（增量式搜索）；连续C-s，跳到下一个搜索到的目标
C-s RET <span class="token builtin class-name">:</span> 普通搜索
C-r <span class="token builtin class-name">:</span> 向前搜索
C-s RET C-w <span class="token builtin class-name">:</span> 按单词查询
M-% <span class="token builtin class-name">:</span> 查询替换，也就是替换前会询问一下
M-x replace-string <span class="token builtin class-name">:</span> 普通替换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tags</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>M-<span class="token operator">!</span> etags .c .h <span class="token builtin class-name">:</span> 创建TAGS文件
M-. <span class="token builtin class-name">:</span> 跳到tag所在位置
M-x list-tags <span class="token builtin class-name">:</span> 列出tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>书签</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-x r m <span class="token builtin class-name">:</span> 设置书签bookmark
C-x r b <span class="token builtin class-name">:</span> 跳到bookmark处
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>帮助</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-h ? <span class="token builtin class-name">:</span> 查看帮助信息
C-h f <span class="token builtin class-name">:</span> 查看一个函数
C-h <span class="token function">v</span> <span class="token builtin class-name">:</span> 查看一个变量
C-h k <span class="token builtin class-name">:</span> 查看一个键绑定 <span class="token punctuation">(</span>C－h c 也是查看键绑定，但是信息较简略<span class="token punctuation">)</span>
C-h C-f <span class="token builtin class-name">:</span> 查看一个函数的info，非常有用
C-h i <span class="token builtin class-name">:</span> 看Info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其它</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>C-M-<span class="token punctuation">\\</span> <span class="token builtin class-name">:</span> 对选中区域，按照某种格式<span class="token punctuation">(</span>比如C程序<span class="token punctuation">)</span>进行格式化
C-x h <span class="token builtin class-name">:</span> 全部选中
M-<span class="token operator">!</span> <span class="token builtin class-name">:</span> 执行外部shell命令
M-x shell <span class="token builtin class-name">:</span> 模拟shell的buffer
M-x term <span class="token builtin class-name">:</span> 模拟terminal, C-c k 关闭terminal
C-x C-q <span class="token builtin class-name">:</span> 修改buffer的只读属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),t=[l];function c(p,d){return n(),a("div",null,t)}const r=s(i,[["render",c],["__file","emacs.html.vue"]]),m=JSON.parse('{"path":"/command/linux/emacs.html","title":"emacs","lang":"zh-CN","frontmatter":{"description":"emacs 功能强大的全屏文本编辑器 补充说明 emacs命令 是由GNU组织的创始人Richard Stallman开发的一个功能强大的全屏文本编辑器，它支持多种编程语言，具有很多优良的特性。有众多的系统管理员和软件开发者使用emacs。 语法 选项 参数 文件：指定要编辑的文本文件。 emacs命令操作大全 基本命令 编辑 移动光标 Buffer ...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/emacs.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"emacs"}],["meta",{"property":"og:description","content":"emacs 功能强大的全屏文本编辑器 补充说明 emacs命令 是由GNU组织的创始人Richard Stallman开发的一个功能强大的全屏文本编辑器，它支持多种编程语言，具有很多优良的特性。有众多的系统管理员和软件开发者使用emacs。 语法 选项 参数 文件：指定要编辑的文本文件。 emacs命令操作大全 基本命令 编辑 移动光标 Buffer ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"emacs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]}]},{"level":2,"title":"emacs命令操作大全","slug":"emacs命令操作大全","link":"#emacs命令操作大全","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":4.1,"words":1230},"filePathRelative":"command/linux/emacs.md","localizedDate":"2024年4月12日","autoDesc":true}');export{r as comp,m as data};
