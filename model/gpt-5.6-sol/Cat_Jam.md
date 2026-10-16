# GPT-5.6 Sol — findings by Cat Jam

- Source: OpenAI / GPT-5.6 Sol (`opencode/gpt-5.6-sol`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship GPT-5.6 model for complex professional work; strong per-token efficiency, frontier coding per OpenAI's metrics, agent-scale tooling; promotional pricing at $4/$20.
- **Provider / access:** OpenAI API (`gpt-5.6-sol` / `gpt-5.6` alias), ChatGPT Plus/Pro/Business/Enterprise, Codex, Cerebras high-throughput. Responses, Chat Completions, Realtime, Assistants, Batch; text/image in; text out.
- **Release / knowledge:** Released 2026-07-09 (GA after limited preview); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5-6-sol`? slug `gpt-5.6-sol`; API `gpt-5.6-sol`
- **Context window:** 1,050,000 tokens total (922,000 max input / 128,000 max output); long-context repricing above 272K.
- **Modalities:** Text, image in; text out. Reasoning effort none/low/medium/high/xhigh/max; `ultra` multi-agent mode (higher cost, multi-agent). Tool calling (web search, file search, image gen, code interpreter, hosted shell, apply patch, computer use, MCP, etc.).
- **Pricing (as of 2026-10-16):** Promotional through 2026-11-21: $4 / $20 per 1M (cache read $0.40, cache write 1.25x; >272K: $8/$30). Batch/Flex half.
- **Architecture:** Proprietary GPT family. No open weights (ultra mode runs coordinated subagents via beta multi-agent API).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI, max) / 91.9% (ultra) / AA 86.7? official 88.8, Vals 85.77
- OSWorld 2.0: **62.6%** (OpenAI)
- BrowseComp: **92.2%** (ultra 90.4? OpenAI says 92.2% at max; base 90.1?) — OpenAI published BrowseComp 92.2% with 85% fewer output tokens than Opus 4.8.
- Agents' Last Exam: **53.6**
- GDPval-AA v2 Elo (AA/ModelPrice): **1624.1**
- AA-Briefcase: not listed in sampled table; not found
- AutomationBench: 45.2% (benchgap)
- CyberGym: 84.5% (benchgap)
- Toolathlon? not found

Reasoning / knowledge:

- AA Intelligence Index v4.1: **58.9 / 59.0** (AA/OpenAI) — max reasoning; v4.3.2 maybe 47.0 at max? (minirouter shows 47.0 on current composite; historical article 59). Use current: 47.0
- GPQA Diamond: **94.6%** (OpenAI max)
- HLE (no tools / w/ tools / AA): 47.2–60.7? AA-HLE 49.5; vendor says? 60.7 est. (benchgap) no official HLE in sampled OpenAI table. Use 49.5 AA.
- LCR / AA-LCR: 84.0% (benchgap)
- CritPt: 32.3%
- Omniscience Accuracy: 59.4%
- ARC-AGI-2: 92.5% (BenchLM)
- FrontierMath Tier 4 v2: 83.0% (BenchLM)
- Knowledge cutoff Feb 16, 2026

Coding:

- SWE-Bench Verified: 96.20% (Vals)
- SWE-Bench Pro: **64.6%** (OpenAI)
- DeepSWE v1.1: **72.7%** (OpenAI)
- Terminal-Bench 2.1: **88.8%** (OpenAI)
- Coding Agent Index: **80** (AA, new state of the art)
- FrontierSWE v2? 64.6? no (vendor: 64.6 SWE-Pro)
- SciCode: SciCode est 41.9, AA-SciCode 57.1

Long context:

- MRCR v2 8-needle 256K-512K: **91.5%**; 512K-1M: **73.8%**. GraphWalks BFS 256k 90.7, 1mil 77.1. Strong.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 88.8, OSWorld 62.6, BrowseComp 92.2, Agents' Last Exam 53.6, GDPval Elo 1624. Strong agent with ultra mode.
- **Reasoning: 90/100.** GPQA 94.6, HLE/AA 49.5, LCR 84.0, CritPt 32.3, ARC-AGI-2 92.5, FrontierMath T4 83.0. Strong 8 (current index 47 cap).
- **Context window: 92/100.** MRCR 91.5 at 256–512K and 73.8 at 512K-1M; GraphWalks 77.1 at 1M. Strong retrieval but degradation in 1M.
- **Multimodal: 78/100.** Text/image in, text out; OSWorld 62.6; no native audio/video. Good image grounding but no audio/video.
- **Coding: 93/100.** DeepSWE 72.7, TB2.1 88.8, SWE-Pro 64.6, Coding Agent Index 80, SWE-Verified 96.2. Leading agentic coding at low cost.
- **Cost efficiency: 84/100.** $4/$20 per 1M (promo through Nov 21) with cache 90% off and batch half; very strong value for flagship class.
- **Overall Score: 89/100.** Mean of (93 + 90 + 92 + 78 + 93) / 5 = 89.2. Frontier-ish agentic flagship with excellent cost.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI blog/docs/pricing, Artificial Analysis, BenchLM, Benchgap, minirouter, Vals.ai, goml); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
