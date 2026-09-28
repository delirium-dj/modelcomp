# GPT-5 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (reasoning version, evaluated at "high" reasoning effort)
- **Short description:** OpenAI's unified flagship system from its August 2025 launch — a fast efficient model plus a deeper reasoning model with a real-time router, built for chat, coding, writing, health, and agentic tasks. Now superseded by newer OpenAI releases (GPT-5.1 through GPT-6 Astra); Artificial Analysis marks this model as deprecated and only benchmarks the default 10K-input workload.
- **Provider / access:** OpenAI API `openai/gpt-5` (Chat Completions and Responses API). Artificial Analysis lists 2 API providers, first-party OpenAI API benchmarked.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff September 30, 2024 (verified via Artificial Analysis technical specifications).
- **IDs:** `openai/gpt-5` — no Free ID on OpenCode Zen was verified during research (a non-reasoning variant may also exist per AA, but its exact ID was not verified).
- **Context window:** 400K total tokens with 128K max output (verified via OpenAI API card and AA technical specifications — both agree).
- **Modalities:** Text and image input; text output; reasoning yes (extended thinking); tool calls supported (OpenAI developer page confirms long chains of tool calls and a `verbosity` API parameter); JSON mode not independently verified.
- **Pricing (as of 2026-09-28):** $1.25 in / $10.00 out per 1M tokens (OpenAI API, confirmed by both AA and Vellum leaderboards); ~90% cache discount with blended ~$1.34 per 1M (AA, 7:2:1 cache/input/output ratio). Paid only — no free API tier.
- **Architecture:** Proprietary; parameter count undisclosed by OpenAI. Trained on Microsoft Azure AI supercomputers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified Elo found** — OpenAI reports an internal economically-valuable-tasks benchmark where reasoning GPT-5 is comparable to or better than experts in roughly half the cases across 40+ occupations, but no Elo published
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Aider Polyglot: **88%** (OpenAI launch evaluations, high reasoning effort)

Reasoning / knowledge:

- AIME 2025 (no tools): **94.6%** (OpenAI launch evaluations — state of the art at launch)
- GPQA Diamond: **no verified public score found for base GPT-5 thinking** — the GPT-5 pro variant scores 88.4% without tools (OpenAI SOTA), but that is a separate scaled-compute variant, not this model
- HLE: **no verified public score found** (OpenAI footnote notes launch-era numbers were run on a former HLE version and are not comparable)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **23 (estimated) / #125 of 211** (AA v4.3.2, default 10K-input workload only, model deprecated; below the 26 median for reasoning models in its price tier)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** — proxies: ~45% fewer factual errors than GPT-4o with web search enabled, ~80% fewer than o3 when thinking, ~6x fewer hallucinations than o3 on LongFact/FActScore-style factuality prompts; deception rate 2.1% vs o3's 4.8% on production-like conversations (all OpenAI system card/launch figures)

Coding:

- SWE-bench Verified: **74.9%** (OpenAI launch evaluations, fixed n=477 verified-task subset, high reasoning effort)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** (SciCode is a component of AA II v4.3.2 but no per-model value was published for GPT-5)
- Vibe Code Bench: **no verified public score found**

Long context:

- No long-context retrieval reported (AA-LCR is an AA II v4.3.2 component but no public per-model value for GPT-5 was found; 400K window with no retrieval measurement)

Speed context (not scored): 97.4 output tokens/s (#57/211) and 66.46s TTFT including thinking (both Artificial Analysis, OpenAI API).

### Normalized scores (1–100)

- **Tool use: 65/100.** 88% Aider Polyglot and OpenAI's reported agentic tool-call gains support solid mid-tier placement, but no verified Terminal-Bench 2.1, Tau3, or GDPval Elo exists for this exact model — that missing agentic-suite evidence caps it below the frontier band.
- **Reasoning: 78/100.** 94.6% AIME 2025 without tools was SOTA at launch and hallucination/deception reductions are best-in-class improvements, but no verified GPQA Diamond or HLE for base GPT-5 thinking (only the pro variant's 88.4% GPQA) and a below-median AA Intelligence Index (23) cap it under the 90+ band.
- **Context window: 80/100.** 400K total tokens maps to the upper end of the 200K–500K tier (200K = 70 reference), capped by the 128K max-output caveat and no published long-context retrieval measurement.
- **Multimodal: 82/100.** Text and image input with 84.2% MMMU (SOTA at launch) and reported video/spatial reasoning gains; text-only output and no verified audio/PDF input keep it below audio-vision-tier models.
- **Coding: 72/100.** 74.9% SWE-bench Verified and 88% Aider Polyglot were frontier-class at launch, but the 2026 frontier cohort now sits at 95%+ SWE-bench, and no verified LiveCodeBench/SciCode/Vibe Code Bench results cap it in the upper-mid band.
- **Cost efficiency: 74/100.** $1.25/$10.00 per 1M (blended ~$1.34, ~90% cache discount) is moderately priced per AA and cheap for a former flagship, but the $10.00 output rate is well above mid-tier models and there is no free tier.
- **Overall Score: 75.4/100.** Mean of the five non-cost dims (65 + 78 + 80 + 82 + 72) / 5 = 75.4 — best fit as a solid general-purpose fallback for everyday chat, writing, and health questions; newer OpenAI releases are preferable for frontier coding and agentic work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (OpenAI GPT-5 launch post and "GPT-5 is here" product page, Artificial Analysis GPT-5 model page, Vellum LLM leaderboard cross-check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
