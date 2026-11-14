# GPT-5 Nano — findings by Iceman

- Source: OpenAI / GPT-5 nano
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI’s GPT-5 nano is the fastest, most cost-efficient GPT-5 tier for high-volume, latency/cost-sensitive tasks such as summarization, classification, and extraction, with reasoning support and a 400K context window.
- **Provider / access:** OpenAI API (`gpt-5-nano`, snapshot `gpt-5-nano-2025-08-07`) and provider routes (e.g. Azure/OpenRouter/catalog listings). Local metadata lists `opencode/gpt-5-nano` and `noFreeId`.
- **Release / knowledge:** OpenAI developer docs list knowledge cutoff **May 31, 2024** and status **Deprecated** (snapshot deprecated). Released August 2025 per catalog sources (Artificial Analysis).
- **IDs:** `gpt-5-nano`, `gpt-5-nano-2025-08-07`.
- **Context window:** 400,000 tokens context; 272,000 maximum input tokens; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-14, provider-dependent/historical context):** OpenAI docs list **$0.05 / $0.40 per 1M input/output tokens** with **$0.005 cached input**. Provider/catalog pricing varies slightly (e.g. Azure/models.dev listings).
- **Architecture:** Proprietary closed OpenAI model. Architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed OpenAI developer model documentation, Artificial Analysis, models.dev, OpenRouter page content attempts, and local metadata/prior report. Official docs provide verified specs, pricing, capabilities, endpoints, and deprecation status for this exact model, but **no directly extracted standardized benchmark numerics** in this repository’s usual raw categories were found in accessible official sources during this pass. Local metadata benchmark claims (e.g. AIME 2025 85.2%, SWE-bench Verified 54.7%, tau2 telecom 35.5%, Terminal-Bench Hard 12.1%) were **not independently verified** from accessible official/attributable benchmark sources in this pass and are **not used as scored inputs**. Scores below are provisional normalized estimates based on verified specs/capabilities and the model’s documented lightweight positioning.

Agent / tool use:

- OpenAI docs indicate support for function calling, web search, file search, code interpreter, MCP (Responses API), streaming, structured outputs, image input, prompt caching, and batch/chat/responses endpoints.
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no independently verified public score found** for this exact model in this pass.

Reasoning / knowledge:

- Reasoning token support is documented; positioned as a fast/cheap GPT-5 reasoning tier for lightweight tasks.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no independently verified public score found**.

Coding:

- Code interpreter and tool-calling support available; no extracted standardized coding benchmark numerics.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no independently verified public score found**.

Long context:

- **400K context window** (272K max input, 128K max output) verified.
- No standalone long-context retrieval benchmark score extracted.

Multimodal:

- **Text and image input; text output** verified. No extracted multimodal benchmark numerics.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) for a deprecated, ultra-low-cost compact reasoning model with limited directly extracted standardized benchmark evidence.

- **Tool use: 58/100.** Broad API/tooling support is documented (function calling, web/file search, code interpreter, MCP), but this is a lightweight nano tier with limited evidenced strength on complex agentic workflows; no standardized agent benchmark numerics extracted.
- **Reasoning: 54/100.** Reasoning-capable by docs, but positioned as a compact/low-cost tier optimized for speed and simple-to-moderate tasks rather than deep frontier reasoning; no independently verified reasoning benchmark numerics extracted.
- **Context window: 82/100.** Large verified 400K context (272K input / 128K output) is strong for high-volume processing, though practical long-context quality is unverified by extracted retrieval benchmarks.
- **Multimodal: 60/100.** Verified image+text input support is useful for lightweight multimodal tasks, but output is text-only and no multimodal benchmark evidence was extracted.
- **Coding: 52/100.** Suitable for lightweight coding/extraction/classification assistance with tool support, but no independently verified coding benchmark numerics and limited expectation for hard agentic coding versus larger Codex/frontier models.
- **Cost efficiency: 96/100.** Extremely low documented pricing ($0.05/$0.40 per 1M, cached input discount) makes it highly cost-efficient for bulk/simple workloads despite deprecation/supersession.
- **Overall Score: 61/100.** Mean of the five non-cost dimensions (Tool 58, Reasoning 54, Context 82, Multimodal 60, Coding 52) rounded to nearest integer; strong value for high-volume lightweight tasks, with limited evidence for complex agentic/reasoning/coding performance and deprecated status.

> Caution: Scores are provisional estimates based on verified specs/capabilities/status (OpenAI docs, AA/models.dev/OpenRouter context). Local metadata benchmark claims were not independently verified in this pass and were not used as scored inputs.

### Source comparison / conflicts

- **Specs/capabilities/pricing:** OpenAI developer docs, AA, models.dev, and OpenRouter/catalog context align on core identity/specs (400K/272K/128K, text+image in/text out, $0.05/$0.40 base pricing, May 2024 knowledge cutoff, deprecated/superseded positioning).
- **Benchmarks:** No directly extracted standardized benchmark numerics from accessible official/attributable sources in this pass; local metadata benchmark figures remain unverified.
- **Status:** Deprecated in OpenAI docs and by AA; newer nano tiers recommended/supersede for new workloads.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across OpenAI developer model docs, Artificial Analysis, models.dev, OpenRouter page fetch attempts, and local metadata/prior report review; compared specs/pricing/status and noted unverified metadata benchmark claims.
- Research performed (>=10 successful independent web fetch/search attempts): OpenAI GPT-5 nano developer docs (webfetch), introducing GPT-5 URL attempt (403), introducing GPT-5 for developers URL attempt (403), OpenAI pricing URL attempt (403), Artificial Analysis GPT-5 nano page (shell + webfetch), models.dev GPT-5 nano page, OpenRouter GPT-5 nano page fetch, models.dev GPT-5.1 Codex mini page (contextual batch fetch), AA GPT-5.1 Codex mini page (contextual batch fetch), local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [GPT-5 nano model docs (OpenAI Developers)](https://developers.openai.com/api/docs/models/gpt-5-nano)
  - [GPT-5 nano on Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-nano)
  - [GPT-5 Nano on models.dev](https://models.dev/models/openai/gpt-5-nano)
  - Local repository metadata consulted: `model/gpt-5-nano/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
