# Solar Pro 4 — findings by Muse Spark 1.3

- Source: Upstage/Solar Pro 4 (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (Upstage AI, agentic flagship)
- **Short description:** Upstage's closed commercial agentic flagship (Aug 2026) tuned for behavioral reliability in production workflows — document understanding, extraction, long-context reasoning and sequential tool-calling decisions.
- **Provider / access:** Upstage via Console API + OpenRouter (`upstage/solar-pro4`), Kilo Gateway, NanoGPT/LLMTR routes; Hermes Agent integration (Chat Completions, tool calling, structured output, reasoning effort high/low).
- **Release / knowledge:** 2026-08-06 release (listed 08-10/08-11); knowledge cutoff 2026-02; 90%-off launch promo through 2026-09-10
- **IDs:** `upstageai/solar-pro-4` (state explicitly: no Free ID exists on Zen)
- **Context window:** 524,288 total / 131,072 max out — verified via provider catalog listings (524.288K/131.072K across 5 providers); vendor blog cites 512K baseline with 128K out
- **Modalities:** text in/out; reasoning yes (configurable effort); tool calls yes; structured output yes; no vision/attachment input per catalog (Vision input No)
- **Pricing (as of 2026-09-21):** $0.30 in / $1.20 out per 1M upstream ($0.06 cached); budget routes $0.03/$0.12 (OpenRouter/NanoGPT/LLMTR)
- **Architecture:** proprietary dense (parameter count undisclosed); EN/KO/JA input-output; dedicated/on-prem enterprise deploys available

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Vendor numbers below are Upstage's official Solar Pro 4 blog table (Sep 2026, vs Solar Open 2) unless noted.

Agent / tool use:

- Terminal-Bench v2.1: **57.0%** (Upstage official blog table, +13.8 over Solar Open 2 43.2)
- Tau3-Banking: **23.0%** (same table, +4.9 over 18.1)
- MCP-Atlas: **61.4%** (same table, +3.2 over 58.2)
- GDPval-AA v2: **38.8%** (same table, +7.4 over 31.4)
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
- Artificial Analysis Intelligence Index / BenchLM overall: **42 AA Index** (Upstage PR + Seoul Economic Daily, Aug 2026, 3x predecessor; ahead of Nemotron 3 Ultra 38 and Gemini 3.5 Flash-Light 37)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- CrucibleMark proxies: Total Silver 75.42 (#21), Logical Reasoning 74.85, Code Quality 74.36, LLM Judge 3.85/5

Coding:

- SWE-bench Verified: **70.6% SWE-Verified (OpenHands harness)** (Upstage official blog table, +1.4 over 69.2)
- LiveCodeBench: **87.8%** (same table, +0.8 over 87.0)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (closest proxy: ModelBench Coding Index #83/202; CrucibleMark Code Quality 74.36)

Long context:

- **71.0% AA-LCR long-document comprehension** (vendor table + independent press); 524K window verified from five provider listings

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 74/100.** CrucibleMark Tool Execution 90 with TB2.1 57.0, MCP-Atlas 61.4 and BrowseComp 49.2 show reliable production agency; capped by weak Tau3 23.0 and APEX 18.7.
- **Reasoning: 82/100.** GPQA 89.0%, MMLU-Pro 86.3% and AIME 95.3% with AA Index 42 show strong enterprise reasoning; capped by missing HLE/CritPt absolutes.
- **Context window: 90/100.** Verified 524K (512K vendor baseline) with AA-LCR 71.0 maps to the upper 500K–1M band; capped below true 1M models.
- **Multimodal: 15/100.** No vision/attachment input per catalog; text-only floor applies.
- **Coding: 82/100.** SWE-Verified 70.6% and LiveCode 87.8% with Code Quality 74.36 show solid production coding; capped by missing SWE-Pro/DeepSWE absolutes.
- **Cost efficiency: 94/100.** $0.30/$1.20 upstream ($0.03/$0.12 budget routes) is cheap paid value with no $0 tier.
- **Overall Score: 69/100.** Mean of the five non-cost dims (74+82+90+15+82)/5 = 68.6; best-fit reliable enterprise agent for document-heavy workflows where Korean/English production stability matters.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (Upstage official blog table + PR, Seoul Economic Daily, PR Newswire, CrucibleMark report, ModelBench provider catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
