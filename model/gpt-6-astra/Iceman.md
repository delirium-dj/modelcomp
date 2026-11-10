# GPT-6 Astra — findings by Iceman

- Source: OpenAI/GPT-6 Astra
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI’s GPT-6 Astra is a frontier flagship model announced for high intelligence and alignment, with strong computer use, browsing, software engineering, cybersecurity, science, and professional work capabilities. OpenAI positions it for demanding agentic and long-context tasks, with a gated rollout and Critical-tier cybersecurity considerations.
- **Provider / access:** OpenAI ChatGPT (Plus/Pro/Business/Enterprise rollout per announcement) and OpenAI API as `gpt-6-astra`; also announced for Microsoft Azure and AWS Bedrock. Chat/completions vs Responses API specifics not fully detailed in the announcement text reviewed; local metadata lists `openai/gpt-6-astra` and `noFreeId`.
- **Release / knowledge:** Announced by OpenAI (GPT-6 Astra announcement page fetched). Knowledge cutoff not explicitly stated in the reviewed announcement text.
- **IDs:** `gpt-6-astra` (OpenAI API model ID per announcement); local metadata ID `openai/gpt-6-astra`.
- **Context window:** Local metadata states 1,050,000 (1M) / 128K out. Announcement highlights long-context strengths (e.g. MRCR results shown) but exact official context/output limits were not explicitly enumerated in the fetched page text; treated as provisionally consistent with local metadata.
- **Modalities:** Local metadata states text, image in; text out. Announcement emphasizes computer use/visual workflows; full modality matrix not exhaustively specified in fetched text.
- **Pricing (as of 2026-11-10):** OpenAI API standard pricing stated in announcement: **$10 per 1M input tokens and $50 per 1M output tokens** (separate cache read/write rates apply; Fast mode at 2x standard price noted). Local metadata aligns ($10/$50 per 1M).
- **Architecture:** Proprietary OpenAI frontier model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s GPT-6 Astra announcement (benchmark tables and text). Scores are reported by OpenAI and may be "maximum at any effort" and run in research/API environments as noted by OpenAI.

Agent / tool use:

- Agents' Last Exam (**computer use**): **59.3%** (OpenAI announcement)
- OSWorld 2.0 (v2026.08.08, offline set, partial score): **72.6%** (OpenAI announcement)
- ScreenSpot-Pro (no tools): **92.7%** (OpenAI announcement)
- AutomationBench (**professional/workflows**): **41.4%** (OpenAI announcement)
- GDPval-AA v2.1 (**knowledge work**, Elo): **1542** (comparative figure cited in Anthropic Opus 5.5 announcement for GPT-6 Astra; OpenAI announcement emphasizes strong professional work but this exact Elo not repeated in fetched OpenAI table)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- ARC-AGI-3: **99.9%** (OpenAI announcement)
- ARC-AGI-2: **95.0%** (OpenAI announcement)
- ARC-AGI-1: **98.5%** (OpenAI announcement)
- FrontierMath Tier 4 (v2): **97.6%** (OpenAI announcement)
- GPQA Diamond: **96.0%** (OpenAI announcement)
- Humanity's Last Exam (w/ tools): **57.2%** (OpenAI announcement)
- Artificial Analysis Intelligence Index v4.1.1: **61.2** (OpenAI announcement)
- Terminal-Bench Science 0.1: **64.6%** (OpenAI announcement)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Terminal-Bench 4.0: **57.9%** (OpenAI announcement)
- DeepSWE v1.1: **74.1%** (OpenAI announcement)
- FrontierCode 1.1 Extended (score): **64.5%** (OpenAI announcement)
- FrontierCode 1.1 Main (score): **53.3%** (OpenAI announcement)
- Internal Database Migration Tasks: **63.9%** (OpenAI announcement, internal eval)
- Artificial Analysis Coding Agent Index v1.4: **67.0** (OpenAI announcement)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: **100.0%** (OpenAI announcement)
- OpenAI MRCR v2 8-needle 512K-1M: **96.3%** (OpenAI announcement)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 95/100.** Excellent verified computer-use/agentic results (Agents' Last Exam 59.3%, OSWorld 2.0 72.6%, ScreenSpot-Pro 92.7%, AutomationBench 41.4%) and strong professional workflow positioning support top-tier tool use; capped by limited coverage of some standardized tool-call suites in template.
- **Reasoning: 97/100.** Exceptional verified reasoning/math/science signals (FrontierMath Tier 4 97.6%, GPQA Diamond 96.0%, ARC-AGI-3 99.9%, TB-Science 64.6%) place it at the frontier; capped slightly by HLE 57.2% (strong but not absolute best in all comparisons) and missing some template reasoning metrics.
- **Context window: 96/100.** Near-perfect verified long-context retrieval results (MRCR v2 100.0% at 256K-512K, 96.3% at 512K-1M) and 1M-class positioning indicate very strong long-context capability; capped slightly by incomplete explicit official window spec in fetched text (metadata indicates 1.05M/128K).
- **Multimodal: 86/100.** Strong visual/computer-use evidence (ScreenSpot-Pro 92.7%, OSWorld/computer-use demos) and image-input positioning support capable multimodal/vision-grounded use; capped because reviewed sources emphasize text out and do not establish broad audio/video/PDF or multimodal output coverage.
- **Coding: 93/100.** Strong verified coding and engineering results (TB4.0 57.9%, DeepSWE 74.1%, FrontierCode 64.5%/53.3%, AA Coding Agent Index 67.0) support high-end coding ability; capped by peers leading some coding comparisons and missing common public coding benchmarks like SWE-bench Verified in reviewed sources.
- **Cost efficiency: 45/100.** Flagship paid pricing ($10/$50 per 1M input/output) is very expensive; justified only for highest-stakes frontier workloads, poor for routine cost-sensitive use.
- **Overall Score: 93/100.** Mean of the five non-cost dims (95, 97, 96, 86, 93) = 93.4 → 93 (half-up). Best fit for frontier reasoning, long-context agentic/computer-use tasks, and advanced scientific/engineering work where premium cost is acceptable.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI’s official announcement; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Astra: A new generation of intelligence (OpenAI announcement)](https://openai.com/index/gpt-6-astra/)
  - [GPT-6 Astra safety/system materials referenced by OpenAI](https://deploymentsafety.openai.com/gpt-6-astra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
