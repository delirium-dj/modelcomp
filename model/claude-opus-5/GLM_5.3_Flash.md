# Claude Opus 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (paid API model, no Free-tier wording)
- **Short description:** Anthropic's July-2026 frontier Opus-tier agentic coding/knowledge-work model, positioned as "close to Fable 5 intelligence at half the price." Now the legacy Opus tier: superseded by Claude Opus 5.5 on 2026-09-22, but still served on all platforms.
- **Provider / access:** Anthropic Claude API `claude-opus-5` (Messages API, `https://api.anthropic.com/v1/messages`); also Amazon Bedrock `anthropic.claude-opus-5`, Google Cloud (Vertex AI) `claude-opus-5`, Microsoft Foundry `claude-opus-5`, Claude Platform on AWS. Not open-weights; no Chat Completions-native API (Anthropic Messages format; OpenAI-compatible endpoints not offered by Anthropic).
- **Release / knowledge:** Released 2026-07-24; reliable knowledge cutoff May 2026 (training data cutoff May 2026).
- **IDs:** `anthropic/claude-opus-5` on Claude API / Bedrock / Vertex / Foundry; no Free ID exists on OpenCode Zen.
- **Context window:** 1,000,000 tokens total, served by default with no beta header and no long-context premium (~555k words / 2.5M Unicode chars); max output 128K tokens synchronous (up to 300K via Message Batches API `output-300k-2026-03-24` beta header). Verified from Anthropic platform docs (model overview page, retrieved 2026-11-02).
- **Modalities:** Text and images (incl. PDF) in → text out; no audio or video input; no image generation. Reasoning: yes — adaptive thinking (always available, effort-steered, default effort `high`). Tool calls: yes — client- and server-side tools (bash, code execution, computer use, text editor, web search, MCP connector, memory); note web fetch tool is NOT available on this model. JSON/structured outputs and streaming supported on the Messages API.
- **Pricing (as of 2026-11-02):** Paid only: $5 / $25 per 1M tokens (in / out); 5m cache write $6.25, 1h cache write $10, cache read $0.50; Batch API 50% off; Fast mode ≈2.5× speed at 2× price. List prices confirmed unchanged in Anthropic's 2026-09-22 price list and platform docs. No free tier; no data-retention requirement for general API access.
- **Architecture:** Proprietary, closed weights; parameter count and architecture undisclosed by Anthropic. Effort-steerable adaptive reasoning; safety-classifier fallback to Opus 4.8 available. Retirement committed "not sooner than 2027-07-24."

### Raw benchmarks found

Agent / tool use:

