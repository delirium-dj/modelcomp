# GPT-5.6 Sol — findings by GPT-6.1 Sol

- Source: OpenAI / `gpt-5.6-sol`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** Proprietary flagship reasoning model for professional work and coding. This report distinguishes the single-model Sol route from the multi-agent ultra configuration.
- **Provider / access:** OpenAI Chat Completions and Responses APIs; tools vary by endpoint. Current subscription entitlements and third-party serving equivalence were not verified.
- **Release / knowledge:** Limited preview June 26, 2026; Vals dates general release July 9. Official knowledge cutoff February 16, 2026.
- **IDs:** `gpt-5.6-sol`; `gpt-5.6` aliases Sol; publisher-qualified `openai/gpt-5.6-sol`. No Free Zen route verified.
- **Context window:** Official 1,050,000 total, maximum input 922,000, maximum output 128,000. Total context is not the maximum input allowance.
- **Modalities:** Text/image input and text output. Reasoning efforts none, low, medium (default), high, xhigh and max. Structured outputs and function calls supported. Responses integrations include search, image-generation tool, code interpreter, shell, apply_patch, skills, computer use, MCP and tool search; external image generation is not native model image output.
- **Pricing (as of 2026-11-03):** Official promotional $4 input/$20 output/$0.40 cached input per million, available at least through November 21, 2026—not a guaranteed expiry that day. Above 272K input, the entire request is charged 2x input and 1.5x output rates. Cache writes cost 1.25x uncached input. Tool charges may apply. Historical preview $5/$30 pricing is superseded for current metered promotional use; no free access implied.
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals current Terminal-Bench 4.0 **37.88%**, SRE Bench **30.53% ±2.85**, CUA **8.33%**, Finance Agent v2 **53.76% ±0.85**, Legal Research **48.08% ±3.47**, SkillsBench **54.10% ±4.73**.
- Vals July 9 snapshot Terminal-Bench 2.1 **85.77%**. CodingFleet's August secondary comparison, quoting an xAI benchmark table, reports Terminal-Bench 3.0 **34.6%**, GDPval-AA v2 **1728 Elo**, APEX-Agents **56.7%**, AA-Briefcase **1502 Elo** and Harvey LAB **2.5%** at Sol max. These are source-reported historical comparisons, not CodingFleet reruns or one interchangeable terminal series.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in this source set.

Reasoning / knowledge:

- Vals GPQA **95.20% ±1.07**, MMLU Pro **89.10% ±0.31**, ProofBench v1.1 **83.00% ±3.77**, MysteryMechanism **33.33% ±3.17**, scientific terminal tasks **20.00% ±4.82**.
- Vals July snapshot Index **63.71%**, older ProofBench **77.00%**, older CyberBench **88.14%**. Current CyberBench v1.1 **76.31% ±5.18** is a different benchmark version, not a controlled regression measurement.
- CodingFleet quotes historical AA Intelligence Index **61** at max. Its index version is not established here; no inference that this equals a current AA score. Current Vals header accuracy **58.11%** is not assigned an index name absent from its label.
- Exact HLE, CritPt and hallucination rate: no verified public score found in the retrieved source set.

Coding:

- Vals SWE-bench **96.20% ±0.86**, identified as Verified in its launch update; LiveCodeBench **82.60% ±1.09**, Code Migration **52.92% ±4.35**, Vibe Code v1.1 **80.50% ±3.72**, IOI **91.17% ±4.51**, ProgramBench **1.50% ±0.86** fully resolved.
- CodingFleet's secondary historical table quotes CursorBench 3.2 **67.2%**, DeepSWE 1.1 **73.0%** and FrontierCode 1.1 Extended **60.6%** for Sol max. No independently verified exact SWE-Pro score found here.

Long context / multimodal:

- Official input/output limits above; no exact-route MRCR/RULER retrieval measurement verified in this source set. Million-token capacity does not establish million-token factual retrieval reliability.
- Vals MMMU Pro **88.84% ±0.76**; July Multimodal Index **72.19%**, a dated composite rather than a replacement for the current individual vision benchmark.

### Comparison, conflicts and limitations

Independent Vals supports strong short-answer science, competitive coding and visual reasoning, but harder operational tasks and ProgramBench reveal much lower end-to-end completion. A 96.2% Verified score does not imply equivalent repository migration or autonomous software delivery reliability. Terminal benchmark versions, proof versions and cyber versions must remain separate; no cross-version average or causal regression claim is justified.

The preview announcement describes restricted initial access and older pricing. Current model documentation is authoritative for November rates and API limits. The preview's Cerebras claim of up to 750 tokens/s concerned a limited-access rollout, not a universal measured speed guarantee. Likewise, ultra's multi-agent execution cannot be silently compared to single-agent max. CodingFleet provides a useful additional comparison but repeats a vendor comparison table and historical pricing rather than independently replicating every metric. Tool integrations expand workflows, not the model's native input/output modalities. No fresh latency test or private benchmark was performed.

### Normalized scores (1–100)

Evidence-weighted judgments, not vendor benchmark percentages:

- **Tool use: 86/100.** Strong older terminal and professional workflow evidence, capped by current hard-terminal, SRE and CUA failures.
- **Reasoning: 93/100.** Excellent independent GPQA and proof results, moderated by weaker mechanism discovery and autonomous science.
- **Context window: 95/100.** Large documented total window and output allowance, but smaller maximum input and unverified edge-window retrieval.
- **Multimodal: 87/100.** Strong visual understanding, limited to text/image input and text output rather than native audiovisual generation.
- **Coding: 92/100.** Strong Verified and contest coding with corroborating historical engineering results, capped by migration and low full ProgramBench resolution.
- **Cost efficiency: 76/100.** Promotional rates improve value, but output reasoning, tool charges and whole-request long-context premiums materially increase actual task costs.
- **Overall Score: 91/100.** Half-up mean of 86, 93, 95, 87 and 92 is 90.6; best for supervised professional reasoning and coding with explicit task validation.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful distinct searches followed by official model documentation/preview, independent Vals measurements and CodingFleet's secondary comparison. No peer findings read; normalized scores are interpretations.
- Search queries: `"GPT-5.6 Sol" site:openai.com benchmarks`; `"GPT-5.6 Sol" independent Artificial Analysis Vals review benchmarks`; `"GPT-5.6 Sol" pricing context model limitations`.
- Reference URLs:
  - [Official current specifications, rates and API support](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [Official historical preview and rollout limitations](https://openai.com/index/previewing-gpt-5-6-sol/)
  - [Vals independent measurements and dated launch updates](https://www.vals.ai/models/openai_gpt-5.6-sol)
  - [CodingFleet historical comparison and secondary benchmark table](https://codingfleet.com/blog/grok-4-6-vs-gpt-5-6-sol/)
