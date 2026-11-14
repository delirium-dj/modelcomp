- Source: Ant Group/Ling-3.0-flash-VL
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL
- **Short description:** Ant Group's 2026-09-09 first natively multimodal Bailing-series open model, built on Ling-3.0-flash's MoE with a visual feedback closed loop ("observe → act → verify → correct"). A distinct model; `ling-3.0-flash`, `ling-3.1-flash`, `ling-3.2-flash` and `ling-3.0-tiny` are separate, and `ling-3.0-flash-vl` must not be confused with mirror-routed `*-fin`/`*-sante` domain trees.
- **Provider / access:** Ling Studio (free trial); BF16 and FP8 open weights on Hugging Face and ModelScope.
- **Release / knowledge:** 2026-09-09; knowledge cutoff: no verified public score found.
- **IDs:** `ling-3.0-flash-vl`. No free Zen ID verified.
- **Context window:** **256,000 tokens**.
- **Modalities:** **image, text and video in; text out**; medical-report interpretation, front-end code generation, GUI automation with iterative self-correction. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** free open weights; no API rate card in the retrieved page — no verified public price found.
- **Architecture:** MoE, **124B total / 5.5B active** parameters (the text-only Ling-3.0-flash activates 5.1B — lineage figure, reported separately). Visual feedback closed loop. Open weights.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.1.1: **+4 points** over the pure-text Ling-3.0-flash version (relative delta, no absolute score)
- Visual feedback closed loop for continuous result correction in GUI automation and front-end generation (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index (absolute) / Omniscience: no verified public score found

Coding:

- Front-end code generation with visual verification (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K window with long-document and long-video handling (directional); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** A genuine observe→act→verify→correct visual feedback loop, GUI automation and a +4 AA index gain over the text-only base; capped by no scored agent harness.
- **Reasoning: 80/100.** Verified-loop reasoning with a 4-point index gain; capped by no absolute reasoning benchmark score.
- **Context window: 87/100.** 256K context for long documents and videos at 5.5B active params; capped by no retrieval benchmark.
- **Multimodal: 89/100.** Native image, text and video input with visual self-verification; capped by text-only output, no verified audio input, and no published multimodal benchmark score.
- **Coding: 81/100.** Front-end code generation with visual verification; capped by zero published coding benchmark scores for this exact ID.
- **Cost efficiency: 95/100.** Free BF16/FP8 open weights with only 5.5B active params and a free Ling Studio trial. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 85, 80, 87, 89, 81 = 84.4 → 84. Best fit: self-hosted visual GUI/front-end agents that benefit from iterative self-correction on modest hardware.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Ling-3.0-flash-VL article retrieved via public web search excerpt (release, 124B/5.5B MoE, 256K context, three input modalities, visual feedback loop, AA index +4, open weights, Ling Studio), plus the Baidu Baike Ling-3.0-flash excerpt for the text-base 5.1B active figure — labelled lineage. Secondary CSDN coverage of 256K long-document/video handling is labelled directional. No absolute benchmark scores were published in the retrieved excerpts, so those rows are honestly marked "no verified public score found". Domain-routed `ling-3.0-flash-fin` / `ling-3.0-flash-sante` live in `models_finance/` / `models_health/` and are never placed under `model/`. Rows without verified figures are marked accordingly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Ling-3.0-flash-VL — 百度百科 (retrieved via search excerpt; specs, AA +4, visual loop)](https://baike.baidu.com/item/Ling-3.0-flash-VL/68949506)
  - [Ling-3.0-flash — 百度百科 (retrieved via search excerpt; text-base lineage)](https://baike.baidu.com/item/Ling-3.0-flash/68358537)
