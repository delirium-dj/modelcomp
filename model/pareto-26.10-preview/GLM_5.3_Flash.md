# Pareto 26.10 Preview — findings by GLM 5.3 Flash

- Source: Unbiased AI (`pareto-26.10-preview`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's multimodal composite model for research, coding, and agentic workflows, positioned at near-frontier performance with an unusually low price. It replaced the previous Pareto model on OpenRouter with a roughly 3× price cut. This is a preview release; treat all published numbers as provisional.
- **Provider / access:** OpenRouter (`unbiased/pareto-26.10-preview`), also listed on NanoGPT, AI/ML API (`unbiased/pareto-26.10-preview`), Puter, and CloudPrice. Chat Completions-style API per OpenRouter listing.
- **Release / knowledge:** Released 2026-10-01 via OpenRouter (vendor announcement and directory listings); knowledge cutoff not published.
- **IDs:** `unbiased/pareto-26.10-preview` (state: no Free/OpenCode Zen ID found in any listing)
- **Context window:** 1,048,576 total tokens, up to 131,072 max output tokens (OpenRouter/NanoGPT/CloudPrice listings agree; BenchLM lists context "N/A" — no verified figure). One directory (ninja.si) conflictingly describes a 123B dense transformer with a 256K window — the 1M composite listing is the majority and vendor position; treat the 256K claim as an unresolved discrepancy. No independent retrieval benchmark verifies the full window.
- **Modalities:** text + image input, text output (OpenRouter listing). No audio/video/PDF input documented. Reasoning and tool calls: vendor positions it for agentic workflows; JSON mode not documented.
- **Pricing (as of 2026-10-11):** $0.80 per 1M input / $3.20 per 1M output (down from $2.50/$7.50 for the previous Pareto model). Task-level eval pricing is far cheaper still: ~$0.24 per DeepSWE task vs ~$13.50 per task for Claude Fable 5 at a comparable ~70% score. Paid API only; no free tier found.
- **Architecture:** composite ("multimodal composite") per the vendor; parameter count not officially published — one third-party directory claims 123B dense, unconfirmed. Proprietary weights.

### Raw benchmarks found

> Second-pass verification (2026-10-11): BenchLM's Pareto 26.10 Preview page (updated 2026-10-10) still lists exactly **three** rows — all republished from Unbiased's own preliminary results — and assigns **no public overall score (unranked)**, with context "N/A". No independent verification (AA, Vals, ARC Prize) has emerged in the ten days since release. All scores are carried, not moved.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (vendor-run, Unbiased preliminary results via benchlm.ai, ~$0.48/task)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (vendor-run, Unbiased preliminary results via benchlm.ai)
- HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: not independently indexed (BenchLM explicitly unranked)

Coding:

- DeepSWE v1.1: **69.9%** (vendor-run, ~$0.24/task)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found (the circulating 93.5 LiveCodeBench figure remains flagged as likely conflated/unverified and is not counted)

Long context:

- No long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported for the claimed 1,048,576-token window

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: BenchLM's continued unranked status with the identical three-row vendor evidence base provides no new measurement. The preview remains provisional by design.

- **Tool use: 72/100.** Terminal-Bench 4.0 at 50.8% is a solid mid-pack agentic result and the DeepSWE 69.9% agentic success rate corroborates working tool use; capped by vendor-run-only evidence and no third-party tool benchmarks (no Tau2/GDPval/Toolathon).
- **Reasoning: 86/100.** GPQA Diamond 92.4% is frontier-tier science reasoning; capped because it is a single vendor-run number with no independent index entry and no HLE/LCR/CritPt corroboration.
- **Context window: 85/100.** Claimed 1,048,576-token window with 131K output is top-tier spec territory; capped by zero public retrieval verification, BenchLM's "N/A" context listing and the conflicting 256K-directory claim.
- **Multimodal: 58/100.** Image input is confirmed on provider listings, but no vision benchmark (MMMU, ChartQA, etc.) was found anywhere, so the capability is credited, not measured.
- **Coding: 80/100.** DeepSWE v1.1 69.9% is a strong agentic coding result; capped by the absence of SWE-bench Verified and LiveCodeBench (the only circulating LCB number is unverified).
- **Cost efficiency: 90/100.** $0.80/$3.20 per 1M with near-frontier claimed performance and ~$0.24 per agentic task (~2% of Fable 5's per-task cost at a similar score) is exceptional value; kept from 100 because it is a paid-only preview whose long-term pricing stability is unknown.
- **Overall Score: 76.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (72 + 86 + 85 + 58 + 80) / 5 = 381/5 = 76.2 — unchanged. Best fit: high-context research and agentic coding work on a budget, pending independent verification of the vendor-run numbers.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 sources: benchlm.ai Pareto 26.10 Preview page updated 2026-10-10 citing Unbiased's preliminary results, the unbiased.ai vendor card, plus the prior 2026-10-05 pass on OpenRouter/NanoGPT/CloudPrice listings; confirmed unranked with 3 vendor rows and no independent verification; 2026-10-16 re-check: BenchLM still holds the identical 3 vendor rows, unranked — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
