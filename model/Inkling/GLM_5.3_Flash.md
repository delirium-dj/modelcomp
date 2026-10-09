# Inkling — findings by GLM 5.3 Flash

- Source: Thinking Machines Lab (`thinkingmachines/Inkling`, Apache 2.0 open weights)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (975B MoE; Inkling-Small 276B is a separate sibling, not scored here)
- **Short description:** Thinking Machines Lab's (Mira Murati's startup) first train-from-scratch model — a 975B/41B-active MoE with native text, image and audio reasoning (the only open-weight models taking audio), a 1M-token context and a continuous thinking-effort dial. The pitch is customisation via the Tinker fine-tuning service, not the frontier; the lab itself says it is not the strongest model available.
- **Provider / access:** Apache 2.0 open weights on Hugging Face (`thinkingmachines/Inkling`); no first-party inference API — hosted via Together AI, Fireworks, Modal, Databricks and Baseten (~$1.00/$4.05 per MTok); Tinker fine-tuning service and Tinker Playground. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-15 (Inkling-Small 2026-07-30); knowledge cutoff not disclosed; trained on 45T tokens spanning text, images, audio and video.
- **IDs:** `thinkingmachines/Inkling` (Hugging Face); `Inkling` per partner hosts. No Free ID on Zen.
- **Context window:** 1,000,000 tokens (verified via the model card and theairankings; benchlm 1M).
- **Modalities:** text, images (four-layer hMLP encoder) and audio (dMel spectrograms) input — native multimodality; text output (no image/audio generation); reasoning yes with a continuous thinking-effort dial (vendor table run at effort=0.99); tool calls; JSON mode.
- **Pricing (as of 2026-10-09):** weights free under Apache 2.0 (no licence conditions); hosted ~$1.00 / $4.05 per 1M in/out — no first-party price list.
- **Architecture:** Mixture-of-Experts 975B total / 41B active (256 routed + 2 shared experts per layer, 6 routed active per token, sigmoid router with auxiliary-loss-free load balancing, sliding-window + global attention at 5:1 ratio); Apache 2.0 license.

### Raw benchmarks found

> Thinking Machines Inkling launch post (official card) via benchlm.ai + AA and Vals rows (updated 2026-10-09); vendor table at effort=0.99 (ceiling). Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (launch post — fills the previously-missing TB row; AA 55.1%, Vals 47.6%; AA Terminal-Bench 4.0: **1.0%** — very weak on the recalibrated board)
- BrowseComp: **77.1%** (launch post — new)
- MCP Atlas: **74.1%** (launch post — new)
- GDPval-AA: **1079 Elo** / 28.9% (AA — fills the previously-missing GDPval row)
- AA Briefcase: **832 Elo** (AA); AA Tau3 Banking: **29.1%**; AA AutomationBench: **5.0%**; AA EnterpriseOps-Gym: 38.0%; AA-AnalystAgent: 23.8%; AA Agentic Index: **24.3%** (AA)
- CWE-bench v1: **37.0%** (Collinear via benchlm.ai)
- GDP.pdf: 12.8% (AA); Design Arena Agentic Web Dev: **1257** / Website: **1228**
- Claw-Eval / Toolathon / SWE Atlas: no verified public score found

Reasoning / knowledge:

- AIME26: **97.1%** (launch post — corroborated)
- GPQA Diamond: **87.9%** (launch post; AA 87.2%, Vals 87.1% — three-way agreement)
- HLE: **46%** with tools / **30%** without (launch post — fills; AA-HLE **31.9%**)
- AA-LCR: **77.3%** (AA long-context-reasoning board — fills the previously-missing LCR); MLCR-AA: **12.2%**; CritPt: **5.4%**
- Artificial Analysis Intelligence Index: **25.0** (AA current reading via benchlm.ai — updates the 2026-09-24 draft's "42 (xhigh) / 14th of 107", which predates the index recalibration)
- AA-Omniscience: Index 2.0, accuracy **41.6%**, hallucination rate **67.7%** (benchlm.ai — poor)
- MMLU-Pro (Vals): **86.3%** (benchlm.ai); IFBench: **79.8%** (launch post)

Coding:

- SWE-bench Verified: **77.6%** (launch post; SWE-bench (Vals) **77.6%** — independent agreement)
- SWE-bench Pro: **54.3%** (launch post — fills the previously-missing SWE-Pro row)
- LiveCodeBench (Vals): **85.5%** (fills the previously-missing LCB row)
- AA-SciCode: **47.0%** (AA — fills the previously-missing SciCode; below the 55%+ frontier mark)
- FrontierSWE v2: **4.1%** (Proximal — weak); AA Coding Index: **52.1%**
- Inkling-Small sibling context: 80.2% SWE-V sits in the top open cluster (DeepSeek V4 80.6, MiniMax M3 80.5, Kimi K2.6 80.2)

Long context:

- AA-LCR **77.3%** measured (fills the previously-missing row); 1M window; no MRCR/RULER/GraphWalks value found

Multimodal / vision:

- MMMU-Pro: **73.5%** (launch post; AA-MMMU-Pro 73.5% — agreement); CharXiv: **82%** / **78.1%** w/o tools (launch post)

### Normalized scores (1–100)

- **Tool use: 72/100.** Now measured: TB2.1 63.8% (AA 55.1%, Vals 47.6%), BrowseComp 77.1%, MCP Atlas 74.1% and GDPval-AA 1079 clear mid-band anchors; AA TB4.0 1.0%, AA AutomationBench 5.0% and AA Agentic Index 24.3% cap it below 80.
- **Reasoning: 82/100.** AIME26 97.1%, GPQA 87.2–87.9% (three-way agreement) and HLE with tools 46% are genuinely strong at maximum effort; the recalibrated AA Index 25.0, no-tools HLE 30% and the 67.7% hallucination rate cap it — mixed evidence balances out at the old score.
- **Context window: 95/100.** 1M tokens (≥1M tier = 95–100) with measured AA-LCR 77.3%; no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 90/100.** Native text + image + audio input — the only open-weight model taking audio — with MMMU-Pro 73.5%; text-only output and the vendor-effort-0.99 ceiling on vision scores keep it at the bottom of the 90–100 band.
- **Coding: 83/100.** SWE-V 77.6% (vendor + Vals agreement), the filled SWE-Pro 54.3% and LCB 85.5%; AA-SciCode 47.0% below the 55%+ mark and FrontierSWE v2 4.1% cap it.
- **Cost efficiency: 90/100.** Free Apache 2.0 weights (cleanest major licence) and hosted ~$1.00/$4.05 per 1M sit near the ~$1.25/$4.25 = ~88 methodology reference with free self-hosting as the lever.
- **Overall Score: 84/100.** Mean of the five quality dims (72 + 82 + 95 + 90 + 83) / 5 = 84.4 → 84. Best-fit: self-hosted multimodal (especially audio) work and fine-tuned custom deployments — deploy Inkling-Small unless the 975B knowledge/factuality edge is needed.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing the Thinking Machines Inkling launch post, AA and Vals boards — official card plus two independent harnesses, conflicts compared; earlier draft via theairankings/vals.ai); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing SWE-Pro 54.3%, LCB 85.5%, TB2.1 63.8%, BrowseComp 77.1%, MCP Atlas 74.1%, GDPval-AA 1079, AA-LCR 77.3%, AA-SciCode 47.0%; updates AA Index 42→25.0 — Tool 68→72, Overall 84 (unchanged).
- Future sources: add a new file next to this one, e.g. `Inkling_2.md`, using the same headings.
