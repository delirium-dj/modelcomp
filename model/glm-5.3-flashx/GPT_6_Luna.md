# GLM 5.3 FlashX — findings by GPT-6 Luna

- Source: Z.AI/GLM 5.3 FlashX, `zai-org/glm-5.3-flashx`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's 320B/18B FlashX serving variant (~200 tok/s, 1M) for low-latency multimodal coding; same weights as Flash, $0.37/$1.25 per 1M.
- **Provider / access:** Z.AI API `glm-5.3-flashx`; B.AI; glm5.app.
- **Release / knowledge:** Released 2026-09 (accelerated tier); same base as GLM 5.3 Flash (Aug 26, 2026).
- **IDs:** `opencode/glm-5.3-flashx` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 1,048,576 (1M); 128K output
- **Modalities:** Text, image, video in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.37/$1.25 per 1M
- **Architecture:** Same as GLM 5.3 Flash (320B total / 18B active, MoE, hybrid attention, MIT).

### Raw benchmarks found

- No separate benchmarks for FlashX (same weights as GLM 5.3 Flash). Benchmarks inherited from Flash:
  - Terminal-Bench 2.1: **84.3%**
  - DeepSWE v1.1: **63.4%**
  - NL2Repo: **56.3%**
  - Toolathlon Verified: **78.4%**
  - AutomationBench v1.0.6: **48.8%**
  - Agents' Last Exam: **26.3%**
  - HLE w/ tools: **55.3%**
  - GDPval-AA v2: **1773 Elo**
  - AA Intelligence Index: **57**
  - OfficeQA Pro: **62.4%**
  - CharXiv Reasoning with Tools: **89.4%**
  - Chartography with Tools: **78.0%**
  - BabyVision: **53.4%**
  - MVBench: **77.8%**
  - MMVU: **80.5%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Same as Flash (agentic 57.2, Terminal-Bench 2.1 84.3%, Toolathlon 78.4%, AutomationBench 48.8%, GDPval 1773).
- **Reasoning: 72/100.** Same as Flash (HLE w/tools 55.3%).
- **Context window: 80/100.** Same as Flash (1M window).
- **Multimodal: 82/100.** Same as Flash (CharXiv 89.4%, Chartography 78.0%, OfficeQA Pro 62.4%).
- **Coding: 76/100.** Same as Flash (DeepSWE 63.4%, NL2Repo 56.3%, Terminal-Bench 2.1 84.3%).
- **Cost efficiency: 94/100.** Current FlashX pricing is $0.37/$1.25 per 1M; it is inexpensive for the serving speed but not free.
- **Overall Score: 78/100.** Half-up mean of the five non-cost quality dimensions: (78 + 72 + 80 + 82 + 76) / 5 = 77.6, rounded to 78. Cost efficiency is excluded. Same as Flash (BenchLM aggregate 57.36 for Flash base).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://open.zhipuai.cn/)
  - [Source 2](https://docs.z.ai/guides/overview/pricing)
  - [Source 3](https://artificialanalysis.ai/models/glm-5-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
