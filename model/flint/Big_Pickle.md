# Flint 40B Free - findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint 40B Free
- **Short description:** Open-weight Mixture-of-Experts model from Recursive, positioned for local coding
  agents. Small active parameter count (about 2.5B active) despite "40B" name. Free on OpenCode Zen.
- **Provider / access:** Served as **`opencode/flint-40b-free`** on OpenCode Zen (free, $0/$0).
  Also listed as `recursive/flint` in models.dev. Appeared in catalogues around 2026-10-21.
- **Release / knowledge:** Listed release/update **2026-10-21**. Knowledge cutoff unknown.
- **IDs:** `flint-40b-free` / `opencode/flint-40b-free`, `recursive/flint`.
- **Context window:** **262,144 tokens**. Max output **65,536 tokens** (OpenCode listing).
- **Modalities:** Text input/output. Reasoning supported, tool use supported, structured outputs,
  temperature control. Open weights.
- **Pricing:** **$0.00 / $0.00 per 1M tokens** (free tier on OpenCode Zen).
- **Architecture:** Open-weight MoE; ~40B total parameters with ~2.5B active (per models.dev description)
  - designed for local/coding agent use cases with small active size.

### Raw benchmarks found

- No public benchmark results found on Artificial Analysis, Vals AI, LMArena, or major benchmark
  trackers for `flint-40b-free` at the time of research. Listings describe it as "not on the
  Artificial Analysis leaderboard yet" and "we do not publish our own estimates".
- Positioned as a small-active MoE for local coding agents (2.5B active) rather than a frontier
  model; likely optimized for efficiency/speed over peak capability.
- No coding/reasoning/tool-use benchmark numbers published by vendor or independent sources.

### Normalized scores (1-100)

- **Tool use: 55/100.** Tool use is supported and it's positioned for coding agents, but with only
  ~2.5B active parameters and no published agent benchmarks, it's likely competent for simpler
  tool use but not competitive with frontier agent models.
- **Reasoning: 50/100.** Reasoning supported but small active size and no published reasoning
  benchmarks suggest mid-to-lower performance; hard to quantify precisely.
- **Context window: 72/100.** 262K context is respectable (in 200K-500K band).
- **Multimodal: 10/100.** Text only, no multimodal capabilities mentioned.
- **Coding: 55/100.** Targeted at coding agents with small active MoE, but no published coding
  benchmarks (SWE-bench, Terminal-Bench, etc.); assume modest capability.
- **Cost efficiency: 100/100.** Free on OpenCode Zen ($0/$0).
- **Overall Score: 48.4/100.** Free small-active coding agent model with decent context and tool
  support, but lacks published benchmarks and is unlikely to match larger models on complex tasks.
  Good for local/low-cost use cases where capability requirements are modest.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-10-22
- Method: gathered from models.dev (Recursive/flint), OpenCode Zen listings, LLM directories
  (llmdir, llmperks), and news trackers. Confirmed free on OpenCode as `opencode/flint-40b-free`,
  262K context, 65K max output, reasoning/tool use supported, ~40B total/~2.5B active MoE.
  No benchmark data found in public sources at time of research - scores are normalized estimates
  based on architecture/positioning and pricing.
- Future sources: add benchmarks when published; this is a new model (Oct 21 2026).
