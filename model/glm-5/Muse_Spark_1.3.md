# GLM 5 — findings by Muse Spark 1.3

- Source: Z.ai/GLM 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5
- **Short description:** Z.ai's 744B/40B-active MIT open-weight MoE with DeepSeek Sparse Attention, trained on 28.5T tokens — base of the GLM-5.x line for text-only agentic coding.
- **Provider / access:** Z.ai API + Novita/GMI/DeepInfra (FP8); Hugging Face `zai-org/GLM-5`; OpenCode Zen `opencode/glm-5`.
- **Release / knowledge:** 2026-02-11 (HF createdAt + AA article 2026-02-11); cutoff not disclosed
- **IDs:** `opencode/glm-5` (state explicitly: no Free ID exists on Zen)
- **Context window:** 200,000 total / 128,000 max output — verified via AA article + repo metadata
- **Modalities:** text in; text out only; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-17):** AA median $1.00 in / $3.20 out per 1M (Novita/GMI $1/$3.2, DeepInfra $0.8/$2.56); MIT self-host free; paid on Zen
- **Architecture:** 744B total / 40B active MoE + DeepSeek Sparse Attention, BF16 (~1.5TB); MIT license

### Raw benchmarks found

Agent / tool use:

- AA Intelligence Index: **50 (v4.0, Feb 2026)** (AA article — open-weights leader then, +8 over GLM-4.7 42); benchgap lane **27.9 measured** (v4.3 scale — version differs, both listed)
- GDPval-AA: **1412 Elo** (AA article — 3rd overall, below Opus 4.6/GPT-5.2 xhigh); benchgap est lane 25.8% scale differs — provisional
- Terminal-Bench 2.0: **56.2% measured** (benchgap); TB2.1 Vals-AI lane **49.2% est.** (benchgap est.)
- Tau2-bench: **98.2% measured** (benchgap — standout lane)
- Tau3-banking: **65.6% measured** (benchgap Tau3 lane); AA-Tau3-Banking **19.1% est.** (different harness — both listed)
- BrowseComp: **62.0% measured** (benchgap)
- MCP Atlas: **31.1% measured** (benchgap — weak lane); MCP-Tasks **60.8% measured** (benchgap)
- Claw-Eval: **57.7% measured** (benchgap); QwenClawBench **54.1% measured** (benchgap)

Reasoning / knowledge:

- GPQA Diamond: **86.0% measured** (benchgap; AA-GPQA 82.0% lane — measured taken)
- HLE: **30.5% measured** (benchgap; AA-HLE 29.3% — consistent); HLE with tools: **50.4% measured** (benchgap)
- AA-LCR: **75.7% measured** (benchgap)
- CritPt: **2.0% measured** (benchgap — weak lane)
- AA-Omniscience Accuracy: **26.3% measured** (benchgap; AA article: -1 index, lowest hallucination, abstains more)
- MMLU-Pro: **85.7% measured** (benchgap); SuperGPQA **66.8% measured** (benchgap)
- AIME26: **95.8% measured** (benchgap)

Coding:

- SWE-bench Verified: **77.8% measured** (benchgap)
- SWE-bench Pro: **55.1% measured** (benchgap)
- SWE Multilingual: **73.3% measured** (benchgap); SWE-Rebench **62.8% measured** (benchgap)
- LiveCodeBench v6: **86.1% estimated** (benchgap est. high confidence — provisional)
- SciCode: **47.2% estimated** (benchgap est. high confidence — provisional)
- DeepSWE: **31.8% estimated** (benchgap est. low confidence — provisional)
- Vibe Code Bench: **27.7% estimated** (benchgap est. — provisional)
- Toolathlon: **38.0% measured** (benchgap)

Long context:

- **200K verified; MRCRv2 84.6% estimated (benchgap est. low confidence — provisional); LongBench v2 60.8% measured**

### Normalized scores (1–100)

- **Tool use: 74/100.** Tau2 98.2% + Tau3 65.6% plus GDPval 1412 Elo (3rd overall) and TB2.0 56.2%; capped by MCP Atlas 31.1% weakness and BrowseComp 62.0%.
- **Reasoning: 80/100.** GPQA 86.0% plus LCR 75.7%, HLE-tools 50.4%, AIME26 95.8%, lowest-hallucination abstention; capped by CritPt 2.0% and HLE-no-tools ~30%.
- **Context window: 68/100.** 200K / 128K out verified; mid tier below 256K–1M models.
- **Multimodal: 15/100.** Text in/out only (AA confirms); no image/video/audio.
- **Coding: 82/100.** SWE-Verified 77.8% plus SWE-Pro 55.1%, Multilingual 73.3%, Rebench 62.8%, LiveCode ~86% est.; capped by DeepSWE ~32% est. and Vibe ~28% est.
- **Cost efficiency: 70/100.** $1.00/$3.20 median plus MIT self-host free; paid on Zen so below open-free 90s.
- **Overall Score: 64/100.** Mean (74+80+68+15+82)/5 = 63.8 → 64; best-fit MIT open-weight text coding pick where multimodal 15 caps the mean.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (AA GLM-5 article 2026-02-11, benchgap measured lane, HF zai-org/GLM-5 + BenchLM cross-check); normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
