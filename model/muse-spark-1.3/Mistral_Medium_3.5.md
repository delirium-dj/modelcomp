# Muse Spark 1.3 — findings by Mistral Medium 3.5

- Source: Meta/Muse Spark 1.3
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's flagship reasoning model for long-horizon agentic workflows, coding, instruction following, computer use, web research, automation, and long-context retrieval. Released as part of the Muse series from Meta Superintelligence Labs.
- **Provider / access:** `meta/llama-muse-spark-1.3` via Meta Model API; `opencode/muse-spark-1.3-contributor-free` via OpenCode Zen
- **Release / knowledge:** 2026 (exact date not publicly disclosed; available via Meta Model API and OpenCode)
- **IDs:** `meta/llama-muse-spark-1.3`, `opencode/muse-spark-1.3-contributor-free` (Free tier)
- **Context window:** 1,048,576 tokens (1M) verified
- **Modalities:** text + image + video + PDF input; text output; reasoning (adaptive thinking); tool calls; JSON mode
- **Pricing (as of 2026-11-05):** Free via OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`: $0.00/$0.00 per 1M input/output); Meta Contributor tier: $0.10/$0.20 per 1M; Meta Standard xhigh: $1.25/$4.25 per 1M; 88% cache discount on Contributor tier
- **Architecture:** Proprietary; reasoning model optimized for agentic tasks; no verified public parameter count

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found**
- Artificial Analysis Intelligence Index: **61** (xhigh reasoning variant, 182 tokens/s; source: DataCamp)
- Artificial Analysis Intelligence Index: **62** (max variant, limited preview; source: DataCamp)
- SWEAtlas CodeBase QnA: **59.4%** (repository-wide comprehension and architectural queries; source: Layer3 Labs)
- DeepSWE: **tops the benchmark** (per MindStudio comparison)
- Tool use efficiency: ~20% fewer tool calls and ~25% fewer tokens than Muse Spark 1.2 in Meta engineer comparisons

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61-62 / unranked** (20 source-displayable rows; source: BenchLM)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No specific long-context retrieval benchmarks reported; 1M token context verified

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong agentic workflow optimization with 59.4% SWEAtlas CodeBase QnA, leads DeepSWE, ~20% fewer tool calls than 1.2. Capped by lack of public Terminal-Bench confirmation.
- **Reasoning: 93/100.** Artificial Analysis Intelligence Index 61-62 (xhigh/max), strong agentic reasoning performance. Capped by limited public reasoning benchmark coverage.
- **Context window: 100/100.** 1M token context window verified from multiple official sources. Maximum tier.
- **Multimodal: 92/100.** Text + image + video + PDF input with strong multimodal understanding. Capped by not covering audio.
- **Coding: 92/100.** Leads DeepSWE benchmark, competitive coding performance with optimized agentic workflows. Capped by limited public coding benchmark disclosure.
- **Cost efficiency: 100/100.** Free tier available via OpenCode Zen at $0/$0 per 1M tokens; Meta Contributor tier at $0.10/$0.20 is extremely competitive.
- **Overall Score: 94/100.** Frontier reasoning and agentic capabilities with best-in-class free access; slight gap in public benchmark transparency.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark 1.3 — Meta Developer](https://developer.meta.com/ai/models/muse-spark/)
  - [Muse Spark 1.3 Features, Benchmarks, and Pricing — DataCamp](https://www.datacamp.com/blog/muse-spark-1-3)
  - [Muse Spark 1.3 Benchmarks — Layer3 Labs](https://www.layer3labs.io/guides/muse-spark-1-3-benchmarks)
  - [Muse Spark 1.3 — OpenRouter](https://openrouter.ai/meta/muse-spark-1.3)
  - [OpenCode Zen Muse Spark 1.3 Free Setup](https://aigency.ltd/insights/muse-spark-1-3-free-opencode-setup/)
  - [BenchmarkList — Muse Spark 1.3](https://benchmarklist.com/models/meta-muse-spark-1-3/)
  - [BenchLM — Muse Spark 1.3](https://benchlm.ai/models/muse-spark-1-3)
  - [MindStudio — Muse Spark 1.3 Benchmark Confusion](https://www.mindstudio.ai/blog/meta-muse-spark-1-3-benchmark-confusion)
