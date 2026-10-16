# GPT-5.1 Codex — findings by Laguna S 2.1

- Source: OpenAI (gpt-5.1-codex)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex (the dataset slug `gpt-5.1-codex` resolves to OpenAI's regular GPT-5.1-Codex coding SKU, API id `gpt-5.1-codex`, run at its default "high" reasoning-effort setting — tracked by Artificial Analysis as "GPT-5.1 Codex (High)". The stronger GPT-5.1-Codex-Max (xhigh effort) is a separate SKU, not this folder.)
- **Short description:** OpenAI's coding-optimized GPT-5.1 variant, available in the Responses API and Codex surfaces. It was OpenAI's default coding model until being succeeded by GPT-5.2 Codex (now deprecated per Artificial Analysis), with elevated agentic-coding gains over the base GPT-5.1 line.
- **Provider / access:** OpenAI API (Responses API), OpenAI platform id `gpt-5.1-codex`; docs at `platform.openai.com/docs/models/gpt-5-1-codex`. No free/Chat-Completions-compatibility note found.
- **Release / knowledge:** Released November 2025 (GA Nov 19, 2025). Knowledge cutoff September 30, 2024 (per llm-stats and Artificial Analysis).
- **IDs:** `openai/gpt-5.1-codex` (API id `gpt-5.1-codex`); note Anthropic-style: GPT models use the hyphenated vendor display style "GPT-5.1 Codex".
- **Context window:** 400,000 tokens input / 128,000 tokens output (llm-stats, Artificial Analysis). No long-context premium noted.
- **Modalities:** text + image input, text output. Tool use supported (Responses API). No audio/video input; text-only output.
- **Pricing (as of 2026-10-16):** $1.25 / 1M input tokens and $10.00 / 1M output tokens via OpenAI (llm-stats, Artificial Analysis). Cheap input, expensive output; no $0/free tier.
- **Architecture:** proprietary; parameter count not disclosed by OpenAI.

### Raw benchmarks found

> Sources: OpenAI launch post "Building more with GPT-5.1-Codex-Max" (Nov 2025), Appendix evaluation table for GPT-5.1-Codex (high effort); llm-stats model page; Artificial Analysis model page (`gpt-5-1-codex`). Note: headline coding/knowledge figures are for the regular GPT-5.1-Codex at high reasoning effort (the "(high)" row), NOT the stronger Max/xhigh SKU; the model is deprecated in favor of GPT-5.2 Codex, so independent aggregator coverage is thin and the AA Intelligence Index is an estimate.

**Agent / tool use:**

- Terminal-Bench 2.0: **52.8%** (OpenAI launch-post Appendix, GPT-5.1-Codex (high)) — [the launch post tables TB2.0, not TB2.1]
- SWE-Lancer IC SWE: **66.3%** (OpenAI launch-post Appendix, GPT-5.1-Codex (high))
- BrowseComp: no verified public score found
- τ²-bench / Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- OSWorld: no verified public score found
- MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- ApprenticeBench / CyberGym: no verified public score found

**Reasoning / knowledge:**

- Artificial Analysis Intelligence Index: **24** (Artificial Analysis, estimated; #132/216 — below average, median 27) — [conflict: llm-stats marketing copy calls it "higher reasoning capabilities"; AA's measured composite is below-average for the price tier]
- GPQA Diamond: no verified public score found for this SKU
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- MMLU-Pro: no verified public score found for this SKU
- AA-Omniscience Accuracy / Hallucination Rate: no verified public per-model number (part of the AI Intelligence Index estimate)

**Coding:**

- SWE-bench Verified: **73.7%** (OpenAI launch-post Appendix, GPT-5.1-Codex (high))
- SWE-bench Pro: no verified public score found for this SKU
- LiveCodeBench: no verified public score found for this SKU
- SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found
- React Native Evals: no verified public score found
- FrontierCode / Coding Index: no verified public score found

**Long context:**

- 400,000-token context window confirmed (llm-stats, Artificial Analysis); no verified public MRCR / RULER / GraphWalks retrieval-accuracy figure published for this model.

### Normalized scores (1–100)

> Caveat: this SKU is deprecated (succeeded by GPT-5.2 Codex) and carries no independently-verified GPQA/HLE/LiveCodeBench; the only coding numbers are OpenAI's self-reported "(high)" Appendix scores and the AA composite. Scores are conservative accordingly.

- **Tool use: 62/100.** TB2.0 52.8% (mid band) and SWE-Lancer 66.3%; no Tau3/GDPval/OSWorld/MCP-Atlas published, so agentic frontier signals are partial. Capped by missing hard-agentic evals.
- **Reasoning: 60/100.** Driven by the AA Intelligence Index 24 (below-average composite, #132/216) placing it in the methodology's mid band; no verified GPQA/HLE/LCR/CritPt for this SKU. The low composite conflicts with marketing ("higher reasoning") — treated as secondary.
- **Context window: 79/100.** 400,000-token window falls in the 200K–500K band (65–84); 128K output above the 64K caveat.
- **Multimodal: 63/100.** Text + image input only (no video/audio, text-only output) → the +image band (60–70); modest for a coding SKU.
- **Coding: 80/100.** SWE-bench Verified 73.7% meets the DeepSWE ~74% frontier reference, SWE-Lancer 66.3%; capped by TB2.0 52.8% (well below the 85% frontier ref) and no LiveCodeBench/SciCode/DeepSWE published.
- **Cost efficiency: 76/100.** $1.25 / $10.00 per 1M tokens — cheap input but expensive output for a coding model that emits many output tokens; no free tier.
- **Overall Score: 69/100.** Half-up mean of (62 + 60 + 79 + 63 + 80) / 5 = 68.8 → 69. A deprecated, coding-specialized GPT-5.1 SKU: strong on SWE-bench (73.7%) but middling general intelligence (AA Index 24), 400K context, and a costly output token price.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-16
- Method: public internet research (OpenAI launch post + Appendix eval table, llm-stats, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one (e.g. `Glm_5.md`) using the same headings.
