# Claude Opus 5.5 — findings by Big Pickle

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** First model of Anthropic's Claude 5.5 family and the enterprise Opus workhorse (released 2026-09-22): Fable-5.1-level performance at ~40% lower running cost than Opus 5, with always-on adaptive thinking, 1M context and 128K output. Distinct entry from `claude-opus-5`, `claude-opus-4.8` and `claude-fable-5.1`.
- **Provider / access:** Claude API / AWS Bedrock (`anthropic.claude-opus-5-5`) / Google Vertex / Azure Foundry (`claude-opus-5-5`); on OpenCode Zen `opencode/claude-opus-5.5` (Chat Completions-style endpoint).
- **Release / knowledge:** 2026-09-22 (AWS same day); knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-opus-5-5`, `opencode/claude-opus-5.5`
- **Context window:** 1,000,000 tokens input; max output 128,000 (300K in batch beta). Thinking: adaptive, always on (default effort "medium").
- **Modalities:** text + image input; text output; native tool/tool-loop use + Fast mode (up to 2.5× speed in Claude Code); no non-text output.
- **Pricing (as of 2026-09-24):** $4.00 / $20.00 per 1M input/output (20% below Opus 5); cache reads $0.20/1M (60% below); cache writes $5 (5m) / $8 (1h). Paid only.
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **58** (max effort — highest AA has measured by several points; AA article)
- GDPval-AA v2.1: **1846 Elo** (max effort; Fable 5.1 1735, Opus 5 1708) — at default effort beats GPT-6 Astra at max for ~1/5 cost/task
- Terminal-Bench 4.0: **leading score** — parity with GPT-6 Astra (AA; Opus 5 public-ledger reference 51.8%)
- AutomationBench-AA: **leading** (AA)
- Claw-Eval / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- HLE: **61.4%** (AA-measured, best recorded; prior best 59.1% Fable 5.1)
- AA-Omniscience / AA-Briefcase v1.1: **leading** (AA)
- GPQA Diamond / LCR / CritPt: no verified public score found for Opus 5.5

Coding:

- SciCode: **66.9%** (AA-measured; prior best 63.1% Fable 5.1)
- FrontierCode (default effort): **beats GPT-6 Astra at ~20% of the cost per task** (Anthropic)
- SWE-bench Pro: **outscored GPT-5.6 Sol (64.6%) at roughly 1/3 the cost** (Anthropic/BNN); Opus 5 reference 79.2%
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found for Opus 5.5

Long context:

- No verified MRCR/RULER/GraphWalks retrieval at 1M found; 1M window documented.

### Normalized scores (1–100)

- **Tool use: 95/100.** GDPval-AA 1846 Elo and TB 4.0/AutomationBench-AA parity with Astra put agentic performance at the measured frontier (GDPval ~1750+ per methodology).
- **Reasoning: 95/100.** HLE 61.4% is the best AA-measured score to date and Intelligence Index 58 is several points above any prior measurement (index 60+ is the 90–100 frontier per methodology).
- **Context window: 98/100.** Full 1M window with 128K output (≥1M tier); not 100 because no independently verified ≥98% retrieval at 512K+ for this release.
- **Multimodal: 68/100.** Text + image input, text output (image-in per methodology 60–70); no audio/video in or non-text out.
- **Coding: 93/100.** FrontierCode beating Astra at 20% cost and SciCode 66.9% (best-measured) are frontier-tier coding credentials, just shy of the DeepSWE-74%+ ceiling on missing raw rows.
- **Cost efficiency: 78/100.** $4/$20 with $0.20 cache reads and ~30% faster output nets ~40% lower run cost vs Opus 5 (methodology $5/$25 ≈ 60, $4/$20 ≈ 65, adjusted up for the cache/token-efficiency stack) — strong value for an Opus-tier model.
- **Overall Score: 90/100.** Mean of five quality dims (95+95+98+68+93)/5 = 89.8 → 90. Best fit: frontier agentic/knowledge workhorse with enterprise-grade cache economics; top choice when output quality dominates budget.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (Anthropic launch post + platform docs, Artificial Analysis, AWS what's-new, BNN Bloomberg, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.