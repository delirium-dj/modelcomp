# Muse Spark 1.2 — Findings by Kimi K3.1 Pro

> **Source:** Kimi K3.1 Pro · **Date:** 2026-11-07 · **Method:** fresh web research
> **Model researched:** Muse Spark 1.2 (`muse-spark-1.2`) · **Reporter:** Kimi K3.1 Pro (`kimi-k3.1-pro`)

## Model card

| Field | Value |
|-------|-------|
| Model name | Muse Spark 1.2 |
| Provider | Meta |
| Exact Meta API ID | `muse-spark-1.2` |
| Contributor ID | `muse-spark-1.2-contributor` (same model with content-use permission) |
| OpenRouter ID | `meta/muse-spark-1.2` |
| Released | 2026-08-05 |
| Status | Previous proprietary release; superseded by Muse Spark 1.3 |
| Context window | 1,048,576 tokens |
| Max output | 131,072 tokens in Vals AI's recorded configuration |
| Modalities | Text, image, video, audio, and PDF input; text output |
| Reasoning | Adjustable reasoning; independent launch and current records use `xhigh` |
| Standard price | $1.25 input / $0.15 cached input / $4.25 output per million tokens |
| Contributor price | $0.10 input / $0.002 cached input / $0.20 output per million tokens |
| Search grounding | $2.50 per 1,000 queries, plus token charges |
| Standard rate limits | 3,000 RPM and 4,000,000 TPM per team |
| Contributor rate limits | 150 RPM and 3,000,000 TPM per team |

