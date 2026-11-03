# MiMo-V2.6-Flash Free — findings by GPT 6.1 Sol

- Source: Xiaomi MiMo (`mimo-v2.6-flash` weights) / OpenCode Console (`mimo-v2.6-flash-free` serving tier)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash Free
- **Short description:** Xiaomi's MIT-licensed 309B/15B-active multimodal Flash checkpoint accessed through OpenCode's temporary free tier; Free denotes pricing/access, not a separate checkpoint.
- **Provider / access:** OpenCode Console `opencode/mimo-v2.6-flash-free` via OpenAI-compatible Chat Completions (free chat models require OpenCode); paid same-weight Xiaomi API `mimo-v2.6-flash` at `https://api.xiaomimimo.com/v1`.
- **Release / knowledge:** Independent AA lists base Flash release 2026-09-21. Knowledge cutoff not verified for the exact checkpoint; example system prompts are not proof of a cutoff.
- **IDs:** `mimo-v2.6-flash-free` (OpenCode serving tier), `mimo-v2.6-flash` (Xiaomi), `XiaomiMiMo/MiMo-V2.6-Flash-RL` (official weights). Local slug `mimo-v2.6-free` is shorthand, not an additional vendor weight release.
- **Context window:** Xiaomi Flash specifies 1M total and 128K maximum output; no verified separate free-tier quota from OpenCode's current published table, so do not claim the free endpoint has the full paid window.
- **Modalities:** Xiaomi card lists text, image, video and audio input, text output, thinking/tool calls/structured output; AA evaluates text/image input only. OpenCode free route's modality support may differ.
- **Pricing (as of 2026-11-03):** OpenCode free tier $0 input/output for a limited time; OpenCode warns that free-period prompts may be used to improve the model. Paid Xiaomi fallback $0.14 input, $0.28 output and $0.0028 cached input per million tokens.
- **Architecture:** Official 309B-total/15B-active sparse MoE, hybrid sliding/global attention, MIT downloadable weights; AA independently confirms parameters and license.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **73.6%** and AutomationBench v1.0.6 **52.3%** (Xiaomi model card, Flash column; vendor-reported, benchmark framework differs from AA index).
- Terminal-Bench 2.1: **87.6%** and OSWorld-Verified **80.8%** (Xiaomi card; harness results also attached to its official Hugging Face checkpoint).
- Agents' Last Exam **27.6%**; JobBench **61.2%** (Xiaomi Flash column).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **27** for the paid Flash weights, rank **#9 / 23** in displayed class; independently measured mixed composite, **not** 27% correct. No separate free-route AA evaluation found.
- GPQA Diamond / HLE: no independently verified Flash-specific score found in accessible sources.

Coding:

- DeepSWE v1.1: **67.9%**; ProgramBench **26.0%**; MiMo Code Bench **61.2%**; Terminal-Bench 4.0 **28.8%** (Xiaomi card, Flash column; 4.0 and 2.1 are different task sets and must not be averaged).
- SWE-bench Verified **92.0%** appears in local metadata but not in the directly verified official card or AA text; **not used** as an evidenced score.

Long context:

- Advertised **1M** token capacity (Xiaomi and AA agree for base Flash); no verified exact-model MRCR/RULER retrieval score or independently confirmed OpenCode free serving cap.

### Normalized scores (1–100)

- **Tool use: 84/100.** Official Toolathlon 73.6%, AutomationBench 52.3% and OSWorld 80.8% support agent use, but results are vendor-reported and the free serving lane is not independently benchmarked.
- **Reasoning: 78/100.** Independent AA index 27 is above its open-weight size-class median 23, but below frontier models; no accessible independent GPQA/HLE subscores.
- **Context window: 88/100.** Base Flash has an independently documented 1M advertised window, but no retrieval test or confirmed free-lane full-window support.
- **Multimodal: 83/100.** Official card lists image/video/audio/text inputs and text output; AA independently confirms text/image only, and free gateway parity is not established.
- **Coding: 84/100.** Vendor DeepSWE 67.9% and Terminal-Bench 4.0 28.8% support useful coding, capped by lack of independent matching harness results and no free-lane evaluation.
- **Cost efficiency: 100/100.** OpenCode documents a temporary $0 tier; caveat: model-improvement data use and limited-time availability. Paid fallback is also inexpensive.
- **Overall Score: 83/100.** Half-up mean of quality dims 84, 78, 88, 83 and 84 = 83.4; appropriate for budget-sensitive multimodal agents, with serving and benchmark caveats.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-11-03
- Method: Three distinct searches targeted free ID, Xiaomi launch and independent evaluation; cross-checked official Xiaomi checkpoint/pricing, OpenCode free-tier route and privacy, AA base-model measurements and OpenRouter endpoint catalog. Base-checkpoint scores are proxies for the free serving tier, not direct free-endpoint measurements; normalized scores are interpretations.
- Reference URLs:
  - [Xiaomi official MiMo-V2.6-Flash-RL card and benchmark matrix](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [Xiaomi MiMo-V2.6-Flash specification and paid prices](https://mimo.mi.com/models/en-US/mimo-v2.6-flash)
  - [OpenCode Console exact free route, pricing and privacy terms](https://opencode.ai/v2/docs/console/models/#free-models)
  - [Artificial Analysis independent MiMo-V2.6-Flash overview](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [OpenRouter paid Flash provider/endpoint metadata](https://openrouter.ai/api/v1/models/xiaomi/mimo-v2.6-flash/endpoints)
