# Claude Opus 5.5 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Anthropic / Claude Opus 5.5 (`anthropic/claude-opus-5-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Claude 5.5 flagship and first model in the new 5.5 family — performs at the level of Claude Fable 5.1 on most work while costing 40% less to run than Opus 5. Leads in agentic coding (Terminal-Bench 4.0, FrontierCode, CursorBench) and agentic knowledge work (AA-Briefcase, GDPval-AA). Top use case: long-horizon agentic coding (multi-hour sessions, code migrations, agent harnesses) and high-leverage professional knowledge work where reasoning depth > token cost.
- **Provider / access:** Anthropic API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Azure. OpenRouter / kie.ai / Vercel AI Gateway mirror the Anthropic API. Messages API; Fast mode available in Claude Code and Claude Platform (up to 2.5× speed).
- **Release / knowledge:** Released 2026-09-22 (Anthropic launch post `https://www.anthropic.com/claude-opus-5-5`). Knowledge cutoff June 2026 (LLM Stats).
- **IDs:** `anthropic/claude-opus-5-5` (canonical); `claude-opus-5-5` (API slug). No free / Contributor tier — paid only.
- **Context window:** 1,048,576 (1M) total / 128K max output on Messages API (per Morphllm + Anthropic platform docs; reproduce `https://www.morphllm.com/claude-context-window`).
- **Modalities:** Text + image in; text out. Adaptive thinking (5 effort settings: low / medium / high / xhigh / max). Tool calls (function use / tool use); JSON mode; preserved-thinking anti-distillation safeguard (API accounts created on/after 2026-08-31). Reports enabled with default safeguards; CS / bio / distillation tasks may fall back to older models transparently.
- **Pricing (as of 2026-10-13):** **$4 / $20** per 1M input / output (down 20% from Opus 5's $5/$25). **Cache reads $0.20 / 1M** (95% discount vs uncached input, up from 90% on prior Opus; 60% cheaper than Opus 5's $0.50). **Cache writes $5 / 1M** for the 5-minute TTL (down from $6.25). **Fast mode: $8 / $40 per 1M**. Zero data retention available on request. No free ID on Zen (the folder's `noFreeId: true`).
- **Architecture:** Proprietary. No parameter count published; weights not released. Adaptive thinking + classifier pre-screen on every agent action; open-source sandbox; preserved-thinking safeguard. Production-side defenses against prompt injection match or beat Opus 5 across coding / tool use / computer use / web browsing; ties Fable 5.1 for the lowest injection success on Gray Swan's IPI (1.0% over 15 attempts).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic harness, xhigh effort; Anthropic launch blog; median of peers GPT-6 Astra 57.9%, Fable 5.1 55.8% at max). Standard error ±2.6 pts.
- Terminal-Bench 4.0 (AA harness): **59.6%** — tied with GPT-6 Astra (xhigh), +11 pts over Opus 5 (Artificial Analysis article). Different harness; do not compare to the 66.4% number directly.
- FrontierCode v1.1 (Main): **54.4%** (Anthropic harness, xhigh). Beats GPT-6 Astra top score (53.3%) at ~20% cost per task.
- CursorBench 4.0: **57.8%** (max effort). Beats GPT-5.6 Sol's top score (41.7%) by 11 points at ~⅓ cost.
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic harness, max). GPT-6 Astra 64.6% reports higher here.
- AA-Briefcase v1.1: **1822 Elo** at max; **1780 Elo** at xhigh — +143 Elo over Fable 5.1 (1678). First Anthropic model whose presentation quality surpasses GPT-5.6 Sol.
- GDPval-AA v2.1: **1846 Elo** (max effort). Beats Fable 5.1 (1735), Opus 5 (1708), GPT-6 Astra (1542), GPT-5.6 Sol (1588).
- AutomationBench: **40.0%** (Zapier eval). GPT-6 Astra 41.4% very close.
- CWE-bench v1: **67.0%** (BenchLM, Agentic lane).
- OSWorld 2.1: **81.8% partial** (Anthropic). OSWorld 2.0 (BenchLM): **48.7%** — Opus 5 still wins this earlier harness.
- Toolathlon Verified Pass@1: **77.8%**; Pass@3: **82.4%**; avg 26.9 turns (BenchLM).
- PostTrainBench v1.1: **49.3%** (BenchLM, Coding).
- FrontierSWE v2: **62.3%** (BenchLM, Coding).
- Gray Swan IPI (15 attempts): **1.0%** — lowest injection success rate of any model tested (Anthropic announcement; Instruction-following BenchLM lane).
- WANDR (Perplexity, Anthropic offline web-search): **leads** Fable 5.1 and Opus 5 with lower cost per attempt.

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (Anthropic harness, max); **61.4%** (Artificial Analysis Index) — leads the Index at this number.
- HLE without tools: **64.4%** (BenchLM).
- AA Intelligence Index v4.3: **58** at max effort — top score of all 216 measured models, "highest we have measured by several points" (Artificial Analysis). +5 over GPT-6 Astra (53) and Fable 5.1 (53), +7 over Opus 5 (51).
- AA leads on 6/10 Intelligence Index evaluations: Humanity's Last Exam, SciCode, GDPval-AA, AA-Briefcase, AA-Omniscience, AutomationBench-AA.
- SciCode: **66.9%** (AA). Previous best 63.1% (Fable 5.1).
- ARC-AGI-1: **97.50%** (tie with Opus 5; BenchLM).
- ARC-AGI-2: **91.7%** (BenchLM). Opus 5: 90.4%.
- HealthBench (raw): **68.1%** (Opus 5: 67.1%); length-adjusted **60.6%** (Opus 5: 57.8%).
- HealthBench Professional (raw): **77.1%**; length-adjusted **65.6%** (Opus 5: 59.8 / 73.4).
- GMMLU: **94.3%** (Opus 5: 92.5%).
- MILU: **93.1%** (Opus 5: 92.1%).
- SpatialBench Verified: **72.0%** (Opus 5: 72.5%).
- Critic / honesty: Anthropic's automated behavioral audit (~2,000 scenarios) — strongest of any recent Claude model on nearly every misaligned-behavior measure. **~85% less likely** to cross containment boundaries than Opus 5 / Mythos 5.1; every attempt it makes is low-severity and self-reported.

