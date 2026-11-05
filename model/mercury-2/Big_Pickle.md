# Mercury 2 — findings by Big Pickle

- Source: Inception Labs/Mercury 2 (`inception/mercury-2`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' February 2026 diffusion LLM, the first widely available dLLM with parallel block refinement at 500-1,000 tokens per second. It is the predecessor to Mercury 3 and is now the budget/legacy tier.
- **Provider / access:** Inception Labs API; OpenRouter `inception/mercury-2`; OpenCode Zen ID `inception/mercury-2`. Chat Completions API.
- **Release / knowledge:** 2026-02-24; knowledge cutoff not published.
- **IDs:** `inception/mercury-2` (no Free ID)
- **Context window:** 131,072 input / 51,200 output (vendor card; `meta.json` says "128K / 50K out")
- **Modalities:** text and vision in / text out; reasoning no; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-05):** $0.25/$0.75 per 1M in/out; $0.025 per 1M cached input
- **Architecture:** proprietary diffusion LLM (dLLM), parallel block refinement, no parameter count published

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no BenchLM entry for this ID)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **24.8%** (per `meta.json`, sourced from the Inception launch card)
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- No MRCR/RULER retrieval result published; the 128K window is a card figure only.

### Normalized scores (1-100)

- **Tool use: 42/100.** Function calling and JSON mode exist, but with no agentic benchmark coverage the multi-step reliability is unverified; the non-reasoning decoder also limits plan repair.
- **Reasoning: 48/100.** No published GPQA/HLE/CritPt numbers; the diffusion decoder trades depth for speed, so the score reflects an unproven mid-tier ceiling.
- **Context window: 56/100.** 128K input is mid-tier and the 50K output cap is restrictive; no retrieval benchmark verifies depth.
- **Multimodal: 60/100.** Vision input is supported per the vendor card, with no published vision benchmark to calibrate quality.
- **Coding: 38/100.** SWE-bench Verified 24.8% confirms weak repository-scale coding; fine for short snippets only.
- **Cost efficiency: 94/100.** $0.25/$0.75 with a $0.025 cached-input rate and 500-1,000 tok/s is cheap per unit of latency, even if per-token price is higher than Mercury 3.
- **Overall Score: 49/100.** Mean of (42+48+56+60+38)/5 = 48.8, rounded to 49. Best fit: real-time voice and short sub-agent loops where speed matters more than reasoning depth; Mercury 3 is the better buy for anything new.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Inception Labs launch material, OpenRouter, vendor pricing pages); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs — Mercury 2](https://inceptionlabs.ai/blog/mercury-2)
  - [OpenRouter — Mercury 2](https://openrouter.ai/inception/mercury-2)
  - [Inception Labs — pricing](https://inceptionlabs.ai/pricing)
- Future sources: add a new file next to this one, e.g. `Mercury_2_2.md`, using the same headings.
