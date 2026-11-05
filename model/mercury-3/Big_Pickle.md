# Mercury 3 — findings by Big Pickle

- Source: Inception Labs/Mercury 3 (`inception/mercury-3`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' October 2026 flagship diffusion LLM, using non-autoregressive parallel decoding at more than 1,000 tokens per second for latency-critical agents. It is the successor to Mercury 2, not an alias.
- **Provider / access:** Inception Labs API; OpenRouter `inception/mercury-3`; OpenCode Zen ID `inception/mercury-3`. Chat Completions API.
- **Release / knowledge:** October 2026; knowledge cutoff not published.
- **IDs:** `inception/mercury-3` (no Free ID)
- **Context window:** 1,048,576 input / 131,072 output (vendor card; `meta.json` says "1M / 128K out")
- **Modalities:** text in / text out; reasoning no (fast non-reasoning decoder); tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-05):** $0.10/$0.35 per 1M in/out; prompt caching available on host platforms
- **Architecture:** proprietary diffusion LLM (dLLM), parallel block decoding, no parameter count published

### Raw benchmarks found

Agent / tool use:

- Tau3-Bench: **30.2%** (Artificial Analysis)
- BrowseComp+: **55.18%** (Inception model card)
- DeepSearchQA: **71.3%** (Inception model card)
- IFBench: **76.8** (BenchLM)
- MultiChallenge: **60.35** (Inception model card)
- Terminal-Bench 2.1 / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Inception model card)
- HLE / CritPt: no verified public score found
- MRCRv2: **75.5** (Inception model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Design Arena: **1233 Elo** (Inception model card)

Coding:

- SWE-bench Verified: **38.5%** (Inception model card)
- DeepSWE: **46.3** (BenchLM)
- LiveCodeBench / SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCRv2 75.5 against the 1M window; retrieval is solid but noticeably below autoregressive frontier models at the same length.

### Normalized scores (1-100)

- **Tool use: 64/100.** BrowseComp+ 55.18%, DeepSearchQA 71.3% and IFBench 76.8 show competent search and instruction following; Tau3-Bench 30.2% and the missing Terminal-Bench/MCP-Atlas results cap it.
- **Reasoning: 78/100.** GPQA Diamond 89.2% is strong, but with no HLE or CritPt published and a non-reasoning decoder, the deep-reasoning ceiling is unproven.
- **Context window: 88/100.** A verified 1M input with MRCRv2 75.5; the 128K output cap and sub-frontier retrieval keep it below 90.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 60/100.** SWE-bench 38.5% and DeepSWE 46.3 are mid-tier; the speed advantage does not translate into repository-scale correctness.
- **Cost efficiency: 97/100.** $0.10/$0.35 per 1M with >1,000 tok/s is among the best price-per-latency ratios on the market.
- **Overall Score: 61/100.** Mean of (64+78+88+15+60)/5 = 61.0, rounded to 61. Best fit: real-time search agents and high-throughput classification where latency dominates and code correctness is checked downstream.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Inception Labs model card, BenchLM, Artificial Analysis, OpenRouter); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs — Mercury 3](https://inceptionlabs.ai/blog/mercury-3)
  - [OpenRouter — Mercury 3](https://openrouter.ai/inception/mercury-3)
  - [BenchLM — Mercury 3](https://benchlm.ai/models/mercury-3)
  - [Artificial Analysis — Mercury 3](https://artificialanalysis.ai/models/mercury-3)
- Future sources: add a new file next to this one, e.g. `Mercury_3_2.md`, using the same headings.
