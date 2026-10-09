# Claude Haiku 5.5 — findings by Space Bunny

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's cheapest, fastest and most capable small model, released **2026-10-07** — the first Haiku-class model with an **adjustable effort parameter** (low/medium/high/xhigh/max). Built for high-volume, cost-sensitive work: classification, routing, extraction, compaction, summarization, subagent roles and browser/computer use. It is Anthropic's fastest model to date and, per Anthropic, costs ~75% less to run than Haiku 4.5 on average (90% cheaper for prompts ≤100K tokens).
- **Provider / access:** Claude Platform / Messages API (`claude-haiku-5-5`); Amazon Bedrock (`anthropic.claude-haiku-5-5`), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; OpenRouter (`anthropic/claude-haiku-5.5`) lists 5 providers. Anthropic also added computer use and browser use support in beta in the Python/TypeScript SDKs, calling Haiku 5.5 especially well-suited to them. No OpenCode Zen ID found.
- **Release / knowledge:** Released **2026-10-07**. Reliable knowledge cutoff **Jun 2026**; training data cutoff Jun 2026. Retirement not sooner than 2027-10-07.
- **IDs:** `claude-haiku-5-5` (Claude API), `anthropic.claude-haiku-5-5` (Bedrock)
- **Context window:** **1,000,000 tokens** (~555k words on the current tokenizer); max synchronous output **128K tokens**; up to **300K output tokens** on the Message Batches API via the `output-300k-2026-03-24` beta header. Verified on Anthropic's official model reference.
- **Modalities:** Text and images in → text out. Adaptive thinking (on by default, `medium` default effort, steerable via `effort`). Tool calls: yes; computer use and browser use: beta. JSON mode: yes. **Caveat:** it uses the newer tokenizer introduced with Claude 4.7, so the same text costs ~**30% more tokens** than on Haiku 4.5.
- **Pricing (as of 2026-10-09):** Two tiers, split at a 100K prompt boundary (~90% of Haiku traffic falls in the lower tier): ≤100K prompts — **$0.10 in / $0.50 out**, cache write $0.125, cache read $0.01; >100K prompts — **$0.50 in / $2.50 out**, cache write $0.625, cache read $0.05. Batch API 50% off. No Free tier on the API.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

> All Anthropic figures below are from the official launch page performance table (2026-10-07), which benchmarks the **default `medium` effort** setting unless noted. Independent figures are from Artificial Analysis and benchlm.ai.

Agent / tool use:

- GDPval-AA v2.1: **1620 Elo** (Anthropic) — vs Haiku 4.5 735, GPT-6 Luna 1437, Sonnet 5.5 1840
- AA-Briefcase v1.1: **1578 Elo** at Max effort; **1372 Elo** at Medium (Anthropic / AA) — vs Haiku 4.5 614, GPT-6 Luna 1336, Sonnet 5.5 1824
- OSWorld 2.1 (offline subset): **72.4%** (Anthropic) — vs Haiku 4.5 15.7%, GPT-6 Luna 48.9%, Sonnet 5.5 83.9%
- AA Harvey LAB v1.0: **89.9%** (Artificial Analysis, criterion-pass)
- AA AutomationBench: **35.4%** (Artificial Analysis)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- **Customer-reported (Anthropic launch, production evals):** Asana — >30% lower task-completion latency, up to 2.5× faster inference per agent turn vs. their incumbent; HubSpot simulated-portal CRM suite **92.8%** over three runs, best score on their suite; AlphaSense "Ask in Document" (~8M calls/week) **0.84 vs 0.76** over 400 queries vs. Haiku 4.5; Box — +11 points vs. Haiku 4.5 at ~half the latency

Reasoning / knowledge:

- Humanity's Last Exam: **45.9% no tools / 57.4% with tools** (Anthropic) — vs Haiku 4.5 10.2% / 18.7%, Sonnet 5.5 56.9% / 64.5%. AA's own harness scores **44.4%** (AA-HLE)
- Artificial Analysis Intelligence Index: **43.4%** (benchlm.ai); AA's release page headline gives **43** for the Max-effort configuration — versus Fable 5.1 at ~80 and Fable 5 at 50
- AA-LCR: **82.7%** (Artificial Analysis long-context reasoning leaderboard)
- CritPt: **18.9%** (Artificial Analysis)
- AA-Omniscience Index: **10.7%** (Artificial Analysis)
- GDP.pdf (professional document reasoning, all-pass): **20.8%** (Artificial Analysis; vs MiMo-V2.6-Pro 19.2%, GPT-6 Astra 32.2%)
- GPQA Diamond / MMLU-Pro: **no verified public score found** for Haiku 5.5 (Haiku 4.5 is listed at 72.2% / 78.7% on the Vals harness for comparison only)

Coding:

- Terminal-Bench 4.0: **39.2%** (Anthropic, pass@1) — vs Haiku 4.5 0.0%, GPT-6 Luna 16.4%, Sonnet 5.5 70.6%. Artificial Analysis's own harness reports **32.8%** on the same benchmark (harness/scaffold difference; both listed, not averaged).
- FrontierCode 1.1 (Main): **46.4%** (Anthropic system card) — above GPT-6 Luna 42.4%, below Sonnet 5.5 52.1% (xhigh). Cognition reports a **66.2** top-tier FrontierCode score for Devin Fusion *with Haiku 5.5 as sidekick* and Opus 5.5 as lead — a system result, not a single-model number.
- AA-SciCode: **55.0%** (Artificial Analysis)
- Bug Hunt Bench: **21.5 fixes** (public data)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found for this model
- Vibe Code Bench / DeepSWE: no verified public score found

