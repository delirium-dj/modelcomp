# Qwen 3.5 — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen — Qwen3.5-397B-A17B (`qwen-3.5`, the Qwen3.5 flagship)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Slug note:** the folder slug is bare `qwen-3.5`; I resolved it to Alibaba's Qwen3.5 **flagship** release — `Qwen3.5-397B-A17B` — the canonical "Qwen 3.5" model (the card states the hosted `Qwen3.5-Plus` is the same weights with 1M default context and built-in tools).
> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed from the official HF card: **TAU2-Bench 86.7%**, **BFCL-V4 72.9%**, VITA-Bench 49.7, Tool Decathlon 38.3, MCP-Mark 46.1, BrowseComp 69.0/78.6, **HLE with tools 48.3%**; **GPQA 88.4%**, MMLU-Pro 87.8%, HLE 28.7% (37.6% verified), AIME26 91.3%, HMMT 92.7–94.8%, SuperGPQA 70.4%, IFBench 76.5%, MultiChallenge 67.6%; **SWE-bench Verified 76.4%**, SWE Multilingual 69.3%, LiveCodeBench v6 83.6%, SecCodeBench 68.3%, Terminal-Bench 2.0 52.5%; AA-LCR 68.7%, LongBench v2 63.2%; MMMU **85.0%**, MMMU-Pro 79.0%, MathVision 88.6%, OmniDocBench v1.5 90.8%, Video-MME 87.5%, OSWorld-Verified 62.2%. Independent: AA Intelligence Index **18 (#59/117)** with **AA-Omniscience index −37.9 (hallucination 82.7%)**, BenchLM overall 55.58 (#63/891).
> **Conflicts surfaced:** (1) **AA Intelligence Index** — 18 (AA) vs 21.4% (BenchLM's copy). (2) **SWE-bench Verified** 76.4% (official) vs 76.2% (BenchLM, sourced from the Qwen3.6 table). (3) **AIME26** 91.3% (official) vs 93.3% (BenchLM/Qwen3.6). (4) **Context** 262,144 (official) vs 128K (BenchLM). (5) **Reasoning flag** official "yes" vs BenchLM "Non-Reasoning". (6) The AA-Omniscience hallucination rate (82.7%) is a notable knowledge-reliability weakness absent from the prior file.
> **No dimension change:** the official card confirms the prior profile; Overall stays **80** (the AA hallucination weakness is noted but does not alter the five quality dims).
> Sources: https://huggingface.co/Qwen/Qwen3.5-397B-A17B · https://artificialanalysis.ai/models/qwen3-5-397b-a17b · https://benchlm.ai/models/qwen3-5-397b · https://www.digitalapplied.com/blog/qwen-3-5-agentic-ai-benchmarks-guide

## Model card

- **Name:** Qwen 3.5 (Qwen3.5-397B-A17B)
- **Short description:** Alibaba's flagship Qwen3.5 generation — a unified vision-language Mixture-of-Experts foundation model (early-fusion multimodal training) with 397B total / 17B active parameters, strong reasoning, coding and agentic capability across 201 languages.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, Apache 2.0) with hosted routes on Alibaba Cloud PAI-EAS / Model Studio, OpenRouter, Together AI and Novita AI.
- **Release / knowledge:** Released 2026-02-16. Knowledge cutoff not published.
- **IDs:** upstream `Qwen/Qwen3.5-397B-A17B`; hosted sibling id `qwen3.5-plus`. The folder slug `qwen-3.5` has no Zen ID.
- **Context window:** 262,144 tokens natively, extensible up to 1,010,000 tokens via YaRN (DeepInfra 262.1K/262.1K; Novita 262.1K/64K).
- **Modalities:** Text and image in (early-fusion vision encoder; video via llm-stats); text out. Thinking/reasoning mode on by default, tool calls, JSON/structured outputs.
- **Pricing (as of 2026-10-11):** DeepInfra $0.45 in / $0.22 cached / $3.00 out per 1M; Novita/Alibaba $0.60/$3.60.
- **Architecture:** Sparse MoE, 397B total / 17B active (512 experts, 10 routed + 1 shared), 60 layers of Gated DeltaNet + Gated Attention hybrid; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench **86.7%**; BFCL-V4 72.9%; VITA-Bench 49.7%; Tool Decathlon 38.3%; MCP-Mark 46.1%; HLE with tools 48.3%
- BrowseComp 69.0% (simple) / 78.6% (discard-all); WideSearch 74.0%; OSWorld-Verified 62.2%; AndroidWorld 66.8%
- τ²-bench 83.9% (AA); Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA (Diamond) **88.4%**; MMLU-Pro 87.8%; HLE 28.7% (HLE-Verified 37.6%); AIME26 91.3%; HMMT Feb25/Nov25 94.8/92.7
- SuperGPQA 70.4%; MMLU-Redux 94.9%; C-Eval 93.0%; IFBench 76.5%; MultiChallenge 67.6%; IMOAnswerBench 80.9%
- Artificial Analysis Intelligence Index **18 (#59/117)**; **AA-Omniscience index −37.9 (accuracy 24.5%, hallucination 82.7%)**; AA-GPQA 86.1; AA-HLE 19.8

Coding:

- SWE-bench Verified **76.4%**; SWE Multilingual 69.3%; LiveCodeBench v6 83.6%; SecCodeBench 68.3%; Terminal-Bench 2.0 52.5%
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR **68.7%**; LongBench v2 63.2%; no RULER/MRCR retrieval curve published; 262K native / 1M YaRN.

Multimodal:

- MMMU **85.0%**; MMMU-Pro 79.0%; MathVision 88.6%; MathVista 90.3%; OmniDocBench v1.5 90.8%; Video-MME 87.5%; ScreenSpot Pro 65.6%.
- AA-MMMU-Pro 52.7% (AA) — a lower independent reading than the vendor 79.0%.

### Normalized scores (1–100)

- **Tool use: 84/100.** τ-bench (Tau2) 86.7%, BFCL v4 72.9%, VITA-Bench 49.7% and MultiChallenge 67.6% are strong across tool-calling and multi-turn agent work — upper mid, below the τ³ 50%+/GDPval 1750+ frontier band.
- **Reasoning: 84/100.** GPQA Diamond 88.4% is near-frontier (90%+ band) and MMLU-Pro 87.8% is high, but HLE 28.7% is mid; the AA index (18) and the very high AA hallucination rate (82.7%) hold it below the top band.
- **Context window: 82/100.** 262K native is the 200K–500K tier (≈74), lifted to 82 by the catalogued 1M YaRN extension delivered through the hosted Plus tier; no ≥98% retrieval evidence.
- **Multimodal: 68/100.** Text + image in (MMMU 85.0% is strong, but the AA-MMMU-Pro 52.7% is much lower), no video/audio documented on the open weights → the 60–70 band.
- **Coding: 83/100.** SWE-bench Verified 76.4% and LiveCodeBench v6 83.6% are solidly upper-mid/high; no SciCode/DeepSWE figure lifts it to the frontier coding band.
- **Cost efficiency: 90/100.** $0.45/$3.00 (DeepInfra, cached $0.22) lands between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) reference points.
- **Overall Score: 80/100.** (84 + 84 + 82 + 68 + 83) / 5 = 80.2 → **80**. Best-fit: open-weights multimodal flagship for reasoning + agentic/coding workloads when self-hosting Apache-2.0 weights matters; watch the high hallucination rate on knowledge-reliability tasks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (Qwen3.5-397B-A17B Hugging Face card, Artificial Analysis, BenchLM, Digital Applied, LLM-Stats, OpenRouter). The AA index/hallucination rows and the vendor-vs-AA multimodal spread were added; the BenchLM context/reasoning-label discrepancies are surfaced. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
