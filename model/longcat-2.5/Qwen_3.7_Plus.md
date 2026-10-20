# LongCat 2.5 — findings by Qwen 3.7 Plus

- Source: Meituan (`longcat-2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5
- **Short description:** Meituan's finalized 2.5-generation open MoE for long-horizon agentic coding. Same architecture as LongCat 2.5 Preview (1.6T/48B-active, 1M context) but with stable GA release. Successor to LongCat-2.0 (MIT-licensed).
- **Provider / access:** OpenCode Zen `opencode/longcat-2.5`; LongCat API; OpenRouter.
- **Release / knowledge:** Released after LongCat 2.5 Preview (September 2026); knowledge cutoff not publicly stated.
- **IDs:** `opencode/longcat-2.5` (OpenCode Zen).
- **Context window:** 128K per meta.json (scaffolded — likely outdated; predecessor LongCat 2.5 Preview has 1M context). Actual context window may be 1M based on model family specs.
- **Modalities:** Text in/out per meta.json; predecessor supports text, image, video input.
- **Pricing (as of 2026-10-20):** Standard pricing; predecessor at $0.30/$1.20 per 1M.
- **Architecture:** Sparse MoE, ~1.6T total / ~48B active per token (same as LongCat 2.5 Preview); finalized open-weight release.

### Raw benchmarks found

> Sources: Same as LongCat 2.5 Preview. No separate BenchLM or Artificial Analysis page found for the finalized LongCat 2.5 variant. Coverage note: **No verified public benchmarks exist for LongCat 2.5 specifically.** Predecessor LongCat-2.0 benchmarks: SWE-bench Pro 59.5, Terminal-Bench 2.1 70.8, SWE-bench Multilingual 77.3.

Agent / tool use:

- No verified public scores for LongCat 2.5.
- LongCat-2.0 reference: Terminal-Bench 2.1 **70.8%** (predecessor)

Reasoning / knowledge:

- No verified public scores for LongCat 2.5.

Coding:

- No verified public scores for LongCat 2.5.
- LongCat-2.0 reference: SWE-bench Pro **59.5%** (predecessor); SWE-bench Multilingual **77.3%** (predecessor)

Multimodal & Grounded:

- No verified public scores for LongCat 2.5.

Long context:

- No verified long-context retrieval benchmarks. Context window may be 1M based on model family.

### Normalized scores (1–100)

> **WARNING: Extremely limited evidence.** No verified public benchmarks exist for LongCat 2.5 specifically. Scores are estimated from predecessor (LongCat-2.0) benchmarks and model family specifications.

- **Tool use: 60/100.** Estimated from predecessor's Terminal-Bench 2.1 70.8%. Same architecture as 2.5 Preview. Capped by absence of verified benchmarks.
- **Reasoning: 55/100.** Thinking mode supported per model family. No verified reasoning benchmarks. Capped by complete absence of evidence.
- **Context window: 85/100.** Meta.json says 128K (scaffolded, likely outdated). Model family has 1M context. If 1M: 95/100. If 128K: 70/100. Estimated 85 as midpoint. Capped by uncertainty.
- **Multimodal: 30/100.** Predecessor claims text, image, video input. No multimodal benchmarks verified. Capped by absence of evidence.
- **Coding: 55/100.** Estimated from predecessor's SWE-bench Pro 59.5% and Terminal-Bench 2.1 70.8%. Same architecture. Capped by absence of verified benchmarks.
- **Cost efficiency: 85/100.** Predecessor pricing $0.30/$1.20 per 1M is competitive for context window. Open-weight enables self-hosting.
- **Overall Score: 57/100.** Mean of five non-cost dims: (60 + 55 + 85 + 30 + 55) / 5 = 57, half-up = 57. Finalized version of LongCat 2.5 Preview: same 1.6T/48B MoE architecture with long-horizon agentic coding focus, but **no verified public benchmarks** exist for this specific variant. All estimates from predecessor LongCat-2.0. Best fit for: long-horizon coding agents and document pipelines where stability matters more than bleeding-edge performance.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Meituan API platform, OpenCode, Enera blog, and APIVALE; scores are normalized 1–100 interpretations, not official vendor scores. **No verified benchmarks found for this specific model — scores estimated from predecessor data.**
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
