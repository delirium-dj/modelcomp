# Muse Spark 1.3 — findings by Qwen 3.8 Max

- Source: Meta Superintelligence Labs (`muse-spark-1.3`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning flagship, built for long-horizon agentic, multi-agent and coding workflows on a 1M-token window. Tier names (Contributor / Free / Standard / Max) resolve to this one model per `RULES.md` Muse Spark tier identity — same weights, same window, only price/data-use differ.
- **Provider / access:** Meta Model API + Muse Code (terminal/CI agent). Paid developer access opened 2026-09-03. Chat-completions-style hosted endpoint.
- **Release / knowledge:** Released 2026-09-02 (four weeks after Muse Spark 1.2); knowledge cutoff not published.
- **IDs:** `meta/muse-spark-1.3` (no free Zen ID confirmed; proprietary closed weights, open-weights release on roadmap with no date).
- **Context window:** 1,000,000 tokens total; MRCR retrieval 98.5% at 256k–512k and 98.1% at 512k–1M (vendor table, verified via Flowtivity release analysis).
- **Modalities:** text + image in, text out; reasoning yes (max-reasoning mode gated behind extra safety testing); tool calls yes; strong instruction fidelity across long agent runs.
- **Pricing (as of 2026-10-20):** $1.25 / 1M input, $0.15 / 1M cached input, $4.25 / 1M output (llm-stats.com). ~20% fewer tool calls and ~25% fewer tokens than 1.2 on the same engineering workflows ("thought compression" token efficiency).
- **Architecture:** proprietary (closed weights); multimodal reasoning model from MSL, Hyperion-anchored stack.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta vendor table; tied with GPT-5.6 Sol)
- JobBench: **64.9%** (Meta vendor table; just behind Claude Opus 5)
- OSWorld 2.0: **66.9%** (Meta vendor table; just behind Claude Opus 5)
- AutomationBench: **49.4%** (Meta vendor table; behind Claude Opus 5)
- Agentic IF Index: **57.8%** (instruction fidelity across long agent runs; trails both rivals)
- GDPval-AA v2: **1754 Elo** (economically valuable knowledge work; behind Claude Opus 5)
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **50.2%** (lineage — multi-agent "Contemplating" mode figure reported for the Muse line, not a 1.3-specific standalone number; treat as provisional)
- DeepSearchQA: **89.4%** (multi-source web research and synthesis; trails both rivals)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for 1.3 (original Muse Spark scored 52 on AA Index v4.0 in April 2026)

Coding:

- DeepSWE 1.1: **75.4%** (best of tracked models; end-to-end agentic software engineering)
- SWEAtlas CodeBase QnA: **59.4%** (ahead of every rival on Meta's table; unfamiliar-codebase comprehension)
- SWE-bench Verified: no verified public score found for 1.3 (original Muse Spark posted 52.4% in April 2026 — lineage only)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR: **98.5%** at 256k–512k and **98.1%** at 512k–1M (up from 66.3% / 55.5% on 1.2) — best-in-class long-context retrieval.

> Caveat: the comparison table ran 1.3 at max reasoning vs 1.2 at xhigh, and rival figures are Meta's own runs (not OpenAI/Anthropic published numbers). Treat vendor-table rows as marketing until independent trackers verify.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 88.8% (tied best) plus solid JobBench 64.9% / OSWorld 66.9%; capped by AutomationBench 49.4% and Agentic IF 57.8% trailing Claude Opus 5.
- **Reasoning: 91/100.** DeepSearchQA 89.4%, GDPval-AA 1754 Elo and inherited HLE strength; capped because knowledge-work rows sit behind Claude Opus 5 and lack independent verification.
- **Context window: 99/100.** 1M-token window with 98.5%/98.1% MRCR retrieval — best tracked; a hair off 100 pending third-party confirmation.
- **Multimodal: 78/100.** Vendor describes a multimodal reasoning model (text + image in), but no vision-specific benchmark (MMMU-Pro, etc.) was published for 1.3, so the score stays mid-high.
- **Coding: 95/100.** DeepSWE 1.1 75.4% (best of tracked) and SWEAtlas 59.4% (ahead of all rivals); capped only by the vendor-table provenance and absent SWE-bench Verified number.
- **Cost efficiency: 82/100.** $1.25/$4.25 with ~25% token-efficiency advantage makes it cheap-to-run for a frontier model, but it is still a paid tier (not $0).
- **Overall Score: 91/100.** Mean of Tool 92 + Reasoning 91 + Context 99 + Multimodal 78 + Coding 95 = 91. Best fit: long-horizon agentic coding, whole-codebase comprehension and 1M-context document work where token efficiency matters.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Flowtivity release analysis of Meta AI Research's announcement, llm-stats.com pricing/specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