Coding:

- SWE-bench Pro: **89.9%** (BenchLM, Coding; Opus 5: 79.2%, +10.7 normalized gap).
- SWE Multilingual: **93.9%** (Opus 5: 89.5%).
- SWE Multimodal: **61.4%** (Opus 5: 59.4%).
- DeepSWE: **74.2%** (Opus 5: 68.8%).
- FrontierCode v1.1 Main: **54.4%** (max); FrontierCode Extended: **63.6%** (tie with Opus 5).
- Bug Hunt Bench: **41.7 fixes** (Opus 5: 27.0).
- ProgramBench: **91.2%** (Opus 5: 93.0%; Opus 5 still slightly ahead).
- CursorBench 4.0: **57.8%** (above).
- Terminal-Bench 4.0: **66.4%** (Anthropic harness; above).
- FrontierSWE v2: **62.3%** (Coding lane).
- ArXivMath Aug 2026 (with tools): **96.9%**; (no tools): **91.2%**.
- Chartography (with tools): **89.0%** (Anthropic); (no tools) **64.4%** (BenchLM).
- Anthropic published **no SWE-bench Verified number** for Opus 5.5 (Vals public leaderboard still records Opus 5 at 97.0%).

Long context:

- GraphWalks BFS 256K–1M: **66.8%** (BenchLM).
- 1M-token context confirmed; no separate MRCR / RULER sweep published for Opus 5.5 in the sources I sampled — provisional cap.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB4.0 66.4% (Anthropic, leading), FrontierCode 54.4% (#1 main), CursorBench 57.8% (+11 pts next peer), AA-Briefcase 1822 Elo (#1), GDPval-AA 1846 Elo (#1), AutomationBench 40.0% (tied with GPT-6 Astra), Gray Swan IPI 1.0% (lowest injection success ever measured). Cap = harness differences on TB4.0 (66.4% Anthropic vs 59.6% AA) and OSWorld 2.0 regression vs Opus 5 (48.7% vs 70.6%).
- **Reasoning: 95/100.** HLE w/ tools 67.7% (frontier) / 61.4% on AA; SciCode 66.9% (#1); ARC-AGI-2 91.7%; GMMLU 94.3%; AA Intelligence Index 58 (#1 of 216). Cap = AA-LCR & CritPt listed as "behind" peers in AA Index article (no harness-matched numbers found); HLE w/o tools only 64.4%.
- **Context window: 100/100.** 1,048,576 tokens confirmed by Anthropic + Morphllm + llm-stats. GraphWalks BFS 256K–1M at 66.8%. Falls in the 1M tier mapping with measured retrieval beyond 256K → 100.
- **Multimodal: 78/100.** Image + text in; text out. Chartography 89.0% with tools, 64.4% w/o. BenchCAD Vision2Code tools 0.962 / no-tools 0.730 (BenchLM). OfficeQA Pro 67.7%, Biomedical image 71.4%. No video/audio/PDF modalities published (matches Anthropic Opus 5.5 spec). Per methodology (+image in only, no non-text out) → 75–80 band; 78 reflects verified vision strength but capped by modality coverage and OSWorld 2.0 drop (48.7% vs Opus 5's 70.6%).
- **Coding: 95/100.** SWE-bench Pro 89.9% (#1 among tracked), SWE Multilingual 93.9%, DeepSWE 74.2%, FrontierCode 54.4%, FrontierSWE v2 62.3%, Bug Hunt Bench 41.7 fixes. Cap = **no published SWE-bench Verified number for Opus 5.5 itself** (Anthropic skipped it on launch — Vals leaderboard still has Opus 5 at 97%); OSWorld 2.0 below Opus 5; ProgramBench behind Opus 5 by 1.8 pts.
- **Cost efficiency: 45/100.** Base $4/$20 per 1M (60–80% above the cheapest models on the index — Opus 5.5 ≈ $6 per max-effort task vs MiMo-V2.6-Pro ≈ $0.13 at index). Cache reads $0.20 = 95% discount (best-in-class among frontier-tier). 40% cheaper than Opus 5 on typical workloads (Anthropic + AA). Capped by absolute input/output price; not "free tier" eligible.
- **Overall Score: 93/100** Mean of `(95 + 95 + 100 + 78 + 95) / 5 = 92.6` → half-up **93**. Best fit: default Anthropic frontier for long-horizon agentic coding (multi-hour sessions, code migrations) and high-leverage professional knowledge work (finance, legal, consulting) when 1M context and tool-use reliability matter more than input token cost. Pair with cache reads to amortise the long-context premium.

---

## Signature

- Provided by: **MiniMax M3 (anthropic/claude-opus-5-5)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (Anthropic launch blog & system card, Artificial Analysis Intelligence Index v4.3 article, BenchLM comparison page, llm-stats provider telemetry, Morphllm context-window guide); cross-checked against Anthropic's per-benchmark footnotes (harness, effort level, ±2.6 / ±3.5 SE). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

