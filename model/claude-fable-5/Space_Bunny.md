# Claude Fable 5 — findings by Space Bunny

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally-available **Mythos-class** model (a capability tier above Opus), released 2026-06-09 — the same underlying weights as the restricted Claude Mythos 5, but shipped with the strongest cyber/biology safeguards Anthropic has ever applied. Top use case: days-long, asynchronous, long-horizon agentic coding and knowledge work. Now a **legacy** model: Anthropic steers users to Claude Fable 5.1 (released 2026-09-01), which is faster and up to 45% cheaper on typical workloads.
- **Provider / access:** Anthropic Messages API (`claude-fable-5`); also Amazon Bedrock (`anthropic.claude-fable-5`), Google Cloud Vertex AI, Microsoft Foundry, and Claude Platform on AWS. Chat Completions-style Messages API. No OpenCode Zen ID found — no Free tier.
- **Release / knowledge:** Released 2026-06-09. Access was suspended 2026-06-12 (US export controls) and restored 2026-07-01. Reliable knowledge cutoff **Jan 2026**; training data cutoff Jan 2026. Retirement not sooner than 2027-06-09.
- **IDs:** `claude-fable-5` (Claude API), `anthropic.claude-fable-5` (Bedrock)
- **Context window:** **1,000,000 tokens** (~555k words on the current tokenizer); max synchronous output **128K tokens**. Verified on the official Anthropic model reference page.
- **Modalities:** Text and images in → text out. Adaptive thinking (always on, `high` default effort). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-09):** $10 / MTok input, $50 / MTok output; 5m cache write $12.50, 1h cache write $20, cache read $1.00; Batch API 50% off. Paid only — no Free tier. Fable 5 requires **30-day data retention** for safety monitoring by default (privacy caveat); Enterprise Frontier Safeguards customers can self-host review.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro: **80.3%** (Anthropic launch table, via overchat/MangoMind/Seekvana — consistent across three independent aggregators); BenchLM/benchlm.ai rounds to 80%
- Terminal-Bench 2.1: **84.3%** (benchlm.ai; Vals harness 80.5%)
- Terminal-Bench 2.1 (Mythos 5 unrestricted): **88.0%** (Anthropic, MangoMind) — starred row, Fable 5 lands closer to Opus 4.8 because cyber/biology requests fall back to Opus 4.8
- Terminal-Bench 3.0: **34.0%** (benchlm.ai)
- Terminal-Bench Hard: **62.9%** (benchlm.ai)
- OSWorld-Verified: **85%** (benchlm.ai; vs GPT-5.5 78.7%)
- GDPval-AA: **1932 Elo** (Anthropic launch; vs Opus 4.8 1890, GPT-5.5 1769); benchlm.ai lists **1747** under a different harness
- τ²-bench: **98.5%** (benchlm.ai)
- AA EnterpriseOps-Gym: **51.1%**; AA Harvey LAB: **93.6%**; AA Agentic Index: **51.0%**; AA-AnalystAgent: **48.8%** (benchlm.ai)
- ApprenticeBench: **34%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Anthropic system card via lmmarketcap); AA-GPQA Diamond **92.6%**; Vals harness 93.2% (benchlm.ai). Third-party aggregators quote ~94.6% — Anthropic-reported figure used.
- HLE (no tools): **59.0%** (Anthropic; vs Opus 4.8 49.8%, GPT-5.5 41.4%, Qwen 3.7 Max 38.1%)
- HLE (with tools): **64.5%** (Anthropic); AA-HLE **55.5%** (benchlm.ai, different harness)
- AA-LCR v1.1: **82.3%** (benchlm.ai); Artificial Analysis comparison pages consistently report **82%**
- MLCR-AA: **64.4%** (benchlm.ai)
- CritPt: **28.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **50** (AA comparison pages, Max effort + Opus 4.8 fallback config) — highest-scoring entry in every comparison page fetched
- AA Omniscience Index: **43.3%**; Omniscience Accuracy **65.4%**; Hallucination Rate **63.6%** (benchlm.ai)
- MMLU-Pro (Vals): **91.5%** (benchlm.ai)
- ARC-AGI-1: **98.50%**; ARC-AGI-2: **89.2%** (benchlm.ai, AA-verified harness)
- MMLU-Pro / GPQA Diamond note: GPQA Diamond **93.2%** (Vals) ties GPT-5.5 exactly

