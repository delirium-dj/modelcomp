# Claude Sonnet 3.7 — findings by Iceman

- Source: Anthropic/Claude 3.7 Sonnet
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic’s Claude 3.7 Sonnet (February 2025) is the first hybrid-reasoning Claude model, combining fast responses and visible extended thinking for coding, instruction-following, math/science, and agentic workflows.
- **Provider / access:** Anthropic Claude API/products (`claude-3-7-sonnet-20250219` era). Local metadata lists `anthropic/claude-sonnet-3.7`, notes retirement from Anthropic-operated APIs on 2026-02-19 and `noFreeId`.
- **Release / knowledge:** Announced February 24, 2025. Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `claude-3-7-sonnet`, `Claude 3.7 Sonnet`, `claude-3-7-sonnet-20250219` (historical).
- **Context window:** 200,000 tokens total; up to 128,000 output tokens (local metadata/announcement context).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-10, historical/retired context):** $3 / 1M input tokens, $15 / 1M output tokens (including thinking tokens), with cached input pricing noted in metadata.
- **Architecture:** Proprietary Anthropic hybrid reasoning model. Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Anthropic’s “Claude 3.7 Sonnet and Claude Code” announcement (Feb 24, 2025) unless noted. SWE-bench/TAU-bench results depend on scaffolding described in the announcement appendix.

Agent / tool use:

- TAU-bench: **state-of-the-art performance** reported (chart in announcement; exact numeric value not clearly extractable from text). High-compute/agentic tool-use emphasized with Claude Code and tool workflows.
- Terminal-Bench 2.1: **no verified public score found** in reviewed source
- GDPval-AA / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- Strong improvements reported in math, physics, instruction-following, and general reasoning with extended thinking (benchmark table/charts shown; exact numerics for GPQA/AIME/MMLU not fully extracted from announcement text in this pass).
- HLE / LCR / CritPt / AA Intelligence Index: **no verified public score found** in reviewed source

Coding:

- SWE-bench Verified: **62.3%** (standard/custom scaffold, no extended thinking) / **70.3%** (high compute) on the n=489 subset compatible with Anthropic’s infrastructure (appendix). Announcement also cites state-of-the-art coding performance broadly.
- Strong real-world coding feedback (Cursor, Cognition, Vercel, Replit, Canva).
- LiveCodeBench / SWE-Pro / SciCode: **no verified public score found** in reviewed source

Long context:

- 200K context / 128K output documented in metadata/context. No standalone long-context retrieval benchmark numeric extracted.

Multimodal:

- Image input supported; multimodal benchmark numerics not extracted from reviewed announcement in this pass.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Conservative where exact chart numerics were not extracted.

- **Tool use: 82/100.** Strong agentic coding/tool workflows (Claude Code launch context, TAU-bench SOTA claim) with practical tool use, though some standardized agent benchmark numerics were not extracted.
- **Reasoning: 82/100.** Hybrid extended thinking improved math/science/instruction-following; scored conservatively due to limited extracted canonical benchmark numerics in this pass.
- **Context window: 82/100.** 200K input and 128K output support long coding/reasoning sessions.
- **Multimodal: 76/100.** Text+image input capability present, but limited extracted multimodal benchmark evidence.
- **Coding: 85/100.** Strong SWE-bench Verified results (62.3% standard / 70.3% high compute on subset) and broad real-world coding leadership claims at release.
- **Cost efficiency: 82/100.** $3/$15 pricing with extended thinking included was competitive for hybrid reasoning at release (now retired).
- **Overall Score: 81/100.** Mean of the five non-cost dims (82, 82, 82, 76, 85) = 81.4 → 81. Best fit historically as an early hybrid-reasoning coding/agent model with visible extended thinking.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic announcement; scores are normalized 1–100 interpretations from verified/reported figures, not official vendor scores.
- Reference URLs:
  - [Claude 3.7 Sonnet and Claude Code (Anthropic)](https://www.anthropic.com/news/claude-3-7-sonnet)
  - Local repository metadata consulted: `model/claude-sonnet-3.7/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
