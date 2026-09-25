# Inkling — findings by GLM 5.3 Flash

- Source: Thinking Machines Lab (`thinkingmachines/Inkling`, Apache 2.0 open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (975B MoE; Inkling-Small 276B is a separate sibling, not scored here)
- **Short description:** Thinking Machines Lab's (Mira Murati's startup) first train-from-scratch model — a 975B/41B-active MoE with native text, image and audio reasoning (the only open-weight models taking audio), a 1M-token context and a continuous thinking-effort dial. The pitch is customisation via the Tinker fine-tuning service, not the frontier; the lab itself says it is not the strongest model available.
- **Provider / access:** Apache 2.0 open weights on Hugging Face (`thinkingmachines/Inkling`); no first-party inference API — hosted via Together AI, Fireworks, Modal, Databricks and Baseten (~$1.00/$4.05 per MTok); Tinker fine-tuning service and Tinker Playground. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-15 (Inkling-Small 2026-07-30); knowledge cutoff not disclosed; trained on 45T tokens spanning text, images, audio and video.
- **IDs:** `thinkingmachines/Inkling` (Hugging Face); `Inkling` per partner hosts. No Free ID on Zen.
- **Context window:** 1,000,000 tokens (verified via the model card and theairankings).
- **Modalities:** text, images (four-layer hMLP encoder) and audio (dMel spectrograms) input — native multimodality; text output (no image/audio generation); reasoning yes with a continuous thinking-effort dial (vendor table run at effort=0.99); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** weights free under Apache 2.0 (no licence conditions); hosted ~$1.00 / $4.05 per 1M in/out ($0.34 per index task, Artificial Analysis) — no first-party price list.
- **Architecture:** Mixture-of-Experts 975B total / 41B active (256 routed + 2 shared experts per layer, 6 routed active per token, sigmoid router with auxiliary-loss-free load balancing, sliding-window + global attention at 5:1 ratio); Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- HLE (with tools): **46.0%** (vendor model card at effort=0.99 — a ceiling)
- Terminal-Bench, Tau3, GDPval-AA, MCPAtlas, Claw-Eval: no verified public score found

Reasoning / knowledge:

- AIME 2026: **97.1%** (vendor model card)
- GPQA Diamond: **87.2%** (vendor model card)
- HLE (no tools): **29.7%** (vendor model card; Inkling-Small beats it at 31.6%)
- MMMU Pro: **73.5%** (vendor model card — the multimodal eval most open rivals cannot sit)
- Artificial Analysis Intelligence Index: **42 (xhigh) / 14th of 107** open-weight-class models (median 27; $0.34/task) — independent, Artificial Analysis
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **77.6%** (vendor model card at effort=0.99; Inkling-Small's 80.2% sits in the top open cluster with DeepSeek V4's 80.6, MiniMax M3's 80.5, Kimi K2.6's 80.2)
- SWE-bench Pro: no verified public score found in any harness
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval value verified (1M window claimed; no MRCR/RULER/GraphWalks value found)

### Normalized scores (1–100)

- **Tool use: 68/100.** HLE with tools 46.0% clears the 40% reasoning-with-tools bar, but no Terminal-Bench/Tau3/GDPval agentic numbers were found and the vendor ceiling caveat keeps it in the upper-mid band.
- **Reasoning: 82/100.** AIME 2026 97.1%, GPQA Diamond 87.2% and HLE with tools 46.0% are genuinely strong at maximum effort; the AA Index of 42 is mid-pack among open models and the no-tools HLE 29.7% is low — those cap it.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 90/100.** Native text + image + audio input — the only open-weight model taking audio — with MMMU Pro 73.5%; text-only output and the vendor-effort-0.99 ceiling on vision scores keep it at the bottom of the 90–100 band.
- **Coding: 83/100.** SWE-bench Verified 77.6% (vendor; Small variant at 80.2% is top-open-cluster) is strong, but the missing SWE-bench Pro figure and vendor-only sourcing prevent 85+.
- **Cost efficiency: 90/100.** Free Apache 2.0 weights (cleanest major licence) and hosted ~$1.00/$4.05 per 1M ($0.34/task) sit near the ~$1.25/$4.25 = ~88 methodology reference with free self-hosting as the lever.
- **Overall Score: 84/100.** Mean of the five quality dims (68 + 82 + 95 + 90 + 83) / 5 = 83.6 → 84. Best-fit: self-hosted multimodal (especially audio) work and fine-tuned custom deployments — deploy Inkling-Small unless the 975B knowledge/factuality edge is needed.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (theairankings.com model page with Thinking Machines model-card and Artificial Analysis data, vals.ai, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Inkling.md` variants, using the same headings.