Multimodal / grounded:

- Chartography (no tools): **46.4%** (Anthropic) — vs Haiku 4.5 6.4%, GPT-6 Luna 29.1%, Sonnet 5.5 61.6%
- GDP.pdf: **20.8%** (Artificial Analysis)
- MMMU-Pro / OfficeQA Pro: no verified public score found for this model

Long context:

- 1M-token context verified on the official reference page. **AA-LCR 82.7%** is the only long-context retrieval measurement (~100K-token inputs). No MRCR / RULER / GraphWalks numbers published. Note the 300K batch-output beta does not extend the *input* window.

Speed / cost efficiency inputs:

- **243 tokens/s** at Max effort (Artificial Analysis — fastest model in their Claude coverage)
- Independent measurement (ComputingForGeeks, 2026-10-08): low effort / thinking off → 0.59s TTFT, **183 tokens/s**; medium (default) → 2.66s TTFT to first visible word, 1,534 tokens total including thinking, 8.4s total
- AA cost per Intelligence Index task: **$0.02** (Low effort) — the lowest of any model on the platform
- Anthropic's own cost-per-attempt curves on OSWorld / GDPval-AA / HLE show Haiku 5.5 dominating Haiku 4.5 and GPT-6 Luna on both axes
- Anthropic: ~75% average cost reduction vs Haiku 4.5; Sonnet 5.5 cache reads were also halved to $0.10/MTok at the same launch

Safety / alignment:

- Anthropic reports major alignment improvements over Haiku 4.5: far fewer misaligned behaviors and lower willingness to cooperate with misuse. Cybersecurity safeguards are **more restrictive than Haiku 4.5's** but less restrictive than Sonnet 5.5's; they block penetration testing and attacker-likely techniques while permitting a wider range of defensive work than Sonnet 5.5 allows. Biology safeguards match Sonnet 5 / Sonnet 5.5 / Opus 5.

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld 2.1 at 72.4% (vs Haiku 4.5's 15.7%), GDPval-AA 1620 Elo and AA-Briefcase 1578 at Max effort are all frontier-adjacent, and Harvey LAB criterion-pass is 89.9%. Production customer evals (Asana, HubSpot 92.8%, AlphaSense 0.84 vs 0.76, Box +11) corroborate real-world agent quality. Capped by AutomationBench at only 35.4% and the complete absence of published Terminal-Bench 2.1, Tau3, MCP-Atlas or Claw-Eval numbers.
- **Reasoning: 82/100.** HLE at 45.9% closed-book / 57.4% with tools is genuinely strong for this class and above Haiku 4.5 by 35 points. AA-LCR 82.7% adds real long-document reasoning. Held down by an AA Intelligence Index of only 43.4, CritPt 18.9%, Omniscience 10.7%, and no published GPQA Diamond or MMLU-Pro figure at all.
- **Context window: 96/100.** 1M tokens verified on the official reference — top tier, and rare at this price point. Not 100 because the only long-context retrieval evidence is AA-LCR at ~100K inputs, with no MRCR/RULER at 512K+.
- **Multimodal: 68/100.** Verified text-and-image in, text out. Chartography 46.4% (a 40-point jump over Haiku 4.5) and GDP.pdf 20.8% show real vision improvement, but there is no video/PDF/audio input path and no non-text output.
- **Coding: 78/100.** FrontierCode 1.1 Main 46.4% and SciCode 55.0% are respectable, and Bug Hunt Bench 21.5 fixes is credible agentic evidence. Terminal-Bench 4.0 at 39.2% (32.8% on AA's harness) is the cap — Anthropic itself states Sonnet 5.5 and Opus 5.5 remain better for complex agentic coding, and Haiku 5.5 is best suited to narrowly scoped work like compaction, summarization and subagent tasks.
- **Cost efficiency: 98/100.** $0.10 in / $0.50 out with $0.01 cache reads for prompts ≤100K — the cheapest frontier-family Claude by a wide margin (90% cheaper than Haiku 4.5 at that tier), plus a 50% Batch discount and a $0.02 AA cost per Intelligence Index task. Only the >100K tier ($0.50/$2.50) and the no-Free-API caveat keep it out of the 100 range.
- **Overall Score: 83/100.** Best fit: high-volume subagent and routing workloads — classification, extraction, compaction, summarization, live customer support and browser automation — where near-frontier agentic quality at ~$0.10/$0.50 and 180–240 tokens/s matters far more than frontier reasoning depth. Use `effort: low` with thinking off for chat/autocomplete, or `medium` for subagent work.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across Anthropic's official Haiku 5.5 launch page (full performance, pricing, safety and availability tables), Anthropic's official model reference and capabilities page, the Claude Haiku 5.5 system card via benchlm.ai's sourced rows, Artificial Analysis leaderboards (Intelligence Index, HLE, LCR, CritPt, Omniscience, AutomationBench, Harvey LAB, Terminal-Bench 4.0, GDP.pdf, SciCode), an independent speed test, and OpenRouter provider listings. Kept Anthropic's and AA's differing Terminal-Bench 4.0 figures separate rather than averaging them. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.6.md`, using the same headings.