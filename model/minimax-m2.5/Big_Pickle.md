# MiniMax M2.5 — findings by Big Pickle

- Source: MiniMax (`MiniMaxAI/MiniMax-M2.5`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** Open-weight 230B-total / 10B-active Mixture-of-Experts language model released 2026-02-12, trained extensively with reinforcement learning across hundreds of thousands of real-world environments. Positioned as SOTA in coding, agentic tool use and search, and office productivity (Word, Excel, PPT workflows). Architecture unchanged from M2 (late Oct 2025) — a 230B sparse MoE with 10B active parameters. Succeeded by MiniMax-M2.7 (mid-2026) and MiniMax-M3 (512K context, later 2026). Not an alias of any other entry.
- **Provider / access:** MiniMax Open Platform API (`MiniMax-M2.5` and `MiniMax-M2.5-highspeed`); open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.5`); self-host via vLLM or SGLang (220 GB for weights, 240 GB per 1M context tokens on NVIDIA GPU, compute capability ≥7.0). Also available via NVIDIA NIM (Build.NVIDIA.com, NGC from 2026-02-26) and third-party providers (Novita, DeepInfra, Together, FriendliAI, DigitalOcean, GMI — 7 providers tracked by AA).
- **Release / knowledge:** released 2026-02-12 (MiniMax news post, HuggingFace, NVIDIA NIM release date). Knowledge cutoff not publicly stated.
- **IDs:** `MiniMax-M2.5`, `MiniMax-M2.5-highspeed` (MiniMax API); `MiniMaxAI/MiniMax-M2.5` (Hugging Face).
- **Context window:** **204,800 tokens** (MiniMax OpenAI SDK / API docs — combined input + output budget). Local vLLM deployment: 196K max per sequence. Vals AI: 197K. Artificial Analysis: 205K. `meta.json`: "~205,000 total (192K–205K class)". BenchLM lists 128K (conservative/incorrect). Max output matches input (~205K total).
- **Modalities:** text in / text out only. No image, video, or audio. Tool calls. Thinking cannot be disabled (MiniMax states thinking is mandatory for M2.x models).
- **Pricing:** conflicting figures across sources and time:
  - MiniMax launch (HF blog, Feb 2026): Standard (50 TPS) $0.15 in / $1.20 out; Lightning (100 TPS) $0.30 in / $2.40 out.
  - `meta.json`: M2.5 $0.15 in / $0.60 out; M2.5-Lightning $0.30 in / $2.40 out (possibly an older promotional output price).
  - Current (AA + Vals, Oct 2026): $0.30 in / $1.20 out; blended $0.20 (7:2:1); cache read $0.03 (Vals). AA notes this is the **lowest blended price among all MiniMax models**.
  - M2.5-Lightning variant: 100 TPS, roughly 2× the throughput of comparable frontier models; ~$1/hour of continuous operation at 100 TPS (HF blog estimate).
- **Architecture:** proprietary open weights (Modified MIT License / "NVIDIA Open Model License" per NIM — commercial use permitted without restrictions per AA). 230B total parameters, 10B active per forward pass (1/32 expert routing). Latency comparable to ~50B dense models. Trained on 10+ languages (Python, Go, C, C++, TypeScript, Rust, Kotlin, Java, JavaScript, PHP, Lua, Dart, Ruby). 37% faster on SWE-Bench Verified than M2.1, matching Claude Opus 4.6's speed (vendor claim). Avg 3.52M tokens per SWE-V task (HF blog, down from M2.1's 3.72M).

### Raw benchmarks found

> Vendor-reported figures come from MiniMax's official M2.5 announcement (2026-02-12), the HuggingFace model card, and NVIDIA NIM model card. SWE evaluations used **internal infrastructure, Claude Code scaffolding, prompt changes, and averaging over four runs** (MiniMax repository methodology warning). BrowseComp used a WebExplorer-style context-management framework. Independent numbers (Artificial Analysis, Vals AI, BenchLM) are marked as such.

Coding:

- SWE-bench Verified: **80.2%** (vendor, 4-run avg, Claude Code scaffolding) — within ~1pp of Claude Opus 4.6 at launch
- Multi-SWE-Bench: **51.3%** (vendor) — **first place at launch**, ahead of Claude Opus 4.6's 50.3% (HF blog). Multilingual (10+ languages).
- SWE-bench Multilingual: not separately published for M2.5 (M2.1: 72.5%)
- SWE-bench Pro: evaluated per NVIDIA NIM card, but **no verified public score found** in search results
- Vibe Code Bench v1.1: **14.85% ±2.95** (Vals AI independent eval) — weak
- LiveCodeBench: **no verified public score found** for M2.5
- SciCode: **44.4%** (vendor, NVIDIA NIM)

Agent / tool use:

- BrowseComp (with context management): **76.3%** (vendor) — using a WebExplorer-style framework that discards history after a context threshold. BrowseComp-zh: not separately published for M2.5 (M2: 48.5%).
- Terminal-Bench 2: evaluated by MiniMax using Claude Code 2.0.64 scaffolding (vendor announcement), but **the specific score was not captured in search results**. M2.1 scored 47.9% on TB2.0 with the same scaffolding; M2.5 is expected to be higher but no verified figure found.
- τ²-Bench: **no verified public score found** for M2.5 (M2.1: 87.0% Telecom)
- GAIA (text only), xbench-DeepSearch, FinSearchComp-global, AgentCompany: evaluated by MiniMax for M2 (75.7 / 72 / 65.5 / 36) but **no M2.5-specific scores captured** in search results
- OSWorld: **no verified public score found**
- GDPval-AA: **no verified public score found** (MiniMax developed internal GDPval-MM for office workflows; no public score)

Reasoning / knowledge:

- AIME 2025: **86.3%** (vendor, NVIDIA NIM)
- GPQA Diamond: **85.2%** (vendor, NVIDIA NIM)
- HLE (no tools): **19.4%** (vendor, NVIDIA NIM) / **21%** (Artificial Analysis independent) — two sources agree within 2pp
- AA-LCR (long context reasoning): **69.5%** (vendor) / **73%** (Artificial Analysis independent) — AA's independent eval is higher
- IFBench (instruction following): **70.0%** (vendor)
- CritPt: **1%** (Artificial Analysis independent)
- AA-Omniscience: **−39** (Artificial Analysis independent)
- Artificial Analysis Intelligence Index: **23 (estimated)**, rank #37/117 (AA) — above average among comparable open-weight models (median: 18). Marked "estimated — independent evaluation forthcoming"; AA has deprecated M2.5 and only continues 10K-input workload benchmarking.
- BenchLM overall: **49.94/100**, rank #97/954 (BenchLM) — but only **1 of 639 benchmarks covered** (Vibe Code Bench 14.85%); BenchLM notes coverage is conservative. Lists M2.5 as "Non-Reasoning" (incorrect — M2.5 has mandatory thinking) and context as 128K (conservative).
- LLM Stats: no M2.5-specific page found (M2 page exists)

Multimodal:

- **No multimodal benchmarks** — text-only model. MiniMax documents image and video input for M3, not M2.5.

Long context:

- AA-LCR: **69.5%** (vendor) / **73%** (AA independent) — verifies reasoning over the ~205K window
- RULER: **no verified public score found**
- BrowseComp 76.3% used context management (history pruning), not raw long-context window

Performance / speed:

- Output speed: **68–71 TPS** (AA, MiniMax provider); Lightning variant: 100 TPS
- Time to first token: **1.39–1.66s** (AA)
- SWE-Bench Verified completion: **37% faster than M2.1**, matching Claude Opus 4.6 (vendor)

### Scores

- **Tool use: 68/100.** BrowseComp 76.3% (with context management) is strong for web research; Multi-SWE-Bench 51.3% was #1 at launch; 200K+ real-world RL environments trained genuine agentic decomposition. Offsets: no τ²-Bench, Terminal-Bench 2, OSWorld, or GDPval-AA score found for M2.5 specifically; Vibe Code Bench 14.85% (Vals) is weak; BrowseComp required a scaffolded context-management framework; superseded by M2.7 and M3.
- **Reasoning: 68/100.** GPQA Diamond 85.2% is strong; AIME 2025 86.3% is solid; AA-LCR 69.5–73% verifies long-context reasoning. Offsets: HLE 19.4–21% is low; CritPt 1% and AA-Omniscience −39 are very weak; AA Intelligence Index 23 (estimated) is above average for its class but far below frontier; BenchLM coverage is 1/639.
- **Context window: 55/100.** 204.8K hosted (196K local per-sequence max) was competitive at launch (Feb 2026) and remains in the 200K class. Offsets: by Oct 2026, 1M+ is standard among frontier models (Claude Opus 4.7, Gemini 3 Pro, MiniMax's own M3 at 512K); AA-LCR 69.5–73% is solid but not exceptional; no RULER score; the window is combined input+output, not separate.
- **Multimodal: 5/100.** Text-only. No image, video, or audio input. MiniMax explicitly reserved multimodal input for M3.
- **Coding: 70/100.** SWE-bench Verified 80.2% was within ~1pp of Claude Opus 4.6 at launch; Multi-SWE-Bench 51.3% was first place (ahead of Opus 4.6's 50.3%); SciCode 44.4%; 37% faster SWE-V completion than M2.1. Offsets: all vendor SWE figures used Claude Code scaffolding and internal infrastructure (scaffold-dependent); Vibe Code Bench 14.85% (Vals independent) is weak; no LiveCodeBench or SWE-bench Pro score; superseded by M2.7 and M3.
- **Cost efficiency: 92/100.** $0.30/$1.20 per 1M (or $0.15/$1.20 Standard tier at launch); blended $0.20 — the lowest among MiniMax's model lineup and among the cheapest frontier-adjacent coding models available. ~$1/hour at 100 TPS. 10B active parameters means self-hosting is feasible on a single node-class GPU setup (220 GB weights). Free tier: `meta.json` says no free tier (`noFreeId: true`). Offsets: Lightning tier is 2× the price; output pricing 3× GLM-5's $3.20 per HF blog comparison is actually favorable ($1.20 vs $3.20).
- **Overall Score: 53/100.** Half-up mean of Tool use (68), Reasoning (68), Context window (55), Multimodal (5), Coding (70) = 266/5 = 53.2 → 53. Cost efficiency (92) is excluded per `model-comparison.md` methodology. The Multimodal score of 5 (text-only) drags the overall significantly — this is per the scoring rubric, which weights multimodal equally with other quality dimensions.

### Caveats and conflicts

- **Pricing discrepancy:** launch-era figures (HF blog: $0.15/$1.20 Standard, $0.30/$2.40 Lightning) differ from `meta.json` ($0.15/$0.60, $0.30/$2.40) and current AA/Vals figures ($0.30/$1.20, blended $0.20). The report uses the current AA/Vals figure ($0.30/$1.20) as primary, noting launch-era and meta.json variants. The $0.60 output price in meta.json may reflect a promotional period or a data entry error.
- **Context window spread:** 196K (vLLM local) to 205K (AA) depending on source and deployment. The hosted API figure of 204,800 (MiniMax docs) is treated as canonical. BenchLM's 128K listing is conservative/incorrect.
- **Scaffold-dependent vendor scores:** MiniMax's repository explicitly warns that SWE evaluations used "internal infrastructure, Claude Code scaffolding, prompt changes, and averaging over four runs" and BrowseComp used "a specific WebExplorer-style framework" that discarded history after a context threshold. These are model-plus-scaffold results, not raw model capability. Vals AI's independent Vibe Code Bench 14.85% is a more honest signal of raw capability on frontend tasks.
- **AA deprecation:** Artificial Analysis has deprecated M2.5 ("We only continue performance benchmarking for the default 10k input token workload. Results for other workloads are historical and no longer updated.") — superseded by M2.7, then M3.
- **BenchLM thin coverage:** BenchLM overall 49.94 is based on a single benchmark (Vibe Code Bench); BenchLM notes "coverage is conservative." BenchLM also mislabels M2.5 as "Non-Reasoning" (it has mandatory thinking) and lists context as 128K.
- **Terminal-Bench 2 score missing:** MiniMax announced TB2 evaluation with Claude Code 2.0.64 scaffolding but the specific score was not captured in search results. M2.1 scored 47.9% on TB2.0; M2.5's score is expected to be higher but no verified figure was found.
- **Architecture unchanged from M2:** M2.5 is an RL-trained checkpoint on the same 230B/10B MoE architecture as M2 (Oct 2025), M2.1, and M2.7. The gains come from training (hundreds of thousands of RL environments), not architecture.

### Sources

- MiniMax M2.5 official announcement: https://www.minimax.io/news/minimax-m25
- MiniMax M2.5 model page: https://www.minimax.io/models/text
- MiniMax-M2 GitHub (M2 family benchmarks, methodology): https://github.com/MiniMax-AI/MiniMax-M2
- MiniMax-M2.1 GitHub (predecessor comparison): https://github.com/MiniMax-AI/MiniMax-M2.1
- HuggingFace blog (mlabonne analysis, 2026-02-17): https://huggingface.co/blog/mlabonne/minimax-m25
- NVIDIA NIM model card: https://build.nvidia.com/minimaxai/minimax-m2.5
- NVIDIA NIM API reference: https://docs.api.nvidia.com/nim/reference/minimaxai-minimax-m2.5
- Artificial Analysis model page (deprecated): https://artificialanalysis.ai/models/minimax-m2-5
- Artificial Analysis MiniMax provider page: https://artificialanalysis.ai/providers/minimax
- Vals AI comparison page: https://www.vals.ai/comparison?modelA=minimax%2FMiniMax-M2.5
- BenchLM model page: https://benchlm.ai/models/minimax-m2-5
- MiniMax M2.5 migration/integration guide (minimax-ai.chat): https://minimax-ai.chat/models/minimax-m2-5
- vLLM deployment recipes: https://github.com/vllm-project/recipes/blob/main/MiniMax/MiniMax-M2.md

**Big Pickle (opencode/big-pickle)** — 2026-10-18