Sources: [Meta model documentation](https://dev.meta.ai/docs/models), [Meta pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits), [Vals AI model record](https://www.vals.ai/models/meta_muse_spark_1_2), and [OpenRouter](https://openrouter.ai/meta/muse-spark-1.2). Artificial Analysis labels Spark 1.2 deprecated because Spark 1.3 is newer; Meta's documentation continues to list the 1.2 API ID.

### Raw benchmarks found

Every result below names Muse Spark 1.2 exactly. Spark 1.1, Spark 1.3, Spark Open, and Muse Wonder results are not substituted.

| Benchmark | Score | Notes |
|-----------|------:|-------|
| Artificial Analysis Intelligence Index | 54 at launch; N/A on current v5.0.1 page | Independent AA evaluation at `xhigh`; index versions are not interchangeable |
| GDPval-AA v2 | 1,631 Elo | Artificial Analysis launch result; Stirrup agent harness |
| GDPval-AA v2 | 1,615 Elo | Meta's later Spark 1.3 comparison table, Spark 1.2 at `xhigh` |
| JobBench | 61.6% | Meta's later comparison; OpenCode harness |
| OSWorld 2.0 | 47.6% partial; 17.9% binary | Meta's later comparison at `xhigh` |
| DeepSearchQA | 85.9% | Meta's later comparison |
| Agentic IF Index | 46.2% | Meta internal instruction-following evaluation |
| AutomationBench | 38.2% | Meta's later comparison; end-to-end business workflows |
| τ³-Banking | 27% | Artificial Analysis launch result |
| AA-Omniscience Index | 22 | AA launch; 38% accuracy, 28% hallucination rate, 67% attempt rate |
| Humanity's Last Exam | 44% | Artificial Analysis launch result |
| CritPt | 18% | Artificial Analysis launch result |
| MMLU Pro | 88.28% ± 0.32 | Vals AI independent record |
| MMMU Pro | 86.13% ± 0.83 | Vals AI independent record |
| ProofBench v1.1 | 43.00% ± 4.98 | Vals AI |
| MRCR 256K–512K | 66.3% | Meta's later comparison at `xhigh` |
| MRCR 512K–1M | 55.5% | Meta's later comparison at `xhigh` |
| SWE-bench Verified | 86.60% ± 1.52 | Vals AI; common mini-SWE-agent, bash-only harness; $0.55 recorded average cost |
| Terminal-Bench 2.1 | 82.9% | Meta launch and later comparison at `xhigh` |
| Terminal-Bench 2.1 | 80% | Artificial Analysis launch result; different evaluation pipeline |
| Terminal-Bench 4.0 | 6.06% ± 1.51 | Vals AI; newer and harder benchmark, not comparable with 2.1 |
| DeepSWE v1.1 | 59.3% | Meta launch result |
| DeepSWE v1.1 | 55.0% | Meta's later Spark 1.3 comparison; preserved separately from launch |
| SWEAtlas CodeBase QnA | 46.2% | Meta's later comparison |
| ProgramBench | 0.50% ± 0.50 | Vals AI; extremely weak exact-model record, not replaced by other coding scores |
| Vibe Code Bench v1.1 | 79.10% ± 3.31 | Vals AI |
| Code Migration | 29.95% ± 4.02 | Vals AI |
| Finance Agent v2 | 60.60% ± 0.28 | Vals AI |
| SkillsBench | 53.04% ± 4.42 | Vals AI |
| SRE Bench | 0.00% | Vals AI exact-model record |

Sources: [Artificial Analysis launch analysis](https://artificialanalysis.ai/articles/muse-spark-1-2), [current AA model page](https://artificialanalysis.ai/models/muse-spark-1-2), [Meta Spark comparison](https://dev.meta.ai/models/muse-spark), [Meta evaluation methodology](https://research.meta.ai/static/muse-spark-1-2-methodology), [Vals AI model record](https://www.vals.ai/models/meta_muse_spark_1_2), [Vals SWE-bench methodology](https://www.vals.ai/benchmarks/swebench), and [JobBench](https://job-bench.github.io/).

### Agentic workflow & tool use

- GDPval-AA v2 1,631 at AA launch and 1,615 in Meta's later table indicate strong professional knowledge work, with a small version/run difference preserved rather than averaged.
- DeepSearchQA 85.9% and JobBench 61.6% are strong, but OSWorld's 17.9% binary score and AutomationBench 38.2% show that complete workflow success is much weaker than partial credit suggests.
- τ³-Banking 27% and SRE Bench 0% are important counterweights to the higher knowledge-work and browsing results.
- AA measured $0.40 per launch Intelligence Index task; input and output token use increased approximately 53% and 36% over Spark 1.1, so per-token affordability does not guarantee flat task cost.

### Reasoning & knowledge

- The launch AA Index was 54 at `xhigh`, with HLE 44% and CritPt 18%; the current v5.0.1 page exposes no public API result and displays N/A.
- Vals AI reports MMLU Pro 88.28% and ProofBench 43.00%, providing independent evidence beyond Meta's tables.
- AA-Omniscience improved to 22 largely through abstention: attempts fell to 67%, hallucinations to 28%, and accuracy to 38%. The higher index must not be read as higher answer accuracy.

### Long-context performance

- Meta verifies a 1,048,576-token window; Vals AI records a 131,072-token output configuration at `xhigh`.
- MRCR is 66.3% at 256K–512K and 55.5% at 512K–1M in Meta's later comparison, showing measurable degradation toward the full window.
- No long-context price premium applies under Meta's current pricing, which improves the economics of large prompts but not retrieval accuracy.

### Multimodal & vision

- The exact API model accepts text, images, video, audio, and PDF documents and returns text.
- Vals AI's MMMU Pro result is 86.13% ± 0.83, a strong independent visual-reasoning measurement.
- Broad input support and strong MMMU-Pro do not establish equivalent performance on every video, speech, or document task; no exact-model composite covering all those modalities was found.

### Coding & software engineering

- Vals AI's common bash-only mini-SWE-agent result is 86.60% ± 1.52 on SWE-bench Verified, with difficulty-band resolution falling to 64% for 1–4-hour tasks and 33% for tasks over four hours.
- Terminal-Bench 2.1 is 82.9% in Meta's table versus 80% at AA; Terminal-Bench 4.0 is only 6.06% at Vals, demonstrating large version and harness sensitivity.
- DeepSWE is 59.3% in the launch account and 55.0% in Meta's later comparison. ProgramBench 0.50% and Code Migration 29.95% prevent treating the strong SWE-bench number as universal coding competence.

### Cost & availability

- Standard pricing is $1.25/$4.25 per million input/output tokens with $0.15 cached input and no long-context premium.
- Contributor mode is much cheaper at $0.10/$0.20 with $0.002 cached input, but grants Meta permission to use submitted content and responses to train future models.
- AA's launch measurement of $0.40 per Intelligence Index task placed Spark 1.2 near the efficiency frontier for its intelligence cluster.
- Current AA operational measurements are 170 output tokens/s and 15.01 seconds to first answer token at `xhigh`.
- Standard and Contributor variants remain listed with separate rate limits; Spark 1.3 is recommended for new work.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong GDPval, DeepSearchQA, and JobBench results show capable agentic work; low OSWorld binary success, τ³-Banking 27%, AutomationBench 38.2%, and SRE Bench 0% reveal substantial workflow gaps.
- **Reasoning: 87/100.** AA Index 54, MMLU Pro 88.28%, HLE 44%, and CritPt 18% support strong but not frontier-leading reasoning; Omniscience gains rely heavily on abstention.
- **Context window: 86/100.** A verified 1M window and 131K output configuration are strong, while MRCR falling from 66.3% to 55.5% across longer ranges limits the score.
- **Multimodal: 88/100.** Text, image, video, audio, and PDF input plus MMMU-Pro 86.13% demonstrate broad capability; text-only output and limited exact-model cross-modal evaluation prevent a higher score.
- **Coding: 88/100.** SWE-bench 86.60% and Terminal-Bench 2.1 around 80–82.9% are strong, but DeepSWE variation, Terminal-Bench 4.0 6.06%, ProgramBench 0.50%, and Code Migration 29.95% show major task dependence.
- **Cost efficiency: 92/100.** Low standard rates, cached input, no long-context premium, a very cheap opt-in Contributor tier, and AA's $0.40 launch task cost make it highly economical despite increased token use.
- **Overall Score: 87.4/100.** Half-up mean of 88, 87, 86, 88, and 88.

## Signature

Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)

### Reference URLs

1. https://dev.meta.ai/docs/models
2. https://dev.meta.ai/docs/pricing-rate-limits
3. https://dev.meta.ai/models/muse-spark
4. https://research.meta.ai/static/muse-spark-1-2-methodology
5. https://artificialanalysis.ai/articles/muse-spark-1-2
6. https://artificialanalysis.ai/models/muse-spark-1-2
7. https://www.vals.ai/models/meta_muse_spark_1_2
8. https://www.vals.ai/benchmarks/swebench
9. https://job-bench.github.io/
10. https://openrouter.ai/meta/muse-spark-1.2
