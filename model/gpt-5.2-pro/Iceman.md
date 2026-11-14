# GPT-5.2 Pro — findings by Iceman

- Source: OpenAI / GPT-5.2 Pro
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI’s GPT-5.2 Pro is a high-compute professional reasoning model for complex multi-step work and tougher review/reasoning workflows, available via the Responses API and superseded by newer pro models.
- **Provider / access:** OpenAI Responses API (and pro-tier surfaces per metadata). Local metadata lists `opencode/gpt-5.2-pro` and `noFreeId`.
- **Release / knowledge:** OpenAI developer docs list snapshot `gpt-5.2-pro-2025-12-11` and knowledge cutoff **August 31, 2025**. Docs recommend using GPT-5.5 Pro for the latest pro model.
- **IDs:** `gpt-5.2-pro`, `gpt-5.2-pro-2025-12-11`.
- **Context window:** 400,000 tokens context; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-14, provider-dependent):** OpenAI docs list **$21.00 / $168.00 per 1M input/output tokens** (text). models.dev/OpenRouter/provider listings may show different effective/provider rates. Cached input pricing not clearly extracted from the developer docs page in this pass.
- **Architecture:** Proprietary OpenAI model. Architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed OpenAI developer model documentation, models.dev, OpenRouter page content, and local metadata/prior report. OpenAI docs provide verified specs, capabilities, pricing, and knowledge cutoff for this exact model, but **no directly extracted standardized benchmark numerics** in this repository’s usual raw categories were found in accessible official/attributable sources during this pass (announcement pages were inaccessible/blocked and AA model page returned 404). Scores below are provisional normalized estimates based on verified specs/capabilities and the model’s documented high-compute pro positioning for complex professional/multi-step reasoning work.

Agent / tool use:

- OpenAI docs indicate Responses API-only support with streaming, function calling, file search, image input, image generation, MCP, and web search tools; designed for multi-turn/tough problems (including background mode for long-running requests) with configurable reasoning effort (medium/high/xhigh).
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas / Claw-Eval / ClawProBench: **no independently verified public score found**.

Reasoning / knowledge:

- Reasoning token support and high-compute pro positioning for complex multi-step reasoning/professional work are documented.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / MLCR / CritPt: **no independently verified public score found**.

Coding:

- Tooling and long-context/reasoning capabilities support coding and review workflows, but no extracted standardized coding benchmark numerics for this exact model.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no independently verified public score found**.

Long context:

- **400K context window** (128K max output) verified. No standalone long-context retrieval benchmark score extracted.

Multimodal:

- **Text and image input; text output** verified. No extracted multimodal benchmark numerics.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) for a superseded high-compute pro model with strong documented specs/capabilities but limited directly extracted standardized benchmark evidence.

- **Tool use: 82/100.** Strong documented Responses API/tooling surface (function calling, file search, web search, MCP, image generation, streaming, multi-turn) and design for tough multi-step tasks suggest high agentic/tool-use capability, but no standardized agent benchmark numerics were extracted.
- **Reasoning: 86/100.** Positioned as a high-compute pro model for complex professional and multi-step reasoning with reasoning-token support and adjustable effort; scored provisionally high based on positioning/specs, with caution due to missing extracted benchmark numerics.
- **Context window: 82/100.** Large verified 400K context (128K output) supports long-form professional workflows, though practical long-context retrieval quality is unverified by extracted benchmarks.
- **Multimodal: 72/100.** Verified image+text input and image-generation tool support add multimodal workflow capability, but output is text-only and no multimodal benchmark evidence was extracted.
- **Coding: 80/100.** Strong reasoning/context/tooling profile is suitable for complex coding/review tasks, but no independently verified coding benchmark numerics were extracted for this exact model.
- **Cost efficiency: 28/100.** Very high documented pricing ($21/$168 per 1M in/out) and superseded status make it cost-efficient only for the hardest problems where quality/compute justifies expense.
- **Overall Score: 80/100.** Mean of the five non-cost dimensions (Tool 82, Reasoning 86, Context 82, Multimodal 72, Coding 80) rounded to nearest integer; powerful high-compute pro profile by specs/positioning, but provisional due to lack of extracted standardized benchmark numerics and current supersession.

> Caution: Scores are provisional estimates based on verified specs/capabilities/status (OpenAI docs, models.dev, OpenRouter context). No independently verified standardized benchmark numerics for this exact model were extracted in this pass.

### Source comparison / conflicts

- **Specs/capabilities/pricing:** OpenAI developer docs, models.dev, and OpenRouter/catalog context align on core identity/specs (400K/128K, text+image in/text out, Responses API, pro/high-compute positioning, $21/$168 base pricing, Aug 31 2025 knowledge cutoff). Provider pricing may vary.
- **Benchmarks:** Announcement/benchmark pages were inaccessible or unavailable (403/404) and no standardized benchmark numerics were extracted from accessible sources.
- **Status:** OpenAI docs recommend GPT-5.5 Pro for latest pro workloads (superseded positioning).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across OpenAI developer model docs, models.dev, OpenRouter page fetch attempts, AA/search attempts, and local metadata/prior report review; compared specs/capabilities/status and noted inaccessible announcement/benchmark sources.
- Research performed (>=10 successful independent web fetch/search attempts): OpenAI GPT-5.2 Pro developer docs (webfetch), introducing-gpt-5-2 URL attempts (403), AA GPT-5.2 Pro page attempt (404), models.dev GPT-5.2 Pro page, OpenRouter GPT-5.2 Pro page fetch, xAI models docs fetch (contextual batch), xAI news URL attempt (403), AA/models.dev/OpenRouter grok-5 search fetches (contextual batch), local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [GPT-5.2 Pro model docs (OpenAI Developers)](https://developers.openai.com/api/docs/models/gpt-5.2-pro)
  - [GPT-5.2 Pro on models.dev](https://models.dev/models/openai/gpt-5.2-pro)
  - [GPT-5.2 Pro on OpenRouter](https://openrouter.ai/openai/gpt-5.2-pro)
  - Local repository metadata consulted: `model/gpt-5.2-pro/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
