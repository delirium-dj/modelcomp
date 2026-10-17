# GPT-5.1-Codex — findings by GPT 5.6 Sol

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's GPT-5.1 variant optimized for autonomous software-engineering work in Codex-style environments, positioned between Codex Mini and Codex Max.
- **Provider / access:** OpenAI Responses API only; also available through Azure/Vercel, OpenRouter compatibility routes, and GitHub Copilot agent modes ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.1-codex), [GitHub announcement](https://github.blog/changelog/2025-11-13-openais-gpt-5-1-gpt-5-1-codex-and-gpt-5-1-codex-mini-are-now-in-public-preview-for-github-copilot/)).
- **Release / knowledge:** Released 2025-11-12/13 across gateways and Copilot; official knowledge cutoff is 2024-09-30.
- **IDs:** `gpt-5.1-codex`, `openai/gpt-5.1-codex`, and dated gateway route `openai/gpt-5.1-codex-20251113`; no verified OpenCode Zen Free ID.
- **Context window:** 400,000 total tokens with up to 128,000 output tokens ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.1-codex)).
- **Modalities:** Text and image input; text output; reasoning tokens, streaming, structured output, function calling, web search, and prompt caching. OpenAI's direct endpoint is Responses API, not Chat Completions.
- **Pricing (as of 2026-10-17):** $1.25/M input, $0.125/M cached input, and $10/M output on the official API ([OpenAI pricing on the model page](https://developers.openai.com/api/docs/models/gpt-5.1-codex)).
- **Architecture:** Proprietary; OpenAI publishes no parameter count or weight architecture.

### Raw benchmarks found

Agent / tool use:

- Benchable exact dated route: **85.9% instruction following (94th percentile)**, **98.0% email classification**, and **100% execution success** across its suite ([Benchable](https://benchable.ai/models/openai/gpt-5.1-codex-20251113)).
- OpenAI documents function calling and web search, but no verified public Terminal-Bench, Tau, GDPval-AA, MCP-Atlas, or Toolathlon result was found for the standard `gpt-5.1-codex` ID.

Reasoning / knowledge:

- Benchable exact-route baseline: **92.0% reasoning**, **93.0% mathematics**, and **100% general knowledge / hallucination-baseline accuracy**; the public summary does not expose dataset names, item counts, or prompts, so these cannot be treated as GPQA/HLE equivalents ([Benchable](https://benchable.ai/models/openai/gpt-5.1-codex-20251113)).
- GPQA Diamond, HLE, LCR/MRCR, CritPt, and Artificial Analysis Intelligence Index: no verified exact-standard-tier score found.

Coding:

- Benchable exact-route coding baseline: **95.0% accuracy (91st percentile)** with an undisclosed task set ([Benchable](https://benchable.ai/models/openai/gpt-5.1-codex-20251113)).
- A TokenMix review reports **72% SWE-bench Verified**, approximately **55% SWE-bench Pro**, **93% HumanEval**, and **82% LiveCodeBench v6**, but its release date, 272K context, and $2.50/$15 pricing conflict with current primary documentation. These figures are retained only as provisional secondary claims, not treated as audited measurements ([TokenMix](https://tokenmix.ai/blog/gpt-5-1-codex-review-benchmark-2026)).

Long context:

- The official context contract is **400K total / 128K output**. No verified exact-model MRCR, RULER, GraphWalks, or retrieval-at-length result was found.

Multimodal:

- Image input is officially supported, but no verified exact-model MMMU, MathVista, OCR, audio, or video benchmark was found; output is text-only.

Conflicting evidence:

- Current OpenAI and Vercel documentation agree on 400K context and $1.25/$10 pricing. TokenMix instead states 272K and $2.50/$15 and cites a GPT-5-Codex launch page for the 72% SWE result. The primary specifications therefore win, and the named coding figures are marked provisional. OpenRouter exposes a Chat Completions compatibility layer, while OpenAI itself explicitly supports only Responses API; provider behavior is reported separately rather than collapsed.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong exact-route instruction following and perfect execution reliability plus official function/web tools support a high score, capped by the absence of a named agent benchmark.
- **Reasoning: 84/100.** The exact-route 92% reasoning and 93% math baselines are strong but opaque; no GPQA, HLE, or independent reasoning suite supports a frontier score.
- **Context window: 82/100.** A verified 400K window sits near the top of the methodology's 200K–500K tier, with generous 128K output but no retrieval measurement.
- **Multimodal: 65/100.** Text and image input with text output fits the image-input tier; no audio/video/non-text output or public vision benchmark is available.
- **Coding: 88/100.** Benchable's exact-route 95% coding result and the directionally consistent 72% SWE/82% LiveCode secondary claims support a strong score, capped by opaque or specification-conflicted sourcing.
- **Cost efficiency: 72/100.** $1.25/M input is moderate, but $10/M output is expensive for long agent traces and there is no permanent free API tier.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions `(86 + 84 + 82 + 65 + 88) / 5 = 81.0`; best for repository coding through the OpenAI ecosystem when exact benchmark reproducibility is not mandatory.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Six independent exact-name web searches followed by direct review of OpenAI, GitHub, Vercel, OpenRouter, Benchable, and TokenMix pages; conflicting context, price, endpoint, and benchmark claims were resolved in favor of primary documentation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
