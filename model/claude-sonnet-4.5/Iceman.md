# Claude Sonnet 4.5 — findings by Iceman

- Source: Anthropic/Claude Sonnet 4.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic’s Claude Sonnet 4.5 is a coding/agent-focused model emphasizing long-horizon software engineering, computer use, and improved reasoning/alignment, now superseded by newer Sonnet models.
- **Provider / access:** Anthropic Claude apps/API (`claude-sonnet-4-5` per announcement context). Local metadata lists `opencode/claude-sonnet-4.5` and `noFreeId`.
- **Release / knowledge:** Announced September 29, 2025 (Anthropic). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `claude-sonnet-4-5`, `claude-sonnet-4.5`.
- **Context window:** 200,000 tokens standard (64K output) per local metadata; 1M beta available in some tiers (metadata). Announcement/docs context emphasizes long-horizon tasks.
- **Modalities:** Text and image input; text output (per local metadata/announcement context; file/code workflows supported in products).
- **Pricing (as of 2026-11-10):** $3 / 1M input tokens, $15 / 1M output tokens (Anthropic announcement). Local metadata also notes $0.30 cached input.
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Anthropic’s “Introducing Claude Sonnet 4.5” announcement and stated methodology unless noted.

Agent / tool use:

- OSWorld: **61.4%** (real-world computer-use benchmark; leads at announcement time)
- Computer use / browser tasks: strong gains reported (Claude for Chrome extension use cases); limited additional standardized agent benchmark numerics extracted as text.
- Tau2-bench: methodology notes prompt addenda used for Airline/Telecom; numeric score not clearly extracted from announcement text.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** in extracted announcement text
- HLE: **no verified public score found**
- AIME 2025: mentioned in methodology (temperature 1.0, 64K reasoning tokens for Python config) but score not clearly extracted from announcement text
- MMMLU (14 non-English languages, extended thinking): evaluated; numeric average not clearly extracted from announcement text
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE-bench Verified: **77.2%** (simple scaffold, bash + file editing; averaged over 10 trials, no test-time compute, 200K thinking budget, full 500-problem set). High-compute configuration: **82.0%** (parallel attempts, rejection sampling, internal scoring selection). 1M-context configuration noted at 78.2% but 200K reported as primary.
- Terminal-Bench: reported using default Terminus 2 framework (XML parser, averaged over runs); numeric score not clearly extracted from announcement text/images.

Long context:

- 200K standard context (1M beta in some tiers) documented in metadata; focus on >30-hour complex multi-step tasks reported qualitatively. No standalone MRCR/RULER/GraphWalks numeric score extracted.

Multimodal:

- Text/image understanding and computer-use visual tasks supported; OSWorld 61.4% reflects visual/computer-use capability. No standalone multimodal benchmark numerics extracted.

### Normalized scores (1–100)

> Derived from limited but verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are conservative where benchmark coverage is incomplete in extracted text.

- **Tool use: 88/100.** Strong verified computer-use performance (OSWorld 61.4%) and emphasis on agentic workflows/tooling (Claude Code, Agent SDK, checkpoints) indicate high practical tool/agent capability.
- **Reasoning: 84/100.** Anthropic reports substantial gains in reasoning/math and domain expertise, but extracted text did not provide enough standardized reasoning benchmark numerics for a higher-confidence score.
- **Context window: 86/100.** 200K standard context with 1M beta availability and demonstrated long-horizon task endurance (>30 hours) support strong long-task workflows, though standard window is below 1M-class leaders.
- **Multimodal: 85/100.** Strong computer-use/visual interaction capability evidenced by OSWorld 61.4% and product features; broader multimodal benchmark numerics were not extracted.
- **Coding: 90/100.** Verified SWE-bench Verified 77.2% (82.0% high-compute) demonstrates top-tier coding/agentic software engineering performance for its release period.
- **Cost efficiency: 86/100.** $3/$15 pricing is solid for strong coding/agent capability but not low-cost compared to newer efficient tiers.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88, 84, 86, 85, 90) = 86.6 → 87. Best fit for agentic coding, computer use, and long-horizon software engineering workflows (now superseded by newer Sonnet models).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic announcement; scores are normalized 1–100 interpretations from verified/reported figures available in extracted text, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Sonnet 4.5 (Anthropic)](https://www.anthropic.com/news/claude-sonnet-4-5)
  - Local repository metadata consulted: `model/claude-sonnet-4.5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
