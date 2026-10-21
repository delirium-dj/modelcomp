# Ring 2.6 1T — findings by MiniMax M3.1 Flash

- Source: inclusionAI (Ring-2.6-1T), `inclusionAI/Ring-2.6-1T`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6 1T
- **Short description:** InclusionAI's May 2026 open-weight (MIT) trillion-parameter reasoning MoE — 1T total / 63B active, 128K native context (256K with YaRN), adjustable reasoning effort (high/xhigh), GPQA Diamond 88.3% and SWE-bench Verified 74.0% — a rare open "thinking" model at 1T scale.
- **Provider / access:** Hugging Face `inclusionAI/Ring-2.6-1T` (MIT; FP8-dynamic compressed-tensors, 175 shards), OpenRouter `inclusionai/ring-2.6-1t` (**no live endpoints** — `endpoints: []`), requesty and Zenmux at **$0.30/M in, $2.50/M out** (cache $0.06), plus a now-deprecated free slot `opencode/ring-2.6-1t-free`. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-05-08** (AA; models.dev requesty + opencode) vs 2026-05-07 (Zenmux) vs HF repo created 2026-05-14 (eval yamls dated 2026-05-15) — conflicting dates, all cited. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ring-2.6-1T` (HF), `inclusionai/ring-2.6-1t` (OpenRouter).
- **Context window:** **128K native** (`max_position_embeddings` 131,072) extending to **256K with YaRN**; AA and models.dev both list 262,144.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.30/M in, $2.50/M out** (requesty, Zenmux; cache read $0.06) — the same price AA attributes to InclusionAI's own API. Self-host $0 (MIT), but the weights need ~32 GPUs (vendor SGLang example: 4 nodes × 8).
- **Architecture:** `bailing_hybrid` MoE, **1T total / 63B active**, 80 layers, hidden 8192, 256 routed experts (top-8) + 1 shared, moe_intermediate 2048; reasoning effort **high** (default for agent workflows) or **xhigh** (math/research).

### Raw benchmarks found

> The model card's evaluation chart and the arXiv "Ling and Ring 2.6 Technical Report" (Table 6) — the two disagree on GPQA, and both are carried.

Reasoning / knowledge:

- GPQA Diamond: **88.27%** (card, xhigh, Pass@1) vs **85.89%** (report, Avg@16) / **76.10%** (report, high) — conflict flagged
- AIME 2026: **95.83%** (card) vs **95.78%** (report, xhigh) / **87.86%** (high) · HMMT-Feb26: **93.47%** · IMO-AnswerBench: **86.12%** (report)
- Artificial Analysis Intelligence Index: **17** (#69/121) · GPQA (AA): **85.66%** · HLE: **21.59%** (AA) · AA-LCR: **70.0%** (AA) · CritPt: **3.71%** (AA)
- Omniscience Accuracy / Hallucination Rate: **25.7% / 85.3%** (AA) · IFBench: **44.6%** (AA) · FrontierMath: no verified public score found (0 mentions in the report)
- ARC-AGI-2: **66.18%** (xhigh, Pass@2) · PinchBench: **87.60%** · GAIA-2 Search: **75.40%** (high) / **77.90%** (xhigh)

Agent / tool use:

- Tau2-bench: Telecom **95.32%** (card) / **96.71%** (report, high) / **94.96%** (xhigh) — conflict flagged; Retail **77.85%**, Airline **77.50%**, overall **83.44–84.26%**
- ClawEval (pass^3, 161 tasks): **63.82%** · GDPval-AA: **746.17** (AA) · Terminal-Bench: no verified public score found · MCP-Atlas / OSWorld / AutomationBench: no verified public score found (AutomationBench partial **0.7%**, AA)

Coding:

- SWE-bench Verified: **74.00%** (high) · SWE-bench Pro: **53.76%** (report, high) · LiveCodeBench-v6 (problems 2408–2505, Avg@4): **86.95%** (xhigh) / **76.71%** (high) · SciCode: **45.0%** (AA)
- DeepSWE / SWE-Atlas Codebase QnA: no verified public score found

Long context:

- No MRCR / RULER measurement published for Ring (the MRCR rows in the report belong to Ling 2.6 models, not Ring 2.6 1T).

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 83.4–84.3% overall (Telecom 95–97%) and ClawEval 63.8% are solid, but GDPval-AA 746 is low, Terminal-Bench was never published, and AutomationBench sits at 0.7%.
- **Reasoning: 74/100.** GPQA 76.1–88.3% depending on harness, AIME 95.8%, ARC-AGI-2 66.2%, HMMT 93.5% and IMO-AnswerBench 86.1% are strong, capped by HLE 21.6%, IFBench 44.6%, an AA Intelligence Index of 17 and an 85.3% hallucination rate.
- **Context window: 68/100.** 128K native (256K with YaRN) is the 100K–200K band at its top, with no published retrieval test.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 74/100.** SWE-bench Verified 74.0%, LiveCodeBench-v6 86.95% (xhigh) and SWE-bench Pro 53.8% are good mid-to-high band results, capped by SciCode 45.0% and the missing DeepSWE row.
- **Cost efficiency: 88/100.** $0.30/M in and $2.50/M out is a mid-frontier price band, and MIT weights are free to self-host — if you have the ~32 GPUs it takes.
- **Overall Score: 58/100.** Mean of the five quality dims = (58 + 74 + 68 + 15 + 74) / 5 = 57.8 → **58**. Best fit: open-weight "thinking" workloads — maths and research at xhigh effort — on hardware you already own.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (inclusionAI Hugging Face model card, config and eval yamls, arXiv Ling/Ring 2.6 technical report, Artificial Analysis, models.dev, OpenRouter API endpoints); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ring_2.7.md`, using the same headings.
