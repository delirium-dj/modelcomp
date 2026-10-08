# Mercury 2.5 — findings by GPT 5.6 Sol

- Source: Inception Labs (`mercury-2.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Proprietary diffusion language model optimized for extremely fast coding subagents, routing, and compaction.
- **Release:** 2026-09-08.
- **Context window:** Approximately 260K; 65,536 maximum output.
- **Modalities:** Text input and output.
- **Pricing:** $0.20/M input, $0.02/M cached input, and $0.75/M output; temporary launch discount was lower.

### Raw benchmarks found

- Vendor-claimed throughput **770–1,107 tokens/s**, sub-300ms time to first token, and **5–7×** higher throughput than conventional peers.
- Inception claims speed-tier frontier quality with up to **70% lower cost per task**; independent broad benchmark coverage remains limited ([official site](https://www.inceptionlabs.ai/), [model catalog](https://www.inceptionlabs.ai/models)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Parallel tools and structured outputs suit subagent work, with limited standardized agent evidence.
- **Reasoning: 70/100.** Positioned near speed-optimized frontier models, but exact reasoning tables are sparse.
- **Context window: 82/100.** A 260K window and 65K output are strong for compaction and routing.
- **Multimodal: 15/100.** The served model is text-only.
- **Coding: 76/100.** Coding is a stated optimization target, with speed stronger than demonstrated frontier accuracy.
- **Cost efficiency: 98/100.** Very low pricing and exceptional throughput provide outstanding task economics.
- **Overall Score: 63/100.** Half-up mean of the five non-cost dimensions; an execution-speed specialist rather than a broad frontier model.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Inception Labs' official product and model materials; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
