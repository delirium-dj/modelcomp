# MiniMax M2.5 — findings by Space Bunny

- Source: MiniMax (`MiniMaxAI/MiniMax-M2.5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's cost-first frontier coding and agent model, released 2026-02-12 and marketed on a single number — about **$1 to run it continuously for an hour** at 100 tokens/s. Trained predominantly with reinforcement learning across 200,000+ real-world environments, it targets coding, agentic tool use, web search and office-productivity workflows (Word/Excel/PowerPoint) rather than general chat. It is an iteration on the unchanged M2 architecture (M2 → M2.1 → M2.5 in 3.5 months) and is now **listed as a Legacy model**, superseded by MiniMax-M2.7 and MiniMax M3, both tracked separately in this dataset.
- **Provider / access:** MiniMax API `https://api.minimax.io/v1/text/chatcompletion_v2` with model IDs `MiniMax-M2.5` (standard, 50 tps) and `MiniMax-M2.5-highspeed` (100 tps) — identical capability, different speed. Weights at `MiniMaxAI/MiniMax-M2.5` on Hugging Face and GitHub (`MiniMax-AI/MiniMax-M2.5`), recommended for vLLM or SGLang. Also NVIDIA NIM (`minimaxai/minimax-m2.5`) and DeepInfra (fp8, 196,608 tokens). Not on OpenCode Zen.
- **Release / knowledge:** Hugging Face **2026-02-12**; NVIDIA Build / NGC **2026-02-26**. Knowledge cutoff not published.
- **IDs:** `MiniMax-M2.5` (API), `MiniMax-M2.5-highspeed` (API), `MiniMaxAI/MiniMax-M2.5` (weights). No Free tier ID on aggregators; Z.ai-style free trials aside, M2.5 is paid everywhere listed.
- **Context window:** **204,800 tokens** hosted (Artificial Analysis rounds to 205k) as a *combined input+output* budget; **196,608 tokens** (196K) is the self-hosted vLLM per-sequence limit and Vals AI's max-output setting. Max output equals the context in practice.
- **Modalities:** **text in, text out only.** Reasoning yes; tool/function calling, parallel tool calling, JSON structured output and file input supported; **no image and no video input** (confirmed by Artificial Analysis, Vals AI and NVIDIA NIM, all three of which label it text-only). No audio, no image output.
- **Pricing (as of 2026-10-17):** **$0.30 input / $1.20 output per 1M** on the standard route, cache read $0.03, cache write $0.375 (prices verified 2026-07-16); `-highspeed` is $0.60 / $2.40. DeepInfra lists $0.15 / $1.15. Artificial Analysis blended 7:2:1 rate: **$0.201/1M**. **Pricing conflict noted:** an early Hugging Face community write-up quoted Standard at $0.15/$1.20 and Lightning at $0.30/$2.40 — half the standard input rate and double the standard output rate; the current vendor price table and both Artificial Analysis and Vals AI agree on **$0.30 / $1.20**, which is used here. Weights are free (**MIT** per Artificial Analysis; the GitHub README badge says Modified-MIT — the two are recorded rather than reconciled).
- **Architecture:** MoE with Lightning Attention, **230B total / 10B active** per token, routing 8 experts per token (`MiniMaxM2ForCausalLM`). Architecture is unchanged from M2. **Conflicting parameter figures:** NVIDIA NIM's model card lists total and active parameters as "Undisclosed", and Artificial Analysis's M2 launch article said 200B total / 10B active; Hugging Face, Artificial Analysis's model pages and the community write-up all say 230B / 10B.

### Raw benchmarks found

> Two independent families again: MiniMax's own launch numbers (with MiniMax's stated harness caveats) and third-party reruns by Artificial Analysis and Vals AI.

Agent / tool use:

