# Ling 3.0 Flash VL — findings by Qwen 3.8 27B

- Source: InclusionAI/Ling — Ling-3.0-flash-VL
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's open-weights native multimodal model built on Ling-3.0-flash (124B total / 5.5B active MoE, MIT) — adds native image + video understanding (ViT encoder, VideoRoPE) to the Ling 3.0 Flash language stack; vision integrated across understand/reason/act.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`) and ModelScope; InclusionAI first-party API; OpenRouter `inclusionai/ling-3.0-flash-vl`. Chat Completions API (OpenAI-compatible). No OpenCode Zen ID verified in this pass.
- **Release / knowledge:** Released September 10, 2026 (Artificial Analysis FAQ); knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HF open weights, MIT); `inclusionai/ling-3.0-flash-vl` (OpenRouter); no Free ID on Zen verified in this pass.
- **Context window:** 262,144 total (256K/262K; native 131,072 YaRN 2.0x extension per HF model card SGLang recipe); max output not separately verified.
- **Modalities:** text + image + video in, text out; reasoning (thinking on by default, default temp 0.6 / top_p 0.95 / top_k 20); tool calls (ling3 parser); JSON mode.
- **Pricing (as of 2026-10-03):** $0.075 in / $0.22 out per 1M, 80% cache discount, blended ~$0.05 (AA, InclusionAI API); OpenRouter $0.021/$0.0615 per 1M; free self-hosting (MIT open weights).
- **Architecture:** Open weights, MIT license; 124B total / 5.5B active sparse MoE; 42-layer hybrid backbone (KDA + Gated MLA, 5:1); ViT visual encoder + two-layer MLP projector; VideoRoPE for spatial+temporal encoding.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **32.5%** normalized (Artificial Analysis via BenchLM; raw Elo not published in text)
- Terminal-Bench 2.1: vendor reports an AA-protocol evaluation (Terminus 2, 2h timeout, preserve-thinking, 3-run mean) on the HF model card, but the numeric result is only in a non-extractable image — no verified public text score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **86.2%**
- HLE (AA): **22.0%**
- LCR (AA): **78.3%**
- CritPt (AA): **2.0%**
- Artificial Analysis Intelligence Index: **25** (current v4.3.2, #1/65 in its open-weights size class, median 8); HF model card cites **42** on the older AA Index v4.1.1 (+4 over Ling-3.0-flash's 38)
- Omniscience Accuracy / Hallucination Rate (AA): **14.4% / 22.0%** (Index -4.5)
- BenchLM overall: **47.66/100** (#105/783, partial coverage 11/645 — conservative)

Coding:

- AA-SciCode: **44.2%** (Artificial Analysis)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- AA-LCR **78.3%** (long-context reasoning); no MRCR/RULER at 256K published; 262K window per AA + HF (YaRN 2.0x from native 131K)

Multimodal (input capabilities):

- AA-MMMU-Pro: **79.0%** (Artificial Analysis); vendor multimodal "Understand/Reason/Act" table published on HF model card as image only — no verified public text scores found for MMMU/VideoMME beyond the AA-MMMU-Pro figure

### Normalized scores (1–100)

- **Tool use: 52/100.** GDPval-AA 32.5% normalized (raw Elo not shown; consistent with the mid 900–1200 band at best) and no verified TB2.1/Tau3/Claw-Eval text numbers; capped by the absence of extractable terminal/tool-call results despite the vendor's AA-protocol TB2.1 run.
- **Reasoning: 66/100.** GPQA 86.2% near the frontier reference and LCR 78.3% well above the mid band, but HLE 22.0%, CritPt 2.0% and AA Index 25 (methodology mid-band 20–35) cap it.
- **Context window: 74/100.** 262,144 total (200K–500K tier = 65–84; 200K = 70), LCR 78.3% supports the upper part of the tier; window is a YaRN extension of the native 131K.
- **Multimodal: 78/100.** text + image + video in, text out (+video in = 75–90 band) with verified AA-MMMU-Pro 79.0%; no audio input or non-text output.
- **Coding: 58/100.** AA-SciCode 44.2% just above the mid <40% floor; no verified public SWE-bench Verified / LiveCodeBench / DeepSWE numbers found this pass, which caps it below the 65–75 mid band.
- **Cost efficiency: 98/100.** $0.075/$0.22 per 1M first-party (OpenRouter $0.021/$0.0615) sits inside methodology's ~$0.10/$0.20 → 97–99 band; MIT open weights allow free self-hosting.
- **Overall Score: 66/100.** (52 + 66 + 74 + 78 + 58) / 5 = 65.6 → 66. Best fit: cheap open-weights multimodal (image+video) understanding and document/visual reasoning where self-hosting or near-free API pricing matters.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-10-03
- Method: public internet research (Hugging Face model card inclusionAI/Ling-3.0-flash-VL, Artificial Analysis model page ling-3-0-flash-vl, BenchLM model page ling-3-0-flash-vl 2026-10-02, OpenRouter model spec); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.1_Flash.md`, using the same headings.
