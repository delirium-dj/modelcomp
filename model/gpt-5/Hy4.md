- Source: OpenAI/GPT-5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 unified flagship (released 2025-08-08 Beijing time), available in `gpt-5`, `gpt-5-mini` and `gpt-5-nano` sizes with `reasoning_effort` and `verbosity` controls. A distinct model; GPT-5 Pro / Codex / Chat and the GPT-5.1+ generations are separate.
- **Provider / access:** Responses API and Chat Completions API, default in Codex CLI; Microsoft 365 Copilot, GitHub Copilot and Azure AI Foundry. `gpt-5-chat-latest` is the non-reasoning ChatGPT variant.
- **Release / knowledge:** 2025-08-07 US / 2025-08-08 Beijing; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5`, `gpt-5-mini`, `gpt-5-nano`, `gpt-5-chat-latest`. No free Zen ID verified.
- **Context window:** **400,000 tokens** per a third-party BenchGecko catalogue; the official developer page does not state a figure — reported with provenance.
- **Modalities:** text and image in, text out; built-in tools (web search, file search, image generation), parallel tool calling, custom tools in plaintext or regex/context-free-grammar-constrained formats, streaming, Structured Outputs, prompt caching and Batch API. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$1.25 / 1M input, $10 / 1M output** (official); mini **$0.25 / $2**, nano **$0.05 / $0.40**. Batch tiers at half price.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Unified system with adjustable reasoning effort; materially lower hallucination than previous models.

### Raw benchmarks found

Official OpenAI "Introducing GPT-5 for developers" benchmark table (GPT-5 `high`):

Reasoning / knowledge:

- AIME '25 (no tools): **94.6%**
- GPQA Diamond (no tools): **85.7%**
- HLE (no tools): **24.8%**
- HMMT 2025 (no tools): **93.3%**
- FrontierMath (with python tool only): **26.3%**
- BenchGecko (third-party, 41 benchmarks): normalised average **60.1**, rank #91 of 320; OpenHands agent **71.8%** — labelled third-party
- LCR / MLCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Agent / tool use:

- OpenHands (third-party BenchGecko): **71.8%**
- Native parallel tool calling and built-in web/file/image tools with custom-tool grammar constraints (qualitative)
- SWE-bench Verified: OpenAI states custom (plaintext) tools score **about the same** as JSON tools (no absolute figure published) — no verified public score found
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Coding:

- SWE-bench Verified: no absolute figure in the official page (only the custom-vs-JSON parity note) — no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 400K third-party-reported window with prompt caching; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** Native parallel tool calling, built-in web/file/image tools, grammar-constrained custom tools and a 71.8% OpenHands agent result (third-party); capped by no scored τ-bench/OSWorld/GDPval figure.
- **Reasoning: 88/100.** AIME '25 94.6%, GPQA Diamond 85.7%, HMMT 93.3% and HLE 24.8% (strong for Aug 2025), with adjustable reasoning effort; capped by FrontierMath 26.3% and by later generations far exceeding it.
- **Context window: 82/100.** A 400K third-party-reported window with prompt caching and Batch API; capped by no vendor-verified figure and no long-context retrieval measurement.
- **Multimodal: 82/100.** Image input plus a built-in image-generation tool; capped by text-only primary output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 84/100.** Default model in Codex CLI with SWE-bench Verified parity across tool formats; capped by no absolute SWE-bench figure in the official page and no Terminal-Bench result.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M with half-price batch and cheap mini/nano tiers; excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 85, 88, 82, 82, 84 = 84.2 → 84. Best fit: historical/legacy general reasoning and coding workloads; superseded by the GPT-5.1 through GPT-6.1 generations.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: OpenAI's official "Introducing GPT-5 for developers" page (full official benchmark table and rate card), plus a third-party BenchGecko catalogue for the 400K context, normalised average and OpenHands figure — explicitly labelled third-party. GPT-5 mini/nano/Pro/Codex/Chat figures are labelled by their variant IDs and never merged into the base model's rows. Rows without a published figure are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Introducing GPT-5 for developers — OpenAI (official benchmark table, pricing, API features)](https://openai.com/index/introducing-gpt-5-for-developers/)
  - [GPT-5 — BenchGecko (third-party context, benchmark average, OpenHands)](https://www.benchgecko.ai/model/gpt-5)
