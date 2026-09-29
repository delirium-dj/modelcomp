# MiMo V2.6 Flash — findings by Pixel Canary

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`), OpenRouter mirror `xiaomi/mimo-v2.6-flash`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (Xiaomi's September 2026 omnimodal Flash tier; **no OpenCode Zen Free ID on this slug** — the $0 Zen tier lives in `mimo-v2.6-free/`)
- **Short description:** An MIT-licensed sparse-MoE (309B total / 15B active) that accepts text, image, video **and audio** through a 1M-token window and is tuned for long-horizon agentic coding: Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8%, CyberGym 95.1% and DeepSWE 67.9% at $0.14 / $0.28 per 1M tokens. Its weakness is honesty/calibration, not capability: 27.0% accuracy against a 54.4% hallucination rate.
- **Provider / access:** Xiaomi MiMo API (`xiaomi/mimo-v2.6-flash`), OpenRouter (`xiaomi/mimo-v2.6-flash`, text+image+video+audio), plus self-hosting from MIT-licensed weights; OpenAI-compatible endpoints with tool calling and structured output.
- **Release / knowledge:** **2026-09-22** (models.dev `release_date`) — one week before this report; knowledge cutoff not published.
- **IDs:** `xiaomi/mimo-v2.6-flash` (repo/vendor), OpenRouter `xiaomi/mimo-v2.6-flash`; the free sibling is `mimo-v2.6-free`, the flagship sibling `mimo-v2.6-pro`.
- **Context window:** **1,048,576 input tokens / 131,072 max output** (models.dev `xiaomi` and OpenRouter both list 1,048,576) — verified from two independent provider indexes. This folder's `meta.json` "1M total" is consistent.
- **Modalities:** Text, image, video and audio in; text out — the widest input surface of any model in this comparison set so far. Reasoning: yes (BenchLM "Reasoning" type). Tool calling and structured output: supported.
- **Pricing (as of 2026-09-29):** **$0.14 / 1M input, $0.28 / 1M output, $0.0028 cached input** on the Xiaomi API and mirrored on OpenRouter — blended 4:1 ≈ $0.168 / 1M, and free to self-host under the MIT licence.
- **Architecture:** open-weight sparse MoE, 309B total parameters / 15B active per token, MIT licence, RL post-trained variant family (`MiMo-V2.6-Pro-RL` is the flagship sibling's card).

### Raw benchmarks found

BenchLM profile `mimo-v2-6-flash` (updated 2026-09-28): **64.06 / 100, rank #34 of 512**, coverage **24 of 486** benchmarks (BenchLM flags the composite as conservative). Family standings: MiMo-V2.6-Pro **74.71 (#9)**, MiMo-V2.6-Flash **64.06 (#34)**, MiMo-V2-Pro **52.5**, MiMo-V2.5-Pro **51.99**, MiMo-V2-Omni **49.22**, MiMo-V2-Flash **39.91**.

Agentic / tool use:

- Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0: **28.80%**
- OSWorld-Verified: **80.8%**; Toolathlon-Verified: **73.6%**
- CyberGym: **95.1%** (best of any model checked for this report), ExploitGym: **6.0%**
- AutomationBench: **52.3%**; JobBench: **61.2%**; Agents' Last Exam: **27.6%**
- GDPval-AA: **55.0%** normalized

Coding:

- DeepSWE: **67.9%** (MiMo-V2.6-Pro 71.9, DeepSeek V4.1-Flash 74.2, Grok 4.6 65.9–67.5)
- ProgramBench: **26.0%**; AA-SciCode: **51.3%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37.9** (Pro sibling 46.3; DeepSeek V4.1-Flash 39.5)
- AA-HLE: **35.1%**; CritPt: **12.0%**
- AA-Omniscience: Accuracy **27.0%**, Hallucination Rate **54.4%**, Omniscience Index **−12.7** — the worst honesty profile among the MiMo family rows

Multimodal / long context:

- AA-MMMU-Pro: **73.1%**
- AA-LCR (long-context reasoning): **74.3%** (MiMo-V2.6-Pro 86.3)
- No MRCRv2 / RULER / GraphWalks row and no video/audio-specific row published for this exact ID, despite the model accepting both inputs


### Normalized scores (1–100)

- **Tool use: 74/100.** Strong measured autonomy for a Flash-class model — OSWorld-Verified 80.8%, Terminal-Bench 2.1 87.6%, Toolathlon-Verified 73.6%, CyberGym 95.1%, JobBench 61.2%, AutomationBench 52.3% — capped because the newest and hardest suites fall away (Terminal-Bench 4.0 28.8%, Agents' Last Exam 27.6%, ExploitGym 6.0%).
- **Reasoning: 52/100.** AA Intelligence Index 37.9 and AA-HLE 35.1% are mid-pack, CritPt 12.0% is weak, and the honesty profile is the worst in this comparison: 27.0% accuracy with a 54.4% hallucination rate (Omniscience Index −12.7) makes it unsafe as an unassisted factual source.
- **Context window: 80/100.** 1,048,576 input / 131,072 output tokens confirmed on two provider indexes, with AA-LCR 74.3% showing the window is usable rather than nominal; capped because no MRCR/RULER/GraphWalks retrieval-depth row exists and the sibling Pro posts 86.3% on the same long-context test.
- **Multimodal: 78/100.** The widest input surface measured here — text, image, video **and** audio, text out — but published multimodal evidence is thin (only AA-MMMU-Pro 73.1%), so the score reflects breadth plus a discount for unverified depth.
- **Coding: 68/100.** DeepSWE 67.9% and Terminal-Bench 2.1 87.6% are genuinely good for $0.28 output, yet ProgramBench 26.0%, Terminal-Bench 4.0 28.8% and AA-SciCode 51.3% place it below MiMo-V2.6-Pro (74.71 overall) and DeepSeek V4.1-Flash on real repository work.
- **Cost efficiency: 92/100.** $0.14 / $0.28 per 1M with $0.0028 cache reads (blended ≈ $0.17) **plus MIT-licensed weights for free self-hosting** — the best absolute value in this report; docked only because this exact slug has no OpenCode Zen Free ID (a $0 Zen tier would be 100).
- **Overall Score: 70.4/100.** (74 + 52 + 80 + 78 + 68) / 5 = 70.4 — an unusually capable, cheap, truly omnimodal open-weight agent base; treat its factual assertions as unreliable and verify them.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `mimo-v2-6-flash` refreshed 2026-09-28, models.dev provider/pricing index for `xiaomi/mimo-v2.6-flash`, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
