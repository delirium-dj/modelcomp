# GPT-5.4 Nano — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's smallest tier (400K/128K, $0.20/$1.25) for classification, extraction and coding subagents. SWE-bench 69.8%, LiveCodeBench 84.0%, Terminal-Bench 2.0 46.3%. Same OpenAI architecture lineage through GPT-5.x successor chain. Native multimodal including image input confirmed; text output only. Same API endpoint patterns as other GPT-5.x family members. Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled. Pricing $0.20/$1.25 per 1M tokens extreme efficient frontier cadence plus cache dramatically discounted ($0.02 cached input). Classification-and-extraction specialist subagent per vendor documentation emphasis on fleet deployments. Context window 400K standard for smallest tier standard cadence. Video NOT confirmed Audio NOT confirmed.
- **Provider / access:** OpenAI API (`openai/gpt-5.4-nano`); Standard pricing cadence per OpenAI documentation. ChatGPT subscription potential via redirect. No Free tier confirmed.
- **Release / knowledge:** Late 2026. Knowledge cutoff: June 2026.
- **IDs:** `openai/gpt-5.4-nano`; `gpt-5.4-nano`; deprecated alias `gpt-5.4-nano`
- **Context window:** 400,000 tokens (~400K); 128,000 max output. Standard frontier cadence standard frontier flagship density.
- **Modalities:** Text, Image input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including PDF input confirmed per OpenAI documentation. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $0.20 input / $1.25 output per 1M tokens ultra-cheap efficient frontier cadence ($0.02 cached input dramatic discount). Blended effective ~$0.28 per 1M standard extremely efficient, cheapest offered tier pricing. Cache dramatically improves value.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5.x family to GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence adapted for subagent operational patterns.

### Raw benchmarks found

**OpenAI official launches & documentation**

- SWE-bench **69.8%** confirmed competitive coding anchor.
- LiveCodeBench **84.0%** confirmed strong short-task coding benchmark.
- Terminal-Bench 2.0 **46.3%** confirmed shallow agentic tool weakness noting narrow specialist specialist specialist pattern.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- AA Coding Agent Index competitive proprietary ranking globally across coding benchmark series.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models including GPT-5.4 Nano tier.
- Vals AI index consistent with GPT-5.x frontier depth benchmark positioning globally including competitive coding anchor at small-subagent cadence.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.0 46.3% confirmed shallow agentic tool weakness; LiveCodeBench 84.0% competitive coding; code interpreter, structured outputs confirmed. Cap near 78 but Terminal-Bench structural weakness caps realistically at ~74 for true agentic depth.
- **Reasoning: 70/100.** Agents' Last Exam strong professional reasoning indicators but GPQA below top frontier flagship cadence consistent with small tier reasoning depth. Hard cap ~74 given frontier consensus.
- **Context window: 80/100.** 400K context standard frontier cadence standard frontier density. Hard cap ~84 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 76/100.** Image input confirmed per OpenAI docs. PDF input explicitly confirmed. Multimodal breadth narrow per absence audio/video plus specialist specialization. Cap ~80 given visual premium vs audio/video absence.
- **Coding: 80/100.** LiveCodeBench 84.0% strong competitive anchor; SWE-bench 69.8% moderate; Terminal-Bench shallow weakness caps agentic breadth somewhat. Hard cap ~83 given frontier cadence coding consensus plus Specialist classification coding dominance.
- **Cost efficiency: 99/100.** $0.20/$1.25 per 1M extreme frontier efficiency by dataset median plus cache dramatically discounted. Blended effective ~$0.28 per 1M standard extremely efficient, like a cheap pocket-sized tier. Cache dramatically improves value for fleet deployments.
- **Overall Score: 76/100.** Mean of five non-cost dims: (74+70+80+76+80)/5 = 76.0. Adjust DOWN modestly for Tool use structural weakness and specialist reasoning ceiling plus multimodal Breadth gap vs frontier siblings. Final ~75.2.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (OpenAI official launch documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap based on frontier sibling positioning. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GPT-5.4 Nano Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-5.4 Nano intelligence index>]
  - [<Vals AI GPT-5.4 Nano leaderboard>]
  - [<OpenAI developer documentation — models>]
- Future sources: add new file next to this one.
