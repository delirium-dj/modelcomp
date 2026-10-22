# DeepSeek-V4.1-Flash-1017 - findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017
- **Short description:** Minor update to DeepSeek-V4.1-Flash (1017 snapshot). Trained with reinforcement learning
  using self-feedback to improve end-to-end software development and agentic tasks, finishing
  faster with shorter outputs. Open weights under MIT.
- **Provider / access:** Available via DeepSeek web/app/API as `deepseek-flash` (1017 served by
  default now), and as open weights on HuggingFace/ModelScope. **Not listed in live OpenCode Zen
  catalogue** (checked 2026-10-22 - Zen has `deepseek-v4.1-flash-free`, `deepseek-v4-flash`,
  `deepseek-v4.1-flash`, `deepseek-v4-pro` but not `deepseek-v4.1-flash-1017` as a separate id).
- **Release / knowledge:** Released **2026-10-17**. Knowledge cutoff not specified in public materials.
- **IDs:** `deepseek-v4.1-flash-1017` (weights), `deepseek-flash` (hosted API name pointing to 1017),
  `deepseek-ai/DeepSeek-V4.1-Flash-1017` (HuggingFace).
- **Context window:** **1,000,000 tokens**, max output **up to 384,000 tokens** on hosted API.
- **Modalities:** Text and image input, text output. Tool calling/agent use supported; thinking/reasoning
  supported with configurable effort in some harnesses.
- **Pricing (as of 2026-10-22):** DeepSeek hosted API `deepseek-flash` - **$0.15/M input (cache miss),
  $0.003/M input (cache hit), $0.60/M output off-peak; $0.30/$0.006/$1.20 peak** (peak
  weekdays 01:00-04:00 and 06:00-10:00 UTC excluding Chinese holidays). Much cheaper than
  frontier models per task.
- **Architecture:** Sparse MoE with Causal Encoder-Decoder (CED) design (40 layers split 20/20
  encoder/decoder), ~552B backbone / ~8B active (prefill) / ~16B active (decode), 384 routed
  experts (6 active) + 1 shared expert, KV cache compression-focused design. MIT licensed.

### Raw benchmarks found (DeepSeek's published table)

Agent / tool use:

- Terminal-Bench 4.0 (Claude Code harness): **42.3%** (up from 31.2).
- Automation-Bench v1.0.6: **60.5%** (up from 54.8).
- Agents' Last Exam: **35.4%** (up from 31.8).
- Apex Bench v1.1: **72.1%** (up from 64.6).
- DeepSWE v1.1 (Mini-SWE-V2): **77.0%** (up from 74.2).
- ProgramBench: **29.1%** (up from 20.3).
- NL2Repo-Bench: **68.2%** (up from 65.4).
- Tool use/cost per task: DeepSeek reports ~77% on DeepSWE at ~$0.20/task (vs ~$0.50 for previous Flash)
  with lower effort setting still ~72% at ~$0.10/task - very cost efficient for agent work.

Reasoning / knowledge:

- HLE (no tools): **42.6%** (44.0% text-only subset), up from 36.8%/39.1%.
- Independent: Artificial Analysis Intelligence Index v4.3.2 gives **45** (open-weight models >150B),
  ranked well among comparable open models; Vals AI Vals Index **56.58%** (14th of 50).

Coding:

- DeepSWE v1.1: **77.0%** (strong).
- Terminal-Bench 4.0: **42.3%**.
- ProgramBench: **29.1%**.
- NL2Repo-Bench: **68.2%**.
- Arena Code Arena (WebDev) reported as #1 among open models at time of writing.

Vision / multimodal:

- Chartography (w/tools): **83.0%**.
- BabyVision (w/tools): **92.5%**.
- ZeroBench-main (w/tools, Pass@5): **51.0%**.
- Native image input supported.

### Normalized scores (1-100)

- **Tool use: 82/100.** Strong agent benchmarks (Apex 72.1%, Automation-Bench 60.5%, Agents' Last
  Exam 35.4%) and excellent cost-per-task for agent work; Terminal-Bench 4.0 at 42.3% is solid
  but not at the very top of frontier.
- **Reasoning: 74/100.** HLE 42.6% is good for a Flash model, AA Intelligence Index 45 and
  Vals Index ~56.6% show competitive reasoning; below the absolute frontier (Opus/GPT-6 class)
  but strong for the price tier.
- **Context window: 95/100.** 1M context with efficient KV cache design and up to 384K output is
  excellent.
- **Multimodal: 78/100.** Native image input with strong vision-agent results (BabyVision 92.5%,
  Chartography 83.0%) but no video/audio modality and limited published multimodal breadth.
- **Coding: 82/100.** DeepSWE 77%, NL2Repo 68.2%, strong agentic coding performance; Terminal-Bench
  42.3% is decent. Very competitive for the cost.
- **Cost efficiency: 98/100.** Exceptionally cheap ($0.15/$0.003/$0.60 off-peak) with dramatically
  better cost-per-task than frontier models; this is a major strength.
- **Overall Score: 82.2/100.** A cost-efficient agent/coding workhorse with strong benchmarks and
  massive price/performance advantage. Not the absolute top on every benchmark but excellent
  value and very capable for most tasks.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-10-22
- Method: pulled from DeepSeek's HuggingFace model card (DeepSeek-V4.1-Flash-1017), DeepSeek API
  pricing/docs, and independent reporting (The Decoder, LuminaBench, DigIntoAI, Thorsten Meyer AI,
  Artificial Analysis, Vals AI). All benchmark numbers are DeepSeek's published figures as stated;
  harness differences (Claude Code for Terminal-Bench, Mini-SWE-V2 for DeepSWE) are noted.
  Confirmed hosted API name is `deepseek-flash` (serving 1017) and weights are MIT licensed.
  Not present in OpenCode Zen catalogue as a separate 1017 id.
- Future sources: add independent reproductions if available; do not overwrite with unverified
  numbers.
