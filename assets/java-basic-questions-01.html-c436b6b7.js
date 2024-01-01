import{_ as o,r,o as t,c as s,a as e,b as a,d as n,e as l}from"./app-438ac701.js";const v={},c=l('<h2 id="基础概念与常识" tabindex="-1"><a class="header-anchor" href="#基础概念与常识" aria-hidden="true">#</a> 基础概念与常识</h2><h3 id="java-语言有哪些特点" tabindex="-1"><a class="header-anchor" href="#java-语言有哪些特点" aria-hidden="true">#</a> Java 语言有哪些特点？</h3><ol><li>简单易学</li><li>面向对象（封装，继承，多态）；</li><li>平台无关性（Java 虚拟机实现平台无关性）；</li><li>支持多线程</li><li>可靠性（具备异常处理和自动内存管理机制）；</li><li>安全性（Java 语言本身的设计就提供了多重安全防护机制，如访问权限修饰符、限制程序直接访问操作系统资源）；</li><li>高效性（通过 Just In Time 编译器等技术的优化，Java 语言的运行效率还是非常不错的）；</li><li>支持网络编程并且很方便；</li><li>编译与解释并存；</li><li>...</li></ol><h3 id="java-se-vs-java-ee" tabindex="-1"><a class="header-anchor" href="#java-se-vs-java-ee" aria-hidden="true">#</a> Java SE vs Java EE</h3><ul><li><p>Java SE（Java Platform，Standard Edition）: Java 平台标准版，Java 编程语言的基础，它包含了支持 Java 应用程序开发和运行的核心类库以及虚拟机等核心组件。Java SE 可以用于构建桌面应用程序或简单的服务器应用程序。</p></li><li><p>Java EE（Java Platform, Enterprise Edition ）：Java 平台企业版，建立在 Java SE 的基础上，包含了支持企业级应用程序开发和部署的标准和规范（比如 Servlet、JSP、EJB、JDBC、JPA、JTA、JavaMail、JMS）。 Java EE 可以用于构建分布式、可移植、健壮、可伸缩和安全的服务端 Java 应用程序，例如 Web 应用程序。</p></li></ul><p>简单来说，Java SE 是 Java 的基础版本，Java EE 是 Java 的高级版本。Java SE 更适合开发桌面应用程序或简单的服务器应用程序，Java EE 更适合开发复杂的企业级应用程序或 Web 应用程序。</p><h3 id="jvm-vs-jdk-vs-jre" tabindex="-1"><a class="header-anchor" href="#jvm-vs-jdk-vs-jre" aria-hidden="true">#</a> JVM vs JDK vs JRE</h3><h4 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h4><p>Java 虚拟机 （JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，他们都会给出相同的结果。字节码和不同系统的 JVM 实现是 Java 语言“一次编译，随处可以运行”的关键所在。</p><p><img src="https://qingyuan-1316724565.cos.ap-beijing.myqcloud.com/picture/2023/11/28/15-32-07-upyun-logo-12e807.png" alt="upyun-logo"></p><p>​ 运行在 Java 虚拟机之上的编程语言</p><p><strong>JVM 并不是只有一种！只要满足 JVM 规范，每个公司、组织或者个人都可以开发自己的专属 JVM。</strong> 也就是说我们平时接触到的 HotSpot VM 仅仅是是 JVM 规范的一种实现而已。</p>',12),J={href:"https://en.wikipedia.org/wiki/Comparison_of_Java_virtual_machines",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.oracle.com/javase/specs/index.html",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("img",{src:"https://qingyuan-1316724565.cos.ap-beijing.myqcloud.com/picture/2023/11/28/15-36-34-image-20231128153634197-e22efb.png",alt:"image-20231128153634197"})],-1);function p(m,u){const i=r("ExternalLinkIcon");return t(),s("div",null,[c,e("p",null,[a("除了我们平时最常用的 HotSpot VM 外，还有 J9 VM、Zing VM、JRockit VM 等 JVM 。维基百科上就有常见 JVM 的对比："),e("a",J,[a("Comparison of Java virtual machinesopen"),n(i)]),a(" ，感兴趣的可以去看看。并且，你可以在 "),e("a",d,[a("Java SE Specificationsopen"),n(i)]),a(" 上找到各个版本的 JDK 对应的 JVM 规范。")]),h])}const E=o(v,[["render",p],["__file","java-basic-questions-01.html.vue"]]);export{E as default};