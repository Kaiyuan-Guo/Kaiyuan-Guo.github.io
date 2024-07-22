import{_ as p,r as o,o as c,c as l,b as n,d as s,e,a as t}from"./app-BLs4FKGw.js";const i={},r=t(`<h2 id="一、什么是-websocket" tabindex="-1"><a class="header-anchor" href="#一、什么是-websocket"><span>一、什么是 WebSocket</span></a></h2><h3 id="_1-1-websocket-诞生背景" tabindex="-1"><a class="header-anchor" href="#_1-1-websocket-诞生背景"><span>1.1 WebSocket 诞生背景</span></a></h3><p>早期，很多网站为了实现推送技术，所用的技术都是轮询。轮询是指由浏览器每隔一段时间向服务器发出 HTTP 请求，然后服务器返回最新的数据给客户端。常见的轮询方式分为轮询与长轮询，它们的区别如下图所示：</p><p><img src="https://qingyuan-1316724565.cos.ap-beijing.myqcloud.com/picture/2023/10/05/20-59-08-17390e1a4971badd-tplv-t2oaga2asx-jj-mark-3024-0-0-0-q75-5f18fe.webp" alt="img"></p><p>这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而 HTTP 请求与响应可能会包含较长的头部，其中真正有效的数据可能只是很小的一部分，所以这样会消耗很多带宽资源。</p><p>比较新的轮询技术是 Comet。这种技术虽然可以实现双向通信，但仍然需要反复发出请求。而且在 Comet 中普遍采用的 HTTP 长连接也会消耗服务器资源。</p><p>在这种情况下，HTML5 定义了 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。Websocket 使用 ws 或 wss 的统一资源标志符（URI），其中 wss 表示使用了 TLS 的 Websocket。如：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line">ws://echo.websocket.org</span>
<span class="line">wss://echo.websocket.org</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>WebSocket 与 HTTP 和 HTTPS 使用相同的 TCP 端口，可以绕过大多数防火墙的限制。默认情况下，WebSocket 协议使用 80 端口；若运行在 TLS 之上时，默认使用 443 端口。</p><h3 id="_1-2-websocket-简介" tabindex="-1"><a class="header-anchor" href="#_1-2-websocket-简介"><span>1.2 WebSocket 简介</span></a></h3>`,10),d={href:"https://tools.ietf.org/html/rfc6455",target:"_blank",rel:"noopener noreferrer"},k={href:"https://tools.ietf.org/html/rfc7936",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就可以创建持久性的连接，并进行双向数据传输。</p><p>介绍完轮询和 WebSocket 的相关内容之后，接下来我们来看一下 XHR Polling 与 WebSocket 之间的区别：</p><p><img src="https://qingyuan-1316724565.cos.ap-beijing.myqcloud.com/picture/2023/10/05/21-11-36-17390e1a49d7b0ad-tplv-t2oaga2asx-jj-mark-3024-0-0-0-q75-417bba.webp" alt="img"></p><h3 id="_1-3-websocket-优点" tabindex="-1"><a class="header-anchor" href="#_1-3-websocket-优点"><span>1.3 WebSocket 优点</span></a></h3><ul><li><p>较少的控制开销。在连接创建后。服务器和客户端之间交换数据时，用于协议控制的数据包头部相对较小。</p></li><li><p>更强的实时性。由于协议是全双工的，所以服务器可以随时主动给客户端下发数据。相对于 HTTP 请求需要等待客户端发起请求服务端才能响应，延迟明显更少。</p></li><li><p>保持连接状态。与 HTTP 不同的是，WebSocket 需要先创建连接，这就使得其成为一种有状态的协议，之后通信时可以省略部分状态信息。</p></li><li><p>更好的二进制支持。WebSocket 定义了二进制帧，相对 HTTP，可以更轻松地处理二进制内容。</p></li><li><p>可以支持扩展。WebSocket 定义了扩展，用户可以扩展协议、实现部分自定义的子协议。</p></li></ul><p>由于 WebSocket 拥有上述的优点，所以它被广泛地应用在即时通信、实时音视频、在线教育和游戏等领域。</p><h3 id="_1-4-websocket-协议" tabindex="-1"><a class="header-anchor" href="#_1-4-websocket-协议"><span>1.4 WebSocket 协议</span></a></h3><p>本协议有两部分：握手和数据传输。</p><p>握手是基于http协议的。</p><p>来自客户端的握手看起来像如下形式：</p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http" data-title="http"><pre class="language-http"><code><span class="line">GET ws://localhost/chat HTTP/1.1</span>
<span class="line"><span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">localhost</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Sec-WebSocket-Key</span><span class="token punctuation">:</span> <span class="token header-value">dGhlIHNhbXBsZSBub25jZQ==</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Sec-WebSocket-Extensions</span><span class="token punctuation">:</span> <span class="token header-value">permessage-deflate</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Sec-WebSocket-Version</span><span class="token punctuation">:</span> <span class="token header-value">13</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来自服务器的握手看起来像如下形式：</p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http" data-title="http"><pre class="language-http"><code><span class="line"><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">101</span> <span class="token reason-phrase string">Switching Protocols</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Sec-WebSocket-Accept</span><span class="token punctuation">:</span> <span class="token header-value">s3pPLMBiTxaQ9kYGzzhZRbK+xOo=</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">Sec-WebSocket-Extensions</span><span class="token punctuation">:</span> <span class="token header-value">permessage-deflate</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段说明：</p><table><thead><tr><th style="text-align:left;">头名称</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">Connection：Upgrade</td><td>标识该HTTP请求是一个协议升级请求</td></tr><tr><td style="text-align:left;">Upgrade: WebSocket</td><td>协议升级为WebSocket协议</td></tr><tr><td style="text-align:left;">Sec-WebSocket-Version: 13</td><td>客户端支持WebSocket的版本</td></tr><tr><td style="text-align:left;">Sec-WebSocket-Key：</td><td>客户端采用base64编码的24位随机字符序列，服务器接受客户端HTTP协议升级的证明。要求服务端响应一个对应加密的Sec-WebSocket-Accept头信息作为应答</td></tr><tr><td style="text-align:left;">Sec-WebSocket-Extensions</td><td>协议扩展类型</td></tr></tbody></table><h2 id="二、客户端-浏览器-实现" tabindex="-1"><a class="header-anchor" href="#二、客户端-浏览器-实现"><span>二、客户端（浏览器）实现</span></a></h2><h3 id="_2-1-websocket对象" tabindex="-1"><a class="header-anchor" href="#_2-1-websocket对象"><span>2.1 WebSocket对象</span></a></h3><p>实现 WebSockets 的 Web 浏览器将通过 WebSocket 对象公开所有必需的客户端功能（主要指支持 Html5 的浏览器）。</p><p>以下 API 用于创建 WebSocket 对象：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>参数url格式说明： ws://ip地址:端口号/资源名称</p></blockquote><h3 id="_2-2-websocket事件" tabindex="-1"><a class="header-anchor" href="#_2-2-websocket事件"><span>2.2 WebSocket事件</span></a></h3><p>WebSocket 对象的相关事件</p><table><thead><tr><th>事件</th><th>事件处理程序</th><th>描述</th></tr></thead><tbody><tr><td>open</td><td>websocket对象.onopen</td><td>连接建立时触发</td></tr><tr><td>message</td><td>websocket对象.onmessage</td><td>客户端接收服务端数据时触发</td></tr><tr><td>error</td><td>websocket对象.onerror</td><td>通信发生错误时触发</td></tr><tr><td>close</td><td>websocket对象.onclose</td><td>连接关闭时触发</td></tr></tbody></table><h3 id="_2-3-websocket方法" tabindex="-1"><a class="header-anchor" href="#_2-3-websocket方法"><span>2.3 WebSocket方法</span></a></h3><p>WebSocket 对象的相关方法:</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>send()</td><td>使用连接发送数据</td></tr></tbody></table><h2 id="三、服务端实现" tabindex="-1"><a class="header-anchor" href="#三、服务端实现"><span>三、服务端实现</span></a></h2><p>Tomcat的7.0.5 版本开始支持WebSocket,并且实现了Java WebSocket规范(JSR356)。</p><p>Java WebSocket应用由一系列的WebSocketEndpoint组成。Endpoint 是一个java对象，代表WebSocket链接的一端，对于服务端，我们可以视为处理具体WebSocket消息的接口， 就像Servlet之与http请求一样。</p><p>我们可以通过两种方式定义Endpoint:</p><ul><li><p>第一种是编程式， 即继承类 javax.websocket.Endpoint并实现其方法。</p></li><li><p>第二种是注解式, 即定义一个POJO, 并添加 @ServerEndpoint相关注解。</p></li></ul><p>Endpoint实例在WebSocket握手时创建，并在客户端与服务端链接过程中有效，最后在链接关闭时结束。在Endpoint接口中明确定义了与其生命周期相关的方法， 规范实现者确保生命周期的各个阶段调用实例的相关方法。生命周期方法如下：</p><table><thead><tr><th>方法</th><th>含义描述</th><th>注解</th></tr></thead><tbody><tr><td>onClose</td><td>当会话关闭时调用。</td><td>@OnClose</td></tr><tr><td>onOpen</td><td>当开启一个新的会话时调用, 该方法是客户端与服务端握手成功后调用的方法。</td><td>@OnOpen</td></tr><tr><td>onError</td><td>当连接过程中异常时调用。</td><td>@OnError</td></tr></tbody></table><p><strong>服务端如何接收客户端发送的数据呢？</strong></p><p>通过为 Session 添加 MessageHandler 消息处理器来接收消息，当采用注解方式定义Endpoint时，我们还可以通过 @OnMessage 注解指定接收消息的方法。</p><p><strong>服务端如何推送数据给客户端呢？</strong></p><p>发送消息则由 RemoteEndpoint 完成， 其实例由 Session 维护， 根据使用情况， 我们可以通过Session.getBasicRemote 获取同步消息发送的实例 ， 然后调用其 sendXxx()方法就可以发送消息， 可以通过Session.getAsyncRemote 获取异步消息发送实例。</p><p><strong>服务端代码：</strong></p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token annotation punctuation">@ServerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/robin&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChatEndPoint</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ChatEndPoint</span><span class="token punctuation">&gt;</span></span> webSocketSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Session</span> session<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@OnMessage</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收的消息是：&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//将消息发送给其他的用户</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Chat</span> chat <span class="token operator">:</span> webSocketSet<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>chat <span class="token operator">!=</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                chat<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">getBasicRemote</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@OnOpen</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onOpen</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>session <span class="token operator">=</span> session<span class="token punctuation">;</span></span>
<span class="line">        webSocketSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@OnClose</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token class-name">Session</span> seesion<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;连接关闭了。。。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@OnError</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">,</span><span class="token class-name">Throwable</span> error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;出错了。。。。&quot;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、常见问题" tabindex="-1"><a class="header-anchor" href="#四、常见问题"><span>四、常见问题</span></a></h2><h3 id="_4-1-websocket-与-http-有什么关系" tabindex="-1"><a class="header-anchor" href="#_4-1-websocket-与-http-有什么关系"><span>4.1 WebSocket 与 HTTP 有什么关系</span></a></h3><p>WebSocket 是一种与 HTTP 不同的协议。两者都位于 OSI 模型的应用层，并且都依赖于传输层的 TCP 协议。 虽然它们不同，但是 RFC 6455 中规定：WebSocket 被设计为在 HTTP 80 和 443 端口上工作，并支持 HTTP 代理和中介，从而使其与 HTTP 协议兼容。 为了实现兼容性，WebSocket 握手使用 HTTP Upgrade 头，从 HTTP 协议更改为 WebSocket 协议。</p><p><strong>OSI 模型示意图：</strong></p><p><img src="https://qingyuan-1316724565.cos.ap-beijing.myqcloud.com/picture/2023/10/05/21-42-23-17390e19b626b49b-tplv-t2oaga2asx-jj-mark-3024-0-0-0-q75-32f6b6.webp" alt="img"></p><h3 id="_4-2-websocket-与长轮询有什么区别" tabindex="-1"><a class="header-anchor" href="#_4-2-websocket-与长轮询有什么区别"><span>4.2 WebSocket 与长轮询有什么区别</span></a></h3><p>长轮询就是客户端发起一个请求，服务器收到客户端发来的请求后，服务器端不会直接进行响应，而是先将这个请求挂起，然后判断请求的数据是否有更新。如果有更新，则进行响应，如果一直没有数据，则等待一定的时间后才返回。</p><p>长轮询的本质还是基于 HTTP 协议，它仍然是一个一问一答（请求 — 响应）的模式。而 WebSocket 在握手成功后，就是全双工的 TCP 通道，数据可以主动从服务端发送到客户端。</p><h3 id="_4-3-什么是-websocket-心跳" tabindex="-1"><a class="header-anchor" href="#_4-3-什么是-websocket-心跳"><span>4.3 什么是 WebSocket 心跳</span></a></h3><p>网络中的接收和发送数据都是使用 SOCKET 进行实现。但是如果此套接字已经断开，那发送数据和接收数据的时候就一定会有问题。可是如何判断这个套接字是否还可以使用呢？这个就需要在系统中创建心跳机制。所谓 “心跳” 就是定时发送一个自定义的结构体（心跳包或心跳帧），让对方知道自己 “在线”。 以确保链接的有效性。</p><p>而所谓的心跳包就是客户端定时发送简单的信息给服务器端告诉它我还在而已。代码就是每隔几分钟发送一个固定信息给服务端，服务端收到后回复一个固定信息，如果服务端几分钟内没有收到客户端信息则视客户端断开。</p><p>在 WebSocket 协议中定义了 <strong>心跳 Ping</strong> 和 <strong>心跳 Pong</strong> 的控制帧：</p><ul><li>心跳 Ping 帧包含的操作码是 0x9。如果收到了一个心跳 Ping 帧，那么终端必须发送一个心跳 Pong 帧作为回应，除非已经收到了一个关闭帧。否则终端应该尽快回复 Pong 帧。</li><li>心跳 Pong 帧包含的操作码是 0xA。作为回应发送的 Pong 帧必须完整携带 Ping 帧中传递过来的 “应用数据” 字段。如果终端收到一个 Ping 帧但是没有发送 Pong 帧来回应之前的 Ping 帧，那么终端可以选择仅为最近处理的 Ping 帧发送 Pong 帧。此外，可以自动发送一个 Pong 帧，这用作单向心跳。</li></ul><h3 id="_4-4-socket-是什么" tabindex="-1"><a class="header-anchor" href="#_4-4-socket-是什么"><span>4.4 Socket 是什么</span></a></h3><p>网络上的两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个 socket（套接字），因此建立网络通信连接至少要一对端口号。<strong>socket 本质是对 TCP/IP 协议栈的封装，它提供了一个针对 TCP 或者 UDP 编程的接口，并不是另一种协议</strong>。通过 socket，你可以使用 TCP/IP 协议。</p><p>关于 Socket，可以总结以下几点：</p><ul><li>它可以实现底层通信，几乎所有的应用层都是通过 socket 进行通信的。</li><li>对 TCP/IP 协议进行封装，便于应用层协议调用，属于二者之间的中间抽象层。</li><li>TCP/IP 协议族中，传输层存在两种通用协议: TCP、UDP，两种协议不同，因为不同参数的 socket 实现过程也不一样。</li></ul><h2 id="五、参考资源" tabindex="-1"><a class="header-anchor" href="#五、参考资源"><span>五、参考资源</span></a></h2>`,58),b={href:"https://juejin.cn/post/6854573221241421838",target:"_blank",rel:"noopener noreferrer"};function h(v,m){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("WebSocket 是一种网络传输协议，可在单个 TCP 连接上进行全双工通信，位于 OSI 模型的应用层。WebSocket 协议在 2011 年由 IETF 标准化为 "),n("a",d,[s("RFC 6455"),e(a)]),s("，后由 "),n("a",k,[s("RFC 7936"),e(a)]),s(" 补充规范。")]),u,n("p",null,[n("a",b,[s("阿宝哥"),e(a)])])])}const S=p(i,[["render",h],["__file","websocket.html.vue"]]),w=JSON.parse('{"path":"/blogs/back-end/WebCocket/websocket.html","title":"WebSocket介绍","lang":"en-US","frontmatter":{"title":"WebSocket介绍","date":"2023/10/05","tags":["WebSocket","TCP"],"categories":["WebSocket"]},"headers":[{"level":2,"title":"一、什么是 WebSocket","slug":"一、什么是-websocket","link":"#一、什么是-websocket","children":[{"level":3,"title":"1.1 WebSocket 诞生背景","slug":"_1-1-websocket-诞生背景","link":"#_1-1-websocket-诞生背景","children":[]},{"level":3,"title":"1.2 WebSocket 简介","slug":"_1-2-websocket-简介","link":"#_1-2-websocket-简介","children":[]},{"level":3,"title":"1.3 WebSocket 优点","slug":"_1-3-websocket-优点","link":"#_1-3-websocket-优点","children":[]},{"level":3,"title":"1.4 WebSocket 协议","slug":"_1-4-websocket-协议","link":"#_1-4-websocket-协议","children":[]}]},{"level":2,"title":"二、客户端（浏览器）实现","slug":"二、客户端-浏览器-实现","link":"#二、客户端-浏览器-实现","children":[{"level":3,"title":"2.1 WebSocket对象","slug":"_2-1-websocket对象","link":"#_2-1-websocket对象","children":[]},{"level":3,"title":"2.2 WebSocket事件","slug":"_2-2-websocket事件","link":"#_2-2-websocket事件","children":[]},{"level":3,"title":"2.3 WebSocket方法","slug":"_2-3-websocket方法","link":"#_2-3-websocket方法","children":[]}]},{"level":2,"title":"三、服务端实现","slug":"三、服务端实现","link":"#三、服务端实现","children":[]},{"level":2,"title":"四、常见问题","slug":"四、常见问题","link":"#四、常见问题","children":[{"level":3,"title":"4.1 WebSocket 与 HTTP 有什么关系","slug":"_4-1-websocket-与-http-有什么关系","link":"#_4-1-websocket-与-http-有什么关系","children":[]},{"level":3,"title":"4.2 WebSocket 与长轮询有什么区别","slug":"_4-2-websocket-与长轮询有什么区别","link":"#_4-2-websocket-与长轮询有什么区别","children":[]},{"level":3,"title":"4.3 什么是 WebSocket 心跳","slug":"_4-3-什么是-websocket-心跳","link":"#_4-3-什么是-websocket-心跳","children":[]},{"level":3,"title":"4.4 Socket 是什么","slug":"_4-4-socket-是什么","link":"#_4-4-socket-是什么","children":[]}]},{"level":2,"title":"五、参考资源","slug":"五、参考资源","link":"#五、参考资源","children":[]}],"git":{"createdTime":1696513906000,"updatedTime":1696919762000,"contributors":[{"name":"kaiyuan","email":"guokaiyuan04@gmail.com","commits":3}]},"filePathRelative":"blogs/back-end/WebCocket/websocket.md"}');export{S as comp,w as data};
