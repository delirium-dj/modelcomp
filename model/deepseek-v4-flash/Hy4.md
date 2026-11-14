- Source: DeepSeek/DeepSeek-V4-Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** DeepSeek's 2026-04-24 lightweight economy tier of the V4 series — a 284B/13B-active MoE with 1M context and MIT open weights, positioned below V4-Pro. A distinct model; `deepseek-v4-pro`, `deepseek-v4.1-flash`, `deepseek-v4.1-flash-1017` and `deepseek-v4-vision-exp` are separate. Its hosted build was retired 2026-09-10 and replaced by V4.1-Flash.
- **Provider / access:** DeepSeek API (OpenAI- and Anthropic-compatible), MIT weights on Hugging Face, local deployment, DSpark speculative decoding, Claude Code integration; Huawei Cloud adaptation of layered attention compression.
- **Release / knowledge:** 2026-04-24 (0731 public beta 2026-07-31; hosted retirement 2026-09-10); knowledge cutoff: no verified public score found.
- **IDs:** `deepseek-v4-flash`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, using DeepSeek Sparse Attention (DSA) to compress long-context cost.
- **Modalities:** **text only** for the base build (image input arrived with the separate Vision-Exp); text/code out. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** a third-party Bitdeer listing quotes **$0.042 / 1M input** for V4-Flash-0731 (secondary); the official V4-series rate card (¥0.025 cache hit / ¥3 miss / ¥6 output per 1M) belongs to V4-Pro and is NOT attributed here.
- **Architecture:** MoE, **284B total / ~13B active**; MIT open weights; DSA sparse attention; DSpark speculative decoding.

### Raw benchmarks found

Agent / tool use:

- Reasoning close to V4-Pro, with a gap on very hard tasks (directional)
- Low-latency, low-cost agentic programming via Claude Code (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Agentic coding and code reasoning use cases (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M context with DSA compression; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** 1M context, OpenAI/Anthropic-compatible APIs, Claude Code integration, DSpark decoding and MIT weights; capped by no scored agent harness.
- **Reasoning: 82/100.** Near-Pro reasoning at 13B active params; capped by that being directional with no named benchmark.
- **Context window: 92/100.** 1M-token window with DSA explicitly compressing long-context cost; capped by no retrieval benchmark.
- **Multimodal: 70/100.** Scored at the text-only floor: the Baike article states the base build is text-only; the Vision-Exp is a separate folder.
- **Coding: 83/100.** Agentic-coding focus with local deployment; capped by no published coding benchmark for this exact ID.
- **Cost efficiency: 96/100.** Free MIT weights, 13B active params, $0.042/1M input (secondary) and DSA/DSpark efficiency. Excluded from Overall.
- **Overall Score: 82/100.** Half-up mean of 84, 82, 92, 70, 83 = 82.2 → 82. Best fit: self-hosted, cost-sensitive long-context reasoning and coding agents; note the 2026-09-10 hosted retirement in favour of V4.1-Flash.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike DeepSeek-V4-Flash and DeepSeek-V4-Flash API articles retrieved via public web search excerpt (release/retirement timeline, 284B/13B MoE, 1M context, DSA, MIT weights, text-only base build, API compatibility, DSpark), plus a secondary CSDN pricing comparison for the $0.042/1M Bitdeer rate — labelled secondary. V4-Pro's ¥0.025/¥3/¥6 rate card belongs to a different model and is NOT attributed here. `deepseek-v4-pro`, `deepseek-v4.1-flash`, `deepseek-v4.1-flash-1017` and `deepseek-v4-vision-exp` are separate folders, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [DeepSeek-V4-Flash — 百度百科 (retrieved via search excerpt; specs, timeline, architecture)](https://baike.baidu.com/item/DeepSeek-V4-Flash/67674324)
  - [DeepSeek-V4-Flash API — 百度百科 (retrieved via search excerpt; 284B/13B, 1M context)](https://baike.baidu.com/item/DeepSeek-V4-Flash%20API/67678091)
