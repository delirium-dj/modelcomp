# Claude Opus 4.5 — findings by Iceman

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-11-14 (UTC), deep second-pass research and consolidation
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic’s legacy frontier Opus model (November 2025) optimized for coding, agents, and computer use, with strong reasoning/tool-use performance for its generation; now superseded by newer Opus models.
- **Provider / access:** Anthropic Claude API and supported platforms (e.g. Amazon Bedrock, Google Vertex, Microsoft Azure per OpenRouter/AA/provider listings). Local metadata lists `anthropic/claude-opus-4.5`, `noFreeId`.
- **Release / knowledge:** Released November 24, 2025 (Anthropic announcement/platform docs). Reliable knowledge cutoff May 2025; training data cutoff August 2025 (Anthropic platform docs). AA lists knowledge cutoff August 1, 2025.
- **IDs:** `claude-opus-4-5-20251101`, `claude-opus-4.5`, `anthropic/claude-opus-4.5`.
- **Context window:** 200,000 tokens; 64,000 max output (Anthropic platform docs).
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-14, docs reviewed):** $5 / 1M input tokens, $25 / 1M output tokens (standard pricing; cache/batch discounts available per Anthropic/OpenRouter).
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed. Supports extended/adaptive thinking in platform usage contexts.

### Raw benchmarks found

> SECOND-PASS UPDATE (consolidated from mixed state): I reviewed Anthropic’s official announcement and platform documentation, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior reports. Anthropic’s announcement highlights top-tier coding/agent/computer-use performance and references benchmark comparisons (including SWE-bench Verified chart and other benchmark tabs such as SWE-bench Multilingual and Aider Polyglot), but many exact per-benchmark numeric scores were not fully extractable as plain text from accessible sources in this pass. Local metadata cites `SWE-bench Verified 76.8%`; this exact figure was **not independently extracted** from the accessible text sources in this pass and is treated as an unverified metadata claim (not used as a scored input). Scores below are **provisional normalized estimates** grounded in verified specs and clearly attributable official claims/relative results.

Agent / tool use:

- Anthropic states Opus 4.5 is “the best model in the world for coding, agents, and computer use” at launch and reports improved computer-use/agentic task performance and token efficiency (e.g. better results than Sonnet 4.5 on SWE-bench Verified at highest effort while using fewer output tokens, per announcement text).
- Platform docs highlight long-running task support, extended/adaptive thinking, and coding/agent suitability.
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA / Toolathon / MCP-Atlas: **no directly extracted verified public numeric score found** in this pass.

Reasoning / knowledge:

- Strong reasoning/analysis claims in Anthropic announcement and product positioning; no directly extracted standardized reasoning benchmark numerics (e.g. GPQA Diamond/AIME/HLE/AA Intelligence Index) in accessible text this pass.
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: **no directly extracted verified public score found**.

Coding:

- Anthropic announcement references **SWE-bench Verified** (chart/title indicates Opus 4.5 scores highest among compared models in that figure) and also references **SWE-bench Multilingual** and **Aider Polyglot** benchmark views; exact numeric values were not text-extractable from the rendered chart/tabs in this pass.
- Relative claim extracted: at highest effort, Opus 4.5 exceeds Sonnet 4.5 performance on SWE-bench Verified by **4.3 percentage points** while using fewer output tokens (Anthropic announcement text).
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public numeric score found** for this exact model in this pass.

Long context:

- **200,000-token context / 64K max output** documented (Anthropic docs/AA/OpenRouter). No standalone long-context retrieval benchmark numeric extracted.

Multimodal:

- **Text and image input; text output** supported (docs/AA/OpenRouter). No standardized multimodal benchmark numeric extracted.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) due to limited extractable standardized numeric benchmark tables in accessible sources.

- **Tool use: 86/100.** Official positioning and claims for coding/agents/computer use, strong agentic workflow suitability, and platform tool/thinking support; capped by limited extractable standardized tool-use numerics.
- **Reasoning: 84/100.** Frontier Opus-tier reasoning for its release era with strong coding/agent performance claims; capped by supersession by newer models and lack of extracted standardized reasoning benchmark numerics.
- **Context window: 78/100.** 200,000-token context and 64,000-token output are solid for many tasks but below newer 1M-context Claude offerings.
- **Multimodal: 80/100.** Verified text and image input (text output) support; capped by absence of extracted standardized multimodal benchmark numerics.
- **Coding: 87/100.** Strong official coding/agent claims and relative SWE-bench evidence (chart leadership claim and +4.3pp vs Sonnet 4.5 at highest effort per announcement text); capped by lack of fully extractable exact benchmark numerics in this pass.
- **Cost efficiency: 74/100.** Paid-tier pricing ($5/$25 per 1M tokens) is competitive for a frontier-legacy Opus model but not low-cost relative to smaller/free options.
- **Overall Score: 83/100.** Mean of the five non-cost dimensions (Tool 86, Reasoning 84, Context 78, Multimodal 80, Coding 87) rounded to nearest integer; best fit as a legacy high-capability coding/agentic model, with caution on limited extractable numeric benchmarks and supersession.

> Caution: Scores are provisional normalized estimates based on verified specs and clearly attributable official claims/relative results. Local metadata’s `SWE-bench Verified 76.8%` was not independently extracted in this pass and was not used as a scored input.

### Source comparison / conflicts

- **Specs/pricing:** Anthropic platform docs, OpenRouter, AA, and models.dev align on core specs/pricing ($5/$25, 200K/64K, text+image in/text out, Nov 24 2025 release).
- **Knowledge cutoff:** Anthropic docs show reliable May 2025 / training Aug 2025; AA shows Aug 1 2025 knowledge cutoff (minor representation difference, not a material conflict).
- **Benchmarks:** Announcement provides comparative/chart-based evidence but limited extractable exact numerics in this pass; AA shows deprecated-view benchmark coverage with limited visible aggregate/index details. No direct numeric contradictions found.
- **Prior Iceman files:** This pass consolidates/replaces prior mixed-state files (`Iceman.md` and `Iceman.md.excluded`) with one updated research report.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Anthropic announcement and platform docs, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report review; compared specs/claims and noted extractability limits.
- Research performed (>=10 successful independent web fetch/search attempts): Anthropic Opus 4.5 announcement, Anthropic Opus 4.5 platform overview, Anthropic all-models docs, Anthropic pricing page attempt (403), Artificial Analysis model page, OpenRouter model page, OpenRouter `/api/v1/models` lookup, models.dev Opus 4.5 page, Opus 4.5 system card URL fetch (PDF/binary not text-extractable), local `meta.json` and prior `Iceman.md`/`Iceman.md.excluded` review, plus targeted HTML/snippet extraction for benchmark terms.
- Reference URLs:
  - [Introducing Claude Opus 4.5 (Anthropic announcement)](https://www.anthropic.com/news/claude-opus-4-5)
  - [Claude Opus 4.5 overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/opus-4-5/overview)
  - [Claude Opus 4.5 on Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-5)
  - [Claude Opus 4.5 on OpenRouter](https://openrouter.ai/anthropic/claude-opus-4.5)
  - [Claude Opus 4.5 on models.dev](https://models.dev/models/anthropic/claude-opus-4.5)
  - [Claude Opus 4.5 system card (PDF, not text-extractable in this pass)](https://www.anthropic.com/claude-opus-4-5-system-card)
  - Local repository metadata consulted: `model/claude-opus-4.5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.