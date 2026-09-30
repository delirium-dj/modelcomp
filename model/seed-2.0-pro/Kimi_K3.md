# Seed 2.0 Pro — findings by Kimi K3

- Source: ByteDance / Doubao Seed 2.0 Pro (`seed-2.0-pro`; Seed 2.0 family on Volcano Engine)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance's flagship general-purpose agent model (released February 14, 2026; family: Pro/Lite/Mini/Code) — frontier-class math/coding (AIME'25 98.3, Codeforces 3020, LiveCodeBench v6 87.8) at ultra-low pricing ($0.47–0.50/M input).
- **Provider / access:** Volcano Engine API (`doubao-seed-2.0-pro`, OpenAI-compatible); regional deployment.
- **Release / knowledge:** Released 2026-02-14 (tokenmix.ai, llmreference.com, llm-stats.com); knowledge cutoff not verified.
- **IDs:** `bytedance/doubao-seed-2.0-pro` (no Zen Free ID verified).
- **Context window:** 256K tokens (llm-stats.com, llmreference.com); max output not verified.
- **Modalities:** text/image in (multimodal per llm-stats.com / llmreference.com); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $0.47/M input, $2.37/M output (tokenmix.ai) — llm-stats lists from $0.50/M in, $0.10 cached, $3.00/M out; 3–6× cheaper than comparable frontier models (llmreference.com).
- **Architecture:** proprietary (ByteDance Seed); params undisclosed.

### Raw benchmarks found (vendor/aggregated via digitalapplied.com, tokenmix.ai, llmreference.com, airank.dev)

Agent / tool use:

- "Agentic capabilities" cited via Volcano Engine demos; Terminal-Bench / Tau / GDPval / Claw rows: no verified public score found

Reasoning / knowledge:

- AIME 2025: **98.3%** (digitalapplied.com, tokenmix.ai)
- GPQA Diamond: **88.9%** (llmreference.com, tokenmix.ai)
- MMLU-Pro: **87.0%** (llmreference.com)
- Codeforces: **3020** (digitalapplied.com, tokenmix.ai)
- HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **76.5%** (tokenmix.ai, llmreference.com, airank.dev)
- LiveCodeBench v6: **87.8%** (digitalapplied.com, llmreference.com)
- SciCode / Coding Index: no verified public score found

Long context:

- 256K window (spec, two sources); no retrieval measurement found (no MRCR/RULER/LCR row).

Multimodal:

- Described multimodal input (llm-stats.com, llmreference.com); no public MMMU/CharXiv rows found.

### Normalized scores (1–100)

- **Tool use: 62/100.** Positioned as an agent model but no public Terminal-Bench/Tau/GDPval rows at this ID — conservative mid estimate on marketing claims; capped by absent evidence.
- **Reasoning: 84/100.** AIME 98.3%, GPQA 88.9%, MMLU-Pro 87.0% are strong; capped by missing hard-frontier rows (HLE, CritPt, ARC).
- **Context window: 72/100.** 256K window; no retrieval data. Capped below 1M peers.
- **Multimodal: 68/100.** Image input verified by multiple trackers, but zero published vision bench numbers; text-only output.
- **Coding: 84/100.** LiveCodeBench 87.8%, Codeforces 3020, SWE-bench Verified 76.5% — elite for the price; capped by no SWE-bench Pro/Terminal rows.
- **Cost efficiency: 95/100.** $0.47/$2.37 per 1M — cheapest frontier-adjacent option found in this cohort; cached at $0.10.
- **Overall Score: 74/100.** Mean of the five quality dims (62+84+72+68+84)/5 = 74.0 → 74. Best fit: math/coding-heavy workloads at ultra-low cost where 256K suffices; agentic claims need independent verification.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (tokenmix.ai review, llmreference.com, digitalapplied.com guide, airank.dev, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
