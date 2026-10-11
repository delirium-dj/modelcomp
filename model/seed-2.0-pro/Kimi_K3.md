# Seed 2.0 Pro — findings by Kimi K3

- Source: ByteDance / Doubao Seed 2.0 Pro (`seed-2.0-pro`; Seed 2.0 family on Volcano Engine)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance's flagship general-purpose agent model (released February 14, 2026; family: Pro/Lite/Mini/Code) — frontier-class math/coding (AIME'25 98.3, Codeforces 3020, LiveCodeBench v6 87.8) at ultra-low pricing.
- **Provider / access:** Volcano Engine API (`doubao-seed-2.0-pro`, OpenAI-compatible); regional deployment. OpenCode Data catalog entry `bytedance-seed/seed-2.0-pro` (no measured Zen usage).
- **Release / knowledge:** Released 2026-02-14 (OpenCode Data confirms; tokenmix.ai, llmreference.com, llm-stats.com agree); knowledge cutoff not stated.
- **IDs:** `bytedance/doubao-seed-2.0-pro`; `bytedance-seed/seed-2.0-pro` (OpenCode Data). No Zen Free ID verified.
- **Context window:** 256K tokens (OpenCode Data; llm-stats.com, llmreference.com) / max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/video in (OpenCode Data — video input confirmed this pass, upgrading my earlier text/image-only note); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $0.50/M input, $3.00/M output, $0.10/M cached (OpenCode Data catalog — resolves my first-pass $0.47/$2.37 vs $0.50/$3.00 split in favor of the latter).
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

- 256K window, 128K output (catalog-verified); no retrieval measurement found (no MRCR/RULER/LCR row).

Multimodal:

- Image + **video** input (OpenCode Data catalog — video row added this pass); no public MMMU/CharXiv rows found.

### Normalized scores (1–100)

- **Tool use: 62/100.** Unchanged: positioned as an agent model but no public Terminal-Bench/Tau/GDPval rows at this ID — conservative mid estimate on marketing claims; capped by absent evidence.
- **Reasoning: 84/100.** Unchanged: AIME 98.3%, GPQA 88.9%, MMLU-Pro 87.0% strong; capped by missing hard-frontier rows (HLE, CritPt, ARC).
- **Context window: 72/100.** Unchanged: 256K window (128K output now verified); no retrieval data. Capped below 1M peers.
- **Multimodal: 72/100.** Raised from 68: the OpenCode catalog now lists video input alongside image; still no public vision bench numbers and text-only output.
- **Coding: 84/100.** Unchanged: LiveCodeBench 87.8%, Codeforces 3020, SWE-bench Verified 76.5% — elite for the price; capped by no SWE-bench Pro/Terminal rows.
- **Cost efficiency: 94/100.** Adjusted from 95 on catalog verification: $0.50/$3.00 (cached $0.10) — cheapest frontier-adjacent among majors, though above my earlier, cheaper third-party listing.
- **Overall Score: 75/100.** Mean of the five quality dims (62+84+72+72+84)/5 = 74.8 → 75 (raised from 74 on the video-input verification). Best fit: math/coding-heavy workloads at ultra-low cost where 256K suffices; agentic claims need independent verification.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `bytedance-seed/seed-2-0-pro` — catalog release/pricing/window/modalities verification; tokenmix.ai review, llmreference.com, digitalapplied.com guide, airank.dev, llm-stats.com from first pass). Second pass over my 2026-09-24 file: verified release and $0.50/$3.00 pricing (resolving the $0.47/$2.37 conflict), added 128K max output and video input. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
