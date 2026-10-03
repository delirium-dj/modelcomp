# MiMo V2.6 Flash — findings by Ling 3.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`; MIT-licensed open weights)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse-MoE model (released 2026-09-21/22) — 309B total / 15B active parameters, 1M context, tuned for long-horizon agentic coding at a very low $0.14/$0.28 per 1M; the value half of the MiMo V2.6 release (Pro: $0.43/$0.87, 1.02T/42B).
- **Provider / access:** Xiaomi official API (flat rate, no length threshold; cached input $0.0028/M; Token Plan subscriptions in CN/EU/SG), OpenRouter, Deep Infra, Vultr ($0.10/$0.25), Kilo Gateway ($0.07/$0.28), Vercel AI Gateway ($0.04/$1.28); MIT weights for self-hosting. No Zen Free ID for this slug (the Zen free tier lives in `mimo-v2.6-free/`).
- **Release / knowledge:** 2026-09-21/22; knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-flash`.
- **Context window:** 1,048,576 (1M) tokens input / 128K output.
- **Modalities:** text, image, video, audio in; text out.
- **Pricing (as of 2026-10-02):** $0.14/$0.28 per 1M input/output (Xiaomi official); cached $0.0028/M.
- **Architecture:** sparse MoE, 309B total / 15B activated parameters; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.40%** (vals.ai independent Terminus 2 run, 76.40 ± 1.72, pass@1 — the tracked independent score) / **87.6%** (Xiaomi model card, no effort tier stated; vendor figure, 11.2 points higher)
- Toolathlon-Verified: **73.6%** (Xiaomi card; toolathlon.xyz listed only MiMo V2.5 when checked)
- OSWorld-Verified (computer use): **80.8%** (#9 of 26, 68th percentile)
- AutomationBench v1.0.6: **52.3%** (#2 of 5); JobBench: **61.2%** (#2 of 2)
- Agents' Last Exam: **27.6%** (Xiaomi card, split not stated; snorkel.ai listed only MiMo V2.5)
- Terminal-Bench 4.0: **28.8%** (#13 of 20); Program Bench: **26.0%** (#9 of 12)
- SEC-bench Pro: **47.5%** (#7 of 7)
- Claw-Eval / ClawProBench / GDPval-AA / MCP Atlas: no verified public score found

Reasoning / knowledge:

- Intelligence Index: **37.9** (OpenRouter comparison vs MiniMax M3's 29.2; no Artificial Analysis page existed for this model on 2026-09-22 — treat as low-confidence)
- LMArena Text: **1458** (#30 of 218); LMArena Text Factuality: **1459** (#37); LMArena Text Style Control: **1454** (#53)
- GPQA Diamond / HLE / FrontierMath / MathArena: no verified public score found (not listed on arcprize.org/matharena.ai/livebench.ai when checked)

Coding:

- DeepSWE 1.1: **67.9%** (Xiaomi card) / **65.7%** (Xiaomi announcement's RL after-training endpoint, up from 48.8 pre-training) — two conflicting official numbers, neither independently confirmed; deepswe.datacurve.ai did not list this model
- CyberGym: **95.1%** (#1 of 20); MiMo Visual Coding: **71.5%** (#2 of 2); MiMo Coding Bench: **61.2%** (#4 of 4)
- ExploitBench: **25.3%** (#8 of 8); ExploitGym: **6.0%**
- LiveCodeBench / SWE-bench Verified / SWE-bench Pro / SciCode / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M-token window; no MRCR / RULER / GraphWalks / LCR score published
- LMArena Vision: **1265** (#36 of 115); LMArena Vision Style Control: **1253** (#38)

### Normalized scores (1–100)

- **Tool use: 76/100.** The independent vals.ai Terminal-Bench 2.1 run of 76.4% (not the vendor's 87.6%) sits between the mid band and the 88% frontier bar, with Toolathlon-Verified 73.6% and OSWorld-Verified 80.8% corroborating; AutomationBench 52.3%, Agents' Last Exam 27.6% and Terminal-Bench 4.0 28.8% cap the score.
- **Reasoning: 62/100.** LMArena Text 1458 (#30 of 218) and Factuality 1459 are mid-upper-tier, but the only composite intelligence signal is a low-confidence Intelligence Index of 37.9 (vs the 59–61 frontier); no GPQA/HLE/MathArena score exists to verify raw reasoning.
- **Context window: 95/100.** 1M-token window (128K output); no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 92/100.** text/image/video/audio in with text out — the +audio-in band (90–100); LMArena Vision 1265 (#36) is a mid-tier corroboration.
- **Coding: 78/100.** DeepSWE 1.1 at 65.7–67.9% (vendor, conflicting figures) sits just under the 74% frontier bar, Terminal-Bench 2.1 76.4% (independent) sits just under the 85% bar, and CyberGym 95.1% (#1 of 20) is an standout niche result; MiMo Coding Bench 61.2% and Program Bench 26.0% cap the score.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M sits at the ~97–99 anchor for ~$0.10/$0.20 models, with $0.0028/M cached input and free MIT-licensed self-hosting as further offsets.
- **Overall Score: 81/100.** (76+62+95+92+78)/5 = 80.6 → 81 — an exceptional price/performance and openness pick (MIT weights, omnimodal, 1M context at $0.14/$0.28), with unverified vendor benchmarks and a weak composite intelligence signal as the caveats.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Xiaomi model page, vals.ai independent Terminal-Bench run, The Model Gap provenance audit, LLMBoard, OpenRouter, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_Flash.md`, using the same headings.
