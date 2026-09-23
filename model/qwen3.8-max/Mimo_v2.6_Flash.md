# Qwen3.8-Max — findings by Mimo v2.6 Flash

- Source: Alibaba / Qwen3.8-Max (`qwen3.8-max`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (also `qwen3.8-max-0902` dated snapshot)
- **Short description:** Alibaba Cloud Qwen Team's largest 2026 flagship — a 2.4T sparse MoE multimodal foundation model aimed at coding, knowledge work, research, and long-horizon autonomous agents. Not a variant of another entry here; the open-weight sibling is `Qwen3.8-2.4T-A95B` (`qwen3.8-2.4t-a95b`).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud (`qwen3.8-max`, `qwen3.8-max-0902`); third-party hosts include Fireworks, OpenRouter, DeepInfra, Vercel AI Gateway. Chat Completions–style API with function calling, structured outputs, context cache, code interpreter / web tools on QwenCloud.
- **Release / knowledge:** announced 2026-08-03; open-weight sibling listed ~2026-08-12; snapshot `qwen3.8-max-0902` on 2026-09-02. Knowledge cutoff not published in reviewed sources.
- **IDs:** `alibaba/qwen3.8-max` / `qwen3.8-max` (QwenCloud). **No Zen Free ID** — paid pricing only (one-time 1M-token free quota noted in platform materials).
- **Context window:** 1,000,000 tokens input; 131,072 max output (LLM Reference / QwenCloud rate limits; thinking-mode max input ~983K).
- **Modalities:** text / image / PDF / video in; text out; hybrid thinking mode on by default; tool calls, JSON/structured outputs, prompt caching yes; no audio pipeline listed.
- **Pricing (as of 2026-09-23):** list **$2.00 / $6.00** per 1M in/out on QwenCloud; discounted routes from ~$1.65 / $4.95 (DeepInfra etc.); implicit cache read ~$0.17–0.25; batch half-price on first-party.
- **Architecture:** 2.4T total params, ~95B activated, sparse MoE + hybrid attention; proprietary API release (open-weight twin `Qwen3.8-2.4T-A95B` with thinking on by default).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (BenchLM public row); Vals harness **67.4%** — harness split noted
- Tau3-Banking / Tau2-Bench: no verified public score found under those exact names in reviewed rows
- GDPval-AA: no verified public score found as a standalone row; AA Intelligence Index **46.9 (#13)** embeds GDPval among its nine evals (CloudPrice/pricepertoken AA card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas: Toolathlon wins vs Plus peers on llm-stats shared set; exact Toolathlon % for Max not pinned in reviewed rows — no verified public score found for MCP-Atlas
- HLE w/ tools: **56.2%** (BenchLM)
- CoWorkBench 74.8%; JobBench 53.4%; MobileWorld 77.8%; OSWorld-class visual agent work cited by Alibaba PR (OSWorld 86.1 on open-weight sibling card via QwenCloud — treat as sibling-tied proxy)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (BenchLM); Vals GPQA-D **93.7%**; pricepertoken AA GPQA **92.7**
- HLE: **43.6%** (no tools); **56.2%** with tools (BenchLM)
- LCR / MLCR: AA-LCR not pinned for Max in reviewed rows — no verified public score found under that label; LCR rank #47 marker on CloudPrice AA card implies mid-high AA-LCR but exact value not captured
- CritPt: no verified public score found for Max in reviewed rows
- Artificial Analysis Intelligence Index: **46.9 / #13** (CloudPrice, pricepertoken — 98th percentile note)
- MMLU-Pro (Vals): **88.6%**; IFBench 82.8%; IFEval lane #16 at 90.5 composite
- Omniscience Accuracy / Hallucination Rate: no verified public score found for Max
- DesignArena / Text Arena: DesignArena Elo **1322 (#8)** among coding-elo boards; Alibaba PR: **#5 Text Arena, #2 Vision Arena** at launch

Coding:

- SWE-bench Verified: **85.6%** (BenchLM "SWE-bench (Vals)"); official Verified row not separately pinned — Vals figure cited as-is
- SWE-bench Pro: **67.7%** (BenchLM)
- LiveCodeBench: **87.9%** (Vals) / LCB v6 not listed for Max on the public v6 top-20 board — no separate v6 row found
- DeepSWE: **56.6%**; FrontierSWE **73.5%**; FrontierSWE v2 15.8%; NL2Repo 55.9%
- SciCode / AA-SciCode: no verified public standalone % captured; AA Coding Index **71.8 / #20**
- PaperBench: **93.0%**; VulcanBench v3 81.2%; OpenHarmony Bench 60.8%
- Vibe Code Bench: no verified public score found for Max

Long context:

- 1M window with long-context LLM-Stats index **#4** among reported peers; LongBench v2 wins vs Qwen3.6 Plus on llm-stats shared set
- MRCR / RULER exact retrieval curves for Max: no verified public score found in reviewed sources

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 86.6% plus strong agentic lane (#9/151 public lane, HLE-with-tools 56.2%, CoWorkBench 74.8%) sits just under the TB2.1 ~88%+ frontier band; missing Tau3/GDPval/Claw-Eval standalone rows cap the top end.
- **Reasoning: 89/100.** GPQA Diamond 92.6–93.7% and HLE 43.6% (56.2% with tools) clear the frontier references (GPQA 90+, HLE 40+); AA Index 46.9 and absent CritPt/Omniscience rows keep it from the mid-90s.
- **Context window: 94/100.** Full 1M / 131K-out lands in the ≥1M tier (95–100), held one point shy of the top because no ≥98%-at-512K retrieval proof (MRCR/RULER) was published for this exact ID.
- **Multimodal: 88/100.** Native image/PDF/video in with #2 Vision Arena placement and chart/document claims; no audio input and text-only output keep it in the video/PDF band (75–90) rather than 90+.
- **Coding: 89/100.** SWE-bench (Vals) 85.6%, LiveCodeBench 87.9%, SWE-Pro 67.7%, DeepSWE 56.6%, Coding Index 71.8 form a near-frontier stack — DeepSWE still trails the 74%+ frontier reference.
- **Cost efficiency: 90/100.** Flat $2/$6 with $0.17–0.25 cache and sub-$2 discounted routes beats the ~$1.25/$4.25 ≈88 reference on input while staying far above the $3/$15 ≈60 tier; no Free ID means it never hits 100.
- **Overall Score: 89.6/100.** Mean of (88 + 89 + 94 + 88 + 89) / 5 = 89.6; best-fit as a top-tier paid multimodal coder/agent when 1M context and sub-$3 effective rates matter more than absolute SOTA Verified rows.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: fresh public web research (Alibaba Cloud press room, QwenCloud changelog/docs, BenchLM, CloudPrice, LLM Reference, llm-stats, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
