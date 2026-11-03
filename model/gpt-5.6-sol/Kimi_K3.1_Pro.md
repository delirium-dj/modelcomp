# GPT-5.6 Sol — findings by Kimi K3.1 Pro

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship GPT-5.6 variant for high-end reasoning, coding, knowledge work, and agentic tasks. It emphasizes strong intelligence with comparatively low output-token consumption.
- **Provider / access:** OpenAI and OpenRouter (`openai/gpt-5.6-sol`); OpenRouter documents a Chat Completions endpoint with reasoning, tools, and structured responses.
- **Release / knowledge:** Released 2026-07-09; no verified public knowledge cutoff found in the cited sources.
- **IDs:** `openai/gpt-5.6-sol`; no free OpenCode Zen ID was verified in the cited sources.
- **Context window:** 1,050,000 tokens total context and up to 128,000 completion tokens, as listed by OpenRouter.
- **Modalities:** Text/image input and text output; reasoning yes; tool calls and JSON structured responses supported through the documented API fields.
- **Pricing (as of 2026-07-09 launch):** $5 input / $30 output / $0.50 cached input per 1M tokens; cache writes 1.25× base input. OpenRouter currently lists multiple provider-specific routes with different prices, so route pricing must be checked separately.
- **Architecture:** Proprietary; parameter count and weights not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **79.8% task success** (launch record).
- Toolathlon: **79.3%** (launch record).
- MCP Atlas: **83.6% max / 81.8% xhigh**.
- GDPval-AA: **1,748 Elo** (maximum effort).
- AA-Briefcase: **1,502 Elo max**; Artificial Analysis' earlier pre-release run ranked it second at the time, with a 42% rubric score.
- OSWorld 2.0: **66.2% max partial reward**, rising from 29.8% at low effort.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1: **59 at pre-release max**; a later source-linked launch record reports **61** — different dated runs, not silently reconciled.
- GPQA Diamond: **95.2% Vals / 94.9% launch**.
- HLE: **64.5% with tools / 49.5% max in a later no-tools record**.
- HLE-Verified (1,811 items): **54.5%**.
- ARC-AGI-2: **92.5% verified** (maximum thinking).
- CritPt: **32.3%** (verified research-physics evaluation).
- FrontierMath Tier 4 v2: **83.0%**.
- AA-Omniscience Index: **22**; Artificial Analysis notes a small accuracy gain and increased hallucination versus GPT-5.5.

Coding:

- Artificial Analysis Coding Agent Index: **80** (maximum effort in Codex).
- SWE-bench Verified: **96.2% Vals / 82.2% xhigh-max model-card run** — different harnesses and scores, preserved separately.
- Terminal-Bench 2.1: **91.9% launch / 89.5% best-reported-harness record**.
- Terminal-Bench 4.0: **39.9% max**.
- DeepSWE / DeepSWE 1.1: **73.0% Pass@1**.
- FrontierCode: **60.6% main / 60.6% extended** (maximum effort).
- LiveCodeBench: **82.6%** (maximum effort).
- FrontierSWE v2: **32.2% mean** (five Proximus trials, 20-hour task budget).

Long context:

- MRCR v2 eight-needle: **93.8% at 256K**, **91.5% at 256K–512K**, and **73.8% at 512K–1M**.
- Graphwalks BFS F1: **95.4% at 256K / 83.4% at 1M**.
- Context Arena / GDM-MRCRv2: **85.5% average** (maximum thinking; AUC 97.1% at 128K and 56.5% at 1M).
- AA-LCR: **84.0%**.

Multimodal:

- MMMU Pro: **88.8% Vals / 83.4% verified max** — different runs.
- MathVision: **95.8% / 97.8% with Python**.
- LVBench: **82.1%**.
- CharXiv-R: **85.8% without tools**.
- Chartography: **79.9% with tools** (maximum effort).
- GDP.pdf: **54.5% strict pass**.

### Normalized scores (1–100)

- **Tool use: 96/100.** AutomationBench 79.8%, Toolathlon 79.3%, and MCP Atlas 83.6% demonstrate frontier tool execution; long-horizon consistency still caps the score.
- **Reasoning: 96/100.** GPQA 95.2%, ARC-AGI-2 92.5%, and HLE 64.5% with tools are excellent, while lower no-tools HLE and factual-reliability results prevent a higher rating.
- **Context window: 96/100.** The verified 1.05M window is paired with strong MRCR and Graphwalks results, although accuracy falls substantially in the 512K–1M range.
- **Multimodal: 92/100.** Strong image, document, chart, and video results are available, but later MMMU-Pro and mixed specialist vision runs trail the best frontier models.
- **Coding: 97/100.** The Coding Agent Index, Terminal-Bench 2.1, DeepSWE, and SWE-bench results are frontier-class; weaker long-horizon FrontierSWE and Terminal-Bench 4.0 results cap the score.
- **Cost efficiency: 74/100.** Launch pricing is premium, but 90% cache-read discounts and roughly 15K output tokens per Intelligence Index task make measured cost unusually competitive for its capability.
- **Overall Score: 95.4/100.** Half-up mean of 96, 96, 96, 92, and 97; best fit for premium agentic coding and knowledge work where token efficiency matters.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-03
- Method: Independent public internet research using official launch material, router documentation, Artificial Analysis, and source-linked benchmark records; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.6 launch](https://openai.com/index/gpt-5-6/)
  - [OpenRouter — GPT-5.6 Sol API](https://openrouter.ai/openai/gpt-5.6-sol)
  - [Artificial Analysis — GPT-5.6 benchmarks](https://artificialanalysis.ai/articles/gpt-5-6-has-landed)
  - [BenchmarkList — GPT-5.6 Sol source-linked evaluations](https://benchmarklist.com/models/openai-gpt-5.6-sol/)
- Future sources: add a new file next to this one using the same headings.
