import { NextResponse } from "next/server";

const blogs = [
  {
      id: '01',
      title: "The Evolution of Web Development: From Static Pages to AI-Driven Websites",
      slug: "Article-01",
      author: "MUHAMMAD SHARIQ",
      date_of_publication: "15 - Feb - 2025",
      tags: ["Web Development", "HTML", "CSS", "JavaScript", "Frontend", "Next.js"],
      cover_image: "/Blog 1/Cover Image Blog1.png",
      intropara: "From the initial limited environment of simple text pages, web development has transformed into highly dynamic experiences powered mainly by AI. The internet began as just a rough patchwork of simple HTML pages, whereas today we are interacting with intelligent websites that personalize experiences, predict user behavior, and even generate content. In this article, we will explore the journey web development took from its pioneer days to reach those technologies that often spy into the future.",
      image1: "/Blog 1/Section 1.png",
      head1: "The Early Days: Static HTML Pages",
      subHead1: "The Birth of the Web",
      para1: "Tim Berners-Lee introduced the World Wide Web in 1992, and websites then simply consisted of static HTML pages. These pages had no interactivity, no animation, and no styling--only simple text where users could click hyperlinks. It was a collection of documents that a user could access by typing an address into their browser.",
      subHead2: "Characteristics of Static Websites",
      list1: ["Simple HTML structures with minimal styling", "No user interactivity or dynamic content", "Limited design options and customization", "Manual updates and maintenance", "Slow loading times due to large file sizes"],
      para2: "Despite these being some of the fantastic and top websites then, they failed to really engage and be flexible. The requirement for dynamic experiences highlighted the next era of web development.",
      image2: "/Blog 1/Section 2.png",
      head2: "The Rise of Dynamic Websites: JavaScript & CSS",
      subHead3: "Introduction of JavaScript and CSS",
      para3: "All by the late 1990s and through to the early 2000s, through JavaScript and CSS, web design was always going to be a gung-ho affair. JavaScript would then permit one to interconnect with a visually stunning layout using CSS, while JavaScript provided interactivity in content. These organizations made for a more user-friendly web experience for users: animated dropdown menus, and interactive forms.",
      subHead4: "Characteristics of Dynamic Websites",
      list2: ["JavaScript (1995): Enabled client-side scripting and interactivity", "CSS (1996): Allowed for better styling and design consistency", "PHP & MySQL (1995-2000): Enabled server-side dynamic content generation"],
      subHead5: "Impact on Web Development",
      list3: ["Websites became more interactive with buttons, animations, and dynamic content.", "Designers could create visually appealing layouts with CSS.", "Developers could build complex web applications with server-side scripting."],
      image3: "/Blog 1/Section 3.png",
      head3: "The Age of Frameworks & CMS: WordPress, React & Next.js",
      subHead6: "The Rise of Content Management Systems (CMS)",
      para4: "The 2000s saw the ascendancy of WordPress, Joomla, and Drupal: these made web development possible for non-programmers. The platforms allow users to create websites without any coding. Developers could build their custom themes and plugins to further the functionality.",
      subHead7: "JavaScript Frameworks: React, Angular & Vue.js",
      para5: "With increasing complexity, developers turned to frontend frameworks like:",
      list4: ["React.js (2013) – Created by Facebook for dynamic UI development", "Angular (2010) – Google’s framework for large-scale applications", "Vue.js (2014) – Lightweight alternative with easy integration"],
      para6: "Modern Advancements: Next.js & Server-Side Rendering (SSR)",
      list5: ["Next.js (2016): Optimized React applications with server-side rendering", "Gatsby.js (2015): Introduced static site generation for performance"],
      image4: "/Blog 1/Section 4.png",
      head4: "AI-Powered Web Development: The Future of the Internet",
      subHead8: "The Role of AI in Modern Websites",
      para7: "The current year presents such moments not before; such moments were about the interference of AI to shape contemporary web development. Today, the application of AI technologies in web development includes chatbots for customer care; AI-powered automated UI generation; smart, fast working, customized websites, etc.",
      subHead9: "AI-Powered Features in Web Development",
      list6: ["AI Chatbots & Virtual Assistants – Handling customer queries in real-time", "Automated Code Generation – Tools like GitHub Copilot assist developers", "AI-Powered SEO Optimization – AI helps boost rankings with real-time analysis", "Personalized Content Recommendations – AI analyzes user behavior for customized experiences"],
      subHead10: "The Battle of AI-Powered Websites: ChatGPT vs. DeepSeek vs. Google Bard",
      list7: ["ChatGPT: Powering AI-based assistants and website interactions", "DeepSeek: Focused on AI-powered search and research tools", "Google Bard: Aiming to integrate AI into everyday web experiences"],
      para8: "In fact, it's clear that the future of web development is closely associated with AI and automation. With future improvements, websites will be more intelligent and responsive to user needs, personalized and adaptive experiences according to individuals.",
      image5: "/Blog 1/Conclusion.png",
      head5: "Final Thoughts",
      para9: "Web development has undergone a shift from simple static pages to AI-driven dynamic applications. The new-age website development techniques include modern JavaScript frameworks, cloud computing, and artificial intelligence.",
      subHead11: "Key Takeaways",
      para10: "The static websites were laid as foundations but lacked sufficient interactivity. With JavaScript, CSS, and databases came the dynamics of websites. Modern web development is being defined with the advent of frameworks such as React, Next.js, and AI-enabled tools. The future of web development is voice-driven, automated, and heavily personalized.",
      calltoaction: "Follow me on LinkedIn for more insights on Web Development and AI! Share this article with your fellow developers and AI enthusiasts!"
      
    },
    {
      id: '02',
      title: "HTML, CSS, and JavaScript: The Backbone of Every Website",
      slug: "Article-02",
      author: "MUHAMMAD SHARIQ",
      date_of_publication: "16 - Feb - 2025",
      tags: ["Web Development", "HTML", "CSS", "JavaScript", "Frontend", "Next.js"],
      cover_image: "/Blog 2/Cover Image Blog2.png",
      intropara: "HTML, CSS, and JavaScript are three fundamental technologies fueling the web. These frameworks serve as the backbone for all websites, whether a basic static page or an elaborated web application. This is the main argument every web developer should hold: understanding how these tools come together. The article discusses the significance of HTML, CSS, and JavaScript in the world of web development, the evolution of these technologies, and finally, their current role in modern websites.",
      image1: "/Blog 2/Section 1.png",
      head1: "HTML: The Structure of the Web",
      subHead1: "The Birth of HTML",
      para1: "HTML, which is HyperText Markup Language, was born out of the brain of Tim Berners-Lee around the early 1990s. It is a kind of structuring language for documents on the web. It actually provided hyperlinks through which users could connect to various pages.",
      subHead2: "Key Characteristics of HTML",
      list1: ["Defines the structure of web pages", "Uses elements like headings, paragraphs, and images", "Supports hyperlinks for easy navigation", "Provides semantic meaning to content", "Forms the base for all web development"],
      para2: "Structuring a web page with HTML deals with the organization of its content into sections-like headers, navigation, main content, footers, etc.-metadata, styling references, and scripts to provide functionality. By providing a hierarchical relationship of elements, HTML provides semantics to organize, accessibility for those with special conditions, and smooth integration with CSS for styling and JavaScript for interactivity, thus forming the bedrock of contemporary web development.",
      image2: "/Blog 2/Section 2.png",
      head2: "CSS: The Art of Styling Websites",
      subHead3: "Introduction of CSS",
      para3: "CSS is an acronym for Cascading Style Sheets. It was introduced in 1996 so that the content could be separated from design. Therefore, before CSS very bland-looking web pages could be created from unstyled text.",
      subHead4: "Core Features of CSS",
      list2: ["Enables styling and layout customization" , "Supports responsive design for different devices", "Uses selectors and classes for precise styling", "Allows animations and transitions", "Improves maintainability and reusability"],
      subHead5: "CSS in Modern Web Development",
      list3: ["CSS Grid & Flexbox – Enables complex layouts" , "Tailwind CSS & Bootstrap – Speeds up development" , " SASS & LESS – Provides advanced styling features"],
      image3: "/Blog 2/Section 3.png",
      head3: "JavaScript: Adding Interactivity to the Web",
      subHead6: "The Introduction of JavaScript",
      para4: "JavaScript was developed in 1995 because at that time, adding interactivity onto web pages was in great demand. It made it possible for developers to produce dynamic content, which could change without reloading the entire page.",
      subHead7: "Features of JavaScript",
      para5: "Following are the Key Features of JavaScript:",
      list4: ["Enables client-side interactivity", "Supports event-driven programming", "Works with APIs to fetch external data", "Provides asynchronous operations with promises and async/await", "Forms the basis of modern web applications"],
      para6: "JavaScript revolutionized web development with frameworks and libraries like:",
      list5: ["React.js – Component-based UI library", "Vue.js – Lightweight and flexible framework", "Angular.js – Google’s scalable web app framework"],
      image4: "/Blog 2/Section 4.png",
      head4: "The Synergy of HTML, CSS, and JavaScript",
      subHead8: "The Role of Trio Together",
      para7: "Modern web development has evolved based on the combination of HTML and CSS along with JavaScript so that a website promises to be dynamic, interactive, and, most importantly, visually appealing. HTML acts as the main base structure of a web page that defines the actual content and layout of a web page. CSS enhances the display of the page, adding styling to elements through the use of colors, font relations, and responsive designs for an optimal user experience. It is JavaScript that adds interactivity and functions, enabling dynamic content to be updated and animated for user engagement. It is the cohesive blend of such technologies that gives birth to the world's most beautiful as well as functional and user-oriented creations.",
      subHead9: "How They Work Together",
      list6: ["HTML structures the content", "CSS styles the elements", "JavaScript adds interactivity"],
      subHead10: "The Synergy of HTML, CSS, and JavaScript: Driving Innovations in Modern Web Technologies",
      list7: ["Single Page Applications (SPAs) – Dynamic, seamless user experiences", "Progressive Web Apps (PWAs) – Offline support and mobile-friendly features", "Server-Side Rendering (SSR) with Next.js – Faster load times and improved SEO"],
      para8: "In summary, there has been major advancement in web development, leading to innovations that engage users and produce rich experiences on the one side, and innovations in responsiveness on the other side, by integrating HTML, CSS, and JavaScript seamlessly. This enables the ongoing development of modern web technologies on equal footing, thus augmenting creativity and functionality in the digital world.",
      image5: "/Blog 2/Conclusion.png",
      head5: "Final Thoughts",
      para9: "It is all about HTML, CSS, and JavaScript which together become a trio of standards that form the core of any web development. HTML provides structure, CSS beautifies the content, and JavaScript makes it behave in an interactive manner. However, in combination, they would allow any developer to create modern, functional, and even good-looking websites. Continuing through the path of innovation, web development is becoming more sound, user friendly, and functional-involving a lot of frameworks, tools, methodologies, and principles.",
      subHead11: "Key Takeaways",
      para10: "Well, the backbone of any web page is HTML. CSS is used to make the page look good and adaptable. JavaScript is used for interactivity and dynamic capabilities. Newer frameworks and libraries aim to decrease development time and enhance productivity. The future of web development depends on these core technologies and their gradual improvements. ",
      calltoaction: "Follow me on LinkedIn for more insights on Web Development and AI! Share this article with your fellow developers and AI enthusiasts!"
      
    }
    
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const post = blogs.find((p) => p.id === id);
    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    return NextResponse.json(post);
  }

  return NextResponse.json(blogs);
}
