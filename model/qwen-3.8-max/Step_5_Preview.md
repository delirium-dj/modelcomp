# Qwen3.8 Max — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`qwen3.8-max`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max (officially "Qwen3.8-Max"). Alibaba's most capable model to date, built on the **Qwen 3.5 architecture** and scaled to **2.4T total / 95B active parameters**.
- **Short description:** The **first Qwen-Max-class model to open-source its weights** (Apache 2.0), combining a 1M-token window with decisively long-horizon agentic design: Alibaba's own showcase is a **10+ day autonomous coding run that self-evolved its own harness**, an RTL-to-layout silicon design flow that cut a GCD/RSA accelerator from 8,298 to 678 gates (81% die-area reduction) over ~500 autonomous turns, and a real 526-team online ML competition won ahead of 458 human teams. Generically strong rather than class-leading on any single frontier reference.
- **Provider / access:** QwenCloud API (slug `qwen3.8-max`, OpenAI- and Anthropic-compatible endpoints), **open weights on Hugging Face and ModelScope under Apache 2.0**, and OpenCode Zen (`qwen3.8-max`) at **$2/$6/$0.25**.
- **Release / knowledge:** API launched **2026-08-03**, with weights following about a week later. Knowledge cutoff not disclosed.
- **IDs:** `qwen3.8-max` (QwenCloud, Zen); `qwen-3.8-max` (Alibaba Cloud Model Studio); `Qwen/Qwen3.8-Max` on Hugging Face.
- **Context window:** **1,000,000 tokens**, per Alibaba's published Codex model-catalog configuration. Max output not published.
- **Modalities:** **multimodal — text and image in, with video and document understanding claimed** (Benchgen). Zero multimodal *benchmark scores* are published, so the coverage claim is unmeasured. Configurable `reasoning_effort` (xhigh / medium / low) with `preserve_thinking` enabled by default.
- **Pricing (as of 2026-11-05):** Zen sells it at **$2 input / $0.25 cached / $6 output per 1M**; llm-stats and CloudPrice list $1.65 / $0.206 / $4.95 from 12 providers. Methodology anchors put $2/$6 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60), and **Apache 2.0 self-hosting is available**, so the escape hatch is real.
- **Architecture:** open-weight MoE, **2.4T total / 95B active**, Qwen 3.5 foundation, Apache 2.0 licence.

### Raw benchmarks found

**Every benchmark below is self-reported by Alibaba's Qwen Team** in the official Qwen3.8-Max launch post (dated 2026-08), "evaluated in-house unless otherwise footnoted" — Benchgen records that third-party comparison scores for other models come from Artificial Analysis or official leaderboards as of 2026-08-03. There is no independent Artificial Analysis, Vals, ARC Prize or Epoch measurement of this model in the sources checked, which is the single largest caveat on this report.

Agent / tool use:

- **Terminal-Bench 2.1: 86.6%** — clears the 85% frontier reference, and per Alibaba's own table ahead of Claude Opus 4.8's 84.6%
- **IFBench: 82.8%** — the strongest instruction-following figure in this batch
- Toolathlon-Verified: **72.5%**; JobBench: 53.4%
- **Automation-Bench: 27.3%**; **Agents' Last Exam: 27.0% pass** (52.4 on its score scale) — both weak
- **τ³-Banking, τ²-bench, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Claw-Eval, MazeBench: no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond: 92.6%** — clears the 90%+ frontier reference, and per Alibaba's table level with Claude Opus 4.8 (92.6%)
- **Humanity's Last Exam: 43.6%** — clears the 40%+ frontier reference, though behind Claude Opus 4.8's 53.3%
- **MRCR v2: 92.9% (256K, 8-needle)** — the best measured long-context retrieval figure in this batch
- **ARC-AGI, Artificial Analysis Intelligence Index, AA-LCR, CritPt, FrontierMath, MMLU-Pro, AA-Omniscience: no verified public score found** — no composite index and no reliability metric exists for this model

Coding:

- **Terminal-Bench 2.1: 86.6%** — clears the 85% reference
- **FrontierSWE: 73.5%** — the strongest independent-harness coding figure here
- SWE-bench Pro: **67.7%**; **DeepSWE 1.1: 56.6%** — well under the 74% reference
- MLS-Bench-Lite: 41.0%; IFBench: 82.8%
- **SWE-bench Verified, LiveCodeBench, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode: no verified public score found**

Long context:

