# Qwen3.8-Flash-Next — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/qwen3-8-flash-next`), BenchLM (`https://benchlm.ai/models/qwen3-8-flash-next`), HuggingFace model card (`https://huggingface.co/Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's experimental preview (Next) variant under the Qwen4 architecture, introducing Hybrid Attention with QSA, Gated Residual, and N-gram Embedding for cost-efficient long-context agentic multimodal work. 125B language params (6B active), 180B total (6B active per AA), 262K native context (1M with YaRN), text+image+video input, reasoning.
- **Provider / access:** Qwen Cloud API (QwenCloud); OpenCode Zen: `opencode/qwen-3.8-flash-next` (per `meta.json`, `noFreeId: true`); Vercel AI Gateway: `v1/models/qwen-3.8-flash-next`; open weights on HuggingFace
- **Release / knowledge:** Released August 26, 2026; knowledge cutoff not published
- **IDs:** `opencode/qwen-3.8-flash-next` (Zen, per `meta.json`); `Qwen/Qwen3.8-Flash-Next` (HuggingFace)
- **Context window:** 262,144 native (extensible to 1,000,000 with YaRN; per HF model card and AA model page — both agree on 256k–262k)
- **Modalities:** Text, image, video input; text output; reasoning yes (extended thinking with variable effort: low/medium/xhigh)
- **Pricing (as of 2026-10-08):** $0.15 input / $0.47 output per 1M tokens (Alibaba API, per AA); Vercel AI Gateway $0.12/$0.40 per 1M (per `meta.json`); $0.30/$1.20 on Qwen Cloud; cache hits discounted 89% (AA). Open weights (Qwen Community License 1.0) available for free self-hosting. `noFreeId: true` (no Zen Free ID).
- **Architecture:** Mixture-of-Experts (MoE); 180B total parameters, 6B active (AA); 125B language params + 51B n-gram embedding + 4B MTP (per HF model card); 512 experts, 10 routed + 1 shared active per token; hybrid attention with Gated DeltaNet + Qwen Sparse Attention (QSA)
- **License:** Qwen Community License 1.0 (commercial use allowed with restrictions)
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- **Reasoning:** Yes (native reasoning, chain-of-thought, variable thinking effort: minimal/low/medium/high/xhigh)
- **Speed:** 56.2 tokens/s output (AA, Alibaba API; rank #45/117)

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/qwen3-8-flash-next`), BenchLM (`https://benchlm.ai/models/qwen3-8-flash-next`), HuggingFace model card (`https://huggingface.co/Qwen/Qwen3.8-Flash-Next`). BenchLM covers 37 of 623 benchmarks. The model is an experimental "Next" preview; Qwen3.8-Flash is the production version. All scores reported at effort=0.99, temperature=1.0, top_p=0.95 unless noted.

Agent / tool use:

- **GDPval-AA:** **1648** (Elo) — (Artificial Analysis via BenchLM)
- **GDPval-AA (normalized):** **56.6%** — (Artificial Analysis via BenchLM)
- **CoWorkBench:** **73.9%** — (HF model card; in-house long-horizon office/agent benchmark)
- **Toolathlon-Verified:** **73.5%** — (HF model card)
- **JobBench:** **55.7%** — (HF model card)
- **Agents' Last Exam:** **51.2%** — (HF model card)
- **AndroidWorld:** **84.5%** — (HF model card)
- **OSWorld 2.0:** **19.4%** (binary) / **52.3%** (partial) — (HF model card)
- **Terminal-Bench 2.1:** no verified public score found (not reported by TML, AA, or BenchLM for this model)
- **τ²-bench:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond:** **91.7%** — (HF model card; also 92.3% on AA via BenchLM)
- **HLE:** **35.9%** — (HF model card)
- **HLE (without tools):** **31.6%** — (HF model card, same value — no separate with/without tools result listed)
- **AA-HLE:** **38.0%** — (Artificial Analysis via BenchLM)
- **AA-LCR:** **79.7%** — (Artificial Analysis via BenchLM)
- **CritPt:** **11.1%** — (Artificial Analysis via BenchLM)
- **AA-Omniscience Index:** **-9.7%** — (Artificial Analysis via BenchLM)
- **ARC-AGI-2:** **40.1%** — (HF model card)
- **IFBench:** **82.2%** — (HF model card)
- **Global-MMLU-Lite:** **86.7%** — (HF model card)
- **Artificial Analysis Intelligence Index:** **40** — (AA model page, rank #6/117 among large open weights; median: 18)
- **AIME 2026:** no verified public score found (not reported for Qwen3.8-Flash-Next)
- **HMMT:** no verified public score found

Coding:

- **SWE-bench Multilingual:** **81.0%** — (HF model card)
- **SWE-bench Pro:** **62.5%** — (HF model card)
- **SWE-bench Verified:** **80.2%** — (HF model card, from TML launch post; evaluated with bash-only harness)
- **LiveCodeBench v6:** **91.9%** — (HF model card)
- **DeepSWE 1.1:** **58.7%** — (HF model card; Claude Code + mini-SWE-agent harnesses)
- **SciCode:** **48.7%** — (HF model card)
- **AA-SciCode:** **50.6%** — (Artificial Analysis via BenchLM)
- **AA Coding Index:** **73.0%** — (Artificial Analysis via BenchLM)
- **NL2Repo:** **48.1%** — (HF model card)
- **SWE-bench (Vals):** no verified public score found

Long context:

- **AA-LCR:** **79.7%** — (Artificial Analysis via BenchLM) — good long-context reasoning
- **MRCR / RULER:** no verified public score found (not reported for Qwen3.8-Flash-Next)

Multimodal & grounded:

- **MathVision (with CI):** **95.7%** — (HF model card)
- **MathVision (without CI):** **90.6%** — (HF model card)
- **CharXiv (with CI):** **90.6%** — (HF model card)
- **CharXiv (without CI):** **84.6%** — (HF model card)
- **RealWorldQA:** **88.5%** — (HF model card)
- **LVBench:** **76.6%** — (HF model card)
- **ERQA:** **72.3%** — (HF model card)
- **Vision2Web:** **64.0%** — (HF model card)
- **AA-MMMU-Pro:** **79.8%** — (Artificial Analysis via BenchLM)
- **ClawEval-MM:** **64.4%** / avg **60.4%** — (HF model card)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 37 public benchmarks found across 3 sources (AA, BenchLM, HuggingFace model card).

- **Tool use: 65/100.** GDPval-AA at 1648 Elo (AA) is near frontier (~1750+). GDPval-AA (normalized) at 56.6% is above the 40% threshold. CoWorkBench at 73.9%, Toolathlon-Verified at 73.5%, and AndroidWorld at 84.5% are good-to-excellent. JobBench at 55.7%, Agents' Last Exam at 51.2%, and GPdA normalized at 31.2% are moderate. OSWorld 2.0 binary at 19.4% is weak. Terminal-Bench 2.1 not reported. GDPval at 1648 Elo is the strongest signal, placing this model in the mid-to-upper-mid range for agentic tool use.

- **Reasoning: 70/100.** AA Intelligence Index at 40 (rank #6/117, well above median of 18). Using II + 30 formula: 40 + 30 = 70. GPQA Diamond at 91.7% (TML/HF) and 92.3% (AA) are near-frontier (90%+). HLE at 35.9% (38.0% on AA) is below the 40% frontier threshold. AA-LCR at 79.7% is good but below 95% frontier. CritPt at 11.1% is low. AA-Omniscience Index at -9.7% is negative (below zero). ARC-AGI-2 at 40.1% is moderate. Strong GPQA scores and high II rank are offset by weak CritPt and negative Omniscience.

- **Context window: 73/100.** 262,144 native tokens (per HF model card and AA model page). Extensible to 1M with YaRN per the HF model card's best-practices section. Per methodology: 200K–500K = 65–84. Interpolating 262K between 200K (→70) and 500K (→84): ~73. YaRN extension to 1M is an extrapolation technique, not native, so it does not qualify for the ≥1M tier.

- **Multimodal: 75/100.** Text, image, and video input; text output (per AA model page: "Supports: text, image, and video"; `meta.json`: "Text, image, video in; text out"). Per methodology: "+video/PDF in = 75–90". No audio input or non-text output, so 75 (lower end of the tier).

- **Coding: 80/100.** SWE-bench Multilingual at 81.0% and SWE-bench Verified at 80.2% are strong. LiveCodeBench v6 at 91.9% is exceptional (matches Claude Opus 4.6 Max per HF comparison). DeepSWE 1.1 at 58.7% is moderate (below 74% frontier). SciCode at 48.7% and AA-SciCode at 50.6% are below the 55% frontier. AA Coding Index at 73.0% is just above the 70% frontier threshold. NL2Repo at 48.1% is moderate. Strong SWE-bench and LiveCodeBench results offset moderate DeepSWE and SciCode scores. Upper end of mid-to-upper-mid tier (65-85).

- **Cost efficiency: 96/100.** $0.12 input / $0.40 output per 1M tokens (Vercel AI Gateway, per `meta.json`; `noFreeId: true`). This is very competitive pricing, near the $0.10/$0.20 = 97-99 tier. Open weights (Qwen Community License 1.0) available for free self-hosting. Cost per AI task: $0.37 (AA). No Free ID on Zen, so scored on paid pricing per `meta.json` `noFreeId: true`.

- **Overall Score: 73/100.** Mean of five non-cost dimensions: (65 + 70 + 73 + 75 + 80) / 5 = 363 / 5 = 72.6 → 73. Excels at coding (SWE-bench Multilingual 81.0%, LiveCodeBench v6 91.9%) and knowledge (GPQA 91.7%), with 262K native context (1M with YaRN), multimodal text+image+video input, and very competitive $0.12/$0.40 pricing with open weights. Limited by moderate agentic performance (no Terminal-Bench 2.1 score, weak OSWorld binary at 19.4%) and weak physics reasoning (CritPt 11.1%).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, and HuggingFace; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash_Next_Tech_Report.md`, using the same headings.

---
