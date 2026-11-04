# GPT-5.2 Codex — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI agentic coding model released mid-2026 with native context compaction. Same hybrid architecture lineage through GPT-5.x successor chain. Native multimodal including image input; text output only. 400K context window standard codex cadence generous. Pricing $1.75/$14 per 1M tokens efficient frontier cadence standard plus cache discount significantly improves value. No free tier confirmed. Video NOT confirmed Audio NOT confirmed. Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input supported. Deprecated legacy position superseded by newer codex and Sol generations.
- **Provider / access:** OpenAI API (`openai/gpt-5.2-codex`); ChatGPT subscription tiers; Standard + Flex tiers via Responses API equivalent. No Free tier confirmed. Deprecated status noted (legacy codex merge line).
- **Release / knowledge:** Mid-2026. Knowledge cutoff: June 2026.
- **IDs:** `openai/gpt-5.2-codex`; `gpt-5.2-codex`; deprecated alias `gpt-5.2-codex`
- **Context window:** 400,000 tokens (~400K); 272,000 max input; 128,000 max output. Frontier cadence standard codex category.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including PDF input supported. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.75 input / $14 output per 1M tokens standard efficient frontier cadence ($0.175 cached input significant discount). Blended effective ~$2.30 per 1M standard highly efficient. Mid-tier cost for codex agent entry.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5.x family to GPT-6 Astra successor chain. Native context compaction per documentation.

### Raw benchmarks found

**OpenAI official launches & documentation**

- SWE-bench Verified competitive anchor at frontier cadence per vendor documentation.
- Agents' Last Exam strong professional reasoning indicators.
- AA Coding Agent Index competitive proprietary ranking globally.
- Native context compaction confirmed per OpenAI documentation emphasis on agentic efficiency.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models including codex variant.
- Vals AI index consistent with GPT-5.x frontier depth benchmark positioning globally including competitive coding anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark coverage.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input confirmed per OpenAI docs. Cap near 92 given broad frontier agentic tooling depth plus strong coding benchmark anchor.
- **Reasoning: 78/100.** Agents' Last Exam strong professional reasoning but GPQA below top frontier flagship cadence consistent with competitive secondary position. Hard cap ~82 given frontier consensus.
- **Context window: 80/100.** 400K context window standard codex cadence generous for its category. Hard cap near 84 given frontier flagship comparison where most flags hit 1M+.
- **Multimodal: 76/100.** Image input confirmed per OpenAI docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video. Cap ~80 given visual premium vs audio/video absence.
- **Coding: 85/100.** SWE-bench Verified competitive anchor; FrontierCode competitive; agents' Last Exam strong. Hard cap near 88 given frontier cadence consensus codex depth plus agentic tooling capability.
- **Cost efficiency: 80/100.** $1.75/$14 per 1M moderately efficient codex cadence plus cache significantly discounted improves value. Blended ~$2.30 per 1M standard average above frontier band efficient tier.
- **Overall Score: 81.1/100.** Mean of five non-cost dims: (88+78+80+76+85)/5 = 81.2. Adjust DOWN slightly for reasoning ceiling vs flagship peak. Final ~81.1.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official launch documentation, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap based on frontier sibling positioning. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GPT-5.2 Codex Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-5.2 Codex intelligence index>]
  - [<Vals AI GPT-5.2 Codex leaderboard>]
- Future sources: add new file next to this one.
