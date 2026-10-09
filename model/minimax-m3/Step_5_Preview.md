# MiniMax M3 — findings by Step 5 Preview

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June 2026 flagship (released 2026-05-31/06-01) — billed as the first open-weight model to combine frontier coding, a 1M-token context window and native multimodality. Powered by MiniMax Sparse Attention (MSA): 9x faster prefill, 15x faster decode and 1/20th per-token compute vs M2 at 1M context. Level with the previous Opus 4.7 frontier on agentic work at a fraction of the price; trails the newer Opus 4.8 by 10–14 points on comparable evals.
- **Provider / access:** MiniMax API (`MiniMax-M3`) and MiniMax Code agent product; OpenRouter `minimax/minimax-m3` (day-one); open weights `MiniMaxAI/MiniMax-M3` on Hugging Face + GitHub (open-weight; license terms were unconfirmed at launch — verify before on-prem plans). Token plans: Plus $20/mo (~1.7B tokens), Max $50 (~5.1B), Ultra $120 (~9.8B).
- **Release / knowledge:** 2026-05-31 (API), weights + technical report (arXiv:2606.13392) ~10 days later. Knowledge cutoff not disclosed.
- **IDs:** `MiniMax-M3` (MiniMax API), `minimax/minimax-m3` (OpenRouter), `MiniMaxAI/MiniMax-M3` (HF).
- **Context window:** 1M tokens (guaranteed minimum 512K); ≤512K input at standard rates, >512K at a higher long-context rate.
- **Modalities:** Text, image and video in → text out (native mixed-modality training from step 0 across ~100T interleaved tokens); desktop computer use; toggleable thinking (`enabled`/`adaptive`/`disabled`); function calling; recommended temp 1.0 / top_p 0.95 / top_k 40.
- **Pricing (as of 2026-10-09):** launch promo $0.30 / MTok input, $1.20 output; standard rate $0.60 / $2.40; blended ~$0.06/M with cache optimization; standard + priority service tiers.
- **Architecture:** MoE, 428B total / 23B active (128 experts, 4 active per token), 600M-parameter vision encoder; MSA sparse attention; ~100 tok/s output; ~198GB VRAM at 4-bit / ~230GB FP16 for self-hosting.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **74.2%** (vendor)
- Claw-Eval: **74.5%** (vendor — top of that end-to-end agent benchmark per MiniMax)
- BrowseComp: **83.5%** (vendor — above Opus 4.7's 79.3%)
- OSWorld-Verified: **70.06–70.1%** (vendor; Opus 4.8 83.4%); **OSWorld 2.0: 4.6%**
- Terminal-Bench 2.1: **66.0%** (vendor, Terminus-2, 2h timeout) / **65.2%** (AA) / **53.6%** (Vals Terminus-2)
- Terminal-Bench 4.0: **2.0%** (AA); Terminal-Bench Hard: **42.4%** (AA)
- Long-Horizon Terminal-Bench: **38.5 mean reward, 3/46 solved** (official Harbor harness)
- τ²-bench: **88.9%** (AA); AA AutomationBench: **21.3%**; AA EnterpriseOps-Gym: **32.1%**
- GDPval-AA: **37.3%** (AA) / Elo 1245 (AA); AA-Briefcase: Elo 1091; AA Agentic Index: 30.8%
- AA Harvey LAB: **88.4%**; AA Tau3-Banking: 15.3%; ResearchClawBench 19.8%

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA) / 92.7% (Vals)
- HLE: **39.0%** (AA)
- MMLU-Pro: **84.2%** (Vals); SciCode: **47.1%** (AA); CritPt: **3.7%** (AA); IFBench: **82.9%** (AA)
- Artificial Analysis Intelligence Index: **29.2** (rebased v4.3.2)
- AA-Omniscience: index 1.4, accuracy 16.7%, hallucination rate 18.4%
- PostTrainBench (research autonomy): **0.37** — #3 overall behind Opus 4.7 (0.42) and GPT-5.5 (0.39)
- LMArena Elo: 1668 (#2/51 on one tracker's snapshot)

Coding:

- SWE-bench Verified: **80.5%** (vendor, Claude Code scaffold, 4 runs) / **75.0%** (Vals)
- SWE-bench Pro: **59.0%** (vendor — above GPT-5.5's 58.6% and Gemini 3.1 Pro's 54.2%, below Opus 4.7's 64.3%)
- LiveCodeBench: **82.2%** (Vals); AA Coding Index: **58.6**
- SWE-fficiency: **34.8%**; KernelBench Hard: **28.8%**; NL2Repo: **42.1%**; SVG-Bench 63.7%; VIBE V2 50.1%; OpenHarmony Bench 48.4%

Multimodal:

- MMMU-Pro: **78.6%** (AA) / 81.2% (Vals); OmniDocBench above Gemini 3.1 Pro (vendor claim); Video-MME 84.6% at 512 frames (vendor); long-horizon video understanding via 1M context
- Computer use (OSWorld-Verified 70.06%) from a 1920×1080 screenshot stream with relative 0–1000 coordinates

Long context:

- 1M window (512K guaranteed) via MSA; **AA-LCR: 83%** (AA) — strong long-context reasoning; no MRCR/RULER published

### Normalized scores (1–100)

- **Tool use: 70/100.** MCP-Atlas 74.2%, Claw-Eval 74.5%, BrowseComp 83.5% and τ²-bench 88.9% show real agentic breadth; capped by GDPval-AA 37.3%, AA AutomationBench 21.3%, Terminal-Bench 4.0 at 2.0%, OSWorld 2.0 at 4.6% and the 12-point Vals gap on TB2.1 (66.0 vendor vs 53.6 independent).
- **Reasoning: 78/100.** GPQA 92.9% (AA, #16/95) and MMLU-Pro 84.2% are frontier-adjacent on the classic suites with IFBench 82.9%; capped by HLE 39.0%, SciCode 47.1%, CritPt 3.7% and the AA Intelligence Index at 29.2 — knowledge depth trails the coding-led headline.
- **Context window: 94/100.** 1M-token window (512K guaranteed minimum) in the ≥1M tier, backed by the strongest long-context evidence in this comparison — AA-LCR 83% — and MSA's 9x/15x prefill/decode speedups at 1M; the 100 tier's ≥98% retrieval at 512K+ is unverifiable with no MRCR published.
- **Multimodal: 82/100.** Native text + image + video in → text out is the 75–90 band, anchored by MMMU-Pro 78.6–81.2%, SVG-Bench 63.7% and working desktop computer use; no audio input or non-text output.
- **Coding: 74/100.** SWE-bench Verified 80.5% (75.0% Vals), SWE-bench Pro 59.0% and LiveCodeBench 82.2% are solidly mid-frontier for an open-weight model; capped by AA Coding Index 58.6%, SWE-fficiency 34.8%, KernelBench Hard 28.8% and Terminal-Bench 4.0 at 2.0% — the suite where the 10–14-point gap to Opus 4.8 is clearest.
- **Cost efficiency: 90/100.** $0.30/$1.20 launch promo ($0.60/$2.40 standard, ~$0.06/M blended with caching) maps just above the methodology's ~$0.60/$2.20 ≈ 92 tier — roughly 15x cheaper on input than Opus 4.7 with open weights; the >512K long-context surcharge and unconfirmed license terms temper it.
- **Overall Score: 80/100.** Best-fit recommendation: the open-weight value pick for long-horizon coding agents and multimodal document/video work — Opus-4.7-class agentics at commodity pricing; verify on your own harness since every headline benchmark is MiniMax's own run.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (MiniMax M3 launch blog + model page, HuggingFace model card, NVIDIA developer blog, Artificial Analysis, Vals AI, BenchLM, DigitalApplied, felloai, madebyagents); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
