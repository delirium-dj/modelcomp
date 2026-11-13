# GPT-5.4 — findings by Glyph Cluster

- Source: OpenAI (`gpt-5.4`, folder slug `gpt-5.4`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (OpenAI; hyphenated vendor style)
- **Short description:** OpenAI's frontier reasoning model for professional work, combining advanced reasoning, coding, agentic tool use, computer use, and multimodal understanding in a single system.
- **Provider / access:** OpenAI API/ChatGPT/Codex surfaces; also available via partner providers (e.g. Azure, Amazon Bedrock) per OpenRouter/AA listings. Responses API and Chat Completions supported (per OpenAI docs).
- **Release / knowledge:** Released 2026-03-05 (per OpenAI announcement/docs and AA). Knowledge cutoff Aug 31, 2025 (per OpenAI docs/AA).
- **IDs:** `gpt-5.4` (OpenAI model ID), `openai/gpt-5.4` (OpenRouter).
- **Context window:** 1,050,000 tokens context window (per OpenAI docs); 128,000 max output tokens. (AA lists ~1M context.)
- **Modalities:** Text and image input; text output. Reasoning supported (effort levels including xhigh). Tool use, computer use, web search, code interpreter, structured outputs, and other tool capabilities supported per OpenAI docs.
- **Pricing (as of 2026-11-13):** API pricing per OpenAI docs: $2.50/M input, $0.25/M cached input, $15/M output (standard), with higher pricing for prompts >272K tokens and 10% regional uplift where applicable. Hosted/provider pricing may vary.
- **Architecture:** Proprietary (OpenAI has not disclosed parameter count/architecture details in fetched sources).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched OpenAI announcement/docs for GPT-5.4 (and related GPT-5.4 variants where explicitly stated). Figures not present in fetched sources are marked as no verified public score found.

Professional / knowledge work:

- GDPval (wins or ties): **83.0%** (OpenAI announcement)
- Investment Banking Modeling Tasks (Internal): **87.3%** (OpenAI announcement eval table)
- OfficeQA: **68.1%** (OpenAI announcement eval table)
- FinanceAgent v1.1: **56.0%** (OpenAI announcement eval table)

Coding:

- SWE-Bench Pro (Public): **57.7%** (OpenAI announcement)
- Terminal-Bench 2.0: **75.1%** (OpenAI announcement eval table)

Agentic / tool use / computer use:

- OSWorld-Verified: **75.0%** (OpenAI announcement)
- Toolathlon: **54.6%** (OpenAI announcement)
- BrowseComp: **82.7%** (OpenAI announcement; GPT-5.4 Pro 89.3% also reported)
- WebArena-Verified (DOM + screenshot): **67.3%** (OpenAI announcement text)
- Online-Mind2Web (screenshot-based): **92.8%** (OpenAI announcement text)
- MCP Atlas: **67.2%** (OpenAI announcement eval table)
- Tau2-bench Telecom (reasoning): **98.9%** (OpenAI announcement eval table)
- Tau2-bench Telecom (none): **64.3%** (OpenAI announcement eval table)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI announcement eval table)
- Humanity's Last Exam (no tools): **39.8%** (OpenAI announcement eval table)
- Humanity's Last Exam (with tools): **52.1%** (OpenAI announcement eval table)
- FrontierMath Tier 1–3: **47.6%** (OpenAI announcement eval table)
- FrontierMath Tier 4: **27.1%** (OpenAI announcement eval table)

Multimodal / vision:

- MMMU Pro (no tools): **81.2%** (OpenAI announcement)
- MMMU Pro (with tools): **82.1%** (OpenAI announcement eval table)
- OmniDocBench (normalized edit distance, none): **0.109** (OpenAI announcement; lower is better)

Long context:

- OpenAI MRCR v2 8-needle 128K–256K: **79.3%** (OpenAI announcement eval table)
- OpenAI MRCR v2 8-needle 256K–512K: **57.5%** (OpenAI announcement eval table)
- OpenAI MRCR v2 8-needle 512K–1M: **36.6%** (OpenAI announcement eval table)
- Graphwalks BFS 256K–1M: **21.4%** (OpenAI announcement eval table)
- Graphwalks parents 256K–1M: **32.4%** (OpenAI announcement eval table)

Other:

- Artificial Analysis Intelligence Index: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 92/100.** State-of-the-art/near-frontier agentic and tool-use capability evidenced by OSWorld-Verified 75.0%, BrowseComp 82.7%, Toolathlon 54.6%, WebArena-Verified 67.3%, Online-Mind2Web 92.8%, MCP Atlas 67.2%, and strong tool-calling behavior described by OpenAI.
- **Reasoning: 90/100.** Very strong reasoning and knowledge performance (GPQA Diamond 92.8%, GDPval 83.0%, HLE 39.8% no tools / 52.1% with tools, FrontierMath Tier 1–3 47.6%) with broad professional-task competence.
- **Context window: 88/100.** ~1.05M token context with reported long-context benchmark results (MRCR v2 up to 1M) showing capability but notable degradation at extreme ranges (e.g. 36.6% at 512K–1M 8-needle), supporting a high but not perfect score.
- **Multimodal: 84/100.** Strong text+image understanding and vision/computer-use performance (MMMU Pro 81.2–82.1%, OmniDocBench 0.109 NED, OSWorld/WebArena/Online-Mind2Web visual interaction results), but no verified audio/video modalities in fetched sources.
- **Coding: 86/100.** Strong coding and software-engineering results (SWE-Bench Pro 57.7%, Terminal-Bench 2.0 75.1%, Codex-oriented capabilities and frontend/agentic coding claims), competitive at frontier level though some specialized coding benchmarks vary by harness/settings.
- **Cost efficiency: 62/100.** Proprietary model with premium pricing ($2.50/$15 per 1M standard, higher for very long prompts) and improved token efficiency versus prior generation; value is strong for capability but cost is materially higher than open/efficient alternatives.
- **Overall Score: 88/100.** Mean of the five non-cost dims (Tool use 92, Reasoning 90, Context 88, Multimodal 84, Coding 86) = 88.0, rounded to 88. Best fit: frontier professional knowledge work, agentic computer/tool use, and high-stakes coding/reasoning workflows where top-tier capability justifies premium cost.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on official OpenAI pages, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [OpenAI — Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
  - [OpenAI Platform Docs — GPT-5.4](https://platform.openai.com/docs/models/gpt-5.4)
  - [Artificial Analysis — GPT-5.4 (Xhigh)](https://artificialanalysis.ai/models/gpt-5-4)
  - [OpenRouter — openai/gpt-5.4](https://openrouter.ai/openai/gpt-5.4)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
