# Muse Wonder 1.0 — findings by Step 5 Preview

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta Superintelligence Labs' first frontier model for personal/professional agentic work (coding, long-horizon agents, computer use), with "Active Memory" cross-conversation context and "Active Focus" goal persistence; the sibling Muse Wonder Full (more capable, subscription-only) is a separate model.
- **Provider / access:** Meta Model API (`https://dev.meta.ai`), OpenAI-SDK compatible (single `base_url` change), and Muse Code at all plans; `muse-wonder-1.0` is the API model ID. Chat Completions-style OpenAI-compatible endpoint.
- **Release / knowledge:** released 2026-10-12; knowledge cutoff not disclosed by Meta.
- **IDs:** `muse-wonder-1.0` on the Meta Model API. No free/$0 lane exists — every access path is per-token paid or subscription.
- **Context window:** 1,048,576 tokens (1M) total; 131,072 max output (per Intelligent Living's access table; AA also lists a 1M window). No separate output cap was published by Meta directly.
- **Modalities:** text, image, audio and video in; text out. Reasoning model (extended thinking); supports tool/function calling and strict JSON output (both confirmed on the Meta gateway and LLM Gateway).
- **Pricing (as of 2026-10-24):** $4.00 per 1M input, $0.20 per 1M cached input, $20.00 per 1M output. No free tier; consumer app access is tied to $20/$100 monthly Muse subscriptions, and Muse Code plans run $5/$15/$50/$200 per month.
- **Architecture:** proprietary — Meta has not disclosed parameter count or MoE layout. Trained at Meta's gigawatt-scale Prometheus data center.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Coding Agents Index (max effort, in Muse Code): **63** (Artificial Analysis; leading rival Claude Code + Sonnet 5.5 = 68; predecessor Muse Spark 1.3 = 54)
- Terminal-Bench 4.0 (agentic coding & terminal use): **52.0%** (Artificial Analysis, max effort) — conflicting independent measure: **49.49%** (vals.ai). Both well below the frontier band (Claude Sonnet 5.5 63.6%).
- AutomationBench-AA (agentic SaaS workflows): **68%** (Artificial Analysis; leader Gemini 4 Argon 78%)
- AA-Briefcase v1.1 (agentic knowledge work): **57.95% / 1659 Elo** (Artificial Analysis; leader Claude Sonnet 5.5 66.15% / 1823 Elo)
- GDPval-AA v2.1 (real-world work tasks): **63.50% / 1770 Elo** (Artificial Analysis; leader Claude Opus 5.5 1866 Elo — Muse Wonder is within ~100 Elo of the leader)
- CyberBench v1.1 (security): **80.36%** (vals.ai — tops the entire vals.ai field; Muse Wonder Full 73.63%)
- Code Migration: **62.55%** (vals.ai)
- IOI (competitive programming): **66.94%** (vals.ai)
- Tau3-Banking / Tau2-Bench: no verified public score found for this model.
- Claw-Eval / ClawProBench: no verified public score found.
- Harvey's Legal Agent Benchmark: **17.08%** (vals.ai; a known weak spot — legal agentic work)
- SWE-Marathon (Meta's own long-running-software eval): Meta claims SOTA over GPT-6 Astra and Claude Opus 5.5, but no public number was published — vendor claim only.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **52** at max reasoning effort (Artificial Analysis; ranked #10 of 215 in its comparison class and 27 of 709 models with any published API). Muse Spark 1.3 (max) = 48, Muse Wonder Full (max) = 56, Claude Opus 5.5 = 58.
- Humanity's Last Exam: **50.1%** (Artificial Analysis; leader Claude Opus 5.5 61.4%) — already above the project's 40% frontier reference.
- AA-LCR v1.1 (long-context reasoning): **80.7%** (Artificial Analysis; leader Kimi K3 88.7%)
- CritPt (physics reasoning): **28.3%** (Artificial Analysis; leader GPT-5.6 Sol 32.3%) — weakest Index component.
- AA-Omniscience accuracy: **25** per the Artificial Analysis article, but **41%** per the per-evaluation table reproduced by Intelligent Living. These two transcriptions of the same AA dataset conflict; both are listed and neither is used alone to cap a score. Knowledge is an acknowledged weakness: Claude Opus 5.5 = 46, GPT-6 Astra = 43, Gemini 4 Argon = 42.
- AA-Omniscience hallucination rate: **27%** (Artificial Analysis; third-lowest of any model scoring 45+ on the Index, behind Gemini 4 Argon at 15%). Low hallucination partly offsets low raw knowledge.
- GPQA Diamond: no verified public score found.
- LCR / MLCR: AA-LCR v1.1 80.7% above; no separate MLCR figure found.

Coding:

- SciCode: **60.3%** (Artificial Analysis; leader Claude Opus 5.5 66.9%) — above the project's 55% frontier reference.
- Vibe Code Bench v1.1: **83.09%** (vals.ai)
- ProgramBench: **0.50%** (vals.ai — an outlier low score, flagged as harness-specific)
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- DeepSWE: no verified public score found for Muse Wonder (Meta's Wonder-Full claims and Muse Spark 1.3's ~75.4% figure are not this model's numbers).

Long context:

- AA-LCR v1.1 at the full 1M window: **80.7%** (Artificial Analysis)
- MRCR / RULER / GraphWalks at 512K+: no verified public retrieval score found. The 1M window is documented by all sources; retrieval durability is not.

Speed / cost (context for cost scoring):

- Output speed: **145.2 tokens/s** (Artificial Analysis model page, Meta's own API) vs **85.4 tokens/s** (Intelligent Living citing Artificial Analysis) — conflicting figures from different crawl dates; the AA model page figure is the newer, so it is used.
- Time to first token: **26.53 s** (AA model page) vs **37.4 s** (Intelligent Living) — same conflict.
- Cost per Artificial Analysis Intelligence Index task: **$4.52** (AA article) vs **$4.54** (AA model page) — same figure to rounding.
- Output tokens per task ≈ 54k, ~10% fewer than Muse Spark 1.3 (60k); 7.69M input tokens per task (input is 76% of task cost).

### Normalized scores (1–100)

- **Tool use: 79/100.** GDPval-AA 1770 Elo is above the project's 1750 frontier reference and AutomationBench-AA 68% is solid, but Terminal-Bench 4.0 52.0% (AA) / 49.49% (vals.ai) sits mid-table and the Coding Agents Index 63 trails the leading 68. Capped below 85 by the terminal/agentic-coding gap; lifted by genuine knowledge-work strength (CyberBench 80.36%, field-leading).
- **Reasoning: 82/100.** HLE 50.1% clears the 40% frontier reference and the Intelligence Index 52 is top-ten-in-class, but knowledge is the explicit weak spot (Omniscience 25 vs 41 depending on transcription; leader 46) and CritPt 28.3% drags. A 27% hallucination rate (third-lowest overall) keeps this in the strong-but-not-frontier band. GPQA unknown, so the score is not pushed higher.
- **Context window: 97/100.** 1,048,576-token window with 131,072 max output lands in the ≥1M tier (95–100). Not 100 because no MRCR/RULER retrieval number at 512K+ was published — AA-LCR v1.1 80.7% is long-context reasoning, not pure needle retrieval.
- **Multimodal: 88/100.** Text, image, audio and video input with text-only output — broader input coverage than Muse Spark 1.3 (85) but no non-text output, which is what holds this under the 90–100 band.
- **Coding: 84/100.** SciCode 60.3% beats the 55% frontier reference and Vibe Code Bench 83.09% is strong, but no SWE-bench/LiveCodeBench figure was published and the Coding Agents Index 63 sits below the leading 68. ProgramBench 0.50% is treated as a harness outlier, not evidence.
- **Cost efficiency: 58/100.** $4.00/$20.00 per 1M with a $4.52 measured cost per Intelligence Index task — slightly worse than the project's $3/$15 ≈ 60 reference point, and far more expensive per task than GPT-6.1 Sol ($0.72) or GPT-6 Astra ($3.26). The $0.20 cached-input rate (20x discount, no cache-write fee) is a genuine partial offset for long agentic sessions.
- **Overall Score: 86/100.** Mean of the five quality dims (79 + 82 + 97 + 88 + 84 = 430 ÷ 5 = 86.0). Best fit: a 1M-context agentic/knowledge-work model at Claude Opus 5.5 pricing — reach for it on long-horizon, multimodal, document-heavy agent tasks, and for CyberBench-strength security work; skip it when per-task cost or terminal-agent throughput matters most.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research (Meta's official launch blog + model-card link, Artificial Analysis article and model page, vals.ai tables via Intelligent Living's independent reproduction, Unite.AI coverage, LLM Gateway catalog, and two DuckDuckGo discovery searches); scores are normalized 1–100 interpretations, not official vendor scores.
- Research note: three source families were compared (Meta official, Artificial Analysis, vals.ai) and conflicts are recorded inline rather than resolved silently — Terminal-Bench 4.0 (52.0% AA vs 49.49% vals.ai), AA-Omniscience (25 article vs 41 table), and speed (145.2 vs 85.4 tok/s).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
