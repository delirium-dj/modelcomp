# MiMo-V2.6-Pro — findings by Ernie 5.5 Flash

- Source: Xiaomi/MiMo-V2.6-Pro (`mimo-v2.6-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight multimodal model (released 2026-09-22) for multimodal coding agents and long-context automation, priced at roughly one hundredth of frontier rates.
- **Provider / access:** Xiaomi API (`mimo-v2.6-pro`), OpenRouter, DeepInfra (`XiaomiMiMo/MiMo-V2.6-Pro`), OpenCode Go, Amazon Bedrock, plus ~25 routes. Open weights published.
- **Release / knowledge:** 2026-09-22 (models.dev); knowledge cutoff not published.
- **IDs:** `mimo-v2.6-pro`, `xiaomi/mimo-v2.6-pro`, `XiaomiMiMo/MiMo-V2.6-Pro` (Hugging Face), `opencode-go/mimo-v2.6-pro`.
- **Context window:** 1,048,576 tokens total; max output 131,072.
- **Modalities:** text, image, audio and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.435 / $0.87 per 1M input/output; cache read $0.0036. The Xiaomi token-plan route lists a $0/$0 allowance tier.
- **Architecture:** open-weights sparse MoE (Xiaomi MiMo).

### Raw benchmarks found

Agent / tool use:

- CyberGym: **94.0%** (best verified cyber row in this dataset)
- OSWorld-Verified: **82%**; Toolathlon-Verified: **76.9%**
- AutomationBench: **53.1%**; JobBench: **62.0%**; Terminal-Bench 2.1: **89.9%**; Terminal-Bench 4.0: **34.90%**
- ExploitBench v8-bench: **48%**; ExploitGym: **17.8%**; Agents' Last Exam: **31.6%**
- Claw-Eval / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- STEMBench120: **2.17**; FrontierPhysics (end-to-end physics research): **1.2%** (near-floor)
- StealthMark Intelligence Benchmarks: **47.9**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- DeepSWE: **71.9%**; SEC-Bench Pro: **66.3%**; Terminal-Bench 2.1: **89.9%** (self-reported)
- ProgramBench: **26.5%** (weak); Terminal-Bench 4.0: **34.9%**; Bug Hunt Bench: **22.7 fixes**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 85/100.** CyberGym 94.0%, OSWorld-Verified 82% and Toolathlon 76.9% are near-frontier for a model at $0.87/1M output; Terminal-Bench 4.0 34.9% and FrontierPhysics 1.2% cap it.
- **Reasoning: 72/100.** STEMBench120 2.17 and StealthMark 47.9 are the only verified reasoning rows and neither is strong; FrontierPhysics 1.2% is near-floor, and no HLE/GPQA/ARC publication exists.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, audio and video in — broader than most open models — but no public image/video/audio understanding benchmark rows were published.
- **Coding: 75/100.** DeepSWE 71.9% and SEC-Bench Pro 66.3% are decent for the price, but ProgramBench 26.5% and Terminal-Bench 4.0 34.9% are weak and no SWE-bench row exists.
- **Cost efficiency: 95/100.** $0.435/$0.87 per 1M with a $0.0036 cache read and a $0 allowance tier — the cheapest frontier-adjacent route in this dataset.
- **Overall Score: 83.4/100.** Best fit for high-volume cyber-defence triage, computer-use automation and cost-dominated multimodal pipelines; do not trust it on hard math or long-horizon repo work.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Xiaomi MiMo model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo-V2.6-Pro — Xiaomi MiMo / Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro)
  - [MiMo-V2.6-Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/mimo-v2-6-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Pro_v2.md`, using the same headings.