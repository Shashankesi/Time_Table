import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { 
  Check, 
  Copy, 
  Calendar, 
  Award, 
  BookOpen, 
  Coffee, 
  Filter, 
  ChevronDown,
  User,
  Database,
  Globe,
  GitBranch,
  Terminal,
  Clock,
  Sparkles as SparklesIcon,
  CheckCircle,
  Binary,
  Code2,
  RefreshCw,
  Star,
  Info,
  Search,
  X,
  Sun,
  Moon,
  Edit2,
  Download,
  Share2,
  Bell
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ChartTooltip, 
  ResponsiveContainer 
} from "recharts";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, ContactShadows, OrbitControls, Sparkles } from "@react-three/drei";
import { timeSlots, days, interviewQuestions, weekThemes } from "./data";

// WebGL support detector
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch (e) {
    return false;
  }
};

// 1. SUBJECT CONFIGURATIONS
const subjectMetadata = {
  sql: {
    name: "SQL Database",
    icon: Database,
    colorClass: "cyan",
    bgClass: "bg-cyan-55 dark:bg-cyan-500/10",
    borderClass: "border-cyan-200 dark:border-cyan-500/20",
    textClass: "text-cyan-800 dark:text-cyan-400",
    filledClass: "bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 border-cyan-650 dark:border-cyan-500 hover:bg-cyan-750 dark:hover:bg-cyan-400",
    accentColor: "#0891b2",
    darkAccentColor: "#06b6d4"
  },
  dsa: {
    name: "DSA Algorithms",
    icon: Binary,
    colorClass: "violet",
    bgClass: "bg-violet-55 dark:bg-violet-500/10",
    borderClass: "border-violet-200 dark:border-violet-500/20",
    textClass: "text-violet-850 dark:text-violet-400",
    filledClass: "bg-violet-600 dark:bg-violet-500 text-white dark:text-slate-950 border-violet-650 dark:border-violet-500 hover:bg-violet-750 dark:hover:bg-violet-400",
    accentColor: "#7c3aed",
    darkAccentColor: "#8b5cf6"
  },
  webdev: {
    name: "Web Development",
    icon: Code2,
    colorClass: "blue",
    bgClass: "bg-blue-55 dark:bg-blue-500/10",
    borderClass: "border-blue-200 dark:border-blue-500/20",
    textClass: "text-blue-800 dark:text-blue-400",
    filledClass: "bg-blue-600 dark:bg-blue-500 text-white dark:text-slate-950 border-blue-650 dark:border-blue-500 hover:bg-blue-750 dark:hover:bg-blue-400",
    accentColor: "#2563eb",
    darkAccentColor: "#3b82f6"
  },
  extratech: {
    name: "Extra Tech Skill",
    icon: GitBranch,
    colorClass: "amber",
    bgClass: "bg-amber-55 dark:bg-amber-500/10",
    borderClass: "border-amber-200 dark:border-amber-500/20",
    textClass: "text-amber-850 dark:text-amber-400",
    filledClass: "bg-amber-600 dark:bg-amber-500 text-white dark:text-slate-950 border-amber-650 dark:border-amber-500 hover:bg-amber-700 dark:hover:bg-amber-400",
    accentColor: "#d97706",
    darkAccentColor: "#f59e0b"
  },
  genai: {
    name: "GenAI / RAG",
    icon: SparklesIcon,
    colorClass: "fuchsia",
    bgClass: "bg-fuchsia-55 dark:bg-fuchsia-500/10",
    borderClass: "border-fuchsia-200 dark:border-fuchsia-500/20",
    textClass: "text-fuchsia-850 dark:text-fuchsia-400",
    filledClass: "bg-fuchsia-600 dark:bg-fuchsia-500 text-white dark:text-slate-950 border-fuchsia-650 dark:border-fuchsia-500 hover:bg-fuchsia-750 dark:hover:bg-fuchsia-400",
    accentColor: "#c026d3",
    darkAccentColor: "#d946ef"
  },
  csfund: {
    name: "CS Fundamentals",
    icon: BookOpen,
    colorClass: "emerald",
    bgClass: "bg-emerald-55 dark:bg-emerald-500/10",
    borderClass: "border-emerald-200 dark:border-emerald-500/20",
    textClass: "text-emerald-800 dark:text-emerald-400",
    filledClass: "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 border-emerald-650 dark:border-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-400",
    accentColor: "#059669",
    darkAccentColor: "#10b981"
  },
  aptitude: {
    name: "Aptitude Prep",
    icon: Award,
    colorClass: "rose",
    bgClass: "bg-rose-55 dark:bg-rose-500/10",
    borderClass: "border-rose-200 dark:border-rose-500/20",
    textClass: "text-rose-800 dark:text-rose-400",
    filledClass: "bg-rose-600 dark:bg-rose-500 text-white dark:text-slate-950 border-rose-650 dark:border-rose-500 hover:bg-rose-700 dark:hover:bg-rose-400",
    accentColor: "#e11d48",
    darkAccentColor: "#f43f5e"
  },
  hr: {
    name: "HR Preparation",
    icon: User,
    colorClass: "yellow",
    bgClass: "bg-yellow-55 dark:bg-yellow-500/10",
    borderClass: "border-yellow-250 dark:border-yellow-500/20",
    textClass: "text-yellow-850 dark:text-yellow-400",
    filledClass: "bg-yellow-600 dark:bg-yellow-500 text-white dark:text-slate-950 border-yellow-650 dark:border-yellow-500 hover:bg-yellow-700 dark:hover:bg-yellow-400",
    accentColor: "#ca8a04",
    darkAccentColor: "#eab308"
  },
  revision: {
    name: "Daily Revision",
    icon: RefreshCw,
    colorClass: "slate",
    bgClass: "bg-slate-100 dark:bg-slate-800/20",
    borderClass: "border-slate-200 dark:border-slate-800",
    textClass: "text-slate-700 dark:text-slate-355",
    filledClass: "bg-slate-600 dark:bg-slate-500 text-white dark:text-slate-950 border-slate-650 dark:border-slate-505 hover:bg-slate-700 dark:hover:bg-slate-400",
    accentColor: "#475569",
    darkAccentColor: "#94a3b8"
  }
};

// 2. KINETIC COUNTER
function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;
    
    const duration = 400; 
    const startTime = performance.now();
    let animationFrameId;
    
    const updateNumber = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress * (2 - progress);
      const current = Math.round(start + (end - start) * ease);
      
      setDisplayValue(current);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateNumber);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);
  
  return <span>{displayValue}</span>;
}

// 3. 3D TILT HOOK
function useTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, shadowX: 0, shadowY: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const cursorX = (e.clientX - rect.left) / width - 0.5;
    const cursorY = (e.clientY - rect.top) / height - 0.5;
    
    const rotateX = -cursorY * 10; 
    const rotateY = cursorX * 10;  
    const sx = -cursorX * 10;
    const sy = -cursorY * 10;
    
    setTilt({ x: rotateX, y: rotateY, shadowX: sx, shadowY: sy });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, shadowX: 0, shadowY: 0 });
  };

  const style = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    boxShadow: tilt.x === 0 && tilt.y === 0 
      ? "" 
      : `${tilt.shadowX}px ${tilt.shadowY}px 24px rgba(0, 0, 0, 0.16)`,
    transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out"
  };

  return { ref, style, handleMouseMove, handleMouseLeave };
}

// 4. PART B — WEBGL SPARKLE CAMERA CONTROLLER
function SparkleCamera({ mouse }) {
  useFrame((state) => {
    const targetX = mouse.current.x * 0.35;
    const targetY = mouse.current.y * 0.35;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// 5. PART B — WEBGL LIQUID PROGRESS ORB
function OrbMesh({ percentage, darkMode }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15;
    }
  });

  const liquidScale = percentage / 100;
  const liquidHeight = liquidScale * 1.5 - 0.75; 

  return (
    <group ref={groupRef}>
      {/* Glossy translucent outer shell */}
      <mesh>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshPhysicalMaterial 
          color={darkMode ? "#1e293b" : "#f1f5f9"} 
          roughness={0.08} 
          transmission={0.65} 
          thickness={0.7} 
          ior={1.45}
          transparent 
          opacity={0.3} 
        />
      </mesh>
      {/* Liquid core (scales & raises visually with progress) */}
      <mesh position={[0, liquidHeight * 0.35, 0]}>
        <sphereGeometry args={[0.82 * Math.max(0.1, liquidScale), 32, 32]} />
        <meshStandardMaterial 
          color={darkMode ? "#10b981" : "#059669"} 
          roughness={0.2}
          metalness={0.15}
          emissive={darkMode ? "#10b981" : "#059669"}
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// 6. PART B — WEBGL CALENDAR CARD TURN
function DayFlipMesh({ prevDayNum, currentDayNum, isAnimating, onDone }) {
  const meshRef = useRef();
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      let start = null;
      const duration = 380;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        setRotationY(ease * Math.PI); 

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          onDone();
        }
      };
      requestAnimationFrame(step);
    }
  }, [isAnimating]);

  if (!isAnimating) return null;

  return (
    <mesh ref={meshRef} rotation={[0, rotationY, 0]}>
      <planeGeometry args={[2.5, 1.8]} />
      <meshBasicMaterial color={rotationY > Math.PI / 2 ? "#020617" : "#1e293b"} />
    </mesh>
  );
}

