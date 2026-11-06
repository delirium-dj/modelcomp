# Mistral Small 4 — findings by DeepSeek 4.1 Flash

- Source: Mistral AI/Mistral Small 4
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's compact open-weight hybrid — instruct, reasoning, multimodal, and agentic coding unified in one Mixture-of-Experts model. Positioned as a cost-efficient general workhorse rather than a frontier flagship.
- **Provider / access:** Mistral API `mistral-small-2603`; open weights on Hugging Face (`mistralai/Mistral-Small-4-119B-2603`); day-0 NVIDIA NIM inference; vLLM / llama.cpp / SGLang support. Earlier project notes list an `opencode/mistral-small-4` Zen route, but Mistral Small 4 is not in the live Zen catalog checked 2026-11-06 (only `mistral-large-4` is). Chat Completions-style API with `reasoning_effort` parameter (none/high).
- **Release / knowledge:** 2026-03-16; knowledge cutoff not stated.
- **IDs:** `mistral-small-2603` (Mistral API) / `mistralai/Mistral-Small-4-119B-2603` (Hugging Face).
- **Context window:** 256K tokens total (256K in / 256K out per LLM Stats tracker).
- **Modalities:** text + image in, text out; reasoning (configurable); tool calls; Apache 2.0 open weights.
- **Pricing (as of 2026-11-06):** $0.15/M in, $0.60/M out (Mistral API); 90% cache discount (AA); blended ~$0.10/M; ~$0.04–0.10 per AA Intelligence Index task. No free tier.
- **Architecture:** MoE, 119B total / ~6.5B active per token (128 experts, 4 active; vendor quotes 6B active plus 8B including embedding/output layers), Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **21.0%** (BenchmarkList, rank 132/196)
- Terminal-Bench 2.0: **16.9%**; Terminal-Bench Hard: **10.6%** (rank 154/326)
- Tau3-Banking: **5.2%** (rank 151/183); Tau2-Bench Telecom: **18.4%** (rank 271/337)
- GDPval-AA: **862 Elo** (rank 144/358)
- ClawProBench: **45.26** (rank 43/48); Claw-Eval: no verified public score found
- CorpBench Work 1.3: **74.8** (rank 11/16); PinchBench: **76.8%** (rank 55/76); ContractBench: **42.4%**; AutoBench: **2.69**; AA-Briefcase: **241 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **76.9%** (rank 164/478)
- HLE: **9.9%** (rank 216/491)
- AA-LCR: **49.7%** (rank 216/423); Context Arena (GDM-MRCRv2): **25.4%** average
- CritPt: **0.3%** (AA page)
- Artificial Analysis Intelligence Index: **19.56** (BenchmarkList, rank 162/324; AA class view ranks it #3/3 among same-size open-weight peers)
- AA-Omniscience: **−29.9 net** (AA page); ObviousBench: **37.5%** pass³; Altered Riddles: **0.349** conditioned override rate

Coding:

- SciCode: **38.8%** (rank 141/311)
- LiveCodeBench: no verified public score found (vendor claims outperforming GPT-OSS 120B with ~20% less output, no number published)
- BLXBench: **75.2%** (rank 9/25); SAKE architectural knowledge: **92.5%** (rank 8/11)
- Vibe Code Bench v1.1: **0.0%** (rank 75/75)
- ALE-Bench: **497.63** (rank 63/83)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- AA-LCR 49.7%; Context Arena average 25.4% (AUC 128K 16.1%, AUC 1M 2.3%) — multi-needle retrieval weakens with length
- IDP Leaderboard (document AI): **71.5** (rank 15/30) — strongest multimodal-adjacent signal found

### Normalized scores (1–100)

- **Tool use: 46/100.** TB2.1 21% and Tau3-Banking 5.2% sit well below the methodology's mid band (45–60% / 10–25%); GDPval 862 is just under the 900 floor; weak rank percentiles on ClawProBench/AutoBench/AA-Briefcase cap it, with CorpBench/PinchBench only mid-field.
- **Reasoning: 60/100.** GPQA 76.9% and HLE 9.9% sit at the top of the mid band, but AA Intelligence Index 19.56, CritPt 0.3%, and weak Context Arena retrieval keep it out of the upper band.
- **Context window: 73/100.** 256K maps into the 200K–500K tier (200K = 70), adjusted slightly up for size; measured long-context retrieval (~50% LCR, ~25% MRCR-style) caps it.
- **Multimodal: 62/100.** Native image-in/text-out in the Pixtral lineage; IDP Leaderboard 71.5 is mid-field; no video/audio scoring found.
- **Coding: 56/100.** SciCode 38.8% and Vibe Code Bench 0% are below the methodology's mid coding profile; BLXBench 75.2% and SAKE 92.5% are the bright spots; TB2.1 21% caps agentic coding.
- **Cost efficiency: 95/100.** $0.15/$0.60 per 1M is near the top of the paid range ($0.10/$0.20 → 97–99; $0.60/$2.20 → ~92), with ~$0.04–0.10 per AA task.
- **Overall Score: 59/100.** Half-up mean of the five quality dims (46+60+73+62+56)/5 = 59.4 → 59. Best fit: budget self-hosted chat/document understanding and light agentic batch work — not frontier-grade coding or long-horizon agents.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: public internet research (vendor launch post and model card, Artificial Analysis, BenchmarkList, LLM Stats, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mistral Small 4 — Mistral AI](https://mistral.ai/news/mistral-small-4/)
  - [Mistral Small 4 — BenchmarkList](https://benchmarklist.com/models/mistralai-mistral-small-2603/)
  - [Mistral Small 4 (Reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/mistral-small-4)
  - [Mistral Small 4 — LLM Stats](https://llm-stats.com/models/mistral-small-latest)
  - [Mistral Small 4 — Hugging Face](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
  - [Best Mistral Models — BenchLM](https://benchlm.ai/best/mistral-models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
