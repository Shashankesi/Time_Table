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
    genai: {
      topic: "AI/ML/DL/NLP landscape",
      details: [
        "How these fields relate; why GenAI matters for placements right now",
        "Landscape definitions: AI vs Machine Learning vs Deep Learning"
      ],
      resource: { platform: "YouTube", channel: "3Blue1Brown", note: "Large Language Models explained briefly", url: "https://www.youtube.com/watch?v=LPZh9BOjkQs" }
    },
    csfund: {
      topic: "OOPs: Class & Object",
      details: [
        "Class vs object analogy; constructors; access modifiers (public/private/protected)",
        "Practice: model 2 real objects as classes in your language of choice"
      ],
      resource: { platform: "YouTube", channel: "Kunal Kushwaha", note: "OOPs playlist — clean, code-first explanations", url: "https://www.youtube.com/@KunalKushwaha" }
    },
    aptitude: {
      topic: "Number system, percentages, ratios",
      details: [
        "Foundation quant topics — these show up in almost every aptitude round",
        "Number systems conversion rules and shortcuts"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude placement tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-02", day: "Wed", type: "study", week: 1,
    sql: "GROUP BY, HAVING",
    dsa: "Strings: full revision + timed practice set (pattern matching, anagrams, substrings)",
    webdev: "Advanced JS: promises & async/await",
    extratech: "Git branching",
    genai: {
      topic: "What is an LLM? Transformer intuition",
      details: [
        "Attention mechanism explained conceptually, no math required yet",
        "Encoder-decoder stack conceptual walkthrough"
      ],
      resource: { platform: "YouTube", channel: "3Blue1Brown", note: "Large Language Models explained briefly", url: "https://www.youtube.com/watch?v=LPZh9BOjkQs" }
    },
    csfund: {
      topic: "OOPs: Inheritance",
      details: [
        "Single/multiple/multilevel inheritance; super/extends keywords",
        "When inheritance is the wrong tool (favor composition)"
      ],
      resource: { platform: "YouTube", channel: "Kunal Kushwaha", note: "OOPs playlist", url: "https://www.youtube.com/@KunalKushwaha" }
    },
    aptitude: {
      topic: "Number system, percentages, ratios",
      details: [
        "Ratio proportions, percentages calculations, indices rules",
        "Solving 10 medium ratio questions"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude placement tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-03", day: "Thu", type: "study", week: 1,
    sql: "INNER/LEFT/RIGHT JOIN",
    dsa: "Two-pointer & sliding window: revision + medium/hard practice set",
    webdev: "Advanced JS: event loop, call stack, microtasks vs macrotasks",
    extratech: "Git merge & conflicts",
    genai: {
      topic: "Tokens, context window, temperature",
      details: [
        "Run 3 prompts at different temperatures, observe output changes yourself",
        "Understand context window constraints and billing rules"
      ],
      resource: { platform: "YouTube", channel: "Andrej Karpathy", note: "Intro to Large Language Models", url: "https://youtu.be/zjkBMFhNj_g" }
    },
    csfund: {
      topic: "OOPs: Polymorphism",
      details: [
        "Compile-time (overloading) vs runtime (overriding)",
        "Write one code example of each to explain in interviews"
      ],
      resource: { platform: "YouTube", channel: "Kunal Kushwaha", note: "OOPs playlist", url: "https://www.youtube.com/@KunalKushwaha" }
    },
    aptitude: {
      topic: "Number system, percentages, ratios",
      details: [
        "Sub-topic: percentages practice and shortcuts",
        "Solve 10 timed percentage questions"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude placement tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-04", day: "Fri", type: "study", week: 1,
    sql: "FULL JOIN, Self Join",
    dsa: "Hashing/HashMap: revision + practice (frequency counting, grouping, subarray-sum problems)",
    webdev: "DOM APIs + Fetch API — build an interactive UI without a framework",
    extratech: "GitHub PR workflow",
    genai: {
      topic: "How LLMs are trained",
      details: [
        "Pretraining -> fine-tuning -> RLHF (high level, no math required)",
        "Role of human feedback and dataset preparation"
      ],
      resource: { platform: "YouTube", channel: "Andrej Karpathy", note: "Intro to Large Language Models", url: "https://youtu.be/zjkBMFhNj_g" }
    },
    csfund: {
      topic: "OOPs: Encapsulation & Abstraction",
      details: [
        "Getters/setters and why; abstract classes vs interfaces",
        "Real interview trap: difference between abstraction and encapsulation"
      ],
      resource: { platform: "YouTube", channel: "Kunal Kushwaha", note: "OOPs playlist", url: "https://www.youtube.com/@KunalKushwaha" }
    },
    aptitude: {
      topic: "Number system, percentages, ratios",
      details: [
        "Practice 10 timed questions on number systems",
        "Focus on LCM/HCF based puzzle questions"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude placement tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-05", day: "Sat", type: "study", week: 1,
    sql: "Aggregate functions + mixed JOIN practice (timed)",
    dsa: "Recursion & basic backtracking: revision + timed practice set",
    webdev: "Mini vanilla-JS project (Fetch-based app) + JS fundamentals recap",
    extratech: "Weekly recap: Git workflow end-to-end",
    genai: {
      topic: "Phase 1 recap",
      details: [
        "Explain 'what is an LLM' out loud, no notes",
        "Optional deep dive: Let's build GPT: from scratch (2 hrs)"
      ],
      resource: { platform: "YouTube", channel: "Andrej Karpathy", note: "Let's build GPT from scratch", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" }
    },
    csfund: {
      topic: "OOPs: Full Revision",
      details: [
        "Redo all 4 pillars from memory with your own code examples, no notes",
        "Attempt 5 OOPs interview questions timed"
      ],
      resource: { platform: "YouTube", channel: "Kunal Kushwaha", note: "OOPs playlist", url: "https://www.youtube.com/@KunalKushwaha" }
    },
    aptitude: {
      topic: "Number system, percentages, ratios",
      details: [
        "Recap Week 1 quant topics under test conditions",
        "Review mistakes and compile cheat-sheets"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude placement tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-06", day: "Sun", type: "rest",
    note: "Full mock test — Week 1 (SQL, DSA arrays/strings/hashing/recursion, Advanced JS). GenAI: no test, just make sure you can explain tokens/context window/temperature simply." },

  { date: "2026-09-07", day: "Mon", type: "study", week: 2,
    sql: "Subqueries",
    dsa: "Linked List: full revision + practice (reverse, merge, cycle detection, intersection)",
    webdev: "React: setup + JSX",
    extratech: "Vector embeddings intro",
    genai: {
      topic: "Zero-shot vs few-shot prompting",
      details: [
        "Write the same task both ways, compare output quality",
        "Learn how few-shot examples anchor model styling"
      ],
      resource: { platform: "YouTube", channel: "Prompt Engineering", note: "Prompt engineering techniques", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: Normalization (1NF–3NF)",
      details: [
        "Why normalize; anomalies it prevents",
        "Normalize one sample messy table by hand"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "DBMS Normalization tutorials", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Time-Speed-Distance, Time & Work",
      details: [
        "Time and Work speed formulas; work rates",
        "Solve 10 basic questions on work completion rates"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-08", day: "Tue", type: "study", week: 2,
    sql: "Correlated subqueries",
    dsa: "Stack: revision + practice (monotonic stack problems, next greater/smaller element)",
    webdev: "React: components & props",
    extratech: "Vector DB overview (Pinecone/FAISS)",
    genai: {
      topic: "System/user/assistant roles",
      details: [
        "Instructions vs context - where each belongs in a prompt",
        "System prompt formatting for safety constraints"
      ],
      resource: { platform: "YouTube", channel: "Prompt Engineering", note: "Prompt roles and structures", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: Keys",
      details: [
        "Primary, foreign, candidate, composite, super key",
        "Key differences with examples"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "DBMS playlist", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Time-Speed-Distance, Time & Work",
      details: [
        "Time, Speed, Distance classic equations",
        "Relative speed rules for trains and platforms"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-09", day: "Wed", type: "study", week: 2,
    sql: "Window functions (RANK, ROW_NUMBER)",
    dsa: "Queue & Deque: revision + practice (sliding window max, circular queue problems)",
    webdev: "React: state & useState",
    extratech: "Chunking strategies for documents",
    genai: {
      topic: "Chain-of-Thought (CoT)",
      details: [
        "'Think step by step' - when it helps (reasoning tasks) vs when it doesn't (lookups)",
        "Zero-shot CoT vs Few-shot CoT"
      ],
      resource: { platform: "YouTube", channel: "Prompt Engineering", note: "Reasoning prompts", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: ACID properties",
      details: [
        "Atomicity, Consistency, Isolation, Durability",
        "One real-world failure example per property"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "DBMS playlist", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Time-Speed-Distance, Time & Work",
      details: [
        "Practice 10 timed problems on Time & Work",
        "Focus on worker efficiency changes"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-10", day: "Thu", type: "study", week: 2,
    sql: "Window functions (LEAD, LAG)",
    dsa: "Binary Trees: revision + practice (traversals, views, diameter, LCA)",
    webdev: "React: useEffect, hooks",
    extratech: "RAG architecture overview",
    genai: {
      topic: "Self-consistency & ReAct",
      details: [
        "Reason + Act pattern - build one small example combining reasoning and a tool call",
        "Looping logic of Thought -> Action -> Observation -> Thought"
      ],
      resource: { platform: "YouTube", channel: "Prompt Engineering", note: "ReAct patterns", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: Transactions & concurrency",
      details: [
        "Isolation levels, dirty reads, phantom reads",
        "Know these by name for interviews"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "DBMS playlist", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Time-Speed-Distance, Time & Work",
      details: [
        "Practice 10 timed problems on Time-Speed-Distance",
        "Sub-topic: Boats and streams problems"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-11", day: "Fri", type: "study", week: 2,
    sql: "CTEs (Common Table Expressions)",
    dsa: "BST + balanced trees: revision + practice (validate BST, insert/delete, AVL basics)",
    webdev: "React: forms & events",
    extratech: "Docker: images vs containers",
    genai: {
      topic: "Structured outputs",
      details: [
        "JSON mode / function calling - get a model to return parseable data reliably",
        "Enforcing Pydantic schemas in output definitions"
      ],
      resource: { platform: "YouTube", channel: "Prompt Engineering", note: "Structured outputs", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: Indexing",
      details: [
        "Clustered vs non-clustered indexes",
        "When an index helps vs hurts write performance"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "DBMS playlist", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Time-Speed-Distance, Time & Work",
      details: [
        "Tackle mixed problems on Time & Work / TSD",
        "Practice solving under 1.5 minutes per question"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-12", day: "Sat", type: "study", week: 2,
    sql: "Mixed subquery + window practice",
    dsa: "Graphs (BFS/DFS): revision + practice set (connected components, cycle detection)",
    webdev: "React mini project",
    extratech: "Docker: Dockerfile basics",
    genai: {
      topic: "Build a prompt library",
      details: [
        "10 tested, reusable prompt templates - your first portfolio artifact",
        "Organize templates by role: code helper, writing assistant, system reviewer"
      ],
      resource: { platform: "YouTube", channel: "Prompt Engineering", note: "Building templates", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: Full Revision",
      details: [
        "Timed mock: 10 DBMS interview questions, no lookup"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "DBMS playlist", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Time-Speed-Distance, Time & Work",
      details: [
        "Weekly recap and speed verification tests",
        "Identify and review weak points"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-13", day: "Sun", type: "rest",
    note: "Full mock test — Week 2 (SQL, DSA: linked list/stack/queue/trees/graphs, React basics). GenAI: review your prompt library, refine 3 weakest entries." },

  { date: "2026-09-14", day: "Mon", type: "study", week: 3,
    sql: "Query optimization basics",
    dsa: "Heaps & Priority Queue: revision + practice (k-th largest, merge k lists, top-k problems)",
    webdev: "Node.js basics",
    extratech: "AWS: EC2 intro",
    genai: {
      topic: "Embeddings",
      details: [
        "What they encode; how semantic search differs from keyword search",
        "Dimensions, distance metrics (Cosine similarity, L2, dot product)"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "Introduction to RAG", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "OS: Process vs Thread",
      details: [
        "Memory sharing differences; context switching cost; when to use multithreading",
        "Multiprocessing vs Multithreading"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "OS Process Management", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Logical reasoning: puzzles, seating, blood relations",
      details: [
        "Blood relations diagrams and practice",
        "Coded blood relations questions"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Logical Reasoning tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-15", day: "Tue", type: "study", week: 3,
    sql: "Indexing (clustered/non-clustered)",
    dsa: "Graphs: Union-Find & Minimum Spanning Tree — revision + practice",
    webdev: "Express.js setup",
    extratech: "AWS: S3 basics",
    genai: {
      topic: "Vector databases",
      details: [
        "Pinecone vs FAISS vs Chroma - pick one to use for your project",
        "Index types: Flat, HNSW, IVF"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "Vector databases", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "OS: Scheduling algorithms",
      details: [
        "FCFS, SJF, Round Robin, Priority - trade-offs of each",
        "Preemptive vs non-preemptive scheduling"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "OS playlist", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Logical reasoning: puzzles, seating, blood relations",
      details: [
        "Seating arrangements (circular and linear)",
        "Facing inside vs facing outside circular puzzle rules"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Logical Reasoning tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-16", day: "Wed", type: "study", week: 3,
    sql: "Views & stored procedures intro",
    dsa: "Graphs: Dijkstra & shortest-path algorithms — revision + practice",
    webdev: "REST API design principles",
    extratech: "System Design: LLD intro",
    genai: {
      topic: "Chunking strategies",
      details: [
        "Fixed-size vs semantic chunking; overlap trade-offs",
        "Impact of chunk sizes on retrieval relevance and context"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "Chunking documents", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "OS: Memory management",
      details: [
        "Paging vs segmentation; virtual memory; page faults",
        "Page replacement policies (FIFO, LRU, Optimal)"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "OS Memory Management", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Logical reasoning: puzzles, seating, blood relations",
      details: [
        "Logical puzzles and riddle sets",
        "Grid based categorization puzzles"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Logical Reasoning tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-17", day: "Thu", type: "study", week: 3,
    sql: "Real-world query writing",
    dsa: "DP (1D): revision + practice (climbing stairs, house robber, coin change)",
    webdev: "Building REST APIs (CRUD)",
    extratech: "System Design: caching basics",
    genai: {
      topic: "RAG architecture",
      details: [
        "Retriever + generator pipeline, draw the full diagram yourself",
        "Understanding query reformulation and search parameters"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "RAG Architecture", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "OS: Deadlocks",
      details: [
        "4 necessary conditions; prevention vs avoidance vs detection",
        "Banker's Algorithm for deadlock avoidance"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "OS Deadlock tutorials", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Logical reasoning: puzzles, seating, blood relations",
      details: [
        "Practice pattern recognition speed",
        "Directions and distance logical tests"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Logical Reasoning tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-18", day: "Fri", type: "study", week: 3,
    sql: "Real-world query writing (joins + agg)",
    dsa: "DP (2D / Knapsack): revision + practice (0/1 knapsack, unbounded knapsack, grid DP)",
    webdev: "Connecting frontend to backend API",
    extratech: "CI/CD: GitHub Actions basics",
    genai: {
      topic: "Hybrid search & re-ranking",
      details: [
        "Combining keyword (BM25) + vector search",
        "Cross-encoders and reciprocal rank fusion (RRF) algorithms"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "Hybrid search", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "OS: Paging & segmentation (deep dive)",
      details: [
        "Internal vs external fragmentation",
        "Page table structure, TLB (Translation Lookaside Buffer)"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "OS memory deep-dive", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Logical reasoning: puzzles, seating, blood relations",
      details: [
        "Mixed logical reasoning timed tests",
        "Focus on 1-minute thresholds per puzzle"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Logical Reasoning tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-19", day: "Sat", type: "study", week: 3,
    sql: "Timed SQL mock test",
    dsa: "DP (LCS, LIS, string DP): revision + practice",
    webdev: "Auth basics (JWT) in API",
    extratech: "Weekly recap: cloud + system design LLD",
    genai: {
      topic: "RAG evaluation",
      details: [
        "Faithfulness, relevance, and reducing hallucination",
        "Using Ragas framework metrics conceptual understanding"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "Evaluating RAG pipelines", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "OS: Full Revision",
      details: [
        "Timed mock: 10 OS interview questions, no lookup"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "OS playlist", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Logical reasoning: puzzles, seating, blood relations",
      details: [
        "Recap Week 3 Logical Reasoning",
        "Review tricky blood relation puzzles"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Logical Reasoning tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-20", day: "Sun", type: "rest",
    note: "Full mock test — Week 3 (SQL, DSA: heaps/graphs advanced/DP, Node/Express/REST APIs). GenAI: if Phase 2/3 feels shaky, use today to patch gaps before starting the build week." },

  { date: "2026-09-21", day: "Mon", type: "study", week: 4,
    sql: "Full SQL revision",
    dsa: "Greedy algorithms: revision + practice (interval scheduling, activity selection)",
    webdev: "MERN: connect MongoDB",
    extratech: "System Design: HLD basics",
    genai: {
      topic: "Project setup",
      details: [
        "Choose stack (LangChain/LlamaIndex + free LLM API + Chroma/FAISS)",
        "Set up python virtual env, import API keys and load skeletons"
      ],
      resource: { platform: "Official Docs", channel: "LangChain & LlamaIndex", note: "LangChain docs: https://python.langchain.com/docs/introduction/ | LlamaIndex docs: https://docs.llamaindex.ai/", url: "https://python.langchain.com/docs/introduction/" }
    },
    csfund: {
      topic: "CN: OSI model",
      details: [
        "All 7 layers, one real-world example of what happens at each layer",
        "Difference between presentation/session/application boundary layers"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "CN OSI layers", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Data Interpretation + mocks",
      details: [
        "Bar graphs, pie charts, and data tables",
        "Calculating percentage shifts from charts"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude and DI tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-22", day: "Tue", type: "study", week: 4,
    sql: "Timed SQL problems (mixed)",
    dsa: "Backtracking (advanced): N-Queens, permutations, subsets, Sudoku solver — practice",
    webdev: "MERN: full CRUD app",
    extratech: "System Design: load balancing",
    genai: {
      topic: "Ingestion pipeline",
      details: [
        "Document loading, chunking, embedding",
        "Setup automated local PDF parsing script"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "RAG Tutorial video", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "CN: TCP/IP model",
      details: [
        "TCP vs UDP - when each is used; 3-way handshake",
        "Header fields and connection termination states"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "CN TCP/IP layers", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Data Interpretation + mocks",
      details: [
        "Data interpretation speed drills",
        "Averaging data series from multiple columns"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude and DI tutorials", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-23", day: "Wed", type: "study", week: 4,
    sql: "SQL interview questions practice",
    dsa: "Company-wise practice set 1 (top Amazon/Google problems, timed)",
    webdev: "Deploy backend (Render/Railway)",
    extratech: "Finish + test RAG project",
    genai: {
      topic: "Retrieval + generation",
      details: [
        "Connect retrieved context to the LLM",
        "Prompt template overrides to restrict hallucination limits"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "RAG Tutorial video", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "CN: HTTP/HTTPS, status codes",
      details: [
        "Common status codes (200/301/404/500) and what causes each",
        "TLS handshake basics (keys negotiation)"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "CN web protocols", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Data Interpretation + mocks",
      details: [
        "Full timed mock aptitude: 20 questions, 20-min timer",
        "Identify topic gaps in timed tests"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Mock tests", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-24", day: "Thu", type: "study", week: 4,
    sql: "SQL revision + flashcards",
    dsa: "Company-wise practice set 2 (top Microsoft/Flipkart problems, timed)",
    webdev: "Deploy frontend (Vercel/Netlify)",
    extratech: "Advanced prompting: structured outputs",
    genai: {
      topic: "Minimal UI",
      details: [
        "Add a minimal UI (Streamlit or a simple web page) so the RAG demo is actually clickable",
        "Bind text input queries to custom local API routing"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "RAG Tutorial video", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "CN: DNS & load balancing",
      details: [
        "How DNS resolution works step by step",
        "Round-robin vs least-connections load balancing"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "CN DNS and balancing", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Data Interpretation + mocks",
      details: [
        "Full timed mock aptitude test 2",
        "Benchmark percentile scores"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Mock tests", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-25", day: "Fri", type: "study", week: 4,
    sql: "Mock SQL interview round",
    dsa: "Weak-topic focused revision — pick your 2-3 shakiest topics from the month and drill them",
    webdev: "Polish full-stack project (README, demo)",
    extratech: "System Design: HLD basics recap",
    genai: {
      topic: "Test & debug",
      details: [
        "Test & debug: handle no-answer cases, check for hallucination, tune chunk size/top-k",
        "Compare retrieval relevancy with different chunk splits"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "Testing RAG pipelines", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "HLD basics",
      details: [
        "Horizontal vs vertical scaling, caching, load balancers, CAP theorem — enough to survive a fresher-level HLD question",
        "Identify single point of failures (SPOF)"
      ],
      resource: { platform: "YouTube", channel: "Gaurav Sen", note: "System design basics for freshers", url: "https://www.youtube.com/c/GauravSensei/videos" }
    },
    aptitude: {
      topic: "Data Interpretation + mocks",
      details: [
        "Aptitude weak-area targeted review",
        "Practice 10 compound interest questions"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Aptitude reviews", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

  { date: "2026-09-26", day: "Sat", type: "study", week: 4,
    sql: "Mock SQL interview round",
    dsa: "Full-syllabus timed mock (2 hrs, mixed difficulty, simulate real coding round)",
    webdev: "Project walkthrough practice",
    extratech: "Polish RAG project for resume",
    genai: {
      topic: "Polish & document",
      details: [
        "Polish project, write a clear README, prepare a 2-minute spoken walkthrough of the architecture",
        "Refine GitHub repository files"
      ],
      resource: { platform: "YouTube", channel: "RAG Tutorial 2026", note: "Packaging RAG apps", url: "https://www.youtube.com/watch?v=vAK0iqA6-QI" }
    },
    csfund: {
      topic: "Mock technical interview (mixed)",
      details: [
        "Mock interview questions on all subjects",
        "Practicing speed and communication confidence"
      ],
      resource: { platform: "YouTube", channel: "Gate Smashers", note: "CS mock tests", url: "https://www.youtube.com/gatesmashers" }
    },
    aptitude: {
      topic: "Data Interpretation + mocks",
      details: [
        "Final checklist for placement tests",
        "Formula cheatsheet reviews"
      ],
      resource: { platform: "YouTube", channel: "CareerRide", note: "Mock tests", url: "https://www.youtube.com/channel/UCjDHKp8AGNucJmEBMCk0NGg" }
    }
  },

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
