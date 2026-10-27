# Qoder Sonus — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus (Sonus)
- **Short description:** Qoder (Alibaba's AI coding platform) built-in model, launched September 10, 2026. Specialized for marathon-length autonomous tasks, computer use (driving machine/pro software directly), complex knowledge work, and serious coding. Paired with Qoder Desktop 0.2.3 for computer use. No public parameter count, architecture, or training details disclosed.
- **Provider / access:** Qoder platform only (Qoder, Qoder IDE, Qoder CLI, JetBrains plugin, QoderWake, Cloud Agents). OpenCode provider: `opencode/qoder-sonus` (via opencode-qoder-plugin). Not on OpenRouter, Hugging Face, or public model hubs. Closed weights, no self-host.
- **Release / knowledge:** 2026-09-10 launch; knowledge cutoff not published.
- **IDs:** `opencode/qoder-sonus` (OpenCode via qoder provider), `qoder/sonus` (Qoder CLI). No public API outside Qoder ecosystem.
- **Context window:** 180K tokens (per opencode-qoder-plugin model list). Qoder docs list "128K total" in meta.json — **CONFLICT: 180K vs 128K**.
- **Modalities:** Text input/output; attachments supported (per opencode-qoder-plugin). **No native multimodal** (text-only per plugin model list). Reasoning: yes. Tool calls: yes (computer use via Qoder Desktop 0.2.3). JSON mode: not specified. Structured output: not specified.
- **Pricing (as of 2026-10-27):** Qoder credit system only. Credit multiplier: **8x** (raised from 3.2x on 2026-09-21 per Qoder docs). 500 credits/day free for Pro/Enterprise (Sep 15–25 promo). No per-token pricing published. No free tier for Lite subscribers. Cost per task unknown — community reports "burns credits rapidly" (2000 credits in minutes with no output).
- **Architecture:** Undisclosed. Parameter count unknown. No architecture details published. Base model unknown. Qoder has not disclosed parameters, context window, architecture, training data, or benchmarks (per OrcaRouter analysis of similar Qoder model Cantus).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **CRITICAL LIMITATION:** **Zero independent benchmarks.** No Artificial Analysis, llm-stats, BenchLM, or third-party evaluations found. All claims below are vendor-reported or from vendor website (sonus.ai).

Agent / tool use:

- Computer Use (Qoder Desktop 0.2.3): **vendor demonstration only** — drives machine/pro software, writes code, builds financial models, runs research, produces spreadsheets end-to-end
- SWE-bench Verified / Pro / Terminal-Bench / τ²-Bench / BFCL / MCP-Atlas / Toolathlon / AutomationBench / OfficeQA / JobBench / BrowseComp / DeepSearchQA: **no scores**
- OpenCode usage: **no public usage data** for qoder-sonus specifically

Reasoning / knowledge:

- MMLU: **87.5%** (claimed) — sonus.ai website (vendor)
- HumanEval: **90%** (claimed) / **91.3%** (claimed, Sonus-1) — sonus.ai website (vendor)
- MATH: **91.8%** (claimed) — sonus.ai website (vendor)
- GPQA / GPQA Diamond / AIME / HLE / MMLU-Pro / C-Eval / SuperGPQA / MMMLU / BBH / ZebraLogic / CritPt / SimpleQA / AA-LCR / AA-Omniscience / AA Intelligence Index: **no scores**

Coding:

- HumanEval: **90–91.3%** (claimed, vendor) — sonus.ai
- LiveCodeBench / SWE-bench Verified / Pro / Terminal-Bench / Terminal-Bench Hard / SciCode / Codeforces / MBPP / SWE-Rebench / Vibe Code Bench: **no scores**

Long context:

- Context window: **180K** (opencode-qoder-plugin) vs **128K** (meta.json) — **CONFLICT**
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR / MMLongBench / BrowseComp / DeepSearchQA: **no scores**

Multimodal:

- **No native multimodal** (text in/out per opencode-qoder-plugin; attachments supported but not vision/audio/video)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 25/100.** Computer use demoed (Qoder Desktop 0.2.3 drives machine/pro software) but **zero standard agentic benchmarks** (SWE-bench, Terminal-Bench, τ²-Bench, BFCL, MCP-Atlas). No independent verification. Capped by zero standard benchmarks and closed platform.
- **Reasoning: 20/100.** Vendor claims MMLU 87.5%, MATH 91.8% but **zero independent verification**. No GPQA, AIME, HLE, MMLU-Pro, C-Eval scores. Sonus-1 website claims not reproduced. Capped by zero independent benchmarks and vendor-only claims.
- **Context window: 55/100.** **Conflict: 180K (plugin) vs 128K (meta.json)**. No RULER/MRCR/GraphWalks/LongBench/AA-LCR verification. Mid-tier placement (128K–180K).
- **Multimodal: 15/100.** Text-only input/output. Attachments supported but no vision/audio/video. Floor for text-only model.
- **Coding: 25/100.** Vendor claims HumanEval 90–91.3% but **zero independent verification**. No SWE-bench, LiveCodeBench, Terminal-Bench, SciCode, Codeforces, MBPP. Capped by zero standard coding benchmarks and vendor-only claims.
- **Cost efficiency: 15/100.** Credit multiplier 8x (very high). Community reports rapid credit burn (2000 credits in minutes, no output). No per-token pricing, no free tier for Lite, closed platform. Opaque cost model.
- **Overall Score: 28/100.** Mean of (25+20+55+15+25)/5 = 28.0 → 28. Queue rank unknown (not in model-queue.md top 200). Best fit: **proprietary coding agent model with strong vendor claims but zero independent verification**; computer use specialty; opaque pricing (8x credit multiplier); closed ecosystem; not independently benchmarkable.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Qoder forum announcement, Qoder docs model consumption reference, opencode-qoder-plugin README, sonus.ai website, OrcaRouter analysis of Qoder Cantus, CoinEx news, X/Twitter Qoder announcement, DEV community complaint); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Zero independent benchmarks; all claims vendor-reported (sonus.ai MMLU 87.5%, HumanEval 90–91.3%, MATH 91.8%); no parameter count/architecture; context window conflict (180K vs 128K); credit multiplier 8x with community complaints of rapid burn; closed ecosystem (Qoder only); no public API.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.