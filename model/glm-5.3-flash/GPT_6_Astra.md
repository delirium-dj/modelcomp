# GLM-5.3-Flash — findings by GPT 6 Astra

- Source: Z.ai / `glm-5.3-flash`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

GLM-5.3-Flash is Z.ai's August 2026 multimodal reasoning model, with 320B total and 18B active parameters. Its hybrid sparse/linear attention architecture supports local deployment, and the published weights use the MIT license. The reliable knowledge cutoff was not verified. [Official model card](https://huggingface.co/zai-org/GLM-5.3-Flash), [independent model record](https://artificialanalysis.ai/models/glm-5-3-flash/).

The hosted Chat Completion API identifier is `glm-5.3-flash`. Documentation specifies 1M context, 128K maximum output, video/image/text/file input, and text output. Thinking cannot be disabled; supported effort levels include low, high, and max, with max recommended for reproduction. Tool calling, streaming, caching, and structured output are supported. The documentation confirms its earlier anonymous preview name, **ox-alpha**. FlashX is a separate serving option and its advertised speed is not assigned to Flash. [Developer documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash).

Current paid API rates per million tokens are **$0.15 input, $0.03 cached input, and $0.50 output**. Temporary free cache storage is not free inference. Coding Plan quotas are subscription terms, not an unlimited free API entitlement. No perpetual free Zen ID was verified. [Official pricing](https://docs.z.ai/guides/overview/pricing).

### Raw benchmarks found

Agent / tool use:

- Vendor **Terminal-Bench 2.1: 84.3%**, using Claude Code 2.1.207 and a six-hour timeout. [Model card](https://huggingface.co/zai-org/GLM-5.3-Flash).
- Independent **GDPval-AA v2.1: 1647**, **AA-Briefcase v1.1: 1454**, **AutomationBench-AA: 60%**.
- Tau3-Banking, ClawProBench, and MCP-Atlas: no verified public score found in the sources used here.

Reasoning / knowledge:

- Independent **Intelligence Index v4.3.2: 42**, **HLE: 40%**, **CritPt: 15%**, **AA-Omniscience: 7 index points**.
- GPQA Diamond and AIME: no verified exact-model public score found in the sources used here.

Coding:

- Vendor **DeepSWE v1.1: 63.4%**; the card specifies mini-swe-agent, 400K context, and a six-hour timeout. [Model card](https://huggingface.co/zai-org/GLM-5.3-Flash).
- Independent **SciCode: 52%**, **Terminal-Bench 4.0: 33%**. This newer terminal suite is not comparable point-for-point with version 2.1.
- SWE-bench Verified, LiveCodeBench, and Vibe Code Bench: no verified public score found in the sources used here.

Long context:

- Independent **AA-LCR v1.1: 80%**, **GDP.pdf: 15%**; no verified public MRCR or RULER retrieval result found.

Independent measurements come from [Artificial Analysis](https://artificialanalysis.ai/models/comparisons/glm-5-3-flash-vs-glm-5-3). Its current index is distinct from the launch-era v4.1.1 index; the numerical difference is not evidence of model regression.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong terminal and work-task evidence, capped by remaining automation failures.
- **Reasoning: 85/100.** Strong HLE, with a lower scientific-reasoning ceiling than frontier leaders.
- **Context window: 95/100.** Verified million-token capacity without near-perfect retrieval evidence.
- **Multimodal: 85/100.** Broad visual/file input with text output; no native audio-output credit.
- **Coding: 87/100.** Strong DeepSWE and terminal results, with harness-specific limits.
- **Cost efficiency: 97/100.** Very low paid token prices; lengthy reasoning can still increase task cost.
- **Overall Score: 88/100.** Half-up mean: (88 + 85 + 95 + 85 + 87)/5 = 88; cost excluded. Strong fit for economical visual coding agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
