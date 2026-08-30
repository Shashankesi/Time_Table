export const timeSlots = [
  { time: "9:00–10:30 AM", subject: "sql", label: "SQL" },
  { time: "10:30–12:00 PM", subject: "dsa", label: "DSA (Part 1)" },
  { time: "12:00–1:00 PM", subject: "break", label: "Lunch Break" },
  { time: "1:00–1:30 PM", subject: "dsa", label: "DSA (Part 2)" },
  { time: "1:30–3:00 PM", subject: "webdev", label: "Web Development" },
  { time: "3:00–4:00 PM", subject: "extratech", label: "Extra Tech Skill" },
  { time: "4:00–5:00 PM", subject: "genai", label: "GenAI / RAG / Prompt Engineering" },
  { time: "5:00–6:00 PM", subject: "csfund", label: "CS Fundamentals" },
  { time: "6:00–7:00 PM", subject: "aptitude", label: "Aptitude, Reasoning & Coding Practice" },
  { time: "7:00–7:30 PM", subject: "hr", label: "HR / Behavioral Prep" },
  { time: "7:30–8:30 PM", subject: "break", label: "Dinner Break" },
  { time: "8:30–9:00 PM", subject: "revision", label: "Daily Revision" }
];

export const days = [
  { date: "2026-09-01", day: "Tue", type: "study", week: 1,
    sql: "SELECT, WHERE, ORDER BY",
    dsa: "Arrays: full revision + timed practice set (prefix sum, rotation, subarray problems)",
    webdev: "Advanced JS: closures, scope & hoisting",
    extratech: "Git: init, commit, push",
    genai: "LLM basics: tokens, context window",
    csfund: "OOPs: Class & Object" },

  { date: "2026-09-02", day: "Wed", type: "study", week: 1,
    sql: "GROUP BY, HAVING",
    dsa: "Strings: full revision + timed practice set (pattern matching, anagrams, substrings)",
    webdev: "Advanced JS: promises & async/await",
    extratech: "Git branching",
    genai: "Prompt basics: zero-shot vs few-shot",
    csfund: "OOPs: Inheritance" },

  { date: "2026-09-03", day: "Thu", type: "study", week: 1,
    sql: "INNER/LEFT/RIGHT JOIN",
    dsa: "Two-pointer & sliding window: revision + medium/hard practice set",
    webdev: "Advanced JS: event loop, call stack, microtasks vs macrotasks",
    extratech: "Git merge & conflicts",
    genai: "Prompt basics continued: instructions vs context",
    csfund: "OOPs: Polymorphism" },

  { date: "2026-09-04", day: "Fri", type: "study", week: 1,
    sql: "FULL JOIN, Self Join",
    dsa: "Hashing/HashMap: revision + practice (frequency counting, grouping, subarray-sum problems)",
    webdev: "DOM APIs + Fetch API — build an interactive UI without a framework",
    extratech: "GitHub PR workflow",
    genai: "System vs user vs assistant roles",
    csfund: "OOPs: Encapsulation, Abstraction" },

  { date: "2026-09-05", day: "Sat", type: "study", week: 1,
    sql: "Aggregate functions + mixed JOIN practice (timed)",
    dsa: "Recursion & basic backtracking: revision + timed practice set",
    webdev: "Mini vanilla-JS project (Fetch-based app) + JS fundamentals recap",
    extratech: "Weekly recap: Git workflow end-to-end",
    genai: "LLM + Prompt basics full recap",
    csfund: "OOPs full revision + mock questions" },

  { date: "2026-09-06", day: "Sun", type: "rest",
    note: "Full mock test — Week 1 (SQL, DSA: arrays/strings/two-pointer/hashing/recursion, Advanced JS)." },

  { date: "2026-09-07", day: "Mon", type: "study", week: 2,
    sql: "Subqueries",
    dsa: "Linked List: full revision + practice (reverse, merge, cycle detection, intersection)",
    webdev: "React: setup + JSX",
    extratech: "Vector embeddings intro",
    genai: "How embeddings power semantic search",
    csfund: "DBMS: Normalization (1NF–3NF)" },

  { date: "2026-09-08", day: "Tue", type: "study", week: 2,
    sql: "Correlated subqueries",
    dsa: "Stack: revision + practice (monotonic stack problems, next greater/smaller element)",
    webdev: "React: components & props",
    extratech: "Vector DB overview (Pinecone/FAISS)",
    genai: "Comparing vector DB options",
    csfund: "DBMS: Keys (primary/foreign/candidate)" },

  { date: "2026-09-09", day: "Wed", type: "study", week: 2,
    sql: "Window functions (RANK, ROW_NUMBER)",
    dsa: "Queue & Deque: revision + practice (sliding window max, circular queue problems)",
    webdev: "React: state & useState",
    extratech: "Chunking strategies for documents",
    genai: "Chunk size / overlap trade-offs",
    csfund: "DBMS: ACID properties" },

  { date: "2026-09-10", day: "Thu", type: "study", week: 2,
    sql: "Window functions (LEAD, LAG)",
    dsa: "Binary Trees: revision + practice (traversals, views, diameter, LCA)",
    webdev: "React: useEffect, hooks",
    extratech: "RAG architecture overview",
    genai: "Retriever + generator pipeline design",
    csfund: "DBMS: Transactions & concurrency" },

  { date: "2026-09-11", day: "Fri", type: "study", week: 2,
    sql: "CTEs (Common Table Expressions)",
    dsa: "BST + balanced trees: revision + practice (validate BST, insert/delete, AVL basics)",
    webdev: "React: forms & events",
    extratech: "Docker: images vs containers",
    genai: "Prep: what a mini RAG demo needs",
    csfund: "DBMS: Indexing" },

  { date: "2026-09-12", day: "Sat", type: "study", week: 2,
    sql: "Mixed subquery + window practice",
    dsa: "Graphs (BFS/DFS): revision + practice set (connected components, cycle detection)",
    webdev: "React mini project",
    extratech: "Docker: Dockerfile basics",
    genai: "Weekly recap: embeddings + RAG architecture",
    csfund: "DBMS revision + mock questions" },

  { date: "2026-09-13", day: "Sun", type: "rest",
    note: "Full mock test — Week 2 (SQL, DSA: linked list/stack/queue/trees/graphs, React basics)." },

  { date: "2026-09-14", day: "Mon", type: "study", week: 3,
    sql: "Query optimization basics",
    dsa: "Heaps & Priority Queue: revision + practice (k-th largest, merge k lists, top-k problems)",
    webdev: "Node.js basics",
    extratech: "AWS: EC2 intro",
    genai: "RAG project: setup skeleton",
    csfund: "OS: Process vs Thread" },

  { date: "2026-09-15", day: "Tue", type: "study", week: 3,
    sql: "Indexing (clustered/non-clustered)",
    dsa: "Graphs: Union-Find & Minimum Spanning Tree — revision + practice",
    webdev: "Express.js setup",
    extratech: "AWS: S3 basics",
    genai: "RAG project: document ingestion",
    csfund: "OS: Scheduling algorithms" },

  { date: "2026-09-16", day: "Wed", type: "study", week: 3,
    sql: "Views & stored procedures intro",
    dsa: "Graphs: Dijkstra & shortest-path algorithms — revision + practice",
    webdev: "REST API design principles",
    extratech: "System Design: LLD intro",
    genai: "RAG project: embedding + storage",
    csfund: "OS: Memory management" },

  { date: "2026-09-17", day: "Thu", type: "study", week: 3,
    sql: "Real-world query writing",
    dsa: "DP (1D): revision + practice (climbing stairs, house robber, coin change)",
    webdev: "Building REST APIs (CRUD)",
    extratech: "System Design: caching basics",
    genai: "RAG project: retrieval logic",
    csfund: "OS: Deadlocks" },

  { date: "2026-09-18", day: "Fri", type: "study", week: 3,
    sql: "Real-world query writing (joins + agg)",
    dsa: "DP (2D / Knapsack): revision + practice (0/1 knapsack, unbounded knapsack, grid DP)",
    webdev: "Connecting frontend to backend API",
    extratech: "CI/CD: GitHub Actions basics",
    genai: "RAG project: connect LLM for generation",
    csfund: "OS: Paging & segmentation" },

  { date: "2026-09-19", day: "Sat", type: "study", week: 3,
    sql: "Timed SQL mock test",
    dsa: "DP (LCS, LIS, string DP): revision + practice",
    webdev: "Auth basics (JWT) in API",
    extratech: "Weekly recap: cloud + system design LLD",
    genai: "Finish end-to-end mini RAG demo",
    csfund: "OS revision + mock questions" },

  { date: "2026-09-20", day: "Sun", type: "rest",
    note: "Full mock test — Week 3 (SQL, DSA: heaps/graphs advanced/DP, Node/Express/REST APIs)." },

  { date: "2026-09-21", day: "Mon", type: "study", week: 4,
    sql: "Full SQL revision",
    dsa: "Greedy algorithms: revision + practice (interval scheduling, activity selection)",
    webdev: "MERN: connect MongoDB",
    extratech: "System Design: HLD basics",
    genai: "Polish RAG project structure",
    csfund: "CN: OSI model" },

  { date: "2026-09-22", day: "Tue", type: "study", week: 4,
    sql: "Timed SQL problems (mixed)",
    dsa: "Backtracking (advanced): N-Queens, permutations, subsets, Sudoku solver — practice",
    webdev: "MERN: full CRUD app",
    extratech: "System Design: load balancing",
    genai: "Advanced prompting: Chain-of-Thought",
    csfund: "CN: TCP/IP model" },

  { date: "2026-09-23", day: "Wed", type: "study", week: 4,
    sql: "SQL interview questions practice",
    dsa: "Company-wise practice set 1 (top Amazon/Google problems, timed)",
    webdev: "Deploy backend (Render/Railway)",
    extratech: "Finish + test RAG project",
    genai: "Advanced prompting: ReAct pattern",
    csfund: "CN: HTTP/HTTPS, status codes" },

  { date: "2026-09-24", day: "Thu", type: "study", week: 4,
    sql: "SQL revision + flashcards",
    dsa: "Company-wise practice set 2 (top Microsoft/Flipkart problems, timed)",
    webdev: "Deploy frontend (Vercel/Netlify)",
    extratech: "Advanced prompting: structured outputs",
    genai: "Write up RAG project for resume/portfolio",
    csfund: "CN: DNS, load balancing basics" },

  { date: "2026-09-25", day: "Fri", type: "study", week: 4,
    sql: "Mock SQL interview round",
    dsa: "Weak-topic focused revision — pick your 2-3 shakiest topics from the month and drill them",
    webdev: "Polish full-stack project (README, demo)",
    extratech: "System Design: HLD basics recap",
    genai: "Practice explaining RAG project out loud",
    csfund: "System Design: HLD basics" },

  { date: "2026-09-26", day: "Sat", type: "study", week: 4,
    sql: "Mock SQL interview round",
    dsa: "Full-syllabus timed mock (2 hrs, mixed difficulty, simulate real coding round)",
    webdev: "Project walkthrough practice",
    extratech: "Polish RAG project for resume",
    genai: "Final GenAI/RAG revision",
    csfund: "Mock technical interview (mixed)" },

  { date: "2026-09-27", day: "Sun", type: "rest",
    note: "Full mock test — Week 4 (SQL, DSA: greedy/backtracking/company sets, MERN deployment)." },

  { date: "2026-09-28", day: "Mon", type: "revision",
    note: "Full revision day — SQL + DSA. For DSA: targeted practice on your weakest 2-3 topics only, not a full re-do." },

  { date: "2026-09-29", day: "Tue", type: "revision",
    note: "Full revision day — Web Dev (React/Node/MERN) + GenAI/RAG + CS Fundamentals. Also polish resume & LinkedIn." },

  { date: "2026-09-30", day: "Wed", type: "final",
    note: "Full mock interview day — 1 SQL round, 1 DSA round (2 timed problems, explain approach + complexity), 1 project/web-dev round, 1 HR round." }
];

