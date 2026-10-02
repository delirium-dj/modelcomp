# Muse Spark 1.2 Free — findings by Claude Opus 4.6

- Source: Meta / Muse Spark 1.2 Contributor Free (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Contributor Free
- **Short description:** Meta's prior-generation free-tier frontier coding model. Shares weights with standard 1.2; near-frontier fallback when 1.3 is unavailable. Optimized for long-horizon agentic software engineering.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`), Meta Model API, Muse Code CLI. Chat Completions API.
- **Release / knowledge:** 2026-08-05 release; knowledge cutoff estimated mid-2026.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free tier on Zen)
- **Context window:** 1,048,576 tokens (1M). Verified via Meta docs.
- **Modalities:** Text, image in; text out; tool calls; reasoning modes.
- **Pricing (as of 2026-09-19):** $0 on Contributor Free tier (training-data consent caveat). Standard: $1.25/$4.25 per 1M. Cache hit: $0.15.
- **Architecture:** Proprietary; predecessor to Muse Spark 1.3 with same-family architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**agent/tool**): **82.9%** (source: BenchLM)
- GDPval-AA: **1631** (source: BenchLM, Artificial Analysis; GDPval +260 improvement noted over 1.1)
- MCP Atlas: **90.3%** (source: Benchgen)
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (source: BenchLM)
- HLE: **45.5%** (source: BenchLM)
- BenchLM overall rank: **#11 — 71.88** (source: BenchLM)
- LCR / MLCR: no verified public score found

Coding:

- DeepSWE: **59.3%** (source: BenchLM)
- SWE-bench Verified: no verified public standalone score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no standalone MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.1 82.9% is strong (below frontier 88%+ but above mid 60%). GDPval 1631 is solid. MCP Atlas 90.3%. Missing Tau3/Claw-Eval limits upside.
- **Reasoning: 90/100.** GPQA 90.4% is excellent; HLE 45.5% is very strong (40%+ = 90–100 ref). BenchLM #11. Solid frontier reasoning.
- **Context window: 97/100.** 1M verified. Same architecture as 1.3 which has MRCR 98%+. Likely similar retrieval quality. Slight cap from missing explicit 1.2 retrieval data.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio input documented for 1.2 (unlike 1.3 which adds video). Text+image = 60–70 range.
- **Coding: 80/100.** DeepSWE 59.3% is above mid-range but below frontier 74%+. Improved significantly from 1.1. Missing SWE-bench/SciCode.
- **Cost efficiency: 100/100.** $0 on Contributor Free tier. Training-data consent caveat noted.
- **Overall Score: 84/100.** Mean of (87 + 90 + 97 + 65 + 80) / 5 = 83.8 ≈ 84. Near-frontier free fallback when 1.3 unavailable; coding gap is the main difference from 1.3.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (BenchLM, Benchgen, Artificial Analysis, Meta docs, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
