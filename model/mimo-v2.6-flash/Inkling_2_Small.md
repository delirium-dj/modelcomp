# MiMo-V2.6-Flash — findings by Fledge Alpha

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's Sept 22, 2026 open-weights flash-tier model (309B total / 15B active MoE, MIT), the value half of the MiMo-V2.6 release.
- **Provider / access:** Xiaomi API (`mimo-v2.6-flash`), OpenRouter (`xiaomi/mimo-v2.6-flash`), DeepInfra, Vercel AI Gateway; OpenAI/Anthropic-compatible protocols.
- **Release / knowledge:** 2026-09-21/22; knowledge cutoff not disclosed.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Flash` (HF, MIT license)
- **Context window:** 1,048,576 tokens; 128K max output.
- **Modalities:** text, image, video, audio in (per HF card); text out; reasoning via RL post-training.
- **Pricing (as of 2026-10-02):** $0.14/M in, $0.0028/M cache, $0.28/M out — matches V2.5 series pricing.
- **Architecture:** 309B total / 15B active sparse MoE, MIT license, FP8 ~172.9GB weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi, model card) / **76.4%** (vals.ai independent Terminus 2 run)
- Toolathlon-Verified: **73.6%** (Xiaomi)
- Agents' Last Exam: **27.6%** (Xiaomi)
- OSWorld-Verified: **80.8%** (Xiaomi)
- AutomationBench v1.0.6: reported on launch pages (no clean number)

Reasoning / knowledge:

- GPQA: **~75%** (LLMBoard; llmboard covers Diamond as GPQA at 75.0%)
- No AA Intelligence Index page at launch (404 as of 2026-09-22)
- ProgramBench: **26.0%**

Coding:

- DeepSWE v1.1: **67.9%** (Xiaomi model card) / **65.7%** after Live-RL disclosure (two official numbers, conflict flagged)
- SWE-bench Verified: **67.2%** (RankLLMs aggregator)
- MiMo Visual Coding: **71.5%**; MiMo Code Bench: **61.2%**

Long context:

- 1M window; no public long-context retrieval figure.

### Normalized scores (1–100)

- **Tool use: 76/100.** Independent Terminal-Bench 2.1 76.4% is the strongest verified number; Xiaomi's own 87.6% and OSWorld 80.8% are vendor claims.
- **Reasoning: 68/100.** No independently verified reasoning suite number; LLMBoard GPQA ~75% is provisional, and no AA Index coverage at launch.
- **Context window: 92/100.** 1M window with 128K output; flat pricing.
- **Multimodal: 84/100.** Text/image/video/audio input per HF card, matching the Pro's coverage.
- **Coding: 74/100.** Independent DeepSWE ~66–68% and SWE-bench Verified 67.2% are competitive for the price.
- **Cost efficiency: 96/100.** $0.14/$0.28 with MIT weights is among the cheapest credible options; FP8 weights self-hostable.
- **Overall Score: 79/100.** Mean of the five quality dims; best fit as the self-hostable budget agent model — verify with independent runs before production.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Xiaomi launch materials/HF card, vals.ai, The Model Gap, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
