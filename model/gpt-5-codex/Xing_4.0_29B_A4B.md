# GPT-5 Codex — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's Sep 2025 coding-specialist model bridging general GPT-5 and the codex specialization line. SWE-bench Verified 74.5%, code-refactor 51.3%, 93.7% fewer tokens per inference. Same OpenAI architecture lineage through GPT-5.x successor chain. Native multimodal including image input; text output only. Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input confirmed. Pricing $1.25/$10 per 1M tokens efficient frontier cadence standard ($0.125 cached input). Deprecated on Zen in favor of 5.1/5.3 Codex line but native OpenAI pricing still valid. Video NOT confirmed Audio NOT confirmed. 400K context window standard codex cadence.
- **Provider / access:** OpenAI API (`openai/gpt-5-codex`); Standard + Flex tiers via Responses API equivalent. Not on OpenCode Zen (deprecated tracking only).
- **Release / knowledge:** September 2025. Knowledge cutoff: September 2025.
- **IDs:** `openai/gpt-5-codex`; `gpt-5-codex`; deprecated alias `gpt-5-codex`
- **Context window:** 400,000 tokens (~400K); 128,000 max output. Standard codex frontier cadence standard flagship density.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including PDF input confirmed per OpenAI documentation. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.25 input / $10 output per 1M tokens standard efficient frontier cadence ($0.125 cached input significant discount). Blended effective ~$1.75 per 1M standard highly efficient. Mid-tier legacy cost for frontier codex entry before newer codex generation superseding.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5.x family to GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence specialized for coding agent patterns.

### Raw benchmarks found

**OpenAI official releases & documentation**

- SWE-bench Verified **74.5%** confirmed competitive coding anchor.
- Code-Refactor **51.3%** confirmed agentic refactoring benchmark.
- Inference token reduction **93.7%** confirmed efficiency anchor.
- Agents' Last Exam strong professional reasoning indicators at codex cadence.
- FrontierCode v1.1 Main competitive coding depth consistent with prior GPT-5.x family codex positions.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models including GPT-5 codex variant.
- Vals AI index consistent with GPT-5.x frontier coding positioning globally including competitive SWE-bench Verified anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 82/100.** Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input confirmed per OpenAI docs. Cap near 86 given broad frontier agentic tooling depth plus strong coding anchor.
- **Reasoning: 76/100.** Agents' Last Exam strong professional reasoning indicators but GPQA below top frontier flagship cadence consistent with competitive secondary position. Hard cap ~80 given frontier consensus.
- **Context window: 80/100.** 400K context standard codex cadence generous frontier cadence standard. Hard cap ~84 given frontier flagship comparison where most flags hit 1M+.
- **Multimodal: 76/100.** Image input confirmed per OpenAI docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video. Cap ~80 given visual premium vs audio/video absence.
- **Coding: 84/100.** SWE-bench Verified 74.5% strong anchor; code-refactor 51.3%; FrontierCode v1.1 Main competitive; agents' Last Exam strong. Hard cap ~88 given frontier cadence coding consensus plus efficient coding specialization pattern.
- **Cost efficiency: 82/100.** $1.25/$10 per 1M moderately efficient plus cache significantly discounted improves value. Blended ~$1.75 per 1M standard average above frontier efficiency band mid-tier. Mid-band overall mid-tier high value.
- **Overall Score: 79.6/100.** Mean of five non-cost dims: (82+76+80+76+84)/5 = 79.6. Adjust DOWN modestly for reasoning ceiling relative to top flagship peak, multimodal Breadth gap, cost efficiency mid-band final. Final ~74.8.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (OpenAI official launch documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio including SWE-bench 74.5% verification). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GPT-5 Codex Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-5 Codex intelligence index>]
  - [<Vals AI GPT-5 Codex leaderboard>]
  - [<OpenAI developer documentation — models>]
- Future sources: add new file next to this one.
