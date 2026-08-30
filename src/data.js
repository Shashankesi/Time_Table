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
    genai: "PHASE 1 — Foundations: AI vs ML vs DL vs NLP landscape; why GenAI matters for placements right now",
    csfund: "OOPs: Class & Object" },

  { date: "2026-09-02", day: "Wed", type: "study", week: 1,
    sql: "GROUP BY, HAVING",
    dsa: "Strings: full revision + timed practice set (pattern matching, anagrams, substrings)",
    webdev: "Advanced JS: promises & async/await",
    extratech: "Git branching",
    genai: "What is an LLM? Transformer intuition — attention explained without the math",
    csfund: "OOPs: Inheritance" },

  { date: "2026-09-03", day: "Thu", type: "study", week: 1,
    sql: "INNER/LEFT/RIGHT JOIN",
    dsa: "Two-pointer & sliding window: revision + medium/hard practice set",
    webdev: "Advanced JS: event loop, call stack, microtasks vs macrotasks",
    extratech: "Git merge & conflicts",
    genai: "Tokens, context window, temperature & sampling — experiment with 3 prompts, observe output changes",
    csfund: "OOPs: Polymorphism" },

  { date: "2026-09-04", day: "Fri", type: "study", week: 1,
    sql: "FULL JOIN, Self Join",
    dsa: "Hashing/HashMap: revision + practice (frequency counting, grouping, subarray-sum problems)",
    webdev: "DOM APIs + Fetch API — build an interactive UI without a framework",
    extratech: "GitHub PR workflow",
    genai: "How LLMs are trained: pretraining, fine-tuning, RLHF (high-level, no math required)",
    csfund: "OOPs: Encapsulation, Abstraction" },

  { date: "2026-09-05", day: "Sat", type: "study", week: 1,
    sql: "Aggregate functions + mixed JOIN practice (timed)",
    dsa: "Recursion & basic backtracking: revision + timed practice set",
    webdev: "Mini vanilla-JS project (Fetch-based app) + JS fundamentals recap",
    extratech: "Weekly recap: Git workflow end-to-end",
    genai: "Phase 1 recap: explain 'what is an LLM' out loud in your own words, no notes",
    csfund: "OOPs full revision + mock questions" },

  { date: "2026-09-06", day: "Sun", type: "rest",
    note: "Full mock test — Week 1 (SQL, DSA arrays/strings/hashing/recursion, Advanced JS). GenAI: no test, just make sure you can explain tokens/context window/temperature simply." },

  { date: "2026-09-07", day: "Mon", type: "study", week: 2,
    sql: "Subqueries",
    dsa: "Linked List: full revision + practice (reverse, merge, cycle detection, intersection)",
    webdev: "React: setup + JSX",
    extratech: "Vector embeddings intro",
    genai: "PHASE 2 — Prompt Engineering: zero-shot vs few-shot prompting, hands-on comparison",
    csfund: "DBMS: Normalization (1NF–3NF)" },

  { date: "2026-09-08", day: "Tue", type: "study", week: 2,
    sql: "Correlated subqueries",
    dsa: "Stack: revision + practice (monotonic stack problems, next greater/smaller element)",
    webdev: "React: components & props",
    extratech: "Vector DB overview (Pinecone/FAISS)",
    genai: "System vs user vs assistant roles; instructions vs context in a prompt",
    csfund: "DBMS: Keys (primary/foreign/candidate)" },

  { date: "2026-09-09", day: "Wed", type: "study", week: 2,
    sql: "Window functions (RANK, ROW_NUMBER)",
    dsa: "Queue & Deque: revision + practice (sliding window max, circular queue problems)",
    webdev: "React: state & useState",
    extratech: "Chunking strategies for documents",
    genai: "Chain-of-Thought (CoT) prompting — when and why it improves reasoning tasks",
    csfund: "DBMS: ACID properties" },

  { date: "2026-09-10", day: "Thu", type: "study", week: 2,
    sql: "Window functions (LEAD, LAG)",
    dsa: "Binary Trees: revision + practice (traversals, views, diameter, LCA)",
    webdev: "React: useEffect, hooks",
    extratech: "RAG architecture overview",
    genai: "Self-consistency & the ReAct pattern (reason + act) — build a small example",
    csfund: "DBMS: Transactions & concurrency" },

  { date: "2026-09-11", day: "Fri", type: "study", week: 2,
    sql: "CTEs (Common Table Expressions)",
    dsa: "BST + balanced trees: revision + practice (validate BST, insert/delete, AVL basics)",
    webdev: "React: forms & events",
    extratech: "Docker: images vs containers",
    genai: "Structured outputs: JSON mode and function/tool calling basics",
    csfund: "DBMS: Indexing" },

  { date: "2026-09-12", day: "Sat", type: "study", week: 2,
    sql: "Mixed subquery + window practice",
    dsa: "Graphs (BFS/DFS): revision + practice set (connected components, cycle detection)",
    webdev: "React mini project",
    extratech: "Docker: Dockerfile basics",
    genai: "Build a personal 'prompt library' — 10 reusable prompt templates you've tested yourself",
    csfund: "DBMS revision + mock questions" },

  { date: "2026-09-13", day: "Sun", type: "rest",
    note: "Full mock test — Week 2 (SQL, DSA: linked list/stack/queue/trees/graphs, React basics). GenAI: review your prompt library, refine 3 weakest entries." },

  { date: "2026-09-14", day: "Mon", type: "study", week: 3,
    sql: "Query optimization basics",
    dsa: "Heaps & Priority Queue: revision + practice (k-th largest, merge k lists, top-k problems)",
    webdev: "Node.js basics",
    extratech: "AWS: EC2 intro",
    genai: "PHASE 3 — Embeddings: what they encode, how semantic search actually works",
    csfund: "OS: Process vs Thread" },

  { date: "2026-09-15", day: "Tue", type: "study", week: 3,
    sql: "Indexing (clustered/non-clustered)",
    dsa: "Graphs: Union-Find & Minimum Spanning Tree — revision + practice",
    webdev: "Express.js setup",
    extratech: "AWS: S3 basics",
    genai: "Vector databases overview: Pinecone vs FAISS vs Chroma — pick one to use for your project",
    csfund: "OS: Scheduling algorithms" },

  { date: "2026-09-16", day: "Wed", type: "study", week: 3,
    sql: "Views & stored procedures intro",
    dsa: "Graphs: Dijkstra & shortest-path algorithms — revision + practice",
    webdev: "REST API design principles",
    extratech: "System Design: LLD intro",
    genai: "Chunking strategies: fixed-size vs semantic chunking, overlap trade-offs",
    csfund: "OS: Memory management" },

  { date: "2026-09-17", day: "Thu", type: "study", week: 3,
    sql: "Real-world query writing",
    dsa: "DP (1D): revision + practice (climbing stairs, house robber, coin change)",
    webdev: "Building REST APIs (CRUD)",
    extratech: "System Design: caching basics",
    genai: "RAG architecture: retriever + generator pipeline, end-to-end diagram",
    csfund: "OS: Deadlocks" },

  { date: "2026-09-18", day: "Fri", type: "study", week: 3,
    sql: "Real-world query writing (joins + agg)",
    dsa: "DP (2D / Knapsack): revision + practice (0/1 knapsack, unbounded knapsack, grid DP)",
    webdev: "Connecting frontend to backend API",
    extratech: "CI/CD: GitHub Actions basics",
    genai: "Hybrid search & re-ranking: combining keyword (BM25) + vector search",
    csfund: "OS: Paging & segmentation" },

  { date: "2026-09-19", day: "Sat", type: "study", week: 3,
    sql: "Timed SQL mock test",
    dsa: "DP (LCS, LIS, string DP): revision + practice",
    webdev: "Auth basics (JWT) in API",
    extratech: "Weekly recap: cloud + system design LLD",
    genai: "RAG evaluation basics: faithfulness, relevance, and reducing hallucination",
    csfund: "OS revision + mock questions" },

  { date: "2026-09-20", day: "Sun", type: "rest",
    note: "Full mock test — Week 3 (SQL, DSA: heaps/graphs advanced/DP, Node/Express/REST APIs). GenAI: if Phase 2/3 feels shaky, use today to patch gaps before starting the build week." },

  { date: "2026-09-21", day: "Mon", type: "study", week: 4,
    sql: "Full SQL revision",
    dsa: "Greedy algorithms: revision + practice (interval scheduling, activity selection)",
    webdev: "MERN: connect MongoDB",
    extratech: "System Design: HLD basics",
    genai: "PHASE 4 — Build: choose your stack (LangChain or LlamaIndex + a free LLM API + Chroma/FAISS), set up project skeleton",
    csfund: "CN: OSI model" },

  { date: "2026-09-22", day: "Tue", type: "study", week: 4,
    sql: "Timed SQL problems (mixed)",
    dsa: "Backtracking (advanced): N-Queens, permutations, subsets, Sudoku solver — practice",
    webdev: "MERN: full CRUD app",
    extratech: "System Design: load balancing",
    genai: "Build document ingestion + chunking + embedding pipeline",
    csfund: "CN: TCP/IP model" },

  { date: "2026-09-23", day: "Wed", type: "study", week: 4,
    sql: "SQL interview questions practice",
    dsa: "Company-wise practice set 1 (top Amazon/Google problems, timed)",
    webdev: "Deploy backend (Render/Railway)",
    extratech: "Finish + test RAG project",
    genai: "Build retrieval logic + connect retrieved context to the LLM for generation",
    csfund: "CN: HTTP/HTTPS, status codes" },

  { date: "2026-09-24", day: "Thu", type: "study", week: 4,
    sql: "SQL revision + flashcards",
    dsa: "Company-wise practice set 2 (top Microsoft/Flipkart problems, timed)",
    webdev: "Deploy frontend (Vercel/Netlify)",
    extratech: "Advanced prompting: structured outputs",
    genai: "Add a minimal UI (Streamlit or a simple web page) so the RAG demo is actually clickable",
    csfund: "CN: DNS, load balancing basics" },

  { date: "2026-09-25", day: "Fri", type: "study", week: 4,
    sql: "Mock SQL interview round",
    dsa: "Weak-topic focused revision — pick your 2-3 shakiest topics from the month and drill them",
    webdev: "Polish full-stack project (README, demo)",
    extratech: "System Design: HLD basics recap",
    genai: "Test & debug: handle no-answer cases, check for hallucination, tune chunk size/top-k",
    csfund: "System Design: HLD basics" },

  { date: "2026-09-26", day: "Sat", type: "study", week: 4,
    sql: "Mock SQL interview round",
    dsa: "Full-syllabus timed mock (2 hrs, mixed difficulty, simulate real coding round)",
    webdev: "Project walkthrough practice",
    extratech: "Polish RAG project for resume",
    genai: "Polish project, write a clear README, prepare a 2-minute spoken walkthrough of the architecture",
    csfund: "Mock technical interview (mixed)" },

  { date: "2026-09-27", day: "Sun", type: "rest",
    note: "Full mock test — Week 4 (SQL, DSA greedy/backtracking/company sets, MERN deployment). GenAI: run through your RAG project demo end-to-end once, unscripted." },

  { date: "2026-09-28", day: "Mon", type: "revision",
    note: "Full revision day — SQL + DSA. For DSA: targeted practice on your weakest 2-3 topics only, not a full re-do." },

  { date: "2026-09-29", day: "Tue", type: "revision",
    note: "Full revision day — Web Dev + GenAI/RAG + CS Fundamentals. GenAI: rehearse explaining your RAG project and answering 'why RAG over fine-tuning' and 'how would you reduce hallucination' out loud." },

  { date: "2026-09-30", day: "Wed", type: "final",
    note: "Full mock interview day — SQL round, DSA round, project/web-dev round (be ready to walk through your RAG project specifically), HR round." }
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
    desc: "Foundations — SQL joins/aggregates, DSA arrays/strings/hashing (revision + practice), Advanced JS, Git, OOPs | GenAI/RAG: Foundations — what LLMs are, tokens, context window, how they're trained"
  },
  week2: {
    title: "Week 2: Building Depth",
    desc: "Building Depth — SQL subqueries/window functions, DSA linked list/stack/queue/trees/graphs (revision + practice), React, Docker/Cloud, DBMS | GenAI/RAG: Prompt Engineering — zero/few-shot, roles, CoT, ReAct, structured outputs"
  },
  week3: {
    title: "Week 3: Applying Skills",
    desc: "Applying Skills — SQL optimization, DSA heaps/graphs-advanced/DP (revision + practice), Node/Express APIs, System Design LLD, OS | GenAI/RAG: Embeddings & RAG Architecture — vector DBs, chunking, retriever+generator pipeline, evaluation"
  },
  week4: {
    title: "Week 4: Interview-Ready",
    desc: "Interview-Ready — DSA company-wise sets + full mocks, SQL/Web Dev revision, MERN deployment, System Design HLD, CN, mock interviews | GenAI/RAG: Build & Ship — a working RAG project, tested, documented, interview-ready"
  }
};

