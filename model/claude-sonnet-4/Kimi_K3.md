# Claude Sonnet 4 — findings by Kimi K3

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-27; legacy status hardens: not on Zen, not indexed by Artificial Analysis, superseded by Sonnet 4.5 → 5 line; benchmark set unchanged, scores hold)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Claude 4 model (launched alongside Opus 4), matching Opus on SWE-bench Verified at launch at a fraction of the price; first Claude generation with extended thinking + tool use and parallel tool calls. **Now a legacy tier — superseded by Sonnet 4.5 → 5; as of 2026-10-13 it is absent from the Zen listing and returns 404 at Artificial Analysis (not indexed/retired from tracking).**
- **Provider / access:** Anthropic Claude API (Messages API), Amazon Bedrock, Google Cloud Vertex AI (first-pass access claims; current availability on those clouds not re-verified per-endpoint); free tier on claude.ai historically for this class.
- **Release / knowledge:** Released 2025-05-22 (Anthropic "Introducing Claude 4"). Knowledge cutoff Mar 2025.
- **IDs:** `anthropic/claude-sonnet-4` (snapshot `claude-sonnet-4-20250514`). Not on Zen (2026-10-13 listing — only Sonnet 4.5/4.6/5/5.5 remain).
- **Context window:** 200K tokens input / 64K max output (BenchLM + Anthropic docs, first pass).
- **Modalities:** text + image in; text out; extended thinking yes; parallel tool calls; JSON via tool use.
- **Pricing (historical):** $3.00/$15.00 per 1M in/out.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found (first-pass snapshot — frozen legacy set)

Agent / tool use:

- Tau2-Bench: **52.3%** (BenchLM, AA harness); Tau-bench (original) reported at launch with prompt addendum + 100-step cap
- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found
- Launch note: 65% less shortcut/loophole behavior than Sonnet 3.7 (Anthropic)

Reasoning / knowledge:

- GPQA Diamond: **70.0%** no-thinking (Anthropic); AA-GPQA 68.3% (BenchLM); MMMU: 72.6%; MMMLU: 85.4%; AIME: 33.1% (launch appendix)
- HLE: AA-HLE 4.3%; AA-LCR: 44.0%; CritPt: 1.1%; AA Index: 16.6; BenchLM overall 36.08/#129
- Omniscience Accuracy / Hallucination: 22.7% / 41.0%

Coding:

- SWE-bench Verified: **72.7%** (simple scaffold; high-compute 80.2%) (Anthropic launch)
- LiveCodeBench / SciCode / Vibe / DeepSWE: no verified public score found

Long context: AA-LCR 44.0% at 200K class; no MRCR/RULER.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged — legacy frozen evidence.**

- **Tool use: 65/100.** Tau2 52.3% with first-gen extended-thinking+tool-use is mid-band; capped by missing TB/Tau3/GDPval rows.
- **Reasoning: 70/100.** GPQA 70% no-thinking and MMMU 72.6% strong-mid; capped by AIME 33.1% and AA-HLE 4.3%.
- **Context window: 70/100.** 200K band base; AA-LCR 44.0% middling.
- **Multimodal: 65/100.** Image in + text out; MMMU 72.6% solid; no audio/video or non-text output.
- **Coding: 80/100.** SWE-bench Verified 72.7% was SOTA at launch (80.2% high-compute); capped ~1.5 years later by 2026 frontier and missing LCB/SciCode rows.
- **Cost efficiency: 58/100.** $3/$15 ≈ 60 anchor; legacy paid tier, no free ID.
- **Overall Score: 70/100.** (65+70+70+65+80)/5 = 70.0 → 70 (unchanged). Best fit: pinned legacy compatibility for mid-2025 agent/coding deployments; new work should default to the current Sonnet line.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass audit (OpenCode Zen `/zen/v1/models` 2026-10-13 — `claude-sonnet-4` absent, 4.5/4.6/5/5.5 present; artificialanalysis.ai `claude-sonnet-4` — 404). First-pass Anthropic-launch + BenchLM rows retained unchanged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
