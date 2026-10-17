# Qwen 3.5 397B — findings by Beam

- Source: Alibaba/Qwen 3.5 397B, `qwen/qwen3.5-397b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's open-weight MoE (Feb 16, 2026): 397B total / 17B active, 128K context (extendable to 262K). Text/image/video in. BenchLM 55.34 (#65 of 954). GPQA Diamond 88.4% (open-weight leader). MMLU-Pro 87.8%. SWE-bench Verified 76.2%. Open weights (Apache 2.0). $0.60/$3.60 per 1M.
- **Provider / access:** HuggingFace `Qwen/Qwen3.5-397B-A17B`; OpenRouter; Alibaba Cloud.
- **Release / knowledge:** Released 2026-02-16; knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.5-397b`
- **Context window:** 128,000 tokens (extendable to 262K with YaRN); max output not stated.
- **Modalities:** text, image, video in; text out; reasoning yes (thinking mode); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** $0.60 / 1M input, $3.60 / 1M output; paid.
- **Architecture:** MoE, 397B total / 17B active, 512 experts (10 routed + 1 shared), 60 layers, hybrid Gated DeltaNet + Gated Attention (3:1), 128K context (extendable to 262K), Apache 2.0. Trained on 36T tokens.

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

- Coding public-lane (BenchLM): Coming soon
- SWE-bench Verified: **76.2%** (BenchLM)
- LiveCodeBench v6: **83.6%** (BenchLM)
- SWE-bench Pro: **50.9%** (BenchLM)
- SWE Multilingual: **69.3%** (BenchLM)
- NL2Repo: **32.2%** (BenchLM)
- Terminal-Bench 2.0: **52.5%** (BenchLM)

Long context:

- 128K window (extendable to 262K); MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **73.6** (#29/54)
- Text/image/video in; MMMU **85.0%** (BenchLM), MMMU-Pro **79%** (BenchLM), RealWorldQA **83.9%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic lane #61/128 (43.9), Terminal-Bench 2.0 52.5%, BrowseComp 69%, OSWorld 62.2%, Claw-Eval 56.8%, QwenClawBench 51.8%, τ³-bench 68.4%, VITA-Bench 43.7%, DeepPlanning 37.6%, Toolathlon 36.3%; caps at Toolathlon 36.3%.
- **Reasoning: 74/100.** GPQA 88.4%, MMLU-Pro 87.8%, AIME 93.3%, HMMT 87.9%, MMAnswerBench 80.9%, AA-IFBench 51.6%; caps at no published HLE/AA Intelligence.
- **Context window: 60/100.** 128K window (extendable to 262K); caps at no published MRCR/AA-LCR.
- **Multimodal: 76/100.** Text/image/video in; MMMU 85.0%, MMMU-Pro 79%, RealWorldQA 83.9%; caps at no published CharXiv.
- **Coding: 68/100.** SWE-bench 76.2%, LiveCodeBench 83.6%, SWE-bench Pro 50.9%, SWE Multilingual 69.3%, NL2Repo 32.2%, Terminal-Bench 2.0 52.5%; caps at NL2Repo 32.2%.
- **Cost efficiency: 88/100.** $0.60/$3.60 per 1M.
- **Overall Score: 68.8/100.** Mean of five quality dims (BenchLM 55.34); best-fit for open-weight reasoning at mid cost. GPQA Diamond open-weight leader (88.4%). (Superseded by Qwen 3.6/3.7/3.8.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba official, BenchLM, Ertas AI, DeepInfra, InferenceX, Kilo Code, Morph, Serenities AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Qwen 3.5 397B is the open-weight flagship. Apache 2.0. GPQA Diamond open-weight leader (88.4%). Superseded by Qwen 3.6/3.7/3.8. Multimodal (text/image/video).<|end|>>2>