# GPT-5.2 — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.2 (`gpt-5.2`)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's proprietary reasoning model for professional knowledge work, coding, and long-running agents. The tracked `gpt-5.2` API model corresponds to GPT-5.2 Thinking; GPT-5.2 Pro is a distinct, more expensive model and its scores are not substituted here.
- **Provider / access:** OpenAI API model `gpt-5.2`, available through the Responses API and Chat Completions. The API supports configurable reasoning effort; the launch evaluations below label the tested model GPT-5.2 Thinking. [OpenAI API model docs](https://platform.openai.com/docs/models/gpt-5.2) · [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)
- **Release / knowledge:** Released 2025-12-11; API model documentation gives an August 31, 2025 knowledge cutoff. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/) · [OpenAI API model docs](https://platform.openai.com/docs/models/gpt-5.2)
- **IDs:** OpenAI API `gpt-5.2` (also `gpt-5.2-chat-latest`); the separate `gpt-5.2-pro` ID is not the subject of this report. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/) · [OpenAI API model docs](https://platform.openai.com/docs/models/gpt-5.2)
- **Context window:** 400,000 tokens; maximum output 128,000 tokens. [OpenAI API model docs](https://platform.openai.com/docs/models/gpt-5.2)
- **Modalities:** Text and image input; text output. Audio and video are not supported by this API model. Reasoning, function calling, and tools are supported. [OpenAI API model docs](https://platform.openai.com/docs/models/gpt-5.2)
- **Pricing (as of 2026-10-29):** $1.75 input / $14 output per 1M tokens; cached input $0.175 per 1M. OpenAI lists the distinct GPT-5.2 Pro at $21 / $168 per 1M; that rate does not apply to this slug. The tracked model metadata has no separate OpenCode Free ID. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/) · [OpenAI API model docs](https://platform.openai.com/docs/models/gpt-5.2)
- **Architecture:** Proprietary closed-weight model; parameter count and detailed architecture have not been published.

### Raw benchmarks found

> OpenAI's December 2025 release identifies results by GPT-5.2 Thinking, which is the direct `gpt-5.2` API model, separately from GPT-5.2 Pro. OpenAI ran most API evaluations at maximum reasoning effort; production results may vary. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)

Agent / tool use:

- GDPval: **70.9% wins or ties** against top industry professionals on knowledge-work tasks across 44 occupations (not a GDPval-AA Elo score). [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)
- τ²-Bench: **98.7% Telecom** and **82.0% Retail**; OpenAI notes a helpful system instruction for Telecom and excludes Airline due to grading quality. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)
- BrowseComp **65.8%**, Scale MCP-Atlas **60.6%**, and Toolathlon **46.3%**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)
- Terminal-Bench 2.1 and Claw-Eval / ClawProBench: **no verified exact-model score found** in the sources checked.

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%**; Humanity's Last Exam (no tools): **34.5%**, and HLE with search + Python: **45.5%**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)
- AIME 2025 (no tools): **100.0%**; FrontierMath Tier 1–3 with Python: **40.3%**; ARC-AGI-2 Verified: **52.9%**. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)
- BenchLM's October 2026 profile gives an aggregate **59.45/100, rank 54/215**, with **31 of 775** tracked benchmark slots showing evidence. This is BenchLM's partial-coverage composite, not an OpenAI or Artificial Analysis Intelligence Index score. [BenchLM](https://benchlm.ai/models/gpt-5-2)

Coding:

- SWE-bench Pro (public): **55.6%**; SWE-bench Verified: **80.0%**; SWE-Lancer IC Diamond: **74.6%**, as reported by OpenAI for GPT-5.2 Thinking. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)
- Vibe Code Bench v1.1: **53.50%**, listed by BenchLM with Vals AI as the benchmark source. Do not conflate this with other Vibe Code Bench editions. [BenchLM](https://benchlm.ai/models/gpt-5-2)
- LiveCodeBench and SciCode: **no verified exact-model score found** in the sources checked.

Long context:

- OpenAI MRCRv2, 8 needles: **85.6%** at 64K–128K and **77.0%** at 128K–256K. BrowseComp Long Context is **92.0%** at 128K and **89.8%** at 256K. These tests do not establish retrieval performance at the full 400K context limit. [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)

Multimodal:

- The API model supports image input and text output; OpenAI reports CharXiv Reasoning **82.1%** without tools and **88.7%** with Python, and MMMU Pro **79.5%** without tools / **80.4%** with Python. [OpenAI API model docs](https://platform.openai.com/docs/models/gpt-5.2) · [OpenAI launch post](https://openai.com/index/introducing-gpt-5-2/)

### Normalized scores (1–100)

- **Tool use: 91/100.** τ²-Bench Telecom is 98.7%, with strong BrowseComp/MCP-Atlas results; no Terminal-Bench 2.1 or Claw-Eval result caps confidence.
- **Reasoning: 94/100.** GPQA Diamond 92.4%, AIME 2025 100%, and HLE 34.5% without tools support a frontier score, while HLE remains below the methodology's 40% top-tier reference.
- **Context window: 82/100.** The 400K window falls in the methodology's 200K–500K tier; 77% MRCRv2 at 128K–256K is strong but does not verify reliable retrieval at the full limit.
- **Multimodal: 68/100.** Image input qualifies above text-only, but there is no audio/video input or non-text output.
- **Coding: 88/100.** SWE-bench Verified 80%, SWE-bench Pro 55.6%, and Vibe Code Bench v1.1 53.50% are strong; no verified Terminal-Bench 2.1 or LiveCodeBench result limits the rating.
- **Cost efficiency: 70/100.** The paid API tier is $1.75/$14 per 1M tokens (cached input $0.175), with no tracked OpenCode Free ID.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions: (91 + 94 + 82 + 68 + 88) / 5 = 84.6 → 85; cost is excluded. Best for high-quality tool use, reasoning, and code within 256K-tested context; image support is useful, but not a full audio/video model.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent search engines (Yahoo, DuckDuckGo, and Naver), followed by direct checks of OpenAI's launch post and API model documentation, plus BenchLM and models.dev. Kept GPT-5.2 Thinking/API `gpt-5.2` separate from GPT-5.2 Pro, preserved benchmark-specific harness notes, and used the project scoring rubric; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
