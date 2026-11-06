# Tencent Hy4 — findings by Mercury 3

- Source: Tencent Hy Team (Hy4)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent Hy4
- **Short description:** Tencent Hy Team's new-generation MoE flagship (official release 2026-11-04, following a Preview on 2026-08-28): 770B total / 49B active, 1M context, open-weight. The official release delivers substantial gains over Preview in agentic capabilities and long-horizon real-world productivity tasks, and introduces visual understanding for the first time.
- **Provider / access:** Open weights; API via Tencent/Hunyuan surfaces and OpenRouter (`tencent/hy4`).
- **Release / knowledge:** Official release 2026-11-04 (Preview 2026-08-28); knowledge cutoff not published.
- **IDs:** `tencent/hy4`.
- **Context window:** ~1M tokens (1,049K per LM Market Cap).
- **Modalities:** text input; visual understanding introduced at official release (image input); text output; agentic/tool workflows.
- **Pricing (as of 2026-11):** $0.834 in / $2.501 out per 1M (eesel; LM Market Cap lists from $0.42 in across providers).
- **Architecture:** MoE, 770B total / 49B active; open weights.

### Raw benchmarks found

Reasoning / knowledge:

- One of the strongest open-weight models available (vendor), with a notable gap to top proprietary models on research-level math, long-horizon coding, model self-improvement, and advanced visual QA (vendor-stated)
- BenchLM (Preview): 61.57/100 (#49/216); LM Market Cap composite 40/100 (#180)

Agent / tool use:

- "Particularly strong gains in agentic capabilities" at official release; complex tool-use workflows

Coding:

- Open-weight strengths in coding agents; internal gap noted on long-horizon coding vs proprietary

Long context:

- ~1M verified; no independent long-context retrieval benchmark captured

Multimodal:

- Visual understanding introduced at official release (image input), text output

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong official-release agentic gains; independent agent benchmarks pending.
- **Reasoning: 80/100.** Top open-weight class with acknowledged gap to proprietary on hard reasoning.
- **Context window: 92/100.** ~1M verified.
- **Multimodal: 78/100.** Vision newly introduced; text output.
- **Coding: 80/100.** Strong open-weight coder; long-horizon gap to proprietary.
- **Cost efficiency: 68/100.** $0.834/$2.501 API; self-hosting a 770B open model is hardware-expensive.
- **Overall Score: 82/100.** Mean of the five non-cost dims (82+80+92+78+80)/5 = 82.4 → 82. Best-fit: a strong open-weight agentic flagship of late 2026 with newly added vision; verify agent benchmarks as independent coverage matures.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Tencent Hy: Introducing Hy4 (official research page)](https://hy.tencent.ai/research/hy4)
  - [OpenRouter: tencent/hy4](https://openrouter.ai/tencent/hy4)
  - [Artificial Analysis: Tencent Hy4](https://artificialanalysis.ai/models/tencent-hy4)
  - [eesel: Tencent Hunyuan Hy4 specs/benchmarks/pricing](https://www.eesel.ai/blog/tencent-hy4)
  - [eesel: Tencent Hy4 pricing deep-dive](https://www.eesel.ai/blog/tencent-hy4-pricing)
  - [LM Market Cap: Hy4](https://lmmarketcap.com/model/hy4)
  - [BenchLM: Hy4 Preview](https://benchlm.ai/models/hy4-preview)
- Future sources: add a new file next to this one using the same headings.
