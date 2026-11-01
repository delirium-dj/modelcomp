# GPT-5.4 Mini — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.4-mini`, snapshot `gpt-5.4-mini-2026-03-17`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** Distinct smaller March 2026 OpenAI checkpoint optimized for fast agent sub-tasks, computer use and coding, not a latency tier of full GPT-5.4 ([OpenAI launch](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)).
- **Provider / access:** `gpt-5.4-mini` on OpenAI Responses and Chat Completions, dated snapshot in [model docs](https://developers.openai.com/api/docs/models/gpt-5.4-mini); ChatGPT Free/Go Thinking feature and Codex availability reported at launch. `none` default plus `low`/`medium`/`high`/`xhigh` reasoning, external tools incl. hosted shell/computer use. No separate free *API* checkpoint.
- **Release / knowledge:** March 17, 2026; August 31, 2025 cutoff ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.4-mini)).
- **Context window:** **400K combined / 272K max input / 128K max output** ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4-mini)). Do not borrow full GPT-5.4's 1.05M.
- **Modalities:** Text/image input, text output; computer use and image generation are tools, not native image/audio/video model output ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4-mini)).
- **Pricing (2026-10-31):** **$0.75 input / $0.075 cached / $4.50 output per million tokens**, tool costs extra; regional processing 10% uplift ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.4-mini)).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

- **Agent/tool use:** [OpenAI's xhigh evaluation](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) **OSWorld-Verified 72.1%, MCP Atlas 57.7%, Toolathlon 42.9%, τ² Telecom 93.4%**. [Vals](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17) separately reports **Terminal-Bench 4.0 2.52% ±1.01**, Finance Agent v2 **45.36% ±0.45** and Tax Agent **8.81% ±2.04**; TB4 is a newer, much broader task suite than vendor TB2.0. Do not interpret the gap as a failed reproduction on identical items.
- **Reasoning:** OpenAI **GPQA Diamond 88.0%, HLE 28.2% without / 41.5% with tools** at xhigh ([launch](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)); independent [Vals](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17) **GPQA 83.08% ±2.46**, **MMLU Pro 84.55% ±0.36**. Roughly five-point GPQA difference reflects separate settings/harnesses; avoid silently reporting the vendor number as an independent result.
- **Coding:** Vendor [SWE-bench Pro Public **54.4%**, Terminal-Bench 2.0 **60.0%**](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/); independent [Vals](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17) **SWE-bench 73.00% ±1.99**, LiveCodeBench **81.47% ±1.09**, Vibe Code v1.1 **47.97% ±5.61**, ProgramBench **0.00%**. SWE Pro and Verified differ; test/harness variation and TB4 2.52 constrain general coding-agent claims.
- **Context / vision:** Vendor [MRCRv2 eight-needle **47.7% at 64–128K / 33.6% at 128–256K**, GraphWalks BFS **76.3% under 128K**; MMMU Pro **76.6%** without tools, **78.0%** with Python](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/). [Vals MMMU Pro **79.25% ±0.97**](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17) independently corroborates vision; 400K capacity is not reliable near-window recall.

### Normalized scores (1–100)

- **Tool use: 73/100.** Vendor OSWorld 72.1/τ² 93.4, but independent TB4 2.52 and Tax Agent 8.81 expose limits.
- **Reasoning: 76/100.** Vendor GPQA 88 versus Vals 83.08, HLE 28.2 without tools.
- **Context window: 76/100.** 400K cap/272K input, with MRCR only 33.6% at 128–256K.
- **Multimodal: 73/100.** Text/image and independent MMMU Pro 79.25; no native audio/video.
- **Coding: 76/100.** SWE-bench Pro 54.4/Verified 73 and LCB 81.47; TB4 and ProgramBench weaker.
- **Cost efficiency: 82/100.** $0.75/$4.50 and 90% cached-input discount, but tool costs and complex-task variance.
- **Overall Score: 75/100.** Half-up mean (73 + 76 + 76 + 73 + 76) / 5 = 74.8. Good bounded subagent/vision-assisted work; verify long-running workflows.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three fresh searches, official exact-ID API docs and launch's mini-specific columns compared with independently run Vals xhigh/high evaluations; different Terminal-Bench versions and MRCR limits kept separate. Scores are interpretations.
- Reference URLs:
  - [OpenAI GPT-5.4 Mini model docs](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
  - [OpenAI March 17 launch, per-variant benchmark appendix](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [Vals AI independent mini snapshot evaluation](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
