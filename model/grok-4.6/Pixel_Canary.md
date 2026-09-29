# Grok 4.6 — findings by Pixel Canary

- Source: xAI (`xai/grok-4.6`), OpenCode catalog `opencode/grok-4.6`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (xAI's August 2026 flagship coding/agentic model; **no OpenCode Zen Free ID** for this ID)
- **Short description:** xAI's proprietary frontier "coding model" generation: a 500K-context reasoning model with text+image input, priced at $2/$6 per 1M, whose published strength is agentic software work (SWE-bench 95.6% on the Vals harness, AA Coding Index 76.8) and vertical service work (τ³-Banking #2 of 106, Tax Agent Bench #5 of 20).
- **Provider / access:** xAI API (`xai/grok-4.6`) and OpenCode/Vercel AI Gateway listings; OpenAI-compatible endpoint with tool calling, structured output and web search. Reasoning effort exposed as Thinking Medium / Thinking High / Extra-High.
- **Release / knowledge:** released **2026-08-12** (models.dev + LLMLearner), knowledge cutoff **2026-02-01**; architecture undisclosed.
- **IDs:** `xai/grok-4.6`, `opencode/grok-4.6`; no Zen Free variant.
- **Context window:** **500,000 tokens** (BenchLM and models.dev agree; models.dev also lists a 500K generation ceiling).
- **Modalities:** Text + image in; text out. Reasoning: yes (effort-graded). Tool calling, function calling, structured output, web search all listed.
- **Pricing (as of 2026-09-29):** $2.00 / 1M input, $6.00 / 1M output, **$0.50 cached input** (effective 2026-08-12); blended 4:1 ≈ $2.80 / 1M. No free tier for this ID.
- **Architecture:** proprietary, weights not published; technical report referenced by xAI but parameter count undisclosed.

### Raw benchmarks found

BenchLM profile `grok-4-6` (updated 2026-09-28) — composite **69.02/100, rank #18 / 512**; LLMLearner carries **47 results**, best-in-6-of-10 categories.

Agentic / tool use:

- τ³-Banking: **50.7%** — **#2 of 106**; APEX-Agents: **57.5%** — **#2 of 7**
- GDPval-AA v2: **1663 Elo** (#7/14; BenchLM lists 1643 / 55.3% normalized); AA-Briefcase **1545 Elo**
- Tax Agent Bench **70.8** (#5/20); Public Benefits Bench v1.1 **66.8** (#9/26); Legal Research Bench **48.1** (#7/41)
- AA Agentic Index **53.4%**; AutomationBench-AA reported best; SAGE **28.9** (**last, 55/55**); Harvey Legal **15.8** (#38/39)
- Terminal-Bench 2.1 (Vals) **78.3–88.4%** (#8/51); Terminal-Bench 3.0 **26.0–26.5%** (#7/11); Terminal-Bench 4.0 **20.3%** (#21/54)

Coding:

- SWE-bench (Vals): **95.6%**; LiveCodeBench (Vals): **88.2%**; AA Coding Index **76.8%**
- DeepSWE **65.9–67.5%** (#17/43); APEX-SWE **56.4%** (#2/3); CursorBench 3.2 **69.9** (#3/5); CursorBench 4.0 **41.4** (#8/13)
- FrontierCode 1.1 **61.3** (#4/7); IOI (Vals v2) **47.6** (#19/25); Vibe Code Bench v1.1 **76.2** (#20/58)
- AA Coding Agent Index v1.5 **47** (#8/10); Code Migration **44.6** (#14/42); AA-SciCode **56.5%**; SciCode **56.5%** (#16/87)

Reasoning / knowledge:

- GPQA Diamond **94.0%** (#11/187; AA-GPQA Diamond 94.9, Vals 94.7); MMLU-Pro (Vals) **89.4%**
- HLE (AA) **42.9%**; FrontierMath v2 **66.0** (#18/43); Tier 4 v2 **31.7** (#16/41); ProofBench v1.1 (Lean 4) **51.0** (#16/27)
- CritPt **17.1–19.7%** (#21/122); ARC-AGI-1 **87.5** (#24/64); ARC-AGI-2 **67.1** (#20/58); ARC-AGI-3 **2.1** (#5/16)
- Artificial Analysis Intelligence Index **44.3**; ECI **156** (#18/167); SimpleBench **75.9** (#13/93)
- AA-Omniscience: Accuracy **48.2%**, Hallucination Rate **34.3%**, Omniscience Index **30.5**

Long context / multimodal:

- AA-LCR: **80.3%**; Context Arena **81.4** (#20/49); EBR-bench **30.5**
- GDP.pdf **17.8** (#21/80); Design Arena Website Elo **1299**; no MMMU-Pro / video / audio row for this ID
- Terminal-Bench-Science 0.1 **7.1** (#11/13); MedCode 44.7 (#27/54); MedScribe **86.5** (#15/56); MysteryMechanism 30.6 (#8/13)
- MRCRv2 / RULER / GraphWalks: no verified public score found for this exact ID

- **Tool use: 80/100.** Best-in-class vertical service work — τ³-Banking 50.7% (**#2 of 106**), APEX-Agents 57.5% (**#2 of 7**), GDPval-AA v2 1663 Elo (#7/14), Tax Agent Bench 70.8 (#5/20) — but the frontier agentic boards are much weaker: Terminal-Bench 4.0 20.3% (#21/54), Terminal-Bench 3.0 26.0%, SAGE **last of 55** and AA Harvey LAB 15.8 (#38/39).
- **Reasoning: 76/100.** GPQA Diamond 94.0% (#11/187), ARC-AGI-1 87.5, ARC-AGI-2 67.1 and ECI 156 (#18/167) are strong, and AA-Omniscience accuracy 48.2% with a 34.3% hallucination rate (Index 30.5) is one of the better honesty profiles; capped by HLE 42.9%, CritPt 19.7% and AA Intelligence Index 44.3.
- **Context window: 70/100.** 500K tokens with AA-LCR 80.3% and Context Arena 81.4 (#20/49); capped because the window is half the 1M now standard at this price class, EBR-bench persistence is only 30.5, and no MRCRv2/RULER/GraphWalks retrieval-depth row is published.
- **Multimodal: 52/100.** Text + image in, text only out; measured evidence is thin — GDP.pdf 17.8 (#21/80) and Design Arena 1299 — with no MMMU-Pro, chart-reading, screen or video row for this ID and no audio/video path.
- **Coding: 84/100.** SWE-bench (Vals) **95.6%**, LiveCodeBench (Vals) 88.2%, Terminal-Bench 2.1 88.4% (#8/51) and AA Coding Index 76.8 make it a top-tier agentic coder; held below 90 because DeepSWE is 67.5% (#17/43), AA Coding Agent Index v1.5 47 (#8/10), Terminal-Bench 4.0 20.3%, and the headline numbers come from the Vals harness rather than the canonical SWE-bench Verified board.
- **Cost efficiency: 76/100.** $2.00 / $6.00 per 1M with $0.50 cached input (blended ≈ $2.80) and no OpenCode Zen Free ID, no batch or off-peak discount — roughly 13× DeepSeek V4.1-Flash and ~3.5× MiMo-V2.6-Pro per token for a materially better coding result.
- **Overall Score: 72.4/100.** (80 + 76 + 70 + 52 + 84) / 5 = 72.4 — a premium paid agentic coding model whose strengths are repository work and structured service workflows, not long context, multimodality, or unsupervised factual answers.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `grok-4-6` refreshed 2026-09-28: composite 69.02/100, #18/512; LLMLearner 47-row benchmark snapshot with ranks; models.dev pricing/limit index for `xai/grok-4.6`). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