- Frontier-Bench v0.1: **43.3%** (Anthropic announcement charts / DataCamp; mini-SWE-agent harness, mean reward over 5 attempts — SOTA at release, >2× Opus 4.8's 18.7%)
- Terminal-Bench 4.0: **53.9% ±3.2%** (tbench.ai official leaderboard, Claude Code agent, xhigh effort, rank 6 at retrieval); **53.5%** (Vals AI, Mini-SWE-agent, rank 10)
- Terminal-Bench 2.1: **84.6%** (Vals AI, effort high; 81.3% when fallback-assisted runs counted as failures); **89.1%** (BenchmarkList aggregation, 97th percentile)
- Terminal-Bench 3.0: **42.7%** (Terminal-Bench 3.0 leaderboard via BenchLM; 43.3% pass@1 at max effort per BenchmarkList)
- Terminal-Bench-Science 0.1: **30.0%** (public leaderboard, Claude Code, 3 trials/task; Anthropic's own reproduction 29.0%, ±3.5–5 pts); **27.1%** (Vals AI)
- Tau3-Banking: **48.7%** (taubench.com official leaderboard, banking_knowledge pass^1, Sierra standard submission, max effort — rank #2 behind Qwen 3.8 Max 55.2%); **44.7%** (Artificial Analysis harness via BenchmarkList, 94th pct); **44.0%** (Mercor-run half-duplex agent harness, max reasoning)
- Tau2-Bench (retail/airline/telecom Overall): no verified public score found — Opus 5 has only banking_knowledge submissions on the official board
- GDPval-AA v2: **1,861 Elo** (Artificial Analysis, max effort — highest published at release, >100 Elo ahead of Fable 5 and GPT-5.6 Sol); **61.1%** (AA percentage-scale variant)
- OSWorld 2.1: **74.0%** (Anthropic Opus 5.5 system-card comparison table)
- BrowseComp: **90.8%** (Anthropic Claude Opus 5 system card; 93.6% in 10-agent pre-release config)
- AutomationBench (Zapier): **26.0%** (system card via BenchLM; Anthropic announcement claims ~1.5× next-best model at same cost, top of leaderboard at release)
- Toolathlon: **73.1%** verified pass, 23.5 avg turns (system card via BenchLM)
- AA Agentic Index: **56.2%** (Artificial Analysis model benchmarks)
- MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.4% ±1.2** (Vals AI, rank 8/138, effort max; 92.4% in Vals few-shot-CoT snapshot of 2026-09-01)
- HLE (with tools): **64.7%** (Anthropic system card via BenchLM); **63.6%** (BenchmarkList aggregation, 89th pct)
- ARC-AGI-1: **97.5%** (BenchLM aggregation)
- ARC-AGI-3: Anthropic reports ~3× the next-best model's score at release (announcement); no verified absolute public score found
- MMLU-Pro: **91.6%** (Vals AI, rank 2/138)
- DeepSearchQA: **95.0%** (Anthropic announcement)
- CritPt: no verified public score found (contributes to AAII v4.3.2 aggregate only; per-benchmark value unpublished)
- AA-LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: **61** at release (AA article 2026-07-24 — narrowly #1 on the then-current index, ahead of Fable 5 max 60, GPT-5.6 Sol max 59, Kimi K3 57); **51** current on AAII v4.3.2 after recalibration (#18 of 221; Xhigh 50, Medium 45)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **96.0%** (Anthropic system card; BenchmarkList rank 1/57); **97.0% ±0.8** (Vals AI harness, rank 1/88)
- SWE-bench Pro: **79.2%** (Anthropic system card; 93rd pct — field leader Opus 5.5 at 89.9%)
- SWE-bench Multilingual: **89.5%** (system card; field leader O-5.5 at 93.9%)
- SWE-bench Multimodal: **59.4%** (system card)
- DeepSWE: **68.8%** (system card)
- LiveCodeBench: **89.0% ±0.9** (Vals AI, rank 4/143)
- Vibe Code Bench v1.1: **88.4%** (Vals AI)
- AA Coding Agent Index: **78** (Anthropic announcement; Artificial Analysis confirms joint #1 at release with Claude Code at xhigh effort, incl. top SWE-Atlas-QnA)
- AA-SciCode: **56.4%** (Artificial Analysis)
- FrontierCode 1.1: **53.4%** main / **63.6%** extended (system card via BenchLM)
- Android Bench: **91.8%** (87.4–95.7, rank 1/46, BenchmarkList)
- IOI: **84.3% ±10.0** (Vals AI leaderboard; 91.7% on Vals IOI v1 per their release note)
- RiemannBench: **79.0%** with tools (BenchmarkList, rank 1/8)

Long context:

- GDM-MRCRv2 (8-needle) at 128K: **91.3%** (#3 of 184 models; AUC@128K **97.5%**, #1) (Context Arena, max effort, 1M-token model)
- Full-window (≈1M) retrieval: no verified public score found for Opus 5 — GraphWalks BFS 1M and MRCR at 1M have not been published for this model (1M-depth column empty on Context Arena)
- RULER at window length: no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic stack — Frontier-Bench v0.1 43.3% (SOTA at release), Terminal-Bench 4.0 53.9% (top-6, Claude Code), TB 2.1 84.6%, Tau3-Banking 48.7% (#2), OSWorld 2.1 74.0%, BrowseComp 90.8% — capped because the 5.5-generation (Opus 5.5 64.8% on TB 4.0) and Qwen 3.8 Max on tau3 have since passed it, and it has no official Tau2 Overall score.
- **Reasoning: 93/100.** GPQA Diamond 93.4%, HLE w/tools 64.7%, ARC-AGI-1 97.5% with an unprecedented ~3× next-best claim on ARC-AGI-3, and AA Intelligence Index #1 at release (61) — capped by the recalibrated current AAII of 51 (#18/221) and unpublished absolute ARC-AGI-3/CritPt/LCR values.
- **Context window: 92/100.** Full 1M-token window by default with no long-context premium and 128K (300K batch) output, with strong verified short-range retrieval (MRCRv2 8-needle 128K 91.3%, AUC #1) — capped because no public benchmark verifies retrieval near the full 1M depth for this model.
- **Multimodal: 72/100.** Image and PDF input with text output — MMMU-Pro 89.9% (Vals, #2/93) and SWE-bench Multimodal 59.4% — capped by no audio/video input and no image generation output.
- **Coding: 94/100.** SWE-bench Verified 96–97% (rank 1), SWE-bench Pro 79.2%, LiveCodeBench 89.0%, Vibe Code Bench 88.4%, AA Coding Agent Index joint #1 at release — capped by SWE-bench Pro sitting ~10.7 pp behind Opus 5.5 and a mid-pack TB 4.0 against the newest frontier cohort.
- **Cost efficiency: 62/100.** $5/$25 per 1M tokens with no free tier — genuinely strong value at launch (AA measured $2.03 per Intelligence-Index task vs Fable 5's $2.75, 26% lower, at effectively equal intelligence), but it is now the worst-value Opus: Opus 5.5 costs $4/$20 and runs 40% cheaper, Sonnet 5.5 $2/$10.
- **Overall Score: 89/100.** Half-up mean of the five quality dims (92 + 93 + 92 + 72 + 94) / 5 = 88.6 → 89; best fit for long-horizon agentic coding and professional knowledge work where top-tier reliability outweighs the now-superseded price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5 — Anthropic (2026-07-24)](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 model overview — Claude Platform docs](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [Opus 5: Fable 5 level intelligence at a lower cost per task — Artificial Analysis](https://artificialanalysis.ai/articles/opus-5)
  - [Claude Opus 5 — Vals AI benchmark suite](https://www.vals.ai/models/anthropic_claude-opus-5)
  - [Terminal-Bench leaderboard — tbench.ai](https://www.tbench.ai/)
  - [τ-bench / τ²-bench / τ³-Banking leaderboards — Sierra](https://taubench.com/)
