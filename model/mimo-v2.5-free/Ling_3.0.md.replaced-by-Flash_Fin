# MiMo V2.5 Free — findings by Ling 3.0

- Source: Ling 3.0 (`opencode/mimo-v2.5-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: also covers the requested alias "Xiaomi MiMo-V2.5 Free" — same model/ID.

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi MiMo-V2.5)
- **Short description:** Xiaomi's open-weights (MIT) native omni-modal MoE for text, image, video, audio understanding plus agentic coding. Free capped tier on OpenCode Zen under the "MiMo V2.5 Free" name.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`) at `https://opencode.ai/zen/v1/chat/completions`; native Xiaomi API `mimo-v2.5` at `https://api.xiaomimimo.com/v1` (OpenAI-compatible; Anthropic protocol also supported); HF `XiaomiMiMo/MiMo-V2.5`.
- **Release / knowledge:** 2026-04-22 (launch) / 2026-04-23 public beta / open-sourced 2026-06-29; Zen free-tier entry 2026-04-24; knowledge cutoff 2024-12.
- **IDs:** Zen `opencode/mimo-v2.5-free`; native `mimo-v2.5`; HF `XiaomiMiMo/MiMo-V2.5` (+Base).
- **Context window:** native up to **1M tokens, max output 128K**; **Zen free tier capped at 200,000 context / 32,000 output** (models.dev).
- **Modalities:** text + image + video + audio in; text out. AA measured API as text+image only (did not verify audio/video). Reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-17):** Zen Free $0/$0/$0 (limited-time; data may be used). Native: cache-hit **$0.0028**, cache-miss **$0.14**, output **$0.28** per 1M (98% full cache discount after 2026-05-27 price cut).
- **Architecture:** 310B total / 15B active; hybrid SWA:GA 5:1 (window 128); 729M ViT + 261M audio encoder; 3 MTP layers; ~48T tokens pretraining FP8; license MIT.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.1** (vendor); Terminal-Bench 2.1: **63.7%** (BenchmarkList); Terminal-Bench Hard: **41.7%** (BenchmarkList).
- τ²-Bench Telecom: **90.6%** (BenchmarkList) / **94.2%** pass@1 "Official" (evals.report).
- τ³-Banking: **8.7%** (BenchmarkList).
- GDPval-AA Elo: 1,146 (AA/BenchmarkList) vs 1,551 "Official" (evals.report) — different runs.
- ClawProBench: **60.39** (13/48; field leader 2026-05-06 per BenchmarkList); Claw-Eval Text **65.8** (vendor).
- Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- AA Intelligence Index: **22** (current v4.3, measured) vs **38** (earlier estimate, v4.1.1) — index versions differ, cite both.
- HLE: **27.2%**; GPQA: **84.9%** (or 81.6 another run); MMLU Pro: **82.9%**; MMMU-Pro: **77.9–80.0%** (Xiaomi self-reports 88.5).

Coding:

- SWE-bench Verified: **71.0%** (BenchmarkList, rank 46/72).
- SWE-bench Pro: **56.1%** (attribution ambiguous).
- LiveCodeBench: **81.5%**; SciCode: **43.1%**; Vibe Code Bench: **42.2%**.
- AA Coding Index: **56.8**; WebDev Arena 1,437.9 Elo.

Long context:

- AA-LCR: **68.3%**; Context Arena (MRCRv2 multi-needle) AUC @128K ~27–32%, **AUC @1M 14.3–15.8%** (independent) — 1M degradation visible.
- GraphWalks: **no verified public score found** (HF card has images only).

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 63.7, τ² 90.6, ClawPro 60.39 top-quartile; τ³-Banking 8.7% caps.
- **Reasoning: 70/100.** GPQA ~85, MMLU-Pro 82.9; HLE 27.2% mid.
- **Context window: 70/100.** Zen free cap 200K/32K (native 1M not exposed on free tier).
- **Multimodal: 95/100.** Full 4-channel input (text/image/video/audio), text output.
- **Coding: 72/100.** SWE 71, LiveCode 81.5, Vibe 42.2 — decent mid-frontier.
- **Cost efficiency: 100/100.** $0 free tier; even native pricing is cheap ($0.14/$0.28).
- **Overall Score: 76/100.** Best free omni input + balanced agent/coding; use native 1M endpoint when context-bound.

---

## Signature

- Provided by: **Ling 3.0 (`opencode/mimo-v2.5-free`)** — 2026-09-17
- Method: public web research (Xiaomi launch/open-source pages, HF model card, models.dev, Artificial Analysis, BenchmarkList, evals.report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/Ling_3.0.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
