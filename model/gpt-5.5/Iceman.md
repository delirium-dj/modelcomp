# GPT-5.5 — findings by Iceman

- Source: OpenAI/GPT-5.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI’s GPT-5.5 is a flagship model for complex professional work, coding, computer use, knowledge work, and research workflows, with strong agentic and long-context capabilities.
- **Provider / access:** OpenAI ChatGPT (Plus/Pro/Business/Enterprise rollouts per announcement) and Codex; OpenAI API as `gpt-5.5` (Responses/Chat Completions and related endpoints per developer docs). Local metadata lists `openai/gpt-5.5` and `noFreeId`.
- **Release / knowledge:** Introduced April 23, 2026 (OpenAI announcement). Developer docs list knowledge cutoff December 1, 2025 and snapshot `gpt-5.5-2026-04-23`.
- **IDs:** `gpt-5.5`, `gpt-5.5-2026-04-23`.
- **Context window:** 1,050,000 context window; 128,000 max output tokens (OpenAI developer docs). Local metadata marks context as no verified public value in one field, but official docs confirm 1.05M/128K.
- **Modalities:** Text and image input; text output (OpenAI developer docs). Local metadata marks modalities as no verified public matrix in one field; docs confirm text/image in, text out.
- **Pricing (as of 2026-11-10):** $5 / 1M input tokens, $0.50 / 1M cached input tokens, $30 / 1M output tokens (OpenAI announcement/developer docs). Prompts with >272K input tokens priced at 2x input and 1.5x output for the full session (standard/batch/flex). Batch/Flex available at half standard rate per announcement; GPT-5.5 Pro priced separately.
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Introducing GPT-5.5” announcement (including evaluation tables/sections) and OpenAI developer docs.

Agent / tool use:

- Terminal-Bench 2.0 (**agentic coding/terminal workflows**): **82.7%** (OpenAI announcement)
- OSWorld-Verified (**operate real computer environments**): **78.7%** (OpenAI announcement)
- Toolathlon: **55.6%** (OpenAI announcement)
- BrowseComp: **84.4%** (OpenAI announcement; GPT-5.5 Pro 90.1%)
- MCP Atlas: **75.3%** (OpenAI announcement eval table)
- Tau2-bench Telecom (**complex customer-service workflows**, original prompts, no prompt tuning): **98.0%** (OpenAI announcement)
- GDPval (**wins or ties**, well-specified knowledge work across 44 occupations): **84.9%** (OpenAI announcement; GPT-5.5 Pro 82.3%)
- OfficeQA Pro: **54.1%** (OpenAI announcement)
- FinanceAgent v1.1: **60.0%** (OpenAI announcement)
- Investment Banking Modeling Tasks (Internal): **88.5%** (OpenAI announcement)
- Capture-the-Flags challenge tasks (Internal): **88.1%** (OpenAI announcement)
- CyberGym: **81.8%** (OpenAI announcement)

Reasoning / knowledge:

- FrontierMath Tier 1–3: **51.7%** (OpenAI announcement; Pro 52.4%)
- FrontierMath Tier 4: **35.4%** (OpenAI announcement; Pro 39.6%)
- GeneBench: **25.0%** (OpenAI announcement; Pro 33.2%)
- BixBench: **80.5%** (OpenAI announcement)
- GPQA Diamond: **93.6%** (OpenAI announcement)
- Humanity's Last Exam (no tools): **41.4%** (OpenAI announcement; Pro 43.1%)
- Humanity's Last Exam (with tools): **52.2%** (OpenAI announcement; Pro 57.2%)
- ARC-AGI-1 (Verified): **95.0%** (OpenAI announcement)
- ARC-AGI-2 (Verified): **85.0%** (OpenAI announcement)
- Artificial Analysis Coding Index: described as state-of-the-art intelligence at half the cost of competitive frontier coding models (comparative claim; index value not stated as a single number in extracted text)

Coding:

- SWE-Bench Pro (Public): **58.6%** (OpenAI announcement evals)
- Terminal-Bench 2.0: **82.7%**
- Expert-SWE (Internal): **73.1%**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: comparative coding-efficiency claims reported; no standalone DeepSWE score stated for GPT-5.5 in extracted text

Long context:

- Graphwalks BFS 256k f1: **73.7%**; 1M f1: **45.4%** (OpenAI announcement)
- Graphwalks parents 256k f1: **90.1%**; 1M f1: **58.5%** (OpenAI announcement)
- OpenAI MRCR v2 8-needle: 4K-8K **98.1%**, 8K-16K **93.0%**, 16K-32K **96.5%**, 32K-64K **90.0%**, 64K-128K **83.1%**, 128K-256K **87.5%**, 256K-512K **81.5%**, 512K-1M **74.0%** (OpenAI announcement)

Multimodal:

- MMMU Pro (no tools): **81.2%**; (with tools): **83.2%** (OpenAI announcement)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 94/100.** Broad, strong verified agentic/tool/computer-use performance (Terminal-Bench 2.0 82.7%, OSWorld-Verified 78.7%, MCP Atlas 75.3%, BrowseComp 84.4%, Tau2-bench Telecom 98.0%, GDPval 84.9%, CyberGym 81.8%, internal CTF 88.1%) supports top-tier tool use.
- **Reasoning: 94/100.** Excellent verified reasoning/science results (GPQA 93.6%, HLE 52.2% with tools / 41.4% no tools, ARC-AGI-1 95.0% / ARC-AGI-2 85.0%, FrontierMath 51.7%/35.4%, BixBench 80.5%, GeneBench 25.0%) indicate frontier-level reasoning across domains.
- **Context window: 93/100.** Verified 1.05M context with strong long-context results (MRCR v2 remains high through long ranges, including 512K-1M 74.0%; Graphwalks mixed at 1M) supports robust long-context use, with some degradation at extreme 1M graph tasks.
- **Multimodal: 89/100.** Verified text+image input/text output and strong MMMU Pro results (81.2% no tools / 83.2% with tools) indicate high multimodal understanding; capped by limited modality/output breadth versus fully omni-modal systems.
- **Coding: 93/100.** Strong verified coding/agentic software-engineering performance (Terminal-Bench 2.0 82.7%, Expert-SWE 73.1%, SWE-Bench Pro 58.6%) supports high coding capability; capped by limited coverage of some other public coding benchmarks in reviewed sources.
- **Cost efficiency: 78/100.** $5/$30 pricing with caching/processing discounts is reasonable for flagship capability but meaningfully more expensive than mid-tier models; token efficiency claims improve practical value.
- **Overall Score: 93/100.** Mean of the five non-cost dims (94, 94, 93, 89, 93) = 92.6 → 93 (half-up). Best fit for high-stakes agentic coding, computer use, long-context knowledge work, and research workflows where top-tier capability and reliability matter.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.5 (OpenAI announcement)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-5.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
