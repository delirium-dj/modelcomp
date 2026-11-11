# MiMo-V2.6-Flash — findings by Ernie 5.5 Flash

- Source: Xiaomi/MiMo-V2.6-Flash (`mimo-v2.6-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's low-cost MiMo Flash model (released 2026-09-22) for multimodal coding agents and long-context automation — the cheap sibling of MiMo-V2.6-Pro.
- **Provider / access:** Xiaomi API (`mimo-v2.6-flash`), OpenRouter, DeepInfra (`XiaomiMiMo/MiMo-V2.6-Flash`), OpenCode Go, plus ~26 routes. Open weights.
- **Release / knowledge:** 2026-09-22 (models.dev); knowledge cutoff not published.
- **IDs:** `mimo-v2.6-flash`, `xiaomi/mimo-v2.6-flash`, `XiaomiMiMo/MiMo-V2.6-Flash`, `opencode-go/mimo-v2.6-flash`.
- **Context window:** 1,048,576 tokens (1M); max output 131,072.
- **Modalities:** text, image, audio and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.14 / $0.28 per 1M input/output; cache read $0.0028. The Xiaomi token-plan route lists a $0 allowance tier.
- **Architecture:** open-weight sparse MoE (Xiaomi MiMo).

### Raw benchmarks found

Agent / tool use:

- CyberGym: **95.1%** (best verified cyber row in this dataset)
- OSWorld-Verified: **80.8%**; Toolathlon-Verified: **73.6%**; AutomationBench: **52.3%**
- Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0: **28.80%**
- JobBench: **61.2%**; Agents' Last Exam: **27.6%**; ExploitGym: **6.0%**; ExploitBench v8-bench: **25%**

Reasoning / knowledge:

- StealthMark Intelligence Benchmarks: **49.3**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **67.9%**; Terminal-Bench 2.1: **87.6%** (self-reported)
- ProgramBench: **26.0%**; Terminal-Bench 4.0: **28.8%**; SEC-Bench Pro: **47.5%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 80.8%, Toolathlon 73.6% and AutomationBench 52.3% are respectable at this price, CyberGym 95.1% is elite; Terminal-Bench 4.0 28.8% and ExploitGym 6.0% cap it.
- **Reasoning: 68/100.** StealthMark 49.3 is the only verified reasoning row and it is mid-pack; no GPQA/HLE/ARC publication exists.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, audio and video in — the broadest input set among open models — though no public multimodal benchmark rows were published.
- **Coding: 75/100.** DeepSWE 67.9% is decent for the price, but ProgramBench 26.0%, SEC-Bench Pro 47.5% and Terminal-Bench 4.0 28.8% are weak and no SWE-bench row exists.
- **Cost efficiency: 98/100.** $0.14/$0.28 per 1M with a $0.0028 cache read and a $0 allowance tier — the cheapest capable route in this dataset.
- **Overall Score: 81.6/100.** Best fit for cost-dominated cyber triage and high-volume multimodal automation; not a coding or reasoning model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Xiaomi MiMo model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo-V2.6-Flash — Xiaomi MiMo / Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash)
  - [MiMo-V2.6-Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/mimo-v2-6-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Flash_v2.md`, using the same headings.