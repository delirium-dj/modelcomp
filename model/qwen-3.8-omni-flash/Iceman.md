# Qwen 3.8 Omni Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.8-omni-flash` (Qwen 3.8 Omni Flash, Alibaba/Qwen) — folder: `model/qwen-3.8-omni-flash`

## Overall
- **Overall Score: 84.4/100.** High-throughput omnimodal Flash model positioned for text/image/audio/video understanding in long contexts at low cost, but I could not retrieve a detailed primary model card/spec page for this exact variant in this pass, so several claims rely on repo metadata and limited provider context.

## Scores
- **Tool use: 80/100.** As a Flash productivity/agent-oriented model in the Qwen 3.8 family it is expected to support API tool-calling patterns in hosted environments, but I did not verify concrete tool-use capabilities/benchmarks for this exact `qwen-3.8-omni-flash` variant from a directly fetched primary source.
- **Reasoning: 79/100.** Repo metadata describes a lightweight omnimodal flash architecture trading some frontier reasoning depth for throughput; no authoritative benchmark table for this exact variant was retrieved in this pass.
- **Context window: 93/100.** Repo metadata states a 1,000,000-token context window with 131,072 max output, suitable for long multimodal/document workflows if accurate for the hosted variant; primary confirmation was limited.
- **Multimodal: 92/100.** Positioned as native omnimodal with text, image, audio, and video inputs and text output, emphasizing continuous/streaming multimodal ingestion; this is a key strength but detailed modality limits were not independently verified from a primary spec page.
- **Coding: 78/100.** Likely capable for general coding/productivity tasks at Flash efficiency, but coding specialization appears secondary to omnimodal throughput and I found no exact-variant coding benchmark evidence in fetched sources.
- **Cost efficiency: 90/100.** Repo metadata indicates low pricing (~$0.15/$0.47 per 1M input/output, ~$0.016 cached), making it attractive for high-volume multimodal processing if available as specified.
- **Overall Score: 81/100.** Promising low-cost long-context omnimodal model for throughput-oriented multimodal workloads, with reduced confidence due to limited directly verifiable primary documentation for this specific variant.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://qwenlm.github.io/
  - https://www.alibabacloud.com/help/en/model-studio/models
  - https://huggingface.co/Qwen

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.8-omni-flash/meta.json
field: officialUrl
proposed: https://www.alibabacloud.com/help/en/model-studio/models
source: https://www.alibabacloud.com/help/en/model-studio/models
```