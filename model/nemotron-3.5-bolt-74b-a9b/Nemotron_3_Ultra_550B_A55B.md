# Nemotron-3.5-Bolt-74B-A9B — findings by Nemotron 3 Ultra 550B A55B

- Source: NVIDIA (`nemotron-3.5-bolt-74b-a9b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron-3.5-Bolt-74B-A9B
- **Short description:** NVIDIA's Bolt variant of Nemotron 3.5 (74B total, 9B active MoE). Queue Overall 70.1. BenchLM shows 45.25 (rank 115). Bolt variant optimized for speed/efficiency.
- **Provider / access:** Hugging Face (`nvidia/Nemotron-3.5-Bolt-74B-A9B`), NVIDIA API, OpenCode Zen (`opencode/nemotron-3.5-bolt-74b-a9b`). Free on HuggingChat.
- **Release / knowledge:** 2026 release (Nemotron 3.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `nvidia/Nemotron-3.5-Bolt-74B-A9B` (Hugging Face), `nemotron-3.5-bolt-74b-a9b` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** Likely 128K-256K (Bolt variant optimized for efficiency).
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal (74B fits multi-GPU); inference providers ~$0.30-0.80/M in, $0.60-1.50/M out.
- **Architecture:** MoE: 74B total, 9B active (A9B). Nemotron 3.5 family. Bolt = speed/efficiency optimized.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 45.25, rank 115/956):
- No detailed benchmark rows displayed on page

**Sibling models on BenchLM:**
- Nemotron-3.5-Super-VL: 49.38 (rank 102)
- Nemotron-3-Ultra: 46.77 (rank 110)
- Nemotron-3.5-Lightning-30B-A3B-NVFP4: 25.66 (rank 200)

Bolt variant optimized for speed, not peak quality.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 45/100.** Overall 45.25 suggests moderate agentic. Bolt optimized for speed over agentic depth. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 50/100.** Overall 45.25 suggests moderate reasoning. Bolt trades reasoning depth for speed. Capped by no GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 55/100.** Estimated 128K-256K (Bolt optimized). Methodology: optimized variant = 50-65.
- **Multimodal: 30/100.** Text-only (Nemotron 3.5 Bolt). No vision/audio. Methodology: text-only = 20-30.
- **Coding: 50/100.** Overall 45.25 suggests moderate coding. Bolt may trade coding quality for speed. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 90/100.** Free on HuggingChat; self-host 74B fits multi-GPU; inference providers ~$0.50/M blended. Methodology: open-weight + speed-optimized ≈ 90-95.
- **Overall Score: 46/100.** Half-up mean of (45 + 50 + 55 + 30 + 50) / 5 = 46 → 46. Using six incl. cost: (45+50+55+30+50+90)/6 = 320/6 = 53.3 → 53. Model-queue says 70.1; **discrepancy — Bolt variant optimized for speed/efficiency, not peak quality**.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Nemotron-3.5-Bolt-74B-A9B page (Overall 45.25). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.md`, using the same headings.