export const practiceProblemsData = {
  "2026-09-01": [
    { platform: "leetcode", id: "LC 53", title: "Maximum Subarray", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 189", title: "Rotate Array", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 238", title: "Product of Array Except Self", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 217", title: "Contains Duplicate", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 560", title: "Subarray Sum Equals K", difficulty: "Medium" },
    { platform: "gfg", id: "GFG", title: "Kadane's Algorithm", difficulty: "Easy" }
  ],
  "2026-09-02": [
    { platform: "leetcode", id: "LC 3", title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 5", title: "Longest Palindromic Substring", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 242", title: "Valid Anagram", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 49", title: "Group Anagrams", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 28", title: "Find the Index of the First Occurrence in a String", difficulty: "Easy" },
    { platform: "gfg", id: "GFG", title: "Rabin-Karp Pattern Search", difficulty: "Medium" }
  ],
  "2026-09-03": [
    { platform: "leetcode", id: "LC 11", title: "Container With Most Water", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 15", title: "3Sum", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 76", title: "Minimum Window Substring", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 239", title: "Sliding Window Maximum", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 904", title: "Fruit Into Baskets", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 167", title: "Two Sum II — Input Array Is Sorted", difficulty: "Medium" }
  ],
  "2026-09-04": [
    { platform: "leetcode", id: "LC 1", title: "Two Sum", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 128", title: "Longest Consecutive Sequence", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 347", title: "Top K Frequent Elements", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 205", title: "Isomorphic Strings", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 380", title: "Insert Delete GetRandom O(1)", difficulty: "Medium" },
    { platform: "gfg", id: "GFG", title: "Count Distinct Elements in Every Window", difficulty: "Medium" }
  ],
  "2026-09-05": [
    { platform: "leetcode", id: "LC 70", title: "Climbing Stairs", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 22", title: "Generate Parentheses", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 78", title: "Subsets", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 46", title: "Permutations", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 17", title: "Letter Combinations of a Phone Number", difficulty: "Medium" }
  ],
  "2026-09-07": [
    { platform: "leetcode", id: "LC 206", title: "Reverse Linked List", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 21", title: "Merge Two Sorted Lists", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 141", title: "Linked List Cycle", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 19", title: "Remove Nth Node From End of List", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 23", title: "Merge k Sorted Lists", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 138", title: "Copy List with Random Pointer", difficulty: "Medium" }
  ],
  "2026-09-08": [
    { platform: "leetcode", id: "LC 20", title: "Valid Parentheses", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 155", title: "Min Stack", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 739", title: "Daily Temperatures", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 496", title: "Next Greater Element I", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 84", title: "Largest Rectangle in Histogram", difficulty: "Hard" }
  ],
  "2026-09-09": [
    { platform: "leetcode", id: "LC 232", title: "Implement Queue using Stacks", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 622", title: "Design Circular Queue", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 239", title: "Sliding Window Maximum", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 933", title: "Number of Recent Calls", difficulty: "Easy" },
    { platform: "gfg", id: "GFG", title: "Circular Tour (Petrol Pump)", difficulty: "Medium" }
  ],
  "2026-09-10": [
    { platform: "leetcode", id: "LC 94", title: "Binary Tree Inorder Traversal", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 104", title: "Maximum Depth of Binary Tree", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 102", title: "Binary Tree Level Order Traversal", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 543", title: "Diameter of Binary Tree", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 236", title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 199", title: "Binary Tree Right View", difficulty: "Medium" }
  ],
  "2026-09-11": [
    { platform: "leetcode", id: "LC 98", title: "Validate Binary Search Tree", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 701", title: "Insert into a Binary Search Tree", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 230", title: "Kth Smallest Element in a BST", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 108", title: "Convert Sorted Array to Binary Search Tree", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 450", title: "Delete Node in a BST", difficulty: "Medium" }
  ],
  "2026-09-12": [
    { platform: "leetcode", id: "LC 200", title: "Number of Islands", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 133", title: "Clone Graph", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 207", title: "Course Schedule", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 994", title: "Rotting Oranges", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 127", title: "Word Ladder", difficulty: "Hard" }
  ],
  "2026-09-14": [
    { platform: "leetcode", id: "LC 215", title: "Kth Largest Element in an Array", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 347", title: "Top K Frequent Elements", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 23", title: "Merge k Sorted Lists", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 295", title: "Find Median from Data Stream", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 373", title: "Find K Pairs with Smallest Sums", difficulty: "Medium" }
  ],
  "2026-09-15": [
    { platform: "leetcode", id: "LC 547", title: "Number of Provinces", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 684", title: "Redundant Connection", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 721", title: "Accounts Merge", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 1584", title: "Min Cost to Connect All Points", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 990", title: "Satisfiability of Equality Equations", difficulty: "Medium" }
  ],
  "2026-09-16": [
    { platform: "leetcode", id: "LC 743", title: "Network Delay Time", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 787", title: "Cheapest Flights Within K Stops", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 1631", title: "Path With Minimum Effort", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 778", title: "Swim in Rising Water", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 1514", title: "Path with Maximum Probability", difficulty: "Medium" }
  ],
  "2026-09-17": [
    { platform: "leetcode", id: "LC 198", title: "House Robber", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 213", title: "House Robber II", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 746", title: "Min Cost Climbing Stairs", difficulty: "Easy" },
    { platform: "leetcode", id: "LC 91", title: "Decode Ways", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 322", title: "Coin Change", difficulty: "Medium" }
  ],
  "2026-09-18": [
    { platform: "leetcode", id: "LC 416", title: "Partition Equal Subset Sum", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 494", title: "Target Sum", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 518", title: "Coin Change II", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 62", title: "Unique Paths", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 64", title: "Minimum Path Sum", difficulty: "Medium" },
    { platform: "gfg", id: "GFG", title: "0/1 Knapsack Problem", difficulty: "Medium" }
  ],
  "2026-09-19": [
    { platform: "leetcode", id: "LC 1143", title: "Longest Common Subsequence", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 300", title: "Longest Increasing Subsequence", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 72", title: "Edit Distance", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 516", title: "Longest Palindromic Subsequence", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 115", title: "Distinct Subsequences", difficulty: "Hard" }
  ],
  "2026-09-21": [
    { platform: "leetcode", id: "LC 55", title: "Jump Game", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 45", title: "Jump Game II", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 134", title: "Gas Station", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 56", title: "Merge Intervals", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 435", title: "Non-overlapping Intervals", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 621", title: "Task Scheduler", difficulty: "Medium" }
  ],
  "2026-09-22": [
    { platform: "leetcode", id: "LC 51", title: "N-Queens", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 47", title: "Permutations II", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 90", title: "Subsets II", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 37", title: "Sudoku Solver", difficulty: "Hard" },
    { platform: "leetcode", id: "LC 79", title: "Word Search", difficulty: "Medium" },
    { platform: "leetcode", id: "LC 131", title: "Palindrome Partitioning", difficulty: "Medium" }
  ]
};