export default function App() {
  // 7. PERSISTENCE LOADER METHODS (PART A)
  const getCachedValue = (key, defaultVal) => {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return saved;
      }
    }
    return defaultVal;
  };

  // 8. CORE STATE
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(() => getCachedValue("selectedDate", "2026-09-01"));
  const [completions, setCompletions] = useState(() => getCachedValue("completions", {}));
  const [customTopics, setCustomTopics] = useState(() => getCachedValue("customTopics", {}));
  const [subjectFilter, setSubjectFilter] = useState(null); 
  const [filterMode, setFilterMode] = useState("highlight"); 
  const [isInterviewOpen, setIsInterviewOpen] = useState(false);
  const [expandedInterviewSection, setExpandedInterviewSection] = useState("technical");
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Inline topic editor state
  const [editingSlotIndex, setEditingSlotIndex] = useState(null);
  const [editVal, setEditVal] = useState("");

  // WebGL liveness states
  const [webGLSupported, setWebGLSupported] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });

  // WebGL Day flip state
  const [prevDayNum, setPrevDayNum] = useState(1);
  const [isFlipAnimating, setIsFlipAnimating] = useState(false);

  const canvasRef = useRef(null);

  // Initialize Page visibility & WebGL detections
  useEffect(() => {
    setWebGLSupported(checkWebGLSupport());

    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Sync caches
  useEffect(() => {
    localStorage.setItem("completions", JSON.stringify(completions));
  }, [completions]);

  useEffect(() => {
    localStorage.setItem("customTopics", JSON.stringify(customTopics));
  }, [customTopics]);

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Loading shimmers
  useEffect(() => {
    const shimmerTimer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(shimmerTimer);
  }, []);

  // 9. DATA CALCULATIONS
  const currentDayData = useMemo(() => {
    return days.find((d) => d.date === selectedDate) || days[0];
  }, [selectedDate]);

  const getDayChecklistKeys = (day) => {
    if (day.type === "study") {
      return [
        { key: "sql", label: "SQL Database", subject: "sql" },
        { key: "dsa", label: "DSA (Part 1)", subject: "dsa" },
        { key: "dsa_2", label: "DSA (Part 2)", subject: "dsa" },
        { key: "webdev", label: "Web Development", subject: "webdev" },
        { key: "extratech", label: "Extra Tech Skill", subject: "extratech" },
        { key: "genai", label: "GenAI / RAG / Prompts", subject: "genai" },
        { key: "csfund", label: "CS Fundamentals", subject: "csfund" },
        { key: "aptitude", label: "Aptitude & Coding Practice", subject: "aptitude" },
        { key: "hr", label: "HR / Behavioral Prep", subject: "hr" },
        { key: "revision", label: "Daily Revision", subject: "revision" }
      ];
    } else if (day.type === "rest") {
      return [
        { key: "mock_test", label: "Complete Week Mock Test", subject: "aptitude" },
        { key: "review", label: "Review Weak Areas", subject: "revision" },
        { key: "recharge", label: "Rest and Recharge", subject: "revision" }
      ];
    } else if (day.type === "revision") {
      return [
        { key: "sql_rev", label: "SQL Revision (Window, Joins, Aggregates)", subject: "sql" },
        { key: "dsa_rev", label: "DSA Revision (Trees, Hashing, Lists)", subject: "dsa" },
        { key: "webdev_rev", label: "Web Dev & Resume updates", subject: "webdev" },
        { key: "csfund_rev", label: "CS Fundamentals Revision (OS, DBMS)", subject: "csfund" }
      ];
    } else if (day.type === "final") {
      return [
        { key: "sql_mock", label: "SQL Mock Interview Round", subject: "sql" },
        { key: "dsa_mock", label: "DSA Mock Interview Round", subject: "dsa" },
        { key: "webdev_mock", label: "Projects & Web-Dev Mock Round", subject: "webdev" },
        { key: "hr_mock", label: "HR & Behavioral Mock Round", subject: "hr" }
      ];
    }
    return [];
  };

  const getDayProgress = (dateStr) => {
    const day = days.find((d) => d.date === dateStr);
    if (!day) return { done: 0, total: 0, percentage: 0 };

    const checklist = getDayChecklistKeys(day);
    const dayCompletions = completions[dateStr] || {};
    
    const done = checklist.filter((item) => dayCompletions[item.key] === true).length;
    const total = checklist.length;
    const percentage = total > 0 ? Math.round((done / total) * 100) : 0;

    return { done, total, percentage };
  };

  const weekStats = useMemo(() => {
    const stats = { 1: { done: 0, total: 0 }, 2: { done: 0, total: 0 }, 3: { done: 0, total: 0 }, 4: { done: 0, total: 0 } };
    days.forEach((day) => {
      if (!day.week) return;
      const checklist = getDayChecklistKeys(day);
      const dayCompletions = completions[day.date] || {};

      checklist.forEach((item) => {
        stats[day.week].total += 1;
        if (dayCompletions[item.key] === true) {
          stats[day.week].done += 1;
        }
      });
    });

    const results = {};
    for (let w = 1; w <= 4; w++) {
      const { done, total } = stats[w];
      results[w] = {
        done,
        total,
        percentage: total > 0 ? Math.round((done / total) * 100) : 0
      };
    }
    return results;
  }, [completions]);

  const subjectStats = useMemo(() => {
    const stats = {
      sql: { done: 0, total: 0 },
      dsa: { done: 0, total: 0 },
      webdev: { done: 0, total: 0 },
      genai: { done: 0, total: 0 },
      csfund: { done: 0, total: 0 }
    };
    
    days.forEach((day) => {
      const checklist = getDayChecklistKeys(day);
      const dayCompletions = completions[day.date] || {};
      
      checklist.forEach((item) => {
        const subKey = item.subject;
        if (stats[subKey]) {
          stats[subKey].total += 1;
          if (dayCompletions[item.key] === true) {
            stats[subKey].done += 1;
          }
        }
      });
    });
    
    const results = {};
    Object.keys(stats).forEach((k) => {
      const { done, total } = stats[k];
      results[k] = {
        done,
        total,
        percentage: total > 0 ? Math.round((done / total) * 100) : 0
      };
    });
    return results;
  }, [completions]);

  const globalProgress = useMemo(() => {
    let totalDone = 0;
    let totalTasks = 0;
    let completedDaysCount = 0;

    days.forEach((day) => {
      const { done, total, percentage } = getDayProgress(day.date);
      totalDone += done;
      totalTasks += total;
      if (percentage === 100 && total > 0) {
        completedDaysCount += 1;
      }
    });

    const totalPercentage = totalTasks > 0 ? Math.round((totalDone / totalTasks) * 100) : 0;
    return {
      done: totalDone,
      total: totalTasks,
      percentage: totalPercentage,
      completedDays: completedDaysCount
    };
  }, [completions]);

  const currentStreak = useMemo(() => {
    let lastActiveIndex = -1;
    for (let i = days.length - 1; i >= 0; i--) {
      const { done } = getDayProgress(days[i].date);
      if (done > 0) {
        lastActiveIndex = i;
        break;
      }
    }
    if (lastActiveIndex === -1) return 0;

    let streak = 0;
    let maxStreak = 0;
    for (let i = 0; i <= lastActiveIndex; i++) {
      const { percentage } = getDayProgress(days[i].date);
      if (percentage === 100) {
        streak += 1;
        if (streak > maxStreak) maxStreak = streak;
      } else {
        streak = 0;
      }
    }
    return streak;
  }, [completions]);

  const daysRemaining = useMemo(() => {
    const today = new Date();
    const target = new Date("2026-09-30T23:59:59");
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const diffTime = target - todayMidnight;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }, []);

  // 10. RECHARTS TREND ANALYTICS COMPILER
  const trendData = useMemo(() => {
    const data = [];
    days.forEach((day, index) => {
      const { percentage } = getDayProgress(day.date);
      data.push({
        day: `Day ${index + 1}`,
        percentage: percentage
      });
    });

    let lastActiveIdx = -1;
    for (let i = data.length - 1; i >= 0; i--) {
      const { done } = getDayProgress(days[i].date);
      if (done > 0) {
        lastActiveIdx = i;
        break;
      }
    }
    const sliceEnd = lastActiveIdx === -1 ? 6 : Math.max(6, lastActiveIdx + 1);
    return data.slice(0, sliceEnd);
  }, [completions]);

  // 11. CONFETTI BURST
  const fireConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#d946ef", "#06b6d4"];
    const particles = [];
    
    for (let i = 0; i < 160; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height + 20,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 22 - 12,
        r: Math.random() * 5 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.016 + 0.008
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      
      particles.forEach((p) => {
        if (p.alpha <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.38;
        p.vx *= 0.98;
        p.alpha -= p.decay;
        
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });
      
      if (alive) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const toggleCompletion = (dateStr, itemKey) => {
    setCompletions((prev) => {
      const dayCompletions = prev[dateStr] || {};
      const wasCompleted = getDayProgress(dateStr).percentage === 100;
      
      const newCompletions = {
        ...prev,
        [dateStr]: {
          ...dayCompletions,
          [itemKey]: !dayCompletions[itemKey]
        }
      };

      const day = days.find((d) => d.date === dateStr);
      const checklist = getDayChecklistKeys(day);
      const updatedDayCompletions = newCompletions[dateStr] || {};
      const done = checklist.filter((item) => updatedDayCompletions[item.key] === true).length;
      const total = checklist.length;
      const newPercentage = total > 0 ? Math.round((done / total) * 100) : 0;

      if (!wasCompleted && newPercentage === 100) {
        setTimeout(fireConfetti, 50);
      }

      return newCompletions;
    });
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress data? This action cannot be undone.")) {
      setCompletions({});
      setCustomTopics({});
    }
  };

  const handleCopyQuestion = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    
    const results = [];
    days.forEach((day) => {
      const dayNum = parseInt(day.date.split("-")[2]);
      const dateString = `day ${dayNum}`;
      if (day.date.includes(query) || dateString.includes(query) || day.day.toLowerCase().includes(query)) {
        results.push({
          date: day.date,
          title: `Day ${dayNum} — ${day.day}, Sept ${dayNum}`,
          subtitle: day.type === "study" ? "Standard Study Timetable" : day.note,
          subjectMatch: null
        });
        return;
      }
      
      if (day.type.toLowerCase().includes(query)) {
        results.push({
          date: day.date,
          title: `Day ${dayNum} — ${day.day}, Sept ${dayNum}`,
          subtitle: `Type: ${day.type.toUpperCase()} - ${day.note || "Focus Subjects"}`,
          subjectMatch: null
        });
        return;
      }

      const subjectsToCheck = ["sql", "dsa", "webdev", "extratech", "genai", "csfund"];
      for (const sub of subjectsToCheck) {
        const topic = customTopics[day.date]?.[sub] || day[sub];
        if (topic && topic.toLowerCase().includes(query)) {
          results.push({
            date: day.date,
            title: `Day ${dayNum} — ${day.day}, Sept ${dayNum}`,
            subtitle: topic,
            subjectMatch: sub
          });
          break;
        }
      }
    });
    return results;
  }, [searchQuery, customTopics]);

  // 12. PART A — DYNAMIC CANVAS EXPORTER
  const handleShareCard = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 460;
    const ctx = canvas.getContext("2d");

    // Draw background
    const grad = ctx.createLinearGradient(0, 0, 800, 460);
    if (darkMode) {
      grad.addColorStop(0, "#090d16");
      grad.addColorStop(0.5, "#0b1227");
      grad.addColorStop(1, "#020617");
    } else {
      grad.addColorStop(0, "#f8fafc");
      grad.addColorStop(0.5, "#f1f5f9");
      grad.addColorStop(1, "#e2e8f0");
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 460);

    // Draw grid overlay lines
    ctx.strokeStyle = darkMode ? "rgba(16, 185, 129, 0.04)" : "rgba(15, 23, 42, 0.03)";
    ctx.lineWidth = 1;
    for (let x = 0; x < 800; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 460);
      ctx.stroke();
    }
    for (let y = 0; y < 460; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(800, y);
      ctx.stroke();
    }

    // Draw branding
    ctx.fillStyle = darkMode ? "#34d399" : "#059669";
    ctx.font = "bold 13px Inter, sans-serif";
    ctx.fillText("SEPTEMBER PREP TRACKER", 50, 60);

    ctx.fillStyle = darkMode ? "#ffffff" : "#0f172a";
    ctx.font = "bold 32px Inter, sans-serif";
    ctx.fillText("Placement Readiness Summary", 50, 105);

    // Render stats blocks
    const drawShareCardWidget = (x, y, w, h, title, value, footerText) => {
      ctx.fillStyle = darkMode ? "#111c30" : "#ffffff";
      ctx.strokeStyle = darkMode ? "#1e293b" : "#e2e8f0";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = darkMode ? "#94a3b8" : "#64748b";
      ctx.font = "bold 11px Inter, sans-serif";
      ctx.fillText(title.toUpperCase(), x + 20, y + 30);

      ctx.fillStyle = darkMode ? "#ffffff" : "#0f172a";
      ctx.font = "bold 26px Inter, sans-serif";
      ctx.fillText(value, x + 20, y + 68);

      ctx.fillStyle = darkMode ? "#64748b" : "#94a3b8";
      ctx.font = "semibold 11px Inter, sans-serif";
      ctx.fillText(footerText, x + 20, y + 94);
    };

    drawShareCardWidget(50, 155, 210, 125, "Readiness Ring", `${globalProgress.percentage}% Complete`, `${globalProgress.done}/${globalProgress.total} slots checked`);
    drawShareCardWidget(295, 155, 210, 125, "Active Streak", `🔥 ${currentStreak} Days`, "Consecutive 100% days");
    drawShareCardWidget(540, 155, 210, 125, "Days Finished", `${globalProgress.completedDays} / 30 Days`, "Total month progress");

    // Quote
    ctx.fillStyle = darkMode ? "#475569" : "#94a3b8";
    ctx.font = "medium 12px Inter, sans-serif";
    ctx.fillText("Automated snapshot generated on " + new Date().toLocaleDateString(), 50, 400);
    ctx.fillText("https://github.com/Shashankesi/Time_Table", 530, 400);

    const dataUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", dataUrl);
    downloadLink.setAttribute("download", `september-readiness-card-${selectedDate}.png`);
    downloadLink.click();
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify({
      completions,
      customTopics,
      theme: darkMode ? "dark" : "light"
    }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'september-prep-tracker-backup.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // 13. PART A — NOTIFICATIONS PERMISSION TRIGGER
  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("September Prep Tracker", {
            body: "Daily reminders enabled! We'll remind you to log your prep progress.",
            icon: "/favicon.svg"
          });
        }
      });
    } else {
      alert("This browser does not support desktop notifications.");
    }
  };

  // 3D Tilt instances
  const tiltSlotsCard = useTilt();
  const tiltDaysCard = useTilt();
  const tiltReadinessCard = useTilt();
  const tiltHeaderCard = useTilt();
  const tiltScheduleCard = useTilt();
  const tiltHeatmapCard = useTilt();
  const tiltSubjectCard = useTilt();
  const tiltWeekCard = useTilt();
  const tiltInterviewCard = useTilt();

  // 3D Card flip helper
  const handleSelectDateWithFlip = (newDate) => {
    if (newDate === selectedDate) return;
    const prevDay = parseInt(selectedDate.split("-")[2]);
    setPrevDayNum(prevDay);
    setIsFlipAnimating(true);
    setSelectedDate(newDate);
  };

  // Shadow configurations
  const embossedStyle = {
    boxShadow: darkMode 
      ? "2px 2.5px 5px rgba(0,0,0,0.45), inset 1.5px 1.5px 0px rgba(255,255,255,0.06), inset -1.5px -1.5px 1.5px rgba(0,0,0,0.45)"
      : "2px 2.5px 5px rgba(15,23,42,0.06), inset 1.5px 1.5px 0px rgba(255,255,255,0.95), inset -1.5px -1.5px 1.5px rgba(15,23,42,0.12)"
  };

  const ringFilterStyle = {
    filter: darkMode ? "drop-shadow(0px 2.5px 4px rgba(0,0,0,0.5))" : "drop-shadow(0px 2px 3px rgba(15,23,42,0.15))"
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-slate-800 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-250 relative overflow-hidden transition-colors duration-300">
      
      {/* 3D PART B — WEBGL SPARKLING DRIFTING BACKGROUND */}
      {webGLSupported && !isFlipAnimating && isTabVisible && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <Canvas gl={{ antialias: false, pixelRatio: 1 }} camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <Sparkles
              count={45}
              scale={10}
              size={3.5}
              speed={0.4}
              opacity={darkMode ? 0.45 : 0.65}
              color={darkMode ? "#10b981" : "#059669"}
            />
            <SparkleCamera mouse={mouse} />
          </Canvas>
        </div>
      )}

      {/* Fallback CSS background blobs if WebGL is disabled */}
      {(!webGLSupported || isFlipAnimating || !isTabVisible) && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-emerald-400/18 dark:bg-emerald-500/5 blur-[100px] animate-driftOne" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-indigo-400/18 dark:bg-indigo-500/5 blur-[100px] animate-driftTwo" />
        </div>
      )}

      {/* Fine grid map */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#090d16_1px,transparent_1px),linear-gradient(to_bottom,#090d16_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 dark:opacity-40" />

      {/* CANVAS FIREWORKS */}
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50 w-full h-full" />

      {/* INITIAL SHIMMER LOADERS */}
      {isLoading ? (
        <div className="min-h-screen max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-8 animate-pulse">
          <div className="h-20 bg-slate-200 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-900 rounded-2xl flex items-center justify-between px-6">
            <div className="w-1/3 h-8 bg-slate-300 dark:bg-slate-800 rounded-xl" />
            <div className="w-1/4 h-10 bg-slate-300 dark:bg-slate-800 rounded-xl" />
          </div>
          <div className="h-32 bg-slate-200 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-900 rounded-3xl p-5 flex gap-3 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-[72px] h-[96px] bg-slate-300 dark:bg-slate-800 rounded-2xl shrink-0" />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 h-[500px] bg-slate-200 dark:bg-slate-900/40 border border-slate-300 dark:border-slate-900 rounded-2xl" />
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="h-44 bg-slate-200 dark:bg-slate-900/40 border border-slate-300 dark:border-slate-900 rounded-2xl" />
              <div className="h-64 bg-slate-200 dark:bg-slate-900/40 border border-slate-300 dark:border-slate-900 rounded-2xl" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* 1. HEADER MODULE */}
          <header className="sticky top-0 z-40 bg-white/75 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-900/65 px-4 py-5 md:px-8 shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Branding and streak */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-650 dark:text-emerald-400 border border-emerald-500/25">
                    <Calendar className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">September Prep Tracker</h1>
                      
                      {currentStreak > 0 && (
                        <div className="flex items-center gap-1 bg-orange-500/10 text-orange-650 dark:text-orange-400 border border-orange-500/25 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-bounce">
                          🔥 {currentStreak} Day Streak
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">Placement Timetable Dashboard</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></span>
                      
                      <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 dark:text-amber-450 border border-amber-500/20 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {daysRemaining > 0 ? `${daysRemaining} Days Remaining` : "Timeline Ended"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header metrics, theme togglers, notification permit trigger */}
              <div className="flex items-center gap-4 sm:gap-6 bg-slate-100/60 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 p-4 rounded-2xl md:min-w-[520px]">
                
                {/* Search Quick Jump trigger */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-950 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-250 dark:border-slate-900 transition-all shrink-0 flex items-center gap-1.5 text-xs font-bold shadow-sm"
                  title="Search timetable (Ctrl+K)"
                >
                  <Search className="w-4 h-4" />
                  <span className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] px-1.5 py-0.5 rounded-md text-slate-500 hidden sm:inline">Ctrl+K</span>
                </button>

                {/* Stats panel */}
                <div className="flex-1 grid grid-cols-2 gap-3 min-w-[190px]">
                  {/* Slots Done */}
                  <div 
                    ref={tiltSlotsCard.ref}
                    onMouseMove={tiltSlotsCard.handleMouseMove}
                    onMouseLeave={tiltSlotsCard.handleMouseLeave}
                    style={tiltSlotsCard.style}
                    className="bg-white dark:bg-slate-950/65 border border-slate-200 dark:border-slate-900/60 p-2.5 rounded-xl flex items-center gap-2.5 shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-650 dark:text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Slots Done</div>
                      <div className="text-sm font-black text-slate-900 dark:text-white leading-none mt-1">
                        <AnimatedNumber value={globalProgress.done} />
                        <span className="text-slate-400 dark:text-slate-500 font-bold text-[10px] ml-0.5">/{globalProgress.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Days Done */}
                  <div 
                    ref={tiltDaysCard.ref}
                    onMouseMove={tiltDaysCard.handleMouseMove}
                    onMouseLeave={tiltDaysCard.handleMouseLeave}
                    style={tiltDaysCard.style}
                    className="bg-white dark:bg-slate-950/65 border border-slate-200 dark:border-slate-900/60 p-2.5 rounded-xl flex items-center gap-2.5 shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-indigo-650 dark:text-indigo-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Days Done</div>
                      <div className="text-sm font-black text-slate-900 dark:text-white leading-none mt-1">
                        <AnimatedNumber value={globalProgress.completedDays} />
                        <span className="text-slate-400 dark:text-slate-500 font-bold text-[10px] ml-0.5">/30</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PART B — WEBGL LIQUID PROGRESS ORB CONTAINER */}
                {webGLSupported && isTabVisible ? (
                  <div 
                    ref={tiltReadinessCard.ref}
                    onMouseMove={tiltReadinessCard.handleMouseMove}
                    onMouseLeave={tiltReadinessCard.handleMouseLeave}
                    style={tiltReadinessCard.style}
                    className="relative w-20 h-20 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-900 shadow-md transition-all duration-300"
                  >
                    <Suspense fallback={<div className="text-xs text-slate-500 font-bold">Orb</div>}>
                      <Canvas gl={{ antialias: false, pixelRatio: 1 }} className="rounded-2xl" camera={{ position: [0, 0, 2.5] }}>
                        <ambientLight intensity={0.75} />
                        <directionalLight position={[1.5, 4, 1.5]} intensity={1.5} />
                        <OrbMesh percentage={globalProgress.percentage} darkMode={darkMode} />
                      </Canvas>
                    </Suspense>
                    <div className="absolute text-center flex flex-col justify-center items-center pointer-events-none bg-slate-900/10 px-1 rounded-md">
                      <span className="text-xs font-black text-slate-900 dark:text-white">
                        {globalProgress.percentage}%
                      </span>
                    </div>
                  </div>
                ) : (
                  // Fallback 2D Ring
                  <div 
                    ref={tiltReadinessCard.ref}
                    onMouseMove={tiltReadinessCard.handleMouseMove}
                    onMouseLeave={tiltReadinessCard.handleMouseLeave}
                    style={{ ...tiltReadinessCard.style, ...ringFilterStyle }}
                    className="relative w-20 h-20 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-900 shadow-md transition-all duration-300"
                  >
                    <svg className="w-18 h-18 sm:w-20 sm:h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle className="text-slate-200 dark:text-slate-900" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                      <circle 
                        className="text-emerald-500 transition-all duration-1000 ease-out" 
                        strokeWidth="8" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={251.2 - (globalProgress.percentage / 100) * 251.2} 
                        strokeLinecap="round" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r="40" 
                        cx="50" 
                        cy="50" 
                      />
                    </svg>
                    <div className="absolute text-center flex flex-col justify-center items-center">
                      <span className="text-sm font-black text-slate-900 dark:text-white leading-none">
                        <AnimatedNumber value={globalProgress.percentage} />%
                      </span>
                    </div>
                  </div>
                )}

                {/* Exporters, themes and permission buttons */}
                <div className="flex flex-col gap-1.5 shrink-0">
                  <div className="flex gap-1.5">
                    {/* Theme toggle */}
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-950 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-250 dark:border-slate-900 transition-all shadow-sm"
                    >
                      {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                    </button>
                    {/* Notification API */}
                    <button
                      onClick={requestNotificationPermission}
                      title="Enable Daily reminders"
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-950 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-250 dark:border-slate-900 transition-all shadow-sm"
                    >
                      <Bell className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex gap-1.5">
                    {/* Share Card */}
                    <button
                      onClick={handleShareCard}
                      title="Share progress card image"
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 bg-white dark:bg-slate-950 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-250 dark:border-slate-900 transition-all shadow-sm"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                    {/* Backup export */}
                    <button
                      onClick={handleExportJSON}
                      title="Export backup JSON"
                      className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-650 bg-white dark:bg-slate-950 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-250 dark:border-slate-900 transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {/* Reset */}
                  <button 
                    onClick={handleResetProgress}
                    title="Reset progress data"
                    className="w-full py-1 text-[9px] uppercase tracking-wider font-extrabold text-slate-400 hover:text-rose-600 bg-white dark:bg-slate-950 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-250 dark:border-slate-900 transition-all shadow-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-8">

            {/* 2. TIMELINE CHIP STRIP */}
            <section className="bg-white/70 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-900 rounded-3xl p-4 md:p-5 shadow-sm backdrop-blur-md relative z-10">
              <div className="flex items-center justify-between mb-4 px-1.5">
                <h2 className="text-xs uppercase tracking-wider font-extrabold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <span>Timeline strip</span>
                  <span className="text-[10px] bg-slate-200/60 dark:bg-slate-900 border border-slate-300 dark:border-slate-850 text-slate-600 dark:text-slate-350 px-2 py-0.5 rounded-full font-bold">1–30 SEP</span>
                </h2>
                <div className="flex gap-4 text-[10px] text-slate-450 dark:text-slate-400 font-bold uppercase tracking-wider hidden sm:flex">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-850"></span>
                    <span>Study</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-md bg-indigo-105 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30"></span>
                    <span>Rest</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-md bg-amber-105 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30"></span>
                    <span>Revision</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-md bg-rose-105 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30"></span>
                    <span>Final Mock</span>
                  </div>
                </div>
              </div>
              
              <div 
                id="timeline-scroll-container"
                className="flex gap-2.5 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-850 scrollbar-track-transparent -mx-1 px-1"
              >
                {days.map((day) => {
                  const { done, percentage } = getDayProgress(day.date);
                  const isSelected = day.date === selectedDate;
                  const dateObj = new Date(day.date);
                  const dayNum = dateObj.getDate();
                  
                  const displayPercentage = done > 0 ? Math.max(percentage, 12) : 0;
                  const radius = 9;
                  const circ = 2 * Math.PI * radius;
                  const strokeOffset = circ - (displayPercentage / 100) * circ;

                  let typeStyles = "";
                  let ChipIcon = null;
                  
                  if (day.type === "study") {
                    typeStyles = isSelected 
                      ? "border-emerald-500 bg-white dark:bg-slate-900 shadow-[0_0_12px_rgba(16,185,129,0.2)] text-slate-900 dark:text-white font-bold" 
                      : "border-slate-200 dark:border-slate-850 bg-white/70 dark:bg-slate-900/30 text-slate-700 dark:text-slate-355 hover:border-slate-400 dark:hover:border-slate-750 hover:bg-white dark:hover:bg-slate-900/50";
                  } else if (day.type === "rest") {
                    typeStyles = isSelected
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/45 shadow-[0_0_12px_rgba(129,140,248,0.3)] text-indigo-900 dark:text-indigo-100 font-bold"
                      : "border-indigo-200 dark:border-indigo-950 bg-indigo-50/50 dark:bg-indigo-950/15 text-indigo-900 dark:text-slate-350 hover:border-indigo-400 dark:hover:border-indigo-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/30";
                    ChipIcon = Coffee;
                  } else if (day.type === "revision") {
                    typeStyles = isSelected
                      ? "border-amber-500 bg-amber-55 dark:bg-amber-950/45 shadow-[0_0_12px_rgba(245,158,11,0.3)] text-amber-900 dark:text-amber-100 font-bold"
                      : "border-amber-200 dark:border-amber-950 bg-amber-50/50 dark:bg-amber-950/15 text-amber-900 dark:text-slate-350 hover:border-amber-400 dark:hover:border-amber-900 hover:bg-amber-50 dark:hover:bg-amber-950/30";
                    ChipIcon = BookOpen;
                  } else if (day.type === "final") {
                    typeStyles = isSelected
                      ? "border-rose-500 bg-rose-50 dark:bg-rose-950/50 shadow-[0_0_15px_rgba(244,63,94,0.4)] text-rose-900 dark:text-rose-100 font-black animate-pulse"
                      : "border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-300 hover:border-rose-500 dark:hover:border-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 shadow-[0_0_8px_rgba(244,63,94,0.06)] hover:shadow-[0_0_15px_rgba(244,63,94,0.15)] animate-pulse duration-[3000ms]";
                    ChipIcon = Award;
                  }

                  const isCurrentWeek = day.week === currentDayData.week;

                  return (
                    <button
                      id={`timeline-chip-${day.date}`}
                      key={day.date}
                      onClick={() => handleSelectDateWithFlip(day.date)}
                      className={`w-[72px] shrink-0 h-[96px] flex flex-col items-center justify-between py-2 px-1 rounded-2xl border transition-all duration-300 cursor-pointer relative hover:-translate-y-1 hover:shadow-md ${typeStyles} ${isCurrentWeek && !isSelected ? "ring-1 ring-slate-300 dark:ring-slate-800" : ""} ${isSelected ? "border-2" : ""}`}
                    >
                      <div className="flex items-center justify-between w-full px-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {day.day}
                        </span>
                        {ChipIcon ? (
                          <ChipIcon className="w-3 h-3 opacity-90" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-60"></span>
                        )}
                      </div>

                      <div className="text-2xl font-black font-mono tracking-tight my-0.5 leading-none">
                        {dayNum}
                      </div>

                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 22 22">
                          <circle className="text-slate-200 dark:text-slate-850" strokeWidth="2.5" stroke="currentColor" fill="transparent" r={radius} cx="11" cy="11" />
                          <circle 
                            className={`${percentage === 100 ? "text-emerald-400" : "text-emerald-505 dark:text-emerald-500"} transition-all duration-300`} 
                            strokeWidth="2.5" 
                            strokeDasharray={circ} 
                            strokeDashoffset={strokeOffset} 
                            strokeLinecap="round" 
                            stroke="currentColor" 
                            fill="transparent" 
                            r={radius} 
                            cx="11" 
                            cy="11" 
                          />
                        </svg>
                        {percentage === 100 && (
                          <Check className="w-2.5 h-2.5 text-emerald-400 absolute self-center" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 3. COLUMNS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: DAILY SCHEDULER & DETAILS (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-6 relative">

                {/* PART B — WEBGL DAY FLIP TRANSITION OVERLAY */}
                {webGLSupported && isFlipAnimating && isTabVisible && (
                  <div className="absolute inset-0 z-30 pointer-events-none rounded-2xl overflow-hidden min-h-[300px] border border-slate-250 dark:border-slate-850">
                    <Canvas gl={{ antialias: false, pixelRatio: 1 }} camera={{ position: [0, 0, 3] }}>
                      <ambientLight intensity={1.2} />
                      <DayFlipMesh 
                        prevDayNum={prevDayNum} 
                        currentDayNum={parseInt(selectedDate.split("-")[2])} 
                        isAnimating={isFlipAnimating} 
                        onDone={() => setIsFlipAnimating(false)} 
                      />
                    </Canvas>
                  </div>
                )}

                {/* Day Details card */}
                <section 
                  ref={tiltHeaderCard.ref}
                  onMouseMove={tiltHeaderCard.handleMouseMove}
                  onMouseLeave={tiltHeaderCard.handleMouseLeave}
                  style={tiltHeaderCard.style}
                  className="bg-white/80 dark:bg-gradient-to-br dark:from-slate-900/80 dark:to-slate-950/90 border border-slate-200 dark:border-slate-900 rounded-2xl p-5 md:p-6 shadow-md backdrop-blur-md relative overflow-hidden transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-350">
                          Day {parseInt(selectedDate.split("-")[2])} / 30
                        </span>
                        {currentDayData.week && (
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400">
                            Week {currentDayData.week} Target
                          </span>
                        )}
                      </div>
                      
                      <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mt-3">
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h2>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-900">
                      
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-xl border ${
                        currentDayData.type === "study" 
                          ? "bg-slate-100 dark:bg-slate-900 text-slate-650 dark:text-slate-355 border-slate-200 dark:border-slate-850" 
                          : currentDayData.type === "rest"
                          ? "bg-indigo-500/10 text-indigo-700 dark:text-indigo-405 border-indigo-500/20"
                          : currentDayData.type === "revision"
                          ? "bg-amber-500/10 text-amber-700 dark:text-amber-405 border-amber-500/20"
                          : "bg-rose-500/10 text-rose-700 dark:text-rose-455 border-rose-500/20"
                      }`}>
                        {currentDayData.type === "study" ? "Study Day" : currentDayData.type === "rest" ? "Rest & Mock" : currentDayData.type === "revision" ? "Full Revision" : "Final Mock Round"}
                      </span>

                      <div 
                        style={ringFilterStyle}
                        className="relative w-16 h-16 shrink-0 flex items-center justify-center bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-900 shadow-sm"
                      >
                        <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
                          <circle className="text-slate-100 dark:text-slate-900" strokeWidth="4.5" stroke="currentColor" fill="none" r="16" cx="18" cy="18" />
                          <circle 
                            className="text-emerald-500 transition-all duration-500 ease-out" 
                            strokeWidth="4.5" 
                            strokeDasharray="100.5" 
                            strokeDashoffset={100.5 - getDayProgress(selectedDate).percentage} 
                            strokeLinecap="round" 
                            stroke="currentColor" 
                            fill="none" 
                            r="16" 
                            cx="18" 
                            cy="18" 
                          />
                        </svg>
                        <div className="absolute text-center flex flex-col items-center justify-center">
                          <span className="text-[10px] font-extrabold text-slate-800 dark:text-white leading-none">
                            {getDayProgress(selectedDate).done}
                            <span className="text-slate-400 dark:text-slate-500 font-bold">/{getDayProgress(selectedDate).total}</span>
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  {/* Filters */}
                  {currentDayData.type === "study" && (
                    <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-900">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-555 dark:text-slate-400 flex items-center gap-1.5 shrink-0">
                          <Filter className="w-3.5 h-3.5" />
                          <span>Subject Focus</span>
                        </span>

                        <div className="flex flex-wrap items-center gap-2">
                          {[
                            { key: "sql", label: "SQL", meta: subjectMetadata.sql },
                            { key: "dsa", label: "DSA", meta: subjectMetadata.dsa },
                            { key: "webdev", label: "Web Dev", meta: subjectMetadata.webdev },
                            { key: "genai", label: "GenAI/RAG", meta: subjectMetadata.genai },
                            { key: "csfund", label: "CS Fund.", meta: subjectMetadata.csfund }
                          ].map((sub) => {
                            const FilterIcon = sub.meta.icon;
                            const isSelected = subjectFilter === sub.key;
                            
                            return (
                              <button
                                key={sub.key}
                                onClick={() => setSubjectFilter(isSelected ? null : sub.key)}
                                style={embossedStyle}
                                className={`text-xs px-3.5 py-2 rounded-xl border flex items-center gap-2 transition-all font-semibold ${
                                  isSelected
                                    ? sub.meta.filledClass
                                    : `${sub.meta.bgClass} ${sub.meta.textClass} ${sub.meta.borderClass} hover:border-${sub.meta.colorClass}-500/50 hover:bg-${sub.meta.colorClass}-500/10`
                                }`}
                              >
                                <FilterIcon className="w-3.5 h-3.5" />
                                <span>{sub.label}</span>
                              </button>
                            );
                          })}
                          
                          {subjectFilter && (
                            <button
                              onClick={() => setSubjectFilter(null)}
                              className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-455 hover:text-rose-500 dark:hover:text-rose-300 hover:underline px-2.5 py-1.5"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Filter Mode switch */}
                      {subjectFilter && (
                        <div className="flex items-center gap-2 mt-4 bg-slate-200/50 dark:bg-slate-950/60 p-1.5 rounded-xl border border-slate-300 dark:border-slate-900 max-w-max">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 px-2">Mode:</span>
                          <button 
                            onClick={() => setFilterMode("highlight")}
                            className={`text-xs font-semibold px-3 py-1 rounded-lg transition-all ${filterMode === "highlight" ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-850 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-805 dark:hover:text-slate-350"}`}
                          >
                            Highlight Focus
                          </button>
                          <button 
                            onClick={() => setFilterMode("isolate")}
                            className={`text-xs font-semibold px-3 py-1 rounded-lg transition-all ${filterMode === "isolate" ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-850 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-805 dark:hover:text-slate-350"}`}
                          >
                            Isolate Focus
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </section>

                {/* Day Timetable List */}
                <div 
                  ref={tiltScheduleCard.ref}
                  onMouseMove={tiltScheduleCard.handleMouseMove}
                  onMouseLeave={tiltScheduleCard.handleMouseLeave}
                  style={tiltScheduleCard.style}
                  key={selectedDate} 
                  className="flex flex-col gap-3.5 animate-flipIn"
                >
                  {currentDayData.type === "study" ? (
                    timeSlots.map((slot, index) => {
                      const isBreak = slot.subject === "break";
                      
                      let completionKey = null;
                      if (slot.subject === "sql") completionKey = "sql";
                      else if (slot.subject === "dsa") {
                        completionKey = index === 1 ? "dsa" : "dsa_2";
                      }
                      else if (slot.subject === "webdev") completionKey = "webdev";
                      else if (slot.subject === "extratech") completionKey = "extratech";
                      else if (slot.subject === "genai") completionKey = "genai";
                      else if (slot.subject === "csfund") completionKey = "csfund";
                      else if (slot.subject === "aptitude") completionKey = "aptitude";
                      else if (slot.subject === "hr") completionKey = "hr";
                      else if (slot.subject === "revision") completionKey = "revision";

                      const isChecked = completionKey ? !!(completions[selectedDate]?.[completionKey]) : false;
                      
                      let isMatch = false;
                      let shouldDim = false;
                      let shouldHide = false;

                      if (subjectFilter) {
                        isMatch = slot.subject === subjectFilter;
                        if (!isMatch) {
                          shouldDim = true;
                          if (filterMode === "isolate" && !isBreak) {
                            shouldHide = true;
                          }
                        }
                      }

                      if (shouldHide) return null;

                      // Topic
                      let focusTopicText = customTopics[selectedDate]?.[slot.subject];
                      if (!focusTopicText) {
                        if (isBreak) {
                          focusTopicText = slot.label;
                        } else {
                          focusTopicText = currentDayData[slot.subject];
                          if (!focusTopicText) {
                            if (slot.subject === "aptitude") {
                              focusTopicText = "Practice aptitude test sheets, quantitative equations, and placement mock coding platforms (LeetCode/GFG).";
                            } else if (slot.subject === "hr") {
                              focusTopicText = "Prepare standard behavioral questions and refine your pitch answers.";
                            } else if (slot.subject === "revision") {
                              focusTopicText = "Self-review of all subjects covered today, document mistakes, and bookmark tough codes.";
                            } else {
                              focusTopicText = "Review and practice concepts.";
                            }
                          }
                        }
                      }

                      const meta = subjectMetadata[slot.subject] || { 
                        name: slot.label, 
                        bgClass: "bg-slate-100 dark:bg-slate-900",
                        borderClass: "border-slate-200 dark:border-slate-800",
                        textClass: "text-slate-655 dark:text-slate-300",
                        colorClass: "slate",
                        icon: BookOpen,
                        accentColor: "#94a3b8",
                        darkAccentColor: "#94a3b8"
                      };
                      const IconComp = meta.icon;
                      const activeColor = darkMode ? meta.darkAccentColor : meta.accentColor;

                      const isEditingThisSlot = editingSlotIndex === index;

                      return (
                        <div 
                          key={index} 
                          className={`relative group bg-white/70 dark:bg-slate-900/30 border rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 ${
                            isBreak 
                              ? "bg-slate-100/50 dark:bg-slate-950/20 text-slate-550 dark:text-slate-500 border-slate-200/80 dark:border-slate-900/50 border-dashed" 
                              : isChecked 
                              ? "bg-emerald-50/20 dark:bg-emerald-950/5 border-emerald-200/40 dark:border-emerald-950/15 opacity-55" 
                              : "border-slate-200 dark:border-slate-900 hover:bg-white dark:hover:bg-slate-900/55 hover:border-slate-350 dark:hover:border-slate-850 shadow-sm"
                          } ${
                            isMatch && filterMode === "highlight"
                              ? "ring-1 ring-emerald-500/25 border-emerald-500/20 bg-emerald-50/10 dark:bg-emerald-950/5" 
                              : ""
                          } ${
                            shouldDim && filterMode === "highlight"
                              ? "opacity-25" 
                              : ""
                          }`}
                        >
                          {/* Accent left border */}
                          {!isBreak && (
                            <div 
                              className="absolute left-0 top-3.5 bottom-3.5 w-1 rounded-r-md transition-colors duration-300"
                              style={{ backgroundColor: activeColor }}
                            />
                          )}

                          {/* Time & Badges */}
                          <div className="flex items-center justify-between md:justify-start gap-4 pl-2 shrink-0">
                            <span className={`text-[11px] font-mono font-bold tracking-tight px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-355 shrink-0 ${isChecked ? "line-through text-slate-400 dark:text-slate-650" : ""}`}>
                              {slot.time}
                            </span>

                            {isBreak ? (
                              <div className="flex items-center gap-1.5 text-slate-450 dark:text-slate-500 select-none">
                                <Coffee className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-extrabold uppercase tracking-wider">{slot.label}</span>
                              </div>
                            ) : (
                              <div 
                                style={embossedStyle}
                                className={`text-[10px] font-extrabold uppercase tracking-wider py-1.5 px-3 rounded-xl border flex items-center gap-1.5 ${meta.bgClass} ${meta.borderClass} ${meta.textClass} ${isChecked ? "grayscale opacity-50 shadow-none" : ""}`}
                              >
                                <IconComp className="w-3.5 h-3.5" />
                                <span>{slot.label}</span>
                              </div>
                            )}
                          </div>

                          {/* Topic Details (PART A — Inline Editing) */}
                          <div className="flex-1 pl-2 md:pl-0 flex items-center gap-2.5">
                            {isEditingThisSlot ? (
                              <div className="flex-1 flex gap-2">
                                <input
                                  type="text"
                                  value={editVal}
                                  onChange={(e) => setEditVal(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") saveCustomTopic(slot.subject);
                                    if (e.key === "Escape") setEditingSlotIndex(null);
                                  }}
                                  className="flex-1 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3 py-1.5 text-sm text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                                  autoFocus
                                />
                                <button 
                                  onClick={() => saveCustomTopic(slot.subject)}
                                  className="px-3.5 py-1.5 text-xs bg-emerald-550 hover:bg-emerald-500 text-slate-950 font-extrabold rounded-xl border border-emerald-500 transition-all"
                                >
                                  Save
                                </button>
                                <button 
                                  onClick={() => setEditingSlotIndex(null)}
                                  className="px-3.5 py-1.5 text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-extrabold rounded-xl transition-all"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <>
                                <p className={`text-sm leading-relaxed flex-1 ${
                                  isChecked 
                                    ? "line-through text-slate-400 dark:text-slate-400 decoration-slate-450 dark:decoration-slate-600 font-medium" 
                                    : isBreak 
                                    ? "text-slate-500 dark:text-slate-500 italic text-[11px]" 
                                    : "text-slate-805 dark:text-slate-200 font-medium"
                                }`}>
                                  {focusTopicText}
                                </p>
                                {!isBreak && (
                                  <button
                                    onClick={() => startEditing(index, focusTopicText)}
                                    className="p-1.5 text-slate-450 hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                    title="Edit custom topic"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </>
                            )}
                          </div>

                          {/* Action Checkbox */}
                          {!isBreak && completionKey && (
                            <div className="flex items-center justify-end md:justify-center pr-1 shrink-0 pl-2 md:pl-0">
                              <button
                                onClick={() => toggleCompletion(selectedDate, completionKey)}
                                className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                                  isChecked
                                    ? "bg-emerald-500 border-emerald-550 text-slate-950 scale-108 shadow-[1px_2px_5px_rgba(16,185,129,0.35),_inset_1.5px_1.5px_0px_rgba(255,255,255,0.4)]"
                                    : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-transparent hover:border-slate-450 dark:hover:border-slate-500 scale-100 shadow-sm"
                                }`}
                              >
                                <Check className={`w-4 h-4 stroke-[3.5] transition-all duration-300 ${isChecked ? "scale-100 rotate-0" : "scale-0 rotate-12"}`} />
                              </button>
                            </div>
                          )}

                        </div>
                      );
                    })
                  ) : (
                    // Agenda Card
                    <div className="bg-white/80 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-sm backdrop-blur-md">
                      
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <span className={`p-4 rounded-2xl border shrink-0 ${
                          currentDayData.type === "rest"
                            ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-405 border-indigo-200 dark:border-indigo-500/25"
                            : currentDayData.type === "revision"
                            ? "bg-amber-55 dark:bg-amber-500/10 text-amber-600 dark:text-amber-405 border-amber-200 dark:border-amber-500/25"
                            : "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-455 border-rose-200 dark:border-rose-500/25"
                        }`}>
                          {currentDayData.type === "rest" ? (
                            <Coffee className="w-8 h-8" />
                          ) : currentDayData.type === "revision" ? (
                            <BookOpen className="w-8 h-8" />
                          ) : (
                            <Award className="w-8 h-8" />
                          )}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            {currentDayData.type === "rest" 
                              ? "Mock Test & Recharge Schedule" 
                              : currentDayData.type === "revision"
                              ? "Structured Revision Agenda" 
                              : "Final Assessment Protocol"}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed font-semibold">
                            {currentDayData.note}
                          </p>
                        </div>
                      </div>

                      {/* Checklist */}
                      <div className="border-t border-slate-200 dark:border-slate-900/60 pt-6">
                        <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500 dark:text-slate-450 mb-4">
                          Day Agenda Checklist
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {getDayChecklistKeys(currentDayData).map((item) => {
                            const isChecked = !!(completions[selectedDate]?.[item.key]);
                            const meta = subjectMetadata[item.subject] || { 
                              bgClass: "bg-slate-100 dark:bg-slate-905",
                              borderClass: "border-slate-200 dark:border-slate-805",
                              textClass: "text-slate-700 dark:text-slate-350",
                              icon: BookOpen
                            };
                            const IconComp = meta.icon;

                            return (
                              <div 
                                key={item.key}
                                onClick={() => toggleCompletion(selectedDate, item.key)}
                                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                                  isChecked
                                    ? "bg-emerald-50/15 dark:bg-emerald-950/5 border-emerald-200/40 dark:border-emerald-950/15 opacity-55 text-slate-500"
                                    : "bg-white dark:bg-slate-950/50 border-slate-200 dark:border-slate-900 hover:border-slate-350 dark:hover:border-slate-800 hover:bg-white dark:hover:bg-slate-900/30 shadow-sm"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className={`p-1.5 rounded-lg border ${meta.bgClass} ${meta.borderClass} ${meta.textClass} ${isChecked ? "grayscale opacity-50 shadow-none" : ""}`}>
                                    <IconComp className="w-4 h-4" />
                                  </span>
                                  <span className={`text-sm font-semibold leading-snug ${isChecked ? "line-through decoration-slate-400 dark:decoration-slate-750 text-slate-500" : "text-slate-800 dark:text-slate-200"}`}>
                                    {item.label}
                                  </span>
                                </div>
                                
                                <button
                                  className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                    isChecked
                                      ? "bg-emerald-500 border-emerald-555 text-slate-950 scale-108 shadow-[1px_2px_5px_rgba(16,185,129,0.35),_inset_1.5px_1.5px_0px_rgba(255,255,255,0.4)]"
                                      : "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-transparent scale-100 shadow-sm"
                                  }`}
                                >
                                  <Check className={`w-3.5 h-3.5 stroke-[3.5] transition-all duration-300 ${isChecked ? "scale-100 rotate-0" : "scale-0 rotate-12"}`} />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: SIDEBAR METRICS & ANALYTICS (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-6">

                {/* 1. MONTH HEATMAP */}
                <section 
                  ref={tiltHeatmapCard.ref}
                  onMouseMove={tiltHeatmapCard.handleMouseMove}
                  onMouseLeave={tiltHeatmapCard.handleMouseLeave}
                  style={tiltHeatmapCard.style}
                  className="bg-white/80 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-md relative z-10"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-900">
                    <h3 className="text-xs font-extrabold text-slate-805 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <Star className="w-4 h-4 text-emerald-505 dark:text-emerald-400" />
                      <span>September Heatmap</span>
                    </h3>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">30 Cells</span>
                  </div>

                  <div className="grid grid-cols-7 gap-2 p-1.5 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-slate-900">
                    {["M", "T", "W", "T", "F", "S", "S"].map((dHeader, i) => (
                      <div key={i} className="text-[9px] text-slate-400 dark:text-slate-500 font-extrabold text-center uppercase py-1">
                        {dHeader}
                      </div>
                    ))}

                    <div className="aspect-square w-full rounded-md bg-transparent" />

                    {days.map((day, idx) => {
                      const { done, total, percentage } = getDayProgress(day.date);
                      const isSelected = day.date === selectedDate;
                      
                      let bgFill = "bg-slate-200 dark:bg-slate-900 border-slate-300 dark:border-slate-950";
                      if (done > 0) {
                        if (percentage === 100) bgFill = "bg-emerald-505 border-emerald-505 dark:bg-emerald-500 dark:border-emerald-450";
                        else if (percentage >= 60) bgFill = "bg-emerald-350 dark:bg-emerald-600/70 border-emerald-400 dark:border-emerald-700/30";
                        else if (percentage >= 30) bgFill = "bg-emerald-200 dark:bg-emerald-800/40 border-emerald-300 dark:border-emerald-800/20";
                        else bgFill = "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-950/15";
                      }
                      
                      const dayNum = idx + 1;
                      
                      return (
                        <div key={day.date} className="relative group/cell aspect-square w-full">
                          <button
                            onClick={() => handleSelectDateWithFlip(day.date)}
                            className={`w-full h-full rounded-md border transition-all hover:scale-110 ${bgFill} ${isSelected ? "ring-2 ring-emerald-500 dark:ring-emerald-400/60 scale-105 border-emerald-500" : ""}`}
                          >
                            <span className="text-[8px] font-bold opacity-45 dark:opacity-30 select-none block text-center leading-none mt-0.5">
                              {dayNum}
                            </span>
                          </button>

                          <div className="absolute bottom-[115%] left-1/2 transform -translate-x-1/2 hidden group-hover/cell:flex flex-col items-center z-50 pointer-events-none min-w-[150px]">
                            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 p-2 rounded-xl text-center shadow-xl">
                              <div className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{day.day}, Sept {dayNum}</div>
                              <div className="text-xs font-black text-slate-805 dark:text-white mt-1">{done} / {total} tasks</div>
                              <div className="text-[10px] text-emerald-605 dark:text-emerald-400 font-bold mt-0.5">({percentage}% complete)</div>
                            </div>
                            <div className="w-2.5 h-2.5 bg-white dark:bg-slate-950 border-r border-b border-slate-200 dark:border-slate-850 transform rotate-45 -mt-1.5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* PART B — WEBGL 3D SUBJECT BREAKDOWN BAR CHART */}
                {webGLSupported && isTabVisible ? (
                  <section 
                    ref={tiltSubjectCard.ref}
                    onMouseMove={tiltSubjectCard.handleMouseMove}
                    onMouseLeave={tiltSubjectCard.handleMouseLeave}
                    style={tiltSubjectCard.style}
                    className="bg-white/80 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-md relative z-10"
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-900">
                      <h3 className="text-xs font-extrabold text-slate-805 dark:text-white uppercase tracking-wider flex items-center gap-2">
                        <Star className="w-4 h-4 text-emerald-505 dark:text-emerald-400" />
                        <span>3D Analytics Chart</span>
                      </h3>
                      <span className="text-[10px] text-slate-550 font-bold uppercase">WebGL Rendering</span>
                    </div>

                    <Suspense fallback={<div className="h-56 flex items-center justify-center text-xs font-semibold text-slate-400">Loading 3D Visualizer...</div>}>
                      <SubjectBar3D stats={subjectStats} darkMode={darkMode} />
                    </Suspense>

                    {/* Compact flat fallback bar indicators for labels */}
                    <div className="mt-4 flex flex-col gap-2">
                      {["sql", "dsa", "webdev", "genai", "csfund"].map((subKey) => {
                        const meta = subjectMetadata[subKey];
                        const stats = subjectStats[subKey];
                        return (
                          <div key={subKey} className="flex justify-between items-center text-[10px] font-extrabold uppercase">
                            <span className={meta.textClass}>{meta.name.split(" ")[0]}</span>
                            <span className="text-slate-500">{stats.percentage}% done</span>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ) : (
                  // Flat 2D Subject progress list fallback
                  <section 
                    ref={tiltSubjectCard.ref}
                    onMouseMove={tiltSubjectCard.handleMouseMove}
                    onMouseLeave={tiltSubjectCard.handleMouseLeave}
                    style={tiltSubjectCard.style}
                    className="bg-white/80 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-900">
                      <h3 className="text-xs font-extrabold text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                        <Star className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                        <span>Subject Breakdown</span>
                      </h3>
                      <span className="text-[10px] text-slate-500 font-bold uppercase">5 Core Subjects</span>
                    </div>

                    <div className="flex flex-col gap-4">
                      {["sql", "dsa", "webdev", "genai", "csfund"].map((subKey) => {
                        const meta = subjectMetadata[subKey];
                        const stats = subjectStats[subKey];
                        const BarIcon = meta.icon;
                        const activeColor = darkMode ? meta.darkAccentColor : meta.accentColor;
                        
                        return (
                          <div key={subKey} className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                                <span className={`p-1 rounded-md ${meta.bgClass} ${meta.textClass}`}>
                                  <BarIcon className="w-3.5 h-3.5" />
                                </span>
                                <span>{meta.name}</span>
                              </div>
                              <span className={`${meta.textClass} font-bold`}>{stats.percentage}%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-full h-2.5 overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-750 ease-out"
                                style={{ 
                                  width: `${stats.percentage}%`,
                                  backgroundColor: activeColor
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* PART A — PROGRESS ANALYTICS CHART (RECHARTS AREA TREND) */}
                <section
                  className="bg-white/80 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-md relative z-10"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-900">
                    <h3 className="text-xs font-extrabold text-slate-805 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <Star className="w-4 h-4 text-emerald-505 dark:text-emerald-400" />
                      <span>Analytics Trend Curve</span>
                    </h3>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Daily Curve</span>
                  </div>

                  <div className="w-full h-44 text-xs">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trendData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorPercentage" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={darkMode ? "#10b981" : "#059669"} stopOpacity={0.3}/>
                            <stop offset="95%" stopColor={darkMode ? "#10b981" : "#059669"} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.05)"} />
                        <XAxis dataKey="day" stroke={darkMode ? "#475569" : "#94a3b8"} fontSize={9} tickLine={false} />
                        <YAxis stroke={darkMode ? "#475569" : "#94a3b8"} fontSize={9} domain={[0, 100]} tickLine={false} />
                        <ChartTooltip 
                          contentStyle={{ 
                            backgroundColor: darkMode ? "#0f172a" : "#ffffff", 
                            borderColor: darkMode ? "#1e293b" : "#e2e8f0",
                            borderRadius: "12px",
                            color: darkMode ? "#f8fafc" : "#0f172a"
                          }} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey="percentage" 
                          stroke={darkMode ? "#10b981" : "#059669"} 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill="url(#colorPercentage)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </section>

                {/* 3. WEEKLY SUMMARY */}
                <section 
                  ref={tiltWeekCard.ref}
                  onMouseMove={tiltWeekCard.handleMouseMove}
                  onMouseLeave={tiltWeekCard.handleMouseLeave}
                  style={tiltWeekCard.style}
                  className="bg-white/80 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-900">
                    <h3 className="text-xs font-extrabold text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <Star className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                      <span>Weekly Summary</span>
                    </h3>
                    <span className="text-[10px] text-slate-505 font-bold uppercase">4 Phases</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {Object.keys(weekThemes).map((wKey, index) => {
                      const weekNum = index + 1;
                      const theme = weekThemes[wKey];
                      const isCurrentWeek = currentDayData.week === weekNum;
                      const stats = weekStats[weekNum];
                      const isFullyCompleted = stats.percentage === 100 && stats.total > 0;

                      return (
                        <div 
                          key={wKey}
                          className={`p-4 rounded-2xl border transition-all ${
                            isCurrentWeek
                              ? "bg-slate-100/50 dark:bg-slate-900/80 border-emerald-500/35 ring-1 ring-emerald-500/10 shadow-sm"
                              : "bg-white/40 dark:bg-slate-950/40 border-slate-150 dark:border-slate-900 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              {isFullyCompleted && (
                                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              )}
                              <span className={`text-xs font-bold ${isCurrentWeek ? "text-emerald-600 dark:text-emerald-400 text-[13px]" : "text-slate-700 dark:text-slate-355"}`}>
                                {theme.title}
                              </span>
                            </div>
                            {isCurrentWeek ? (
                              <span className="text-[8px] uppercase tracking-wider font-black bg-emerald-500/10 text-emerald-605 dark:text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-md">
                                Current Week
                              </span>
                            ) : isFullyCompleted ? (
                              <span className="text-[8px] uppercase tracking-wider font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                                100% Done
                              </span>
                            ) : null}
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-semibold">
                            {theme.desc}
                          </p>

                          <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-slate-900/60">
                            <div className="flex justify-between items-center text-[10px] text-slate-450 dark:text-slate-400 mb-1.5 font-extrabold uppercase">
                              <span>Progress</span>
                              <span className={`${isFullyCompleted ? "text-emerald-605 dark:text-emerald-400" : isCurrentWeek ? "text-slate-700 dark:text-slate-250" : ""}`}>{stats.percentage}%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-300 dark:border-slate-900">
                              <div 
                                className={`h-full rounded-full transition-all duration-500 ${isFullyCompleted ? "bg-emerald-400" : "bg-emerald-505 dark:bg-emerald-500"}`}
                                style={{ width: `${stats.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* 4. INTERVIEW PREP */}
                <section 
                  ref={tiltInterviewCard.ref}
                  onMouseMove={tiltInterviewCard.handleMouseMove}
                  onMouseLeave={tiltInterviewCard.handleMouseLeave}
                  style={tiltInterviewCard.style}
                  className="bg-white/80 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl p-5 md:p-6 shadow-sm backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-900">
                    <h3 className="text-xs font-extrabold text-slate-805 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <Info className="w-4 h-4 text-emerald-505 dark:text-emerald-400" />
                      <span>Interview Q&A Prep</span>
                    </h3>
                    <button
                      onClick={() => setIsInterviewOpen(!isInterviewOpen)}
                      className="text-xs font-bold text-emerald-605 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-all flex items-center gap-0.5"
                    >
                      <span>{isInterviewOpen ? "Hide" : "Show Quick-Card"}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transform transition-transform ${isInterviewOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {!isInterviewOpen ? (
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-900 p-4 rounded-2xl flex items-center justify-between gap-4">
                      <span>Access technical & HR reference questions anytime.</span>
                      <button
                        onClick={() => setIsInterviewOpen(true)}
                        className="text-[10px] uppercase font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
                      >
                        Open
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="flex bg-slate-100 dark:bg-slate-950 rounded-xl p-1 border border-slate-200 dark:border-slate-900">
                        <button
                          onClick={() => setExpandedInterviewSection("technical")}
                          className={`flex-1 text-xs py-1.5 rounded-lg font-semibold transition-all ${
                            expandedInterviewSection === "technical" 
                              ? "bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-850 text-slate-900 dark:text-white shadow-sm" 
                              : "text-slate-550 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-355"
                          }`}
                        >
                          Technical
                        </button>
                        <button
                          onClick={() => setExpandedInterviewSection("hr")}
                          className={`flex-1 text-xs py-1.5 rounded-lg font-semibold transition-all ${
                            expandedInterviewSection === "hr" 
                          ? "bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-850 text-slate-900 dark:text-white shadow-sm" 
                          : "text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-slate-350"
                          }`}
                        >
                          HR / Behavioral
                        </button>
                      </div>

                      <div className="flex flex-col gap-2.5 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-850 pr-1">
                        {interviewQuestions[expandedInterviewSection].map((q, idx) => (
                          <div 
                            key={idx}
                            className="group bg-slate-50/50 dark:bg-slate-950/50 hover:bg-slate-100/30 dark:hover:bg-slate-900/30 border border-slate-200 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800/80 p-3.5 rounded-2xl transition-all relative flex flex-col justify-between gap-2 shadow-sm dark:shadow-none"
                          >
                            <div className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-semibold pr-6">
                              {q}
                            </div>
                            <button
                              onClick={() => handleCopyQuestion(q, idx)}
                              className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-emerald-500 bg-white dark:bg-slate-950/80 rounded-md border border-slate-200 dark:border-slate-900/80 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
                              title="Copy to clipboard"
                            >
                              {copiedIndex === idx ? (
                                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                            {copiedIndex === idx && (
                              <span className="text-[9px] font-bold text-emerald-605 dark:text-emerald-400 mt-1 self-start">Copied to clipboard!</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

              </div>

            </div>

          </main>

          {/* 4. COMMAND PALETTE MODAL (Cmd+K) */}
          {isSearchOpen && (
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
              <div 
                className="absolute inset-0 bg-slate-950/60 dark:bg-slate-950/75 backdrop-blur-md"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
              />
              
              <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl shadow-2xl flex flex-col max-h-[70vh] overflow-hidden z-10 animate-fadeIn">
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-850">
                  <Search className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by topic, subject, or date..."
                    className="flex-1 bg-transparent border-none outline-none text-slate-805 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm"
                    autoFocus
                  />
                  <button 
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 hover:bg-slate-100 dark:hover:bg-slate-850 rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2.5 max-h-[50vh] scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800">
                  {searchQuery.trim() === "" ? (
                    <div className="text-center py-8 text-slate-450 dark:text-slate-500 text-xs font-semibold">
                      Type something to search across subjects, topics, dates, and week themes.
                    </div>
                  ) : searchResults.length === 0 ? (
                    <div className="text-center py-8 text-slate-450 dark:text-slate-500 text-xs font-semibold">
                      No results found for "{searchQuery}"
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      {searchResults.map((res, index) => {
                        const matchMeta = res.subjectMatch ? subjectMetadata[res.subjectMatch] : null;
                        return (
                          <div 
                            key={index}
                            onClick={() => {
                              setSelectedDate(res.date);
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="w-full text-left p-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-850 border border-transparent hover:border-slate-200 dark:hover:border-slate-800/80 cursor-pointer flex items-center justify-between gap-4 transition-all"
                          >
                            <div className="flex-1">
                              <div className="text-xs font-black text-slate-900 dark:text-white">{res.title}</div>
                              <div className="text-[11px] text-slate-550 dark:text-slate-400 mt-1 leading-relaxed">{res.subtitle}</div>
                            </div>
                            {matchMeta && (
                              <span className={`text-[8px] font-extrabold uppercase tracking-wider py-1 px-2.5 rounded-md border shrink-0 ${matchMeta.bgClass} ${matchMeta.borderClass} ${matchMeta.textClass}`}>
                                {matchMeta.name.split(" ")[0]}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-950 px-4 py-2 border-t border-slate-200 dark:border-slate-850 text-slate-450 dark:text-slate-500 text-[10px] font-bold flex justify-between uppercase tracking-wider">
                  <span>Use ↑↓ to navigate (Click to select)</span>
                  <span>Esc to close</span>
                </div>
              </div>
            </div>
          )}

          {/* 5. FOOTER */}
          <footer className="mt-auto border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 py-6 px-4 text-center text-slate-555 dark:text-slate-400 text-xs font-semibold transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© 2026 Placement Prep Hub. All rights reserved.</p>
              <div className="flex gap-4">
                <span className="text-emerald-600 dark:text-emerald-500/90 font-bold hover:underline cursor-default">Keep Learning</span>
                <span className="text-slate-300 dark:text-slate-800">|</span>
                <span className="hover:text-slate-705 dark:hover:text-slate-350 cursor-default">Structured Timeline</span>
              </div>
            </div>
          </footer>
        </>
      )}

    </div>
  );
}

// Custom WebGL rounded bar chart
function SubjectBar3D({ stats, darkMode }) {
  const subjects = [
    { key: "sql", color: "#06b6d4", index: -2 },
    { key: "dsa", color: "#8b5cf6", index: -1 },
    { key: "webdev", color: "#3b82f6", index: 0 },
    { key: "genai", color: "#d946ef", index: 1 },
    { key: "csfund", color: "#10b981", index: 2 }
  ];
  
  return (
    <div className="w-full h-56 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-900 rounded-2xl overflow-hidden shadow-inner relative">
      <Canvas camera={{ position: [0, 2.8, 5.2], fov: 45 }}>
        <ambientLight intensity={darkMode ? 0.65 : 0.9} />
        <directionalLight position={[2, 6, 3.5]} intensity={darkMode ? 1.1 : 1.3} castShadow />
        
        <group position={[0, -0.85, 0]}>
          {subjects.map((sub) => {
            const percentage = stats[sub.key]?.percentage || 0;
            const height = 0.15 + (percentage / 100) * 2.15;
            
            return (
              <group key={sub.key} position={[sub.index * 0.92, 0, 0]}>
                <RoundedBox 
                  args={[0.62, height, 0.62]} 
                  radius={0.06} 
                  smoothness={4} 
                  position={[0, height / 2, 0]}
                >
                  <meshStandardMaterial 
                    color={sub.color} 
                    roughness={0.12} 
                    metalness={0.08} 
                  />
                </RoundedBox>
              </group>
            );
          })}
          
          <ContactShadows 
            position={[0, 0, 0]} 
            opacity={0.42} 
            scale={8.5} 
            blur={1.6} 
            far={1.4} 
          />
        </group>
        
        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2.15} 
          autoRotate 
          autoRotateSpeed={0.65} 
        />
      </Canvas>
      <div className="absolute top-2 left-3 text-[9px] uppercase tracking-wider font-black text-slate-450 dark:text-slate-505 pointer-events-none">
        Drag to rotate 3D bars
      </div>
    </div>
  );
}
