# Claude Sonnet 4 — findings by Iceman

- Source: Anthropic/Claude Sonnet 4
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic’s Claude Sonnet 4 (May 2025) is a hybrid-reasoning coding and agent model positioned as a balanced upgrade over Sonnet 3.7, with strong software engineering, instruction-following, and tool-use capabilities.
- **Provider / access:** Anthropic Claude API/products (`claude-sonnet-4-20250514` family context in announcements). Local metadata lists `anthropic/claude-sonnet-4`, notes retirement from Claude API on 2026-06-15 and not on OpenCode Zen (`noFreeId`).
- **Release / knowledge:** Announced May 22, 2025 (Claude 4 launch). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `claude-sonnet-4`, `Claude Sonnet 4`.
- **Context window:** 200K tokens (local metadata/Anthropic context at time; some trackers cited beta extensions historically, but reviewed sources here focus on 200K-class usage).
- **Modalities:** Text and image input; text output (Claude 4 family capabilities).
- **Pricing (as of 2026-11-10, historical/retired context):** $3 / 1M input tokens, $15 / 1M output tokens (local metadata; same tier as Sonnet 3.x in announcement era), with prompt caching pricing variants noted in metadata. API access retired per metadata.
- **Architecture:** Proprietary Anthropic large language model (hybrid reasoning). Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Anthropic’s “Introducing Claude 4” announcement (May 22, 2025) unless noted. Some results depend on scaffolding/compute settings described in the announcement.

Agent / tool use:

- TAU-bench (retail): **80.5%** (standard) / **82.4%** (high compute with parallel sampling)
- TAU-bench (airline): **62.6%** (standard) / **63.0%** (high compute)
- Agentic coding/tool use improvements highlighted (e.g. sustained multi-file work, tool use); standardized tool benchmark coverage beyond TAU-bench/SWE-bench context limited in this pass.
- Terminal-Bench 2.1: **no verified public score found** in reviewed source
- GDPval-AA / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.4%** (standard) / **83.8%** (extended thinking, with tool use context in charted comparisons not fully specified in text extract)
- MMLU: **86.5%** (standard) / **90.9%** (extended thinking)
- AIME 2025: **70.5%** (extended thinking) / lower in standard mode (chart context)
- MMMLU: **86.5%** (reported in benchmark table context)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** in reviewed source

Coding:

- SWE-bench Verified: **72.7%** (standard) / **79.6%** (high compute)
- Strong coding and frontend/web development improvements emphasized (customer feedback from Cursor, Replit, GitHub, etc.).
- LiveCodeBench / SWE-Pro / SciCode: **no verified public score found** in reviewed source

Long context:

- 200K context window (metadata/era context). No standalone MRCR/RULER/AA-LCR numeric score extracted in this pass.

Multimodal:

- Image input supported in Claude family context; multimodal benchmark numerics not clearly extracted from reviewed announcement in this pass.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 85/100.** Strong agentic behavior and tool use in software engineering and TAU-bench retail/airline (80.5–82.4% / 62.6–63.0%), plus improved sustained multi-step coding workflows.
- **Reasoning: 84/100.** Solid reasoning/knowledge performance (MMLU 86.5–90.9%, GPQA 75.4–83.8% with extended thinking, AIME 70.5% extended thinking) for a balanced Sonnet-class model.
- **Context window: 82/100.** 200K context is capable for many coding/agent tasks but below 1M-class leaders.
- **Multimodal: 78/100.** Image input supported; limited extracted multimodal benchmark evidence in this pass.
- **Coding: 88/100.** Excellent coding performance for its generation (SWE-bench Verified 72.7% standard / 79.6% high compute) and strong real-world coding feedback.
- **Cost efficiency: 82/100.** $3/$15 pricing was competitive at launch for a high-capability coding model, though now retired/superseded by newer tiers.
- **Overall Score: 83/100.** Mean of the five non-cost dims (85, 84, 82, 78, 88) = 83.4 → 83. Best fit historically as a balanced, reliable coding/agent model with strong SWE-bench and tool-use performance.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic announcement; scores are normalized 1–100 interpretations from verified/reported benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing Claude 4 (Anthropic)](https://www.anthropic.com/news/claude-4)
  - Local repository metadata consulted: `model/claude-sonnet-4/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
