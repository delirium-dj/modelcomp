# GPT-5.5 Pro — findings by Iceman

- Source: OpenAI/GPT-5.5 Pro (`gpt-5.5-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI’s GPT-5.5 Pro is the higher-compute Pro variant of GPT-5.5 for harder questions and higher-accuracy work, using more reasoning compute for more comprehensive and precise responses. It is offered in ChatGPT and planned/available in API surfaces for demanding professional and research workflows.
- **Provider / access:** OpenAI Responses API and Batch API as `gpt-5.5-pro` (snapshot `gpt-5.5-pro-2026-04-23` per OpenAI docs). Rolled out to Pro/Business/Enterprise users in ChatGPT per OpenAI announcement. Local metadata: `opencode/gpt-5.5-pro`, no confirmed OpenCode Zen Free ID (`noFreeId`).
- **Release / knowledge:** Released April 23, 2026 (OpenAI announcement / LLM Stats). Knowledge cutoff December 1, 2025 (OpenAI developer docs).
- **IDs:** `gpt-5.5-pro`, `gpt-5.5-pro-2026-04-23`.
- **Context window:** 1,050,000-token context window and 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output (OpenAI developer docs). Supports Responses/Batch APIs, structured outputs, function calling, file search, image input/generation, MCP, and web search; no Chat Completions endpoint per docs.
- **Pricing (as of 2026-11-13):** $30 / 1M input tokens and $180 / 1M output tokens (OpenAI developer docs / announcement). No cached input discount noted in docs; regional processing charged at 10% uplift per docs.
- **Architecture:** Proprietary OpenAI model; architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> Numbers below are from OpenAI’s “Introducing GPT-5.5” announcement/blog (GPT-5.5 Pro columns/rows where reported) and LLM Stats benchmark rankings for this exact model. “With tools” / benchmark harness details follow the source definitions.

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI announcement, GPT-5.5 Pro)
- Tool use platform support: Responses API tools include function calling, web search, file search, image generation, code interpreter, hosted shell, and MCP (OpenAI docs)
- Terminal-Bench 2.0: **not separately reported for GPT-5.5 Pro** in announcement table (GPT-5.5 base: 82.7%)
- Tau3-Banking / Tau2-Bench: **not reported for GPT-5.5 Pro** (GPT-5.5 base Tau2-bench Telecom 98.0% without prompt tuning)
- GDPval-AA: **not separately reported for GPT-5.5 Pro** in announcement table
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **not separately reported for GPT-5.5 Pro** in announcement table

Reasoning / knowledge:

- Humanity’s Last Exam (no tools): **43.1%** (OpenAI announcement, GPT-5.5 Pro)
- Humanity’s Last Exam (with tools): **57.2%** (OpenAI announcement, GPT-5.5 Pro) / **0.572** (LLM Stats benchmark ranking, rank 12, self-reported source OpenAI intro post)
- FrontierMath Tier 1–3: **52.4%** (OpenAI announcement, GPT-5.5 Pro)
- FrontierMath Tier 4: **39.6%** (OpenAI announcement, GPT-5.5 Pro) / **0.396** (LLM Stats FrontierMath ranking, rank 6)
- GPQA Diamond: **no verified public score found for GPT-5.5 Pro** (GPT-5.5 base: 93.6% in announcement)
- GeneBench: **33.2%** (OpenAI announcement, GPT-5.5 Pro)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **not separately reported for GPT-5.5 Pro** in announcement table (GPT-5.5 base SWE-Bench Pro public: 58.6%)
- Expert-SWE (internal): **not reported for GPT-5.5 Pro** (GPT-5.5 base: 73.1%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found for GPT-5.5 Pro specifically**

Long context:

- 1,050,000-token context window / 128K output documented (OpenAI docs). Long-context benchmark results (MRCR/GraphWalks) reported for GPT-5.5 base in announcement but **not separately for GPT-5.5 Pro**.

Professional / knowledge work:

- GDPval (wins or ties): **82.3%** (OpenAI announcement, GPT-5.5 Pro)
- Investment Banking Modeling Tasks (internal): **88.6%** (OpenAI announcement, GPT-5.5 Pro)

### Normalized scores (1–100)

> Derived from available public evidence (OpenAI announcement/docs and LLM Stats). GPT-5.5 Pro has strong but uneven public reporting: several high-signal Pro-specific benchmarks exist (BrowseComp, HLE, FrontierMath, GDPval, GeneBench), while some coding/long-context results are only published for the base GPT-5.5. Scores are normalized interpretations, not official vendor scores.

- **Tool use: 88/100.** Excellent Pro-specific tool-augmented/search evidence: BrowseComp 90.1% and HLE with tools 57.2%. Supported by broad Responses API tool ecosystem (web/file search, MCP, code interpreter, hosted shell, image generation). Capped because Tau/GDPval-AA/Toolathlon/MCP-Atlas/terminal-agent scores are not separately reported for Pro.
- **Reasoning: 86/100.** Strong hard-reasoning signals for Pro: HLE 43.1% (no tools) / 57.2% (with tools), FrontierMath Tier 1–3 52.4%, FrontierMath Tier 4 39.6%, and GeneBench 33.2%. Lacks separately reported GPQA/CritPt/LCR numbers for Pro, preventing a higher score.
- **Context window: 94/100.** 1,050,000-token context with 128K output is top-tier per OpenAI docs. Capped slightly because public long-context retrieval benchmarks (MRCR/GraphWalks) were reported for GPT-5.5 base but not explicitly for GPT-5.5 Pro.
- **Multimodal: 55/100.** Supports text and image input with text output per OpenAI docs; no audio/video modality or public multimodal benchmark results for this exact variant found.
- **Coding: 79/100.** Likely strong given family/base model results and Responses coding tools, but Pro-specific public coding benchmarks (SWE-bench Pro/Verified, Terminal-Bench, LiveCodeBench, Expert-SWE) were not separately reported in reviewed sources; scored conservatively from available evidence.
- **Cost efficiency: 58/100.** Premium pricing at $30/$180 per 1M tokens with no cached-input discount noted in docs makes it expensive for routine use, though potentially efficient for difficult high-value tasks where accuracy reduces retries.
- **Overall Score: 80/100.** Mean of the five non-cost dimensions: (88 + 86 + 94 + 55 + 79) / 5 = 80.4 → 80. Best fit for high-stakes reasoning, research, and tool-augmented professional tasks where premium compute is justified; Pro-specific public evidence is strongest on reasoning/search/professional benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: Fresh public research via `webfetch` and `curl` (OpenAI developer docs, OpenAI “Introducing GPT-5.5” announcement, and LLM Stats model/ranking page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.5 Pro model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [Introducing GPT-5.5 (OpenAI)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 Pro on LLM Stats](https://llm-stats.com/models/gpt-5.5-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
