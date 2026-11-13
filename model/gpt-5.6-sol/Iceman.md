# GPT-5.6 Sol — findings by Iceman

- Source: OpenAI/GPT-5.6 Sol (`gpt-5.6-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI’s GPT-5.6 Sol is the flagship model in the GPT-5.6 family for complex professional work, agentic coding, reasoning, and tool-using workflows. The `gpt-5.6` alias routes to GPT-5.6 Sol.
- **Provider / access:** OpenAI API `gpt-5.6-sol` (default snapshot/alias). Also listed on Amazon Bedrock as `openai.gpt-5.6-sol` per OpenAI docs. Local metadata: `openai/gpt-5.6-sol`, no confirmed OpenCode Zen Free ID (`noFreeId`).
- **Release / knowledge:** Knowledge cutoff February 16, 2026 (OpenAI developer docs). Public release timing not explicitly stated on the reviewed docs page; LLM Stats lists release as July 9, 2026.
- **IDs:** `gpt-5.6-sol` (API), `gpt-5.6` (alias), `openai.gpt-5.6-sol` (Bedrock).
- **Context window:** 1,050,000-token context window; 922,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output. Supports streaming, structured outputs, function calling, file search, image input, web search, prompt caching, and reasoning token support; Responses API tools include web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, and tool_search (OpenAI developer docs).
- **Pricing (as of 2026-11-13):** $4 / 1M input tokens, $0.40 / 1M cached input tokens, $20 / 1M output tokens (OpenAI developer docs; promotional pricing noted through Nov 30, 2026). Prompts above 272K input tokens priced at 2x input and 1.5x output for the full request; cache writes billed at 1.25x uncached input rate.
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Limited public benchmark numbers were found in accessible sources for this exact model. LLM Stats provides cataloged benchmark ranking entries; OpenAI announcement page referenced by prior metadata was unavailable (404) in this pass.

Agent / tool use:

- Terminal-Bench 4.0: **37.3%** (LLM Stats benchmark ranking, `gpt-5.6-sol` current model entry: score 0.373, rank 24)
- Toolathlon: **58.0%** (LLM Stats benchmark ranking, `gpt-5.6-sol` current model entry: score 0.58, rank 12)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,050,000-token context window (922K max input, 128K output) documented by OpenAI; no standalone long-context retrieval benchmark (MRCR/RULER/GraphWalks) score found.

### Normalized scores (1–100)

> Derived from sparse but verified/accessible evidence (OpenAI docs for specs/pricing/tools and LLM Stats for two benchmark rankings). Scores are provisional where public benchmark coverage is thin.

- **Tool use: 79/100.** Strong platform/tooling capabilities per OpenAI docs (Responses API tools including computer_use, MCP, web/file search, code interpreter, hosted shell, apply_patch, skills, tool search) and a solid Toolathlon score (58.0%), but Terminal-Bench 4.0 is modest (37.3%) and broader agent-benchmark coverage is missing.
- **Reasoning: 75/100.** Positioned as a flagship reasoning-capable model with configurable reasoning effort (none/low/medium/high/xhigh/max) and strong professional-work intent, but no verified GPQA/HLE/LCR/CritPt or intelligence-index scores were found to justify a higher score.
- **Context window: 95/100.** 1,050,000-token context with 922K max input and 128K output is a top-tier window per OpenAI docs; capped slightly without public MRCR/RULER/GraphWalks retrieval results.
- **Multimodal: 55/100.** Supports text and image input with text output (OpenAI docs) and image-related tools in Responses API, but no audio/video modality or broader multimodal benchmark evidence found.
- **Coding: 74/100.** Marketed/docs-positioned for complex coding/professional work with rich coding tools (code_interpreter, hosted_shell, apply_patch), but public coding benchmark numbers (SWE-bench Verified/Pro, LiveCodeBench, DeepSWE, etc.) were not found beyond indirect agentic evidence.
- **Cost efficiency: 80/100.** $4/$0.40/$20 per 1M tokens with prompt caching and batch/flex options is competitive for a flagship-tier model, though not free; promotional pricing and long-context surcharges apply.
- **Overall Score: 76/100.** Mean of the five non-cost dimensions: (79 + 75 + 95 + 55 + 74) / 5 = 75.6 → 76. Best fit as a high-context flagship for professional/agentic work when tool integrations and reasoning controls matter, with limited publicly verifiable benchmark coverage in accessible sources.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: Fresh public research via `webfetch` and `curl` (OpenAI developer model docs and LLM Stats model/ranking page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.6 Sol model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [GPT-5.6 Sol on LLM Stats](https://llm-stats.com/models/gpt-5.6-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
