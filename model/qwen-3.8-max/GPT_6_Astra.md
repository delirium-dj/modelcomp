# Qwen3.8 Max — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.8 Max (0902)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Qwen3.8 Max; September 2 snapshot evaluated.
- **Short description:** Hosted multimodal flagship for coding and agent workflows.
- **Provider / access:** Alibaba Model Studio, OpenAI-compatible Chat Completions.
- **Release / knowledge:** August 3, 2026 family launch; September 2 upgrade; cutoff unverified. [Launch](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen3-8-max).
- **IDs:** `qwen3.8-max`, `qwen3.8-max-0902` / `qwen3.8-max-2026-09-02`; no verified Free Zen ID.
- **Context window:** 1M; 131,072 maximum answer tokens; 262,144 maximum thinking tokens, subject to combined request limits.
- **Modalities:** Text/image/video input, text output; thinking, function calls, structured outputs, caching and search.
- **Pricing (as of 2026-10-04):** Singapore international $2 input / $6 output / $0.25 implicit cache per million; global deployment $1.65/$4.951/$0.206. Explicit cache billing differs. [Official specification](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max).
- **Architecture:** Related open release is 2.4T-total/95B-active MoE under the custom Qwen3.8-Max license. Its [weights card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) explicitly says text-only with compulsory thinking; do not equate that artifact with this multimodal hosted API.

### Raw benchmarks found

Agent / tool use:

- AA 0902: GDPval-AA v2.1 **1663 Elo**, AA-Briefcase v1.1 **1624**, AutomationBench-AA **56%**, Terminal-Bench 4.0 **39%**. [Independent evaluation](https://artificialanalysis.ai/models/comparisons/qwen3-8-27b-vs-qwen3-8-max).
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found for this snapshot in reviewed measurements.

Reasoning / knowledge:

- AA Index v4.3.2 **45**, HLE **43%**, CritPt **18%**, GDP.pdf **23%**, AA-Omniscience **12 index points**; same AA snapshot.
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found.

Coding:

- SciCode **52%**, same AA table.
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and DeepSWE: no verified exact-0902 score found in reviewed measurements.

Long context:

- AA-LCR v1.1 **80%**; not proof of near-perfect million-token retrieval.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval and terminal results support strong agents; automation remains imperfect.
- **Reasoning: 87/100.** HLE and CritPt are strong, with modest Omniscience constraining factual confidence.
- **Context window: 95/100.** Million-token capacity meets the tier; full-window retrieval is unverified.
- **Multimodal: 85/100.** Hosted image/video support is verified, without native audio or nontext output.
- **Coding: 85/100.** SciCode and terminal evidence support capable coding; exact-snapshot repository evidence is missing.
- **Cost efficiency: 82/100.** $2/$6 is competitive per token, but AA's $5.41 per-task measurement shows costly long reasoning runs.
- **Overall Score: 88/100.** Half-up mean of 88, 87, 95, 85 and 85 is 88; suited to long multimodal workflows with cost monitoring.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Hosted and open-weight variants kept distinct.
- Future sources: Add a separate signed findings file alongside this report.
