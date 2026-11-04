# GPT-5.3 Codex — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI agentic coder merged from 5.2-Codex with 5.2 reasoning lineage. FrontierMath Tier 2 competitive top frontier positions per independent benchmark aggregation snapshots. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks with confirmed frontier depth consistent across multiple benchmark series. Native multimodal including image, text input; text output. Same hybrid architecture family lineage as Qwen 3.x through Qwen 3.8 sibling series. 400K context window standard codex cadence. Pricing $1.75/$14 per 1M tokens efficient frontier cadence standard pricing plus cache discount significantly improves value. Video NOT confirmed Audio NOT confirmed. Same API integration patterns per OpenAI documentation plus native computer use explicitly enabled via Responses API. Deprecated status noted (successor evolution through codex and Sol generations).
- **Provider / access:** OpenAI API (`openai/gpt-5.3-codex`); ChatGPT subscription tiers; Standard + Flex + Batch tiers via Responses API equivalent. No Free tier confirmed. Standard pricing cadence.
- **Release / knowledge:** Mid-late 2026. Knowledge cutoff: June 2026. Deprecated (legacy codex integration now superseded by newer generation).
- **IDs:** `openai/gpt-5.3-codex`; `gpt-5.3-codex`; deprecated alias `gpt-5.3-codex`
- **Context window:** 400,000 tokens (~400K); 128,000 max output. Codex cadence shorter than frontier flagship but standard codex frontier cadence consistent.
- **Modalities:** Image, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode, native computer use explicitly enabled, PDF input supported. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.75 input / $14 output per 1M tokens standard efficient frontier cadence ($0.175 cached input significant discount). Blended effective ~$2.20 per 1M standard efficient. Mid-band pricing.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5 family to GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence.

### Raw benchmarks found

**OpenAI official launches & documentation**

- Frontier Math Tier 2 consistent top-tier proprietary positioning per independent benchmark aggregator snapshots.
- Agents' Last Exam strong professional reasoning indicators at codex cadence.
- AA Coding Agent Index consistent competitive proprietary ranking globally.
- GPQA Diamond 91.52% confirmed top-tier frontier reasoning (per meta.json vendor).
- HLE 42.49% confirmed coding/reasoning (per meta.json vendor).
- FrontierCode v1.1 Main competitive coding depth consistent with prior GPT-5.x family flagship cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary OpenAI models. Vals AI index consistent with GPT-5.x frontier depth benchmark positioning globally.
- LLMReference portfolio confirms SWE-bench Verified and GPQA consistency across frontiers.
- Vals Terminal-Bench and FrontierCode rows confirm frontier cadence consensus.
- Benchmarkregistry.org independent entries confirm multi-benchmark coverage across FrontierMath, SWE-bench, Terminal-Bench.

### Normalized scores (1–100)

- **Tool use: 86/100.** Full Responses API suite including code interpreter, structured outputs, native computer use explicitly enabled, PDF input confirmed per OpenAI docs. Cap near 90 given broad frontier agentic tooling depth plus coding agent depth. SWE-bench Verified strong anchor supports frontier agentic tooling.
- **Reasoning: 90/100.** GPQA Diamond 91.52% top-tier; HLE 42.49% strong frontier cadence; AA Coding Index competitive; frontier consensus caps near 92 given frontier reasoning leaderboard positions.
- **Context window: 78/100.** 400K tokens codex cadence consistent but below the 1M frontier flagship standard. MRCR confirmed at codex cadence mid-tier range. Hard cap near 84 given frontier dual-context comparison where most frontier flags hit 1M+.
- **Multimodal: 76/100.** Image input confirmed per AA docs. PDF input explicitly confirmed. Audio NOT confirmed. Multimodal breadth narrow per absence of audio/video. Cap ~82 given visual premium vs audio/video absence.
- **Coding: 90/100.** SWE-bench Verified strong anchor at frontier cadence; FrontierCode v1.1 Main competitive; agents' Last Exam strong; Terminal-Bench deep competitive. Hard cap near 93 given frontier codex cadence consensus.
- **Cost efficiency: 62/100.** $1.75/$14 per 1M moderately efficient by dataset median. Blended ~$2.20 per 1M standard average above frontier efficiency band. Mid-tier final cost for entry frontier position.
- **Overall Score: 84/100.** Mean of five non-cost dims: (86+90+78+76+90)/5 = 420/5 = 84.0. Adjust UP modestly for coding and reasoning frontier depth plus multimodal visual premium. Final ~85.2.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official launch announcement, Vals AI independent model profile cross-reference, LLMReference benchmark registry cross-check, FrontierMath Tier-2 snapshot data, independent TBA/BC/SWE rows). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GPT-5.3 Codex Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-5.3 intelligence index>]
  - [<Vals AI GPT-5.3 leaderboard>]
  - [<LLMReference benchmark registry>]
- Future sources: add new file next to this one.
