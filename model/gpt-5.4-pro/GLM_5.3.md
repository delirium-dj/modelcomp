# GPT-5.4 Pro — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.4-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's max-performance pro tier of the GPT-5.4 generation ("maximum performance on complex tasks"), the professional-work family that first brought native computer use and tool search to the mainline. Variant of GPT-5.4 (same generation, pro compute tier); superseded by GPT-5.5 Pro at the same price.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); ChatGPT Pro/Enterprise; Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.4-pro`).
- **Release / knowledge:** released 2026-03-05. Knowledge cutoff not published.
- **IDs:** `gpt-5.4-pro`; Zen `opencode/gpt-5.4-pro`. No Free ID on Zen.
- **Context window:** 1M tokens supported experimentally per the family announcement (standard API window 272K); BenchLM lists 1.05M for the Pro variant. Say how verified: official announcement + BenchLM model details.
- **Modalities:** text and image input, text output; vision with full-fidelity `original` detail level (up to 10.24M pixels); reasoning (xhigh in official evals); tool calls; native computer use via the `computer` tool; tool search.
- **Pricing (as of 2026-10-01):** $30 / $180 per MTok in/out (official and Zen; Zen cached read $30). No free tier.
- **Architecture:** proprietary, size undisclosed; rated High cyber capability under OpenAI's Preparedness Framework with the corresponding safeguards; low Chain-of-Thought controllability (positive monitorability property, official).

### Raw benchmarks found

> Pro-variant rows are marked (Pro). Unmarked Pro rows are absent from public tables; family evidence (GPT-5.4 base, official) is listed only as clearly-labeled family context.

Agent / tool use:

- BrowseComp: **89.3% (Pro)** (official; "a new state of the art" at release)
- GDPval (wins or ties): **82.0% (Pro)** (official)
- FinanceAgent v1.1: **61.5% (Pro)** (official)
- Investment Banking Modeling Tasks (internal): **83.6% (Pro)** (official)
- Terminal-Bench 2.0: no Pro-specific score published (family base 5.4: 75.1%)
- OSWorld-Verified: no Pro-specific score published (family base: 75.0%, then-SOTA, above the 72.4% human rate)
- Toolathlon: no Pro-specific score published (family base: 54.6%)
- MCP Atlas: no Pro-specific score published (family base: 67.2%)
- Tau2-bench Telecom: no Pro-specific score published (family base: 98.9%)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.4% (Pro)** (official; best in the 5.4-generation table)
- HLE no tools: **42.7% (Pro)**; HLE with tools: **58.7% (Pro)** (official)
- FrontierMath Tier 1-3: **50.0% (Pro)**; Tier 4: **38.0% (Pro)** (official; Epoch AI v2 rows via BenchLM: 50.0% / 37.5%)
- ARC-AGI-1 (Verified): **94.5% (Pro)**; ARC-AGI-2 (Verified): **83.3% (Pro)** (official)
- FrontierScience Research: **36.7% (Pro)** (official)
- CritPt: **30.0%** (Artificial Analysis via BenchLM)
- IPhO 2025 (Theory): **93.5%** (Meta Muse Spark comparison chart via BenchLM)
- Factual error rates (family base): individual claims 33% less likely false vs GPT-5.2; responses 18% less likely to contain any error (official)
- BenchLM composite: **70.72/100, #18 of 645** (11 of 618 benchmarks covered — conservative per BenchLM)

Coding:

- SWE-Bench Pro (public): no Pro-specific score published (family base: 57.7%)
- Terminal-Bench 2.0 (family base): 75.1% (official; GPT-5.3-Codex sibling: 77.3%)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 / GraphWalks: no Pro-specific rows published; family base GPT-5.4: MRCR v2 8-needle 512K-1M **36.6%**, 256K-512K 57.5%; GraphWalks BFS 256K-1M 21.4% (official) — the 1M window is supported but retrieval quality degrades steeply in its upper half

### Normalized scores (1–100)

- **Tool use: 86/100.** Pro-measured BrowseComp 89.3% (state of the art at release) plus GDPval 82.0% and FinanceAgent 61.5% are frontier-class; the family's OSWorld 75.0% (above human) and Tau2 98.9% corroborate. Capped because Terminal-Bench/Toolathlon/OSWorld rows are not published for the Pro variant itself.
- **Reasoning: 90/100.** Pro-measured GPQA 94.4%, HLE 58.7% (with tools), ARC-AGI-2 83.3%, FM Tier 4 38.0%, and IPhO Theory 93.5% sit at the frontier band; CritPt 30.0% is the soft spot. Capped by that CritPt result and FrontierScience Research 36.7%.
- **Context window: 88/100.** 1M supported (experimental; standard 272K; BenchLM 1.05M) earns the ≥1M tier, but measured family retrieval at 512K-1M is only 36.6% MRCR — far from the 98% full-credit bar — and the 1M window is still experimental. Capped accordingly.
- **Multimodal: 65/100.** Text + image in (with full-fidelity `original` detail up to 10.24M pixels), text out; no video/audio input or non-text output. Image-in band (60-70); no Pro-specific MMMU rows.
- **Coding: 82/100.** No Pro-specific coding rows exist; the family carries SWE-Bench Pro 57.7% and Terminal-Bench 2.0 75.1% (behind the 5.3-Codex 77.3% specialist), and Pro is positioned strictly above base. Capped by zero direct Pro coding rows and a family profile that trails the GPT-5.5 generation.
- **Cost efficiency: 15/100.** $30/$180 per MTok — identical to GPT-5.5 Pro, which supersedes it; among the most expensive models on OpenCode Zen. Token economics are not the point of this tier.
- **Overall Score: 82/100.** Half-up mean of the five quality dims: (86 + 90 + 88 + 65 + 82) / 5 = 82.2 → 82. Research-grade reasoning at ultra-premium cost: a strong pick for the hardest analyses in early 2026, now superseded by GPT-5.5 Pro at the same price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (OpenAI official GPT-5.4 announcement + evals tables, BenchLM aggregator rows with sources, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
