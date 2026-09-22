# Kimi K3 — findings by Mimo v2.6 Flash

- Source: Moonshot AI/`kimi-k3`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship 2.8T-parameter sparse MoE (released 2026-07-16; open weights 2026-07-27) with native vision and 1M context; first open-weight model to lead several agentic coding benchmarks (SWE-Marathon, ProgramBench) alongside closed-frontier TB2.1 scores.
- **Provider / access:** Moonshot/Kimi API `kimi-k3` (OpenAI-compatible Chat Completions); OpenRouter `moonshotai/kimi-k3`; Together AI; self-host via open weights (Kimi K3 License / Modified MIT per sources).
- **Release / knowledge:** 2026-07-16 (API) / 2026-07-27 (weights); knowledge cutoff not disclosed.
- **IDs:** `kimi-k3` (Moonshot); `moonshotai/kimi-k3` on gateways.
- **Context window:** 1,048,576 tokens; max output 131,072 default (up to 1,048,576 per some specs).
- **Modalities:** text + vision in (MoonViT-V2 401M encoder); text out; thinking always on at launch (`reasoning_effort=max`); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** $3.00 cache-miss in / $0.30 cache-hit in / $15.00 out per 1M; flat across full 1M (no long-context surcharge). Paid API; weights free to self-host (hardware cost only).
- **Architecture:** sparse MoE — 2.8T total, ~104B active (16/896 experts + 2 shared), KDA + AttnRes + Stable LatentMoE; MXFP4/MXFP8 QAT.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot HF card, Kimi Code harness, max effort; ~0.5 behind GPT-5.6 Sol 88.8)
- GDPval-AA v2: **1686 Elo** (Moonshot table)
- BrowseComp: **91.2%** (with 300K compaction) / **90.4%** (full 1M, no compaction)
- MCP Atlas: **84.2%** (Moonshot)
- Automation Bench: **30.8%** (Moonshot)
- Toolathlon Verified: **72.5%** (Moonshot)
- OSWorld: no verified public score found (OSWorld-Verified not in K3 tables read)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot; highest published open-weight at release)
- Humanity's Last Exam Full: **43.5%** (Moonshot; Fable 5 53.3)
- HLE with tools: **56.2%** (Moonshot table via AI/TLDR)
- Artificial Analysis Intelligence Index: **59.7** / Coding 76.2 / Agentic 54.3 (AA 2026-08-28)
- AAAI long-context reasoning: **89%** (Opper composite citation)
- CritPt / LCR: no verified public score found

Coding:

- DeepSWE: **67.5%** (KimiCode) / 67.3% (mini-SWE-agent)
- SWE-Marathon: **42.0%** (leads Fable 5 35.0, Sol 39.0)
- ProgramBench: **77.8%** (leads displayed field)
- FrontierSWE: **81.2%** (behind Fable 5 86.6)
- SWE-bench Verified: **67.5%** vendor-labeled on HokAI (aligns with DeepSWE figure — treat as same band; Modelglass's 93.4% not corroborated)
- LiveCodeBench: no verified public score found

Long context:

- 1M window (Cloudflare/Moonshot); no MRCR/GraphWalks row for K3 — long-context retrieval: no verified public score found (AA long-context reasoning composite 89% as proxy).

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.3% (near-frontier), GDPval 1686, BrowseComp 91.2, MCP 84.2; capped by missing OSWorld/Tau3/Claw and GDPval below 1750+ frontier bar.
- **Reasoning: 90/100.** GPQA 93.5% (open-weight leader), AA Index 59.7, HLE-tools 56.2; capped by HLE-Full 43.5 (~10 pts behind Fable 5).
- **Context window: 95/100.** 1M documented with KDA designed for full-window recall; no public ≥98% MRCR at 512K+ → 95.
- **Multimodal: 65/100.** Native text + vision (MMMU-Pro 81.6, OmniDocBench 91.1); no video/audio/non-text out → 60–70 band.
- **Coding: 93/100.** TB2.1 88.3, SWE-Marathon 42.0 #1, ProgramBench 77.8 #1, DeepSWE 67.5 solid; capped by DeepSWE/FrontierSWE behind Fable/Sol on single-shot hard SWE.
- **Cost efficiency: 60/100.** $3/$15 maps exactly to the methodology's $3/$15 ≈ 60 anchor; $0.30 cache-hit helps long agent loops but output-heavy reasoning still bills at $15.
- **Overall Score: 87/100.** Mean of five quality dims (92+90+95+65+93)/5 = 87.0 → 87. Best-fit: open-weights 1M agentic coding with cheap cache locality; route hardest single-shot HLE/DeepSWE work to Fable/Sol-class models.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Moonshot/Benchgen/SeaWork/Opper/HokAI/whatLLM/Pondero/AA); scores are normalized 1–100 interpretations, not official vendor scores; many raw rows are Moonshot self-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
