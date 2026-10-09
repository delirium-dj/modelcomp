# Grok 4.20 — findings by Step 5 Preview

- Source: xAI (`grok-4.20-0309`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Multi-Agent / Reasoning / Non-Reasoning variants)
- **Short description:** xAI's long-context workhorse (beta 2026-02-17, GA 2026-03-10/18) — the most structurally distinct Grok since the original series: a four-agent council (Grok coordinator, Harper research, Benjamin math/code, Lucas synthesis) runs in parallel on shared weights, debates through peer-review rounds and synthesizes an answer, cutting the hallucination rate from ~12% to 4.2% in xAI's testing. Ships with the class's largest working context (2M tokens on the multi-agent variant, 1M on the single-model variants) at $1.25/$2.50 per MTok. Superseded as flagship by Grok 4.3 (2026-04-30) but retained as the long-context option.
- **Provider / access:** xAI API (`grok-4.20-multi-agent-0309`, `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`); x.com for X Premium+; enterprise contracts. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-02-17 beta / 2026-03-10 GA; knowledge cutoff December 2025.
- **IDs:** `grok-4.20-multi-agent-0309` (2M), `grok-4.20-0309-reasoning` / `-non-reasoning` (1M).
- **Context window:** **2,000,000 tokens (multi-agent) / 1,000,000 (single-model variants)**; output counts toward the window; 30K max output API (131K playground).
- **Modalities:** Text + image in → text out (no audio/video); function calling, web search, X search, code execution; reasoning tokens billed as output.
- **Pricing (as of 2026-10-09):** $1.25 / MTok input, $2.50 output, $0.20 cached input (84% off) — cut from $2/$6 at the February launch; higher rates above 200K context; 24h context caching ($3.75/1M write).
- **Architecture:** MoE transformer, estimated 1.7–3T total parameters (undisclosed); 4-agent (16-agent Heavy) council at inference; improved rotary position encoding with mid-context retrieval training.

### Raw benchmarks found

Reasoning / knowledge (mixed vendor / Vals / AA):

- GPQA Diamond: **88.9%** (vendor) / 88.6% (Vals) / **91.1%** (AA, 0309 v2 Reasoning); AIME 2025 ~95% (Heavy 100%)
- HLE: **34.5%** (AA, 0309 v2 Reasoning) / 31.6% without tools (Meta comparison chart); ARMES lists 22.8–30.0% across configs
- MMLU-Pro: **86.3–86.6%** (Vals/vendor); ARC-AGI-1: **89.5%**; ARC-AGI-2: **65.1%** (#10/71)
- SimpleQA: **88.3%** (field-leading factual accuracy; non-hallucination rate ~78%); NYT Connections Extended: 90.4%
- Artificial Analysis Intelligence Index: **37** (BenchmarkList verified) / 25.7–26 (AA release page for 0309 v2)
- IFBench: **81.2%** (AA) / 72.6% (ARMES); Vals Index: 39.5% (#36/40 — low)

Coding:

- SWE-bench Verified: **72.2%** (Vals) / 76.7–78.0% (vendor)
- SWE-bench Pro: **51.8%**; LiveCodeBench: **84.3%** (Vals); LCB Pro: 74.2%; IOI: 30.2%
- Terminal-Bench 2.0: **47.1%**; Terminal-Bench 2.1: **44.2%** (Vals, #88/194); Terminal-Bench Hard: **40.9%** (#30/326)
- Vibe Code Bench v1.1: **4.1%** (Vals — effectively fails end-to-end app building); WebDev Arena: 1373 Elo (#69/105)

Agentic / tool use:

- DeepSearchQA: **62.8%** (Meta comparison chart); Agents' Last Exam: **20.1%** (Benchgen; ALE-Bench Elo 1150)
- τ²-Bench Telecom: **93.0%** (AA run via graysoft) / 64.4% (ARMES — config-dependent); Gert Labs: 38.36%
- MedXpertQA (Text): 50.2%; HealthBench Hard: 20.3%

Multimodal:

- MMMU-Pro: **83.5%** (Vals) / 74.6% (AA, 0309 v2 Reasoning); Vals Multimodal Index: 39.1% (#28/29 — low)

Long context (its headline feature):

- **>95% needle-retrieval accuracy at all positions across the full 2M-token window** (xAI + independent needle-in-a-haystack testing), vs 60–70% mid-context degradation in earlier models; 2M ≈ 1,500 pages / 250K lines of code
- AA-LCR: **69.0%** (AA, 0309 v2 Reasoning); prefill of 2M tokens takes ~45–90s

### Normalized scores (1–100)

- **Tool use: 62/100.** DeepSearchQA 62.8%, τ² Telecom 64.4–93.0% (config-dependent) and the 4-agent debate architecture show real agentic plumbing; capped by Terminal-Bench 2.1 at 44.2%, Agents' Last Exam 20.1%, Gert Labs 38.4% and the Vals Index of 39.5% (#36/40).
- **Reasoning: 80/100.** GPQA 88.6–91.1%, ARC-AGI-1 89.5% / ARC-AGI-2 65.1%, MMLU-Pro 86.3–86.6% and field-leading SimpleQA 88.3% are frontier-band; capped by HLE 34.5%, the AA Intelligence Index at 25.7–37 and IFBench ranging 49.3–81.2% by configuration.
- **Context window: 95/100.** 2M tokens on the multi-agent variant (1M on the single-model variants) is the largest working window in this comparison, with >95% verified needle retrieval across the full 2M range and mid-context training; the 100 tier is held back only by the 45–90s 2M prefill and the AA-LCR of 69%.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 74.6–83.5%; no audio/video input or non-text output, and the Vals Multimodal Index of 39.1% (#28/29) shows real weakness.
- **Coding: 70/100.** SWE-bench Verified 72.2–78.0% (level with GPT-5.4) and LiveCodeBench 84.3% are mid-frontier; capped by SWE-bench Pro 51.8%, Terminal-Bench 2.1 44.2%, Vibe Code Bench 4.1% and WebDev Arena #69 — this is a long-context specialist, not a coding frontier.
- **Cost efficiency: 92/100.** $1.25/$2.50 per MTok with $0.20 cached input and 24h context caching maps just above the methodology's ~$1.25/$4.25 ≈ 88 tier — ~60% cheaper output than GPT-5.4 with the class's largest window; capped by the ≥200K long-context rates and the Heavy council's multi-x token consumption.
- **Overall Score: 75/100.** Best-fit recommendation: the large-corpus specialist — 2M-token ingestion with >95% retrieval and the market's lowest hallucination rate for legal/research/finance document work; not for unsupervised autonomy (flagged misalignment under KPI pressure) or end-to-end vibe coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (xAI Grok 4.20 docs + pricing, ARMES, HokAI, BenchmarkList, graysoft/AA runs, Vals AI, Benchgen, DigitalApplied); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