- BrowseComp (with context management): **76.3%** (MiniMax, WebExplorer framework — history is discarded once token use exceeds 30% of the window)
- Multi-SWE-Bench: **51.3%** — **first place in the industry**, ahead of Claude Opus 4.6's 50.3%
- Vals AI Terminal-Bench 2.0: **41.57% ±5.25, #30 of 67**, and **#2 among open-weight models** (behind GLM-5)
- Wide Search, RISE (internal), GDPval-MM (internal), MEWC (Excel-World-Championship), Finance Modeling — all evaluated, **only partly published**; no numeric figures released for Wide Search, RISE, GDPval-MM, MEWC or Terminal Bench 2 in MiniMax's materials
- **Parallel tool calling** is called out as a capability improvement over M2.1, and is the stated reason end-to-end SWE-bench runtime fell 37%
- Vals AI observed M2.5 "struggles on legal and financial tasks," scoring relatively low on CorpFin and CaseLaw

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23 (estimated)**, #26 of 697 in the comparison set. M2 scored 19, so M2.5 is a real but modest step up
- GPQA-Diamond: **85.2%** (MiniMax) / **82.07% ±2.26** (Vals AI, #62 of 138) — the independent rerun lands ~3 points lower, and both are below Claude Opus 4.6's vendor-stated 90.0
- AIME 2025: **86.3%** (MiniMax; M2.1 83.0, Claude Sonnet 4.5 88.0, Opus 4.6 95.6, Gemini 3 Pro 96.0, GPT-5.2 98.0)
- **Humanity's Last Exam without tools: 19.4%** (MiniMax) / **21%** (Artificial Analysis) — and this is a **regression** from M2.1's 22.2% and far below Sonnet 4.5's 17.3…Opus 4.6's 30.7 and Gemini 3 Pro's 37.2
- CritPt: **1%** (Artificial Analysis) — essentially zero
- **AA-Omniscience: −39** (M2 was −47) — a deeply negative knowledge-reliability index, meaning far more wrong than right answers when it does not know. Its own successor M2.7 scores +1
- MMLU-Pro: **80.09% ±0.39** (Vals AI, #91 of 138); SciCode **44.4%**; IFBench **70.0%**

Coding:

- SWE-bench Verified: **80.2%** (MiniMax) / **74.20% ±1.96** (Vals AI, **#49 of 88** and **#1 among open-weight models** on the Vals Index split). MiniMax's methodology caveat is explicit: internal infrastructure, **Claude Code scaffolding with the default system prompt overridden**, results averaged over 4 runs, plus separate Droid and OpenCode scaffold runs. The ~6-point vendor-vs-independent gap is the honest number to plan around
- Multi-SWE-Bench: **51.3%** (industry #1) across 10+ programming languages (Python, Go, C, C++, TypeScript, Rust, Kotlin, Java, JavaScript, PHP, Lua, Dart, Ruby)
- LiveCodeBench: **79.21% ±1.12** (Vals AI, #73 of 143)
- Vibe Code Bench v1.1: **14.85% ±2.95** (Vals AI, #85 of 110) — a severe weakness in open-ended app generation
- Token efficiency on SWE-bench Verified: **3.52M tokens/task** (M2.1: 3.72M); end-to-end runtime **22.8 min/task** vs M2.1's 31.3 min — a 37% speedup matching Claude Opus 4.6's pace
- SWE-bench Pro: listed in MiniMax's evaluated set but **no figure published**

Long context:

- AA-LCR v1.1: **73%** (Artificial Analysis, independent) / **69.5%** (MiniMax) — one of the better long-context scores among 200K-class models, and up from M2's 64%
- No MRCR / RULER / GraphWalks figure published
- The BrowseComp 76.3% run explicitly relies on a history-discarding policy at 30% of the window, which is a context-management strategy rather than raw retrieval strength

Multimodal:

- **None — text-only**, agreed by Artificial Analysis, Vals AI and NVIDIA NIM. The "GDPval-MM" name in MiniMax's evaluated set is an *office-document* agentic benchmark (Word/PPT/Excel trajectories judged pairwise), **not** an image-modality test.

Speed (independent):

- **100.8 t/s** and **89.6 t/s** on two Artificial Analysis comparison pages; TTFT **1.33 s**
- Vendor framing: $1/hour at 100 tps, $0.30/hour at 50 tps
- 10B active parameters is extremely sparse for a 230B model, which is the structural reason the throughput is achievable

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong agentic-tool profile with real independent confirmation: BrowseComp 76.3% with context management, Vals AI Terminal-Bench 2.0 at **#2 among open-weight models**, and demonstrated parallel tool calling that cut end-to-end task runtime 37%. Capped at 82 rather than higher because MiniMax evaluated Terminal Bench 2, Wide Search, RISE, GDPval-MM and MEWC and **published no numbers for any of them**, so the tool-use evidence is thinner than the marketing implies — and because Vals AI found measurable weakness on finance and legal agentic tasks.
- **Reasoning: 72/100.** Solid mid-tier: GPQA-D 85.2% (vendor) / 82.1% (independent), AIME25 86.3%, MMLU-Pro 80.1%, AA Intelligence Index 23 (up from M2's 19), AA-LCR 73%. Held down by three real problems: **HLE without tools at 19.4%, a regression from its own predecessor**, **CritPt at 1%**, and above all an **AA-Omniscience index of −39** — one of the worst knowledge-reliability scores in this dataset, meaning it confidently fabricates rather than abstaining. Its own successor M2.7 moved that to +1.
- **Context window: 74/100.** A genuine 204,800-token hosted budget (196K self-hosted), with an independently measured **AA-LCR of 73%** that is genuinely good for a 200K-class model and five points better than M2's 64%. Capped because 200K is well short of the 1M tier that Opus 4.7, Beam, Kimi K3 and Nemotron 3.5 Super VL occupy, and because no RULER/MRCR curve is published.
- **Multimodal: 15/100.** **Text-only**, agreed across three independent sources. No image or video input, no image output, no audio. Nothing supports scoring this above the text-only floor — and the "GDPval-MM" label should not be mistaken for vision capability.
- **Coding: 84/100.** The reason to buy this model: SWE-bench Verified 80.2% vendor / **74.2% independently verified as #1 among open-weight models**, **Multi-SWE-Bench 51.3% as industry #1**, LiveCodeBench 79.2%, and a documented token/runtime efficiency (3.52M tokens and 22.8 min per SWE-bench task) that makes long agent loops economically viable. Held below the top band by the 6-point vendor-vs-independent gap, by **Vibe Code Bench at 14.85% (#85/110)** — it cannot build an app from a brief — and by the absence of any published SWE-bench Pro figure.
- **Cost efficiency: 90/100.** The clear standout dimension and the model's entire reason for existing: **$0.30 / $1.20 per 1M** (blended $0.201), cache read at $0.03, MIT weights free, ~$1 per continuous hour at 100 tps. Artificial Analysis classes this as a top-decile cost score; it is roughly **1/8 the output price of Claude Opus 4.6 ($25)** and ~1/3 of GLM-5 ($3.20). Marked down from the top only because the API is now Legacy-tier, DeepInfra undercuts it further at $0.15/$1.15, and 10B-active reasoning still burns tokens.
- **Overall Score: 65/100.** Mean of the five non-cost dims (82 + 72 + 74 + 15 + 84) / 5 = 65.4, half-up to 65. Best-fit recommendation: the pick for **high-volume, cost-constrained coding agents and multilingual repository work** where the $1/hour economics decide the architecture — and a poor fit for any knowledge-heavy or factual-reliability-sensitive task given HLE 19.4% and an Omniscience index of −39. For new deployments prefer **MiniMax M3 or M2.7**, which are faster and far more reliable on the same price class.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across MiniMax's official launch post and models page, the `MiniMax-AI/MiniMax-M2.5` GitHub README (the primary benchmark table *with MiniMax's own harness caveats attached*), the NVIDIA Build NIM model card and its API reference, Vals AI's MiniMax-M2.5 profile (independent SWE-bench 74.20%, Terminal-Bench 2.0 41.57%, LiveCodeBench, MMLU-Pro, Vibe Code Bench, modality and pricing facts), Artificial Analysis comparison pages for M2.5 vs M2 / M2.7 / Ministral 3 / M1 40k / Qwen2.5 Max (index 23, AA-LCR 73%, AA-Omniscience −39, speed, blended price), the Hugging Face community breakdown, the DeepInfra listing, and a price-table verification dated 2026-07-16. Every conflict found — vendor vs independent SWE-bench (80.2 vs 74.2), the $0.15/$1.20 vs $0.30/$1.20 pricing split, 230B vs 200B total parameters, MIT vs Modified-MIT license, and the misleading "GDPval-MM" multimodal-sounding label — is recorded inline rather than smoothed over; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.