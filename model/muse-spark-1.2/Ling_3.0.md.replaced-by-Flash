# Muse Spark 1.2 Free — findings by Ling 3.0

- Source: Ling 3.0 (`opencode/muse-spark-1-2-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's coding-optimized multimodal reasoning model; free Contributor tier on OpenCode Zen (same weights as standard 1.2).
- **Provider / access:** Meta first-party API (`api.meta.ai`); OpenCode Zen free at `https://opencode.ai/zen/v1/responses`; also OpenRouter, Vercel AI Gateway. Linked to Muse Code (terminal agent).
- **Release / knowledge:** 2026-08-05 (model); ~late Aug 2026 (Zen free-tier listing).
- **IDs:** Meta `muse-spark-1.2` / `muse-spark-1.2-contributor`; Zen `muse-spark-1.2-contributor-free`.
- **Context window:** 1,048,576 total (1M); max output 131,072 (pi.dev/models.dev).
- **Modalities:** text + image + video + audio + PDF in; text out. Reasoning efforts off/minimal/low/medium/high/xhigh (max: Standard only).
- **Pricing (as of 2026-09-17):** Zen Free $0/$0/$0 (limited-time). Contributor paid $0.10 / $0.002 cached / $0.20 out. Standard $1.25 / $0.15 cached / $4.25 out.
- **Architecture:** Proprietary, closed weights; params undisclosed (decoder-only).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (via Muse Code, xhigh; Meta release blog).
- GDPval-AA v2 Elo: **1,631** (#5, ahead of Claude Opus 4.8 per AA).
- τ³-Banking: **27%** (AA).
- MCP Atlas: **90.3%** (highest of Meta's compared set — Meta self-reported).
- AA Agentic Index: **49.3%** (BenchLM).
- Claw-Eval / ClawProBench / Toolathon: **no verified public score found** for 1.2 specifically.

Reasoning / knowledge:

- AA Intelligence Index: **57 xhigh** (model detail pages 56.8).
- GPQA: **90.4%**; HLE: **45.5%** (43.9% Meta blog); LCR: **83.3%**; CritPt: **17.7%**; MMLU-Pro: **88.3%** (Vals).
- AA-Omniscience Accuracy **45.4%** / Hallucination Rate **33.3%** / Index 27.2 (BenchLM).
- BenchLM overall: **71.88/100, rank #11/411**.

Coding:

- DeepSWE 1.1: **59.3%** (via Muse Code, xhigh).
- SWE-bench (Vals): **86.6%** (BenchLM methodology — differs from standard SWE-bench Verified).
- AA Coding Index: **72.2** (#18); SciCode: **56.4%**; FrontierSWE v2: **12.0%**.
- Meta internal Code Bench: **70.6%** (vendor-reported).
- SWE-bench Verified (official): **no verified public score found** for 1.2.

Long context:

- Long-context retrieval (Needle-in-a-Haystack / MRCR): **no verified public benchmark found** for 1.2; 1M window documented but unmeasured in public evals.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 82.9 + MCP Atlas 90.3 + GDPval 1631; one step below 1.3 (88.8/TB, 1754/GDPval).
- **Reasoning: 88/100.** GPQA 90.4, HLE 45.5, LCR 83.3; CritPt 17.7 caps.
- **Context window: 100/100.** Full 1M tier.
- **Multimodal: 90/100.** Broad input (text/image/video/audio/PDF), text out.
- **Coding: 87/100.** Strong SWE/Coding-Index; DeepSWE 59.3 trails 1.3's 75.4.
- **Cost efficiency: 100/100.** $0 free tier.
- **Overall Score: 91/100.** Near-frontier free choice; everything 1.3 has, one notch lower.

---

## Signature

- Provided by: **Ling 3.0 (`opencode/muse-spark-1-2-contributor-free`)** — 2026-09-17
- Method: public web research (Meta release blog, Artificial Analysis, BenchLM, pi.dev, OpenCode docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/Ling_3.0.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
