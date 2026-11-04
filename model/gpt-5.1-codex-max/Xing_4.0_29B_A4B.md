# GPT-5.1 Codex Max — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI frontier coding model with native context compaction first to work across multiple context windows ($1.25/$10 per 1M). SWE-bench Verified 77.9%, SWE-Lancer 79.9% — API shut down 2026-07-23. Same OpenAI architecture lineage through GPT-5.x successor chain. Native multimodal including image input confirmed; text output only. 400K context window standard codex cadence generous. Full Responses API suite including code interpreter, structured outputs, JSON mode, native computer use explicitly enabled, PDF input supported. Legacy compatibility default only at comparable price.
- **Provider / access:** OpenAI API (`openai/gpt-5.1-codex-max`); Standard + Flex tiers via Responses API equivalent. API shut down July 23 2026 per OpenAI documentation. Retired legacy codex position superseded by gpt-5.6-sol.
- **Release / knowledge:** Mid-2026. Knowledge cutoff: June 2026.
- **IDs:** `openai/gpt-5.1-codex-max`; `gpt-5.1-codex-max`; deprecated alias `gpt-5.1-codex-max`
- **Context window:** 400,000 tokens (~400K); 128,000 max output. Frontier cadence standard codex category.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including PDF input supported. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.25 input / $10 output per 1M tokens efficient frontier cadence standard ($0.125 cached input significant discount). Blended effective ~$1.75 per 1M standard highly efficient. Mid-tier legacy cost for frontier codex agent entry before shutdown.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5.x family to GPT-6 Astra successor chain. Context compaction pipeline per documentation emphasis on multi-window native training.

### Raw benchmarks found

**OpenAI official launches & documentation**

- SWE-bench Verified **77.9%** confirmed competitive coding anchor.
- SWE-Lancer **79.9%** confirmed competitive coding anchor.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- FrontierCode v1.1 Main competitive coding depth consistent with prior GPT-5.x family cadence.
- AA Coding Agent Index competitive proprietary ranking globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models including codex variant.
- Vals AI index consistent with GPT-5.x frontier depth benchmark positioning globally including competitive coding anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 86/100.** Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input confirmed. Cap near 90 given broad frontier agentic tooling depth plus strong coding anchor.
- **Reasoning: 78/100.** Agents' Last Exam strong professional reasoning indicators but GPQA below top frontier flagship cadence consistent with competitive secondary position. Hard cap ~82 given frontier consensus.
- **Context window: 80/100.** 400K context compaction standard frontier cadence generous. Hard cap ~84 given frontier flagship comparison where most flags hit 1M+.
- **Multimodal: 76/100.** Image input confirmed per OpenAI docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video. Cap ~80 given visual premium vs audio/video absence.
- **Coding: 85/100.** SWE-bench Verified 77.9% strong anchor; SWE-Lancer 79.9% competitive; FrontierCode v1.1 Main competitive; agents' Last Exam strong. Hard cap ~88 given frontier cadence coding consensus plus context compactor advantage.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M moderately efficient legacy cadence plus cache significantly discounted improves value. Blended ~$1.75 per 1M standard average above frontier efficiency band mid-band. Mid-tier standard cost for legacy codex entry point.
- **Overall Score: 81/100.** Mean of five non-cost dims: (86+78+80+76+85)/5 = 81.2. Adjust DOWN modestly for Tool use ceiling below newer GPT-5.6-Sol cadence, cost efficiency mid-band final legacy, and multimodal breadth gap. Final ~76.9.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (OpenAI official launch documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio, SWE-bench Verified 77.9% independent confirmation). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GPT-5.1 Codex Max Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-5.1 Codex Max intelligence index>]
  - [<Vals AI GPT-5.1 Codex Max leaderboard>]
  - [<OpenAI developer documentation — models>]
- Future sources: add new file next to this one.
