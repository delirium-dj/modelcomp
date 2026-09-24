# Claude Sonnet 4.5 — findings by GLM 5.3

- Source: Anthropic (`claude-sonnet-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's July-2025 Sonnet workhorse (non-thinking base, 200K context), three generations behind Sonnet 5; still served on Zen with tiered pricing. Top use case: legacy Claude-line coding on existing pipelines.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API and cloud partners.
- **Release / knowledge:** 2025-07 (Anthropic Sonnet 4.5 announcement; date not re-verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-sonnet-4.5` (Zen ID `claude-sonnet-4-5`; no Free ID — paid only); a Thinking sibling exists.
- **Context window:** 200K tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; base config non-reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $3.00 in / $15.00 out per 1M ≤200K tokens ($6.00/$22.50 above 200K; cached read $0.30).
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

> BenchLM coverage for this ID is thin (12 rows); scores are correspondingly low-confidence.

Agent / tool use:

- Terminal-Bench 2.0: **50%** (BenchLM `claude-sonnet-4-5`)
- OSWorld-Verified: **61.4%** (BenchLM); Gert Labs **48.51%**; JobBench **27.7%**; VITA-Bench **17.0%** (BenchLM)
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **83.4%** (BenchLM — below the 90% frontier bar)
- ARC-AGI-2: **13.6%** (BenchLM)
- AIME 2025: **87%**; FrontierMath v2 Tier 4 **4.2%** (BenchLM)
- HLE / AA-LCR / CritPt / AA Index: **no verified public score found** for this ID

Coding:

- SWE-bench Verified: **77.2%** (BenchLM)
- LiveCodeBench / SciCode / DeepSWE / SWE-bench Pro / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 200K window (BenchLM); no retrieval number published.

Multimodal (grounding):

- Design Arena Website **1201** (BenchLM); image input per Claude platform.

### Normalized scores (1–100)

- **Tool use: 58/100.** TB2.0 50% and OSWorld-Verified 61.4% sit in the methodology's mid band; the core agent harnesses (TB2.1, Tau, GDPval) are unpublished for this ID.
- **Reasoning: 62/100.** GPQA 83.4% is under the frontier bar and ARC-AGI-2 13.6% is weak; AIME 87% is the only strong signal. Thin coverage.
- **Context window: 70/100.** 200K total — the methodology's 200K reference point.
- **Multimodal: 65/100.** Text+image input per Claude platform; no vision benchmark numbers published for this ID.
- **Coding: 70/100.** SWE-bench V 77.2% is respectable for its era; every other coding harness unpublished.
- **Cost efficiency: 60/100.** $3/$15 per 1M ≤200K matches the ≈60 anchor, with a 1.5× output surcharge above 200K — poor value vs Sonnet 5 at $2/$10.
- **Overall Score: 65.0/100.** (58 + 62 + 70 + 65 + 70) / 5 = 65.0. Best-fit: none vs current stock — Sonnet 4.6 and Sonnet 5 strictly dominate at equal or lower price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
