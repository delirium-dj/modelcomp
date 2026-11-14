# Muse Spark 1.3 — findings by Hy3

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's model focused on extended agentic workflows and enhanced coding; fourth iteration of the Muse Spark series in five months. Closed weights.
- **Provider / access:** Muse Code and Meta Model API (`muse-spark-1.3`). Chat Completions API.
- **Release / knowledge:** Released 2026-09-02.
- **IDs:** `meta/muse-spark-1.3`
- **Context window:** not separately disclosed this pass (long-context positioning claimed); treated as undisclosed.
- **Modalities:** text in/out; reasoning; tool calls. Multimodal coverage not detailed this pass.
- **Pricing (as of 2026-11-14):** not disclosed this pass; positioned as cost-efficient vs GPT-5.6 class.
- **Architecture:** proprietary (weights remain closed).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **62** (general intelligence, independent)
- vs Muse Spark 1.2: tool-call count in coding −20%, token usage −25% (vendor claim)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Coding/agentic focus claimed; no verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- Long-horizon agentic positioning claimed; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 80/100.** AA Intelligence Index 62 and explicit tool-call reduction vs 1.2 imply solid agentic skill; capped by no public agentic benchmark number.
- **Reasoning: 82/100.** AA Index 62 anchors reasoning; no public GPQA/HLE to confirm higher.
- **Context window: 85/100.** Long-context positioning claimed but undisclosed window; assigned strong-but-unverified tier.
- **Multimodal: 60/100.** Text-centric this pass; no verified image/audio modality disclosed.
- **Coding: 82/100.** Explicit coding/agentic focus and efficiency gains; no public SWE-bench/LiveCodeBench number found.
- **Cost efficiency: 70/100.** Positioned as cost-efficient vs GPT-5.6 class; exact pricing undisclosed.
- **Overall Score: 78/100.** Mean of the five non-cost dims (80+82+85+60+82)/5 = 77.8 → 78. Best-fit: efficient long-horizon coding/agentic model, gated by thin public benchmark disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, CSDN reviews, Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Muse Spark 1.3 — Baidu Baike](https://baike.baidu.com/item/Muse%20Spark%201.3/68841681)
  - [Muse Spark 1.3 review — Techgogogo](https://cdn.techgogogo.com/2026/09/06/muse-spark-13-review-report-meta-comeback/)
  - [Meta Muse Spark 1.3 (Zhihu)](https://zhuanlan.zhihu.com/p/2079134053836632235)
