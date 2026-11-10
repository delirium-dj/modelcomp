# Claude Haiku 5.5 — findings by Iceman

- Source: Anthropic/Claude Haiku 5.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic’s Claude Haiku 5.5 is a fast, low-cost small model for high-volume, latency-sensitive tasks (classification, extraction, routing, summarization, subagents) with adaptive thinking and a 1M-token context window.
- **Provider / access:** Anthropic Claude API `claude-haiku-5-5`; also available on supported cloud platforms (Amazon Bedrock, Google Cloud/Vertex-related surfaces, Microsoft Foundry, Anthropic managed platforms per docs). Local metadata lists `opencode/claude-haiku-5.5` and `noFreeId`.
- **Release / knowledge:** Released October 7, 2026 (Anthropic announcement/docs). Reliable knowledge cutoff June 2026; training data cutoff June 2026 (platform docs).
- **IDs:** `claude-haiku-5-5`, `anthropic.claude-haiku-5-5` (platform-specific).
- **Context window:** 1,000,000 tokens context; 128,000 max output tokens (synchronous Messages API). Batch API supports up to 300K output tokens with beta header (platform docs).
- **Modalities:** Text and images input; text output (platform docs comparison/specs).
- **Pricing (as of 2026-11-10):** Prompts ≤100K: $0.10 / 1M input, $0.01 / 1M cache read, $0.125 / 1M 5m cache write, $0.20 / 1M 1h cache write, $0.50 / 1M output. Prompts >100K: $0.50 / $0.05 / $0.625 / $1.00 / $2.50 respectively. Batch API 50% discount (Anthropic announcement/platform docs).
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Anthropic’s “Claude Haiku 5.5” announcement and platform docs unless noted. Comparison values for other models in the announcement table are not attributed to Haiku 5.5 except Haiku 5.5’s own column.

Agent / tool use:

- OSWorld 2.1 (offline subset): **72.4%**
- Agentic coding / terminal use: Terminal-Bench 4.0 **39.2%**
- GDPval-AA v2.1 (knowledge work): **1620**
- AA-Briefcase v1.1 (knowledge work): **1578**
- Computer use/browser/subagent suitability emphasized qualitatively in announcement.

Reasoning / knowledge:

- Humanity’s Last Exam (HLE): **45.9%** (no tools), **57.4%** (with tools)
- GPQA Diamond: **no verified public score found**
- AIME 2025: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- Terminal-Bench 4.0 (agentic coding): **39.2%**
- FrontierCode 1.1 (Main): **46.4%**
- SWE-bench Verified / SWE-Pro: **no verified public score found**

Multimodal:

- Chartography (visual reasoning): **46.4%** (no tools)
- Text and image input supported; text output.

Long context:

- 1M-token context window documented; no standalone MRCR/RULER/GraphWalks numeric long-context retrieval benchmark score extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores reflect a small/fast model class.

- **Tool use: 84/100.** Strong for its class on computer-use and knowledge-work agent tasks (OSWorld 2.1 72.4%, GDPval-AA v2.1 1620, AA-Briefcase 1578) and suitable as subagent engine; capped by lower performance on harder terminal-agent benchmarks (Terminal-Bench 4.0 39.2%).
- **Reasoning: 80/100.** Solid small-model reasoning signals (HLE 45.9% no tools / 57.4% with tools) and broad utility, but below larger frontier reasoning models on difficult reasoning depth.
- **Context window: 95/100.** 1M context with 128K output (300K in batch beta) is excellent for high-volume long-document/subagent workflows.
- **Multimodal: 82/100.** Verified text+image input and decent visual reasoning result (Chartography 46.4% no tools) provide useful multimodal capability for a small model, but limited broader multimodal benchmark evidence.
- **Coding: 79/100.** Capable coding/subagent performance for scoped tasks (FrontierCode 1.1 46.4%, Terminal-Bench 4.0 39.2%) but not designed as a top-end coding specialist.
- **Cost efficiency: 97/100.** Very low pricing (especially ≤100K prompts: $0.10/$0.50) with fast latency and 1M context makes it highly cost-efficient for high-volume tasks.
- **Overall Score: 84/100.** Mean of the five non-cost dims (84, 80, 95, 82, 79) = 84.0 → 84. Best fit for fast, high-volume extraction/classification/routing, subagent execution, and cost-sensitive workflows where top-end reasoning/coding depth is not required.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic announcement and platform docs; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Claude Haiku 5.5 announcement (Anthropic)](https://www.anthropic.com/news/claude-haiku-5-5)
  - [Claude Haiku 5.5 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