- **MRCR v2: 92.9% (256K, 8-needle)** — the only measured long-context retrieval figure for this model, and the best in this batch
- 1M window confirmed by Alibaba's Codex model-catalog configuration.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 86.6% clears the 85% reference and IFBench 82.8% is the best instruction-following figure in this batch, with Toolathlon-Verified 72.5% and JobBench 53.4% corroborating. Capped hard by what is missing rather than by weak numbers: **τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp and Claw-Eval are all absent**, so two of the three frontier references cannot be checked, and Automation-Bench 27.3% plus ALE 27.0% (pass rate) show the professional-workflow and long-exam layers are weak.
- **Reasoning: 84/100.** GPQA Diamond 92.6% and HLE 43.6% both clear their frontier references, and **MRCR v2 92.9% at 256K is the strongest measured long-context retrieval in this batch**. Capped by structural absence rather than low scores: **no composite intelligence index, no ARC-AGI, no FrontierMath, no CritPt, no MMLU-Pro and no AA-Omniscience**, so four of the methodology's five reasoning reference points are unmeasurable for this ID.
- **Context window: 97/100.** 1M-token tier with **MRCR v2 92.9% at 256K (8-needle)** — the best measured retrieval figure in this batch, above Gemini 3.7 Flash's 97% at only 64K–128K and far above Claude Opus 5.5's unpublished status. Held just under 100 because 92.9% is below the ≥98% threshold, there is no MRCR run at 512K–1M, and no max-output limit is published.
- **Multimodal: 78/100.** Text + image in with video and document understanding *claimed* (Benchgen), which places it in the methodology's 75–90 "+video/PDF in" tier on coverage. Scored at the low end of that tier because **zero multimodal benchmarks are published** — no MMMU-Pro, CharXiv, ZeroBench, ParseBench or ExtractBench — so the claim rests on the vendor's modality statement alone. If Alibaba publishes a visual suite this moves up sharply; if the video claim does not hold, it drops to ~70.
- **Coding: 80/100.** Terminal-Bench 2.1 86.6% and FrontierSWE 73.5% are both strong, and IFBench 82.8% shows unusually good instruction adherence. Capped by DeepSWE 56.6% — over 17 points under the 74% reference — SWE-bench Pro 67.7%, MLS-Bench-Lite 41.0%, and the absence of SWE-bench Verified, LiveCodeBench, AA-SciCode, the AA Coding Index and Vibe Code Bench, i.e. most of the standard coding reference set. Alibaba's autonomous silicon-design case study (8,298 → 678 gates) is a qualitative long-horizon signal but is not a reproducible benchmark.
- **Cost efficiency: 90/100.** $2/$6 per 1M with $0.25 cached reads sits just above the methodology's ~$1.25/$4.25 (≈88) anchor, and the decisive factor is the licence: **Apache 2.0 open weights at Qwen-Max scale (2.4T/95B) make this the only frontier-class model here that can be self-hosted without a licence negotiation**. Held below the 97–99 tier because it is not a $0 route and 2.4T parameters make self-hosting expensive in absolute terms even if permitted.
- **Overall Score: 83/100.** (78 + 84 + 97 + 78 + 80) / 5 = 83.4 → 83. Recommendation: the best choice for **teams that need a Qwen-Max-class model with genuinely open Apache 2.0 weights** and long-horizon terminal/agentic work — IFBench 82.8%, Terminal-Bench 2.1 86.6% and MRCR 92.9% at 256K are all strong, and the silicon-design and 10-day-autonomous-run cases show real long-horizon design intent. Two cautions: **every benchmark here is vendor self-reported with no independent replication**, so treat the 83 as an evidence-quality-limited figure; and DeepSWE 56.6% is well below frontier, so it is not a generalist coding answer.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Alibaba's official Qwen3.8-Max launch post as the primary source (transcribed via Benchgen, which explicitly records that the scores are self-reported by the Qwen Team and evaluated in-house unless footnoted), cross-checked against llm-stats, CloudPrice, metatext and OpenCode Zen for pricing and access. The absence of independent measurement is the report's central caveat and is stated in the model card, the reasoning and coding justifications and this signature rather than being softened: **no Artificial Analysis, Vals AI, ARC Prize or Epoch AI result exists for this model in the sources checked**. Missing benchmarks are named rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba / Qwen — Qwen3.8-Max launch post (official benchmark table)](https://qwen.ai/blog?id=qwen38max)
  - [Benchgen — Qwen3.8 Max model card and benchmark transcription](https://benchgen.com/models/alibaba/qwen3-8-max)
  - [Hugging Face — Qwen/Qwen3.8-Max (open weights, Apache 2.0)](https://huggingface.co/Qwen/Qwen3.8-Max)
  - [llm-stats — Qwen3.8 Max benchmarks, pricing & context window](https://llm-stats.com/models/qwen3.8-max)
  - [CloudPrice — Qwen3.8 Max pricing & specs (12 providers)](https://cloudprice.net/models/alibaba-qwen3-8-max)
  - [metatext — Qwen3.8 Max pricing, context window & specs](https://metatext.io/llm/alibaba-qwen3.8-max)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