export const interviewQuestions = {
  technical: [
    "Explain a JOIN you used and why (SQL)",
    "Time/space complexity of your DSA solutions — be ready to optimize",
    "Difference between SQL and NoSQL, when to use which",
    "Explain your project architecture, tech stack choices, and trade-offs",
    "OOPs concepts with real code examples",
    "REST vs GraphQL; how authentication works in your app",
    "What is RAG, why use it over fine-tuning, how would you reduce hallucination"
  ],
  hr: [
    "Tell me about yourself",
    "A challenge you faced in a project and how you solved it",
    "Why should we hire you / why this company",
    "Strengths, weaknesses, how you handle deadlines/conflict"
  ]
};

export const weekThemes = {
  week1: {
    title: "Week 1: Foundations",
    desc: "Foundations — SQL joins/aggregates, DSA arrays/strings/hashing (revision + practice), Advanced JS, Git, OOPs"
  },
  week2: {
    title: "Week 2: Building Depth",
    desc: "Building Depth — SQL subqueries/window functions, DSA linked list/stack/queue/trees/graphs (revision + practice), React, Docker/Cloud, DBMS"
  },
  week3: {
    title: "Week 3: Applying Skills",
    desc: "Applying Skills — SQL optimization, DSA heaps/graphs-advanced/DP (revision + practice), Node/Express APIs, System Design LLD, OS"
  },
  week4: {
    title: "Week 4: Interview-Ready",
    desc: "Interview-Ready — DSA company-wise sets + full mocks, SQL/Web Dev revision, MERN deployment, System Design HLD, CN, mock interviews"
  }
};
