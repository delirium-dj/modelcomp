# Mistral Medium 3.5 — findings by MiniMax M3.1 Flash

- Source: Mistral AI (Mistral Medium 3.5, 128B), `mistral-medium-3-5`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 (128B)
- **Short description:** Mistral's first flagship **merged** model — a dense 128B that folds instruction-following, reasoning and coding into one set of weights, with a from-scratch vision encoder, a 256k context and a τ³-Bench score of 91.4 aimed at remote agentic work (Mistral's Vibe coding agent). **Access note:** not on OpenCode Zen (Zen lists only `mistral-large-4`); it is served by Mistral's own API, OpenRouter, Vercel, Scaleway, NVIDIA and many gateways.
- **Provider / access:** Mistral API (`mistral-medium-3-5`), Hugging Face `mistralai/Mistral-Medium-3.5-128B`, OpenRouter `mistralai/mistral-medium-3-5`, Vercel `mistral/mistral-medium-3.5`, plus a published EAGLE draft model for vLLM/SGLang speedups.
- **Release / knowledge:** weights on Hugging Face **2026-03-31**; API GA **2026-04-28** (Mistral model card, version tag 26.04); flagship public-preview announcement **2026-05-22**. Knowledge cutoff not published.
- **IDs:** `mistral-medium-3-5` (Mistral API), `mistralai/Mistral-Medium-3.5-128B` (HF), `mistralai/mistral-medium-3-5` (OpenRouter).
- **Context window:** **256,000** tokens (262,144 in provider data — Mistral model card, OpenRouter, models.dev). Max output: 131,072–256,000 depending on host.
- **Modalities:** text and image input, text output; reasoning effort high/none (default high); tool calling supported.
- **Pricing (as of 2026-10-20):** **$1.50/M in, $7.50/M out** (Mistral launch post and model card); cached input **$0.15/M** (AA); Batch $0.75/$3.75.
- **Architecture:** dense 128B (`Mistral3ForConditionalGeneration`) with a from-scratch vision encoder; **Modified MIT License** (commercial use with exceptions for very large companies). It replaces Mistral Medium 3.1 and Magistral in Le Chat, and Devstral 2 in Vibe.

### Raw benchmarks found

> Mistral publishes its own SWE-bench and τ³-Bench figures; Vals AI and Artificial Analysis disagree sharply on GPQA and Terminal-Bench, so both are listed.

Agent / tool use:

- Tau3-Bench (Tool-Agent-User): **91.4** (Mistral vendor) — note this is **τ³**, not τ²
- Tau2-bench: **94.15%** (AA) · Tau3-Banking: **15.1%** (AA)
- Bench Tool-Agent-User Evaluation: **91.4%** (BenchLM ledger)
- Terminal-Bench 2.1: **50.6%** (AA) vs **38.95%** (Vals AI, 75-task subset) — conflict flagged
- GDPval-AA: **760.86** (AA) · GDPval all-pass: **2.8%** (AA) · AutomationBench partial: **6.3%** (AA) · EnterpriseOpsGym: **33.7%** (AA)
- Toolathon / MCP-Atlas / Claw-Eval / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **74.85%** (AA) vs **34.85%** (Vals AI, 138-question subset with `reasoning_effort: high`) — conflict flagged, harness-dependent; do not average
- HLE: **13.76%** (AA) · AA-LCR: **69.33%** (AA) · MLCR: **1.7%** (AA) · CritPt: **0%** (AA)
- Artificial Analysis Intelligence Index: **14.19** (AA) · MMLU-Pro: **75.33%** (Vals AI) · output speed **155.4 tok/s**, TTFT 2.32s
- Omniscience Accuracy / Hallucination Rate: **24.7% / 81.6%** (AA)

Coding:

- SWE-bench Verified: **77.6%** (Mistral vendor) vs **66.4%** (Vals AI, 88-task subset) — conflict flagged
- SciCode: **40.16%** (AA) · LiveCodeBench: no verified public score found · SWE-bench Pro / DeepSWE / Vibe Code Bench: no verified public score found
- Vals Index: **52.77%**, #32 of 46 (#10 of 18 among open-weight models)

Long context:

- No MRCR / RULER retrieval measurement published for Mistral Medium 3.5.

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-bench 94.2% (AA) and τ³-Bench 91.4 (vendor) show excellent tool orchestration, but GDPval-AA 761, AutomationBench 6.3% and Terminal-Bench 2.1 39–51% are weak-to-mid, so the score stays mid.
- **Reasoning: 58/100.** MMLU-Pro 75.3%, AA-LCR 69.3% and the AA GPQA 74.9% are mid-band, capped by HLE 13.8%, CritPt 0%, MLCR 1.7%, an AA Intelligence Index of 14.2 and the unresolved GPQA disagreement (34.9% on Vals' harness).
- **Context window: 70/100.** 256,000 tokens is the 200K–500K tier; no long-context retrieval test is published, so the tier midpoint applies.
- **Multimodal: 65/100.** Text and image input with text output (MMMU-Pro 64.9% on AA) — the "+image in" band, no audio or video.
- **Coding: 66/100.** SWE-bench Verified 66–78% and SciCode 40.2% are mid-band, but no LiveCodeBench, DeepSWE or SWE-bench Pro figure exists, which caps the score.
- **Cost efficiency: 72/100.** $1.50/M in and $7.50/M out is an expensive open-weight route (near the Claude-band output price), partly offset by a $0.15/M cache read and the free self-host option under Modified MIT.
- **Overall Score: 65/100.** Mean of the five quality dims = (65 + 58 + 70 + 65 + 66) / 5 = 64.8 → **65**. Best fit: telecom/instruction-following agents and Mistral-stack deployments that need an open-weight 128B — but check the harness you use, because the published GPQA and Terminal-Bench numbers disagree sharply.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Mistral model card, launch post and pricing, Hugging Face model card, Artificial Analysis, BenchLM + Vals AI, OpenRouter API, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Large_4.md`, using the same headings.
