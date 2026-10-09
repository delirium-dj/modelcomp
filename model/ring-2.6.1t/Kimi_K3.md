# Ring 2.6 1T — findings by Kimi K3

- Source: inclusionAI / Ant Group (`ring-2.6-1t`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** inclusionAI's (Ant Group) trillion-parameter open-weight thinking model, released 2026-05-08 — sparse MoE with ~63B active parameters, adjustable reasoning effort (high/xhigh) aimed at real-world agent workflows. MIT license.
- **Provider / access:** OpenRouter `inclusionai/ring-2.6-1t` (+ a free route via Kilo); Hugging Face `inclusionAI/Ring-2.6-1T` (MIT, SGLang/vLLM supported); Opper gateway lists it as unrouted/returning.
- **Release / knowledge:** 2026-05-08 (OpenRouter/opper); HF repo dated 2026-05-14; knowledge cutoff not published.
- **IDs:** `inclusionai/ring-2.6-1t` (OpenRouter); `Ring-2.6-1T` (HF). No OpenCode Zen Free ID verified (Kilo exposes a $0 route).
- **Context window:** 262,144 tokens (YaRN-extended from a 128K base, per frontierbenchmarks); max output 66K (opper).
- **Modalities:** text in → text out; thinking with high/xhigh effort levels; tool calling; structured output.
- **Pricing (as of 2026-10-09):** modelgrep lists from **$0.075/M input**; free $0 routes exist (Kilo); MIT weights make self-host the path for enterprise.
- **Architecture:** sparse MoE, 1T total / ~63B active; MIT license.

### Raw benchmarks found

(Vendor = inclusionAI launch reported numbers via opper; AA = independent Artificial Analysis suite via opper)

Agent / tool use:

- Tau2-Bench Telecom: **95.32%** (vendor) / **92%** (AA independent)
- PinchBench: **87.60** (vendor; "edges past GPT-5.4 and Gemini 3.1 Pro" per inclusionAI)
- Terminal-Bench Hard: **29%** (AA — weak long-horizon terminal work)
- Tau3 / BrowseComp / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AIME 2026: **95.83** (vendor); GPQA Diamond: **88.27** (vendor) / **86%** (AA)
- HLE: **22%** (AA); AA-LCR long-context reasoning: **70%** (AA)
- Artificial Analysis Intelligence Index: **16.6** (AA — low on the composite, which weights agentic/hard suites)
- IFBench: **45%** (AA)

Coding:

- SciCode: **45%** (AA); AA Coding Index: **42.8** (AA); opper global rank #271/687, "Efficient" tier; 80th-percentile output speed 125 tok/s (benchable)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 262K window via YaRN; AA-LCR 70% is its strongest independent retrieval number found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** Tau2-Telecom 92–95.3% (both vendor and independent) shows real sequential tool-call reliability; capped by Terminal-Bench Hard 29% and missing MCP/BrowseComp coverage.
- **Reasoning: 74/100.** GPQA 86–88% and AIME 2026 95.8 are strong for the class; HLE 22% and AA Index 16.6 keep it clearly below the 2026 frontier.
- **Context window: 70/100.** 262K YaRN window with 70% AA-LCR; mid-tier — a generation behind 1M-native models.
- **Multimodal: 15/100.** Text-only (opper key info; no vision anywhere in coverage) — methodology floor.
- **Coding: 55/100.** AA Coding Index 42.8 and SciCode 45% are mid-pack; no SWE-bench/LiveCodeBench published numbers.
- **Cost efficiency: 92/100.** MIT open weights + $0.075/M-in hosting + free routes + 125 tok/s — effectively commodity-priced trillion-scale reasoning.
- **Overall Score: 57/100.** Mean of 72/74/70/15/55 = 57.2 → 57. Best fit: text-only enterprise agent pipelines (telecom-style sequential tool work, math/science assists) that want MIT weights and cheap hosting over frontier breadth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (opper.ai model page incl. Artificial Analysis independent benchmarks, OpenRouter listing, fitmyllm/theresanaiforthat launch notes, frontierbenchmarks spec page, modelgrep pricing); scores are normalized 1–100 interpretations, not official vendor scores. Vendor vs AA numbers are flagged where both exist.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
