# Claude Sonnet 4 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-10-09 (UTC)
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
- **Pricing (as of 2026-10-09):** $3.00 in / $15.00 out per 1M tokens (Anthropic announcement); free tier on Claude apps (consumer data-usage caveats apply).
- **Architecture:** proprietary; hybrid reasoning model (one weight set, two modes); ASL-3 protections; 65% less shortcut/loophole behavior than Sonnet 3.7 on susceptible agentic tasks.

### Raw benchmarks found

> Anthropic's May 22, 2025 "Introducing Claude 4" announcement + AA rows via benchlm.ai (updated 2026-10-09). Previously-missing rows now measured.

Agent / tool use:

- SWE-bench Verified: **72.7%** (no extended thinking, simple bash+edit scaffold — state-of-the-art at release; **80.2%** with parallel test-time compute; corroborated via benchlm.ai)
- Tau2-bench: **52.3%** (AA via benchlm.ai — fills the previously-missing TAU numeric row)
- Gert Labs: **39.66%**; JobBench: **18.4%** (benchlm.ai — new, weak)
- Terminal-bench: Opus 4 leads at 43.2%; Sonnet 4 value no verified public score found
- iGent: reduced codebase navigation errors from 20% to near zero on autonomous multi-feature app development (customer report in announcement)
- TAU-bench (Airline + Retail, extended thinking): chart image-only, no numeric value in fetched sources

Reasoning / knowledge:

- GPQA Diamond: **68.3%** (AA-GPQA Diamond — corroborates the 70.0% without-thinking claim)
- HLE: **4.3%** (AA-HLE — fills the previously-missing row; weak)
- AA-LCR: **44.0%** (AA long-context-reasoning board — fills the previously-missing LCR); CritPt: **1.1%**
- Artificial Analysis Intelligence Index: **16.6** (AA — fills the previously-missing index value)
- AA-Omniscience: Index -9.0, accuracy **22.7%**, hallucination rate **41.0%** (benchlm.ai — moderate)
- AA-IFBench: **45.4%** (AA)
- AIME: **33.1%** without extended thinking (Anthropic announcement); MMMLU: **85.4%** without extended thinking
- LMArena Hard Prompts / Text: no verified Elo found in fetched sources

Coding:

- SWE-bench Verified: **72.7%** / **80.2%** (see above — corroborated)
- LiveCodeBench / SciCode / AA-SciCode / SWE-bench Pro: no verified public score found

Long context:

- AA-LCR **44.0%** measured (fills the previously-missing row); no MRCR/RULER value in fetched sources; 200K window spec.

Multimodal / vision:

- MMMU (multimodal reasoning): **72.6%** without extended thinking (Anthropic announcement); AA-MMMU-Pro: **62.4%** (AA — corroborates); Design Arena Website: **1152**

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench Verified 72.7%, parallel tool execution and near-zero navigation errors per iGent; the filled Tau2 52.3% (AA) is a mid-band anchor; capped by the older generation and weak JobBench 18.4%.
- **Reasoning: 62/100.** GPQA 68.3–70.0%, the filled HLE 4.3%, AA Index 16.6 and AA-LCR 44.0% (all now measured) place it mid-band; AIME 33.1% without thinking and a 41.0% hallucination rate cap it down from the old 75.
- **Context window: 68/100.** 200K tokens, standard frontier tier of the era; capped versus 1M+-token peers and no measured retrieval scores.
- **Multimodal: 55/100.** Text + image input (MMMU 72.6%, AA-MMMU-Pro 62.4%), text out; no audio/video input or image generation.
- **Coding: 80/100.** SWE-bench Verified 72.7% (SOTA at release) and 80.2% high-compute; capped by 2026 standards where the benchmark is saturated (Vals AI archived it with 7 models ≥95%).
- **Cost efficiency: 55/100.** $3/$15 per 1M tokens — mid-tier frontier pricing of 2025; reasonable per SWE-bench point but superseded by cheaper 2026 models.
- **Overall Score: 67/100.** Mean of the five quality dims (72 + 62 + 68 + 55 + 80) / 5 = 67.4 → 67. Best fit: dependable everyday coding and agentic work at mid-2025 frontier quality.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing AA boards + the Anthropic "Introducing Claude 4" announcement — official plus independent sources); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing Tau2 52.3%, AA-LCR 44.0%, AA Index 16.6, HLE 4.3%, hallucination 41.0% — Tool 78→72, Reasoning 75→62, Overall 71→67.
- Future sources: add a new file next to this one, e.g. `Sonnet_4.5.md`, using the same headings.
