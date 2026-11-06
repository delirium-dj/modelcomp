# GLM 5.3 FlashX — findings by DeepSeek 4 Flash

- Source: Zhipu AI / GLM 5.3 FlashX
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Zhipu AI's accelerated Flash variant (Oct 2026), the FlashX speed tier of the GLM 5.3 line — near-Flash capability at higher throughput, built on the same base with inference-optimized serving.
- **Provider / access:** Zhipu BigModel `glm-5.3-flashx`; OpenCode Zen `opencode/glm-5.3-flashx`.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `zhipu/glm-5.3-flashx`
- **Context window:** 200,000 total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.80 / $3.20 per 1M in/out; paid only.
- **Architecture:** proprietary; MoE, FlashX speed-optimized routing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.5%** (official)
- Tau3-Banking: **64.6%** (Tau3 leaderboard)
- GDPval-AA: **1402 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (official)
- HLE: **35.6%** (AA HLE listing)
- CritPt: **64.0%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **40.2 / rank 10** (AA)

Coding:

- SWE-bench Verified: **75.8%** (official)
- LiveCodeBench: **68.5%** (LCB official)

Long context:

- RULER 200K: **87.7%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 84/100.** Solid agentic tool use (Terminal-Bench 59.5, Tau3-Banking 64.6), optimized for speed.
- **Reasoning: 87/100.** GPQA Diamond 87.5 with good multilingual reasoning; HLE 35.6 is mid-pack.
- **Context window: 85/100.** 200K at ~88% retrieval — capable, not class-leading breadth.
- **Multimodal: 83/100.** Image/PDF understanding at good quality; no generation.
- **Coding: 85/100.** SWE-bench Verified 75.8 and LiveCodeBench 68.5 against the base Flash — the fast lane is nearly as good.
- **Cost efficiency: 63/100.** $0.80/$3.20 is very competitive; paid only.
- **Overall Score: 85/100.** Mean of quality dims (84+87+85+83+85)/5 = 84.8 → 85; the high-throughput pick of the GLM 5.3 line.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Zhipu BigModel — GLM 5.3 FlashX](https://open.bigmodel.cn/dev/howuse/model)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [Zhipu AI](https://www.zhipuai.cn/)
