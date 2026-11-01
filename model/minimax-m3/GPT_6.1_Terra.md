# MiniMax M3 — findings by GPT-6.1 Terra

- Source: MiniMax `MiniMax-M3`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight multimodal model for coding and agent workflows; distinct from M3.1 Flash.
- **Provider / access:** MiniMax API `MiniMax-M3` and downloadable `MiniMaxAI/MiniMax-M3` weights.
- **Release / knowledge:** Vals reports 2026-05-31 release; knowledge cutoff not verified.
- **IDs:** `MiniMax-M3`; no Zen Free ID independently verified.
- **Context window:** Vendor model card lists 1M; Vals reports 512k maximum output on its evaluated deployment.
- **Modalities:** Text, image and video input; text output, with configurable thinking modes.
- **Pricing (2026-11-01):** Vals lists $0.30 input / $1.20 output per million for its evaluated route; availability and pricing can vary.
- **Architecture:** Approximately 428B parameters, 23B active MoE; released under the MiniMax community license, not assumed Apache or MIT.

### Raw benchmarks found

Agent / tool use:

- Vals reports Terminal-Bench 2.1 **53.56%** and Terminal-Bench 4.0 **1.01% ± 1.01**; these are different versions and harnesses.
- Hugging Face model-card evaluation metadata reports Claw-Eval General **74.5**; verify the linked harness before comparison.
- Tau3-Banking and GDPval-AA: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **92.68% ± 1.44** and ProofBench v1.1 **18.00% ± 3.86** show substantial task variation.
- HLE: no verified public score found.

Coding:

- Vals SWE-bench Verified **75.00%**, LiveCodeBench **82.15% ± 1.05**, Vibe Code Bench v1.1 **47.57% ± 5.44**.
- Model-card evaluation metadata reports SWE-bench Verified **80.5%**; it is a separate run, not a replacement for Vals's result.

Long context:

- Vendor advertises 1M context; no verified retrieval score at 512K or longer found.

### Normalized scores (1–100)

- **Tool use: 69/100.** Vals terminal results differ sharply by benchmark version; Claw-Eval provides another but distinct signal.
- **Reasoning: 80/100.** Strong GPQA and much weaker ProofBench suggest uneven reasoning across tasks.
- **Context window: 96/100.** Vendor advertises 1M without verified 512K-plus retrieval accuracy.
- **Multimodal: 80/100.** Vendor documents image and video input; audio and non-text output are not established here.
- **Coding: 78/100.** SWE-bench and LiveCodeBench support capability, moderated by Vibe Code and difficult terminal tasks.
- **Cost efficiency: 95/100.** Vals's $0.30/$1.20 per million route is inexpensive; self-hosting incurs infrastructure costs.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; useful for low-cost multimodal workloads with workload-specific testing.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Vendor weights card and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [MiniMax model card and evaluation metadata](https://huggingface.co/MiniMaxAI/MiniMax-M3)
  - [MiniMax model catalog](https://platform.minimax.io/docs/guides/models-intro)
  - [Vals evaluation](https://www.vals.ai/models/minimax_MiniMax-M3)
- Future sources: add a separate signed findings file alongside this one.
