# Qwen 3.8 (2.4T-A95B flagship) — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.8-2.4T-A95B`, open weights)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-2.4T-A95B (the Qwen3.8 flagship; open-weights release of the Qwen-Max-class model — distinct from the separate `Qwen/Qwen3.8-27B` dense model, which is a different folder)
- **Short description:** Alibaba's most powerful Qwen model to date: a 2.4T-total / 95B-active mixture-of-experts flagship with a 1M-token context and multimodal input, whose weights were open-sourced August 17, 2026 on Hugging Face and ModelScope — "the first time that Qwen3.8 brings a Qwen-Max-class model to open release". Independent placements: #3 on Arena AI's CodeArena (webdev) and #3 on Artificial Analysis' Agentic Index. Shares the Max-class training recipe; Alibaba's API model `qwen3.8-max` is the hosted form of the same Max-class flagship.
- **Provider / access:** Open weights on HF `Qwen/Qwen3.8-2.4T-A95B` + ModelScope (free download); hosted via Alibaba Cloud Model Studio `qwen3.8-max` (OpenAI-compatible + Anthropic-compatible APIs). No Free ID on OpenCode Zen.
- **Release / knowledge:** Flagship API release August 3, 2026 (preview July 19); open weights released 2026-08-17. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (open weights); `qwen3.8-max` (Model Studio hosted ID).
- **Context window:** up to 1,000,000 tokens (1M; Alibaba model card / theairankings / benchlm).
- **Modalities:** text, image, video input (first Max-line release with multimodal input); text output; reasoning yes — defaults to `reasoning_effort: xhigh` on the API; tool calls (agentic benchmarks run with the Claude Code harness); Anthropic-compatible endpoint.
- **Pricing (as of 2026-10-09):** hosted $2.00 in / $6.00 out per 1M (Model Studio pricing); open weights free to self-host ($0/token with your own GPUs).
- **Architecture:** 2.4 trillion total parameters / 95 billion active, mixture-of-experts; open weights (Qwen's open license; Apache-family per Alibaba's open-source posture).

### Raw benchmarks found

> Alibaba's vendor-run release table (August 3, 2026, via apidog.com — footnoted: coding rows ran on the Claude Code harness; in-house benchmarks (QwenSWEBench, CoWorkBench) built by the Qwen team; "Fable5 results may involve fallbacks" per Alibaba's own footnote). Independent placements as noted.

Agent / tool use:

- Terminal Bench 2.1: **86.6** (Alibaba table; vs Opus 4.8 84.6, Fable 5 84.6, GPT-5.6 Sol 88.8 — beats both Claude flagships; generational jump from Qwen3.7-Max 74.5)
- OSWorld-Verified: **86.1** (Alibaba multimodal table)
- Artificial Analysis Agentic Index: **#3 globally** (independent placement, per Alibaba's announcement citing AA)
- PaperBench: **93.0** (Alibaba table; best row — GPT-5.6 Sol 90.5, Fable 5 88.8, Opus 4.8 80.3; +28.2 over Qwen3.7-Max's 64.8)
- GDPval-AA / Tau2 / Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6** (Alibaba table; ties Fable 5 92.6, above Opus 4.8 92.0, below Sol 94.1)
- HLE: **43.6** (Alibaba table — last among the four flagships; Fable 5 53.3, Sol 47.2, Opus 4.8 45.7)
- IFBench: **82.8** (Alibaba table — widest margin; Sol 72.7, Fable 5 63.5, Opus 4.8 62.2; durable Qwen strength, 3.7-Max led at 79.1)
- Artificial Analysis Intelligence Index: no verified public number found for the flagship (AA hadn't scored it at the table's publication; later AA page covers the Max config)
- LCR / MLCR, CritPt, Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **67.7** (Alibaba table, Claude Code harness; just behind Opus 4.8 69.2, 12.3 behind Fable 5's 80.0, above Sol 64.6; +7.1 over Qwen3.7-Max)
- CodeArena (webdev, independent): **#3 globally** (Arena AI leaderboard, per Alibaba's announcement)
- PaperBench (research reproduction): **93.0** (see above)
- DeepSWE: trails the frontier per Alibaba's own table (no verified public number surfaced)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- Window: **1M tokens**; no MRCR/RULER/GraphWalks retrieval value verified for this exact model

Multimodal / vision:

- MathVision: **95.2**; LogicVista: **91.9**; OSWorld-Verified: **86.1** (Alibaba multimodal table vs Gemini 3.1 Pro and GPT-5.6 Sol; leads nearly every OCR row)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 86.6 (beats both Claude flagships, just under the ~88%+ frontier mark), OSWorld-Verified 86.1, and the independent AA Agentic Index #3 placement clear the top of the mid band; vendor-run numbers and missing GDPval/Tau rows cap it.
- **Reasoning: 92/100.** GPQA Diamond 92.6 (ties Fable 5) and HLE 43.6 both clear the frontier references (GPQA 90%+, HLE 40%+ → 90–100); PaperBench 93.0 and IFBench 82.8 corroborate; HLE is last among the four flagships, capping it below 95.
- **Context window: 95/100.** 1M tokens (≥1M tier = 95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 92/100.** Text, image, video in with a near-sweep multimodal table (MathVision 95.2, LogicVista 91.9, OCR leadership); text-only output caps it at the band top.
- **Coding: 85/100.** SWE-Pro 67.7 (mid-pack, 12.3 behind Fable 5), DeepSWE trailing frontier, and Claude-Code-harness caveat on most coding rows; CodeArena #3 (webdev) and PaperBench 93.0 are the elite signals.
- **Cost efficiency: 92/100.** Open weights free to self-host; hosted $2.00/$6.00 per 1M sits between the ~$0.60/$2.20 = 92 and ~$1.25/$4.25 = 88 anchors; the open-weights release is the cost story.
- **Overall Score: 90/100.** Mean of the five quality dims (88 + 92 + 95 + 92 + 85) / 5 = 90.4 → 90. Best fit: the most capable open-weights release of the summer — multimodal, 1M-context frontier-class work where self-hosting or the $2/$6 hosted price matters; Fable 5 stays ahead on deep software engineering and broad-knowledge exams.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (Alibaba Cloud announcement, Alibaba's vendor-run benchmark table via apidog.com, benchlm.ai, theairankings, DuckDuckGo search cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: corrects the model identity — the 2026-09-24 draft described `Qwen/Qwen3.8-27B` (a different model/folder); this report covers the actual Qwen3.8 flagship (2.4T-A95B open weights, released 2026-08-17) with its full vendor table.
- Future sources: add a new file next to this one, e.g. `Qwen_3.9.md`, using the same headings.
