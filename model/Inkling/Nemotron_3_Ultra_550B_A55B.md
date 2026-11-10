# Inkling — findings by Nemotron 3 Ultra 550B A55B

- Source: Thinking Machines (`inkling`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Xhigh reasoning variant)
- **Short description:** Thinking Machines' open-weights MoE reasoning model with 975B total / 41B active parameters. Supports text, image, and speech input with text output. Released July 15, 2026 under Apache 2.0 license.
- **Provider / access:** Thinking Machines API, plus 4 other API providers (per Artificial Analysis). Model weights on Hugging Face (`thinkingmachines/Inkling`). Chat Completions API. No Free tier ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-15; knowledge cutoff not published.
- **IDs:** `inkling` (Thinking Machines API), `thinkingmachines/Inkling` (Hugging Face).
- **Context window:** 1,000,000 tokens. Verified via Artificial Analysis and Thinking Machines docs.
- **Modalities:** Text, image, and speech input; text output. Reasoning: yes (extended thinking / chain-of-thought). Tool calls: not explicitly documented. JSON mode: not documented.
- **Pricing (as of 2026-11-10):** Input $1.00 / MTok; Output $4.05 / MTok (Thinking Machines API). Blended rate ~$0.72/MTok (7:2:1 cache/input/output). Cache discount 83%. Paid tier only.
- **Architecture:** MoE, 975B total parameters, 41B active parameters. Open weights (Apache 2.0 license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **12** — ranked #23 of 26 in class (Artificial Analysis, 2026-11-10)
- Terminal-Bench 4.0: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE-Diamond: no verified public score found (included in AA Intelligence Index but no individual score)
- LCR / MLCR: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found (included in AA Intelligence Index but no individual score)
- Artificial Analysis Intelligence Index: **12** / #23 of 26 (Artificial Analysis, 2026-11-10)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (included in AA Intelligence Index but no individual score)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (FrontierCode 2.0 included in AA Intelligence Index but no individual score)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported (model supports 1M context but no public MRCR/RULER/GraphWalks scores found)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 45/100.** AA Intelligence Index includes agentic evals (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0, GDPval-AA); score of 12 places it near bottom of class. No individual agentic benchmark scores published. Capped by low composite score.
- **Reasoning: 35/100.** AA Intelligence Index incorporates reasoning evals (HLE-Diamond, CritPt v2 Hard, GDP.pdf); score of 12 suggests weak reasoning vs peers. Marketed as reasoning model (extended thinking) but benchmarks don't reflect strength. Capped by no public GPQA/HLE/CritPt scores.
- **Context window: 95/100.** 1M token context window — top tier. Only capped by models with 2M+ windows (e.g., GPT-6 Sol, Muse Wonder).
- **Multimodal: 85/100.** Text, image, and speech input; text output. Three input modalities is strong. No video input documented.
- **Coding: 38/100.** AA Intelligence Index includes coding evals (Terminal-Bench 4.0, FrontierCode 2.0); score of 12 suggests weak coding. No public SWE-bench/LiveCodeBench scores. Capped by low composite.
- **Cost efficiency: 40/100.** $1.00/$4.05 per MTok is above median for open-weight models (median $0.43/$1.84). 83% cache discount helps but blended cost $0.72/MTok still mid-range. Apache 2.0 allows self-hosting (zero marginal cost) which improves real-world value.
- **Overall Score: 60/100.** Mean of (45+35+95+85+38)/5 = 59.6 → 60. Best-fit: open-weights omni-modal MoE for self-hosting; reasoning/coding/agentic capabilities need significant improvement per benchmarks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-10
- Method: Public internet research via Artificial Analysis leaderboard (artificialanalysis.ai/models/inkling) and Thinking Machines documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis: Inkling](https://artificialanalysis.ai/models/inkling)
  - [Hugging Face: thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)
  - [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)

---