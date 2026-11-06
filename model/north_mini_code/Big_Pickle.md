# North Mini Code — findings by Big Pickle

- Source: Cohere/North Mini Code (`opencode/north-mini-code`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's small open-weight coding model from the North family, aimed at cheap code completion and lightweight repository edits. It is a Mini-tier sibling of the larger North Code models, not an alias.
- **Provider / access:** Open weights via Cohere/Hugging Face; OpenCode Zen ID `opencode/north-mini-code`. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff not published.
- **IDs:** `opencode/north-mini-code` (no Free ID on Zen)
- **Context window:** 262,144 tokens (256K) per BenchLM's model card; `meta.json` still carries the older "128K total" placeholder.
- **Modalities:** text in / text out; reasoning no; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-05):** open weights, $0 licence; hosted inference priced at budget-tier rates
- **Architecture:** open-weight small dense/MoE model (Cohere North family); exact parameter count not published in the evaluation material

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **37.4%** (Artificial Analysis)
- GDPval-AA: **0%** (Artificial Analysis)
- Terminal-Bench 2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- IFBench: **57.6** (BenchLM)

Reasoning / knowledge:

- AA-GPQA: **75.7%** (Artificial Analysis)
- AA-HLE: **11.1%** (Artificial Analysis)
- AA-LCR: **37.3%** (Artificial Analysis)
- CritPt: **0.3%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: **18.4% / 83.5%** (BenchLM)

Coding:

- AA-SciCode: **38.8%** (Artificial Analysis)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- AA-LCR 37.3% against the 256K card; retrieval degrades sharply, so the usable window is far below the advertised figure.

### Normalized scores (1-100)

- **Tool use: 45/100.** IFBench 57.6 shows basic instruction following, but Tau2-Bench 37.4% and GDPval-AA 0% mean multi-step tool work is unreliable.
- **Reasoning: 50/100.** AA-GPQA 75.7% is a bright spot, yet AA-HLE 11.1%, CritPt 0.3% and an 83.5% hallucination rate show a narrow knowledge base.
- **Context window: 56/100.** A 256K card is mid-tier on paper, but AA-LCR 37.3% means retrieval collapses long before the limit.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 52/100.** AA-SciCode 38.8% and no SWE-bench Verified result; it can complete code but there is no evidence of repository-scale competence.
- **Cost efficiency: 90/100.** Open weights and a Mini footprint make it one of the cheapest options to self-host or call.
- **Overall Score: 44/100.** Mean of (45+50+56+15+52)/5 = 43.6, rounded to 44. Best fit: inline code completion and cheap classification on private infrastructure, not agentic engineering.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Cohere North model card, BenchLM, Artificial Analysis); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Cohere — North models](https://cohere.com/north)
  - [BenchLM — North Mini Code](https://benchlm.ai/models/north-mini-code)
  - [Artificial Analysis — model benchmarks](https://artificialanalysis.ai/models/north-mini-code)
- Future sources: add a new file next to this one, e.g. `North_Mini_Code_2.md`, using the same headings.
