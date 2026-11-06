# GPT-5.5 — findings by Big Pickle

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship frontier model and first fully retrained base since GPT-4.5 (codename "Spud") — a generalist agentic-coder built for computer use, long-horizon knowledge work, and genuinely usable 1M-token context, launched at exactly twice GPT-5.4's price.
- **Provider / access:** OpenAI Responses & Chat Completions APIs and GPT-side products (ChatGPT, Codex); also Azure, AWS Bedrock, OpenRouter, Vercel AI Gateway, Microsoft Foundry. Model ID `gpt-5.5`; Pro variant `gpt-5.5-pro` ($30/$180); `gpt-5.5-instant` (free tier, May 5, 2026).
- **Release / knowledge:** Released 2026-04-23 (in ChatGPT/Codex, API 2026-04-24); 37 days after GPT-5.4; knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5` (proprietary; no open weights)
- **Context window:** ~1,050,000 tokens (1M) via API; 400K in Codex; max output 128,000 tokens. Prompts >272K input are billed 2x input / 1.5x output for the whole session.
- **Modalities:** text and image input; text output (no native audio/video, no image generation).
- **Pricing (as of 2026-09-20):** $5.00 in / $30.00 out per 1M tokens ($0.50 cached input) — exactly 2x GPT-5.4 ($2.50/$15); Batch/Flex half rate ($2.50/$15); Priority 2.5x. Uses ~40% fewer output tokens than GPT-5.4 per equivalent task (AA estimated net cost-to-run closer to +20%).
- **Architecture:** Undisclosed parameter count; fully retrained pretraining; reasoning_effort control (none / low / medium-default / high / xhigh); extended thinking; NVIDIA GB200/GB300 NVL72 infra; >50 tokens/s output, <200ms first token. Artificial Analysis Intelligence Index 60 at launch (briefly world #1).

### Raw benchmarks found

Agent / tool use (OpenAI-run unless noted):

- Terminal-Bench 2.0: **82.7%** (SOTA at launch; Claude Opus 4.7 69.4%, Gemini 3.1 Pro 68.5%); Terminal-Bench 2.1: **78.2%** (observed 2026-06-18).
- OSWorld-Verified: **78.7%**; GDPval (win/tie): **84.9%**; BrowseComp: **84.4%**; CyberGym: **81.8%**; Expert-SWE (internal): **73.1%**; Tau2-bench Telecom: **98.0%**; FinanceAgent v1.1: **60.0%**.
- Toolathlon: **55.6%**; MCP-Atlas: **75.3%**; Blueprint-Bench 2: **36.2%**; AutomationBench: **12.9%**.

Reasoning / knowledge (OpenAI-run unless noted):

- GPQA Diamond: **93.6%**; ARC-AGI-1: **95.0%**; ARC-AGI-2: **84.6%** (85.0% per OpenAI table).
- HLE: **41.4%** no tools / **52.2%** with tools.
- FrontierMath: **51.7%** Tiers 1-3 / **35.4%** Tier 4 (leads all at release).
- MMLU 92.4%; MMLU-Pro 88.1%; MMMU-Pro 81.2% (Vals CoT harness 88.3%); CharXiv Reasoning 84.1%; BullshitBench v2 47%.
- Artificial Analysis Intelligence Index **60** at launch (25-remaining leader), ~55 observed later at xhigh.

Coding:

- SWE-Bench Pro: **58.6%** (trails Claude Opus 4.7's 64.3%; OpenAI footnoted possible memorization).
- SWE-bench Verified: **82.6%** (independent vals.ai harness, 3rd on board behind Claude Fable 5 95.0% and Opus 4.8 88.6%).
- DeepSWE 1.0: **64.3%**; SWE-bench Multilingual: **77.8%**; HumanEval 94.2%; Expert-SWE 73.1%.
- CursorBench 3.1/3.2: 64.3% (Extra High) and 53.8-58.4% across effort levels (vendor-reported).

Long context:

- MRCR v2 (8-needle): 128K average **94.8%**; 128K-256K **87.5%**; 256K-512K **81.5%**; **512K-1M 74.0%** (vs GPT-5.4 36.6%, Opus 4.6 32.2%).
- Graphwalks BFS 1M: **45.4%** (GPT-5.4 collapsed to 9.4%).

### Normalized scores (1–100)

- **Tool use: 67/100.** SOTA agentic-coder numbers at launch (Terminal-Bench 2.0 82.7%, OSWorld-Verified 78.7%, GDPval 84.9%), but the newer Terminal-Bench 2.1 drops to 78.2%, Toolathlon sits mid-tier at 55.6%, MCP-Atlas 75.3% is good-not-great, and nearly everything is OpenAI-run.
- **Reasoning: 67/100.** GPQA Diamond 93.6% and ARC-AGI-2 ~85% are excellent, yet HLE without tools (41.4%) trails peers (Opus 49.8%, Gemini 3.1 Pro 45.0%) and OpenAI flagged possible SWE-bench memorization — a genuinely "jagged" frontier profile.
- **Context window: 71/100.** The 1M window is the first fully usable one of its class (74.0% MRCR at 512K-1M vs GPT-5.4's 36.6%), but long sessions >272K are surcharged 2x, Codex caps at 400K, and output is limited to 128K.
- **Multimodal: 61/100.** Text + image input with strong grounded results (CharXiv 84.1%, MMMU-Pro 81.2%) but no native audio/video input and text-only output.
- **Coding: 67/100.** Terminal-Bench 82.7% and independent SWE-bench Verified 82.6% (3rd on Vals) are clearly strong, but SWE-Bench Pro 58.6% trails Claude (64.3-69.2%) and DeepSWE 64.3% is good-not-great.
- **Cost efficiency: 52/100.** $5/$30 per 1M is a flat 2x over GPT-5.4 — the largest single-release price jump in the line; ~40% token-efficiency offsets some of it (net ~+20% per task), and batch/flex halves the rate, but long-context surcharges add up.
- **Overall Score: 67/100.** Mean of the five quality dims (67+67+71+61+67)/5 = 66.6. A powerful, genuinely usable-1M agentic flagship whose 2x price hike, jagged mid-tier HLE, and sub-Claude resolution coding keep its composite score in the mid-60s.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; this pass found that the file systematically under-scored the model.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 67 | 80 | **+13** |
| Reasoning | 67 | 88 | **+21** |
| Context window | 71 | 84 | **+13** |
| Multimodal | 61 | 78 | **+17** |
| Coding | 67 | 82 | **+15** |
| Cost efficiency | 52 | 52 | — |
| **Overall** | **67** | **82** | **+15** |

**What went wrong in the original.** The raw section already contained frontier-class numbers — Terminal-Bench 2.0 **82.7%**, GPQA **93.6%**, ARC-AGI-2 **85%**, SWE-bench Verified **82.6%** — but each dimension was scored in the 60s because "nearly everything is OpenAI-run." That is a confidence discount applied to evidence that has since been independently reproduced. BenchLM now carries **73 rows** (the widest coverage in this cohort) and ranks GPT-5.5 **#19 of 1014 at 68.9/100**, above Claude Sonnet 5 (64.45) and Opus 4.6 (62.06).

**Independently corroborated, not new capability:** OSWorld-Verified **78.7%**, MCP Atlas **75.3%**, Toolathlon **55.6%**, τ²-bench **98%**, AA Agentic Index **37.3%**, GDPval-AA **42.5% / 1396 Elo**, AA ITBench **45.8%**, Tau3 Banking **39.0%**, EnterpriseOps-Gym **46.6%**, JobBench **42.7%**. Tool use 67 → 80.

**Reasoning 67 → 88 is the largest correction.** **AA-HLE 45.8%** is the best no-tools HLE reading in this cohort, with **AA-GPQA 93.5%**, **GPQA 93.6%**, **ARC-AGI-2 85%**, **ARC-AGI-1 95%**, **CritPt 27.1%**, **AA Intelligence Index 38.4**, **AA-LCR 84.3%**, and — the standout — **FrontierMath v2 85.263%** (T1–3) / **72.500%** (T4), both the highest in the cohort. The original's "jagged profile" framing does not survive these numbers.

**Coding 67 → 82.** **SWE-bench (Vals) 82.6%**, **AA Coding Index 74.9%**, **Vibe Code Bench 69.85%**, **SciCode 55.8%**, **React Native Evals 84.7%**, **LiveCodeBench (Vals) 85.3%**, **CursorBench 3.2 58.4%**; the soft spots are **SWE-bench Pro 58.6%**, **FrontierCode 1.1 43.0%** and **FrontierCode 2.0 22.6%**.

**Context 71 → 84.** The 1M window is the usable one the original described, and it is now measurable: **MRCR v2 83.1%** at 64K–128K and **87.5%** at 128K–256K, **AA-LCR 84.3%**. The >272K surcharge and 400K Codex cap remain caveats, not score drivers.

**Multimodal 61 → 78.** **MMMU-Pro 81.2%** (83.2% with Python), **AA-MMMU-Pro 79.9%**, **ExtractBench 93.35%**, **ParseBench 66.42%**, OfficeQA Pro **54.1%**. Text + image in, text out, no audio — the original's 61 undersold a strong document/vision profile.

**Cost stays 52.** **$5.00 in / $30.00 out, $0.50 cached, 1.05M / 128K output** — unchanged, and still the highest output rate in this cohort ($30 per 1M). The ~40% token-efficiency offset is real but does not rescue a 2x price tier.

**One honesty caveat.** AA-Omniscience reads **58.0% accuracy** (best in cohort) but **89.0% hallucination rate** — high knowledge, low calibration.

**Lifecycle.** Superseded by GPT-5.6 Terra (69.89), Sol (74.88) and GPT-6.1 Terra (80.79) on the same composite.

**Net assessment.** The numbers were there; the scoring was not. Corrected Overall 67 → 82 — still below Terra's 85 in this file, which is the right ordering given Terra's stronger terminal/agentic rows.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (openai.com launch post, developers.openai.com docs, aireleasetracker.com, llmreference.com, tokenmix.ai, theairankings.com, modelcap.ai, o-mega.ai; BenchLM, Vals AI, Artificial Analysis and models.dev on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchLM — GPT-5.5](https://benchlm.ai/models/gpt-5-5)
  - [models.dev — provider catalogue (opencode pricing/limits)](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.5_2.md`, using the same headings.