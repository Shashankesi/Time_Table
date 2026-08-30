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
      topic: "What is an API call to an LLM?",
      details: [
      "Client → request → model → response — the basic shape of every AI feature you'll ever build",
      "Why apps call an API instead of running a model themselves (cost, hosting, maintenance)",
      "Hands-on: make your very first API call (Anthropic Console or OpenAI Playground, no code needed yet)"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Practical, code-first GenAI/API tutorials", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "OOPs: Class & Object",
      details: [
      "Class vs object analogy; constructors; access modifiers (public/private/protected)",
      "Practice: model 2 real objects as classes in your language of choice",
      "MOST ASKED: 'What is the difference between a class and an object?'",
      "Also common: 'Why do we need constructors — can't we just set values directly?'"
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
      topic: "Message format: system, user, assistant roles",
      details: [
      "How a conversation is structured as a list of role-tagged messages, not free text",
      "System prompt = behavior/persona instructions; user = the actual question; assistant = the model's prior replies",
      "Hands-on: write a system prompt that changes how the same question gets answered"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Same channel — API fundamentals playlist", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "OOPs: Inheritance",
      details: [
      "Single/multiple/multilevel inheritance; super/extends keywords",
      "When inheritance is the wrong tool (favor composition)",
      "MOST ASKED: 'Difference between single and multiple inheritance'",
      "Also common: 'Why doesn't Java support multiple inheritance through classes?'"
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
      topic: "Key parameters: temperature, max_tokens, top_p",
      details: [
      "Temperature controls randomness — low for factual tasks, higher for creative ones",
      "max_tokens caps response length (and cost)",
      "Hands-on: call the API with 3 different temperatures on the same prompt, compare outputs"
    ],
      resource: { platform: "Docs", channel: "Anthropic API Docs", note: "Official parameter reference", url: "https://docs.claude.com" }
    },
    csfund: {
      topic: "OOPs: Polymorphism",
      details: [
      "Compile-time (overloading) vs runtime (overriding)",
      "Write one code example of each to explain in interviews",
      "MOST ASKED: 'Difference between method overloading and method overriding'",
      "Also common: 'What is runtime polymorphism vs compile-time polymorphism?'"
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
      topic: "API keys, authentication, rate limits & pricing",
      details: [
      "How API keys work, why they must never be exposed in frontend code",
      "Rate limits — what happens when you exceed them, how to handle it gracefully",
      "Token-based pricing — why counting tokens matters for cost control"
    ],
      resource: { platform: "Docs", channel: "Anthropic / OpenAI API Docs", note: "Official auth & pricing docs", url: "https://docs.claude.com" }
    },
    csfund: {
      topic: "OOPs: Encapsulation & Abstraction",
      details: [
      "Getters/setters and why; abstract classes vs interfaces",
      "Real interview trap: difference between abstraction and encapsulation",
      "MOST ASKED: 'Difference between abstraction and encapsulation' — the classic trap question, most candidates blur these together",
      "Also common: 'Abstract class vs interface ─ when would you use each?'"
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
      topic: "Phase 1 recap: draw the complete flow from memory",
      details: [
      "Draw (paper or whiteboard tool) the full request→response flow with no notes",
      "Explain out loud: what happens between a user typing a message and seeing a reply",
      "This diagram is the foundation for every phase that follows"
    ],
      resource: { platform: "Self-test", channel: "N/A", note: "No video — this is a recall exercise", url: "" }
    },
    csfund: {
      topic: "OOPs: Full Revision",
      details: [
      "Redo all 4 pillars from memory with your own code examples, no notes",
      "Attempt 5 OOPs interview questions timed",
      "Timed self-test: explain all 4 OOPs pillars with one original example each, under 5 minutes, no notes"
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
      topic: "Zero-shot vs few-shot — inside real API calls",
      details: [
      "Zero-shot: just ask. Few-shot: show 2-3 examples in the prompt before the real question",
      "Hands-on: send both versions via API for the same task, compare output quality"
    ],
      resource: { platform: "YouTube", channel: "Prompt Engineering (@engineerprompt)", note: "Application-focused prompting tutorials", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: Normalization (1NF–3NF)",
      details: [
      "Why normalize; anomalies it prevents",
      "Normalize one sample messy table by hand",
      "MOST ASKED: 'What is normalization and why do we need it?'",
      "Also common: 'Difference between 2NF and 3NF' — know it precisely, not just vaguely"
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
      topic: "Designing a system prompt for a real app persona",
      details: [
      "Write a system prompt for a specific use case (e.g. a customer support bot, a code reviewer)",
      "Test edge cases — does it stay in character when asked something off-topic?"
    ],
      resource: { platform: "YouTube", channel: "Prompt Engineering (@engineerprompt)", note: "System prompt design patterns", url: "https://www.youtube.com/@engineerprompt" }
    },
    csfund: {
      topic: "DBMS: Keys",
      details: [
      "Primary, foreign, candidate, composite, super key",
      "Key differences with examples",
      "MOST ASKED: 'Difference between primary key and unique key'",
      "Also common: 'What is a composite key, give an example'"
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
      topic: "Multi-turn conversations: how history actually works",
      details: [
      "APIs are stateless — YOUR app resends the full message history with every call",
      "Hands-on: build a simple loop that appends each turn to a growing message list"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Conversation/session management in code", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "DBMS: ACID properties",
      details: [
      "Atomicity, Consistency, Isolation, Durability",
      "One real-world failure example per property",
      "MOST ASKED: 'Explain ACID properties, one real example per property'"
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
      topic: "Streaming responses",
      details: [
      "What streaming is and why chat apps use it (perceived speed, better UX)",
      "Conceptual walkthrough of a streamed API response vs waiting for the full completion"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Streaming implementation walkthrough", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "DBMS: Transactions & concurrency",
      details: [
      "Isolation levels, dirty reads, phantom reads",
      "Know these by name for interviews",
      "MOST ASKED: 'What is a dirty read?'",
      "Also common: name the isolation levels in order, weakest to strongest"
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
      topic: "Structured outputs: JSON mode & tool/function calling",
      details: [
      "Getting the model to return parseable data instead of free text",
      "This is the same mechanism agents use to call real functions — foundation for Day 25"
    ],
      resource: { platform: "Docs + YouTube", channel: "Anthropic Docs / Krish Naik", note: "Tool use docs + hands-on example", url: "https://docs.claude.com" }
    },
    csfund: {
      topic: "DBMS: Indexing",
      details: [
      "Clustered vs non-clustered indexes",
      "When an index helps vs hurts write performance",
      "MOST ASKED: 'When would adding an index actually slow performance down?' — tests real understanding, not memorization"
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
      topic: "Build a mini chatbot on the raw API",
      details: [
      "No framework — just you, an API key, and a loop",
      "This is your first real integration project, keep the code for your portfolio"
    ],
      resource: { platform: "Self-project", channel: "N/A", note: "Apply everything from Phase 2 hands-on", url: "" }
    },
    csfund: {
      topic: "DBMS: Full Revision",
      details: [
      "Timed mock: 10 DBMS interview questions, no lookup",
      "Timed self-test: explain normalization + ACID + indexing in under 3 minutes total, no notes"
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
      topic: "Embeddings via API — what the numbers mean",
      details: [
      "Call an embedding endpoint, look at the actual vector output",
      "Similar meaning → similar vectors — this is the whole trick behind semantic search"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Complete RAG playlist", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "OS: Process vs Thread",
      details: [
      "Process vs Thread — memory sharing differences, context switching cost",
      "MOST ASKED: 'What happens when you create a new process vs a new thread?'",
      "Practice: explain with a real example (e.g. a web server handling requests)"
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
      topic: "Vector databases: storing & querying embeddings",
      details: [
      "Chroma vs FAISS vs Pinecone — pick one to use for your project",
      "Hands-on: store 5 sample embeddings, query for the nearest match"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Vector DB setup walkthrough", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "OS: Scheduling algorithms",
      details: [
      "Scheduling algorithms — FCFS, SJF, Round Robin, Priority",
      "MOST ASKED: compare Round Robin vs Priority scheduling trade-offs",
      "Also commonly asked: what is a context switch and why is it expensive"
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
      topic: "Chunking a real document",
      details: [
      "Take an actual PDF/text file, split it into chunks by hand first, then with code",
      "Fixed-size vs overlap trade-offs — see the difference on a real document, not theory"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Document processing for RAG", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "OS: Memory management",
      details: [
      "Memory management — paging vs segmentation, virtual memory, page faults",
      "MOST ASKED: 'What is virtual memory and why do we need it?'",
      "Also commonly asked: internal vs external fragmentation, with examples"
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
      topic: "The complete RAG flow, end to end",
      details: [
      "Question → embed → search vector DB → retrieve top chunks → insert into prompt → call LLM API → return answer",
      "Trace this flow through your own code line by line — this is the core skill this month builds toward"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Complete RAG Playlist", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVM8Pf4U67L4UuDRgV4TNX9D" }
    },
    csfund: {
      topic: "OS: Deadlocks",
      details: [
      "Deadlocks — 4 necessary conditions, prevention vs avoidance vs detection",
      "MOST ASKED: give a real-world analogy for a deadlock, then map it to the 4 conditions",
      "Also commonly asked: process synchronization — semaphores vs mutex (add this even though not in original plan — comes up often alongside deadlocks)"
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
      "Combining keyword search (BM25) with vector search for better retrieval",
      "Re-ranking retrieved chunks before sending them to the LLM"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Advanced retrieval techniques", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "OS: Paging & segmentation (deep dive)",
      details: [
      "Paging & segmentation deep dive — page table structure",
      "MOST ASKED: 'Difference between paging and segmentation' — a near-guaranteed one-liner question"
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
      topic: "Evaluating your RAG pipeline",
      details: [
      "Is it actually answering correctly, or confidently making things up?",
      "Basic checks: does the answer come from the retrieved chunks, or from the model's general knowledge?"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "RAG evaluation basics", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "OS: Full Revision",
      details: [
      "OS full revision — timed mock, 10 questions, no lookup",
      "Prioritize re-drilling: process vs thread, deadlock conditions, paging vs segmentation, virtual memory — these four cover the large majority of OS questions actually asked"
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
      topic: "Architecture: how frontend, backend & API fit together",
      details: [
      "Where the API key lives (backend only, never frontend)",
      "Draw your project's architecture before writing any code"
    ],
      resource: { platform: "Self-project", channel: "N/A", note: "Planning day for the build", url: "" }
    },
    csfund: {
      topic: "CN: OSI model",
      details: [
      "OSI model — all 7 layers, one real-world example per layer",
      "MOST ASKED: 'Walk me through what happens when you type a URL and hit enter' — maps directly to OSI/TCP-IP layers, near-guaranteed question"
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
      topic: "Build the ingestion pipeline",
      details: [
      "Real code: documents → chunks → embeddings → vector store, as an actual runnable script"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Follow along with the RAG playlist", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "CN: TCP/IP model",
      details: [
      "TCP/IP model — TCP vs UDP, 3-way handshake",
      "MOST ASKED: 'Difference between TCP and UDP, with a real use case for each'",
      "Also commonly asked: what is the 3-way handshake, step by step"
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
      topic: "Build the retrieval + generation endpoint",
      details: [
      "A backend route that does the full RAG flow: takes a question, returns an answer"
    ],
      resource: { platform: "YouTube", channel: "Krish Naik", note: "Same playlist, backend integration section", url: "https://www.youtube.com/@krishnaik06" }
    },
    csfund: {
      topic: "CN: HTTP/HTTPS, status codes",
      details: [
      "HTTP/HTTPS, status codes — common codes and what causes each",
      "MOST ASKED: explain the TLS/SSL handshake at a high level",
      "Also frequently tested: IP addressing basics — what is a subnet, how IP classes work (add this — comes up often in MCQ-style rounds even though not originally scheduled)"
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
      topic: "Connect it to a simple frontend",
      details: [
      "User types a question, sees the answer — doesn't need to be pretty, needs to work end to end"
    ],
      resource: { platform: "Self-project", channel: "N/A", note: "Reuse your Web Dev skills from this month", url: "" }
    },
    csfund: {
      topic: "CN: DNS & load balancing",
      details: [
      "DNS & load balancing — DNS resolution step by step",
      "MOST ASKED: 'How does DNS resolution work?' — walk through resolver → root → TLD → authoritative server",
      "Also commonly asked: round-robin vs least-connections load balancing"
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
      topic: "Tool/function calling — the real agent loop",
      details: [
      "Model decides it needs a tool → your code runs the real function → result goes back to the model → model responds using that result",
      "Hands-on: give the model access to one real function (e.g. a calculator or a search function)"
    ],
      resource: { platform: "Docs + YouTube", channel: "Anthropic Docs / Krish Naik", note: "Tool use / agent basics", url: "https://docs.claude.com" }
    },
    csfund: {
      topic: "HLD basics",
      details: [
      "Horizontal vs vertical scaling, caching, load balancers, CAP theorem — enough to survive a fresher-level HLD question",
      "Identify single point of failures (SPOF)",
      "MOST ASKED: 'Horizontal vs vertical scaling — trade-offs of each'",
      "Also common: give one real example of a CAP theorem trade-off"
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
      topic: "Error handling, cost control & polish",
      details: [
      "Handle rate limits and API errors gracefully instead of crashing",
      "Add basic cost awareness (token counting) — a small but interview-impressive detail",
      "Write your project README and prepare a 2-minute spoken walkthrough of the complete flow"
    ],
      resource: { platform: "Self-project", channel: "N/A", note: "Final polish day", url: "" }
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
  technical: {
    oops: [
      {
        id: "tech_oops_1",
        q: "What are the four main pillars of OOPs and how do you explain them?",
        outline: [
          "Inheritance: Reusing code from parent to child (e.g. Employee -> Manager)",
          "Polymorphism: One interface, multiple forms (Overloading vs Overriding)",
          "Encapsulation: Bundling data and methods, hiding state via private fields",
          "Abstraction: Hiding implementation details via interfaces/abstract classes"
        ]
      },
      {
        id: "tech_oops_2",
        q: "What is the difference between an Abstract Class and an Interface?",
        outline: [
          "Abstract classes can have state (instance variables) and constructors; interfaces cannot",
          "A class can extend only one abstract class, but implement multiple interfaces",
          "Use abstract classes for 'is-a' relationships; interfaces for 'can-do' features"
        ]
      }
    ],
    dbms: [
      {
        id: "tech_dbms_1",
        q: "Explain Normalization (1NF, 2NF, 3NF) and why we use it.",
        outline: [
          "1NF: Atomic values, no repeating groups",
          "2NF: In 1NF + no partial dependency on candidate keys",
          "3NF: In 2NF + no transitive dependency",
          "Use case: Prevents insert/update/delete anomalies and saves storage space"
        ]
      },
      {
        id: "tech_dbms_2",
        q: "What are ACID properties in a database?",
        outline: [
          "Atomicity: All-or-nothing execution",
          "Consistency: Database transitions from one valid state to another",
          "Isolation: Concurrent transactions run without interfering with each other",
          "Durability: Committed changes survive system crashes"
        ]
      }
    ],
    os: [
      {
        id: "tech_os_1",
        q: "What is the difference between a Process and a Thread?",
        outline: [
          "A process is a program in execution with its own memory space",
          "A thread is a path of execution within a process, sharing memory with other threads",
          "Context switching is expensive for processes, cheap for threads",
          "Threads communicate directly; processes require IPC (Inter-Process Communication)"
        ]
      },
      {
        id: "tech_os_2",
        q: "What is a Deadlock and what are the 4 necessary conditions for it?",
        outline: [
          "A state where threads are blocked waiting for resources held by each other",
          "Conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
          "Prevention: Break any of these 4 conditions (e.g., resource ordering)"
        ]
      }
    ],
    cn: [
      {
        id: "tech_cn_1",
        q: "Explain the OSI Model layers and a real-world example of each.",
        outline: [
          "Application/Presentation/Session: User interaction, formatting, session control",
          "Transport: Segmenting data and reliability (TCP/UDP ports)",
          "Network/Data Link/Physical: Routing (IP), MAC addressing, physical cables",
          "Analogy: Sending a physical letter inside envelopes and sorting trucks"
        ]
      },
      {
        id: "tech_cn_2",
        q: "What is the difference between TCP and UDP?",
        outline: [
          "TCP is connection-oriented, reliable, guarantees packet order, has flow control",
          "UDP is connectionless, fast, has overhead latency reduction, but is unreliable",
          "TCP is used for HTTP, email, database transactions; UDP for streaming, gaming, DNS"
        ]
      }
    ],
    sql: [
      {
        id: "tech_sql_1",
        q: "Explain a JOIN you used in a project and why you chose it.",
        outline: [
          "State which JOIN type and why (business logic reason, not just syntax)",
          "Give the actual tables/columns from a real project if possible",
          "Mention what would break if you used the wrong JOIN type",
          "Keep it under 90 seconds spoken"
        ]
      },
      {
        id: "tech_sql_2",
        q: "What is database indexing and when does it hurt performance?",
        outline: [
          "Speeds up read query lookup using B-Tree/Hash indexing structures",
          "Hurts write performance (INSERT/UPDATE/DELETE) since index must be rebuilt",
          "Avoid indexing low-cardinality columns (e.g. gender)"
        ]
      }
    ],
    dsa: [
      {
        id: "tech_dsa_1",
        q: "How do you explain your approach to a coding problem to an interviewer?",
        outline: [
          "Start with clarification: ask constraints, bounds, sample inputs/outputs",
          "State the brute-force approach first, compute its time/space complexity",
          "Identify bottlenecks (nested loops, duplicate work) and propose optimizations",
          "Dry-run your pseudocode on an edge case before writing actual code"
        ]
      },
      {
        id: "tech_dsa_2",
        q: "How do you communicate complexity trade-offs during a technical round?",
        outline: [
          "Clearly state: 'I can reduce time from O(N^2) to O(N) by using O(N) auxiliary space.'",
          "Ask: 'Is memory constraint a priority in this context?'",
          "Show trade-off understanding (e.g. cache vs compute limits)"
        ]
      }
    ],
    sysdesign: [
      {
        id: "tech_sys_1",
        q: "Explain horizontal vs vertical scaling and CAP theorem.",
        outline: [
          "Vertical scaling: adding resources (CPU/RAM) to a single machine (hardware ceiling)",
          "Horizontal scaling: adding more machines (requires load balancing, stateless servers)",
          "CAP theorem: A distributed system can guarantee at most 2 out of Consistency, Availability, Partition Tolerance",
          "Partition tolerance is mandatory in network splits; you choose CP or AP"
        ]
      }
    ],
    genai: [
      {
        id: "tech_genai_1",
        q: "What is Retrieval-Augmented Generation (RAG) and why use it over fine-tuning?",
        outline: [
          "RAG fetches relevant source documents and appends them to LLM prompt as context",
          "Why RAG: Zero training cost, absolute data access controls, zero hallucination (via grounding)",
          "Fine-tuning changes model weights to learn styles/formats, but struggles with factual updates"
        ]
      },
      {
        id: "tech_genai_2",
        q: "How do you evaluate RAG pipelines and reduce hallucination?",
        outline: [
          "Use metrics: Faithfulness (is the answer based on context?), Answer Relevance",
          "Reduce hallucination: Strict system instructions, set temperature to 0, use hybrid search",
          "Rerank retrieved chunks using cross-encoders to ensure top quality context"
        ]
      }
    ]
  },
  hr: {
    about: [
      {
        id: "hr_about_1",
        q: "Tell me about yourself.",
        outline: [
          "Present: Current role/education and primary skills focus (MERN/GenAI)",
          "Past: Key academic milestones, placements prep focus, coding accomplishments",
          "Future: Express genuine enthusiasm for the role and company alignment"
        ]
      }
    ],
    teamwork: [
      {
        id: "hr_team_1",
        q: "Describe a challenge/conflict you faced in a group project and how you resolved it.",
        outline: [
          "Situation: Team conflict or blocker in coding/deployment",
          "Task: Resolving the split and ensuring project timelines are met",
          "Action: Clear, objective discussion of options without finger-pointing",
          "Result: Successful delivery and improved team collaboration patterns"
        ]
      }
    ],
    motivation: [
      {
        id: "hr_mot_1",
        q: "Why should we hire you / why do you want to join this company?",
        outline: [
          "Connect company projects or engineering culture to your own portfolio interests",
          "Showcase value: 'My hands-on MERN and GenAI/RAG build experiences map to your pipeline needs.'",
          "Show commitment to growth and ownership"
        ]
      }
    ],
    growth: [
      {
        id: "hr_grow_1",
        q: "What is your greatest weakness and how are you working on it?",
        outline: [
          "State a real technical/working weakness (e.g. wanting to refactor too early)",
          "Explain the action: 'I use structured task lists and timelines to stay focused on MVPs.'",
          "Show positive trajectory and self-awareness"
        ]
      }
    ]
  }
};

export const weekThemes = {
  week1: {
    title: "Week 1: Foundations",
    desc: "Foundations — SQL joins/aggregates, DSA arrays/strings/hashing (revision + practice), Advanced JS, Git, OOPs | GenAI: How AI APIs work — requests, message roles, parameters, auth, the complete flow"
  },
  week2: {
    title: "Week 2: Building Depth",
    desc: "Building Depth — SQL subqueries/window functions, DSA linked list/stack/queue/trees/graphs (revision + practice), React, Docker/Cloud, DBMS | GenAI: Prompting inside real API calls — system prompts, multi-turn history, streaming, structured outputs"
  },
  week3: {
    title: "Week 3: Applying Skills",
    desc: "Applying Skills — SQL optimization, DSA heaps/graphs-advanced/DP (revision + practice), Node/Express APIs, System Design LLD, OS | GenAI: RAG, the complete flow — embeddings, vector DBs, chunking, retrieval, evaluation"
  },
  week4: {
    title: "Week 4: Interview-Ready",
    desc: "Interview-Ready — DSA company-wise sets + full mocks, SQL/Web Dev revision, MERN deployment, System Design HLD, CN, mock interviews | GenAI: Build a complete AI-integrated product — architecture, ingestion, retrieval endpoint, frontend, tool calling, polish"
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
