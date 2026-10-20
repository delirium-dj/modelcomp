# Grok 4.1 Fast — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (Grok 4.1 Fast, reasoning + non-reasoning), `grok-4.1-fast`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (reasoning variant `grok-4.1-fast-reasoning`, non-reasoning variant `grok-4.1-fast-non-reasoning`)
- **Short description:** xAI's November 2025 "fast" tier for tool-heavy, high-volume agent work — a 2M-token window at $0.20/M input and $0.50/M output, with a reasoning build that keeps a surprisingly high τ²-bench score. Deprecated on Vertex and no longer on xAI's price list; **never offered on OpenCode Zen**, so the `opencode/grok-4.1-fast` id in this folder has no live Zen route.
- **Provider / access:** xAI first-party API (`grok-4.1-fast-reasoning`, `grok-4.1-fast-non-reasoning` — https://docs.x.ai/developers/models), plus gateways (Google Vertex, Azure AI Foundry, Vercel, Helicone, models.dev canonical `models/xai/grok-4.1-fast.toml`).
- **Release / knowledge:** **2025-11-19** (xAI news post "Grok 4.1 Fast and Agent Tools API"). Knowledge cutoff not published.
- **IDs:** `grok-4.1-fast-reasoning`, `grok-4.1-fast-non-reasoning` (xAI); `xai/grok-4.1-fast-non-reasoning`, `xai/grok-4.1-fast-reasoning` (models.dev canonical).
- **Context window:** **2,000,000** tokens, **~30,000** max output (xAI news post, models.dev canonical entries, AA).
- **Modalities:** input text + image; output text; tools and structured outputs supported; tool calls billed from $5 per 1000 successful invocations.
- **Pricing (as of 2026-10-20):** **$0.20/M in, $0.50/M out, $0.05/M cached** (xAI news post; identical across models.dev providers).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench: **93.3%** (AA, reasoning build — https://artificialanalysis.ai/models/grok-4-1-fast-reasoning) vs **63.7%** (non-reasoning build) · xAI's own claim: **100%** on the τ² Telecom split at $105 total cost
- Berkeley Function Calling v4 (overall accuracy): **72%** at $400 cost (xAI news post)
- IT-Bench-SRE: **17.9%** (AA, non-reasoning build) · Terminal-Bench Hard: **24.2%** (AA, both builds)
- Tool calls: from **$5 / 1000 successful invocations** (xAI)
- GDPval-AA / OSWorld / AutomationBench / Toolathlon / MCP-Atlas: no verified public score found for Grok 4.1 Fast

Reasoning / knowledge:

- GPQA Diamond: **85.3%** (AA, reasoning) vs **63.7%** (non-reasoning) · HLE: **19.3%** (reasoning) vs **5.1%** (non-reasoning)
- AA-LCR: **74.0%** (reasoning) vs **31.3%** (non-reasoning) · IFBench: **52.7%** (reasoning) vs **36.5%** (non-reasoning)
- Artificial Analysis Intelligence Index: **20.4** (reasoning) vs **11.3** (non-reasoning)
- LiveCodeBench: **82.2%** (reasoning) vs **39.9%** (non-reasoning) · AIME: **89.3%** (reasoning) vs **34.3%** (non-reasoning)
- Omniscience Hallucination Rate: **73.4%** (reasoning) vs **82.3%** (non-reasoning) — xAI claims the rate is half of Grok 4 Fast's, with no number published
- Research-Eval Reka **63.9**, FRAMES **87.6**, X Browse (internal) **56.3** (xAI news post)

Coding:

- Gert Labs Composite Game Benchmark: **47.32%** (BenchLM ledger)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found for Grok 4.1 Fast

Long context:

- No MRCR / RULER retrieval measurement published despite the 2M window.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 93.3% and BFCL v4 72% (plus $5/1000 tool-call pricing) show real tool competence on the reasoning build, but IT-Bench-SRE 17.9% and Terminal-Bench Hard 24.2% are weak, and the non-reasoning build (63.7% τ²) drags the tier average down.
- **Reasoning: 68/100.** GPQA 85.3%, AIME 89.3% and LCR 74% on the reasoning build are solid mid-band, capped by an AA Intelligence Index of 20.4, HLE 19.3% and a 73.4% hallucination rate; the non-reasoning build (GPQA 63.7%, HLE 5.1%) is much weaker.
- **Context window: 90/100.** A genuine 2,000,000-token window (≈30K max output) sits in the top tier, but no long-context retrieval test is published, so it is scored below the 95+ band.
- **Multimodal: 68/100.** Text and image input with text output, MMMU-Pro 63.3% on the reasoning build — image in, no audio/video, so the 60–70 band applies.
- **Coding: 62/100.** LiveCodeBench 82.2% on the reasoning build is mid-band, but no SWE-bench or DeepSWE number exists and the non-reasoning build's LiveCodeBench is 39.9%; there is no published repo-scale coding evidence.
- **Cost efficiency: 98/100.** $0.20/M in, $0.50/M out, $0.05/M cached is among the cheapest routes of any 2M-context model — the standout of this entry.
- **Overall Score: 72/100.** Mean of the five quality dims = (70 + 68 + 90 + 68 + 62) / 5 = 71.6 → **72**. Best fit: high-volume tool-calling and bulk processing on a small budget — but it is deprecated, and the reasoning build is the only variant worth choosing.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (xAI news and developer docs, Artificial Analysis, BenchLM, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