Coding:

- SWE-bench Verified: **95.0%** (Anthropic system card; corroborated by lmmarketcap, runfreetools, benchlm.ai — four independent sources)
- SWE-bench Pro: **80.3%** (see above)
- FrontierCode 1.1 Diamond: **29.3%** (Anthropic; vs Opus 4.8 13.4%, GPT-5.5 5.7% — gap widens on harder tasks)
- FrontierSWE v2: **47.0%** (benchlm.ai)
- LiveCodeBench (Vals): **89.8%** (benchlm.ai)
- AA Coding Index: **76.5%** (benchlm.ai)
- AA-SciCode: **61.0%** (benchlm.ai)
- cursorBench 3.2: **70.5%** / cursorBench31: **70.6%** (benchlm.ai)
- Vibe Code Bench: no verified public score found
- DeepSWE: no verified public score found (Fable 5.1 reports 67.4%, not this model)

Long context:

- 1M-token context window verified by Anthropic; **AA-LCR 82.3%** (benchlm.ai) is the closest long-context retrieval proxy. No MRCR / RULER / GraphWalks numbers published for Fable 5 specifically. Fable 5.1 reaches MRCR 83.1% at 64–128K and 87.5% at 128–256K on GPT-5.5's row — no Fable 5 row available.
- Anthropic's own long-horizon evidence is qualitative: a codebase-wide migration in a 50-million-line Ruby codebase completed in one day, and vision-only play of Pokémon FireRed.

Speed / cost efficiency inputs:

- Output speed: **57–68 tokens/s** (Artificial Analysis, multiple runs); time to first token ~110–130s (heavy adaptive thinking); cost per Intelligence Index task **$8.75**; **$11,161** to run the full AA Intelligence Index (AA comparison pages)

### Normalized scores (1–100)

- **Tool use: 97/100.** Terminal-Bench 2.1 at 84.3% (Vals 80.5%), OSWorld-Verified 85%, τ²-bench 98.5%, GDPval-AA 1932 Elo — all in or above the frontier band. Only cap: the Opus 4.8 fallback on cyber/biology prompts means real-world agentic behavior is occasionally below the Mythos 5 headline numbers, and no Claw-Eval/Toolathon/MCP-Atlas numbers are published.
- **Reasoning: 97/100.** GPQA Diamond 94.1%, HLE 59.0% without tools / 64.5% with, ARC-AGI-1 98.5%, ARC-AGI-2 89.2%, AA-LCR 82.3%, AA Intelligence Index 50. Capped slightly by CritPt at only 28.6% and an Omniscience Hallucination Rate of 63.6% (Fable 5 omits facts often despite strong reasoning).
- **Context window: 96/100.** 1M tokens verified on the official reference page — top tier. Not 100 because long-context *retrieval* evidence is thin: only AA-LCR 82.3%, no MRCR/RULER at 512K+.
- **Multimodal: 68/100.** Text and image in, text out, verified on the official capabilities table. Solid grounded-document results (OfficeQA Pro 57.9%) and strong vision-only agentic play, but no video/PDF/audio input and no non-text output path.
- **Coding: 97/100.** SWE-bench Verified 95.0% (four-source corroborated), SWE-bench Pro 80.3%, LiveCodeBench 89.8%, AA Coding Index 76.5%, AA-SciCode 61.0%. FrontierCode Diamond at 29.3% and FrontierSWE v2 at 47.0% show headroom on the hardest code-quality evals, which keeps it from the very top of the band.
- **Cost efficiency: 30/100.** $10 in / $50 out with a $1.00 cache read — the most expensive generally-available Claude model at this tier, and $8.75 per AA task with 67k output tokens per task. Batch API at 50% off and prompt caching soften it slightly; no Free tier exists.
- **Overall Score: 91/100.** Best fit: highest-stakes long-horizon agentic coding and deep knowledge-work runs where budget is secondary to capability — but migrate to Claude Fable 5.1, which is faster, cheaper, and stronger on every published benchmark.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across the Anthropic model reference, the Anthropic launch post and system-card summaries, Artificial Analysis comparison pages, ARC Prize verified results, and three independent aggregators (benchlm.ai, MangoMind, Seekvana). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1.md`, using the same headings.