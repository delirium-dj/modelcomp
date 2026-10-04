# Qwen3.5 Plus — findings by GPT 6 Astra

- Source: Alibaba / `qwen3.5-plus`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

Qwen3.5 Plus is Alibaba's hosted multimodal reasoning model. The unversioned `qwen3.5-plus` alias currently points to `qwen3.5-plus-2026-02-15`; the separately listed April 20 snapshot should not automatically inherit the original snapshot's results. International pricing is $0.40 input/$2.40 output per million tokens through 256K input, rising to $0.50/$3 above that threshold. These are paid API rates, not a perpetual free allowance. No free Zen ID was verified. [Official pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing).

The documented window is 1,000,000 tokens, with 65,536 maximum output and separately documented thinking limits. Supported inputs include text, images, and video; output is text. Function calling and structured outputs are supported. API access is through Model Studio's hosted service. Regional and snapshot differences affect caching and search support, so those features should be checked against the selected deployment. [Official model specifications](https://help.aliyun.com/en/model-studio/qwen3-5-plus).

Epoch identifies the original hosted model as released February 16, 2026, with unknown knowledge cutoff. Its hosted 397B-A17B label does not establish that the API weights, context configuration, or benchmark results are identical to the downloadable model. The hosted service is assessed here separately; no open-weight licensing rights are inferred for it. [Epoch model record](https://epoch.ai/models/qwen-3-5-plus-hosted-397b-a17b).

### Raw benchmarks found

Agent / tool use:

- **DeepPlanning v1.1 average accuracy: 37.6 without thinking; 35.9 with thinking**, averaged over four runs. Travel case accuracy is 26.3/25.0 and shopping case accuracy 48.9/46.7 respectively. These are original-model results published in March, not April-snapshot measurements. [Benchmark authors' leaderboard](https://qwenlm.github.io/Qwen-Agent/en/benchmarks/deepplanning/).
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Claw-Eval, and MCP-Atlas: no verified public score found for the hosted ID in the sources used here.

Reasoning / knowledge:

- Epoch reports **GPQA Diamond 85%**, **OTIS Mock AIME 2024–2025 87%**, **LMCA 36.4**, and **ECI 147**. Mock AIME is not the official AIME contest score.
- HLE, CritPt, and AA-Omniscience: no verified public score found for this exact hosted model in the sources used here.

Coding:

- Epoch lists **ALE-Bench 622** and **Text Arena (Coding) 1399**. Arena is a preference rating, not repository-repair accuracy.
- SWE-bench Verified, LiveCodeBench, SciCode, and Vibe Code Bench: no verified public score found for this exact hosted ID in the sources used here.

Reasoning and coding numbers are from the [Epoch model scorecard](https://epoch.ai/models/qwen-3-5-plus-hosted-397b-a17b); they are not substituted from the open-weight sibling.

Long context:

- Capacity is documented, but no verified public MRCR, RULER, or GraphWalks retrieval score found for the exact hosted ID.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong constrained-planning performance; narrow task coverage limits extrapolation.
- **Reasoning: 80/100.** Good GPQA and mock-AIME results, with less evidence for the hardest scientific tasks.
- **Context window: 95/100.** Verified million-token capacity; no evidence supporting a perfect retrieval score.
- **Multimodal: 85/100.** Text, image, and video understanding, without native audio or image output.
- **Coding: 65/100.** Provisional mapping from ALE-Bench and coding preferences; repository-repair evidence is missing.
- **Cost efficiency: 93/100.** Low international token rates, with a modest long-input surcharge.
- **Overall Score: 79/100.** Half-up mean: (72 + 80 + 95 + 85 + 65)/5 = 79.4; cost excluded. Best fit is inexpensive multimodal planning and long-document work.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
