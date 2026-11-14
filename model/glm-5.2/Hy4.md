- Source: Z.ai/GLM-5.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's June 2026 MIT-licensed open flagship, #1 among open models on the Artificial Analysis Intelligence Index at launch. A distinct model; `glm-5.2-coding` is a separate tracked folder for the same model's Coding-Plan-routed identity, and GLM-5 / 5.1 / 5.3 are separate generations.
- **Provider / access:** Z.ai API, GLM Coding Plan, Tencent Buddy, OpenSquilla; MIT open weights (2026-06-17); Day-1 adaptation on 8 domestic accelerator platforms.
- **Release / knowledge:** 2026-06-13/15 (weights 2026-06-17); **knowledge cutoff 2025-11**.
- **IDs:** `glm-5.2`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (5x GLM-5.1's ~200K), with High / Max thinking levels.
- **Modalities:** **text and code only** — no vision. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** secondary coverage quotes coding task unit price at **1/6 of GPT-5.5's** and free browser trial via Mira; no verified full rate card found.
- **Architecture:** MoE, **744B total / ~40B active**; MIT open weights. Weekly call volume **2.58 trillion tokens** (top five). A Fast mode preview exists on Alibaba Bailian (separate serving profile).

### Raw benchmarks found

Agent / tool use:

- Weekly call volume **2.58 trillion tokens**, top-five ranking (adoption, not a benchmark)
- Two-tier High/Max thinking and 1M context for long coding agents (qualitative)
- Documented weaknesses: slower inference, unstable instruction following
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** — **#1 among open-weight models**, described as global top-10 class in secondary coverage
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- LLM Benchmark Code V3 (non-official): **3rd place** (directional rank, no exact score)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M window (5x GLM-5.1); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** 1M context, two-tier thinking, 2.58T weekly tokens and 8-platform Day-1 adaptation; capped by no scored agent harness and unstable instruction following.
- **Reasoning: 86/100.** AA index 51 at #1 among open models; capped by no GPQA/HLE figure and a 2025-11 knowledge cutoff.
- **Context window: 92/100.** A 5x jump to 1M tokens with MIT open weights; capped by no retrieval benchmark.
- **Multimodal: 68/100.** Scored at the text-only floor: the Baike article explicitly states text/code-only modality with no vision.
- **Coding: 87/100.** #3 on a non-official Code V3 leaderboard and huge real-world coding usage; capped by the rank being non-official and no SWE-bench/Terminal-Bench figure.
- **Cost efficiency: 92/100.** Free MIT weights, 40B active params, ~1/6 of GPT-5.5's coding unit price (secondary) and domestic accelerator support. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 85, 86, 92, 68, 87 = 83.6 → 84. Best fit: self-hosted long-context coding agents on domestic hardware.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 智谱GLM-5.2 article retrieved via public web search excerpt (release, 744B/40B MoE, 1M context, MIT weights, AA 51 #1 open, Code V3 3rd, 2.58T weekly tokens, text/code-only modality, 8-platform adaptation), plus secondary 什么值得买 / 今日头条 coverage for the AA v4.1 label and the 1/6-of-GPT-5.5 price claim — labelled secondary. GLM-5.2 Fast mode is a separate serving profile, not merged. `glm-5.2-coding` is a separate tracked folder for the same model's Coding-Plan identity (not merged); GLM-5 / 5.1 / 5.3 are separate generations. Directional ranks are not assigned numeric scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [智谱GLM-5.2 — 百度百科 (retrieved via search excerpt; specs, AA 51, open weights, modality)](https://baike.baidu.com/item/%E6%99%BA%E8%B0%B1GLM-5.2/67958980)
  - [GLM-5.2 Fast mode — 百度百科 (retrieved via search excerpt; separate serving profile)](https://baike.baidu.com/item/GLM-5.2%20Fast%20mode/69148157)
