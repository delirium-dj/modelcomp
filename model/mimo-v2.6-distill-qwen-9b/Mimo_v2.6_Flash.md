# MiMo-V2.6-Distill-Qwen-9B — findings by Mimo v2.6 Flash

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B (SFT checkpoint)
- **Short description:** Xiaomi MiMo's 9B open agentic distill — Qwen3.5-9B supervised fine-tuned on 77.4B tokens of MiMo-V2.6-generated data across code, cyber, general agent and visual-coding domains. It is a research starting point for agentic RL, not a flagship; released as its own folder here rather than folded into the MiMo-V2.6 Flash entry.
- **Provider / access:** self-host only — Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, served through SGLang (official quickstart) behind an OpenAI-compatible `/v1/chat/completions` endpoint; any OpenAI-compatible runtime works. **Not on OpenCode Zen** (Zen model list checked 2026-09-29: no `*distill*` id) and **not listed on OpenRouter** — no hosted API id exists.
- **Release / knowledge:** checkpoint uploaded 2026-09-21, last modified 2026-09-22 (Hugging Face API); results are quoted from the MiMo-V2.6 technical report. Knowledge cutoff not published for the distill; base Qwen3.5-9B cutoff not stated on its card.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (HF) — **no Zen Free ID and no hosted id of any kind**.
- **Context window:** 262,144 tokens, inherited from base `Qwen/Qwen3.5-9B` (OpenRouter registry: `context_length` 262144); max output not separately documented.
- **Modalities:** text, image and video in; text out (OpenRouter architecture record for Qwen3.5-9B, the finetune base); reasoning yes — chat template exposes `enable_thinking` and a `reasoning_content` field with an official `--reasoning-parser mimo` flag; tool calls yes (agent SFT, `tool-use` tag); JSON mode not documented — no verified public confirmation found.
- **Pricing (as of 2026-09-29):** no API price anywhere — MIT-licensed weights, free to self-host; hosting cost is hardware/SGLang only. No free-tier API route exists because no hosted route exists.
- **Architecture:** 9B dense, base `Qwen3.5-9B` (Apache-2.0), MIT license for this SFT release; training mixture 77.4B total tokens / 27.2B loss-bearing (Code 29.9%, General 28.5%, Visual 27.4%, Cyber 14.2%).

### Raw benchmarks found

> All figures below are from the official Hugging Face model card (SFT column, marked as the MiMo-V2.6 technical report results). Internal sets are flagged †.

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** avg@1 (official HF card; base Qwen3.5-9B 27.0%)
- Toolathlon-Verified: **35.2%** avg@1 (official HF card; base 25.9%)
- AutomationBench v1.0.6: **30.3%** avg@1 (official HF card; base 5.0%)
- OfficeQA: **19.5%**, JobBench: **18.3%** avg@1 (official HF card)
- MiMo General (mini)†: **62.2%** avg@1 (internal set)
- Tau3-Banking / Tau2-Bench / GDPval / Claw-Eval / OSWorld / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME / LCR / CritPt / Intelligence Index: no verified public score found (the card publishes no reasoning suite for this checkpoint)
- Proxy evidence only: MiMo General (mini)† 62.2%, OfficeQA 19.5%, JobBench 18.3% (official HF card) — all agentic/knowledge-work sets, none a science-reasoning benchmark

Coding:

- SWE-bench Verified: **61.1%** avg@3 (official HF card; base 60.0%)
- SWE-bench Pro: **44.6%** avg@3 (official HF card; base 32.0%)
- MiMo Code (mini)†: **51.6%** avg@3 (internal set; base 19.5%)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Cyber:

- MiMo Cyber (mini)†: **31.3%** avg@1 (internal set; base 5.7%)

Long context:

- 262,144-token window inferred from the base model registry entry; MRCR / RULER / GraphWalks: no verified public score found

Multimodal:

- MiMo Visual Coding (mini)†: **64.0%** avg@1 (internal set; base 61.7%) — visual coding is one of the four SFT domains
- MMMU / CharXiv / Video-MME: no verified public score found

### Normalized scores (1–100)

- **Tool use: 44/100.** Terminal-Bench 2.1 37.1%, Toolathlon 35.2% and AutomationBench 30.3% are all below the 45–60% mid-tier reference, though every one is a large lift over the base model; no tau, GDPval or Claw-Eval number exists to anchor a higher score.
- **Reasoning: 48/100.** Zero public reasoning-benchmark numbers (GPQA/HLE/AIME all "no verified public score found") — the score rests on proxy evidence only (internal General 62.2%, OfficeQA 19.5%) from a 9B SFT, and the complete absence of a science-reasoning eval is what caps it.
- **Context window: 75/100.** 262,144 tokens sits mid-tier in the 200K–500K band (65–84, 200K = 70); no retrieval measurement at that length to justify the top of the band.
- **Multimodal: 78/100.** Text/image/video in, text out inherited from Qwen3.5-9B plus a dedicated visual-coding SFT domain (Visual Coding mini 64.0) — squarely in the +video-in 75–90 band; no audio input and no text/audio output keep it below 90.
- **Coding: 62/100.** SWE-bench Verified 61.1% and SWE-Pro 44.6% are genuinely strong for a 9B model (base 60.0/32.0) and sit in the mid band, but LiveCodeBench/SciCode/Vibe are all missing and Terminal-Bench 2.1 37.1% is weak in absolute terms.
- **Cost efficiency: 95/100.** MIT weights, zero licence/API cost — effectively the $0 anchor for self-hosters; it loses the last points because there is no free hosted API to lock in a true $0 route and running 9B weights still needs hardware.
- **Overall Score: 61/100.** Mean of the five quality dims (44 + 48 + 75 + 78 + 62) / 5 = 61.4 → 61. Best fit: a free-to-run 9B agentic coder/cyber agent for local or single-GPU deployments — the right choice when data locality and zero per-token cost matter more than frontier reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-09-29
- Method: public internet research (official Hugging Face model card for the distill and its base, OpenRouter model registry for base-model context/modality, OpenCode Zen model list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
