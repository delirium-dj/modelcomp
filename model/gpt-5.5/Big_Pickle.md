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
- **Coding: 69/100.** (Raised from 67 on 2026-10-08.) Terminal-Bench 82.7% and independent SWE-bench Verified 82.6% (3rd on Vals) are clearly strong; new independent rows LiveCodeBench (Vals) 85.3%, Vibe Code Bench 69.85%, and AA Coding Index 74.9% broaden the picture; still SWE-Bench Pro 58.6% trails Claude (64.3-69.2%) and DeepSWE 64.3% is good-not-great.
- **Cost efficiency: 52/100.** $5/$30 per 1M confirmed unchanged 2026-10-08 (no price cut, unlike the 5.6 line) — a flat 2x over GPT-5.4, the largest single-release price jump in the line; ~40% token-efficiency offsets some of it (net ~+20% per task), and batch/flex halves the rate, but long-context surcharges add up.
- **Overall Score: 67/100.** Mean of the five quality dims (67+67+71+61+69)/5 = 67.0 → 67 (unchanged). A powerful, genuinely usable-1M agentic flagship whose 2x price hike, jagged mid-tier HLE, and sub-Claude resolution coding keep its composite score in the mid-60s.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 67 | 67 | — |
| Reasoning | 67 | 67 | — |
| Context window | 71 | 71 | — |
| Multimodal | 61 | 61 | — |
| Coding | 67 | 69 | +2 |
| Cost efficiency | 52 | 52 | — |
| **Overall** | **67** | **67** | **—** |

New and corrected data (all found 2026-10-08):

- **Pricing recheck: unchanged** — $5.00 in / $30.00 out / $0.50 cached (aipricinghub verified 2026-09-20; modelpricing.ai 2026-09-27; 272K+ breakpoint $10/$45). GPT-5.5 never got the 2026 price cuts its siblings (Sol/Luna/Terra) received.
- **LiveCodeBench gap filled: 85.3%** (Vals harness, independent) — was not previously listed.
- **Vibe Code Bench gap filled: 69.85%** — new independent coding surface.
- New coding/agent rows: AA Coding Index 74.9, CursorBench 3.1 59.2 / 3.2 58.4 (independent, vs vendor 64.3/53.8-58.4), SWE-bench (Vals) 82.6% confirmed, SWE-Bench Pro 58.6% confirmed, FrontierCode 1.1 Main 43.0, AA-SciCode 55.8, MCP Atlas 75.3 / Toolathlon 55.6 confirmed, **τ²-bench 98%** confirmed.
- New agentic rows: APEX-Agents (AA) 37.7, ITBench 45.8, GDPval-AA 1,396 / 42.7% normalized (vs 84.9% win/tie original), Terminal-Bench 2.1 (Vals) 76.4 (vs 78.2 observed earlier — within noise), OSWorld 2.0 only **13.0%** (harsher successor eval; OSWorld-Verified 78.7% still stands), MCP Atlas confirmed.
- New reasoning rows: **AA-HLE 45.8**, AA-GPQA 93.5 (confirmed), HLE 52.2/41.4 confirmed, FrontierMath 51.7/35.4 confirmed, ARC-AGI-1 95 / ARC-AGI-2 85 confirmed, AA-Omniscience 20.5 (accuracy 47.1, hallucination 64.9), IFBench 75.9, CritPt 27.1.
- **Artificial Analysis Intelligence Index re-based 60 → 38.4** — v4.3-scale methodology reset, not a capability regression (same era effect seen across all models).
- New multimodal row: Design Arena Website 1,262; MMMU-Pro 81.2 (83.2 w/ Python) and AA-MMMU-Pro 79.9 confirmed.
- Long context: MRCR v2 rows confirmed (64K-128K 83.1 / 128K-256K 87.5) with AA-LCR 84.3 new; the original 128K average 94.8% and 512K-1M 74.0% stand as vendor figures.
- Newer siblings shipped since: GPT-5.6 Sol/Luna/Terra (July-Aug 2026) at lower prices; BenchLM (updated 2026-10-07) ranks 5.5 at 67.79, #24/887.
- Other composites: gradually.ai 75.8/100; Kilo self-run TB2.0 74.2% / AA Coding Index 71.6 (harness variance).

Gaps still open after re-run: Terminal-Bench 4.0 (no score published for this model), Claw-Eval, CursorBench 4.0 (only 3.1/3.2 exist).

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (openai.com launch post, developers.openai.com docs, aireleasetracker.com, llmreference.com, tokenmix.ai, theairankings.com, modelcap.ai, o-mega.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.