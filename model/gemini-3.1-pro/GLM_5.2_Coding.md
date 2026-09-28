# Gemini 3.1 Pro — findings by GLM 5.2 Coding

- Source: Google DeepMind (`gemini-3.1-pro`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's flagship Gemini 3-series iteration (Feb 2026), at publication the most advanced Google model for complex multimodal reasoning, agentic work, and whole-codebase understanding; based on Gemini 3 Pro. Distinct entry from Gemini 3 Pro.
- **Provider / access:** Google AI Studio / Gemini API (`https://generativelanguage.googleapis.com/` — `gemini-3.1-pro`), Gemini App, Google Antigravity. `generateContent` API with function calling, code execution, and search grounding.
- **Release / knowledge:** Model card published 19 February 2026; knowledge cutoff not stated in card (Gemini 3 family reference).
- **IDs:** `google/gemini-3.1-pro`; no OpenCode Zen Free ID verified.
- **Context window:** 1,000,000 input tokens; 64,000 max output (verified: DeepMind model card, Feb 2026).
- **Modalities:** input text, image, video, audio; output text; reasoning/Thinking (High) + Deep Think mode; tool use: function calling, code execution, search grounding.
- **Pricing (as of 2026-09-17):** no verified per-token price found in the model card (February 2026 card pre-dates current API pricing tables); historically Gemini Pro-tier ≈ $2/$12 per 1M — treat as unverified placeholder and rely on the paid, not Free, designation.
- **Architecture:** proprietary Google DeepMind transformer, based on Gemini 3 Pro (architecture detail defers to Gemini 3 Pro model card PDF); params/MoE unpublished.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Terminus-2 harness; vs Opus 4.6 65.4%, Sonnet 4.6 59.1%)
- τ2-bench: **90.8%** (Retail) / **99.3%** (Telecom) (vs Sonnet 4.6 91.7%/97.9%, Opus 4.6 91.9%/99.3%)
- MCP Atlas: **69.2%** (vs Sonnet 4.6 61.3%, Opus 4.6 59.5%)
- BrowseComp: **85.9%** (search + Python + browse tools; vs Opus 4.6 84.0%)
- APEX-Agents (long-horizon professional tasks): **33.5%** (vs Opus 4.6 29.8%, GPT-5.2 23.0%)
- GDPval-AA Elo: **1317** (below Sonnet 4.6 1633 / Opus 4.6 1606 — knowledge-work gap)
- Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **94.3%** (vs Opus 4.6 91.3%, GPT-5.2 92.4%)
- HLE full set, no tools: **44.4%** (vs Opus 4.6 40.0%, Sonnet 4.6 33.2%)
- HLE Search+Code: **51.4%** (Opus 4.6 leads at 53.1%)
- ARC-AGI-2 (ARC Prize verified): **77.1%** (vs Opus 4.6 68.8%, Sonnet 4.6 58.3%)
- MMMLU multilingual: **92.6%**
- AA Intelligence Index: no verified public score found (not extractable from JS page)
- CritPt / LCR: no verified public score found

Coding:

- SWE-bench Verified (single attempt): **80.6%** (vs Opus 4.6 80.8%, GPT-5.2 80.0%)
- SWE-bench Pro (Public): **54.2%** (GPT-5.3-Codex leads at 56.8%)
- LiveCodeBench Pro: **2887 Elo** (vs GPT-5.2 2393)
- SciCode: **59%** (vs Opus 4.6 52%, Sonnet 4.6 47%)
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 (8-needle): **84.9%** @128k (average) (tied with Sonnet 4.6; Opus 4.6 84.0%)
- MRCR v2 @1M: **26.3%** (pointwise; Sonnet/Opus 4.6 not supported at 1M)
1M window verified; long-context retrieval drops at full window — MRCR @1M 26.3% caps below the 128k figure.

Multimodal (input-side):

- MMMU-Pro (no tools): **80.5%** (Gemini 3 Pro slightly higher at 81.0%)
- MMMLU: **92.6%**
- Video/audio input supported per card; no LVBench/CharXiv values published for this checkpoint — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 68.5%, τ2-bench 90.8–99.3%, MCP Atlas 69.2% (best-in-card), BrowseComp 85.9% — strong across harnesses; capped by GDPval-AA 1317 trailing the Claude pair.
- **Reasoning: 92/100.** GPQA Diamond 94.3%, HLE 44.4%/51.4%, ARC-AGI-2 77.1% (best-in-card) — elite abstract reasoning; capped only by missing AA Index/long-tail evals.
- **Context window: 92/100.** 1M input with published MRCR v2 numbers (84.9% @128k) — verified retrieval evidence; capped by the sharp @1M drop (26.3% pointwise).
- **Multimodal: 90/100.** Native text/image/video/audio input; MMMU-Pro 80.5%, MMMLU 92.6%; capped by text-only output and missing per-modality (LVBench/CharXiv) numbers for this checkpoint.
- **Coding: 90/100.** SWE-bench Verified 80.6%, SWE-Pro 54.2%, LiveCodeBench Pro 2887 Elo, SciCode 59% — balanced frontier coding; capped by Opus 4.6's 0.2pt SWE-V edge and GPT-5.3-Codex's SWE-Pro lead.
- **Cost efficiency: 70/100.** Pro-tier paid pricing (exact per-token price not verified in card; historically ≈$2/$12 per 1M for Pro tier) for frontier-level results; reasonable value but no free tier.
- **Overall Score: 90/100.** Mean of five quality dims (88+92+92+90+90)/5 = 90.4 → 90. Best-fit: complex multimodal reasoning and agent workflows needing 1M context with verified long-context retrieval.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (Google DeepMind Gemini 3.1 Pro model card, Feb 2026); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.