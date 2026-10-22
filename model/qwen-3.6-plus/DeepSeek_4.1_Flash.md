# Qwen 3.6 Plus — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen3.6 Plus (`qwen/qwen3.6-plus`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: official/Qwen rows — Terminal-Bench 2.0 **61.6%**, TB 2.1 53.18% (Vals) / 61% (Together), τ²-bench **97.7%**, τ³-bench 70.7%, Toolathlon 39.8%, MCP Atlas 48.2%, Claw-Eval 58.8%, WideResearch 74.3%; GPQA Diamond **88.2–90.4%**, HLE 27.8% / **50.6% with tools**, MMLU-Pro 88.5%, AIME26 95.3%, IFEval 94.3%, IFBench 75.2%; **SWE-bench Verified 78.8%** (official) / 73.40% (Vals), SWE-bench Pro 56.6%, LiveCodeBench v6 **87.1%** / 85.95% (Vals), AA Coding Index 54.5%, Vibe Code Bench 25.56%; MMMU 86.0%, **MMMU-Pro 78.8%** / 84.16% (Vals), **VideoMMMU 84.0%**; AA-LCR 78.3%, LongBench v2 62%. Independent: AA Intelligence Index **27 (#109/219)**, Vals AI 49.36% accuracy (#17, index 58.8%), BenchLM overall 53.39 (#79/891).
> **Conflicts surfaced:** (1) **Multimodal** — the prior file said text+image; Artificial Analysis and Together both list **text + image + video** input, which moves it into the `+video/PDF in` band. (2) **GDPval-AA** — 1363 Elo (RankedAGI) vs 1066 Elo / 24.5% (AA) vs 32% (Together). (3) **TB 2.1** 53.18% (Vals) vs 61% (Together). (4) **Context** 1M vs 984k (Vals). (5) **Release** Apr 2 (AA/Vals/OpenRouter) vs Mar 31 (LLM-Stats). Benchable reports all-zero rows (eval failure, not model weakness).
> **Adjusted dimension:** Multimodal 68→80 (video input confirmed); Overall 80 → **83**.
> Sources: https://artificialanalysis.ai/models/qwen3-6-plus · https://benchlm.ai/models/qwen3-6-plus · https://www.vals.ai/models/alibaba_qwen3.6-plus · https://www.together.ai/models/qwen36-plus

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's flagship commercial API model of the Qwen3.6 series — a hybrid linear-attention + sparse-MoE architecture with major gains over 3.5 in agentic coding, front-end ("vibe") development and overall reasoning.
- **Provider / access:** Alibaba Cloud / DashScope and OpenRouter (OpenAI-compatible); also Together AI and Benchable. Proprietary, no open weights for the Plus SKU.
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not separately published.
- **IDs:** `qwen/qwen3.6-plus` (OpenRouter), `qwen3.6-plus` (Alibaba); OpenCode Zen `opencode/qwen-3.6-plus`. No Zen Free ID.
- **Context window:** 1,000,000 tokens (OpenRouter/AA; Vals records 984k); max output **65,536** (LLM-Stats).
- **Modalities:** text, image **and video** in; text out (AA/Together). Reasoning yes (always-on thinking, `preserve_thinking`), tool use, prompt caching.
- **Pricing (as of 2026-10-11):** **$0.50 / $0.05 cached / $3.00 per 1M** (AA/LLM-Stats/Together); OpenRouter lists $0.325/$1.95.
- **Architecture:** hybrid linear-attention + sparse MoE built on the Qwen3.5-Plus foundation; parameter count not disclosed (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (official); TB 2.1 53.18% (Vals) / 61% (Together)
- τ²-bench Telecom: **97.7%** (AA); τ³-bench 70.7%; Toolathlon 39.8%; MCP Atlas 48.2%; MCP-Tasks 74.1%
- Claw-Eval 58.8%; WideResearch 74.3%; VITA-Bench 44.3%; GDPval-AA 24.5–32% / 1066–1363 Elo (spread)
- ClawProBench / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.2% (AA) / 90.4% (official)** / 87.37% (Vals); HLE 27.8% / **50.6% with tools**; MMLU-Pro 88.5%
- AIME26 95.3%; MMLU-Redux 94.5%; C-Eval 93.3%; SuperGPQA 71.6%; IFEval 94.3%; IFBench 75.2%
- Artificial Analysis Intelligence Index **27** (v4.3.2); AA-Omniscience accuracy 26.4% / hallucination 34.6%; CritPt 2.9%

Coding:

- SWE-bench Verified: **78.8%** (official) / **73.40%** (Vals); SWE-bench Pro 56.6%; SWE Multilingual 73.8%
- LiveCodeBench v6 **87.1%** (official) / 85.95% (Vals); AA Coding Index 54.5%; Vibe Code Bench 25.56%; Code Arena 1462 Elo

Long context:

- AA-LCR **78.3%**; LongBench v2 62%; AI-Needle 68.3%; no MRCR/RULER retention curve published.

Multimodal:

- MMMU **86.0%**; MMMU-Pro 78.8% (official) / 84.16% (Vals); MathVision 88.0%; VideoMMMU **84.0%**.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 97.7%, TB 2.0 61.6% and τ³ 70.7% are strong, but the GDPval-AA spread (24.5–32%) is low and TB 2.1 varies 53–61%; upper-mid band.
- **Reasoning: 80/100.** GPQA 88–90% and AA-LCR 78.3% are strong; HLE 27.8%, CritPt 2.9% and an AA index of 27 hold it out of the frontier band.
- **Context window: 95/100.** 1.0M-token window (984k measured) is the ≥1M tier; held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 80/100.** Text + image + video in → text out is the `+video/PDF in = 75–90` band (raised from 68, which assumed image-only), backed by MMMU 86.0% and VideoMMMU 84.0%; no audio and no non-text output keep it below the top.
- **Coding: 80/100.** SWE-bench Verified 78.8%/73.4%, SWE-bench Pro 56.6% and LiveCodeBench 87.1% are firmly upper-mid; capped by the Coding Index 54.5 (below 70+) and Vibe Code Bench 25.56%.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M with a 90% cache discount undercuts the $0.60/$2.20 (~92) reference on a 1M-context multimodal model.
- **Overall Score: 83/100.** (78 + 80 + 95 + 80 + 80) / 5 = 82.6 → 83. Best fit: high-volume multimodal agentic coding and front-end generation with a 1M window at low cost.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (Artificial Analysis, BenchLM, Vals AI, Together AI, OpenRouter, RankedAGI). Independent rows were promoted over the prior OpenRouter-only table; the video-input modality correction and the GDPval/TB2.1 spreads are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7.md`, using the same headings.
