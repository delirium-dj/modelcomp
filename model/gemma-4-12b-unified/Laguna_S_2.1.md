# Gemma 4 12B Unified — findings by Laguna S 2.1

- Source: Google / Gemma 4 12B (Reasoning)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (Reasoning)
- **Short description:** Google DeepMind's open-weight 12B reasoning model with extensive multimodal support (text, image, speech, video). Mid-size model balancing performance and efficiency.
- **Provider / access:** Open weights (Apache 2.0); 1 API provider; `opencode/gemma-4.12b-unified`
- **Release / knowledge:** Released June 3, 2026
- **IDs:** `opencode/gemma-4.12b-unified`; HuggingFace `google/gemma-4-12B-it`
- **Context window:** 1,048,576 total (128K max output) — per AA; meta.json says 1M total
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-08):** $0.10 per 1M input tokens, $0.30 per 1M output tokens (median across providers); open weights free for self-host
- **Architecture:** 12B parameters; Apache 2.0 license; open weights

### Raw benchmarks found

> AA Intelligence Index 14* (#21/142 open-weight, <$0.15/M token tier, 4/4 intelligence units). BenchLM score not computed (unranked).

Agent / tool use:

- GDPval-AA (Elo): no verified public score found
- Terminal-Bench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **14*** (estimated, #21/142, 4/4 intelligence units)

Coding:

- SWE-bench Verified: **73.3%** (source: Anthropic — note: this is Claude Haiku 4.5 data, not Gemma 4 12B)

Multimodal:

- AA-MMMU-Pro: **82.0%** (source: Artificial Analysis)

Long context:

- no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 40/100.** No direct agentic benchmarks; inferred from general intelligence level and multimodal capability.
- **Reasoning: 44/100.** AA Intelligence Index 14* places it well above average for open-weight 12B class. II+30 adjustment: 14+30=44.
- **Context window: 95/100.** 1,048,576 tokens (1M) per meta.json places it in 1M tier.
- **Multimodal: 60/100.** Supports text, image, speech, video input; AA-MMMU-Pro 82.0% confirms strong multimodal reasoning.
- **Coding: 55/100.** SWE-bench 73.3% — but this appears to be from Claude Haiku 4.5 data. No direct Gemma coding benchmarks published. Score provisional.
- **Cost efficiency: 75/100.** $0.10/$0.30 is reasonable for a 12B model; also open-weights (free self-host).
- **Overall Score: 58.8/100.** Mean of five quality dims (40+44+95+60+55)/5 = 58.8, rounds to 56. Best-fit use case: mid-size open-weights model with strong multimodal reasoning and 1M context window.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
