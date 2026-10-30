# Solar Open 2 — findings by Qwen 3.8 Max

- Source: Upstage (`solar-open-2`; id `upstage/Solar-Open2-250B`; AA `solar-open2-250b`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Upstage's July-2026 Korean-sovereignty open-weight flagship — a **250B-total / 15B-active MoE** (Upstage Solar License), **1M context** via a hybrid interleaved-attention stack, an **explicit reasoning mode**, and full **Korean/Japanese/English** coverage. Algorithmic coding is elite (**LiveCodeBench v6 92.4**, class-best) and knowledge is strong (**MMLU-Pro 86.2**), but real-world **SWE-bench Verified is mid-pack (70.4)** and the **agentic rows are thin** (Terminal-Bench Hard 28.3%, APEX-Agents 16.6% — class-best but low in absolute terms). AA has a page yet measures **Index/Speed/Cost/Verbosity all N/A** (self-host-only, no per-token API), so every capability number is vendor-side. Deployment is heavy (2× H200 quantized / 4× BF16) and the license requires "Solar-" naming plus Built-with-Solar attribution. Best-fit: a sovereign, multilingual, 1M-context open-weight model for document-heavy enterprise agents where you self-host.

## Model card

- **Name:** Solar Open 2 (vendor "Solar-Open2-250B"; AA renders "Solar Open2 250B")
- **Short description:** Upstage's open-weight 250B/15B-active MoE for the "agentic era," advancing Solar Open 1 along four axes — scale, long context, multilingual (KO/JA/EN), and reasoning. Text-only. A distinct artifact — **not** `solar-mini-4` (smaller) nor `solar-pro-4` (the separate API flagship, report b9).
- **Provider / access:** HuggingFace `upstage/Solar-Open2-250B` (weights, self-host $0); **no published per-token price**; AA lists it as self-hostable open weights with no measured API. No Free ID on Zen (`noFreeId`).
- **Release / knowledge:** Technical report / blog **2026-07-22** (arXiv 2607.20062); **AA FAQ lists the release as 2026-08-12** (weights) — a paper-vs-weights date discrepancy, flagged. **Knowledge cutoff Feb 1, 2026** (AA).
- **IDs:** `upstage/Solar-Open2-250B` (no standing Free ID on Zen)
- **Context window:** **1.0M** (AA spec + FAQ agree), reached via a hybrid attention stack that interleaves attention types to hold entire agent trajectories; **131,072 reasoning-output cap** (max_tokens up to 256K per meta). No independent long-context retrieval (MRCR/RULER) score found.
- **Modalities:** Text in → text out (AA FAQ: no image input, not multimodal). **Reasoning** (explicit reasoning mode / extended thinking). **Truly multilingual — Korean, Japanese, English** (a language-breadth strength distinct from media modality; state-of-the-art on the Korean benchmarks KMMLU-Pro, CLIcK, HAE-RAE).
- **Pricing (as of 2026-10-30):** Open weights, **self-host $0**; no per-token price. Hardware: **2× H200 quantized or 4× H200 BF16**. AA Cost N/A (no measured API).
- **Architecture:** Open-weight MoE, **250B total / 15B active**, **Upstage Solar License** — commercial use, fine-tuning, and distillation permitted, but derivative models require **"Solar-" naming and Built-with-Solar attribution**.

### Raw benchmarks found

> AA reports **Intelligence Index N/A, Speed N/A, Cost N/A, Verbosity N/A** — it catalogues the model but measures nothing (self-host-only open weights, no per-token API). All capability numbers below are **vendor (arXiv 2607.20062 technical report / Upstage blog)**. The report tabulates Solar Open 2 against a comparison class; where noted, comparators score higher.

Agent / tool use:

- Terminal-Bench (Hard): **28.3%** (vendor / meta) — thin agentic-terminal skill.
- APEX-Agents: **16.6** (vendor) — **highest in its comparison class** (ahead of DeepSeek-V4 per coverage), but low in absolute terms.
- Designed for office-productivity / document-intensive agent workflows rather than terminal coding agents.

Reasoning / knowledge:

- MMLU-Pro: **86.2** (vendor; "highest among comparable models" per the Upstage blog) — strong knowledge.
- Korean benchmark average: **85.4%** (KMMLU-Pro, CLIcK, HAE-RAE) — sovereign-language strength.
- AA Intelligence Index: **N/A** (not scored). No GPQA / HLE / AIME frontier-reasoning figure published.

Coding:

- LiveCodeBench (v6): **92.4** (vendor) — **elite / class-best** (comparators in the report: 56.5, 86.1, 84.9, 89.1, 92.3).
- SWE-bench Verified: **70.4** (vendor) — **mid-pack**; two comparators score higher (73.0, 73.8) and two far lower (15.4, 14.4). Algorithmic coding is well ahead of real-world SWE.

Long context:

- **1.0M** window (AA-confirmed spec) via hybrid interleaved attention; **no independent MRCR/RULER** retrieval score found, so full-window quality is unverified.

> **Meta-verification:** `meta.json` is accurate and candid — id ✓, **250B/15B** ✓, 1M (131,072 reasoning cap / 256K max_tokens) ✓, Upstage Solar License ✓, **LiveCodeBench v6 92.4%** ✓, **SWE-bench Verified 70.4%** ✓, Korean average 85.4% ✓, and the tradeoff correctly flags the **thin agentic rows (Terminal-Bench Hard 28.3%, APEX-Agents 16.6%)** and the **"Solar-" naming + Built-with-Solar attribution** requirement ✓, 2× H200 quantized ✓, no per-token price ✓. **Flags:** (1) **release-date discrepancy** — meta/arXiv/blog say July 22 while the AA FAQ says August 12, 2026 (paper vs weights); (2) **AA has a page (`solar-open2-250b`) but measures Index/Speed/Cost/Verbosity all N/A** → every capability number is vendor-only; (3) meta's "Text in/out" is correct on media modality, but the model is **truly multilingual (KO/JA/EN)** — a language-breadth strength the modality field does not capture; (4) **LiveCodeBench 92.4 (elite) vs SWE-bench Verified 70.4 (mid)** — a wide algorithmic-vs-real-world gap.

### Normalized scores (1–100)

- **Tool use: 70/100.** The **agentic rows are thin** — Terminal-Bench Hard **28.3%** is weak and APEX-Agents **16.6**, though class-best, is low in absolute terms. Built for document/office agent workflows and for holding trajectories in 1M context, but not a strong terminal/tool agent.
- **Reasoning: 75/100.** Confirmed **reasoning model** (explicit reasoning mode) with strong **MMLU-Pro 86.2** knowledge, but **no frontier reasoning benchmark (GPQA/HLE/AIME)** is published and the **AA Index is N/A** — solid-but-unproven hard reasoning.
- **Context window: 84/100.** Genuine **1.0M** (AA spec + FAQ agree) via hybrid interleaved attention, aimed at whole agent trajectories; held just below the top 1M band because the attention is hybrid and **no independent long-context retrieval (MRCR/RULER)** verifies full-window quality.
- **Multimodal: 50/100.** **Text-only** — AA FAQ confirms no image input. (Its KO/JA/EN multilingual breadth is a language axis, not media modality.) Text-only floor.
- **Coding: 78/100.** **Elite LiveCodeBench v6 92.4** (class-best) but **mid-pack SWE-bench Verified 70.4** (two comparators higher) — strong algorithmic coding, middling real-world SWE, and **vendor-only** (no AA/independent confirmation).
- **Cost efficiency: 82/100.** Open weights self-host **$0** with commercial/fine-tune/distill permitted, but deployment is **heavy (2–4× H200)**, there is **no hosted per-token option**, and the **Upstage Solar License imposes naming/attribution** obligations. Not counted in Overall.
- **Overall Score: 71/100.** Mean of the five quality dims (70+75+84+50+78)/5 = 71.4 → 71. Divergence **+2.8** vs curated 68.2. I credit the 1M context, elite LiveCodeBench, and strong multilingual knowledge slightly higher than the curator, who appears to weight the thin agentic rows, mid-pack SWE-bench, text-only floor, vendor-only measurement, and heavy self-host more. Best-fit: a sovereign, multilingual, 1M-context open-weight model for document-heavy enterprise agents where you self-host.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (arXiv 2607.20062 *Solar Open 2 Technical Report*, Upstage blog `upstage.ai/blog/en/solar-open-2`, Artificial Analysis `solar-open2-250b` page incl. FAQ, ModelScope / HuggingFace `upstage/Solar-Open2-250B`, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
