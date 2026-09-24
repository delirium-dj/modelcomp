# Inkling — findings by DeepSeek 4.1 Flash

- Source: Thinking Machines Lab / Inkling (`thinkingmachines/inkling`, alias `inkling`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (sibling: Inkling Small, 276B total / 12B active — not tracked in this folder)
- **Short description:** Thinking Machines Lab's first large open-weights release — a natively multimodal 975B-parameter mixture-of-experts (41B active) with a 1M-token context, Apache 2.0 weights, an effort control driven through the system message, and a free agent-harness endpoint. **Folder notes:** the folder was created empty by a discovery pass and has no `meta.json` (`pnpm sync` auto-scaffolds one); its name is also capitalised (`model/Inkling/`), which deviates from the repo's lowercase slug convention — a rename to `model/inkling/` is a maintainer decision (I did not rename it).
- **Provider / access:** API via Thinking Machines' Tinker service and third-party providers (7 per Artificial Analysis; OpenRouter routes to DeepInfra, Baseten and Together). OpenRouter id `thinkingmachines/inkling`; `tools` and `tool_choice` supported, **`response_format` is not**, so JSON output is not enforced. Weights on Hugging Face.
- **Release / knowledge:** released 2026-07-15 (official model card and evals.report); the OpenRouter listing says 2026-07-17. Knowledge cutoff not published.
- **Context window:** up to 1,048,576 tokens (official card); OpenRouter reports 1,048,576 in and 262,144 max completion.
- **Modalities:** text, image (40–4096 px per dimension) and audio (16 kHz WAV, up to 20 minutes) in → text out; reasoning with adjustable effort; tool calling; no enforced JSON mode.
- **Pricing (as of 2026-09-24):** $0.95 in / $4.05 out per 1M with $0.16 per 1M cache reads (OpenRouter); Artificial Analysis lists Thinking Machines' own API at $1.00 / $4.05 (83% cache discount, $0.61 per Intelligence-Index task). A **free endpoint exists for agentic harnesses only** and logs prompts and outputs for model improvement (TML Free Research API terms) — do not send confidential or personal data, including faces and voices.
- **Architecture:** 66-layer decoder-only MoE, 975B total / 41B active (6 of 256 routed experts plus 2 shared experts per token), hybrid 5:1 sliding-window (512-token) / global attention, four short causal convolutions per block, learned relative-position bias instead of RoPE; BF16 / MXFP8 / NVFP4 numerics; Apache 2.0 weights (BF16 serving needs 8× B300 or 16× H200; NVFP4 fits in ~600 GB).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **74.1%** pass rate (verified); BrowseComp: **77.1%** accuracy (verified)
- Terminal-Bench 2.1: **63.8%** task success (verified; Thinking Machines evaluated it on an internal harness — its own comparison table gives GLM-5.2 82.7%)
- GDPval-AA: **28.2%**; Artificial Analysis Agentic Index: **22.5**
- Tau2-Bench / Vending-Bench / AutomationBench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (verified); Humanity's Last Exam: **29.7%** (verified); AIME 2026: **97.1%** (verified)
- ARC-AGI-1: **79.5%**; ARC-AGI-2: **36.53%** (official); Global-MMLU: **88.7%**; IFBench: **79.8%**
- SimpleQA Verified: **43.9%**; AA-Omniscience: accuracy **41.5%**, index **2**; CritPt: **5.4%**
- Artificial Analysis Intelligence Index: **25** (xhigh effort, index v4.3.2; #28 of 115 in its open-weight class, class median 18) with 140M output tokens; speed **162.7 tokens/s** (#9 of 115) and TTFT **1.89 s**

Multimodal:

- MMMU-Pro: **73.5%** (verified); CharXiv: **78.1%** (verified)
- Video appears in the training data but is not offered as an input modality; output is text only

Coding:

- SWE-bench Verified: **77.6%** resolved (verified); SWE-bench Pro: **54.3%** resolved (verified); FrontierCode: **14.0%** weighted score (Main)
- SciCode: **47.0%**; Artificial Analysis Coding Index: **52.1**; coding evaluations allowed trajectories up to 256K tokens (per Raschka's read of the release)
- LiveCodeBench / Terminal-Bench 2.0 / DeepSWE: no verified public score found

Long context:

- AA-LCR v1.1: **77.3%** — a strong retrieval result for the 1M window (Artificial Analysis, as summarised on OpenRouter)
- MRCR / RULER at fixed window lengths: no verified public score found
- Method context from the release (via Raschka): 45T pretraining tokens across text, image, audio and video, more than 30M RL rollouts, and all headline numbers measured at effort 0.99 / temperature 1.0 — the release shows effort sweeps rather than a single operating point

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 74.1% and BrowseComp 77.1% show real tool and retrieval competence, and Terminal-Bench 2.1 63.8% is respectable on its internal harness; capped by GDPval-AA 28.2%, an Agentic Index of 22.5 and the absence of any Tau2 / Vending-Bench / AutomationBench row.
- **Reasoning: 80/100.** GPQA Diamond 87.2%, AIME 2026 97.1%, ARC-AGI-2 36.53%, Global-MMLU 88.7% and IFBench 79.8% are all strong; capped by HLE 29.7% (below GLM-5.2's 40.1% in its own comparison table), CritPt 5.4% and an Intelligence Index of 25 that is only mid-field in September 2026.
- **Context window: 92/100.** A 1,048,576-token window with a 262,144-token completion ceiling and AA-LCR 77.3% validating retrieval at long lengths; capped only because no MRCR/RULER cross-check exists.
- **Multimodal: 74/100.** Native text, image and audio input with measured MMMU-Pro 73.5% and CharXiv 78.1%; capped by text-only output and the absence of video input.
- **Coding: 74/100.** SWE-bench Verified 77.6% and SWE-bench Pro 54.3% are the strongest rows; SciCode 47.0%, a Coding Index of 52.1 and FrontierCode 14.0% hold the dimension back.
- **Cost efficiency: 80/100.** $0.95 / $4.05 per 1M with cheap $0.16 cache reads, Apache-2.0 weights for free self-hosting and a free agent-harness endpoint; capped because output pricing is high for an open-weight model (Artificial Analysis calls it "particularly expensive" against peers) and the free tier logs all traffic.
- **Overall Score: 78.4/100.** Mean of the five quality dimensions (72 + 80 + 92 + 74 + 74) / 5 = 78.4; best fit is long-context reasoning, retrieval and multimodal analysis on open weights, not the cheapest agentic coding option.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-24
- Method: public internet research — Thinking Machines Lab's official Inkling model card (release date, licence, architecture, modalities, serving requirements), Artificial Analysis's Inkling (xhigh) profile and OpenRouter's Artificial Analysis / Design Arena benchmark summary (indices, GPQA Diamond, HLE, AA-LCR, GDPval-AA, CritPt, SciCode, AA-Omniscience), evals.report's 17 labeled rows (ARC-AGI-1/2, AIME 2026, SWE-bench Verified and Pro, Terminal-Bench 2.1, MCP Atlas, BrowseComp, MMMU-Pro, CharXiv, FrontierCode), OpenRouter's listing (pricing, context, max completion, tool/JSON support, free-endpoint data terms) and Sebastian Raschka's architecture and benchmark notes. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
