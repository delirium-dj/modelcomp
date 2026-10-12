# Kimi K2.5 — findings by Ling 3.1 Flash

- Source: Moonshot AI / Kimi K2.5
- Date: 2026-02-02 release; researched 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weights "visual agentic intelligence" model: a 1T-total/32B-active MoE (61 layers, 384 experts, 8 routed + 1 shared per token, MLA attention) with a 400M MoonViT vision encoder. Ships in Instant / Thinking / Agent / Agent Swarm (beta) modes; first open-weight model to top SWE-bench Verified and Terminal-Bench 2.0 in its class per Vals AI.
- **Provider / access:** Moonshot API `moonshotai/kimi-k2.5`; OpenRouter; SiliconFlow, AtlasCloud, Venice, NovitaAI, Amazon Bedrock; Kimi.ai / Kimi App / Kimi Code.
- **Release / knowledge:** 2026-02-02; knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.5` (Hugging Face, open weights); `moonshotai/kimi-k2.5` (OpenRouter).
- **Context window:** 256K tokens (native); 128K max completion (Vals AI).
- **Modalities:** text + image + video in (native multimodal); text out; thinking toggle; tool calls (search, code-interpreter, web browsing); Agent Swarm multi-agent mode (beta).
- **Pricing (as of 2026-10-08):** Moonshot $0.60 / 1M input, $3.00 / 1M output (cut to $0.45 input with the K2.5.1 update, March 2026); cheapest resellers (SiliconFlow/Bedrock) $0.45 / $2.25; cache read $0.07; $371 to run the AA Intelligence Index (4× cheaper than Opus 4.5/GPT-5.2, 5× more than DeepSeek V3.2).
- **Architecture:** 1T MoE, 32B active, 384 experts (8 active + 1 shared), MLA, SwiGLU, 160K vocab; MoonViT 400M vision encoder; open weights.

### Raw benchmarks found

Moonshot tech blog (thinking mode, temp 1.0, top-p 0.95, 256K context) unless noted; AA rows are the reasoning variant.

Agent / tool use:

- τ²-bench Telecom: **95.9%** (AA) / 95.9% (Epoch)
- BrowseComp: **60.6%**; with context management: **74.9%**; Agent Swarm: **78.4%**
- WideSearch (item-f1): **72.7%**; Agent Swarm: **79.0%**; DeepSearchQA: **77.1%**; FinSearchComp T2&T3: **67.8%**; Seal-0: **57.4%**
- Terminal-Bench 2.0: **50.8%** (Terminus-2, non-thinking); AA Terminal-Bench 2.1: **45.7%**; Hard: **34.8%**
- τ-Bench Banking (AA): **14.2%**
- GDPval-AA: **Elo 1309** (AA — behind only OpenAI and Anthropic models; 66% win rate vs GLM-4.7, the prior open-weights leader)
- CursorBench v3.1: **31.9%**; Next.js Evals: **21%** (#24 of 24 — the weakest real-world coding-agent row); HumanEval: **99.0%**; ScreenSpot Pro: **70.4%**; Chatbot Arena: **1447**; Arena Elo (Code): **1433**; BullshitBench v2: **52%**

Reasoning / knowledge:

- HLE-Full: **30.1%** (text 31.5 / image 21.3); with tools: **50.2%** (text 51.8 / image 39.8) — beats Gemini 3 Pro (45.8%) and GPT-5.2 (45.5%) with tools
- AIME 2025: **96.1%** (avg@32); HMMT 2025 (Feb): **95.4%**; IMO-AnswerBench: **81.8%**
- GPQA Diamond: **87.6%** (avg@8; AA 87.9%); MMLU-Pro: **87.1%**; SimpleQA Verified: **36.9%**; AdvancedIF: **75.6%**
- AA Intelligence Index: **23.5** (Coding Index 46.8; launch-era read: **47**, #2 of 66 — Index version changed); AA-Omniscience: accuracy 35.2%, non-hallucination 34.3%, Index **−11** (hallucination rate 64%, down from K2 Thinking's 74%); CritPt: **3.1%**
- FrontierMath: **27.9%**; ARC-AGI-1: **65.33%**; ARC-AGI-2: **11.81%** (very weak); OTIS Mock AIME: **92.2%**; SimpleQA Verified: **33.9%** (evals.report) vs **36.9%** (vendor) — conflict kept; WeirdML: **45.6%** (vs GPT-5.2's 72%); MMLU: **92.0%**

Coding:

- SWE-bench Verified: **76.8%** (internal framework, non-thinking, avg of 5 runs; Vals AI 70.0%)
- SWE-bench Pro (public): **50.7%**; SWE-bench Multilingual: **73.0%**
- LiveCodeBench v6: **85.0%** (Vals AI 83.9%)
- PaperBench: **63.5%**; SciCode: **48.7%**; OJBench (cpp): **57.4%**; CyberGym: **41.3%**
- SWE-bench Verified third read: **73.8%** (evals.report official) — the three reads now span 70.0% (Vals) / 73.8% (evals.report) / 76.8% (vendor internal framework); WeirdML: **45.6%**; HumanEval: **99.0%**; CursorBench v3.1: **31.9%**; Next.js Evals: **21%** (#24/24); Arena Elo (Code): **1433**

Multimodal:

- MMMU-Pro: **78.5%** (vendor) / **75%** (AA's read) — conflict kept; ScreenSpot Pro: **70.4%**; MathVista (mini): **90.1%**; MathVision: **84.2%**; CharXiv RQ: **77.5%**; OCRBench: **92.3%**; OmniDocBench 1.5: **88.8%**; InfoVQA: **92.6%**; VideoMMMU: **86.6%**; VideoMME: **87.4%**; LongVideoBench: **79.8%**; LVBench: **75.9%**; MMVU: **80.4%**; MotionBench: **70.4%**; SimpleVQA: **71.2%**; WorldVQA: **46.3%**; ZeroBench: **9%** (11 w/ tools)

Long context:

- LongBench v2: **61.0%**; AA-LCR: **70.0%** (AA 78.0%)

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench Telecom 95.9% and BrowseComp 74.9–78.4% (Swarm) are elite agentic rows, with GDPval-AA Elo 1309 (66% win rate vs GLM-4.7), DeepSearchQA 77.1% and HumanEval 99.0%; capped by τ-Bench Banking 14.2%, Terminal-Bench 2.0 50.8%, CursorBench 31.9% and Next.js Evals 21% (#24/24).
- **Reasoning: 75/100.** AIME 96.1%, HMMT 95.4% and GPQA 87.6% are competition-tier, but HLE-Full 30.1% (50.2% w/ tools), SimpleQA 33.9–36.9%, FrontierMath 27.9%, ARC-AGI-2 11.81% and AA Index 23.5 (current page) hold it below frontier reasoning.
- **Context window: 70/100.** 256K native window with LongBench v2 61.0% and AA-LCR 70–78%; no 1M-class serving.
- **Multimodal: 85/100.** Native MoonViT vision with MathVista 90.1%, OCRBench 92.3%, InfoVQA 92.6%, ScreenSpot Pro 70.4% and strong video rows (VideoMME 87.4%, LVBench 75.9%); WorldVQA 46.3% is the weak row.
- **Coding: 78/100.** SWE-bench Verified 70.0–76.8% (three reads), LiveCodeBench v6 85.0%, SWE-bench Multilingual 73.0% and HumanEval 99.0% lead the open-weights field; SWE-bench Pro 50.7%, CyberGym 41.3%, CursorBench 31.9%, Next.js Evals 21% and WeirdML 45.6% cap it.
- **Cost efficiency: 90/100.** $0.45–$0.60 in / $2.25–$3.00 out per 1M for open weights — the cheapest model in the top 10 of both Vals indices per Vals AI; the caveat is verbosity: ~89M output tokens per AA Index run vs a 14M median (~6×), so effective per-task cost multiplies despite the flash-tier rates.
- **Overall Score: 77/100.** Mean of the five quality dims (78+75+70+85+78)/5 = 77.2 → 77; best fit for open-weights visual agentic workloads — search-augmented agents and coding fleets — at flash-tier prices. No score changes this pass: the new rows (GDPval-AA Elo 1309, HumanEval 99.0%, ScreenSpot Pro 70.4%) corroborate the existing levels, and the new caps (ARC-AGI-2 11.81%, FrontierMath 27.9%, Next.js Evals 21%, CursorBench 31.9%) sit at the model's established level.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 78 / Reasoning 75 / Context 70 / Multimodal 85 / Coding 78 / Cost 90 / Overall 77 all stand. This pass added evals.report's 34-score tracker, AA's launch analysis, two hands-on reviews (mlabonne, OpenAIToolsHub) and the Awesome Agents security review:

- **New rows:** GDPval-AA **Elo 1309** (AA — behind only OpenAI/Anthropic; 66% win rate vs GLM-4.7); FrontierMath **27.9%**; ARC-AGI-1 **65.33%**; ARC-AGI-2 **11.81%**; OTIS Mock AIME **92.2%**; SimpleQA Verified **33.9%** (evals.report) vs **36.9%** (vendor); WeirdML **45.6%** (vs GPT-5.2's 72%); BullshitBench v2 **52%**; CursorBench v3.1 **31.9%**; Next.js Evals **21%** (#24/24); HumanEval **99.0%**; MMLU **92.0%**; ScreenSpot Pro **70.4%**; Chatbot Arena **1447**; Arena Elo (Code) **1433**; SWE-bench Verified third read **73.8%** (evals.report official — the three reads span 70.0% Vals / 73.8% evals.report / 76.8% vendor); MMMU-Pro **75%** (AA) vs **78.5%** (vendor) — conflict kept.
- **AA launch analysis (2026-01-27):** first open-weights flagship with native image+video input; ~82M reasoning tokens per AA Index run (vs K2 Thinking's 95M, GLM-4.7's 160M); $371 per Index run; AA-Omniscience Index **−11** with a 64% hallucination rate (down from 74%) — "produces more confident wrong answers than correct ones" (Awesome Agents: disqualifying for fact-retrieval tasks; documented case: recommended a $210 product that actually cost $400; fabricates citations and resists correction in multi-turn).
- **Hands-on findings (mlabonne, OpenAIToolsHub, Awesome Agents):** verbosity ~89M output tokens per AA run vs a 14M median (~6× — effective per-task cost multiplies); 40.9–45 tok/s (#31–32 of 65; median 54.2), TTFT 1.2–2.84s; Agent Swarm speedups 3.9–4.1× on parallel research/monorepo review but 1.05× on sequential debugging; K2.5.1 (March 2026) fixed Swarm stability above 50 sub-agents (was ~20% failure from coordination timeouts) and cut input to $0.45/M; Qwen3.5 reports BrowseComp 78.6 with the same discard-all strategy and no swarm, and MiniMax M2.5 reports 76.3% without swarm — the Swarm advantage is narrower than the launch table implies; deployment: ~595GB INT4 (Unsloth 2-bit 375GB), vLLM/SGLang/KTransformers, GGUF vision not yet available; Fireworks 283 t/s, Baseten 336 t/s, DeepInfra $0.90 blended.
- **Security (SplxAI red-team via Awesome Agents):** 1.55% on a security benchmark with no system prompt (vs Claude Sonnet 4.6's 34.63%), 44.56% with a basic prompt (vs 67.98%), 59.52% hardened (vs 83.69%) — jailbreak resistance substantially below the Western frontier; the "Modified MIT" license produced a Cursor licensing dispute.
- **Training insights (technical report via mlabonne):** early fusion with a 10% vision ratio beat late fusion with 50% across every metric at a fixed token budget; "zero-vision SFT" activates visual reasoning from text-only fine-tuning; visual RL improved text-only benchmarks (MMLU-Pro 84.7→86.4%, GPQA 84.3→86.4%) — bidirectional transfer validating the native-multimodal approach; community signal: the model sometimes identifies itself as Claude (training-data provenance).
- **Family:** K2.6 (2026-04-20), K2.7-Code (2026-06-12, Modified MIT, 256K), K2.8 Preview (2026-09-11, 1M, proprietary) — K2.5 is three generations behind the current Kimi line.
- Still open: a 1M-class serving read, MRCR/RULER at depth, and an independent Agent-Swarm reproduction of BrowseComp/WideSearch.
- Score impact: none — the new rows corroborate the existing levels (GDPval-AA Elo 1309 supports Tool 78; HumanEval 99.0% and LiveCodeBench 85.0% support Coding 78; ScreenSpot Pro 70.4% supports Multimodal 85), and the new caps (ARC-AGI-2 11.81%, FrontierMath 27.9%, Next.js Evals 21%, CursorBench 31.9%, WeirdML 45.6%) sit at the model's established level rather than below it. Overall stays 77 ((78+75+70+85+78)/5 = 77.2).

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08 (updated 2026-10-11)
- Method: public internet research (Moonshot tech blog, HF/GitHub model card, arXiv paper, Artificial Analysis, Vals AI, OpenRouter, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
