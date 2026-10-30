# Qwen 3.5 397B — findings by GPT-6 Luna

- Source: Alibaba/Qwen 3.5 397B, `qwen/qwen3.5-397b`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's Qwen3.5-397B-A17B open-weights MoE (397B total/17B active) for reasoning, coding and vision; SWE-bench 76.4%, AIME 91.3%, Apache 2.0.
- **Provider / access:** HuggingFace `Qwen/Qwen3.5-397B-A17B`; OpenRouter; Alibaba Cloud.
- **Release / knowledge:** Released 2026-02-16; knowledge cutoff not stated.
- **IDs:** `opencode/qwen-3.5-397b` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 262,144 native (extensible to ~1,010,000; 1M hosted)
- **Modalities:** Text, image, video in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** AA $0.60/$3.60 per 1M; Apache 2.0 open weights (free self-host)
- **Architecture:** MoE, 397B total / 17B active, 512 experts (10 routed + 1 shared), 60 layers, hybrid Gated DeltaNet + Gated Attention (3:1), 262K native context (extendable to approximately 1.01M), Apache 2.0. Trained on 36T tokens.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **43.9** (Estimated · #61/128)
- Terminal-Bench 2.0: **52.5%** (BenchLM)
- BrowseComp: **69%** (BenchLM)
- OSWorld-Verified: **62.2%** (BenchLM)
- Claw-Eval: **56.8%** (Claw-Eval leaderboard)
- QwenClawBench: **51.8%** (BenchLM)
- τ³-bench: **68.4%** (BenchLM)
- VITA-Bench: **43.7%** (BenchLM)
- DeepPlanning: **37.6%** (BenchLM)
- Toolathlon: **36.3%** (BenchLM)
- BFCL v4: **72.9%** (BenchLM)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **74.9** (Unranked · 2 rankable rows)
- GPQA Diamond: **88.4%** (Qwen official, open-weight leader)
- MMLU-Pro: **87.8%** (BenchLM)
- HLE: not reported for 397B
- AA Intelligence Index: not reported
- AIME 2026: **93.3%** (BenchLM)
- HMMT Feb 2026: **87.9%** (BenchLM)
- MMAnswerBench: **80.9%** (BenchLM)
- AA-LCR: not reported
- AA-IFBench: **51.6%** (Artificial Analysis)
- τ²-bench: **83.9%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): not computed in the collected extract
- SWE-bench Verified: **76.2%** (BenchLM)
- LiveCodeBench v6: **83.6%** (BenchLM)
- SWE-bench Pro: **50.9%** (BenchLM)
- SWE Multilingual: **69.3%** (BenchLM)
- NL2Repo: **32.2%** (BenchLM)
- Terminal-Bench 2.0: **52.5%** (BenchLM)

Long context:

- 262K native window (extendable to approximately 1.01M; 1M hosted); MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **73.6** (#29/54)
- Text/image/video in; MMMU **85.0%** (BenchLM), MMMU-Pro **79%** (BenchLM), RealWorldQA **83.9%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic lane #61/128 (43.9), Terminal-Bench 2.0 52.5%, BrowseComp 69%, OSWorld 62.2%, Claw-Eval 56.8%, QwenClawBench 51.8%, τ³-bench 68.4%, VITA-Bench 43.7%, DeepPlanning 37.6%, Toolathlon 36.3%; caps at Toolathlon 36.3%.
- **Reasoning: 74/100.** GPQA 88.4%, MMLU-Pro 87.8%, AIME 93.3%, HMMT 87.9%, MMAnswerBench 80.9%, AA-IFBench 51.6%; caps at no published HLE/AA Intelligence.
- **Context window: 72/100.** Native 262K reaches the 200K-to-500K tier; the 1M hosted extension has no published MRCR/AA-LCR retrieval evidence.
- **Multimodal: 76/100.** Text/image/video in; MMMU 85.0%, MMMU-Pro 79%, RealWorldQA 83.9%; caps at no published CharXiv.
- **Coding: 68/100.** SWE-bench 76.2%, LiveCodeBench 83.6%, SWE-bench Pro 50.9%, SWE Multilingual 69.3%, NL2Repo 32.2%, Terminal-Bench 2.0 52.5%; caps at NL2Repo 32.2%.
- **Cost efficiency: 88/100.** $0.60/$3.60 per 1M.
- **Overall Score: 71.2/100.** Half-up mean of the five non-cost quality dimensions: (66 + 74 + 72 + 76 + 68) / 5 = 71.2. Cost efficiency is excluded. Best fit is open-weight multimodal reasoning with a large memory footprint.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://qwenlm.github.io/blog/qwen-3.5-397b/)
  - [Source 2](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Source 3](https://benchlm.ai/models/qwen3-5-397b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
