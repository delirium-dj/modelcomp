# Qwen 3.8 27B — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.8-27b`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's flagship open-weight dense vision-language model (27B params) with native video input, 262K native context (1M via YaRN), strong computer use (OSWorld 84.3%), and Apache 2.0 license.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.8-27B`), QwenCloud Model Studio (`qwen3.8-27b`), OpenRouter (`qwen/qwen3.8-27b`), 15+ API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-08-13/14 release; knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (Hugging Face), `qwen3.8-27b` (QwenCloud/OpenRouter). Open weights available for self-hosting (Apache 2.0 license).
- **Context window:** 262,144 tokens native (262K); extensible to 1,000,000 via YaRN; hosted endpoint: 1M total, 991,808 max input, 131,072 max output, 262,144 max reasoning.
- **Modalities:** Text, image, video in; text out; reasoning yes (configurable `reasoning_effort`); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Model Studio $0.424/M in, $1.696/M out (international) / $0.50/$3.00 (domestic); OpenRouter ~$0.33/$2.40; AA measures $1.01 per Intelligence Index task on Alibaba Cloud, $0.41-0.60 on cheaper providers.
- **Architecture:** Dense (no MoE routing), 27.78B parameters incl. vision tower; 64 layers, hybrid Gated DeltaNet + Gated Attention (16×3×DeltaNet + 1×Attention per group); MTP trained.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- OSWorld-Verified: **84.3%** (Qwen model card, #7/70)
- AndroidWorld: **81.9%** (Qwen model card, beats Opus 4.6 Max 62.0%)
- WebArena-Verified: **64.8%** (Qwen model card)
- ClawEval-MM: **57.4%** pass@3 / **56.9%** average (Qwen model card)
- SWE-MM: **38.6%** (Qwen model card)
- Vision2Web: **62.9%** (Qwen model card)
- Toolathlon: **67.1%** (Qwen model card)
- CoWorkBench: **70.7%** (Qwen in-house)
- JobBench: **33.4%** (Qwen model card)
- Agents' Last Exam: **20.4%** pass@1 / **42.9** score (Qwen model card)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen model card) / **90.5%** (Artificial Analysis)
- HLE: **30.8%** (Qwen model card) / **33.9%** (Artificial Analysis)
- IFBench: **79.5%** (Qwen model card, beats Opus 4.6 Max 62.5%)
- AA Intelligence Index: **34** (xhigh, rebased v4.3.2) / **33.7** (#85/427, 80th pct) (Artificial Analysis)
- AA Agentic Index: **51** (Artificial Analysis, beats Opus 4.8 max effort)
- AA LCR: **82.0%** (#29/408, 93rd pct) (Artificial Analysis)
- GDM-MRCRv2 Context Arena AUC 128K: **~91%** / AUC 1M: **~16%** (Qwen model card)

Coding:

- SWE-bench Pro: **61.7%** (Qwen model card, beats Opus 4.6 Max 53.4%, Qwen3.7-Plus 57.6%)
- Terminal-Bench 2.1: **73.0%** Terminus / **79.8%** BenchmarkList (#36/194)
- DeepSWE v1.1: **42.2%** (Qwen model card, #42/52, more than triple Qwen3.6-27B)
- LiveCodeBench v6: **90.3%** (Qwen model card, #8/50)
- QwenSWEBench: **79.0%** (Qwen in-house)
- NL2Repo-Bench: **42.3%** (#19/34)
- SciCode: **46.6%** (#67/296)
- WebDev Arena: **1597 Elo** (#13/105)

Multimodal:

- MMMU-Pro: **76.3%** (BenchmarkList, #19/72, 75th pct) / **~81.7%** (Qwen secondary)
- MathVision (with CI): **94.6%** (Qwen model card)
- BabyVision (with CI): **85.6%** (Qwen model card)
- CharXiv RQ (with CI): **90.2%** (Qwen model card)
- OmniDocBench 1.5: **91.1%** (Qwen model card)
- RealWorldQA: **85.9%** (Qwen model card)
- ERQA: **65.5%** (Qwen model card)
- OSWorld-Verified: **84.3%** (Qwen model card)
- AndroidWorld: **81.9%** (Qwen model card)
- WebArena-Verified: **64.8%** (Qwen model card)
- Vision2Web: **62.9%** (Qwen model card)
- RecreationBench: **47.1%** (Qwen model card)
- ClawEval-MM: **57.4%** pass@3 / **56.9%** average (Qwen model card)

Long context:

- AA LCR: **82.0%** (#29/408, 93rd pct) (Artificial Analysis)
- GDM-MRCRv2 Context Arena AUC 128K: **~91%** / AUC 1M: **~16%** (Qwen model card)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 74/100.** OSWorld-Verified 84.3% (#7/70) and AndroidWorld 81.9% are frontier-adjacent computer/mobile use for a 27B open model; Toolathlon 67.1%, ClawEval-MM 57.4% pass@3. Capped by Agents' Last Exam 20.4% pass@1, CoWorkBench 70.7% (in-house), SWE-MM 38.6%, no published GDPval/APEX numbers.
- **Reasoning: 76/100.** GPQA Diamond 89.2-90.5% (AA) and IFBench 79.5% are strong for size class; AA Agentic Index 51 beats Opus 4.8 max effort. Capped by HLE 30.8-33.9%, SciCode 46.6%, AA Intelligence Index 34 (below 60 frontier).
- **Context window: 78/100.** 262K native window (1M on hosted endpoint via YaRN) in 200K-500K band; AA LCR 82.0% (#29/408) is decent, but GDM-MRCRv2 Context Arena shows AUC 1M collapsing to ~16%, and most official evals run at 256K — hybrid attention makes window affordable but measured long-range retrieval is weak at full 1M.
- **Multimodal: 86/100.** Native text/image/video in → text out hits 75-90 band; OSWorld 84.3%, MathVision 94.6% (with CI), BabyVision 85.6%, OmniDocBench 91.1%, RealWorldQA 85.9% — best agentic-vision package in open-weights class; no audio input or non-text output.
- **Coding: 76/100.** SWE-bench Pro 61.7% beats Opus 4.6 Max 53.4% and Qwen3.7-Plus 57.6%; LiveCodeBench 90.3% (#8/50), TB 2.1 73-79.8% are frontier-adjacent at 27B. Capped by DeepSWE 42.2%, NL2Repo 42.3%, SWE-MM 38.6%, all numbers on Qwen's Claude-Code harness.
- **Cost efficiency: 90/100.** Model Studio $0.424/$1.696 per MTok (international) / $0.50/$3.00 (domestic); OpenRouter ~$0.33/$2.40; AA measures $1.01/Intelligence task on Alibaba Cloud, $0.41-0.60 on cheaper providers. Apache 2.0 self-hosting on ~17GB VRAM; ~10× cheaper than Opus-class input pricing.
- **Overall Score: 78/100.** Half-up mean of (74 + 76 + 78 + 86 + 76) / 5 = 78.0 → 78. Best-fit: self-hostable agentic-multimodal pick — class-leading computer use (OSWorld 84.3%), SWE-Pro-class coding, 262K context at 27B params; pair with frontier API model for DeepSWE-grade long-horizon coding.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model card (Qwen Hugging Face, QwenCloud docs), independent benchmark aggregators (Artificial Analysis, BenchmarkList, BenchLM), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.