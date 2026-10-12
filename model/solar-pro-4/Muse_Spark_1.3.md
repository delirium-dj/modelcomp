# Solar Pro 4 — findings by Muse Spark 1.3

- Source: Upstage/Solar Pro 4 (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-21 superseding the 2026-09-18 excluded attempt; new: AA Aug 2026 Solar Pro 4 article — independent GDPval 1277, Omniscience split, 384K context, 8.6-min latency; vendor-table rows corrected where AA disagrees)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (Upstage AI, agentic flagship)
- **Short description:** Upstage's closed commercial agentic flagship (Aug 2026) tuned for behavioral reliability in production workflows — document understanding, extraction, long-context reasoning and sequential tool-calling decisions.
- **Provider / access:** Upstage via Console API + OpenRouter (`upstage/solar-pro4`), Kilo Gateway, NanoGPT/LLMTR routes; Hermes Agent integration (Chat Completions, tool calling, structured output, reasoning effort high/low).
- **Release / knowledge:** 2026-08-06 release (listed 08-10/08-11); knowledge cutoff 2026-02; 90%-off launch promo through 2026-09-10
- **IDs:** `upstageai/solar-pro-4` (state explicitly: no Free ID exists on Zen)
- **Context window:** 384K total / 256K max out (AA Aug 2026 article; provider catalogs listed 524K-family figures — AA's 384K is the measured lane; amended 2026-10-12).
- **Modalities:** text in/out; reasoning yes (configurable effort); tool calls yes; structured output yes; no vision/attachment input per catalog (Vision input No)
- **Pricing (as of 2026-10-12):** $0.30 in / $1.20 out / $0.06 cache-hit per 1M (AA article, Upstream first-party; 90%-off launch promo ended 2026-09-10); budget routes $0.03/$0.12 (OpenRouter/NanoGPT/LLMTR)
- **Architecture:** proprietary dense (parameter count undisclosed); EN/KO/JA input-output; dedicated/on-prem enterprise deploys available

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Compared against prior findings (2026-09-21, Overall 69): new verified evidence below — AA Aug 2026 Solar Pro 4 article gives independent absolutes (Index 42, GDPval-AA v2 1277, Omniscience −1 via 41% attempt rate, 384K context, 43k tokens/task, 8.6-min latency). Corrections: filed vendor-table GDPval "38.8%" restated at independent 1277 Elo; context corrected 524K → 384K lane. Vendor numbers below are Upstage's official blog table unless marked AA-independent.
>
> Vendor numbers below are Upstage's official Solar Pro 4 blog table (Sep 2026, vs Solar Open 2) unless noted.

Agent / tool use:

- Terminal-Bench v2.1: **57.0%** (Upstage official blog table, +13.8 over Solar Open 2 43.2)
- Tau3-Banking: **23.0%** (same table, +4.9 over 18.1)
- MCP-Atlas: **61.4%** (same table, +3.2 over 58.2)
- GDPval-AA v2: **1277 Elo** (AA article, independent — supersedes filed vendor-table "38.8%"; above human baseline 1000, ahead of Qwen3.7 Max 1272 and MiMo-V2.5-Pro 1266; Solar Pro 3 was 498)
- BrowseComp: **49.2%** (same table, +11.9 over 37.3)
- APEX-Agents: **18.7%** (same table, +2.1 over 16.6)
- Tool Execution: **90/100** (CrucibleMark benchmark modules, +9 vs model average, ties best); ToolUse Score 70.54 (+3.8); CLI Benchmark 89.9 (+3)
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Upstage official blog table, +3.4 over 85.6)
- MMLU-Pro: **86.3%** (same table, +0.1)
- AIME 2026: **95.3%** (same table, −0.4)
- AA-LCR: **71.0%** (same table, +8.3 over 62.7; Seoul Economic Daily confirms 71, 2.3x predecessor)
- HLE: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **42 AA Index** (AA article, independent — confirms vendor PR figure; +28 over Solar Pro 3's 14; alongside Inkling xhigh 42, behind MiMo-V2.5-Pro 43)
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience −1** (AA article — improved from −53 via abstention: 41% attempt rate vs 92% for Pro 3; hallucination 24% vs 88%; accuracy flat at 19%; NEW, closes prior gap)
- CrucibleMark proxies: Total Silver 75.42 (#21), Logical Reasoning 74.85, Code Quality 74.36, LLM Judge 3.85/5

Coding:

- SWE-bench Verified: **70.6% SWE-Verified (OpenHands harness)** (Upstage official blog table, +1.4 over 69.2)
- LiveCodeBench: **87.8%** (same table, +0.8 over 87.0)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (closest proxy: ModelBench Coding Index #83/202; CrucibleMark Code Quality 74.36)

Long context:

- **71.0% AA-LCR long-document comprehension** (vendor table + independent press + AA article: 31% → 71% vs Pro 3); 384K window per AA article (amended 2026-10-12)
- AA efficiency context (NEW): 43k output tokens per Index task (17% fewer than Pro 3's 52k, still verbose for its tier); 8.6 min per Index task (up from 6.0 min — latency hit noted)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 76/100.** GDPval-AA 1277 (independent, above human baseline) plus CrucibleMark Tool Execution 90, TB2.1 57.0 and MCP-Atlas 61.4 show reliable production agency; capped by weak Tau3 23.0 and APEX 18.7.
- **Reasoning: 83/100.** GPQA 89.0%, MMLU-Pro 86.3% and AIME 95.3% with AA Index 42 (independently confirmed) show strong enterprise reasoning; capped by Omniscience accuracy flat at 19% and missing HLE/CritPt absolutes.
- **Context window: 88/100.** 384K lane (AA article; corrects filed 524K) with AA-LCR 71.0 maps to the upper mid band; capped below true 1M models (revised down from 90: context evidence is new and smaller).
- **Multimodal: 15/100.** No vision/attachment input per catalog; text-only floor applies (unchanged).
- **Coding: 82/100.** SWE-Verified 70.6% and LiveCode 87.8% with Code Quality 74.36 show solid production coding; capped by missing SWE-Pro/DeepSWE absolutes.
- **Cost efficiency: 94/100.** $0.30/$1.20 upstream ($0.03/$0.12 budget routes) is cheap paid value with no $0 tier.
- **Overall Score: 69/100.** Mean of the five non-cost dims (76+83+88+15+82)/5 = 68.8; best-fit reliable enterprise agent for document-heavy workflows where Korean/English production stability matters.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-21 report (superseding the 2026-09-18 excluded attempt): fresh public internet research (AA Aug 2026 Solar Pro 4 article — independent Index 42, GDPval 1277, Omniscience split, 384K context, latency notes; vendor-table rows corrected where AA disagrees); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
