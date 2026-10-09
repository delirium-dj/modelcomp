# Ling-2.6-flash — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionai/ling-2.6-flash`, released 2026-04-28)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash (the instant-model predecessor of Ling-3.0-flash)
- **Short description:** inclusionAI's April-2026 flash model — a 104B-total / **7.4B-active** fine-grained MoE (32 layers, 256 routed experts with 8 active + 1 shared) retrofitted from Ling-2.0 with a hybrid linear-attention design (Lightning Attention + MLA at 7:1, partial RoPE) and ~9.6T tokens of migration/continued/mid-training with context staged 4K→32K→256K. Its design goal was **token efficiency**: across the full Artificial Analysis evaluation suite it uses only 15M tokens (vs 86–110M for the 397B/1T flagships) while staying competitive, and it claims up to ~4× prefill/decode speedups over similar-size SOTA models — ~340 tok/s on 4× H20, INT4 fits a single RTX 4090. Vendor numbers put it SOTA-for-size-class on BFCL-V4 and TAU2-bench. Independent AA measurements are much colder (Intelligence Index 10–14), and the model is now superseded twice over (Ling-3.0-flash, Ling-3.1-flash).
- **Provider / access:** Open weights (MIT) on Hugging Face / ModelScope — BF16, FP8, INT4; OpenRouter (`inclusionai/ling-2.6-flash` and `:free`); Ant Ling platform.
- **Release:** 2026-04-28 (official open-source announcement June 2026).
- **Context window:** 262,144 tokens.
- **Modalities:** Text in → text out (instant/instruct, non-reasoning); tool calling.
- **Pricing (as of 2026-10-09):** $0.01–$0.10/M input, $0.03–$0.22/M output (trackers); free routes on OpenRouter; MIT weights free.
- **Architecture:** MoE 104B/7.4B, hybrid linear attention (Lightning + MLA 7:1), 9.6T training tokens.

### Raw benchmarks found

Vendor (model card; Clore.ai transcription):

- BFCL-V4 and TAU2-bench: SOTA for its size class (values not transcribed)
- SWE-bench Verified: **~61.2%**; MathArena AIME 2026: **73.85**; HMMT Feb 2026: 49.29

Artificial Analysis (independent; via benchmarklist/AI Reference):

- Intelligence Index: **10** (AA page, non-reasoning, 10k workload) / **14.05** (#221/427, composite incl. GDPval 544.7 Elo)
- GPQA Diamond: **59.3%**; HLE: **6.3%**; AA-LCR: **31.3%**
- Terminal-Bench 2.1: **24.3%**; TB Hard: 21.2%; SciCode: 27.1%; Coding Index: 25.26
- TAU2-Bench Telecom: **86.0%**; τ³-Banking: **2.9%**; GDPval-AA: **547 Elo**; ClawProBench: 27.04 (48th of 48); Agentic Index: 2.25
- ObviousBench answer pass³: 57.6%; AA Openness Index: 38.89

### Normalized scores (1–100)

- **Tool use: 45/100.** The vendor's BFCL-V4/TAU2-bench size-class SOTA claims and AA's τ²-Telecom 86.0% are real mid-band results, but τ³-Banking 2.9%, GDPval Elo 547, ClawProBench 27.0 and Agentic Index 2.25 show tool use collapses outside telecom/retail.
- **Reasoning: 45/100.** GPQA 59.3%, HLE 6.3%, AA Intelligence Index 10–14 — low-mid; the one strong vendor number is AIME 73.85 (73.85) and it is not independently reproduced.
- **Context window: 66/100.** 262K is the 200K–500K band (65–84) trained via 4K→32K→256K, but AA-LCR 31.3% is weak retrieval.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 45/100.** SWE-V ~61.2% (vendor) is the high point; Coding Index 25.26, SciCode 27.1% and TB 2.1 24.3% place it low-mid.
- **Cost efficiency: 97/100.** $0.01–$0.10 / $0.03–$0.22 per million tokens with MIT weights, INT4 on a single RTX 4090 and a 15M-token evaluation footprint — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier with genuinely best-in-class token efficiency.
- **Overall Score: 43/100.** Best-fit recommendation: the token-efficiency flash tier — function calling and fast execution at near-zero cost; superseded by Ling-3.0-flash and Ling-3.1-flash on every axis and best kept as a cheap router endpoint.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (inclusionAI Hugging Face model card and base card, Artificial Analysis, benchmarklist.com AA data, Clore.ai and LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_2_7.md`, using the same headings.
