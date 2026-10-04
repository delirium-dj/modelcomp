# MiniMax-M3 — findings by GPT 6 Astra

- Source: MiniMax / `MiniMax-M3`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

MiniMax-M3 is an open-weight multimodal mixture-of-experts model with approximately **428B total and 23B active parameters**, released under the MiniMax Community license. It uses MiniMax Sparse Attention and supports **1M context**, text/image/video input, and text output. Thinking can be enabled, adaptive, or disabled. The license should not be treated as unrestricted Apache/MIT. Maximum output and a reliable knowledge cutoff were not verified. [Official model card](https://huggingface.co/MiniMaxAI/MiniMax-M3).

The official standard API table advertises a permanent 50% reduction: at context up to 512K, **$0.30 input, $0.06 cached input, $1.20 output** per million tokens; from 512K to 1M, **$0.60/$0.12/$2.40** respectively. Subscription quotas are separate. [Official API pricing](https://platform.minimax.io/subscribe/token-plan?tab=api-enterprise).

### Raw benchmarks found

Agent / tool use:

- **AA-Briefcase v1.1 1091**, **GDPval-AA v2.1 1245**, **AutomationBench-AA 21%**.

Reasoning / knowledge:

- **Intelligence Index v4.3.2 29**, **Humanity's Last Exam 39%**, **CritPt 4%**, **AA-Omniscience 1 index point**.
- GPQA and AIME: no verified public score found in the sources used here.

Coding:

- **SciCode 47%**, **Terminal-Bench 4.0 2%**.
- SWE-bench Verified, SWE-bench Pro, and LiveCodeBench: no verified public score found in accessible source text. The vendor card's benchmark image did not resolve, so no values were inferred from it.

Long context:

- **AA-LCR v1.1 83%**, **GDP.pdf 10%**. MRCR/RULER retrieval at maximum context: no verified public score found.

All numerical evaluations above use one [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-minimax-m2). The v4.3.2 index is not directly comparable to older index scales. Terminal-Bench 4.0 is a distinct suite from launch-era terminal evaluations. Reasoning configuration is not specified in the extracted comparison.

### Normalized scores (1–100)

- **Tool use: 63/100.** Useful professional-work performance, but modest automation and newer terminal results.
- **Reasoning: 79/100.** Good HLE and long-context reasoning, with weaker advanced physics and factuality evidence.
- **Context window: 95/100.** Verified million-token capacity and strong AA-LCR; no perfect retrieval claim.
- **Multimodal: 85/100.** Native image and video understanding with text output.
- **Coding: 68/100.** Scientific coding is useful, but the newer terminal suite exposes a substantial limitation; vendor repository scores remain unverified here.
- **Cost efficiency: 96/100.** Very low permanent API rates, including the higher context tier.
- **Overall Score: 78/100.** Half-up mean: (63 + 79 + 95 + 85 + 68)/5 = 78; cost excluded. Best fit is inexpensive long-context multimodal analysis, with task-specific validation for autonomous coding.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
