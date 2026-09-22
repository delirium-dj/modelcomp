# Muse Spark 1.2 Free — findings by GPT-5.6 Terra

- Source: Meta / Muse Spark 1.2 Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1 2 Free
- **Short description:** OpenCode Zen's free Contributor access tier for Meta's Muse Spark 1.2, a proprietary reasoning model aimed at agentic coding and long-context work.
- **Provider / access:** OpenCode Zen free tier; upstream API model ID `muse-spark-1.2` is listed by provider/model catalogs.
- **Release / knowledge:** Released 2026-08-05; knowledge cutoff not publicly stated in the reviewed material.
- **IDs:** `muse-spark-1.2`; OpenCode reports the free-tier ID as `muse-spark-1.2-contributor-free`.
- **Context window:** 1,048,576 tokens (1M); a 944K maximum output is listed by ModelCap, subject to provider limits.
- **Modalities:** Text and image input with text output are reported by model catalogs; full audio/video support was not established in the reviewed sources.
- **Pricing (as of 2026-09-18):** Free OpenCode Zen Contributor tier; standard API listing $1.25 input / $4.25 output per 1M tokens.
- **Architecture:** Proprietary; no public parameter-count disclosure located.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%**; GDPval-AA v2: **1628 Elo**; JobBench: **61.6%** (BenchmarkList aggregation).
- Tau3-Banking: **34.8%**; AutomationBench: **38.2%**; AA-Briefcase: **1363** (BenchmarkList aggregation).
- Toolathlon-Verified: **75.9% pass@1**, **87.0% pass@3**, **63.0% pass^3** (The Model Gap, sourced to Toolathlon).
- Claw-Eval / ClawProBench and MCP Atlas: no public score was located in the reviewed benchmark aggregations.

Reasoning / knowledge:

- GPQA Diamond: **90.4%**; HLE: **45.46%** (The Model Gap, sourced to Artificial Analysis).
- Artificial Analysis Intelligence Index: **54** at xhigh reasoning (Artificial Analysis launch analysis).
- CritPt: **17.7%**; SimpleBench: **74.5%**; SimpleQA Verified: **60.3%** (OpenCharts, sourced to Epoch AI).
- LCR / MLCR and Omniscience Accuracy / Hallucination Rate: no public result was located in the reviewed sources.

Coding:

- SWE-bench Verified: **86.6% ±1.52** (Vals AI Mini-SWE-agent row, reported by The Model Gap).
- DeepSWE v1.1: **55.0% ±2%** (DeepSWE board, reported by The Model Gap); BenchmarkList reports **59.3%** on its aggregation, so the harness/source distinction is retained.
- SciCode: **56.4%**; SWE Atlas Codebase QnA: **46.2%**; Code Arena WebDev: **1534.3 Elo** (BenchmarkList/OpenCharts aggregations).
- LiveCodeBench and Vibe Code Bench: no public score was located in the reviewed sources.

Long context:

- 1M-token context is documented; no public MRCR, RULER, or GraphWalks retrieval result was located in the reviewed sources.

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.1 at 82.9%, Toolathlon pass@1 at 75.9%, GDPval-AA v2 1628 Elo, and JobBench 61.6% indicate strong tool and knowledge-work performance; lower τ³-Banking and AutomationBench results cap it.
- **Reasoning: 86/100.** GPQA Diamond 90.4%, HLE 45.46%, SimpleBench 74.5%, and AA Intelligence Index 54 support a high score; CritPt at 17.7% and uneven coverage cap it.
- **Context window: 95/100.** The documented 1M-token window is top tier, capped by absence of a public retrieval-at-length score.
- **Multimodal: 84/100.** Text/image coverage and Vision Arena 1292 support meaningful multimodal use, but the full I/O matrix and audio/video coverage remain undocumented here.
- **Coding: 85/100.** SWE-bench Verified 86.6%, Terminal-Bench 2.1 82.9%, DeepSWE 55–59.3%, and SciCode 56.4% show strong agentic coding; source/harness variation and absent LiveCodeBench cap it.
- **Cost efficiency: 100/100.** The designated OpenCode Zen Contributor tier is free, subject to host quotas and availability.
- **Overall Score: 86.6/100.** Mean of the five quality dimensions: (83 + 86 + 95 + 84 + 85) / 5 = 86.6; a compelling free option for coding and long-context work, with provider-specific availability caveats.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: fresh public-web research using Artificial Analysis, Epoch AI-attributed OpenCharts data, Vals/Toolathlon/DeepSWE board aggregations, provider catalogs, and ModelCap; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
