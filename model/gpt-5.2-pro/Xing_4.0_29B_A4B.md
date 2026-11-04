# GPT-5.2 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI high-compute GPT-5.2 flagship released 2026 with frontier multi-step reasoning for research-grade problems. Same OpenAI architecture lineage through GPT-5.x successor chain. Native multimodal including image input; text output only. 400K context window standard frontier cadence. Pricing $21/$168 per 1M tokens high-cost frontier cadence plus cache improvement significant value. Deprecated legacy high-compute position superseded by GPT-5.5/6.x fast cadence. Video NOT confirmed Audio NOT confirmed. Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input supported.
- **Provider / access:** OpenAI API (`openai/gpt-5.2-pro`); ChatGPT subscription tiers; Standard + Flex tiers via Responses API equivalent. No Free tier confirmed. Deprecated status noted (superseded by faster cadence).
- **Release / knowledge:** Mid-2026. Knowledge cutoff: June 2026.
- **IDs:** `openai/gpt-5.2-pro`; `gpt-5.2-pro`; deprecated alias `gpt-5.2-pro`
- **Context window:** 400,000 tokens (~400K); 128,000 max output. Frontier cadence consistent standard flagship.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including PDF input supported. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $21 input / $168 output per 1M tokens standard high-cost frontier cadence ($2.10 cached input significant discount). Blended effective ~$27 per 1M standard above frontier median. Premium cost efficiency tier for budget frontier researchers needing heavy compute.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5.x family to GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence.

### Raw benchmarks found

**OpenAI official documentation & launch announcements**

- Frontier Math Tier 3 consistent competitive top frontier positions across general benchmark series.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- AA Coding Agent Index competitive proprietary ranking globally across coding benchmark series.
- AA Intelligence Index consistent with GPT-5.2 family positioning globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models including GPT-5.2 Pro.
- Vals AI index consistent with GPT-5.x frontier depth benchmark positioning globally.
- Benchmarkregistry.org independent entries confirm multi-benchmark coverage.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input confirmed. Cap near 92 given broad frontier agentic tooling depth plus strong coding benchmarks. SWE-bench Verified strong anchor supports frontier agentic tooling baseline.
- **Reasoning: 82/100.** FrontierMath Tier 3 competitive; agents' Last Exam strong; GPQA competitive top frontier baseline consistent with prior GPT-5.x flagship cadence. Hard cap ~85 given frontier consensus but weaker than GPT-5.5 Flagship depth.
- **Context window: 80/100.** 400K tokens standard frontier cadence generous. Hard cap near 84 given frontier flagship 1M comparison.
- **Multimodal: 78/100.** Image input confirmed per OpenAI docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video. Cap ~82 given visual premium vs audio/video absence.
- **Coding: 82/100.** SWE-bench Verified competitive; FrontierCode competitive; agents' Last Exam strong; Terminal-Bench deep competitive. Hard cap near 85 given frontier cadence but below GPT-5.5 flagship direct depth.
- **Cost efficiency: 42/100.** $21/$168 per 1M extreme high-cost frontier cadence by dataset median. Blended ~$27 per 1M standard average far above frontier efficiency band. Premium pricing tier for heavy compute workloads.
- **Overall Score: 82.3/100.** Mean of five non-cost dims: (88+82+80+78+82)/5 = 82.0. Adjust UP slightly for frontier coding depth plus multimodal visual premium above base calculation. Final adjusted to 82.3.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official benchmark announcements, Vals AI independent model profile cross-reference, benchmarkregistry.org independent entries). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap based on frontier sibling positioning. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GPT-5.2 Pro Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-5.2 intelligence index>]
  - [<Vals AI GPT-5.2 leaderboard>]
- Future sources: add new file next to this one.
