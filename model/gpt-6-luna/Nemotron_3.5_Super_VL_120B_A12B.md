# GPT-6 Luna — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI API docs (developers.openai.com/api/docs/models/gpt-6-luna), independent review (emergent.sh)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's most efficient low-cost GPT-6 tier for focused, high-volume tasks (summarization, extraction, chat, classification); 1.05M context; DeepSWE 66.6% at max reasoning effort; priced at $0.10/$0.50 per 1M.
- **Provider / access:** OpenAI API (`gpt-6-luna`, Chat Completions and Responses API); six reasoning-effort levels (none, low, medium, high, xhigh, max). No Free ID on Zen (noFreeId: true).
- **Release / knowledge:** Released September 22, 2026 (alongside GPT-6 Sol); knowledge cutoff May 18, 2026.
- **IDs:** `gpt-6-luna` (OpenAI API).
- **Context window:** 1,050,000 tokens (1.05M); 128,000 max output tokens (OpenAI API docs).
- **Modalities:** Text and image input; text output. Audio and video not supported. Reasoning token support. Function calling, structured outputs, tools (web search, file search, image generation, code interpreter, hosted shell, computer use, MCP, etc.) via Responses API.
- **Pricing (as of 2026-10-17):** $0.10 input / $0.50 output per 1M tokens; cached input $0.01 per 1M; cache writes $0.125 per 1M. Prompts >272K input tokens priced at 2x input/cache rates and 1.5x output. Batch and Flex at 50% of Standard rates; Fast mode at 2x rates. Regional processing adds 10% premium.
- **Architecture:** Parameter count not publicly disclosed; part of OpenAI's GPT-6 family (positioned below GPT-6 Sol and GPT-6 Astra).

### Raw benchmarks found

Agent / tool use:
- DeepSWE v1.1: **66.6%** at max reasoning effort (OpenAI's one published absolute score; emergent.sh corroboration)
- OpenAI reports relative gains on AutomationBench and OSWorld rather than standalone numbers — no absolute scores available.

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **37** at max effort (emergent.sh); steps down to 34 (xhigh), 29 (medium), 18 (reasoning off). Independent testing shows aggregate intelligence holding level with GPT-5.6.

Coding:
- DeepSWE v1.1: **66.6%** at max effort (OpenAI); OpenAI states this is comparable to Claude Opus 5 and Fable 5 at medium effort, at a fraction of their cost.
- Coding Agent Index: dipped 2 points vs GPT-5.6 Luna (emergent.sh).

Long context:
- 1.05M-token context window (OpenAI API docs); no public long-context retrieval score measured at full window.

Multimodal:
- Text + image input, text output only; no audio/video support. No published vision benchmark scores found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Extensive tool support via Responses API (web search, file search, code interpreter, computer use, MCP, etc.); capped by lack of published tool-specific benchmark scores beyond DeepSWE.
- **Reasoning: 65/100.** AA Intelligence Index 37 at max effort (mid-range); scales across 6 reasoning-effort levels; aggregate intelligence level with GPT-5.6 per independent testing.
- **Context window: 95/100.** Verified 1.05M-token context with 128K max output; capped only by no public retrieval score at full window.
- **Multimodal: 45/100.** Text + image input, text output only; no audio/video; no published vision benchmark scores.
- **Coding: 70/100.** DeepSWE v1.1 66.6% at max effort; OpenAI claims comparable to Claude Opus 5/Fable 5 at medium effort at lower cost; Coding Agent Index dipped 2 points vs GPT-5.6 Luna.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M — among the cheapest frontier-model pricing; Batch/Flex at 50%. Not counted toward Overall.
- **Overall Score: 70/100.** Half-up mean of (75 + 65 + 95 + 45 + 70) / 5 = 70. Best-fit recommendation: a cost-efficient model for high-volume summarization, extraction, and light agent tasks; not suited for vision-heavy or maximum-reasoning workloads.

### Conflicts vs existing meta.json / queued average

- meta.json claims DeepSWE 66.6% — matches OpenAI's published score and emergent.sh.
- meta.json claims 1M context — matches OpenAI's 1,050,000-token context window.
- meta.json claims modalities "Text, image in; text out" — matches OpenAI API docs.
- meta.json pricingNote "Paid-tier pricing" — confirmed at $0.10/$0.50 per 1M.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official OpenAI API docs + emergent.sh independent review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.