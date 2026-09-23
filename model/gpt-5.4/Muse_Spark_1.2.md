# GPT-5.4 — findings by Muse Spark 1.2

- Source: OpenAI/gpt-5.4 (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's flagship generalist for complex professional work (Mar 2026); merges coding, reasoning, computer use with 1.05M context.
- **Provider / access:** OpenAI API `gpt-5.4-2026-03-05` / `gpt-5.4` — Responses + Chat Completions, via OpenCode Zen `openai/gpt-5.4`
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff 2026-03 (per API docs)
- **IDs:** `openai/gpt-5.4`
- **Context window:** 1,048,576 (1.05M) total — verified via NxCode/LLMReference and OpenAI docs
- **Modalities:** Text, image in; text out; reasoning yes (effort none/low/medium/high/xhigh); tool calls yes; computer use yes; image generation via tools
- **Pricing (as of 2026-09-23):** Paid $2.50 in / $15.00 out per 1M (per VentureBeat table grok 4.6 context); no Zen Free ID; 47% fewer tokens on complex tasks offsets higher in-price vs Codex $1.75
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** task success (verified) — vs GPT-5.3 Codex 77.3% (-2.2 pts), GPT-5.5 82% (source: OpenAI, NxCode 2026-03-09, evals.report, aireleasetracker)
- Toolathon: **54.6%** vs Codex 51.9% (source: NxCode)
- OSWorld-Verified: **75%** (above human baseline 72.4%; Codex 64%) (source: NxCode, OpenAI)
- GDPval (AA) v2 win/tie: **83% GDPval across 44 occupations** vs Codex not benchmarked / GPT-5.2 70.9% (source: NxCode, aireleasetracker "GDPval 83%")
- Tau3-Banking / Tau2-Bench: **78.3% τ-bench** (τ-bench observed 2026-04-24) (source: LLMReference)
- GDPval-AA: see 83% above
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA / Toolathon variant: see Toolathon 54.6% above

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI release) / **92.0% Google-Proof Q&A diamond** (LLMReference diamond) (source: aireleasetracker, LLMReference)
- HLE: **41.6%** (xhigh setting) (source: LLMReference)
- ARC-AGI-2: **73.3%** (LLMReference, observed 2026-04-27) (source: LLMReference)
- LCR / MLCR: **no verified public LCR found**
- CritPt: **no verified public CritPt found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified AA Index for GPT-5.4 isolated** (not in AA articles; proxy via Arena 1479 High, MMLU-Pro 87.5)
- Omniscience Accuracy / Hallucination Rate: **BullshitBench v2 48%** (aireleasetracker) — indication of hallucination handling
- MMLU-Pro: **87.5%** (LLMReference), MMMU Pro 81.2% / MMMU 82.1 (source: LLMReference)

Coding:

- SWE-bench Verified / SWE-Pro: **76.9% SWE-bench Verified** (Official Mar 5) / **71.7% observed 2026-04-27** / **57.7% SWE-bench Pro Public** (source: evals.report, LLMReference, NxCode: SWE-Pro 57.7% vs Codex 56.8%)
- LiveCodeBench: **no verified public LCB isolated** (not in GPT-5.4 table)
- SciCode / AA-SciCode: **no verified public SciCode found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **55.53% DeepSWE** (Official) / **54% FrontierSWE dominance** / **31.37% GSO Opt@1** / **68.5% Expert-SWE internal** (source: evals.report, aireleasetracker)

Long context:

- 1.05M total — no MRCR/RULER at max window published; 1M enables large codebase analysis per NxCode

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 75% (>human 72.4%) + Toolathon 54.6% + Terminal-Bench 2.0 75.1% + GDPval 83% + τ-bench 78.3% show broad agentic strength; capped by TB2.0 trailing Codex by 2.2 pts and missing Claw isolation.
- **Reasoning: 84/100.** GPQA 92.8% + MMMU 81-82% + MMLU Pro 87.5% + HLE 41.6% + ARC-AGI-2 73.3% demonstrate frontier multidisciplinary reasoning; capped by BullshitBench 48% indicating residual hallucination.
- **Context window: 96/100.** 1.05M total verified (≥1M tier 95-100); capped without MRCR 1M needle metric.
- **Multimodal: 65/100.** Text, image in; text out (no video/audio per docs) — image-only tier 60-70.
- **Coding: 82/100.** SWE-bench Verified 76.9%/~80% + SWE-Pro 57.7% + DeepSWE 55.5% + FrontierSWE 54% show strong coding; capped by Trailng Codex on TB2.0 and GPT-5.5 82.7% TB2.0 leadership.
- **Cost efficiency: 62/100.** Paid $2.50/$15 per 1M — mid-flagship, 47% token efficiency helps but higher than $0.5/$3 Flash tier; no Free ID.
- **Overall Score: 82/100.** Mean of five non-cost dims (84+84+96+65+82)/5=82.2 → 82; best-fit as single-model generalist for coding+computer-use+knowledge where Codex specialization not required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI GPT-5.4 API docs, NxCode 2026-03-09, evals.report, LLMReference, aireleasetracker, VentureBeat pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
