# Claude Sonnet 3.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-3-5-sonnet`, legacy generation)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Claude 3.5 Sonnet)
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation — a balanced text/image reasoning and coding model that set the standard for its era. Now a legacy model, several generations behind the current Claude lineup (Sonnet 4.6/5/5.5, Opus 4.5–5.5, Fable 5.1); no longer listed in Anthropic's current model overview.
- **Provider / access:** Anthropic Claude API (Messages API) `claude-3-5-sonnet`; also historically on Amazon Bedrock and Google Cloud Vertex AI. Not on OpenCode Zen.
- **Release / knowledge:** Released 2024-06-20 (original 3.5 Sonnet; updated 3.5 Sonnet v2 in October 2024); training cutoff ~April 2024 (early 2025 for v2).
- **IDs:** `anthropic/claude-3-5-sonnet` (state explicitly: no Free ID exists on Zen).
- **Context window:** 200K tokens total (BenchLM concurs); 64K max output (verified via BenchLM model details table — consistent with Anthropic's historical published spec).
- **Modalities:** text + image input; text output; reasoning: no dedicated extended-thinking mode (non-reasoning per BenchLM); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-11):** $3 / 1M input, $15 / 1M output (Anthropic historical published pricing; no free tier).
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (canonical slug `claude-3-5-sonnet`) reproduces every existing row identically (SWE-V 49%, GPQA 59.4%, FrontierMath 2.069%/0.000%) with the overall recomposed from 30.75/#178 to **28.27, #194 of 889** — no new rows; scores are carried, not moved.

Agent / tool use:

- Terminal-Bench / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (tool use supported but no verified public agentic-harness numbers for this ID)

Reasoning / knowledge:

- GPQA: **59.4%** (source: Anthropic announcement via benchlm.ai — corroborated)
- FrontierMath v2 (Tiers 1–3): **2.069%**; Tier 4: **0.000%** (Epoch AI — corroborated)
- HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **28.27, #194 of 889** (recomposed; coverage still only 4 of 625, conservative)

Coding:

- SWE-bench Verified: **49%** (source: Anthropic 3.5-models announcement via benchlm.ai — corroborated)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No long-context retrieval reported (200K window stated; no MRCR/RULER measurement found).

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: full row-by-row corroboration, no new rows.

- **Tool use: 45/100.** Tool calls supported, but zero verified public agentic-harness numbers (TB/Tau/GDPval all missing) for this ID; legacy-generation tool reliability predates the current agentic era — provisional mid-low estimate with the missing-benchmark penalty noted.
- **Reasoning: 55/100.** GPQA 59.4% sits just below the methodology mid band (GPQA 60–80% → 55–65); FrontierMath v2 2.07% negligible; BenchLM overall recomposed to 28.27 (still 4/625 coverage). Capped by the pre-reasoning-mode generation and sparse coverage.
- **Context window: 70/100.** 200K verified window → 200K tier (≈70 per methodology); no measured retrieval at length reported.
- **Multimodal: 65/100.** Text + image input, text-only output (historical spec) → +image-in band (60–70); no video/PDF/audio input verified.
- **Coding: 55/100.** SWE-bench Verified 49% → mid band; strong for 2024 but far below current frontier (DeepSWE 74%+ → 90+). Capped by legacy-era coding capability and missing LiveCodeBench/SciCode numbers.
- **Cost efficiency: 60/100.** $3/$15 per 1M — matches the methodology anchor (~$3/$15 ≈ 60); poor value versus current models with similar or better capability at lower prices. Excluded from Overall.
- **Overall Score: 58.0/100.** (45 + 55 + 70 + 65 + 55) / 5 = 290/5 = 58.0 — unchanged. Best-fit recommendation: a legacy workhorse — no reason to choose it for new work when Claude Sonnet 4.6/5 and cheaper modern alternatives dominate every dimension.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (verification pass: the freshly fetched benchlm.ai claude-3-5-sonnet page corroborates all rows identically with the overall recomposed to 28.27; the prior 2026-10-01 pass remains the evidence base); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
