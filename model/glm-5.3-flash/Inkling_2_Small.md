# GLM-5.3-Flash — findings by Fledge Alpha

- Source: Zhipu AI (`glm-5.3-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Zhipu's efficiency-tier multimodal MoE (Aug 26, 2026), first natively multimodal GLM-5; open weights, ~1/10th GLM-5.3 price.
- **Provider / access:** Z.ai API (`glm-5.3-flash`), OpenRouter, Hugging Face weights (`zai-org/GLM-5.3-Flash`, MIT); also ran as stealth id `ox-alpha`.
- **Release / knowledge:** 2026-08-26.
- **IDs:** `zai-org/GLM-5.3-Flash`; API `glm-5.3-flash`
- **Context window:** 1,048,576 tokens; up to ~128K output.
- **Modalities:** text, image, video, file in; text out; reasoning always-on; tool calls.
- **Pricing (as of 2026-10-02):** $0.15/M input, $0.03/M cached, $0.50/M output (launch promo ended 2026-09-09).
- **Architecture:** 320B total / 18B active MoE, hybrid sparse + linear attention; MIT license.

### Raw benchmarks found

Agent / tool use:

- Toolathlon Verified: **78.4%** (Z.ai)
- AutomationBench v1.0.6: **48.8%** (Z.ai)
- OSWorld 2.0: **59.1%** (Z.ai)
- Agents' Last Exam: **26.3%** (Z.ai)
- GDPval-AA v2: **1773 Elo** (Z.ai)

Reasoning / knowledge:

- AA Intelligence Index: **57** (Artificial Analysis, #4 of 111 open-weights class)
- HLE with tools: **55.3%** (Z.ai)
- GPQA Diamond: figures conflict — 86.4% (TensorFeed/model card aggregate) vs 60.5% (RankLLMs); treat as unverified spread
- CharXiv Reasoning w/ Tools: **89.4%**

Coding:

- Terminal-Bench 2.1: **84.3%** (Z.ai)
- DeepSWE v1.1: **63.4%** (Z.ai)
- SWE-bench Verified: **78.2%** (RankLLMs aggregator)
- NL2Repo: **56.3%**

Long context:

- 1M window at flat pricing; no public MRCR/needle result.

### Normalized scores (1–100)

- **Tool use: 76/100.** Toolathlon 78.4% and OSWorld 59.1% at flash pricing; AutomationBench 48.8% caps it.
- **Reasoning: 74/100.** AA Intelligence Index 57 and HLE-w/tools 55.3% are strong for an 18B-active model; GPQA reporting is inconsistent.
- **Context window: 95/100.** Native 1M-token window, no confirmed long-context surcharge.
- **Multimodal: 85/100.** First multimodal GLM-5: image/video/file input, strong CharXiv 89.4%; text-only output.
- **Coding: 80/100.** Terminal-Bench 2.1 84.3% and DeepSWE 63.4% approach the larger GLM-5.3/Opus 4.8 class at ~1/9 the price.
- **Cost efficiency: 97/100.** $0.15/$0.50 with MIT weights is among the cheapest credible options on the board.
- **Overall Score: 82/100.** Mean of the five quality dims; best fit for high-volume multimodal agent workloads where open weights and near-frontier coding matter.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Z.ai launch blog, Artificial Analysis, Hugging Face model card, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
