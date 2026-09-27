# Claude Sonnet 4 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's mid-size hybrid-reasoning model from the Claude 4 generation (May 22, 2025), a significant upgrade to Sonnet 3.7 with state-of-the-art-at-release coding and enhanced steerability.
- **Provider / access:** Anthropic API (`claude-sonnet-4-20250514`), Amazon Bedrock, Google Cloud Vertex AI; also available to free users on Claude apps. Messages API.
- **Release / knowledge:** 2025-05-22 release; knowledge cutoff not stated in fetched sources (widely reported ~March 2025).
- **IDs:** `anthropic/claude-sonnet-4-20250514` (no Free ID exists on Zen)
- **Context window:** 200K total tokens (standard Claude 4 generation window; widely documented; not restated numerically in the fetched announcement).
- **Modalities:** text + image input; text output; reasoning yes (hybrid: near-instant responses and extended thinking up to 64K tokens, incl. extended thinking with tool use in beta); tool calls yes (parallel tool execution, code execution tool, MCP connector, Files API); JSON mode supported.
- **Pricing (as of 2026-09-27):** $3.00 in / $15.00 out per 1M tokens (Anthropic announcement); free tier on Claude apps (consumer data-usage caveats apply).
- **Architecture:** proprietary; hybrid reasoning model (one weight set, two modes); ASL-3 protections; 65% less shortcut/loophole behavior than Sonnet 3.7 on susceptible agentic tasks.

### Raw benchmarks found

> Numbers below come from Anthropic's May 22, 2025 "Introducing Claude 4" announcement (fetched 2026-09-27).

Agent / tool use:

- SWE-bench Verified: **72.7%** (no extended thinking, simple bash+edit scaffold, out of full 500) — state-of-the-art at release; **80.2%** with parallel test-time compute (Anthropic announcement)
- TAU-bench (Airline + Retail, extended thinking with tool use, prompt addendum): no numeric value in fetched sources (chart image-only)
- Terminal-bench: Opus 4 leads at 43.2%; Sonnet 4 value no verified public score found
- iGent: reduced codebase navigation errors from 20% to near zero on autonomous multi-feature app development (customer report in announcement)

Reasoning / knowledge:

- GPQA Diamond: **70.0%** without extended thinking; higher with thinking (exact value image-only) (Anthropic announcement)
- AIME: **33.1%** without extended thinking; higher with thinking (Anthropic announcement)
- MMMLU (multilingual MMLU): **85.4%** without extended thinking (Anthropic announcement)
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found in fetched sources

Coding:

- SWE-bench Verified: **72.7%** / **80.2%** (see above)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Multimodal:

- MMMU (multimodal reasoning): **72.6%** without extended thinking (Anthropic announcement)

Long context:

- "no long-context retrieval reported" — no MRCR/RULER value in fetched sources; 200K window spec.

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Verified 72.7%, parallel tool execution, memory improvements, near-zero navigation errors per iGent; capped by unverified TAU-bench numbers and the older generation.
- **Reasoning: 75/100.** GPQA 70.0% without thinking (higher with), MMMLU 85.4%, AIME 33.1% without thinking; capped by weak no-tools math and unverified HLE.
- **Context window: 68/100.** 200K tokens, standard frontier tier of the era; capped versus 1M+-token peers and no measured retrieval scores.
- **Multimodal: 55/100.** Text + image input (MMMU 72.6%), text out; no audio/video input or image generation.
- **Coding: 80/100.** SWE-bench Verified 72.7% (SOTA at release) and 80.2% high-compute; capped by 2026 standards where the benchmark is saturated (Vals AI archived it with 7 models ≥95%).
- **Cost efficiency: 55/100.** $3/$15 per 1M tokens — mid-tier frontier pricing of 2025; reasonable per SWE-bench point but superseded by cheaper 2026 models.
- **Overall Score: 71/100.** Mean of the five quality dims (78+75+68+55+80)/5 = 71.2 → 71. Best fit: dependable everyday coding and agentic work at mid-2025 frontier quality.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-27
- Method: public internet research (Anthropic "Introducing Claude 4" announcement, fetched 2026-09-27); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
