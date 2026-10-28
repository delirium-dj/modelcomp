# Qwen3.5-0.8B — findings by GPT 6 Astra

- Source: Alibaba Qwen / `Qwen/Qwen3.5-0.8B`
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

[Primary post-trained card](https://huggingface.co/Qwen/Qwen3.5-0.8B/raw/main/README.md) specifies a **0.8B dense language backbone with vision encoder**, Apache-2.0, 24 layers mixing Gated DeltaNet/full attention 3:1. Family-level MoE wording in secondary pages does not describe its FFN architecture. **262,144 native shared context**; recommended outputs 32,768 normally and 81,920 for difficult evaluations are budgets, not independent hard output limits. Text/image/video-frame input, text output, tools, optional thinking with **non-thinking default**. The card explicitly notes increased thinking-loop susceptibility. Cutoff unverified; gateway release March 2, 2026 differs from aggregator February 28 metadata.

Local vLLM/SGLang support OpenAI-compatible Chat Completions. [Opper's route](https://opper.ai/alibaba/qwen3-5-0-8b), `deepinfra/Qwen/Qwen3.5-0.8B`, lists **$0.01 input/$0.05 output per million tokens**; priority **$0.01/$0.07**. It claims zero retention/no training for that deployment, with October 19 verification. Its route exposes text input, while the native checkpoint supports vision; do not assume all hosts expose all modalities. Its 262K output listing shares the total context budget. No Zen Free ID verified. Local hardware has costs despite free weights.

### Raw benchmarks found

Publisher thinking scores: **GPQA 11.9%**, MMLU-Pro **42.3%**, SuperGPQA **21.3%**, BFCL-v4 **25.3%**, Tau2 **11.6%**, IFEval **44.0%**, IFBench **21.0%**, MultiChallenge **18.9%**, AA-LCR **4.7%**, LongBench v2 **26.1%**. Non-thinking MMLU-Pro **29.7%**, IFEval **52.1%**; thinking does not uniformly improve this model. Language evaluation temperature 1/top-p .95/top-k 20/presence penalty 1.5; Tau2 applies airline fixes.

Publisher **thinking/non-thinking** vision: MMMU **49.0/47.4**, MMMU-Pro **31.2/31.4**, MathVista mini **62.2/58.6**, OCRBench **74.5/79.1**, OmniDocBench 1.5 **61.0/70.6**, MMLongBench-Doc **33.6/28.1**. VideoMME **63.8% with subtitles / 57.7% without**, VideoMMMU **44.3%**, LVBench **45.1%**; ScreenSpot Pro **46.5** is non-thinking. Video sampling temperature 1; other vision thinking .6/non-thinking .7. These demonstrate native multimodal coverage, not high-end visual reasoning.

[BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.5-0.8b/) aggregates independent **TB2.1 0.4%**, **Tau3-Banking 1.2%**, historical **Terminal Hard 0.0%**, **GDPval-AA −80 Elo**, **GPQA Diamond 23.6%**, **HLE 5.1%**, **LCR 9.0%**, index **6.1**. Opper's separate AA snapshot shows GPQA **11%**, HLE **1%**, Telecom **48%** and coding index **0.0**, whereas BenchmarkList's historical Telecom is **65.2%**. These mode/harness/snapshot differences are retained rather than averaged; the cross-source conclusion of near-floor difficult coding remains consistent. Negative Elo is valid on its own rating scale, not negative task accuracy.

No verified exact-model SWE-bench, standalone SciCode, LiveCodeBench, Claw-Eval or full-262K MRCR result found. No parent/sibling scores substituted. Weak LCR means the advertised context is capacity rather than reliable evidence integration at that length.

### Normalized scores (1–100)

- **Tool use: 15/100.** BFCL 25.3%, Tau2 11.6% and Tau3 1.2% show limited reliable orchestration; narrow historical telecom performance is not general agent competence.
- **Reasoning: 22/100.** GPQA 11.9–23.6%, low HLE and LCR 4.7–9% imply a low difficult-reasoning ceiling.
- **Context window: 65/100.** Native 262K falls in the 200K–500K tier, discounted to its bottom for weak measured integration.
- **Multimodal: 75/100.** Measured image/document/video coverage, with modest comprehension and no audio or non-text output.
- **Coding: 10/100.** Measured TB2.1 0.4%, Terminal Hard 0% and snapshot coding index 0 establish near-floor complex coding, not missing evidence.
- **Cost efficiency: 99/100.** Verified gateway $0.01/$0.05 pricing and tiny open deployment; free weights are not a free hosted API.
- **Overall Score: 37/100.** Half-up mean of (15 + 22 + 65 + 75 + 10)/5 = 37.4; useful for carefully constrained edge multimodal experiments.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-28 UTC
- Method: Three fresh web searches, exact checkpoint tables, provider route and independent-result reconciliation; normalized interpretations.
