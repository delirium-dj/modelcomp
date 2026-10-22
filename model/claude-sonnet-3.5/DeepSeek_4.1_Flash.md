# Claude Sonnet 3.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic/Claude 3.5 Sonnet (`anthropic/claude-3-5-sonnet`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources: Anthropic news + engineering, BenchmarkList, BenchLM, RankLLMs, LLM-Stats). Scores the **2024-10-22 "upgraded" revision** of `anthropic/claude-3-5-sonnet` (the id's default snapshot); June-2024 (`20240620`) numbers are labelled where the two differ. New hard evidence (GPQA 59.3%, HLE 3.9%, AA Intelligence Index 9.91, SWE-bench Verified 49%) trimmed Reasoning and raised Multimodal into the repo's `+image` band; Overall unchanged.

## Model card

- **Name:** Claude Sonnet 3.5 (Anthropic, mid-2024 generation; paid, no free tier)
- **Short description:** Anthropic's 2024-era mid-tier "workhorse" Sonnet (Claude 3.5 Sonnet), a balanced text/image reasoning and coding model that set the 2024 agentic-coding baseline (solved 64% of an internal agentic coding eval, vs Claude 3 Opus at 38%). Included here as the historical reference point for later Claude Sonnet generations.
- **Provider / access:** Anthropic API and Bedrock/Vertex resellers; Messages API (Anthropic-native, OpenAI-compatible via gateways). Legacy model — superseded by the 3.7 / 4.x / 5.x Sonnet generations.
- **Release / knowledge:** Released 2024-06-20 (later 2024-10-22 "new" revision); knowledge cutoff March 2024.
- **IDs:** `anthropic/claude-3-5-sonnet` (repo `meta.json` id); snapshots `claude-3-5-sonnet-20240620` and `claude-3-5-sonnet-20241022`. No OpenCode Zen Free ID (`noFreeId: true`).
- **Context window:** 200,000 tokens; 64,000 max output (Anthropic + catalogue verified). LLM-Stats lists 200K/200K, a tracker default that conflicts with Anthropic's published limits.
- **Modalities:** text and image in, text out (strongest vision model of its era); tool use and JSON mode. No audio/video.
- **Pricing (as of 2026-10-11):** $3.00 / 1M input, $15.00 / 1M output (Anthropic list; prompt-cache read/write discounts available).
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Anthropic internal agentic coding eval: **64%** of problems solved (vendor, 2024-06-20) — https://www.anthropic.com/news/claude-3-5-sonnet
- τ-bench: **0.692** (pass^1); TAU-bench Retail **69.2%**, Airline **46.0%** (Oct revision; June retail 62.6% / airline 36.0%) — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/ , https://rankllms.com/benchmarks/claude-3-5-sonnet-benchmarks/
- BFCL-v3 **56.9%**; ACEBench **75.6%**; ComplexFuncBench **61.0%**; AgentIF **56.6%**; CRMArena **41.8%**; WildAgtEval **55.8%** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- WorkArena-L1 **56.4%**, L2 **39.1%**, L3 **0.4%**; WebArena **36.2%**; VisualWebArena **21.0%**; AssistantBench **5.2%**; WebLINX **13.7%**; MiniWoB++ **69.8%**; BabyAI **82.0** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- Claw Bench **90** points (rank 20/37, 47th pct) — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- OSWorld (computer use): screenshot-only **14.9%**, more steps allowed **22.0%** — https://rankllms.com/benchmarks/claude-3-5-sonnet-benchmarks/
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **59.3%** (BenchmarkList, Oct revision) / **59.4%** (BenchLM, Anthropic launch) — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/ , https://benchlm.ai/models/claude-3-5-sonnet
- HLE **3.9%** (text-only 4.3%); MMLU-Pro **77.2%** (alternate listing 78.4%); SuperGPQA **48.2%**; SimpleQA **28.9%**; CSimpleQA **53.5%** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- Artificial Analysis Intelligence Index **9.91** (rank 276/427, 35th pct) — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- BenchLM consolidated: **27.73 / 100**, rank #196 of 891 (4 of 626 benchmarks covered → conservative); BenchmarkList's separate "BenchLM" row shows **41** (rank 67/106) — conflict noted — https://benchlm.ai/models/claude-3-5-sonnet , https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- MedQA **83.2%** / HELM MedQA **86.5%**; MedXpertQA **26.6%**; MedAgentBench **69.7%**; ECI **87.80** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- EQ-Bench **1,080.8 Elo**; Arena-Hard v2 **33.0%** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- FrontierMath v2 Tiers 1–3 **2.069%**, Tier 4 **0.000%** (Epoch AI leaderboard) — https://benchlm.ai/models/claude-3-5-sonnet
- MGSM **92.6%**; AIME **10.0%**; MATH 500 **72.4%** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- LCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified **49.0%** (2024-10-22 revision) vs **33.4%** (2024-06-20 revision) — https://rankllms.com/benchmarks/claude-3-5-sonnet-benchmarks/ (BenchLM also lists 49% — https://benchlm.ai/models/claude-3-5-sonnet)
- SWE-bench Lite **51.3%**; SWE-bench Full **29.4%**; SWE-bench Multimodal **25.3%**; Multi-SWE-Bench **15.2%** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- LiveCodeBench **49.6%** (high) / **36.4%** (later harness); HumanEval-Mul **81.7%**; BigCodeBench **46.8%** (instruct) — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- Aider Polyglot **51.6%**; Aider Refactoring **92.1%**; FullStackBench en/zh **62.6%**; SciCode **36.6%** — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- Defects4J **44.1%** (plausible @1); RepairBench **41.8%**; Long Code Arena **0.84** mean — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- DeepSWE / SWE-Atlas / Terminal-Bench: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks value found; only the 200K window is documented — **no verified public score found**. (LLM-Stats lists 200K in / 200K out, conflicting with Anthropic's 200K in / 8K–64K out — https://llm-stats.com/models/claude-3-5-sonnet-20241022)

Multimodal:

- MMMU-Pro **51.5%** (alternate MMMU Pro listing 68.8%); MathVista **67.7%**; CharXiv-D **84.3%**; CC-OCR **72.9%**; MM-MT-Bench **7.5**; Video-MME **62.9%** (image model baseline) — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- "Our strongest vision model yet," surpassing Claude 3 Opus on vision evals (vendor) — https://www.anthropic.com/news/claude-3-5-sonnet

### Normalized scores (1–100)

- **Tool use: 62/100.** τ-bench 0.692, TAU-bench Retail 69.2%, BFCL-v3 56.9% and ACEBench 75.6% show competent 2024-era tool use, but WebArena 36.2% and AssistantBench 5.2% sit far below the 2026 agentic frontier — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- **Reasoning: 60/100.** GPQA Diamond 59.3% and ECI 87.80 are respectable for its generation, but HLE 3.9% and a very low AA Intelligence Index of 9.91 (plus BenchLM's conservative 27.73/100) push it to the bottom of the mid band — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/ , https://benchlm.ai/models/claude-3-5-sonnet
- **Context window: 70/100.** 200K tokens with up to 64K output maps to the repo's 200K band (≈70); no long-context retrieval evidence to raise it — https://www.anthropic.com/news/claude-3-5-sonnet
- **Multimodal: 60/100.** Text + image input, text output — the repo's `+image` band is 60–70, and strong vision results (CharXiv-D 84.3%, MathVista 67.7%, MMMU-Pro 51.5%, OCR 72.9%) justify the floor of that band; no audio or video — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/
- **Coding: 68/100.** SWE-bench Verified 49.0% (Oct revision), SWE-bench Lite 51.3% and HumanEval-Mul 81.7% were strong in 2024 but trail every 2026 frontier coder; LiveCodeBench has fallen to the 19th percentile — https://benchmarklist.com/models/anthropic-claude-3.5-sonnet/ , https://rankllms.com/benchmarks/claude-3-5-sonnet-benchmarks/
- **Cost efficiency: 60/100.** $3/$15 per 1M maps to the repo's ~60 band, there is no free tier, and the capability is now superseded at lower prices — https://www.anthropic.com/news/claude-3-5-sonnet
- **Overall Score: 64/100.** Mean of the five quality dims (62+60+70+60+68)/5 = 64.0. Best-fit: legacy/historical baseline reference — not a 2026 default pick.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (Anthropic launch + engineering posts, BenchmarkList model page and per-eval results, BenchLM model page, RankLLMs benchmark guide, LLM-Stats, catalogue data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
