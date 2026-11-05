# Leanstral 1.5 — findings by Big Pickle

- Source: Mistral AI/Leanstral 1.5 (`opencode/leanstral-1.5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's specialist formal-theorem-proving model for Lean 4 autoformalization, built on a 119B MoE with 6.5B active parameters. It is a narrow domain model, not a general chat replacement.
- **Provider / access:** Open weights on Hugging Face (Apache-2.0); hosted via Mistral's API and OpenCode Zen ID `opencode/leanstral-1.5`. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff not published.
- **IDs:** `opencode/leanstral-1.5` (no Free ID on Zen)
- **Context window:** 262,144 tokens (256K) (vendor card; `meta.json` says "262,144 (256K)")
- **Modalities:** text in / text out; reasoning yes (proof search); tool calls limited (Lean compiler loop); JSON mode no
- **Pricing (as of 2026-11-05):** free open weights ($0/$0); hosted ~$0.15/$0.45 per 1M in/out, roughly $4 per full problem attempt
- **Architecture:** MoE, 119B total / 6.5B active, Apache-2.0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- miniF2F: **100%** (Mistral blog)
- PutnamBench: **587 / 672** problems solved (Mistral blog)
- FATE-H: **87%** (Mistral blog)
- FATE-X: **34%** (Mistral blog)
- FLTEval: **28.9 pass@1 / 43.2 pass@8** (Mistral blog)
- GPQA Diamond / HLE / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Lean 4 proof compilation is the primary coding-adjacent metric: miniF2F 100%, PutnamBench 587/672
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER result published; the 256K window is a card figure only.

### Normalized scores (1-100)

- **Tool use: 62/100.** The Lean compiler feedback loop is a genuine tool-use workflow, but there are no general agentic benchmarks and no function-calling suite.
- **Reasoning: 90/100.** miniF2F 100%, PutnamBench 587/672, FATE-H 87% and FLTEval pass@8 43.2 are state of the art for formal math; the narrow domain is the only caveat.
- **Context window: 78/100.** A 256K card is upper-mid tier, but no retrieval benchmark verifies usable depth.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 65/100.** Excellent at Lean 4 proof code, with no evidence for Python/TypeScript/repo-scale engineering.
- **Cost efficiency: 98/100.** Apache-2.0 weights at $0 and a 6.5B active footprint make it extremely cheap to run; hosted rates are near the floor.
- **Overall Score: 62/100.** Mean of (62+90+78+15+65)/5 = 62.0, rounded to 62. Best fit: Lean 4 autoformalization and formal-math pipelines; pair it with a general model for everything else.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Mistral AI launch blog and model card, Hugging Face); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Leanstral 1.5 announcement](https://mistral.ai/news/leanstral-1-5)
  - [Hugging Face — Leanstral 1.5](https://huggingface.co/mistralai/Leanstral-1.5)
  - [Mistral AI — models and pricing](https://mistral.ai/pricing)
- Future sources: add a new file next to this one, e.g. `Leanstral_1.5_2.md`, using the same headings.
