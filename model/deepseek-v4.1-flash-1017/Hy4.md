- Source: DeepSeek/DeepSeek-V4.1-Flash-1017
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017
- **Short description:** DeepSeek's 2026-10-17 in-place iteration of V4.1 Flash (a self-described "minor update"), adding self-feedback RL for from-scratch game/3D project construction, plus new Search and Fetch APIs. A distinct tracked version; `deepseek-v4.1-flash` (2026-09-10) is its predecessor and `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` are separate.
- **Provider / access:** DeepSeek web/App/API (model name `deepseek-flash`), DeepSeek Harness; MIT-licensed weights on Hugging Face and ModelScope; peak/off-peak pricing.
- **Release / knowledge:** 2026-10-17; knowledge cutoff: no verified public score found.
- **IDs:** `deepseek-v4.1-flash-1017` / API name `deepseek-flash`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (secondary CSDN analysis of this generation); native multimodal vision without an external module.
- **Modalities:** text and image in, text/code out; native Search and Fetch APIs, web search/scraping, project-level generation from natural language (games, 3D modelling). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** peak/off-peak, off-peak = half of peak; the V4.1 Flash rate card (¥0.02 cache-hit / ¥1 cache-miss / ¥4 output per 1M at idle) is the predecessor's, cited as lineage; no 1017-specific verified rate card found.
- **Architecture:** MoE with Causal-Encoder-Decoder structure, **552B total / 8B input-active / 16B output-active** (predecessor V4.1 Flash specs, lineage); self-feedback RL added in this version. MIT open weights.

### Raw benchmarks found

Agent / tool use:

- FrontierCode 2.0 (AA Intelligence Index v5, `max`): **28%**
- AA Intelligence Index v5 composite: **32** — tied with GLM-5.3
- Global weekly call volume (2026-10-19→25): **33.6 trillion tokens**
- ZeroBench-main (with tools): **49.0** (DeepSeek API change log, labelled secondary/official changelog)
- Improvements across benchmarks, shorter task runtime and output length, stronger code/agent capability (directional; no per-benchmark deltas published in the retrieved excerpts)
- Forge 2.0 agentic-coding board (October 2026, third-party): **0.4520** median, rank 12 on Gauntlet 7.2 with **0.6957** — labelled third-party
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE pure-text subset: tested by the official change log (no exact figure in the retrieved excerpt) — no verified public score found
- GPQA Diamond / LCR / CritPt / AA Intelligence Index (beyond the 32 above) / Omniscience: no verified public score found

Coding:

- FrontierCode 2.0 **28%** and ZeroBench-main 49.0 as above; self-feedback RL for zero-to-complete game/3D projects
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M window (secondary) with shorter outputs; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** New Search/Fetch APIs, 33.6T weekly tokens of real-world usage, ZeroBench-main 49.0 and project-level RL generation; capped by an AA index of 32 and no scored agent harness.
- **Reasoning: 82/100.** AA index 32 (tied with GLM-5.3) and broad benchmark gains; capped by no GPQA/HLE absolute figure and the "minor update" framing.
- **Context window: 91/100.** 1M context (secondary) with shorter, cheaper task runs and reduced KV-cache cost from the V4.1 generation; capped by no retrieval benchmark.
- **Multimodal: 86/100.** Native (no add-on module) visual understanding plus image-based 3D/game project generation; capped by text/code-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 87/100.** FrontierCode 2.0 28%, self-feedback RL for complete projects and Forge/Gauntlet agentic-coding presence; capped by no SWE-bench / Terminal-Bench figure.
- **Cost efficiency: 96/100.** Off-peak half-price, ¥0.02 cache hits (lineage), MIT open weights, shorter outputs, and 8B/16B active params. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 87, 82, 91, 86, 87 = 86.6 → 87. Best fit: very high-volume, cost-sensitive agentic coding and multimodal project generation on self-hosted MIT weights.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike DeepSeek-V4.1-Flash-1017 article retrieved via public web search excerpt (release, self-feedback RL, Search/Fetch APIs, MIT weights, 33.6T weekly tokens, AA index 32, FrontierCode 2.0 28%), DeepSeek's official API change log excerpt (ZeroBench-main 49.0), and the already-fetched Baidu Baike DeepSeek-V4.1 Flash article for predecessor architecture/pricing — explicitly labelled lineage. A third-party Forge 2.0 / Gauntlet board and a secondary CSDN analysis are labelled as such. `deepseek-v4.1-flash`, `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` are separate folders, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [DeepSeek-V4.1-Flash-1017 — 百度百科 (retrieved via search excerpt; specs, AA 32, FrontierCode 28%)](https://baike.baidu.com/item/DeepSeek-V4.1-Flash-1017/69439738)
  - [Change Log — DeepSeek API Docs (retrieved via search excerpt; ZeroBench-main 49.0)](https://api-docs.deepseek.com/updates/)
  - [DeepSeek-V4.1 Flash — 百度百科 (predecessor architecture and pricing, already fetched)](https://baike.baidu.com/item/DeepSeek-V4.1%20Flash/68957496)
