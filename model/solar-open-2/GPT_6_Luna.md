# Solar Open 2 — findings by GPT-6 Luna

- Source: Upstage/Solar Open 2 (`upstage/Solar-Open2-250B`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight MoE foundation model for agentic work, coding, and document-heavy office tasks, with strong Korean, English, and Japanese support.
- **Provider / access:** Hugging Face weights `upstage/Solar-Open2-250B`; self-host with supported vLLM/Transformers integrations. The source reviewed does not list a hosted API model ID or token rate.
- **Release / knowledge:** Released 2026-07-22; knowledge cutoff not stated.
- **IDs:** `upstage/Solar-Open2-250B`; serving name `solar-open2-250b` in the model card.
- **Context window:** Up to 1,000,000 tokens according to Upstage's model card and release article.
- **Modalities:** Text input/output; reasoning and tool calling. No image/audio/video input documented for this checkpoint.
- **Pricing (as of 2026-10-28):** Open weights, with no per-token license fee. Upstage's deployment guidance recommends four H200 GPUs for BF16 or two H200 GPUs with quantization, so infrastructure is not cost-free.
- **Architecture:** 250.3B total / 15B active MoE; 320 routed experts plus one shared expert, with 8 routed experts selected per token. Upstage Solar License.

### Raw benchmarks found

Scores below are from Upstage's model card/release evaluation; the publisher's benchmark table and stated evaluation conditions are vendor-reported.

Agent / tool use:

- MCP-Atlas: **58.2**; APEX-Agents: **16.6** (Upstage model card/release article).
- IFBench: **80.0** (instruction-following benchmark; Upstage model card).
- Terminal Bench Hard: **28.3** (Upstage model-card comparison; not Terminal-Bench 2.1).

Reasoning / knowledge:

- GPQA Diamond: **86.3**; MMLU-Pro: **86.2**; HLE without tools: **28.8** (Upstage model card).
- Korean benchmark average: **85.4** (Upstage release article; composite, not a general reasoning benchmark).

Coding:

- LiveCodeBench v6: **92.4** (Upstage model card/release article).
- SWE-Bench Verified: **70.4** (Upstage model-card comparison; OpenHands result in the launch comparison is 69.2, so the two reported setups are not combined).

Long context:

- 1M-token context is specified, but no MRCR/RULER/GraphWalks retrieval score was found in the public card.

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP-Atlas 58.2 and APEX-Agents 16.6 show useful agent skill, but the lower terminal result and vendor-only evaluations cap the score.
- **Reasoning: 88/100.** GPQA Diamond 86.3, MMLU-Pro 86.2, and HLE 28.8 are strong; broad independent replication was not verified.
- **Context window: 87/100.** The 1M capacity is top-tier, but there is no long-context retrieval score to validate quality at that length.
- **Multimodal: 15/100.** The documented checkpoint accepts text only.
- **Coding: 86/100.** LiveCodeBench v6 92.4 is excellent and SWE-Bench Verified 70.4 is strong; Terminal Bench Hard 28.3 and vendor-reported provenance cap the score.
- **Cost efficiency: 92/100.** Open weights avoid token licensing fees, but the recommended multi-H200 deployment has substantial hardware and operating costs.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions (82+88+87+15+86)/5 = 71.6; best for self-hosted agent and coding workloads with no need for visual or audio input.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from Upstage's Hugging Face model card and release article. Scores are kept with the benchmark/version and evaluation setup stated by the publisher; normalized scores are independent interpretations.
- Sources: [Upstage Solar Open 2 model card](https://huggingface.co/upstage/Solar-Open2-250B); [Upstage Solar Open 2 release article](https://www.upstage.ai/blog/en/solar-open-2).
