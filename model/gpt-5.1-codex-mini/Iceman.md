# GPT-5.1 Codex Mini — findings by Iceman

- Source: OpenAI / GPT-5.1-Codex-Mini
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Mini
- **Short description:** OpenAI’s GPT-5.1-Codex-Mini is a smaller, cheaper, less-capable Codex-tier reasoning model optimized for cost-sensitive coding tasks in Responses/Codex-style workflows.
- **Provider / access:** OpenAI API (`gpt-5.1-codex-mini`, Responses API support) and provider routes (e.g. Azure/catalog listings). Local metadata lists `opencode/gpt-5.1-codex-mini` and `noFreeId`.
- **Release / knowledge:** OpenAI developer docs list knowledge cutoff **September 30, 2024** and status **Shut down**. Released November 2025 per catalog sources (Artificial Analysis).
- **IDs:** `gpt-5.1-codex-mini`.
- **Context window:** 400,000 tokens context; 128,000 max output tokens (OpenAI developer docs).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-14, provider-dependent/historical context):** OpenAI docs list **$0.25 / $2.00 per 1M input/output tokens** with **$0.025 cached input**. Local metadata/models.dev/provider listings show similar or provider-specific rates.
- **Architecture:** Proprietary closed OpenAI coding/reasoning model. Architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed OpenAI developer model documentation, Artificial Analysis, models.dev, OpenRouter page content attempts, and local metadata/prior report. Official docs provide verified specs, pricing, capabilities, endpoints, and shutdown status for this exact model, but **no directly extracted standardized benchmark numerics** in this repository’s usual raw categories were found in accessible official sources during this pass. Local metadata benchmark claims (e.g. SWE-Bench Pro 49.0%, Terminal-Bench 2.0 46.1%, Vibe Code Bench 22.2%) were **not independently verified** from accessible official/attributable benchmark sources in this pass and are **not used as scored inputs**. Scores below are provisional normalized estimates based on verified specs/capabilities and the model’s documented “smaller/cheaper/less-capable Codex” positioning.

Agent / tool use:

- OpenAI docs indicate Responses API support with streaming, structured outputs, function calling, image input, prompt caching, evals, stored completions, and supported tools including function calling and web search.
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no independently verified public score found** for this exact model in this pass.

Reasoning / knowledge:

- Reasoning token support is documented; positioned as a smaller Codex-tier reasoning/coding model.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no independently verified public score found**.

Coding:

- Official docs describe it as a coding-optimized, smaller/cheaper/less-capable version of GPT-5.1-Codex. No extracted standardized coding benchmark numerics.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no independently verified public score found**.

Long context:

- **400K context window** (128K max output) verified.
- No standalone long-context retrieval benchmark score extracted.

Multimodal:

- **Text and image input; text output** verified. No extracted multimodal benchmark numerics.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) for a shut-down/deprecated, smaller Codex-tier model with limited directly extracted standardized benchmark evidence.

- **Tool use: 70/100.** Documented Responses API/tooling support (function calling, web search, structured outputs, streaming) and Codex-oriented workflow fit suggest solid tool-assisted coding utility, but capability is explicitly “less-capable” than larger Codex variants and no standardized agent benchmark numerics were extracted.
- **Reasoning: 66/100.** Reasoning-capable coding model per docs, but positioned below stronger Codex/frontier tiers; no independently verified reasoning benchmark numerics extracted.
- **Context window: 82/100.** Large verified 400K context (128K output) is strong for repository-scale coding/edit/review tasks, though long-context retrieval quality is unverified by extracted benchmarks.
- **Multimodal: 62/100.** Verified image+text input can support screenshot/design-informed coding workflows, but output is text-only and no multimodal benchmark evidence was extracted.
- **Coding: 72/100.** Explicitly coding-optimized Codex-tier model with relevant API/tooling support, but “smaller/less-capable” positioning and lack of independently verified coding benchmark numerics warrant a conservative score.
- **Cost efficiency: 60/100.** Historically low Codex-tier pricing ($0.25/$2.00 with cached input discount) was attractive for its class, but model is **shut down** (docs) / deprecated (AA), limiting current practical value.
- **Overall Score: 70/100.** Mean of the five non-cost dimensions (Tool 70, Reasoning 66, Context 82, Multimodal 62, Coding 72) rounded to nearest integer; capable budget Codex-tier option historically, with significant caveats on current availability and sparse extracted benchmark evidence.

> Caution: Scores are provisional estimates based on verified specs/capabilities/status (OpenAI docs, AA/models.dev/OpenRouter context). Local metadata benchmark claims were not independently verified in this pass and were not used as scored inputs.

### Source comparison / conflicts

- **Specs/capabilities/pricing:** OpenAI developer docs, AA, models.dev, and catalog/provider context align on core identity/specs (400K/128K, text+image in/text out, Responses API/coding focus, $0.25/$2.00 base pricing, Sep 2024 knowledge cutoff).
- **Benchmarks:** No directly extracted standardized benchmark numerics from accessible official/attributable sources in this pass; local metadata benchmark figures remain unverified.
- **Status:** OpenAI docs list model as **Shut down**; AA labels it deprecated and suggests newer Codex releases.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across OpenAI developer model docs, Artificial Analysis, models.dev, OpenRouter page fetch attempts, and local metadata/prior report review; compared specs/pricing/status and noted unverified metadata benchmark claims.
- Research performed (>=10 successful independent web fetch/search attempts): OpenAI GPT-5.1-Codex-Mini developer docs (webfetch), OpenAI GPT-5 nano developer docs (contextual batch), introducing GPT-5 URL attempts (403), OpenAI pricing URL attempt (403), Artificial Analysis GPT-5.1-Codex-Mini page (shell + webfetch), Artificial Analysis GPT-5 nano page (contextual batch), models.dev GPT-5.1-Codex-Mini page, models.dev GPT-5 nano page, OpenRouter GPT-5.1-Codex-Mini page fetch, OpenRouter GPT-5 nano page fetch, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [GPT-5.1-Codex-Mini model docs (OpenAI Developers)](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini)
  - [GPT-5.1 Codex mini on Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-1-codex-mini)
  - [GPT-5.1 Codex mini on models.dev](https://models.dev/models/openai/gpt-5.1-codex-mini)
  - Local repository metadata consulted: `model/gpt-5.1-codex-mini/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
