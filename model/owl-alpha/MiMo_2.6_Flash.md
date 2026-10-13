# Owl Alpha — findings by MiMo 2.6_Flash

- Source: OpenRouter cloaked model (`owl-alpha`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** OpenRouter's cloaked / anonymized foundation model for agentic workloads, released April 28, 2026. Native tool use + 1M context + strong code generation / automated workflows positioning. Cloaked identity means underlying lab and architecture are undisclosed (feedback-gathering model like other OpenRouter "Alpha" cloaks: Sonoma, Sherlock, Elephant, Pony, etc.). Notable for very high real-world usage growth (↑38% weekly tokens) despite free pricing.
- **Provider / access:** OpenRouter only (`openrouter/owl-alpha`); free ($0/$0) while in cloak/testing; compatible with Claude Code, OpenClaw, and mainstream agent productivity tools. Krater.ai lists as retired from OpenRouter as of mid-2026 review — status may fluctuate.
- **Release / knowledge:** Released 2026-04-28 (OpenRouter). Knowledge cutoff not disclosed.
- **IDs:** `openrouter/owl-alpha`.
- **Context window:** 1,048,576 tokens (1M; ~1,048,756 reported); max output 262.1K tokens.
- **Modalities:** text in; text out; tool use / function calling; long-context. No image input (per Admix "accepts images: No").
- **Pricing (as of 2026-10-13):** Free — $0.00 / 1M input, $0.00 / 1M output during cloak/testing (prompts logged for feedback/training). No paid tier published.
- **Architecture:** Undisclosed (cloaked). Marketed as high-performance foundation model, non-reasoning or hybrid unclear from public materials.

### Raw benchmarks found

Agent / tool use:

- Native tool use / function calling (OpenRouter model card)
- Claude Code + OpenClaw compatibility (model card)
- No public PinchBench/ClawEval/BFCL figures found for this cloak

Coding:

- "strong performance in code generation, automated workflows" (marketing only)
- No SWE-bench / LiveCodeBench public figures found

Reasoning / knowledge:

- No public GPQA / AIME / HLE figures found
- Benchable / BenchLM coverage thin (cloak opacity)

Usage signal (not a benchmark):

- ~1.6T weekly tokens on OpenRouter usage trackers; ↑38% growth — among fastest-growing free models (llm-rankings snapshot 2026-06)

Long context:

- 1M window marketed for document-heavy / knowledge-retrieval workflows
- No MRCR / RULER figures published

### Normalized scores (1–100)

- **Tool use: 65/100.** Native tool calling + Claude Code/OpenClaw compatibility + high real-world agent usage (1.6T tokens/week growth) is a strong practical signal. Capped by zero public agentic benchmark figures and cloak opacity (unknown if frontier or mid-tier under the hood).
- **Reasoning: 55/100.** No public math/science/knowledge benchmarks; marketed as foundation/agentic rather than deep-reasoning. Capped by total lack of verifiable reasoning evidence.
- **Context window: 90/100.** 1M context + 262K max output is top-tier window size. Capped by no long-context retrieval measurements (MRCR/RULER unknown).
- **Multimodal: 15/100.** Text-only (no image input per Admix). Capped at text-only floor.
- **Coding: 58/100.** Marketing claims strong codegen; zero SWE-bench/LCB public numbers. Capped by unverifiable coding claims.
- **Cost efficiency: 100/100.** Completely free ($0/$0) with 1M context — maximum cost efficiency while cloak lasts. Capped only by free-tier rate limits / logging tradeoffs (not scored down).
- **Overall Score: 57/100.** Mean of (65 + 55 + 90 + 15 + 58) / 5 = 56.6 → **57**. Best-fit recommendation: free 1M-context cloak worth trying for document-heavy agent experiments and Claude Code/OpenClaw workflows where cost is zero and opacity is acceptable; do not rely on it for graded STEM reasoning or audited coding without independent verification.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (openrouter.ai model card, krater.ai, ai-hippo.com, admix.software, designforonline.com, llmapi.ai, benchable.ai, llm-rankings.pages.dev usage snapshot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
